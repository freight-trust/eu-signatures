"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _asn1js = require("asn1js");

var asn1js = _interopRequireWildcard(_asn1js);

var _pvutils = require("pvutils");

var _pkijs = require("pkijs");

var _OtherRevVals = require("./OtherRevVals.js");

var _OtherRevVals2 = _interopRequireDefault(_OtherRevVals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//**************************************************************************************
// noinspection JSUnusedGlobalSymbols
class RevocationValues {
	//**********************************************************************************
	/**
  * Constructor for RevocationValues class
  * @param {Object} [parameters={}]
  * @property {Object} [schema] asn1js parsed value
  */
	constructor(parameters = {}) {
		//region Internal properties of the object
		if ("crlVals" in parameters)
			/**
    * @type {Array.<CertificateRevocationList>}
    * @description crlVals
    */
			this.crlVals = (0, _pvutils.getParametersValue)(parameters, "crlVals", RevocationValues.defaultValues("crlVals"));

		if ("ocspVals" in parameters)
			/**
    * @type {Array.<BasicOCSPResponse>}
    * @description ocspVals
    */
			this.ocspVals = (0, _pvutils.getParametersValue)(parameters, "ocspVals", RevocationValues.defaultValues("ocspVals"));

		if ("otherRevVals" in parameters)
			/**
    * @type {Array.<OtherRevVals>}
    * @description otherRevVals
    */
			this.otherRevVals = (0, _pvutils.getParametersValue)(parameters, "otherRevVals", RevocationValues.defaultValues("otherRevVals"));
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
			case "crlVals":
			case "ocspVals":
			case "otherRevVals":
				return [];
			default:
				throw new Error(`Invalid member name for RevocationValues class: ${memberName}`);
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
			case "crlVals":
			case "ocspVals":
			case "otherRevVals":
				return memberValue.length === 0;
			default:
				throw new Error(`Invalid member name for RevocationValues class: ${memberName}`);
		}
	}
	//**********************************************************************************
	/**
  * Return value of asn1js schema for current class
  * @param {Object} parameters Input parameters for the schema
  * @returns {Object} asn1js schema object
  */
	static schema(parameters = {}) {
		// RevocationValues ::= SEQUENCE {
		//    crlVals [0] SEQUENCE OF CertificateList OPTIONAL,
		//    ocspVals [1] SEQUENCE OF BasicOCSPResponse OPTIONAL,
		//    otherRevVals [2] OtherRevVals OPTIONAL}

		/**
   * @type {Object}
   * @property {string} [blockName]
   * @property {string} [crlVals]
   * @property {string} [ocspVals]
   * @property {string} [otherRevVals]
   */
		const names = (0, _pvutils.getParametersValue)(parameters, "names", {});

		return new asn1js.Sequence({
			name: names.blockName || "",
			value: [new asn1js.Constructed({
				optional: true,
				idBlock: {
					tagClass: 3, // CONTEXT-SPECIFIC
					tagNumber: 0 // [0]
				},
				value: [new asn1js.Sequence({
					value: [new asn1js.Repeated({
						name: names.crlVals || "",
						value: _pkijs.CertificateRevocationList.schema()
					})]
				})]
			}), new asn1js.Constructed({
				optional: true,
				idBlock: {
					tagClass: 3, // CONTEXT-SPECIFIC
					tagNumber: 1 // [1]
				},
				value: [new asn1js.Sequence({
					value: [new asn1js.Repeated({
						name: names.ocspVals || "",
						value: _pkijs.BasicOCSPResponse.schema()
					})]
				})]
			}), new asn1js.Constructed({
				optional: true,
				idBlock: {
					tagClass: 3, // CONTEXT-SPECIFIC
					tagNumber: 2 // [2]
				},
				value: [_OtherRevVals2.default.schema({
					name: names.otherRevVals || {
						names: {
							blockName: "otherRevVals"
						}
					}
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
		const asn1 = asn1js.compareSchema(schema, schema, RevocationValues.schema({
			names: {
				crlVals: "crlVals",
				ocspVals: "ocspVals",
				otherRevVals: {
					names: {
						blockName: "otherRevVals"
					}
				}
			}
		}));

		if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for RevocationValues");
		//endregion

		//region Get internal properties from parsed schema
		if ("crlVals" in asn1.result) this.crlVals = Array.from(asn1.result.crlVals, element => new _pkijs.CertificateRevocationList({ schema: element }));

		if ("ocspVals" in asn1.result) this.ocspVals = Array.from(asn1.result.ocspVals, element => new _pkijs.BasicOCSPResponse({ schema: element }));

		if ("otherRevVals" in asn1.result) this.otherRevVals = new _OtherRevVals2.default({ schema: asn1.result.otherRevVals });
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

		if ("crlVals" in this) {
			outputArray.push(new asn1js.Constructed({
				idBlock: {
					tagClass: 3, // CONTEXT-SPECIFIC
					tagNumber: 0 // [0]
				},
				value: [new asn1js.Sequence({
					value: Array.from(this.crlVals, element => element.toSchema())
				})]
			}));
		}

		if ("ocspVals" in this) {
			outputArray.push(new asn1js.Constructed({
				idBlock: {
					tagClass: 3, // CONTEXT-SPECIFIC
					tagNumber: 1 // [1]
				},
				value: [new asn1js.Sequence({
					value: Array.from(this.ocspVals, element => element.toSchema())
				})]
			}));
		}

		if ("otherRevVals" in this) {
			outputArray.push(new asn1js.Constructed({
				idBlock: {
					tagClass: 3, // CONTEXT-SPECIFIC
					tagNumber: 2 // [2]
				},
				value: [this.otherRevVals.toSchema()]
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

		if ("crlVals" in this) _object.crlVals = Array.from(this.crlVals, element => element.toJSON());

		if ("ocspVals" in this) _object.ocspVals = Array.from(this.ocspVals, element => element.toJSON());

		if ("otherRevVals" in this) _object.otherRevVals = this.otherRevVals.toJSON();

		return _object;
	}
	//**********************************************************************************
	fillValues(cmsSigned, parameters) {
		//region Initial variables 
		let ocspResponses = [];
		//endregion 

		//region Check input parameters 
		if ("ocspResponses" in parameters) ocspResponses = parameters.ocspResponses;
		//endregion 

		//region Put information about all CRLs 
		if ("crls" in cmsSigned) {
			for (let i = 0; i < cmsSigned.crls.length; i++) {
				if (cmsSigned.crls[i] instanceof _pkijs.CertificateRevocationList) {
					if ("crlVals" in this === false) this.crlVals = [];

					this.crlVals.push(cmsSigned.crls[i]);
				}
			}
		}
		//endregion 

		//region Put information about all OCSP responses 
		if (ocspResponses.length) {
			this.ocspVals = [];

			for (let i = 0; i < ocspResponses.length; i++) {
				const asn1 = asn1js.fromBER(ocspResponses[i]);
				const ocspResponse = new _pkijs.OCSPResponse({ schema: asn1.result });

				const asn1Basic = asn1js.fromBER(ocspResponse.responseBytes.response.valueBlock.valueHex);
				const basicResponse = new _pkijs.BasicOCSPResponse({ schema: asn1Basic.result });

				this.ocspVals.push(basicResponse);
			}
		}
		//endregion 
	}
	//**********************************************************************************
	makeAttribute() {
		//region Create and return attribute
		return new _pkijs.Attribute({
			type: "1.2.840.113549.1.9.16.2.24",
			values: [this.toSchema()]
		});
		//endregion
	}
	//**********************************************************************************
}
exports.default = RevocationValues; //**************************************************************************************
//# sourceMappingURL=RevocationValues.js.map