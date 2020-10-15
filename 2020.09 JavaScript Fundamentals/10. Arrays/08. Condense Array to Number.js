function condenseArrayToNumber(nums) {
    let condensed = [];

    if (nums.length === 1) {
        console.log(nums[0]);
    }
    while (nums.length > 1) {
        condensed = [];
        for (let i = 0; i < nums.length - 1; i++) {
            condensed.push(nums[i] + nums[i + 1]);
        }
        nums = condensed;
    }
    console.log(condensed.toString());
}

condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);