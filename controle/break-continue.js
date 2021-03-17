const nums = [1,2,3,4,5,6,7,8,9]

for(x in nums) {
    if(x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}
// break stops the iteration

console.log(` `)

for(let y in nums) {
    if(y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

// continue skip the condition and moves forward with the condition until the end.