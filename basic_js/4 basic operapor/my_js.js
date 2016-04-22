"use sctric"

// Унарные операторы

// Унарный минус
var x = 1;
x = -x;
var container = document.getElementById("unaryMinus").innerHTML = x;

// Унарный плюс
var y = 1;
y = +y;
var container = document.getElementById("unaryPlus").innerHTML = y;

//Бинарный минус
var z = 1, k = 3;
var container = document.getElementById("binaryMinus").innerHTML = ( k - z );

//Бинарный + для строк
var sum = "сложение" + "строк ";
var container = document.getElementById("sumLine").innerHTML = (sum);
alert(sumLine);

//Присваивание
var a = 2 + 2 * 2;
var container = document.getElementById("assignment").innerHTML = (a);

//Инкремент: ++
var i = 2;
i++;
var container = document.getElementById("i++").innerHTML = (i);

//декремент: --
var i = 2;
i--;
var container = document.getElementById("i--").innerHTML = (i);

