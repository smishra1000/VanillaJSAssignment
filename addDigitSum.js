// Add sum of digit untill length 1 didgit
//ex--num =367  sum= 7---How?  3+6+7 = 16 = 1+6 = 7

let num = 1234;
let sum = 0;
let a = [1,2,3,4,5,6,7,8,9];

while(a.indexOf(sum)==-1) {
  if(a.indexOf(sum)>-1 && sum!=0) {
   break;
  }

  if(num===0) 
  {
    num = sum;
    sum = 0;
  }

  while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
  }
}

console.log(sum)
