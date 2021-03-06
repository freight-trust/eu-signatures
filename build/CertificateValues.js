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
// noinspection JSUnusedGlobalSymbols
class CertificateValues {
	//**********************************************************************************
	/**
  * Constructor for CertificateValues class
  * @param {Object} [parameters={}]
  * @property {Object} [schema] asn1js parsed value
  */
	constructor(parameters = {}) {
		//region Internal properties of the object
		/**
   * @type {Array.<Certificate>}
   * @description certificateValues
   */
		this.certificateValues = (0, _pvutils.getParametersValue)(parameters, "certificateValues", CertificateValues.defaultValues("certificateValues"));
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
			case "certificateValues":
				return [];
			default:
				throw new Error(`Invalid member name for CertificateValues class: ${memberName}`);
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
			case "certificateValues":
				return memberValue.length === 0;
			default:
				throw new Error(`Invalid member name for CertificateValues class: ${memberName}`);
		}
	}
	//**********************************************************************************
	/**
  * Return value of asn1js schema for current class
  * @param {Object} parameters Input parameters for the schema
  * @returns {Object} asn1js schema object
  */
	static schema(parameters = {}) {
		// CertificateValues ::= SEQUENCE OF Certificate

		/**
   * @type {Object}
   * @property {string} [blockName]
   * @property {string} [optional]
   * @property {string} [certificateValues]
   */
		const names = (0, _pvutils.getParametersValue)(parameters, "names", {});

		return new asn1js.Sequence({
			name: names.blockName || "",
			optional: names.optional || false,
			value: [new asn1js.Repeated({
				name: names.certificateValues || "",
				value: _pkijs.Certificate.schema()
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
		const asn1 = asn1js.compareSchema(schema, schema, CertificateValues.schema({
			names: {
				certificateValues: "certificateValues"
			}
		}));

		if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for CertificateValues");
		//endregion

		//region Get internal properties from parsed schema
		this.certificateValues = Array.from(asn1.result.certificateValues, element => new _pkijs.Certificate({ schema: element }));
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
			value: Array.from(this.certificateValues, element => element.toSchema())
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
			certificateValues: Array.from(this.certificateValues, element => element.toJSON())
		};
	}
	//**********************************************************************************
	fillValues(cmsSigned) {
		if ("certificates" in cmsSigned) {
			for (let i = 0; i < cmsSigned.certificates.length; i++) {
				if (cmsSigned.certificates[i] instanceof _pkijs.Certificate) this.certificateValues.push(cmsSigned.certificates[i]);
			}
		}
	}
	//**********************************************************************************
	makeAttribute() {
		return new _pkijs.Attribute({
			type: "1.2.840.113549.1.9.16.2.23",
			values: [this.toSchema()]
		});
	}
	//**********************************************************************************
}
exports.default = CertificateValues; //**************************************************************************************
//# sourceMappingURL=CertificateValues.js.map