function test_printing(result, expected) {
    if (result == expected) {
        return "ok";
    }
    else {
         return "fail";
    }
}

function print(a) {
    if ((a % 3 == 0) && (a % 5 != 0))  {
        return "Fizz";
    }  else if ((a % 5 == 0) && (a % 3 != 0)){
        return "Buzz";
    } else if ((a % 3 == 0) && (a % 5 == 0)) {
        return "FizzBuzz";
    } else {
        return a;
    }
}

// var a;
// for (a = 1; a <= 100; a++) {
//     console.log(print(a));
//     test_printing(print(a), "FizzBuzz");
// }

console.log(test_printing(print(1), "1"));
console.log(test_printing(print(3), "Fizz"));
console.log(test_printing(print(5), "Buzz"));
console.log(test_printing(print(15), "FizzBuzz"));