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
        console.log("even");
    }  else if (a % 2 != 0) {
        console.log("odd");
    }
}

test_printing(print(100), "even");