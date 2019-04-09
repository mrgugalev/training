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
  savings: true 
}

function detectLevel() {

  function  chooseExpenses(){    // корректность ввода расходов
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
    
  }
  chooseExpenses();  


  function checkSavings(){       // накопления
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?");
      let percent = +prompt("Под какой процент?");

      appData.monthIncome = save/100/12*percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  }
  checkSavings();


  function detectDayBudget() {   // расчет бюджета в день
    appData.moneyPerDay =(appData.budget / 30).toFixed(1);
    if(appData.moneyPerDay < 1000){
      console.log('you poor');
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 10000){
      console.log ('you have good money, but not rich');
    } else if (appData.moneyPerDay > 10000){
      console.log('you rich');
    } else {
      console.log ('error');
    }   
    console.log(appData.moneyPerDay);
  }
  detectDayBudget();
}



function chooseOptExpenses() {
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
}
chooseOptExpenses();