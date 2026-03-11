//Задание №1
console.log(`Округление чисел вниз: ${Math.floor(4.3)}, ${Math.floor(4.8)}, ${Math.floor(-2.3)}, ${Math.floor(-2.8)}`);
console.log(`Округление чисел вверх: ${Math.ceil(4.3)}, ${Math.ceil(4.8)}, ${Math.ceil(-2.3)}, ${Math.ceil(-2.8)}`);
console.log(`Математическое округление: ${Math.round(4.3)}, ${Math.round(4.8)}, ${Math.round(-2.3)}, ${Math.round(-2.8)}`);
console.log('');

//Задание №2
console.log(`2 в степени 10: ${Math.pow(2, 10)}`);
console.log(`3 в степени 5: ${Math.pow(3, 5)}`);
console.log(`Корень из 144: ${Math.pow(144, 0.5)}`);
console.log(`Корень из 50: ${Math.pow(50, 0.5)}`);
console.log('');

//Задание №3
let a = [34, 67, 12, 89, 45, 23];
console.log(`Минимальное число в массиве: ${Math.min(...a)}`);
console.log(`Маскимальное число в массиве: ${Math.max(...a)}`);
console.log('');

//Задание №4
console.log(`Случайное число от 1 до 100: ${Math.floor((Math.random() * 100) + 1 )}`);
console.log(`Случайное число от 50 до 60: ${Math.floor((Math.random() * (60 - 50 + 1)) + 50)}`);
console.log(`Случайное дробное число от 0 до 1: ${Math.random()}`);
console.log('');

//Задание №5
console.log(`Модуль разницы чисел 10 и 7: ${Math.abs(10 - 7)}`);
console.log(`Модуль разницы чисел 5 и 12: ${Math.abs(5 - 12)}`);
console.log('');

//Задание №6
console.log('---бросок 6-гранного кубика пять раз---');
console.log('Первый бросок: ', Math.floor((Math.random() * 6) + 1));
console.log('Второй бросок: ', Math.floor((Math.random() * 6) + 1));
console.log('Третий бросок: ', Math.floor((Math.random() * 6) + 1));
console.log('Четвёртый бросок: ', Math.floor((Math.random() * 6) + 1));
console.log('Пятый бросок: ', Math.floor((Math.random() * 6) + 1));
console.log('');

console.log('---бросок 20-гранного кубика пять раз---');
console.log('Первый бросок: ', Math.floor((Math.random() * 20) + 1));
console.log('Второй бросок: ', Math.floor((Math.random() * 20) + 1));
console.log('Третий бросок: ', Math.floor((Math.random() * 20) + 1));
console.log('Четвёртый бросок: ', Math.floor((Math.random() * 20) + 1));
console.log('Пятый бросок: ', Math.floor((Math.random() * 20) + 1));
console.log('');

//Задание №7
console.log(Math.floor(Math.PI * 100) / 100);