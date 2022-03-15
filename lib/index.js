var oids = {
    // ETSI EN 319 411-2
    "id-etsi":			"0.4.0",
    "id-etsi-qcp":		"0.4.0.194112",		// qualified-certificate-policies
    "id-etsi-qcp-pi":		"0.4.0.194112.1",	// policy-identifiers
    "qcpNatural":		"0.4.0.194112.1.0",	// QCP-n:CP for EU QC to natural persons
    "qcpLegal":			"0.4.0.194112.1.1",	// QCP-l:CP for EU QC to legal persons
    "qcpNaturalQSCD":		"0.4.0.194112.1.2",	// QCP-n-qscd:CP for EU QC to natural persons wQSCD
    "qcpLegalQSCD":		"0.4.0.194112.1.3",	// QCP-l-qscd:CP for EU QC to legal persons wQSCD
    "qcpWeb":			"0.4.0.194112.1.4",	// QCP-w:CP for EU qualified website authentication certs

    // ETSI EN 319 412-1 Certificate Profiles; Part1
    "id-etsi-certprofile":		"0.4.0.194121",		// id-cert-profile
    "id-etsi-certprofile":		"0.4.0.194121.1",	// id-etsi-qcs-semantics-identifiers
    "qcsSemanticsIdNatural":		"0.4.0.194121.1.1",
    "qcsSemanticsIdLegal":		"0.4.0.194121.1.2",
    "qcsSemanticsIdeIDASNatural":	"0.4.0.194121.1.2",
    "qcsSemanticsIdeIDASLegal":		"0.4.0.194121.1.2",
    "id-etsi-mod":			"0.4.0.194121.0",
    "id-etsi-mod-validityAssuredV1":	"0.4.0.194121.0.1.0",
    "id-etsi-ext-valassured-ST-certs":	"0.4.0.194121.2.1",

    // ETSI TS 101 862 QC profile
    "id-etsi-qcProfile":	"0.4.0.1862",
    "id-etsi-qcProfile-qcs":	"0.4.0.1862.1",
    "etsiQcsQcCompliance":	"0.4.0.1862.1.1",
    "etsiQcsQcLimitValue":	"0.4.0.1862.1.2",
    "etsiQcsRetentionPeriod":	"0.4.0.1862.1.3",

    // ETSI EN 319 412-5 QC Statements
    "etsiQcsQcSSCD":		"0.4.0.1862.1.4",
    "etsiQcsQcPDS":		"0.4.0.1862.1.5",
    "etsiQcsQcType":		"0.4.0.1862.1.6",
    "etsiQcsQcTypeEsign":	"0.4.0.1862.1.6.1",
    "etsiQcsQcTypeEseal":	"0.4.0.1862.1.6.2",
    "etsiQcsQcTypeWeb":		"0.4.0.1862.1.6.3",
    "etsiQcsQcCClegislation":	"0.4.0.1862.1.7",

    "qcStatements":		"1.3.6.1.5.5.7.1.3",	// RFC 3379
    "id-qcs-pkixQCSyntaxV2":	"1.3.6.1.5.5.7.11.2",	// RFC 3379

};

function addon(jsrsasign) {
    jsrsasign.KJUR.asn1.x509.OID.registerOIDs(oids);
}

exports.addon = addon;
