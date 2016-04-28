"use sctric"

// Неверное условие Else

/*
var year = prompt ("В каком году появилась спецификация ECMA-262 5.1?", '');
if (year == 2011) {
	alert ("True");
} else {
	alert ("False");
}
*/


// Несколько условий else, if

/*
var year2 = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');

if (year2 < 2011) {
	alert ('Это слишком рано...');
} else if (year2 > 2011) {
	alert ("Это поздновато...");
} else {
	alert ("Да точно в этом году!");
}
*/



// Оператор вопросительный знак „?“ условие ? значение1 : значение2

/*
var age = prompt ("Сколько Вам лет?", '');
access = (age>14) ? true : false;
alert (access);
*/

// Задача 2

/*
var jsname = prompt('Каково «официальное» название JavaScript?', '');
if (jsname == 'ECMAScript') {
	alert ("Верно");
} else {
	alert ("Не верно");
};
*/

// Задача 3. Вместо 0. -1, 1 вывел численные значения

var number = prompt('Введите число', 0);
if (number > 1) {
	alert ('Значение больше 1');
} else if (number < -1) {
	alert ('Значение меньше 1');
} else if (number == 0) {
	alert ('Значение равно 0');
}

/*



*/