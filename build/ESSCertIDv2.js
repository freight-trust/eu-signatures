"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _asn1js = require("asn1js");

var asn1js = _interopRequireWildcard(_asn1js);

var _pvutils = require("pvutils");

var _pkijs = require("pkijs");

var _IssuerSerial = require("./IssuerSerial.js");

var _IssuerSerial2 = _interopRequireDefault(_IssuerSerial);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

//**************************************************************************************
class ESSCertIDv2 {
  //**********************************************************************************
  /**
   * Constructor for ESSCertIDv2 class
   * @param {Object} [parameters={}]
   * @property {Object} [schema] asn1js parsed value
   */
  constructor(parameters = {}) {
    //region Internal properties of the object
    if ("hashAlgorithm" in parameters)
      /**
       * @type {AlgorithmIdentifier}
       * @description hashAlgorithm
       */
      this.hashAlgorithm = (0, _pvutils.getParametersValue)(
        parameters,
        "hashAlgorithm",
        ESSCertIDv2.defaultValues("hashAlgorithm")
      );

    /**
     * @type {OctetString}
     * @description certHash
     */
    this.certHash = (0, _pvutils.getParametersValue)(
      parameters,
      "certHash",
      ESSCertIDv2.defaultValues("certHash")
    );
    /**
     * @type {IssuerSerial}
     * @description issuerSerial
     */
    this.issuerSerial = (0, _pvutils.getParametersValue)(
      parameters,
      "issuerSerial",
      ESSCertIDv2.defaultValues("issuerSerial")
    );
    //endregion

    //region If input argument array contains "schema" for this object
    if ("schema" in parameters) this.fromSchema(parameters.schema);
    //endregion
  }
  //**********************************************************************************
  /**
   * Return default values for all class members
   * @param {string} memberName String name for a class member
   */
  static defaultValues(memberName) {
    switch (memberName) {
      case "hashAlgorithm":
        return new _pkijs.AlgorithmIdentifier();
      case "certHash":
        return new asn1js.OctetString();
      case "issuerSerial":
        return new _IssuerSerial2.default();
      default:
        throw new Error(
          `Invalid member name for ESSCertIDv2 class: ${memberName}`
        );
    }
  }
  //**********************************************************************************
  /**
   * Compare values with default values for all class members
   * @param {string} memberName String name for a class member
   * @param {*} memberValue Value to compare with default value
   */
  static compareWithDefault(memberName, memberValue) {
    switch (memberName) {
      case "hashAlgorithm":
      case "certHash":
        return memberValue.isEqual(ESSCertIDv2.defaultValues(memberName));
      case "issuerSerial":
        return (
          _IssuerSerial2.default.compareWithDefault(
            "issuer",
            memberValue.issuer
          ) &&
          _IssuerSerial2.default.compareWithDefault(
            "serialNumber",
            memberValue.serialNumber
          )
        );
      default:
        throw new Error(
          `Invalid member name for ESSCertIDv2 class: ${memberName}`
        );
    }
  }
  //**********************************************************************************
  /**
   * Return value of asn1js schema for current class
   * @param {Object} parameters Input parameters for the schema
   * @returns {Object} asn1js schema object
   */
  static schema(parameters = {}) {
    // Hash ::= OCTET STRING
    //
    // ESSCertIDv2 ::=  SEQUENCE {
    //    hashAlgorithm           AlgorithmIdentifier
    //    DEFAULT {algorithm id-sha256},
    //    certHash                 Hash,
    //    issuerSerial             IssuerSerial OPTIONAL
    //}

    /**
     * @type {Object}
     * @property {string} [blockName]
     * @property {string} [hashAlgorithm]
     * @property {string} [certHash]
     * @property {string} [issuerSerial]
     */
    const names = (0, _pvutils.getParametersValue)(parameters, "names", {});

    return new asn1js.Sequence({
      name: names.blockName || "",
      value: [
        _pkijs.AlgorithmIdentifier.schema(
          names.hashAlgorithm || {
            names: {
              blockName: "ESSCertIDv2.hashAlgorithm",
              optional: true,
            },
          }
        ),
        new asn1js.OctetString({ name: names.certHash || "" }),
        _IssuerSerial2.default.schema(
          names.issuerSerial || {
            names: {
              blockName: "ESSCertIDv2.issuerSerial",
            },
          }
        ),
      ],
    });
  }
  //**********************************************************************************
  /**
   * Convert parsed asn1js object into current class
   * @param {!Object} schema
   */
  fromSchema(schema) {
    //region Check the schema is valid
    const asn1 = asn1js.compareSchema(
      schema,
      schema,
      ESSCertIDv2.schema({
        names: {
          hashAlgorithm: {
            names: {
              blockName: "hashAlgorithm",
            },
          },
          certHash: "certHash",
          issuerSerial: {
            names: {
              blockName: "issuerSerial",
            },
          },
        },
      })
    );

    if (asn1.verified === false)
      throw new Error(
        "Object's schema was not verified against input data for ESSCertIDv2"
      );
    //endregion

    //region Get internal properties from parsed schema
    if ("hashAlgorithm" in asn1.result)
      this.hashAlgorithm = new _pkijs.AlgorithmIdentifier({
        schema: asn1.result.hashAlgorithm,
      });

    this.certHash = asn1.result.serialNumber;
    this.issuerSerial = new _IssuerSerial2.default({
      schema: asn1.result.issuerSerial,
    });
    //endregion
  }
  //**********************************************************************************
  /**
   * Convert current object to asn1js object and set correct values
   * @returns {Object} asn1js object
   */
  toSchema() {
    //region Create array for output sequence
    const outputArray = [];

    if ("hashAlgorithm" in this)
      outputArray.push(this.hashAlgorithm.toSchema());

    outputArray.push(this.certHash);
    outputArray.push(this.issuerSerial.toSchema());
    //endregion

    //region Construct and return new ASN.1 schema for this object
    return new asn1js.Sequence({
      value: outputArray,
    });
    //endregion
  }
  //**********************************************************************************
  /**
   * Convertion for the class to JSON object
   * @returns {Object}
   */
  toJSON() {
    const _object = {};

    if ("hashAlgorithm" in this)
      _object.hashAlgorithm = this.hashAlgorithm.toJSON();

    _object.certHash = this.certHash.toJSON();
    _object.issuerSerial = this.issuerSerial.toJSON();

    return _object;
  }
  //**********************************************************************************
  /**
   * Creates "ESSCertIDv2" for given CMS Signed Data and signer index
   * @param {Object} parameters Additional parameters for making attribute
   * @returns {Promise}
   */
  fillValues(parameters) {
    //region Initial variables
    let _this = this;

    let sequence = Promise.resolve();

    let hashAlgorithm = "SHA-256";

    let certificate;
    //endregion

    //region Check input parameters
    if ("hashAlgorithm" in parameters) hashAlgorithm = parameters.hashAlgorithm;

    if ("certificate" in parameters) certificate = parameters.certificate;
    else
      return Promise.reject(
        'Parameter "certificate" is mandatory for making "ESSCertIDv2"'
      );
    //endregion

    //region Get a "crypto" extension
    const crypto = (0, _pkijs.getCrypto)();
    if (typeof crypto === "undefined")
      return Promise.reject("Unable to create WebCrypto object");
    //endregion

    //region Fill correct value for "hashIndAlgorithm"
    sequence = sequence.then(() => {
      if (hashAlgorithm.toUpperCase() !== "SHA-256") {
        const oid = (0, _pkijs.getOIDByAlgorithm)({ name: hashAlgorithm });
        if (oid === "")
          return Promise.reject(
            `Incorrect hashing algorithm: ${hashAlgorithm}`
          );

        _this.hashAlgorithm = new _pkijs.AlgorithmIdentifier({
          algorithmId: oid,
          algorithmParams: new asn1js.Null(),
        });
      }

      return Promise.resolve();
    });
    //endregion

    //region Create all remaining attributes
    sequence = sequence
      .then(
        () =>
          crypto.digest(
            { name: hashAlgorithm },
            certificate.toSchema().toBER(false)
          ),
        (error) => Promise.reject(error)
      )
      .then(
        (result) => {
          _this.certHash = new asn1js.OctetString({ valueHex: result });
          _this.issuerSerial = new _IssuerSerial2.default({
            issuer: new _pkijs.GeneralNames({
              names: [
                new _pkijs.GeneralName({
                  type: 4,
                  value: certificate.issuer,
                }),
              ],
            }),
            serialNumber: certificate.serialNumber,
          });
        },
        (error) => Promise.reject(error)
      );
    //endregion

    return sequence;
  }
  //**********************************************************************************
}
exports.default = ESSCertIDv2; //**************************************************************************************
//# sourceMappingURL=ESSCertIDv2.js.map
