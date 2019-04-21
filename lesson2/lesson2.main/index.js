let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {}, 
    optionalExpenses: {}, 
    income: '',
    savings: false
}

for(let i = 0; i < 2; i++) {
  let a = prompt('Введите обязательную статью расходов в этом месяце:', ''),
      b = prompt('Во сколько обойдемся: ', '');
  if ( typeof(a) === 'string' && typeof (a) != null && typeof (b) != null
    && a != '' && b != '' && a.length <= 50) {
      console.log('done');
      appData.expenses[a] = b;
  } else {
    console.log('не done');
    i--;
  }
  console.log(i);
}

appData.moneyPerDay = appData.budget / 30;
alert('Ежедневный бюджет: ',  + appData.moneyPerDay);
if(appData.moneyPerDay < 1000){
  console.log('you poor');
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 10000){
  console.log ('you have good money, but not rich');
} else if (appData.moneyPerDay > 10000){
  console.log('you rich');
} else {
  console.log ('error');
}


// let i = 0;      // while вариант
// while(i < 2){
//   let a = prompt('Введите обязательную статью расходов в этом месяце:', ''),
//       b = prompt('Во сколько обойдемся: ', '');
  
//   if ( typeof(a) === 'string' && typeof (a) != null && typeof (b) != null
//     && a != '' && b != '' && a.length <= 50) {
//       console.log('done');
//       appData.expenses[a] = b;
//   } else {
//     console.log('не done');
//     i = 0;
//   }
//   i++;
// }

// let i = 0;    //while do вариант
// do{
//   let a = prompt('Введите обязательную статью расходов в этом месяце:', ''),
//       b = prompt('Во сколько обойдемся: ', '');
  
//   if ( typeof(a) === 'string' && typeof (a) != null && typeof (b) != null
//     && a != '' && b != '' && a.length <= 50) {
//       console.log('done');
//       appData.expenses[a] = b;
//   } else {
//     console.log('не done');
//     i = 0;
//   }
//   i++;
// } while(i < 2);