//Задание №1
let secretNumber = 7;
let guess = 5;
let guess2 = 7;

let res = guess === secretNumber ? 'Ты победил!' : 'Попробуй еще';
res = guess2 === secretNumber ? 'Ты победил!' : 'Попробуй еще';
console.log('')

//Задание №2
let purchaseAmount = 6000;

let price = purchaseAmount >= 5000 ? `Цена покупки: ${purchaseAmount * 0.9}` : `Цена покупки: ${purchaseAmount}`;

//Задание №3
let age = 17;

if (0 <= age && age <= 12) {
    console.log('Вы ребёнок');
} else if (13 <= age && age <= 17) {
    console.log('Вы подросток');
} else if (18 <= age && age <= 60) {
    console.log('Вы взрослый');
} else {
    console.log('Вы пенсионер');
}
console.log('')

//Задание №4
let login = 'KatyaGrib';
let password = 'katya12345';

if ((login !== 'KatyaGrib' && password === 'katya12345') || (login !== 'KatyaGrib' && password !== 'katya12345')) {
    console.log('Пользователь не найден');
} else if (login === 'KatyaGrib' && password !== 'katya12345') {
    console.log('Неверный пароль');
} else if (login === 'KatyaGrib' && password === 'katya12345') {
    console.log('Добро пожаловать!');
}
console.log('')

//Задание №5
let Num = 17;

let parityNum = (Num % 2) === 1 ? console.log('Нечётное'): console.log('Чётное');
console.log('')

//Задание №6
let day = 5;
let weekDay: string;

switch (day) {
    case 1:
        weekDay = 'понедельник';
        break;

    case 2:
        weekDay = 'вторник';
        break;

    case 3:
        weekDay = 'среда';
        break;

    case 4:
        weekDay = 'четверг';
        break;

    case 5:
        weekDay = 'пятница';
        break;

    case 6:
        weekDay = 'выходной';
        break;

    case 7:
        weekDay = 'выходной';
        break;
}

console.log(`Сегодня ${weekDay}!`);