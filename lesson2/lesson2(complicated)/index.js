let week = ['понедельник','вторник','среда','четверг','пятница','суббота', 'воскресенье'];
let today = prompt('Введите день недели:', '');
for (let i = 0; i < week.length; i++) {
  if (week[i] == 'суббота' || week[i] == 'воскресенье') {
    document.body.innerHTML += '<b>' + week[i] + '<br>';
  } else if (week[i] == today) {
    document.body.innerHTML += '<i>' + week[i] + '<br>';
  } else {
    document.body.innerHTML += week[i] + '<br>';
  }
}


let arr = ['234235', '38978975', '7923048908', '2232325', '399809895', '09809809', '423452'];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].charAt(0) == '3' || arr[i].charAt(0) == '7'){
  console.log (arr[i]);
  }
}