import Title from './components/title.js';
import Image from './components/image.js';
import Button from './components/button.js';

const title = new Title();
title.create('Primeira página');

const image = new Image();
image.insertImage();

const button = new Button();
button.create()

// Babel Spread
const obj = { a: 1, b: 2, c: 3, d: 4, e: 99 };

let { a, b, ...teste } = obj;

console.log(a);
console.log(b);
console.log(teste);