// First example with callback that tells About IOC ; if we use callback actuualy we are providing code to third party trusted its kind of ioc;
//--if we make callback(null) or callback(err), multiple times it will execute ; doesn't has any fixed state when to finish




function sayHello(callback){
setTimeout(function(){
callback(null,"success");
callback(null,"success");
},2000)
}


sayHello(function(err,res){
if(err)
console.log(err)
else
console.log("helllo",res) // it will rpint 2 times
}); 



// But using promise we are inverting inversion of control 
//code control is in our hand 
// resolve or reject as many times but it will give only one state either resolved or reject

function sayHello(){
return new Promise(function(resolve,reject){
	setTimeout(function(){
  	resolve("success");
    resolve("success");
  },2000)
})
}

sayHello().then(function(res){
console.log("hello",res) // only once it will print
}).catch(function(err){
console.log("error")
})
