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
class CrlIdentifier {
	//**********************************************************************************
	/**
  * Constructor for CrlIdentifier class
  * @param {Object} [parameters={}]
  * @property {Object} [schema] asn1js parsed value
  */
	constructor(parameters = {}) {
		//region Internal properties of the object
		/**
   * @type {RelativeDistinguishedNames}
   * @description crlissuer
   */
		this.crlissuer = (0, _pvutils.getParametersValue)(parameters, "crlissuer", CrlIdentifier.defaultValues("crlissuer"));
		/**
   * @type {Date}
   * @description crlIssuedTime
   */
		this.crlIssuedTime = (0, _pvutils.getParametersValue)(parameters, "crlIssuedTime", CrlIdentifier.defaultValues("crlIssuedTime"));

		if ("crlNumber" in parameters)
			/**
    * @type {Integer}
    * @description crlNumber
    */
			this.crlNumber = (0, _pvutils.getParametersValue)(parameters, "crlNumber", CrlIdentifier.defaultValues("crlNumber"));
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
			case "crlissuer":
				return new _pkijs.RelativeDistinguishedNames();
			case "crlIssuedTime":
				return new Date(0, 0, 0);
			case "crlNumber":
				return new asn1js.Integer();
			default:
				throw new Error(`Invalid member name for CrlIdentifier class: ${memberName}`);
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
			case "crlissuer":
				return _pkijs.RelativeDistinguishedNames.compareWithDefault("typesAndValues", memberValue.typesAndValues) && _pkijs.RelativeDistinguishedNames.compareWithDefault("valueBeforeDecode", memberValue.valueBeforeDecode);
			case "crlIssuedTime":
				return memberValue === CrlIdentifier.defaultValues(memberName);
			case "crlNumber":
				return memberValue.isEqual(CrlIdentifier.defaultValues(memberName));
			default:
				throw new Error(`Invalid member name for CrlIdentifier class: ${memberName}`);
		}
	}
	//**********************************************************************************
	/**
  * Return value of asn1js schema for current class
  * @param {Object} parameters Input parameters for the schema
  * @returns {Object} asn1js schema object
  */
	static schema(parameters = {}) {
		// CrlIdentifier ::= SEQUENCE {
		//    crlissuer Name,
		//    crlIssuedTime UTCTime,
		//    crlNumber INTEGER OPTIONAL }

		/**
   * @type {Object}
   * @property {string} [blockName]
   * @property {string} [crlissuer]
   * @property {string} [crlIssuedTime]
   * @property {string} [crlNumber]
   */
		const names = (0, _pvutils.getParametersValue)(parameters, "names", {});

		return new asn1js.Sequence({
			name: names.blockName || "",
			optional: names.optional || false,
			value: [_pkijs.RelativeDistinguishedNames.schema(names.crlissuer || {
				names: {
					blockName: ""
				}
			}), new asn1js.UTCTime({ name: names.crlIssuedTime || "" }), new asn1js.Integer({
				name: names.crlNumber || "",
				optional: true
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
		const asn1 = asn1js.compareSchema(schema, schema, CrlIdentifier.schema({
			names: {
				crlissuer: {
					names: {
						blockName: "crlissuer"
					}
				},
				crlIssuedTime: "crlIssuedTime",
				crlNumber: "crlNumber"
			}
		}));

		if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for CrlIdentifier");
		//endregion

		//region Get internal properties from parsed schema
		this.crlissuer = new _pkijs.RelativeDistinguishedNames({ schema: asn1.result.crlissuer });
		this.crlIssuedTime = asn1.result.crlIssuedTime.toDate();

		if ("crlNumber" in asn1.result) this.crlNumber = asn1.result.crlNumber;
		//endregion
	}
	//**********************************************************************************
	/**
  * Convert current object to asn1js object and set correct values
  * @returns {Object} asn1js object
  */
	toSchema() {
		//region Create array for output sequence
		const outputArray = [this.crlissuer.toSchema(), new asn1js.UTCTime({ valueDate: this.crlIssuedTime })];

		if ("crlNumber" in this) outputArray.push(this.crlNumber);
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
			crlissuer: this.crlissuer.toJSON(),
			crlIssuedTime: this.crlIssuedTime
		};

		if ("crlNumber" in this) _object.crlNumber = this.crlNumber.toJSON();

		return _object;
	}
	//**********************************************************************************
	/**
  * Creates "CrlValidatedID" for given CRL data
  * @param {Object} parameters Additional parameters for making attribute
  */
	fillValues(parameters) {
		//region Initial variables
		let crl;
		//endregion

		//region Check input parameters
		if ("crl" in parameters) crl = parameters.crl; // in_window.org.pkijs.simpl.CRL
		else throw new Error("Parameter \"crl\" is mandatory for making \"CrlIdentifier\"");
		//endregion

		//region Fill internal fields
		this.crlissuer = crl.issuer;
		this.crlIssuedTime = crl.thisUpdate;
		//endregion
	}
	//**********************************************************************************
}
exports.default = CrlIdentifier; //**************************************************************************************
//# sourceMappingURL=CrlIdentifier.js.map