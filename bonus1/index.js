function getEasyNumbers(start, end) {
  for (let i = start; i < end; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        count++;
      }
    }
    if (count == 2) {
      document.body.innerHTML += i + ' Делители этого числа: 1 и ' + i + '</br>';
    }
  }
}
getEasyNumbers(1, 1000);




// function getSumm(num){
//   if (num >= 10) {
//     return num % 10 + getSumm(Math.floor(num / 10));
//   } else {
//     return num;
//   }
// }
// console.log(getSumm(1928374655) );


// function pow (num, e) {
//   if( e == 1) {
//     return num;
//   } else {
//     return num *= pow(num, e - 1);
//   }
// }
// console.log(pow(10, -15) );



// function sumTo(n) {
//   if (n != 1) {
//     return n += sumTo(n-1);
//   } else {
//     return 1;
//   }
// }
// console.log(sumTo(100) );


function facktorial(n) {
  if (n != 1) {
    return n*= facktorial(n - 1);
  } else {
    return 1;
  }
}
console.log(facktorial(20));