import crypto from 'sjcl'
import pl from 'payload.js' 

const KEY = "12345"

let privateKey = "12345"
let payload = pl("The quick brown fox jumped over the lazy dog!",privateKey)

let digest = crypto.hash.sha256 
digest = crypto.hash(payload.plain)

console.log("length of digest bit array:",digest.length)

// let digestString = String.fromCharCode(digestBits);

// payload.sig = digestString;
// let cipher = crypto.encrypt(payload.key,payload.plain);

// console.log("PAYLOAD.plain:\t", payload.plain);
// console.log("PAYLOAD.key:\t", payload.key);
// console.log("PAYLOAD.cipher:\t", payload.cipher=cipher);

// console.log("\nPLAIN:\t",payload.plain);
// console.log("DIGEST:\t",payload.sig);
