"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pkijs = require("pkijs");

var _ATSHashIndex = require("./ATSHashIndex.js");

var _ATSHashIndex2 = _interopRequireDefault(_ATSHashIndex);

var _ArchiveTimeStampV = require("./ArchiveTimeStampV3.js");

var _ArchiveTimeStampV2 = _interopRequireDefault(_ArchiveTimeStampV);

var _SignatureTimeStamp = require("./SignatureTimeStamp.js");

var _SignatureTimeStamp2 = _interopRequireDefault(_SignatureTimeStamp);

var _CompleteCertificateReferences = require("./CompleteCertificateReferences.js");

var _CompleteCertificateReferences2 = _interopRequireDefault(_CompleteCertificateReferences);

var _CompleteRevocationReferences = require("./CompleteRevocationReferences.js");

var _CompleteRevocationReferences2 = _interopRequireDefault(_CompleteRevocationReferences);

var _CAdESCTimestamp = require("./CAdESCTimestamp.js");

var _CAdESCTimestamp2 = _interopRequireDefault(_CAdESCTimestamp);

var _CertificateValues = require("./CertificateValues.js");

var _CertificateValues2 = _interopRequireDefault(_CertificateValues);

var _RevocationValues = require("./RevocationValues.js");

var _RevocationValues2 = _interopRequireDefault(_RevocationValues);

var _RevocationInfoArchival = require("./RevocationInfoArchival.js");

var _RevocationInfoArchival2 = _interopRequireDefault(_RevocationInfoArchival);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//**************************************************************************************
class AttributeCAdES extends _pkijs.Attribute {
	//**********************************************************************************
	/**
  * Constructor for SignedAndUnsignedAttributesCAdES class
  * @param {Object} [parameters={}]
  * @property {Object} [schema] asn1js parsed value
  */
	constructor(parameters) {
		super(parameters);

		this.initializeParsedValues();
	}
	//**********************************************************************************
	/**
  * Convert parsed asn1js object into current class
  * @param {!Object} schema
  */
	fromSchema(schema) {
		super.fromSchema(schema);

		this.initializeParsedValues();
	}
	//**********************************************************************************
	initializeParsedValues() {
		switch (this.type) {
			case "0.4.0.1733.2.5":
				// ATSHashIndex
				this.parsedValue = new _ATSHashIndex2.default({ schema: this.values[0] });
				break;
			case "0.4.0.1733.2.4":
				// archive-time-stamp-v3
				this.parsedValue = new _ArchiveTimeStampV2.default({ schema: this.values[0] });
				break;
			case "1.2.840.113549.1.9.16.2.14":
				// signature-time-stamp
				this.parsedValue = new _SignatureTimeStamp2.default({ schema: this.values[0] });
				break;
			case "1.2.840.113549.1.9.16.2.21":
				// complete-certificate-references
				this.parsedValue = new _CompleteCertificateReferences2.default({ schema: this.values[0] });
				break;
			case "1.2.840.113549.1.9.16.2.22":
				// complete-revocation-references
				this.parsedValue = new _CompleteRevocationReferences2.default({ schema: this.values[0] });
				break;
			case "1.2.840.113549.1.9.16.2.25":
				// CAdES-C-Timestamp
				this.parsedValue = new _CAdESCTimestamp2.default({ schema: this.values[0] });
				break;
			case "1.2.840.113549.1.9.16.2.23":
				// certificate-values
				this.parsedValue = new _CertificateValues2.default({ schema: this.values[0] });
				break;
			case "1.2.840.113549.1.9.16.2.24":
				// revocation-values
				this.parsedValue = new _RevocationValues2.default({ schema: this.values[0] });
				break;
			case "1.2.840.113583.1.1.8":
				// Adobe "RevocationInfoArchival"
				this.parsedValue = new _RevocationInfoArchival2.default({ schema: this.values[0] });
				break;
			default:
		}
	}
	//**********************************************************************************
}
exports.default = AttributeCAdES; //**************************************************************************************
//# sourceMappingURL=AttributeCAdES.js.map