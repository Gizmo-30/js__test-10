do {
    var x = +prompt('Введите количество примеров')
} while (isNaN(x));

do {
    var a = +prompt('Введите минимальное число')
} while (isNaN(a));

do {
    var b = +prompt('Введите максимальное число')
} while (isNaN(b));
    
function random() {
    let fan = Math.floor(Math.random() * (max + 1 - min) + min)
    return fan;
}

function random2(b, c) {
    let fan = Math.floor(Math.random() * (c + 1 - b) + b)
    return fan;
}

for (let i = 1; i <= x; i++) {
    let c = random(a, b)
    let d = random(a, b)
    let y = +prompt(c + ' + ' + d + ' = ' + ' ? ')
    console.log(c + ' + ' + d + ' = ' + (c + d) + ' ( ваш ответ ' + y + ' )')
    if (y == (c + d)) {
        alert('Ваш ответ верный')
    } else {
        alert('Ваш ответ не верный')
    }
}
