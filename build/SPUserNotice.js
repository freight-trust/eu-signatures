"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _asn1js = require("asn1js");

var asn1js = _interopRequireWildcard(_asn1js);

var _pvutils = require("pvutils");

var _NoticeReference = require("./NoticeReference.js");

var _NoticeReference2 = _interopRequireDefault(_NoticeReference);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//**************************************************************************************
// noinspection JSUnusedGlobalSymbols
class SPUserNotice {
	//**********************************************************************************
	/**
  * Constructor for SPUserNotice class
  * @param {Object} [parameters={}]
  * @property {Object} [schema] asn1js parsed value
  */
	constructor(parameters = {}) {
		//region Internal properties of the object
		if ("noticeRef" in parameters)
			/**
    * @type {NoticeReference}
    * @description noticeRef
    */
			this.noticeRef = (0, _pvutils.getParametersValue)(parameters, "noticeRef", SPUserNotice.defaultValues("noticeRef"));

		if ("explicitText" in parameters) {
			/**
    * @type {string}
    * @description explicitText
    */
			this.explicitText = (0, _pvutils.getParametersValue)(parameters, "explicitText", SPUserNotice.defaultValues("explicitText"));

			this._explicitTextType = -1; // 0 - VISIBLESTRING, 1 - BMPSTRING, 2 - UTF8STRING
		}
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
			case "noticeRef":
				return new _NoticeReference2.default();
			case "explicitText":
				return "";
			default:
				throw new Error(`Invalid member name for SPUserNotice class: ${memberName}`);
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
			case "noticeRef":
				return _NoticeReference2.default.compareWithDefault("organization", memberValue.organization) && _NoticeReference2.default.compareWithDefault("noticeNumbers", memberValue.noticeNumbers);
			case "explicitText":
				return memberValue === "";
			default:
				throw new Error(`Invalid member name for SPUserNotice class: ${memberName}`);
		}
	}
	//**********************************************************************************
	/**
  * Return value of asn1js schema for current class
  * @param {Object} parameters Input parameters for the schema
  * @returns {Object} asn1js schema object
  */
	static schema(parameters = {}) {
		// SPUserNotice ::= SEQUENCE {
		//    noticeRef NoticeReference OPTIONAL,
		//    explicitText DisplayText OPTIONAL}

		/**
   * @type {Object}
   * @property {string} [blockName]
   * @property {string} [sPUserNotice]
   * @property {string} [explicitText]
   */
		const names = (0, _pvutils.getParametersValue)(parameters, "names", {});

		return new asn1js.Sequence({
			name: names.blockName || "",
			value: [_NoticeReference2.default.schema(names.sPUserNotice || {
				names: {
					blockName: "",
					optional: true
				}
			}), new asn1js.Choice({
				value: [new asn1js.VisibleString({ name: names.explicitText || "" }), new asn1js.BmpString({ name: names.explicitText || "" }), new asn1js.Utf8String({ name: names.explicitText || "" })]
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
		const asn1 = asn1js.compareSchema(schema, schema, SPUserNotice.schema({
			names: {
				noticeRef: {
					names: {
						blockName: "noticeRef"
					}
				},
				explicitText: "explicitText"
			}
		}));

		if (asn1.verified === false) throw new Error("Object's schema was not verified against input data for SPUserNotice");
		//endregion

		//region Get internal properties from parsed schema
		if ("noticeRef" in asn1.result) this.noticeRef = new _NoticeReference2.default({ schema: asn1.result.noticeRef });

		if ("explicitText" in asn1.result) {
			this.explicitText = asn1.result.explicitText.valueBlock.value;

			switch (asn1.result.explicitText.idBlock.tagNumber) {
				case 26:
					// VISIBLESTRING
					this._explicitTextType = 0;
					break;
				case 30:
					// BMPSTRING
					this._explicitTextType = 1;
					break;
				case 12:
					// UTF8STRING
					this._explicitTextType = 2;
					break;
				default:
					throw new Error("Object's schema was not verified against input data for SPUserNotice");
			}
		}
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

		if ("noticeRef" in this) outputArray.push(this.noticeRef.toSchema());

		if ("explicitText" in this) {
			switch (this._explicitTextType) {
				case 0:
					outputArray.push(new asn1js.VisibleString({ value: this.explicitText }));
					break;
				case 1:
					outputArray.push(new asn1js.BmpString({ value: this.explicitText }));
					break;
				case 2:
					outputArray.push(new asn1js.Utf8String({ value: this.explicitText }));
					break;
				default:
					throw new Error("The \"explicitText\" property was not correctly initialized");
			}
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

		if ("noticeRef" in this) _object.noticeRef = this.noticeRef.toJSON();

		if ("explicitText" in this) _object.explicitText = this.explicitText;

		return _object;
	}
	//**********************************************************************************
}
exports.default = SPUserNotice; //**************************************************************************************
//# sourceMappingURL=SPUserNotice.js.map