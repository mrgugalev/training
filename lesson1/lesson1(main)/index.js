'use strict';
let money = prompt('Ваш бюджет на месяц?', ''),
  time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD'),
  firstQuestion = prompt('Введите обязательную статью расходов в этом месяце:', ''),
  firstAnswer = prompt('Во сколько обойдемся: ', '0'),
  secondQuestion = prompt('Введите обязательную статью расходов в этом месяце:', ''),
  secondAnswer = prompt('Во сколько обойдемся: ', '0');
  
let appData = {
    budget: money,
    timeData: time,
    expenses: {}, 
    optionalExpenses: {},
    income: '',
    savings: false
}
console.log(appData.expenses);

appData.expenses[firstQuestion] = firstAnswer;
appData.expenses[secondQuestion] = secondAnswer;

function getBudget(i) {
  return (appData.budget / 30 * i).toFixed(2);
}
alert(getBudget(1));