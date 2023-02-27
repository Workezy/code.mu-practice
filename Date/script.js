 'use scrict'
// Работа с объектом Date в JavaScript
let date = new Date();
// 1
console.log(date.getDate());
// 2
console.log(date.getMonth());
// 3
console.log(date.getFullYear());

// Форматирование даты в JavaScript
function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}
console.log(
    addZero(date.getHours()) + ':' +
    addZero(date.getMinutes()) + ':' +
    addZero(date.getSeconds()) + ':',
    addZero(date.getDate()) + '.' +
    addZero(date.getMonth() + 1) + '.' +
    date.getFullYear() + '.'
);

// Смена формата даты в JavaScript
let dates = '2025-12-31';
let datesRes = dates.split('-').reverse().join('.');
console.log(datesRes);

// Получения дня недели на JavaScript
// 1
console.log(date.getDay());
// 2
if (date.getDay() == 0 || 
    date.getDay() == 6 ) {
        console.log("Выходной");
    } else {
        console.log("Рабочий");
    }
// 3
// let count = 0;
// while (date.getDay() != 0) {
//     count++
//     date.setDate(date.getDate() + 1)
// }
// console.log(count); 

// Вывод частей даты словом в JavaScript
let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
let monthz = date.getMonth();
console.log(monthz);
console.log(months[monthz]);

// Установка времени в объекте Date в JavaScript
let dateB = new Date(2005, 6, 27)
let day  = dateB.getDay();
let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(days[day]);

// Получение времени в формате timestamp в JavaScript
let dateT = new Date(2025, 0, 1);
console.log(dateT.getTime());

// Разность между датами в формате timestamp в JavaScript
// 1
let ago = new Date(1988, 2, 1);
let now = new Date (2000, 0, 10);
let diff = now.getTime() - ago.getTime();
console.log(diff / (1000 * 60 * 60 * 24));
// 2
let dateNow = new Date()
let diff2 = dateNow.getTime() - dateB.getTime();
console.log(diff2 / (1000 * 60 * 60 * 24 * 30));

// Разница между объектами с датой в JavaScript
// 1
let date1 = new Date(2000, 8, 1);
let date2 = new Date(2000, 1, 15);
let diff3 = date1.getTime() - date2.getTime();
// 2
console.log(diff3 / (1000 * 60 * 60 * 24));
// 3
console.log(diff3 / (1000 * 60 * 60 * 24 * 30));
// 4
console.log(diff3 / (1000 * 60 * 60 * 24 * 30 * 12));

// Автоматическая корректировка дат в JavaScript
// 1
// 2018, 7 марта

// 2
// 2019, 1 апреля

// 3
//  2018, 1 мая

// 4
//  2018, 3 марта

// 5
// 2019, 2 февраля

// 6
// 2020, 2 октября 

// 7
// 2018, 31 марта

// 8
// 2017, 31 декабря

// 9
// 2016, 28 ноября

// 10
// 2018, 1 января, 23:01:00

// 11
// 2018, 2 января, 00:00:00

// 12
// 2018, 5 января, 05:41:40

// Нахождение последнего дня месяца в JavaScript
function findLastDayMonth(month, year) {
    let date3 = new Date(year, month, 0);
    return date3.getDate();
}
console.log(findLastDayMonth(2, 1997));
/* 2 */ console.log(findLastDayMonth(6, 2025));

// Определение високосного года в JavaScript
function isLeap(year) {
    let date = new Date(year, 2, 0);
    if (date.getDate() == 29) {
        return true
    } else {
        return false
    }
}
console.log(isLeap(2024));

// Проверка корректности даты в JavaScript
function checkDate(year, month, day) {
    let date = new Date(year, month, day);
    if (date.getFullYear() == year && 
        date.getMonth() == month &&
        date.getDate() == day) {
            return true
        } else {
            return false
        }
}
console.log(checkDate(2025, 0, 42));

// Получение моментов времени в JavaScript
// 1
let date4 = new Date(2023, 11, 31);
console.log(days[date4.getDay()]);
// 2
let date5 = new Date(date.getFullYear(), date.getMonth(), 1);
console.log(days[date5.getDay()]);
// 3
let date6 = new Date(date.getFullYear() + 1, 11, 31);
console.log(days[date6.getDay()]);
// 4
let date7 = new Date(date.getFullYear() + 1, 1, 27);
console.log(days[date7.getDay()]);
// 5
let date8 = new Date(date.getFullYear() - 1, 1, 27);
console.log(days[date8.getDay()]);
// 6
// Нет

// 7
let date9 = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
console.log(days[date9.getDay()]);
// 8
let date10 = new Date(date.getFullYear(), 0, 1);
let date11 = new Date(date.getFullYear(), 8, 10);
let diff4 = date11.getTime() - date10.getTime();
console.log(diff4 / (1000 * 60 * 60 * 24));
// 9
let date12 = new Date(date.getFullYear(), date.getMonth(), 20);
let date13 = new Date(date.getFullYear(), date.getMonth() + 1, 10);
let diff5 = date13.getTime() - date12.getTime();
console.log(diff5 / (1000 * 60 * 60 * 24));
// 10
let date14 = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1, 12);
let date15 = new Date(date.getFullYear(), date.getMonth(), date.getDate, date.getHours());
let diff6 = date15.getTime() - date14.getTime();
console.log(diff6 / (1000 * 60 * 60));
// 11

// 12

// 13
