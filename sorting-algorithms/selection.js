/*
SELECTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, find the smallest element in unsorted subarray starting at that position, and swap elements so that smallest element is at the beginning of unsorted subarray.

example:
[ 1 2 3|9 5 7 4 ]
 sorted|unsorted
smallest element in unsorted subarray is 4
swap with element at beggining of unsorted subarray
sorted portion has now grown:
[ 1 2 3 4|5 7 9 ]

*** Exercises

- Implement selection sort
- Identify time complexity

Stable Variant
- Implement as a stable sort - rather than swapping, the minimum value is inserted into the first position and all other items are shifted one to the right. How does this impact performance?
- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

- Implement selection sort for a linked list (you can use your data structure implemention from earlier in the course). How does this impact performance and stability?

*/

// [5, 2, 7, 4, 9, 1, 3]
// [6, 1, 9, 2, 4, 2, 4]

// time complexity: O(n^2) quadratic

var selectionSort = function(array) {
  for(var i = 0; i < array.length; i++) {
    var minimumIndex = i;
    for(var j = i + 1; j < array.length; j++) {
      if(array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }
    // if i does not equal minimumIndex then swap
    // does not swap if an element is in the correct position
    if(i !== minimumIndex) {
      swap(array, i, minimumIndex);
    }
  }
  return array;
};

var swap = function(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};


console.log(selectionSort([5, 2, 7, 4, 9, 1, 3]));
console.log(selectionSort([6, 1, 9, 2, 4, 2, 4]));
