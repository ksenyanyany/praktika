//Задание №1
let numbers = [4, 17, 8, 22, 9, 35, 12, 6];

let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log('Сумма чисел в массиве: ', sum);

let arithMean = sum / numbers.length;
console.log('Среднее арифметическое: ', arithMean);

let min = numbers[0];
for (let i = 1; i <= numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log('Минимальное число: ', min)


let max = numbers[0];
for (let numm of numbers) {
    if (numm > max) {
        max = numm;
    }
}
console.log('Максимальное число: ', max)

sum = 0;
for (let under15 of numbers) {
    if (under15 < 15) {
        sum++;
    }
}
console.log('Кол-во чисел меньше 15: ', sum);

let tripled = [];
for (let num of numbers) {
    tripled.push(num * 3);
}
console.log('Массив с числами, умноженными на три: ', tripled);
console.log('');

//Задание №2
let animals = ['кот', 'собака', 'хомяк', 'попугай', 'рыбка', 'крыса'];

let longest: string = animals[0];
for (let animal of animals) {
    if (animal.length > longest.length) {
        longest = animal;
    }
}
console.log('Самое длинное слово в массиве:', longest);

let number = 0;
for (let animal of animals) {
    if (animal.length > 5) {
        number++;
    }
}
console.log('Количество слов длинною больше 5 букв:', number);

let copy = [...animals];
for (let animal of copy) {
    for (let i = 0; i < copy.length; i++) {
        copy[i] = copy[i].toUpperCase();

    }
}
console.log(copy);

let copy1 = [];
for (let animal of animals) {
    if (animal[0].includes('к')) {
        copy1.push(animal);
    }
}
console.log('Слова начинающиеся на букву "к":', copy1);

//Задание №3
let prices = [350, 1200, 85, 430, 2100, 560, 75];

let cheapPrice = [];
for (let price of prices) {
    if (price < 500) {
        cheapPrice.push(price);
    }
}
console.log('Цены ниже 500:', cheapPrice);

let priceStrings = [];
for (let price of prices) {
    priceStrings.push(`Цена: ${price} руб.\n`);
}
console.log('Строки цен:', priceStrings);
console.log('')

//Задание №4
let students = ['Анна', 'Иван', 'Мария', 'Петр'];
let grades = [5, 4, 3, 5];

for (let i = 0; i < students.length; i++) {
    console.log(`Студент ${students[i]} получил оценку ${grades[i]}`);
}

sum = 0;
for (let grade of grades) {
    sum += grade;
}
let average = sum / grades.length;
console.log('Средний балл:', average);
console.log('');

//Задание №5
let sentence: string = "яблоко,груша,банан,апельсин,киви";

let fruits = sentence.split(',');
console.log('Массив фруктов:', fruits);


let excitedFruits = [];
for (let fruit of fruits) {
    excitedFruits.push(fruit + '!');
}
console.log('Фрукты с !:', excitedFruits);

let result: string = excitedFruits.join(' | ');
console.log('Итоговая строка:', result);