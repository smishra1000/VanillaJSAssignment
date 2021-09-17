let inputArray = [{name:"shekhar"},{name:"sameer"},{address:[{street:"kondapur"},{street:"gachiboali"}]}]
var result = [];

function flattenArray(array){
  for(let i=0;i<array.length;i++){
  let obj = array[i]
    if(Array.isArray(array[i]))
     flattenArray(array[i])
    else {
    if(Array.isArray(obj[Object.keys(array[i])[0]])){
   
    flattenArray(obj[Object.keys(array[i])[0]]);
    }else{
    result.push(array[i])
    }
   
    }
     
  }
}

flattenArray(inputArray);
console.log(result);
