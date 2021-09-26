function binarySearch(array, value) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const middle = left + Math.floor(right - left / 2);
        if (array[middle] === value) {
            return true;
        } else if (value > array[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return false;
};

console.log(binarySearch([1, 2, 3, 7, 9, 11, 13, 17, 19, 21, 23], 4))