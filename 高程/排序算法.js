// 1.排序
// 2.查找
// 3.比较
// 4.递归/分治/动态规划
// 5.树/图

// 十大排序算法详解
// https://www.cnblogs.com/liyongshuai/p/7197962.html
// https://www.jianshu.com/p/1b4068ccd505
// https://segmentfault.com/a/1190000005144961

// 1.冒泡排序及优化
//默认从小到大排序（也可从到到小排序，只要改变比较条件即可）
function bubbleSort(arr) {

    //外层循环执行次数
    var count = 0;
    //如果某一次排序中出现没有交换位置，说明排序完成
    var flag = false;
    //两个for循环，每次取出一个元素跟数组的其他元素比较
    //将最大的元素排到最后
    for (var i = 0; i < arr.length; i++) {
        flag = false;
        for (var j = 0; j < arr.length - i - 1; j++) {

            //外循环一次，就排好一个数，并放在后面，
            //所以比较前面n-j-1个元素即可
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = true;
            }
        }
        count++;
        console.log(count);
        if (!flag) {
            break;
        }
    }

    return arr;
}

// var arr = [1,4,3,2,5];
// console.log(bubbleSort(arr));

//2.快速排序
//https://blog.csdn.net/zhangjikuan/article/details/49095533
//https://blog.csdn.net/change_on/article/details/56927267
function quickSort(arr, left, right) {
    debugger;
    var i, j, t, m;
    if (left < right) {

        i = left;
        j = right;
        //第一个数值为基准
        t = parseFloat(arr[left]);

        while (i < j) {

            // 从右边找出小于基准的数值
            while (i < j && arr[j] > t) j--;
            // 将小于基准的数array[j]放到左边array[i]的位置 
            if (i < j) {

                m = parseFloat(arr[i]);
                arr[i] = parseFloat(arr[j]);
                arr[j] = m;
                i++;
            }

            // 将大于基准的数array[i]放到左边array[j]的位置 
            while (i < j && arr[i] <= t) i++;
            // 从左边找出大于基准的数值
            if (i < j) {

                m = parseFloat(arr[j]);
                arr[j] = parseFloat(arr[i]);
                arr[i] = m;
                j--;
            }
        }
        arr[i] = t;
        quickSort(arr, 0, i - 1);
        quickSort(arr, i + 1, right);
    }
    return arr;
}
// debugger;
// var tempArr = [3, 2, 1];
// quickSort(tempArr, 0, tempArr.length - 1);

// 快速排序(做排序一定要结合实例走一遍)
function quickSortOne(array, left, right) {

    if (left < right) {
        var x = array[right],
            i = left - 1,
            temp;
        for (var j = left; j <= right; j++) {
            if (array[j] <= x) {
                i++;
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        console.log(i);
        quickSortOne(array, left, i - 1);
        quickSortOne(array, i + 1, right);
    }

    return array;
}
// debugger;
// var arr = [49, 37, 42, 17, 65, 49];
// quickSortOne(arr, 0, arr.length - 1);
// console.log(arr);


function quickSortTwo(arr, left, right) {

    if (left < right) {

        var x = arr[right],
            i = left - 1,
            temp;

        for (var j = left; j <= right; j++) {

            if (arr[j] <= x) {
                i++;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        quickSortTwo(arr, left, i - 1);
        quickSortTwo(arr, i + 1, right);
    }

    return arr;
}
var arr = [49, 37, 42, 17, 65, 49];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

//3.插入排序
// 基本思想：将一个记录插入到已排序好的有序表中，从而得到一个新，记录数增1的有序表。
// 即：先将序列的第1个记录看成是一个有序的子序列，然后从第2个记录逐个进行插入，直至整个序列有序为止。
// 要点：设立哨兵，作为临时存储和判断数组边界之用。

function insertSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        //若第i个元素大于i-1元素，直接插入。小于的话，移动有序表后插入 
        if (arr[i] < arr[i - 1]) {
            //表中最后一个数据
            var j = i - 1;
            //复制为哨兵，即存储待排序元素    
            var temp = a[i];
            //先后移一个元素 (因为a[i]就是X，所以不怕丢失)  
            a[i] = a[i - 1];
            //查找在有序表的插入位置  (遍历表) 
            while (j >= 0 && temp < [j]) {
                a[j + 1] = a[j];
                //元素后移  
                j--;
            }
            //插入到正确位置    
            a[j] = x;
        }
    }

}

//折半插入  
void BInsertSort(arr)
{
    for (var i = 1; i < arr.length; i++) {
        var low = 0, high = i;
        if (arr[i] < arr[i - 1]) {               //若第i个元素大于i-1元素，直接插入。小于的话，移动有序表后插入    
            
            var x = arr[i];        //复制为哨兵，即存储待排序元素    
            arr[i] = arr[i - 1];
                       //先后移一个元素 (因为a[i]就是X，所以不怕丢失)   
            while (low <= high) {  //查找在有序表的插入位置  (遍历表)  
                var m = (low + high) / 2;
                if (x < arr[m]) high = m - 1;
                else low = m + 1;
            }

            for (var j = i - 1; j >= high + 1; j--)
                arr[j + 1] = arr[j];
            //插入到正确位置    
            arr[j + 1] = x;
        }
    }

}   