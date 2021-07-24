let inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]
var result = [];

function flattenArray(array){
  for(let i=0;i<array.length;i++){
    if(Array.isArray(array[i]))
     flattenArray(array[i])
    else
     result.push(array[i])
  }
}

flattenArray(inputArray);
console.log(result);
