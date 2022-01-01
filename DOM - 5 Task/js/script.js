document.body.style.background = prompt(`1. Введіть колір фону для сторінки. Наприклад: red, blue, green.`);


let fontFamily = prompt(`2. Виберіть тип шрифта на сторінці 1 або 2. 
1 = з засічками, 2 = без засічок.`)
if (fontFamily == 1) {
    document.body.style.fontFamily = "Tahoma, Verdana, serif";
}
else if (fontFamily == 2) {
    document.body.style.fontFamily = "Verdana, Times New Roman, sans-serif";
}


let h1Align = prompt(`3. Виберіть де має знаходитись заголовок 1, 2 або 3. 
1 = ліворуч, 2 = по центру, 3 = праворуч.`);
let h1 = document.getElementsByClassName('Zagolovok');
if (h1Align == 1) {
    h1[0].style.textAlign = "left";
}
else if (h1Align == 2) {
    h1[0].style.textAlign = "center";
}
else if (h1Align == 3) {
    h1[0].style.textAlign = "right";
}


let p = document.getElementsByClassName('paragraf');
p[0].style.background = prompt(`4. Введіть колір фону для параграфа з посиланнями. Наприклад: red, blue, green.`);


let href = document.getElementsByTagName('a');
let aColor = prompt('5. Введіть колір тексту у параграфі з посиланнями і для самих посилань. Наприклад: red, blue, green.')
for (let i = 0; i < href.length; i++) {
    href[i].style.color = aColor;
}


let divBox = document.getElementsByClassName('divBox');
let arr = prompt(`6. Введіть колір, розмір та товщину тексту у елементі div. Наприклад: red 40px 900`)
let arr1 = arr.split(' ')
divBox[0].style.color = arr1[0];
divBox[0].style.fontSize = arr1[1];
divBox[0].style.fontWeight = arr1[2];


let ol = document.getElementsByTagName('ol');
let type = prompt('7. Виберіть тип маркера для маркованого списку на сторінці. 1 = Римськими цифрами, 2 = Латинськими буквами, 3 = цифрами.');
if (type == 1) {
    ol[0].type = "I";
}
else if (type == 2) {
    ol[0].type = "A";
}
else if (type == 3) {
    ol[0].type = "1";
}


let a1 = document.getElementById('a1');
let lol1 = prompt('8. Введіть першу адресу для створення посилання на сторінці. Наприклад: football24.ua')
a1.textContent = lol1;
a1.href = "https://www." + lol1;
a1.target = "_blank";

let a2 = document.getElementById('a2');
let lol2 = prompt('9. Введіть другу адресу для створення посилання на сторінці. Наприклад: football24.ua')
a2.textContent = lol2;
a2.href = "https://www." + lol2;
a2.target = "_blank";

let a3 = document.getElementById('a3');
let lol3 = prompt('10. Введіть третю адресу для створення посилання на сторінці. Наприклад: football24.ua')
a3.textContent = lol3;
a3.href = "https://www." + lol3;
a3.target = "_blank";