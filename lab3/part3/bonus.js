/**
 * @link https://www.hackerrank.com/challenges/apple-and-orange/problem
 * @description - countApplesAndOranges calculates how many apples and oranges will fall on Sam's house.
 * @param {number} s -  integer, starting point of Sam's house location.
 * @param {number} t - integer, ending location of Sam's house location.
 * @param {number} a - integer, location of the Apple tree.
 * @param {number} b - integer, location of the Orange tree.
 * @param {number[]} apples - integer array, distances at which each apple falls from the tree.
 * @param {number[]} oranges - integer array, distances at which each orange falls from the tree.
 */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let newApple = [];
  let newOrange = [];
  let countApple = 0;
  let countOrange = 0;

  for (let i = 0; i < apples.length; i++) {
    newApple.push(a + apples[i]);
    if (newApple[i] >= s && newApple[i] <= t) {
      countApple++;
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    newOrange.push(b + oranges[i]);
    if (newOrange[i] >= s && newOrange[i] <= t) {
      countOrange++;
    }
  }

  console.log(countApple + "\n" + countOrange);
}
