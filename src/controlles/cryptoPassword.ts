import crypto from "crypto"
    
export async function cryptoPassword(password: string) {
    const algorithm = 'aes-192-cbc';
    const key = `ola mundo`
    crypto.randomFill(new Uint8Array(16),(err,iv) => {
        if (err) throw err;
         const mykey = crypto.createCipheriv(algorithm,key,iv)
         let myStr = mykey.update(password, "utf8", "hex")
         myStr += mykey.final()
         return myStr
 })
}