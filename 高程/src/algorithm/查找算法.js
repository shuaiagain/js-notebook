
//1.简单的查找
function simpleSearch(arr, aim) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == aim) {
            return i;
        }
    }

    return -1;
}
// var arr = [1, 6, 5, 2, 3, 4];
// var a = simpleSearch(arr, 66);
// console.log(a);

//二分查找(非递归)
function binarySearch(arr, aim) {

    var low, high, mid;
    low = 0;
    high = arr.length - 1;

    while (low <= high) {

        mid = parseInt((low + high) / 2);

        if (arr[mid] == aim)
            return mid;

        if (arr[mid] < aim)
            low = mid + 1;
        else if (arr[mid] > aim)
            high = mid - 1;
    }

    return -1;
}

// var arr = [1, 2, 3, 4, 5, 6];
// var a = binarySearch(arr, 6);
// console.log(a);

//二分查找（递归版本）
function binarySearchRecursion(arr, aim, low, high) {

    low = low || 0, high = high || arr.length - 1;
    var mid = parseInt((low + high) / 2);
    if (arr[mid] == aim)
        return mid;

    if (arr[mid] < aim && low <= high)
        return binarySearchRecursion(arr, aim, mid + 1, high);
    else if (arr[mid] > aim && mid >= 1)
        return binarySearchRecursion(arr, aim, low, mid - 1);
    else {
        return -1;
    }
}
// var arr = [1, 2, 3, 4, 5];
// var a = binarySearchRecursion(arr, 3, 0, arr.length - 1);
// console.log(a);
