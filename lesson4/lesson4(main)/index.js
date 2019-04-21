let money, time;

function start () {               // функция, которая спрашивает бюджет и проверят корректность ввода.
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');
  
  while( isNaN(money) || money == null || money == "") {
    money = +prompt('Ваш бюджет на месяц?', '');
  }

}
start ();

let appData = {
  budget: money,
  timeData: time,
  expenses: {}, 
  optionalExpenses: {}, 
  income: '',
  savings: true,
  chooseExpenses: function () {
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
    }
  }, 
  detectDayBudget: function() {
    appData.moneyPerDay =(appData.budget / 30).toFixed(1);
    alert('Ежедневный бюджет ' + appData.moneyPerDay);
  },
  detectLevel: function() {
    if(appData.moneyPerDay < 100) {
      console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровень достатка');
    } else {
      console.log('ошибка ввода');
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?");
      let percent = +prompt("Под какой процент?");
  
      appData.monthIncome = save/100/12*percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {
    for(let i = 0; i < 3; i++) {
      let a = prompt('Статья необязательных расходов?', '');
      let b = String(a);
      if ( typeof(a) === 'string' && typeof (a) != null && a != '' && a.length <= 50) {
          console.log('done');
          appData.optionalExpenses[a] = b;
      } else {
        console.log('не done');
        i--;
      }
    }
  },
  chooseIncome: function() {
    let arr = [, 'доставка', 'разгрузка', 'погрузка', 'поднятие'];
    arr.forEach(function(item, i, arr) {
      alert( 'Способы доп. заработка: ' + i + item);
    });
    let items = prompt('Что принесет дополнительный доход (Перечислите через запятую!)');
    if (items != '' && items != null) {
      appData.income = items.split(', ');
      appData.income.push(prompt ('Может что-то еще?') );
      appData.income.sort();
    } else {
      console.log('Вы допустили ошибку, попробуйте заново!');
    }
  }
}
for (var key in appData) {
  console.log ( 'Наша программа включает в себя данные: "Ключ: " + key + " значение: " + menu[key]' );
}