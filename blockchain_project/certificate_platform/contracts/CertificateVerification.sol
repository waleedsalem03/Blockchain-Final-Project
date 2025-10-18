// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateVerification {
    struct Certificate {
        address issuer;
        string hash;
    }

    mapping(bytes32 => Certificate) public certificates;

    function issueCertificate(bytes32 certId, string memory certHash) public {
        certificates[certId] = Certificate({
            issuer: msg.sender,
            hash: certHash
        });
    }

    function verifyCertificate(bytes32 certId, string memory certHash) public view returns (bool) {
        Certificate storage cert = certificates[certId];
        return keccak256(bytes(cert.hash)) == keccak256(bytes(certHash));
    }
}