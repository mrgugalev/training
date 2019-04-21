let week = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];

let today = new Date();
for (let i = 0; i < week.length; i++) {
  if (week[i] == 'суббота' || week[i] == 'воскресенье') {
    document.body.innerHTML += '<b>' + week[i] + '</b>' + '</br>';
  } else if (i == today.getDay()) {
    document.body.innerHTML += '<i>' + week[i] + '</i>' + '</br>';
  } else {
    document.body.innerHTML += week[i] + '</br>';
  }
  // console.log(`${i} - это ${week[i]}`);
  // console.log(`${today.getDay()} - это ${week[i]}`);
}
// let date = new Date();

console.log( today );


let arr = ['234235', '38978975', '7923048908', '2232325', '399809895', '09809809', '423452'];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].charAt(0) == '3' || arr[i].charAt(0) == '7'){
    console.log (arr[i]);
  }
}