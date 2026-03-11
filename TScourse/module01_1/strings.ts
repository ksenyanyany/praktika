//Задание №1
let words = 'JavaScript — это круто! Я учу JavaScript.';
console.log(words.toUpperCase());
console.log(words.toLowerCase());
console.log('');

//Задание №2
console.log(words.includes('JavaScript'));
console.log('Индекс первого вхождения:', words.indexOf('JavaScript'));
console.log('Индекс последнего вхождения:', words.lastIndexOf('JavaScript'));
console.log('');

//Задание №3
let photo = 'photo.jpg';
console.log('Начинается ли строчка с "photo?" ', photo.startsWith('photo'));
console.log('Заканчивается ли строчка с ".jpg"? ', photo.endsWith('.jpg'));
console.log('Заканчивается ли строчка с ".png"? ', photo.endsWith('.png'));
console.log('');

//Задание №4
let typescript = 'TypeScript';
let script = typescript.slice(4);
console.log(script);

let date = '2024-03-15';
console.log(date.split('-'));
console.log('');

//Задание №5
let apples = 'я люблю яблоки, яблоки вкусные';
console.log(apples.replaceAll('яблоки', 'бананы'));
console.log('');

//Задание №6
let admin = ' admin ';
console.log(admin.trim());
console.log('');

//Задание №7
console.log('apple > banana', 'apple' > 'banana');
console.log('apple < banana', 'apple' < 'banana');
console.log('');

//Задание №8
console.log('*'.repeat(10));
console.log('');

//Задание №9
typescript = 'typescript';
let t = typescript[0].toUpperCase();
let ypescript = typescript.slice(1);
console.log(t + ypescript);