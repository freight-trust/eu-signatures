"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asn1js = require("asn1js");

var asn1js = _interopRequireWildcard(_asn1js);

var _pvutils = require("pvutils");

var _CommitmentTypeQualifier = require("./CommitmentTypeQualifier.js");

var _CommitmentTypeQualifier2 = _interopRequireDefault(_CommitmentTypeQualifier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//**************************************************************************************
// noinspection JSUnusedGlobalSymbols
class CommitmentTypeIndication {
  //**********************************************************************************
  /**
   * Constructor for CommitmentTypeIndication class
   * @param {Object} [parameters={}]
   * @property {Object} [schema] asn1js parsed value
   */
  constructor(parameters = {}) {
    //region Internal properties of the object
    /**
     * @type {string}
     * @description commitmentTypeId
     */
    this.commitmentTypeId = (0, _pvutils.getParametersValue)(parameters, "commitmentTypeId", CommitmentTypeIndication.defaultValues("commitmentTypeId"));

    if ("commitmentTypeQualifier" in parameters)
      /**
       * @type {Array.<CommitmentTypeQualifier>}
       * @description commitmentTypeQualifier
       */
      this.commitmentTypeQualifier = (0, _pvutils.getParametersValue)(parameters, "commitmentTypeQualifier", CommitmentTypeIndication.defaultValues("commitmentTypeQualifier"));
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
      case "commitmentTypeId":
        return "";
      case "commitmentTypeQualifier":
        return [];
      default:
        throw new Error(`Invalid member name for CommitmentTypeIndication class: ${memberName}`);
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
      case "commitmentTypeId":
        return memberValue === "";
      case "commitmentTypeQualifier":
        return memberValue.length === 0;
      default:
        throw new Error(`Invalid member name for CommitmentTypeIndication class: ${memberName}`);
    }
  }
  //**********************************************************************************
  /**
   * Return value of asn1js schema for current class
   * @param {Object} parameters Input parameters for the schema
   * @returns {Object} asn1js schema object
   */
  static schema(parameters = {}) {
    // CommitmentTypeIdentifier ::= OBJECT IDENTIFIER
    //
    // CommitmentTypeIndication ::= SEQUENCE {
    //    commitmentTypeId CommitmentTypeIdentifier,
    //    commitmentTypeQualifier SEQUENCE SIZE (1..MAX) OF CommitmentTypeQualifier OPTIONAL}

    /**
     * @type {Object}
     * @property {string} [blockName]
     * @property {string} [commitmentTypeId]
     * @property {string} [commitmentTypeQualifier]
     */
    const names = (0, _pvutils.getParametersValue)(parameters, "names", {});

    return new asn1js.Sequence({
      name: names.blockName || "",
      value: [new asn1js.ObjectIdentifier({ name: names.commitmentTypeId || "" }), new asn1js.Sequence({
        optional: true,
        value: [new asn1js.Repeated({
          name: names.commitmentTypeQualifier || "",
          value: _CommitmentTypeQualifier2.default.schema()
        })]
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
    const asn1 = asn1js.compareSchema(schema, schema, CommitmentTypeIndication.schema({
      names: {
        commitmentTypeId: "commitmentTypeId",
        commitmentTypeQualifier: "commitmentTypeQualifier"
      }
    }));

    if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for CommitmentTypeIndication");
    //endregion

    //region Get internal properties from parsed schema
    this.commitmentTypeId = asn1.result.commitmentTypeId.valueBlock.toString();

    if ("commitmentTypeQualifier" in asn1.result) this.commitmentTypeQualifier = Array.from(asn1.result.commitmentTypeQualifier, element => new _CommitmentTypeQualifier2.default({ schema: element }));
    //endregion
  }
  //**********************************************************************************
  /**
   * Convert current object to asn1js object and set correct values
   * @returns {Object} asn1js object
   */
  toSchema() {
    //region Create array for output sequence
    const outputArray = [new asn1js.ObjectIdentifier({ value: this.commitmentTypeId })];

    if ("commitmentTypeQualifier" in this) {
      outputArray.push(new asn1js.Sequence({
        value: Array.from(this.commitmentTypeQualifier, element => element.toSchema())
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
    const _object = {
      commitmentTypeId: this.commitmentTypeId
    };

    if ("commitmentTypeQualifier" in this) _object.commitmentTypeQualifier = Array.from(this.commitmentTypeQualifier, element => element.toJSON());

    return _object;
  }
  //**********************************************************************************
}
exports.default = CommitmentTypeIndication; //**************************************************************************************
//# sourceMappingURL=CommitmentTypeIndication.js.map