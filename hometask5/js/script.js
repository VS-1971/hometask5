'use strict';

let menu = document.getElementsByClassName('menu') [0],
    menuItem = document.getElementsByClassName('menu-item'),
    menuItemLi = document.createElement('Li'),
    text    =    document.createTextNode('Пятй элемент'),
    body = document.querySelector('.body'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv') [0],
    promptforApple = document.querySelector("#prompt");



  
    menu.insertBefore(menuItem[2], menuItem[1]);
    menuItemLi.classList.add('menu-item');
    menu.appendChild(menuItemLi);
    menuItemLi.textContent = ('Пятй элемент');

   document. body.style.backgroundImage = "url('img/apple_true.jpg')";
   title.textContent = ('Мы продаем только подлинную технику Apple');
   adv.remove();
   
    
let question = prompt('Ваше отношение к технике apple');
promptforApple.textContent = yourOpinion;




    console.log(menu);
    console.log(menuItem);
    console.log(menuItemLi);
    console.log(text);
    console.log(body);
    console.log(title)