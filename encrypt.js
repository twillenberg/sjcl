import crypto from 'sjcl'

let prik = "12345"
console.log('Private Key:\t',prik)
let pt = "The quick brown fox jumped over the lazy dog."
console.log('Plaintext:\t',pt)

let ct = crypto.encrypt(prik,pt)
console.log("Ciphertext:\t",ct)

// This is a test comment.