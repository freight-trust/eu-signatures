"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _asn1js = require("asn1js");

var asn1js = _interopRequireWildcard(_asn1js);

var _pvutils = require("pvutils");

var _OtherCertID = require("./OtherCertID.js");

var _OtherCertID2 = _interopRequireDefault(_OtherCertID);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//**************************************************************************************
class CompleteCertificateRefs {
	//**********************************************************************************
	/**
  * Constructor for CompleteCertificateRefs class
  * @param {Object} [parameters={}]
  * @property {Object} [schema] asn1js parsed value
  */
	constructor(parameters = {}) {
		//region Internal properties of the object
		/**
   * @type {Array.<OtherCertID>}
   * @description completeCertificateRefs
   */
		this.completeCertificateRefs = (0, _pvutils.getParametersValue)(parameters, "completeCertificateRefs", CompleteCertificateRefs.defaultValues("completeCertificateRefs"));
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
			case "completeCertificateRefs":
				return [];
			default:
				throw new Error(`Invalid member name for CompleteCertificateRefs class: ${memberName}`);
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
			case "completeCertificateRefs":
				return memberValue.length === 0;
			default:
				throw new Error(`Invalid member name for CompleteCertificateRefs class: ${memberName}`);
		}
	}
	//**********************************************************************************
	/**
  * Return value of asn1js schema for current class
  * @param {Object} parameters Input parameters for the schema
  * @returns {Object} asn1js schema object
  */
	static schema(parameters = {}) {
		// CompleteCertificateRefs ::= SEQUENCE OF OtherCertID

		/**
   * @type {Object}
   * @property {string} [blockName]
   * @property {string} [completeCertificateRefs]
   */
		const names = (0, _pvutils.getParametersValue)(parameters, "names", {});

		return new asn1js.Sequence({
			name: names.blockName || "",
			value: [new asn1js.Repeated({
				name: names.completeCertificateRefs || "",
				value: _OtherCertID2.default.schema()
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
		const asn1 = asn1js.compareSchema(schema, schema, CompleteCertificateRefs.schema({
			names: {
				completeCertificateRefs: "completeCertificateRefs"
			}
		}));

		if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for CompleteCertificateRefs");
		//endregion

		//region Get internal properties from parsed schema
		this.completeCertificateRefs = Array.from(asn1.result.completeCertificateRefs, element => new _OtherCertID2.default({ schema: element }));
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
			value: Array.from(this.completeCertificateRefs, element => element.toSchema())
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
			completeCertificateRefs: Array.from(this.completeCertificateRefs, element => element.toJSON())
		};
	}
	//**********************************************************************************
}
exports.default = CompleteCertificateRefs; //**************************************************************************************
//# sourceMappingURL=CompleteCertificateRefs.js.map