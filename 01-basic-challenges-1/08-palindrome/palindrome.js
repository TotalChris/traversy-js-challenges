function isPalindrome(str) {
    let cmp = str.split(/[^0-9A-Za-z]/).join('').toLowerCase();
    for(let i = 0; i < Math.ceil(cmp.length/2); i++){
        if(cmp.at(i) !== cmp.at(-i-1)){ return false; }
    }
    return true;
}

module.exports = isPalindrome;
