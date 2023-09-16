function reverseString(str) {
    let newStr = '';
    for(let i = str.length; i > 0; i--){
        newStr = newStr + str.charAt(i - 1)
    }
    return newStr
}

module.exports = reverseString;
