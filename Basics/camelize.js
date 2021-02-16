function camelize(str) {
    let camelized = ""
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i-1) === "-" && str.charAt(i) !== "-") {
            camelized += str.charAt(i).toUpperCase()
        } else if (str.charAt(i) !== "-"){
            camelized += str.charAt(i)
        }
    }
    return camelized
}
console.log(camelize("css-properties-are-like-this"))