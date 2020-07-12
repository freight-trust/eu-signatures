"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _asn1js = require("asn1js");

var asn1js = _interopRequireWildcard(_asn1js);

var _pvutils = require("pvutils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//**************************************************************************************
// noinspection JSUnusedGlobalSymbols
class ContentReference {
	//**********************************************************************************
	/**
  * Constructor for ContentReference class
  * @param {Object} [parameters={}]
  * @property {Object} [schema] asn1js parsed value
  */
	constructor(parameters = {}) {
		//region Internal properties of the object
		/**
   * @type {string}
   * @description contentType
   */
		this.contentType = (0, _pvutils.getParametersValue)(parameters, "contentType", ContentReference.defaultValues("contentType"));
		/**
   * @type {OctetString}
   * @description signedContentIdentifier
   */
		this.signedContentIdentifier = (0, _pvutils.getParametersValue)(parameters, "signedContentIdentifier", ContentReference.defaultValues("signedContentIdentifier"));
		/**
   * @type {OctetString}
   * @description originatorSignatureValue
   */
		this.originatorSignatureValue = (0, _pvutils.getParametersValue)(parameters, "originatorSignatureValue", ContentReference.defaultValues("originatorSignatureValue"));
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
			case "contentType":
				return "";
			case "signedContentIdentifier":
			case "originatorSignatureValue":
				return new asn1js.OctetString();
			default:
				throw new Error(`Invalid member name for ContentReference class: ${memberName}`);
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
			case "contentType":
				return memberValue === "";
			case "signedContentIdentifier":
			case "originatorSignatureValue":
				return memberValue.isEqual(ContentReference.defaultValues(memberName));
			default:
				throw new Error(`Invalid member name for ContentReference class: ${memberName}`);
		}
	}
	//**********************************************************************************
	/**
  * Return value of asn1js schema for current class
  * @param {Object} parameters Input parameters for the schema
  * @returns {Object} asn1js schema object
  */
	static schema(parameters = {}) {
		// ContentType ::= OBJECT IDENTIFIER
		// ContentIdentifier ::= OCTET STRING
		//
		// ContentReference ::= SEQUENCE {
		//    contentType ContentType,
		//    signedContentIdentifier ContentIdentifier,
		//    originatorSignatureValue OCTET STRING }

		/**
   * @type {Object}
   * @property {string} [blockName]
   * @property {string} [contentType]
   * @property {string} [signedContentIdentifier]
   * @property {string} [originatorSignatureValue]
   */
		const names = (0, _pvutils.getParametersValue)(parameters, "names", {});

		return new asn1js.Sequence({
			name: names.blockName || "",
			value: [new asn1js.ObjectIdentifier({ name: names.contentType || "" }), new asn1js.OctetString({ name: names.signedContentIdentifier || "" }), new asn1js.OctetString({ name: names.originatorSignatureValue || "" })]
		});
	}
	//**********************************************************************************
	/**
  * Convert parsed asn1js object into current class
  * @param {!Object} schema
  */
	fromSchema(schema) {
		//region Check the schema is valid
		const asn1 = asn1js.compareSchema(schema, schema, ContentReference.schema({
			names: {
				contentType: "contentType",
				signedContentIdentifier: "signedContentIdentifier",
				originatorSignatureValue: "originatorSignatureValue"
			}
		}));

		if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for ContentReference");
		//endregion

		//region Get internal properties from parsed schema
		// noinspection JSUnusedGlobalSymbols
		this.contentType = asn1.result.contentType.valueBlock.toString();
		this.signedContentIdentifier = asn1.result.signedContentIdentifier;
		this.originatorSignatureValue = asn1.result.originatorSignatureValue;
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
			value: [new asn1js.ObjectIdentifier({ value: this.contentType }), this.signedContentIdentifier, this.originatorSignatureValue]
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
			contentType: this.contentType,
			signedContentIdentifier: this.signedContentIdentifier.toJSON(),
			originatorSignatureValue: this.originatorSignatureValue.toJSON()
		};
	}
	//**********************************************************************************
}
exports.default = ContentReference; //**************************************************************************************
//# sourceMappingURL=ContentReference.js.map