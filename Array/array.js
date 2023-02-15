// Массивы в JavaScript
// 1
let arrcsl = [1, 2, 3, 4, 5, 6];
// alert(arrcsl);
console.log(arrcsl);
// 2
let arrstr = ["a", "b", "c", "d", "e"];
// alert(arrstr);
console.log(arrstr);
console.log("//////////////////////////////////////////////////////////");
// Получение элементов массивов в JavaScript
// 1, 2
let arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
// 3
let result = 0;
for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
}
console.log(result);
// 4
let result2 = ""
let arrs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < arrs.length; i++) {
    result2 = result2 + "+" + arrs[i]
}
console.log(result2.replace("+",""));
console.log("//////////////////////////////////////////////////////////");
// Длина массива в JavaScript
// 1
let arrx = [1, 2, "3", 6, "asd", true];
console.log(arrx.length);
// 2
console.log(arrx[arrx.length - 1]);
console.log("//////////////////////////////////////////////////////////");
// Изменение элементов массива в JavaScript
// 1
let arrv = ["a", "b", "c"];
for (let i = 0; i < arrv.length; i++) {
    arrv[i] = i;
    
}
console.log(arrv);
// 2
let arrvs = [1, 4, 6];
for (let i = 0; i < arrv.length; i++) {
    arrvs[i] += 3;
    
}
console.log(arrvs);
// 3
arrl = [1, 2, 3,];
for (let i = 0; i < arrl.length; i++) {
    arrl[i]++;
}
console.log(arrl);
console.log("//////////////////////////////////////////////////////////");
// Добавление элементов по ключам JavaScript
// 1
let axr = [];
axr[0] = 1;
axr[1] = 2;
axr[2] = 3;
console.log(axr);
// 2
let arrr = [1, 2, 3];
arrr[3] = 4;
arrr[4] = 5;
console.log(arrr);
console.log("//////////////////////////////////////////////////////////");
// Разреженные массивы в JavaScript
let arrg = [];
arrg[3] = 'a';
arrg[8] = 'b';
console.log(arrg.length);
console.log("//////////////////////////////////////////////////////////");
//Добавление элементов через push в JavaScript
// 1
let arrays = [];
arrays.push(1, 2, 3);
console.log(arrays);
// 2
let lot = [1, 2, 3];
lot.push(4, 5);
console.log(lot);
console.log("//////////////////////////////////////////////////////////");
// Ключи массивов из переменных в JavaScript
// 1
let lat = ['a', 'b', 'c'];
let key = 2;
console.log(lat[key]);
// 2
let kva = [1, 2, 3, 4, 5];
let key1 = 1;
let key2 = 2;
console.log((kva[key1]) + (kva[key2]));
console.log("//////////////////////////////////////////////////////////");
// Оператор delete в массивах в JavaScript
// 1
let arr9 = ['a', 'b', 'c', 'd', 'e'];
delete arr9[2];
delete arr9[1];
console.log(arr9);
console.log("//////////////////////////////////////////////////////////");
// Поиск ошибок в коде с массивами JavaScript
// 1
let arr5 = [1, 2, 3, 4, 5];
console.log(arr5[arr.length - 1]);
// 2
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3[0] + arr3[1] + arr3[2] + arr3[3] + arr3[4]);
// 3
let arr10 = [1, 2, 3, 4, 5];
console.log(arr10.length);
// 4
let arr11 = [1, 2, 3, 4, 5];
console.log(arr11.length);