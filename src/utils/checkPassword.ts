export function checkPassword(password: string) {
    const exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    const check = exp.test(password)
    return check

}