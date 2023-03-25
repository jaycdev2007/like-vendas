import CryptoJS from "crypto-js"

export function decryptoPassword(password:string) {
    return CryptoJS.enc.Base64.parse(password).toString(CryptoJS.enc.Utf8);
}