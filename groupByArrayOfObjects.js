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
