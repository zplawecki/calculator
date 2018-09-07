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
        .split(',')
        .map(n => parseInt(n, 10));
    
    if(numbers.some(n => Number.isNaN(n))) throw new Error('Not a number');
    if(numbers.some(n => n < 0)) throw new Error('Negatives not allowed');

    return numbers.reduce((s, n) => s + n);
}

s = "2,2";
add(s);
