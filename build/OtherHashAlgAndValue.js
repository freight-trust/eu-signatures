"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _asn1js = require("asn1js");

var asn1js = _interopRequireWildcard(_asn1js);

var _pvutils = require("pvutils");

var _pkijs = require("pkijs");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//**************************************************************************************
class OtherHashAlgAndValue {
	//**********************************************************************************
	/**
  * Constructor for OtherHashAlgAndValue class
  * @param {Object} [parameters={}]
  * @property {Object} [schema] asn1js parsed value
  */
	constructor(parameters = {}) {
		//region Internal properties of the object
		/**
   * @type {AlgorithmIdentifier}
   * @description hashAlgorithm
   */
		this.hashAlgorithm = (0, _pvutils.getParametersValue)(parameters, "hashAlgorithm", OtherHashAlgAndValue.defaultValues("hashAlgorithm"));
		/**
   * @type {OctetString}
   * @description hashValue
   */
		this.hashValue = (0, _pvutils.getParametersValue)(parameters, "hashValue", OtherHashAlgAndValue.defaultValues("hashValue"));
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
			case "hashValue":
				return new asn1js.OctetString();
			default:
				throw new Error(`Invalid member name for OtherHashAlgAndValue class: ${memberName}`);
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
			case "hashValue":
				return memberValue.isEqual(OtherHashAlgAndValue.defaultValues(memberValue));
			default:
				throw new Error(`Invalid member name for OtherHashAlgAndValue class: ${memberName}`);
		}
	}
	//**********************************************************************************
	/**
  * Return value of asn1js schema for current class
  * @param {Object} parameters Input parameters for the schema
  * @returns {Object} asn1js schema object
  */
	static schema(parameters = {}) {
		// OtherHashValue ::= OCTET STRING
		//
		// OtherHashAlgAndValue ::= SEQUENCE {
		//    hashAlgorithm AlgorithmIdentifier,
		//    hashValue OtherHashValue }

		/**
   * @type {Object}
   * @property {string} [blockName]
   * @property {string} [hashAlgorithm]
   * @property {string} [hashValue]
   */
		const names = (0, _pvutils.getParametersValue)(parameters, "names", {});

		return new asn1js.Sequence({
			name: names.blockName || "",
			value: [_pkijs.AlgorithmIdentifier.schema(names.hashAlgorithm || {
				names: {
					blockName: "OtherHashAlgAndValue.hashAlgorithm"
				}
			}), new asn1js.OctetString({ name: names.hashValue || "OtherHashAlgAndValue.hashValue" })]
		});
	}
	//**********************************************************************************
	/**
  * Convert parsed asn1js object into current class
  * @param {!Object} schema
  */
	fromSchema(schema) {
		//region Check the schema is valid
		const asn1 = asn1js.compareSchema(schema, schema, OtherHashAlgAndValue.schema({
			names: {
				hashAlgorithm: {
					names: {
						blockName: "hashAlgorithm"
					}
				},
				hashValue: "hashValue"
			}
		}));

		if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for OtherHashAlgAndValue");
		//endregion

		//region Get internal properties from parsed schema
		this.hashAlgorithm = new _pkijs.AlgorithmIdentifier({ schema: asn1.result.hashAlgorithm });
		this.hashValue = asn1.result.hashValue;
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
			value: [this.hashAlgorithm.toSchema(), this.hashValue]
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
			hashAlgorithm: this.hashAlgorithm.toJSON(),
			hashValue: this.hashValue.toJSON()
		};
	}
	//**********************************************************************************
}
exports.default = OtherHashAlgAndValue; //**************************************************************************************
//# sourceMappingURL=OtherHashAlgAndValue.js.map