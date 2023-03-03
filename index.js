let but = document.querySelector('#menu-but')
let menu = document.querySelector('.menu')
let flag = false

but.addEventListener('click', mennu, false)

function mennu() {
    if (flag == true) {
        menu.style.height = '0px';
        flag = false;
    }
    else {
        menu.style.height = '140px';
        flag = true;
    }
}