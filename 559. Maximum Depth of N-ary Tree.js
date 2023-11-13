/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */

var recursive = (root, totalAncestor)=>{
  if (typeof(root) === 'undefined') return totalAncestor;

  let result = totalAncestor;
  if (typeof(root.children.length) !== 'undefined'){
    for (var i=0; i<root.children.length; i++){
      let temp = recursive(root.children[i], totalAncestor+1);
      if (temp > result) result = temp;
      // console.log(root.val, root.children.length, temp, result);
    }
  }

  return result;
}

var maxDepth = function(root) {
  if (root == null) return 0;
  return recursive(root, 1)
};