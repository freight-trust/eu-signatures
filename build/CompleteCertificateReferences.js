"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pkijs = require("pkijs");

var _CompleteCertificateRefs = require("./CompleteCertificateRefs.js");

var _CompleteCertificateRefs2 = _interopRequireDefault(_CompleteCertificateRefs);

var _OtherCertID = require("./OtherCertID.js");

var _OtherCertID2 = _interopRequireDefault(_OtherCertID);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//**************************************************************************************
// noinspection JSUnusedGlobalSymbols
class CompleteCertificateReferences extends _CompleteCertificateRefs2.default {
  //**********************************************************************************
  /**
   * Constructor for CompleteCertificateReferences class
   * @param {Object} [parameters={}]
   * @property {Object} [schema] asn1js parsed value
   */
  constructor(parameters = {}) {
    super(parameters);
  }
  //**********************************************************************************
  /**
   * Creates "complete-certificate-references" for given CMS Signed Data and signer index
   * @param {SignedData} cmsSigned CMS Signed Data to make attribute for
   * @param {number} signerIndex Index of signer to make attribute for
   * @param {Object} parameters Additional parameters for making attribute
   * @returns {Promise}
   */
  fillValues(cmsSigned, signerIndex, parameters) {
    //region Initial variables
    const _this = this;

    let hashAlgorithm = "SHA-1";
    let signerCertificate; // in_window.org.pkijs.simpl.CERT
    //endregion

    //region Check input parameters
    if ("hashAlgorithm" in parameters) hashAlgorithm = parameters.hashAlgorithm;

    if ("signerCertificate" in parameters) signerCertificate = parameters.signerCertificate;else return Promise.reject('Parameter "signerCertificate" is mandatory for making "complete-certificate-references" attribute');
    //endregion

    //region Put all CMS Signed Data certificates inside "completeCertificateRefs" array
    if ("certificates" in cmsSigned) {
      const promises = [];

      for (let i = 0; i < cmsSigned.certificates.length; i++) {
        //region Check it is not a "signerCertificate"
        if (cmsSigned.certificates[i].issuer.isEqual(signerCertificate.issuer) && cmsSigned.certificates[i].serialNumber.isEqual(signerCertificate.serialNumber)) continue; // Not including "signer certificate" in "complete-certificate-references" attribute
        //endregion

        _this.completeCertificateRefs.push(new _OtherCertID2.default());
        promises.push(_this.completeCertificateRefs[_this.completeCertificateRefs.length - 1].fillValues({
          hashAlgorithm,
          certificate: cmsSigned.certificates[i]
        }));
      }

      return Promise.all(promises);
    }
    //endregion

    return Promise.resolve();
  }
  //**********************************************************************************
  /**
   * Create "complete-certificate-references" CAdES attribute
   * @param {Object} [parameters]
   * @returns {Attribute}
   */
  makeAttribute(parameters = {}) {
    //region Create and return attribute
    return new _pkijs.Attribute({
      type: "1.2.840.113549.1.9.16.2.21",
      values: [this.toSchema()]
    });
    //endregion
  }
  //**********************************************************************************
}
exports.default = CompleteCertificateReferences; //**************************************************************************************
//# sourceMappingURL=CompleteCertificateReferences.js.map