// Sort array in 0,1,2 using Dutch notations
// based on above formula 
/* a[m]===0 swap(l,m) l++;m++;

a[m]===1 m++;
a[m]===2 swap(m,h) h--; */



let array = [0,2,1,2,0];
sortArrayByDutch();

console.log("array after sort",array);

function sortArrayByDutch(){
let m = 0;
let l= 0;
let h = array.length-1;

  while(m<=h){
		if(array[m]===0){
    swap(m,l);
    l++;
    m++;
    }else if(array[m]===1){
    	m++;
    }
   else if(array[m]===2){
    	swap(m,h);
      h--;
    }
  }

}

function swap(i,j){
let temp = array[i];
array[i] = array[j];
array[j] = temp;
}
