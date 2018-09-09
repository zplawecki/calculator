function test_string(s) {
    if (s.length == 0) {
        return "ok, string length is 0";
    }
    else if ((s.length == 1) || (s.length == 3)) {
        return "ok";
    }
    else {
         return "fail, string is too long";
    }
}

function add(s) {
    const numbers = s
    //split string into numbers divided by ,
        .split(',')
    //create an array where every element is parsed from string to int in decimal system
        .map(n => parseInt(n, 10));
    //check if any element of array passes test (is illegal number or negative number)
    if(numbers.some(n => Number.isNaN(n))) throw new Error('Not a number');
    if(numbers.some(n => n < 0)) throw new Error('Negatives not allowed');
    //reduces the array to single value, here - the sum of elements
    return numbers.reduce((s, n) => s + n);
}

s = "2,5";
console.log(test_string(s));
console.log(add(s));
