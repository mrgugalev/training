function friendlyNumbers(start,end) {
  let counter;
  let summ1;
  let summ2;
  let array =[];

  for(let i = start; i < end; i++) {
    counter =0;
    summ1 = 0;
    summ2 =0;
  for(let j = 1; j < i; j++) {
    if(i % j === 0) {
      summ1 +=j;
    }
  }

  if(summ1 < start || summ1 > end || summ1 === i) {
    continue;
  }

  for(let j1 = 1; j1 < summ1; j1++) {
    if(summ1 % j1 ===0) {
      summ2 += j1;
    }
  }

for(let j2 = 0; j2 < array.length; j2++) {
  if(i === array[j2] || summ1 === array[j2]) {
    counter++;
  }
}

if(summ2 === i && counter == 0  ) {
  array.push(i);
  array.push(summ1);
}
  }
return array;
}
friendlyNumbers(1, 3000);