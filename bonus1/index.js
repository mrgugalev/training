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