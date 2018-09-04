console.log("hello world");

function test_adding(result, expected) {
    if (result == expected) {
        console.log("ok");
    }
    else {
        console.log("fail");
    }
}

function add(a, b){
    var result = a + b;
    return result;
}

test_adding(add(1,1), 2);
test_adding(add(2,2), 4);
test_adding(add(2,3), 7);

function test_substracting(result, expected) {
    if (result == expected) {
        console.log("ok");
    }
    else {
        console.log("fail");
    }
}

function substract(a, b){
    var result = a - b;
    return result;
}

test_substracting(substract(3,1), 2);
test_substracting(substract(2,2), 0);
test_substracting(substract(4,4), 1);

function test_multiplying(result, expected) {
    if (result == expected) {
        console.log("ok");
    }
    else {
        console.log("fail");
    }
}

function multiply(a, b){
    var result = a * b;
    return result;
}

test_multiplying(multiply(3,1), 3);
test_multiplying(multiply(2,2), 4);
test_multiplying(multiply(4,4), 1);

function test_dividing(result, expected) {
    if (result == expected) {
        console.log("ok");
    }
    else {
        console.log("fail");
    }
}

function divide(a, b){
    var result = a / b;
    return result;
}

test_dividing(divide(3,1), 3);
test_dividing(divide(2,2), 1);
test_dividing(divide(4,4), 2);

function test_moduling(result, expected) {
    if (result == expected) {
        console.log("ok");
    }
    else {
        console.log("fail");
    }
}

function modulus(a, b){
    var result = a % b;
    return result;
}

test_moduling(modulus(2,2), 0);
test_moduling(modulus(2,4), 2);
test_moduling(modulus(4,4), 1);



