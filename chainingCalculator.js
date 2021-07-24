
//create chaining for function that return result 
// concept of ythis and clousre
function cal(initialValue){
	var accumulator = initialValue;
  var calObj = {
    add,
    sub,
    val
  }
  function add(value){
    accumulator = accumulator+value;
    return this;
  }
   function sub(value){
    accumulator = accumulator-value;
    return this;
  }
   function val(){
    return accumulator;
  }
  
  return calObj
}

console.log(cal(5));
console.log(cal(5).add(3).sub(2).val());
