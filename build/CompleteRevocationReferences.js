"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pkijs = require("pkijs");

var _CompleteRevocationRefs = require("./CompleteRevocationRefs.js");

var _CompleteRevocationRefs2 = _interopRequireDefault(_CompleteRevocationRefs);

var _CrlValidatedID = require("./CrlValidatedID.js");

var _CrlValidatedID2 = _interopRequireDefault(_CrlValidatedID);

var _OcspResponsesID = require("./OcspResponsesID.js");

var _OcspResponsesID2 = _interopRequireDefault(_OcspResponsesID);

var _CrlOcspRef = require("./CrlOcspRef.js");

var _CrlOcspRef2 = _interopRequireDefault(_CrlOcspRef);

var _CRLListID = require("./CRLListID.js");

var _CRLListID2 = _interopRequireDefault(_CRLListID);

var _OcspListID = require("./OcspListID.js");

var _OcspListID2 = _interopRequireDefault(_OcspListID);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//**************************************************************************************
// noinspection JSUnusedGlobalSymbols
class CompleteRevocationReferences extends _CompleteRevocationRefs2.default {
	//**********************************************************************************
	/**
  * Constructor for CompleteRevocationReferences class
  * @param {Object} [parameters={}]
  * @property {Object} [schema] asn1js parsed value
  */
	constructor(parameters = {}) {
		super(parameters);
	}
	//**********************************************************************************
	/**
  * Creates "complete-revocation-references" for given CMS Signed Data and signer index
  * @param {SignedData} cmsSigned CMS Signed Data to make attribute for
  * @param {number} signerIndex Index of signer to make attribute for
  * @param {Object} parameters Additional parameters for making attribute
  * @returns {Promise}
  */
	fillValues(cmsSigned, signerIndex, parameters) {
		//region Initial variables
		const _this = this;
		let sequence = Promise.resolve();

		let hashAlgorithm = "SHA-1";
		let ocspResponses = []; // Array of OCSP Responses

		const crlRefs = []; // CrlValidatedID;
		const ocspRefs = []; // OcspResponsesID
		//endregion

		//region Check input parameters
		if ("hashAlgorithm" in parameters) hashAlgorithm = parameters.hashAlgorithm;

		if ("ocspResponses" in parameters) ocspResponses = parameters.ocspResponses;
		//endregion

		//region Append references for all CRLs
		if ("crls" in cmsSigned) {
			sequence = sequence.then(() => {
				const promises = [];

				for (let i = 0; i < cmsSigned.crls.length; i++) {
					crlRefs.push(new _CrlValidatedID2.default());
					promises.push(crlRefs[crlRefs.length - 1].fillValues({
						hashAlgorithm,
						crl: cmsSigned.crls[i]
					}));
				}

				return Promise.all(promises);
			}, error => Promise.reject(error));
		}
		//endregion

		//region Append references for all OCSPs
		if (ocspResponses.length) {
			sequence = sequence.then(() => {
				const promises = [];

				for (let i = 0; i < ocspResponses.length; i++) {
					ocspRefs.push(new _OcspResponsesID2.default());
					promises.push(ocspRefs[ocspRefs.length - 1].fillValues({
						hashAlgorithm,
						ocspResponse: ocspResponses[i]
					}));
				}

				return Promise.all(promises);
			}, error => Promise.reject(error));
		}
		//endregion

		//region Push all values "in place"
		return sequence.then(() => {
			if (crlRefs.length || ocspRefs.length) {
				_this.completeRevocationRefs.push(new _CrlOcspRef2.default());

				if (crlRefs.length) {
					_this.completeRevocationRefs[_this.completeRevocationRefs.length - 1].crlids = new _CRLListID2.default({
						crls: crlRefs
					});
				}

				if (ocspRefs.length) {
					_this.completeRevocationRefs[_this.completeRevocationRefs.length - 1].ocspids = new _OcspListID2.default({
						ocspResponses: ocspRefs
					});
				}
			}
		}, error => Promise.reject(error));
		//endregion
	}
	//**********************************************************************************
	/**
  * Create "complete-revocation-references" CAdES attribute
  * @param {Object} [parameters] Additional parameters for making attribute
  * @returns {Attribute}
  */
	makeAttribute(parameters = {}) {
		//region Create and return attribute
		return new _pkijs.Attribute({
			type: "1.2.840.113549.1.9.16.2.22",
			values: [this.toSchema()]
		});
		//endregion
	}
	//**********************************************************************************
}
exports.default = CompleteRevocationReferences; //**************************************************************************************
//# sourceMappingURL=CompleteRevocationReferences.js.map