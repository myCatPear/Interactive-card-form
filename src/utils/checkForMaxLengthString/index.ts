export const checkForMaxLengthString = (string:string, maxLength:number) => {
    if (string.length <= maxLength - 1) return true;
    return false;
}