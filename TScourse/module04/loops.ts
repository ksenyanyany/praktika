//Задание №1
for(let i = 1; i <= 30; i++) {
    if ((i % 3) === 0) {
        console.log(i);
    }
}
console.log('')

//Задание №2
let num: number = 1;
let sum: number = 1;
while (num <= 10) {
    sum = num * sum;
    num++;
}
console.log(sum);
console.log('')

//Задание №3
let target = 7;
let dice: number;
let attempt = 0;

do{
    dice = Math.floor(Math.random() * 7) + 1;
    attempt++;
    console.log(`Попытка ${attempt}, выпало ${dice}`);
} while (dice !== target);

console.log(`Цель достигнута за ${attempt} попыток`)
console.log('')

//Задание №4
let summ: number = 1;

for (let a = 1; a <= 50; a++) {
    summ = a * summ;
    if (summ >= 100) {
        break;
    }
    console.log(summ)
}
console.log('')

//Задание №5
for (let b = 0; b <= 20; b++) {
    if ((b % 3) === 0) {
        continue;
    } else {
        console.log(b)
    }
}
console.log('')

//Задание №6
for (let i = 3; i <= 6; i++) {
    console.log(`Таблица умножения для ${i}`);
    for (let l = 2; l <= 5; l++) {
        console.log(`${i} * ${l} = ${i * l}`)
    }
}
console.log('')

//Задание №7
console.log('Треугольник:');
let height: number = 5;

for (let i = 5; i >= 0; i--) {
    let line: string = '';
    for (let j = 1; j <= i; j++) {
        line += '*';
    }
    console.log(line);
}