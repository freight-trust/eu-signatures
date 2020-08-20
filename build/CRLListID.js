"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

var _asn1js = require("asn1js");

var asn1js = _interopRequireWildcard(_asn1js);

var _pvutils = require("pvutils");

var _CrlValidatedID = require("./CrlValidatedID.js");

var _CrlValidatedID2 = _interopRequireDefault(_CrlValidatedID);

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
class CRLListID {
  //**********************************************************************************
  /**
   * Constructor for CRLListID class
   * @param {Object} [parameters={}]
   * @property {Object} [schema] asn1js parsed value
   */
  constructor(parameters = {}) {
    //region Internal properties of the object
    /**
     * @type {Array.<CrlValidatedID>}
     * @description crls
     */
    this.crls = (0, _pvutils.getParametersValue)(
      parameters,
      "crls",
      CRLListID.defaultValues("crls")
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
      case "crls":
        return [];
      default:
        throw new Error(
          `Invalid member name for CRLListID class: ${memberName}`
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
      case "crls":
        return memberValue.length === 0;
      default:
        throw new Error(
          `Invalid member name for CRLListID class: ${memberName}`
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
    // CRLListID ::= SEQUENCE {
    //    crls SEQUENCE OF CrlValidatedID }

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
      value: [
        new asn1js.Repeated({
          name: names.crls || "",
          value: new asn1js.Sequence({
            value: [
              new asn1js.Repeated({
                value: _CrlValidatedID2.default.schema(),
              }),
            ],
          }),
        }),
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
      CRLListID.schema({
        names: {
          crls: "crls",
        },
      })
    );

    if (asn1.verified === false)
      throw new Error(
        "Object's schema was not verified against input data for CRLListID"
      );
    //endregion

    //region Get internal properties from parsed schema
    this.crls = Array.from(
      asn1.result.crls,
      (element) => new _CrlValidatedID2.default({ schema: element })
    );
    //endregion
  }
  //**********************************************************************************
  /**
   * Convert current object to asn1js object and set correct values
   * @returns {Object} asn1js object
   */
  toSchema() {
    //region Construct and return new ASN.1 schema for this object
    return new asn1js.Sequence({
      value: [
        new asn1js.Sequence({
          value: Array.from(this.crls, (element) => element.toSchema()),
        }),
      ],
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
      crls: Array.from(this.crls, (element) => element.toJSON()),
    };
  }
  //**********************************************************************************
}
exports.default = CRLListID; //**************************************************************************************
//# sourceMappingURL=CRLListID.js.map
