import * as R from 'ramda';

const arr1 = [1, 1, 3, 5, 67, 0, 2, 3];

const arr2 = [2, 4, 9, 7, 3, 2, 4];

const arr3 = R.union(arr1, arr2);

console.log('arr3: ', arr3);