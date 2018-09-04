function test_printing(result, expected) {
    if (result == expected) {
        console.log("ok");
    }
    else {
        console.log("fail");
    }
}

function print(a) {
    if (a % 3 == 0)  {
        return "Fizz";
    }  else if (a % 5 == 0) {
        return "Buzz";
    } else if ((a % 3 == 0) && (a % 5 == 0)) {
        return "FizzBuzz";
    }

}