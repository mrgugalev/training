let str = 'урок-3-был слишком легким';
document.body.innerHTML += (str[0].toUpperCase() + str.slice(1).replace(/-/g, ' ').replace(' легким', '') + '</br>' );
console.log(str.slice(str.indexOf('легким')).replace('им', 'о'));

let summ = 0;
let arr = [20, 33, 1, 'Человек', 2, 3];
let delet = (arr.indexOf('Человек'));
(arr.splice(delet,1));
console.log(arr);
for(let i = 0; i < arr.length; i++) {
    summ += Math.pow(arr[i], 3);
}
console.log(summ);


function anonimus(i) {
  if(typeof i === 'string') {
    document.body.innerHTML += i.replace(/\s/g, '').slice(0, 50) + '...';
  } else {
    alert('Это не строка!');
  }
}
anonimus(' 2394588932475982347589273495872-49851-09485190485917435728943758923  ');

