"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asn1js = require("asn1js");

var asn1js = _interopRequireWildcard(_asn1js);

var _pvutils = require("pvutils");

var _CRLListID = require("./CRLListID.js");

var _CRLListID2 = _interopRequireDefault(_CRLListID);

var _OcspListID = require("./OcspListID.js");

var _OcspListID2 = _interopRequireDefault(_OcspListID);

var _OtherRevRefs = require("./OtherRevRefs.js");

var _OtherRevRefs2 = _interopRequireDefault(_OtherRevRefs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//**************************************************************************************
class CrlOcspRef {
  //**********************************************************************************
  /**
   * Constructor for CrlOcspRef class
   * @param {Object} [parameters={}]
   * @property {Object} [schema] asn1js parsed value
   */
  constructor(parameters = {}) {
    //region Internal properties of the object
    if ("crlids" in parameters)
      /**
       * @type {CRLListID}
       * @description crlids
       */
      this.crlids = (0, _pvutils.getParametersValue)(parameters, "crlids", CrlOcspRef.defaultValues("crlids"));

    if ("ocspids" in parameters)
      /**
       * @type {OcspListID}
       * @description ocspids
       */
      this.ocspids = (0, _pvutils.getParametersValue)(parameters, "ocspids", CrlOcspRef.defaultValues("ocspids"));

    if ("otherRev" in parameters)
      /**
       * @type {OtherRevRefs}
       * @description otherRev
       */
      this.otherRev = (0, _pvutils.getParametersValue)(parameters, "otherRev", CrlOcspRef.defaultValues("otherRev"));
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
      case "crlids":
        return new _CRLListID2.default();
      case "ocspids":
        return new _OcspListID2.default();
      case "otherRev":
        return new _OtherRevRefs2.default();
      default:
        throw new Error(`Invalid member name for CrlOcspRef class: ${memberName}`);
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
      case "crlids":
        return _CRLListID2.default.compareWithDefault("crls", memberValue.crls);
      case "ocspids":
        return _OcspListID2.default.compareWithDefault("ocspResponses", memberValue.ocspResponses);
      case "otherRev":
        return _OtherRevRefs2.default.compareWithDefault("otherRevRefType", memberValue.otherRevRefType) && _OtherRevRefs2.default.compareWithDefault("otherRevRefs", memberValue.otherRevRefs);
      default:
        throw new Error(`Invalid member name for CrlOcspRef class: ${memberName}`);
    }
  }
  //**********************************************************************************
  /**
   * Return value of asn1js schema for current class
   * @param {Object} parameters Input parameters for the schema
   * @returns {Object} asn1js schema object
   */
  static schema(parameters = {}) {
    //CrlOcspRef ::= SEQUENCE {
    //    crlids [0] CRLListID OPTIONAL,
    //    ocspids [1] OcspListID OPTIONAL,
    //    otherRev [2] OtherRevRefs OPTIONAL
    //}

    /**
     * @type {Object}
     * @property {string} [blockName]
     * @property {string} [type]
     * @property {string} [setName]
     * @property {string} [values]
     */
    const names = (0, _pvutils.getParametersValue)(parameters, "names", {});

    return new asn1js.Sequence({
      name: names.blockName || "",
      optional: names.optional || false,
      value: [new asn1js.Constructed({
        name: names.crlids || "",
        optional: true,
        idBlock: {
          tagClass: 3, // CONTEXT-SPECIFIC
          tagNumber: 0 // [0]
        },
        value: [_CRLListID2.default.schema()]
      }), new asn1js.Constructed({
        name: names.ocspids || "",
        optional: true,
        idBlock: {
          tagClass: 3, // CONTEXT-SPECIFIC
          tagNumber: 1 // [1]
        },
        value: [_OcspListID2.default.schema({
          names: {
            blockName: "ocspids.int",
            ocspResponses: "ocspResponses"
          }
        })]
      }), new asn1js.Constructed({
        name: names.otherRev || "",
        optional: true,
        idBlock: {
          tagClass: 3, // CONTEXT-SPECIFIC
          tagNumber: 2 // [2]
        },
        value: [_OtherRevRefs2.default.schema()]
      })]
    });
  }
  //**********************************************************************************
  /**
   * Convert parsed asn1js object into current class
   * @param {!Object} schema
   */
  fromSchema(schema) {
    //region Check the schema is valid
    const asn1 = asn1js.compareSchema(schema, schema, CrlOcspRef.schema({
      names: {
        crlids: "crlids",
        ocspids: "ocspids",
        otherRev: "otherRev"
      }
    }));

    if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for CrlOcspRef");
    //endregion

    //region Get internal properties from parsed schema
    if ("crlids" in asn1.result) this.crlids = new _CRLListID2.default({
      schema: asn1.result.crlids.valueBlock.value[0]
    });

    if ("ocspids" in asn1.result) this.ocspids = new _OcspListID2.default({
      schema: asn1.result.ocspids.valueBlock.value[0]
    });

    if ("otherRev" in asn1.result) this.otherRev = new _OtherRevRefs2.default({
      schema: asn1.result.otherRev.valueBlock.value[0]
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

    if ("crlids" in this) {
      outputArray.push(new asn1js.Constructed({
        idBlock: {
          tagClass: 3, // CONTEXT-SPECIFIC
          tagNumber: 0 // [0]
        },
        value: [this.crlids.toSchema()]
      }));
    }

    if ("ocspids" in this) {
      outputArray.push(new asn1js.Constructed({
        idBlock: {
          tagClass: 3, // CONTEXT-SPECIFIC
          tagNumber: 1 // [1]
        },
        value: [this.ocspids.toSchema()]
      }));
    }

    if ("otherRev" in this) {
      outputArray.push(new asn1js.Constructed({
        idBlock: {
          tagClass: 3, // CONTEXT-SPECIFIC
          tagNumber: 2 // [2]
        },
        value: [this.otherRev.toSchema()]
      }));
    }
    //endregion

    //region Construct and return new ASN.1 schema for this object
    return new asn1js.Sequence({
      value: outputArray
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

    if ("crlids" in this) _object.crlids = this.crlids.toJSON();

    if ("ocspids" in this) _object.ocspids = this.ocspids.toJSON();

    if ("otherRev" in this) _object.otherRev = this.otherRev.toJSON();

    return _object;
  }
  //**********************************************************************************
}
exports.default = CrlOcspRef; //**************************************************************************************
//# sourceMappingURL=CrlOcspRef.js.map