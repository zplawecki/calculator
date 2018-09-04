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
    var nums = [];
    nums.push(s.split(","));
    let sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum+= parseInt(nums[i]);
    }
    return sum;
}

s = "2,3";
test_string(s);
