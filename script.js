do {
    var x = +prompt('Введите количество примеров')
} while (isNaN(x));

do {
    var a = +prompt('Введите минимальное число')
} while (isNaN(a));

do {
    var b = +prompt('Введите максимальное число')
} while (isNaN(b));
   
function radomExam(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function randomSym() {
    return Math.floor(Math.random() * (5 - 1) + 1)
}

for (let i = 0; i < a; i++) {
    let examNum1 = radomExam(b, c);
    let examNum2 = radomExam(b, c);
    let examSym = randomSym();
    let exam = 0

    if (examSym == 1) {
        exam = examNum1 + examNum2;
        examSym = '+'
    } else if (examSym == 2) {
        exam = examNum1 - examNum2;
        examSym = '-'
    } else if (examSym == 3) {
        exam = examNum1 * examNum2;
        examSym = '*'
    } else if (examSym == 4) {
        exam = examNum1 / examNum2;
        examSym = '/'
    }

    let answer = +prompt(examNum1 + examSym + examNum2)
    console.log(exam == answer ? ' ваш ответ верный - ' + answer : ' Ваш ответ не верный -' + answer + ' ! ' + ' верный ответ ' + exam)
}

