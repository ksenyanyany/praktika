//Задание №1
let cities: string[] = ['Нижний Новгород', 'Санкт-Петербург', 'Кишинёв', 'Тула', 'Щёкино'];

//Задание №2
console.log(cities[0], cities[2], cities[4]);

//Задание №3
cities[1] = 'Москва';

//Задание №4
cities.push('Кашира')
cities.unshift('Севастополь')

//Задание №5
let last: string | undefined = cities.pop();
let first: string | undefined = cities.shift();
console.log(`Первый: ${first}, последний: ${last}`)
console.log('')

//Задание №6
let moscow: boolean = cities.includes('Москва');
let moscowIndex = cities.indexOf('Москва');

console.log(`Наличие "Москвы" в массиве: ${moscow}, его индекс: ${moscowIndex}`);
console.log('')
//Задание №7
let numbers = [10, 20, 30, 40, 50];
let num = 0;

for (let numbers1 of numbers) {
    num += numbers1;
}
console.log(`Сумма чисел: ${num}`);
console.log('');

//Задание №8
let num1 = [1, 2, 3];
let copy = [...num1];
copy.push(4);

console.log(`Оригинал: ${num1}`);
console.log(`Копия: ${copy}`);
