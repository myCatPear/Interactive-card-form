export const checkForValidCardNumber = (cardNumber:string) => {
    if (cardNumber.length === 0) return false;
    for (let number of cardNumber) {
        let ASCII_CODE = number.charCodeAt(0)
        if (ASCII_CODE < 48 || ASCII_CODE > 57) return false
    }
    return true
}