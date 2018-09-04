function test_printing(result, expected) {
    if (result == expected) {
        console.log("ok");
    }
    else {
        console.log("fail");
    }
}

function print(a) {
    if (a % 2 == 0) {
        return "even";
    }  else if (a % 2 != 0) {
        return "odd";
    }

}

var a;
for (a = 0; a <= 100; a++) {
    console.log(print(a));
    test_printing(print(a), "even");
}