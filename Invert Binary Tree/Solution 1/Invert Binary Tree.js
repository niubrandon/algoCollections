function invertBinaryTree(tree) {
  // Write your code here.
  function helper (node) {
    if (node) {
    // swap left and right
    let temp = node.left
    node.left = node.right
    node.right = temp
    helper(node.left);
    helper(node.right);
    }
  }
  helper(tree)
}


// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


// Do not edit the line below.
exports.invertBinaryTree = invertBinaryTree;

