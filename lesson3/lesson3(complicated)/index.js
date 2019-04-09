let str = 'урок-3-был слишком легким';
document.body.innerHTML += (str[0].toUpperCase() + str.slice(1).replace(/-/g, ' ').replace(' легким', '') + '</br>' );
console.log(str.slice(str.indexOf('легким')).replace('им', 'о'));