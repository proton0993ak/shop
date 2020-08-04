"use strict"

var t = 'aaa';
var g = 5;

var s = `text ${t} value ${g+1} `;
console.log(s); 
var a = 1, b=5 , c;
const A_BCD = 'Это константа';
console.log(a,b,c, A_BCD); 
if(c==undefined){
    console.log("good");
}

if(c=true){
    console.log("верно");
}else{console.log("ошибка");}  

