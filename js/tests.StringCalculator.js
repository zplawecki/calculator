function test_printing(s) {
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
    var nums = [];
    nums.push(s.split(","));
    sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum+= parseInt(nums[i]);
    }
    return sum;
}

console.log(add("2,2"));