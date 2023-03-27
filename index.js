function hasTargetSum(array, target) {
  copyOfArray = [...array]
  for (let iteration of array) {
    let summed = 0
    copyOfArray.shift()
    for (let toAdd of copyOfArray) {
      summed= iteration+toAdd
      console.log(summed)
      if (summed === target) {
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  first needs to add rest of array and check
  second needs to add 3rd to rest
  3rd needs to add 4th to rest
  once =, return true else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
