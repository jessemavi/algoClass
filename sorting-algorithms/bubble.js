/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/


// time complexity: O(n^2) quadratic
var bubbleSort = function(array) {
  for(var i = 0; i < array.length; i++) {
    for(var j = 0; j < array.length - 1 - i; j++) {
      if(array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
};

var swap = function(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

// var arr = [1, 2, 3, 4];
// swap(arr, 2, 3);
// console.log(arr);

console.log(bubbleSort([4, 1, 13, 7, 2, 5, 11, 6]));
