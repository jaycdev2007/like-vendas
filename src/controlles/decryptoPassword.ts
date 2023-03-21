import CryptoJS from "crypto-js"

export function encryptoPassword(password:string) {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(password))
}