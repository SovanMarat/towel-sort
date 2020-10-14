module.exports = function towelSort (matrix) {
    if (!Array.isArray(matrix) || matrix.length===0){
        return matrix=[];
    }
let arr = matrix.map(function(item, index){
    if (index%2!==0){
        return item.reverse();
    }
    return item;
})
  return arr.flat();
}
