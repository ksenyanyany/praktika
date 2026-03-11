//задание №1
let x = 17;
let y = 5;

console.log('17 + 5 = ', x + y);
console.log('17 - 5 = ', x - y);
console.log('17 * 5 = ', x * y);
console.log('17 / 5 = ', x / y);
console.log('17 % 5 = ', x % y);

//задание №2
let a = 12;
let b = 8;

console.log('Площадь прямоугольника: ', a * b);

//задание №3
let r = 47;
let t = 8;

console.log('Каждому достанется ', Math.floor(r / t), ' яблок.');
console.log('Останется ', r % t, ' яблок.');

//задание №4
console.log(5 ** 4);

//задание №5
console.log((10 + 5) * 2 - 8 / 4); //получилось также

//задание №6
let c = '123';
let v = 100;
let c2: number = +c;

console.log(c2 + v);

//задание №7
let k = 3;

console.log('Когда мы пишем к++ сначала у нас получается изначальное число: ', k++);
console.log('И при повторном выводе k получается: ', k);