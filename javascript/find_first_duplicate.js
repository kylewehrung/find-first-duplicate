function findFirstDuplicate(array) {
  const duppy = new Set()

  for (const num of array) {
    if (duppy.has(num)) {
      return num
    }
    duppy.add(num)
  }
 
  return -1

}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;
// If there's duplicate numbers, return the number of the first duplicate

// Please add your pseudocode to this file

  //check for duplicates
  //if there's a duplicate return the number of the first one
  //



// And a written explanation of your solution
