var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];
let groupByProperty = 'age';
let groupedObj = {};

for(let i=0;i<people.length;i++){
let obj = people[i];
let key = obj[groupByProperty]
if(!groupedObj[key]) {
	groupedObj[key] = []
}
groupedObj[key].push(obj)
}

console.log("after grouped",groupedObj)


======================Using reduce ===============
	
	var people = [
  { name: 'sameer', age: 21 },
  { name: 'shekhar', age: 20 },
  { name: 'ravi', age: 20 }
];
let groupByProperty = 'age';
let groupedObj = {};

let data= people.reduce(function(acc,obj){
let key = obj[groupByProperty]
if(!acc[key]) {
	acc[key] = []
}
acc[key].push(obj)
return acc;
},{})

console.log("after grouped",data)
