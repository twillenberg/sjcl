import crypto from 'sjcl'

console.log("here");
let privateKey = "67890";
let payload = {plain:"The quick brown fox jumped over the lazy dog!", key:privateKey, cipher:"", sig:""};
let sig = crypto.hash.sha256()
payload.sig = sig.hash(payload.plain);

console.log("PAYLOAD.plain:\t", payload.plain);
console.log("PAYLOAD.key:\t", payload.key);
console.log("PAYLOAD.cipher:\t", payload.cipher=crypto.encrypt(payload.key,payload.plain));
console.log("PLAIN:\t",payload.plain);
console.log("SHA256:\t",payload.sig);
