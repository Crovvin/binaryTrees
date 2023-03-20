/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;
    function minLength(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return minLength(node.right) + 1;
      if (node.right === null) return minLength(node.left) + 1;
      return (
        Math.min(minLength(node.left), minLength(node.right)) + 1
      );
    }
    return minLength(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;
    function maxLength(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return maxLength(node.right) + 1;
      if (node.right === null) return maxLength(node.left) + 1;
      return (
        Math.max(maxLength(node.left), maxLength(node.right)) + 1
      );
    }
    return maxLength(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let total = 0;
    function maximumSum(node) {
      if (node === null) return 0;
      const sum1 = maximumSum(node.left);
      const sum2 = maximumSum(node.right);
      total = Math.max(total, node.val + sum1 + sum2);
      return Math.max(0, sum1 + node.val, sum2 + node.val);
    }
    maximumSum(this.root);
    return total;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
    let closest = null;
    let queue = [this.root];
    while (queue.length) {
      let currentVal = currentNode.val;
      let currentNode = queue.shift();
      let aboveLowerBound = currentVal > lowerBound;
      let changeClosest = currentVal < closest || closest === null;
      if (aboveLowerBound && changeClosest) {
        closest = currentVal;
      }
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return closest;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
