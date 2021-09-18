import crypto from 'sjcl'

let privateKey = "67890";
let payload = { plain:"The quick brown fox jumped over the lazy dog!", key:privateKey, cipher:""};

console.log("PAYLOAD.plain:\t", payload.plain);
console.log("PAYLOAD.key:\t", payload.key);
console.log("PAYLOAD.cipher:\t", payload.cipher=crypto.encrypt(payload.key,payload.plain));

