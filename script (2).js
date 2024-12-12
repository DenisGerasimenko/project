"use strict";

let str = 20;

function A() {
  console.log(str);
  str = 30;
}

console.log(str);
A();
