export const checkForValidCardName = (string:string) => {
    const arrayOfName = string.trim().split(' ');
    if (string === '') return false;
    if (arrayOfName.length > 2) return false;

    for (let element of arrayOfName) {
        for (let symbol of element) {
            let ASCII_CODE = symbol.toUpperCase().charCodeAt(0)
            if (ASCII_CODE < 65 || ASCII_CODE > 90) return false
        }
    }
    return true
}