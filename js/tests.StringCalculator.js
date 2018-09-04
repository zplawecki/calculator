function test_printing(s) {
    if (s.length == 0) {
        return "ok, 0";
    }
    else if ((s.length == 1) || (s.length == 3)) {
        return "ok";
    }
    else {
         return "fail, string is too long";
    }
}

function add(a, b) {
    valueA = parseInt(a);
    valueB = parseInt(b);
    return sum == valueA + valueB;
}