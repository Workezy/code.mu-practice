// Объекты в JavaScript
// 1 
let obj = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
}
console.log(obj);

// Вывод всего объекта в JavaScript
// 1
let obj2 = {
    1: 'Январь',
    2: 'Февраль',
    3: 'Март',
    4: 'Апрель',
    5: 'Май',
    6: 'Июнь',
    7: 'Июль',
    8: 'Август',
    9: 'Сентябрь',
    10: 'Октябрь',
    11: 'Ноябрь',
    12: 'Декабрь',
}
console.log(obj2);

//Строковые ключи объектов в JavaScript
// 1
let user = {
    name: 'Maksim',
    surname: 'Ishilov',
    patronymic: 'Andreyvich'
}
console.log(user.name, user.surname, user.patronymic)

// Свойства объектов в JavaScript
// 1
let date = {
    year: '2023',
    month: 'Январь',
    day: '24'
}
console.log(date.year + "-" + date.month + "-" + date.day);

// Ограничения на ключи объектов в JavaScript
// 2
let obj3 = {
	'1a': 1,
	'b2': 2,
	'c-c': 3,
	'd 4': 4,
	'e5': 5
};

console.log(obj3['1a']);
console.log(obj3.b2);
console.log(obj3['c-c']);
console.log(obj3['d 4']);
console.log(obj3.e5);

// Изменение элементов объектов в JavaScript
// 1
let obj8 = {x: 1, y: 2, z: 3};
for (let key in obj8) {
    obj8[key] = Math.pow(obj8[key], 2);
}
console.log(obj8);

// Добавление элементов в объекты в JavaScript
let objects = {};
objects.a = 1;
objects.b = 2;
objects.c = 3;
console.log(objects);

// Неупорядоченность объектов в JavaScript
// 1
// let obj11 = {1: 'aa', 2: 'ba', 3: 'ca'};
let obj11 = {2: 'ba', 3: 'ca', 1: 'aa'};
console.log(obj11[1]);
console.log(obj11[2]);
console.log(obj11[3]);

// Массив ключей объекта в JavaScript
// 1
let obj12 = {x: 1, y: 2, z: 3};
let keys = Object.keys(obj12);
console.log(keys);

// Длина объекта в JavaScript
// 1
console.log(Object.keys(obj12).length);

// Ключи объектов из переменных в JavaScript
// 1
let keys2 = 'y'
console.log(obj12[keys2]);

// Ошибка обращения к элементу по ключу в JavaScript
// 1
let obj13 = {x: 1, y: 2, z: 3};
console.log(obj13['x']);
// 2
let obj14 = {x: 1, y: 2, z: 3};
let key14 = 'x';
console.log(obj14[key14]);

// Ошибка обращения к свойству объекта в JavaScript
// 1
let obj112 = {x: 23, y: 12, z: 6};

let prop = 'x';
console.log(obj112[prop]);
// 2
let obj54 = {x: 14, y: 57, z: 39};
let prop1 = 'x';
console.log(obj54[prop1]);

// Вычисляемые свойства в JavaScript
// 1
let key144 = 'x';

let obj85 = {
	[key144]: 41,
	y: 24,
	z: 35
};
console.log(obj85);
// 2
let key11 = 'x';
let key22 = 'y';
let key33 = 'z';
let obj65 = {
	[key11]: 18,
	[key22]: 27,
	[key33]: 34
};
console.log(obj65);

// Подход программирования через константы в JavaScript
// 1
const arr = [1, 2, 3, 4, 5];
const res = arr[1] + arr[2];

console.log(res);

// Поиск ошибок в коде с объектами JavaScript
// 1
let obj74 = {x: 145, y: 542, z: 3};
console.log(obj74['x']);
// 2
let obj98 = {x: 871, y: 21, z: 43};
let key55 = 'x';
console.log(obj98[key55]);
// 3
let obj57 = {x: 1, y: 2, z: 3};
let sum = obj57['x'] + obj57['y'] + obj57['x'];
console.log(sum);
// 4
let obj47 = {x: 1, y: 2, z: 3};
console.log(Object.keys(obj47).length);