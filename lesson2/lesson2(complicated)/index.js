let week = [];
week = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота', 'Воскресенье'];
console.log(week.join('\n'));
document.body.innerHTML = '<b>' + week[5] + '<br>' +week[6] + '<b>';

let today = prompt('Введите день недели:', '');
document.write('<br>' + '<i>' + today + '<i>' + '<br>');



let arr = ['234235', '38978975', '7923048908', '2232325', '399809895', '09809809', '423452'];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].charAt(0) == '3' || arr[i].charAt(0) == '7'){
  console.log (arr[i]);
  }
}