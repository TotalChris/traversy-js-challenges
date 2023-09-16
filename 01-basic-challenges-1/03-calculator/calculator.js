function calculator(a, b, op) {
    switch(op){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            throw new Error('Please Provide a Valid Operator');
    }
}

module.exports = calculator;
