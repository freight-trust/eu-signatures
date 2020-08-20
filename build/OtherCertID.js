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

var _OtherHashAlgAndValue = require("./OtherHashAlgAndValue.js");

var _OtherHashAlgAndValue2 = _interopRequireDefault(_OtherHashAlgAndValue);

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
class OtherCertID {
  //**********************************************************************************
  /**
   * Constructor for OtherCertID class
   * @param {Object} [parameters={}]
   * @property {Object} [schema] asn1js parsed value
   */
  constructor(parameters = {}) {
    //region Internal properties of the object
    /**
     * @type {OctetString|OtherHashAlgAndValue}
     * @description otherCertHash
     */
    this.otherCertHash = (0, _pvutils.getParametersValue)(
      parameters,
      "otherCertHash",
      OtherCertID.defaultValues("otherCertHash")
    );
    /**
     * @type {IssuerSerial}
     * @description issuerSerial
     */
    this.issuerSerial = (0, _pvutils.getParametersValue)(
      parameters,
      "issuerSerial",
      OtherCertID.defaultValues("issuerSerial")
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
      case "otherCertHash":
        return new asn1js.OctetString();
      case "issuerSerial":
        return new _IssuerSerial2.default();
      default:
        throw new Error(
          `Invalid member name for OtherCertID class: ${memberName}`
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
      case "otherCertHash":
        return memberValue.isEqual(OtherCertID.defaultValues(memberName));
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
          `Invalid member name for OtherCertID class: ${memberName}`
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
    // OtherCertID ::= SEQUENCE {
    //    otherCertHash OtherHash,
    //    issuerSerial IssuerSerial OPTIONAL }

    /**
     * @type {Object}
     * @property {string} [blockName]
     * @property {string} [otherCertHashSimple]
     * @property {string} [otherCertHashObject]
     * @property {string} [issuerSerial]
     */
    const names = (0, _pvutils.getParametersValue)(parameters, "names", {});

    return new asn1js.Sequence({
      name: names.blockName || "",
      value: [
        new asn1js.Choice({
          value: [
            new asn1js.OctetString({
              name: names.otherCertHashSimple || "otherCertHash",
            }),
            _OtherHashAlgAndValue2.default.schema(
              names.otherCertHashObject || {
                names: {
                  blockName: "otherCertHash",
                },
              }
            ),
          ],
        }),
        _IssuerSerial2.default.schema(
          names.issuerSerial || {
            names: {
              blockName: "OtherCertID.issuerSerial",
              optional: true,
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
      OtherCertID.schema({
        names: {
          otherCertHashObject: {
            names: {
              blockName: "otherCertHash",
            },
          },
          otherCertHashSimple: "otherCertHash",
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
        "Object's schema was not verified against input data for OtherCertID"
      );
    //endregion

    //region Get internal properties from parsed schema
    if (asn1.result.otherCertHash instanceof asn1js.OctetString)
      this.otherCertHash = asn1.result.otherCertHash;
    else
      this.otherCertHash = new _OtherHashAlgAndValue2.default({
        schema: asn1.result.otherCertHash,
      });

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

    if (this.otherCertHash instanceof asn1js.OctetString)
      outputArray.push(this.otherCertHash);
    else outputArray.push(this.otherCertHash.toSchema());

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
    return {
      otherCertHash: this.otherCertHash.toJSON(),
      issuerSerial: this.issuerSerial.toJSON(),
    };
  }
  //**********************************************************************************
  /**
   * Creates "OtherCertID" for given CMS Signed Data and signer index
   * @param {Object} parameters Additional parameters for making attribute
   * @returns {Promise}
   */
  fillValues(parameters) {
    //region Initial variables
    const _this = this;

    let sequence = Promise.resolve();

    let hashAlgorithm = "SHA-1";

    let certificate;
    //endregion

    //region Check input parameters
    if ("hashAlgorithm" in parameters) hashAlgorithm = parameters.hashAlgorithm;

    if ("certificate" in parameters) certificate = parameters.certificate;
    // in_window.org.pkijs.simpl.CERT
    else
      return Promise.reject(
        'Parameter "certificate" is mandatory for making "OtherCertID"'
      );
    //endregion

    //region Get a "crypto" extension
    const crypto = (0, _pkijs.getCrypto)();
    if (typeof crypto === "undefined")
      return Promise.reject("Unable to create WebCrypto object");
    //endregion

    //region Fill correct value for "hashIndAlgorithm"
    sequence = sequence.then(() => {
      if (hashAlgorithm.toUpperCase() !== "SHA-1") {
        const oid = (0, _pkijs.getOIDByAlgorithm)({ name: hashAlgorithm });
        if (oid === "")
          return Promise.reject(
            `Incorrect hashing algorithm: ${hashAlgorithm}`
          );

        _this.otherCertHash = new _OtherHashAlgAndValue2.default({
          hashAlgorithm: new _pkijs.AlgorithmIdentifier({
            algorithmId: oid,
            algorithmParams: new asn1js.Null(),
          }),
        });
      } else _this.otherCertHash = new asn1js.OctetString();

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
          if (_this.otherCertHash instanceof asn1js.OctetString)
            _this.otherCertHash.valueBlock.valueHex = result;
          else
            _this.otherCertHash.hashValue = new asn1js.OctetString({
              valueHex: result,
            });

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
exports.default = OtherCertID; //**************************************************************************************
//# sourceMappingURL=OtherCertID.js.map
