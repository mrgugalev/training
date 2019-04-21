'use strict';
function pow(num, k){
  let result = 1;           
  for(let i=0; i<k; i++){
    result = result * num;
  }
  return result;
}
console.log(pow(a(),3));
console.log( ('' + pow (a(), 3)).slice(0,2) );


function a() {
  let number = 33721;
  number = String(number);
  let summa = 1;
  for (let i = 0; i < number.length; i++ ) {
  summa *= +number[i];
  }
  return summa;
 }
console.log(a() );