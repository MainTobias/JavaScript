function extractValue(str){
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (["0","1","2","3","4","5","6","7","8","9","."].includes(str.charAt(i))) {
            newStr += str.charAt(i)
        }
    }
    return Number(newStr)
}
console.log(extractValue("€45"))