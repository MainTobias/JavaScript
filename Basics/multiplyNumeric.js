function multiplyNumeric(obj, n) {
    let key = Object.keys(obj)
    for (let i = 0; i < key.length; i++) {
        if (typeof(obj[key[i]]) === "number") {
            obj[key[i]] *= n;
        }
    }
}
