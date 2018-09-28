


function Node() {

    this.data = null;
    this.leftChild = null;
    this.rightChild = null;
}


//创建二叉树（递归版本）
function buildTree(node, i, arr) {

    var leftChild = 2 * i + 1;
    var rightChild = 2 * i + 2;

    if (leftChild < arr.length) {

        var leftChildNode = new Node();
        leftChildNode.data = arr[leftChild];
        node.leftChild = leftChildNode;
        buildTree(leftChildNode, leftChild, arr);
    }

    if (rightChild < arr.length) {

        var rightChildNode = new Node();
        rightChildNode.data = arr[rightChild];
        node.rightChild = rightChildNode;
        buildTree(rightChildNode, rightChild, arr);
    }
}

// var ch = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// var rootNode = new Node();
// rootNode.data = ch[0];
// buildTree(rootNode, 0, ch);
// debugger;
// console.log(rootNode);

function createBinaryTree(rootNode, arr) {

    var index = 0;

    while (index < arr.length) {

        var leftIndex = 2 * index + 1,
            rightIndex = 2 * index + 2;

        var leftNode = new Node(),
            rightNode = new Node();

        leftNode.data = arr[leftIndex];
        rightNode.data = arr[rightIndex];
        rootNode[index].leftChild = leftNode
    }
}

//顺序存储，先序遍历（递归）

var tree = [1, 2, 3, 4, 5, , 6, , , 7];
(function preOrderTraverse(tree, index, visit) {

    visit(tree[index]);

    if (tree[2 * index + 1]) preOrderTraverse(tree, 2 * index + 1, visit);
    if (tree[2 * index + 2]) preOrderTraverse(tree, 2 * index + 2, visit);
})(tree, 0, function (value) {
    console.log(value);
});

console.log('first order');
//链式存储，先序遍历（递归）
Node.prototype.preOrderTraverse = function (visit) {

    visit(this.data);
    if (this.leftChild) this.preOrderTraverse.call(this.leftChild, visit);
    if (this.rightChild) this.preOrderTraverse.call(this.rightChild, visit);
}

var root = new Node();
root.data = 1;
root.leftChild = new Node();
root.leftChild.data = 2;
root.rightChild = new Node();
root.rightChild.data = 3;
root.leftChild.leftChild = new Node();
root.leftChild.leftChild.data = 4;

console.log('first order-chain');
root.preOrderTraverse(function (val) { console.log(val) });

//中序遍历，顺序储存（递归）
console.log('mid order')
var midTree = [1, 2, 3, 4, 5, , 6, , , 7];
(function midOrderTraverse(tree, index, visit) {

    if (tree[2 * index + 1])
        midOrderTraverse(tree, 2 * index + 1, visit);
    visit(tree[index]);

    if (tree[2 * index + 2])
        midOrderTraverse(tree, 2 * index + 2, visit);
})(midTree, 0, function (val) { console.log(val) })

console.log('mid order-chain');
//链式存储，中序遍历（递归）
Node.prototype.preOrderTraverse = function (visit) {

    if (this.leftChild) this.preOrderTraverse.call(this.leftChild, visit);
    visit(this.data);
    if (this.rightChild) this.preOrderTraverse.call(this.rightChild, visit);
}
root.preOrderTraverse(function (val) { console.log(val) });

//后续遍历，顺序不存储（递归）
console.log('last order')
var midTree = [1, 2, 3, 4, 5, , 6, , , 7];
(function midOrderTraverse(tree, index, visit) {

    if (tree[2 * index + 1])
        midOrderTraverse(tree, 2 * index + 1, visit);

    if (tree[2 * index + 2])
        midOrderTraverse(tree, 2 * index + 2, visit);
    visit(tree[index]);

})(midTree, 0, function (val) { console.log(val) })

console.log('last order-chain');
//链式存储，后序遍历（递归）
Node.prototype.preOrderTraverse = function (visit) {

    if (this.leftChild) this.preOrderTraverse.call(this.leftChild, visit);
    if (this.rightChild) this.preOrderTraverse.call(this.rightChild, visit);
    visit(this.data);
}
root.preOrderTraverse(function (val) { console.log(val) });

//二叉排序树
function BinaryTreeSort() {

    var root = null;
    var BinaryTreeNode = function (data) {

        this.data = data;
        this.rightChild = null;
        this.leftChild = null;
    }

    this.insertNode = function (node, insertedNode) {

        if (node.data > insertedNode.data) {
            if (node.leftChild == null)
                node.leftChild = insertedNode;
            else
                this.insertNode(node.leftChild, insertedNode);
        } else {

            if (node.rightChild == null)
                node.rightChild = insertedNode;
            else
                this.insertNode(node.rightChild, insertedNode);
        }
    }

    this.insert = function (key) {

        var node = new BinaryTreeNode(key);
        if (root == null)
            root = node;
        else
            this.insertNode(root, node);
    }

    this.showNode = function () {
        console.log(root);
    }
}
console.log('sort binary tree');
var nodeArr = [8, 3, 10, 1, 6, 14, 4, 7, 13];
var tt = new BinaryTreeSort();
nodeArr.forEach(function (data) {
   
    tt.insert(data);
});
debugger
tt.showNode();
// console.log(binaryTree);