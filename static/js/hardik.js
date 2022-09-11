let slider = document.querySelector('.slider');
let btn1 = document.getElementById('0');
let btn2 = document.getElementById('1');
let btn3 = document.getElementById('2');
let btn4 = document.getElementById('3');
let btn5 = document.getElementById('4');
let btn6 = document.getElementById('5');
let btn7 = document.getElementById('6');
let btn8 = document.getElementById('7');
let btn = btn1;    
let arrelement = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8];


// function for removing color from the slider buttons
function removeall(eid) {
    arrelement.forEach((e) => {
        if (e.id != eid) {
            e.classList.remove('active');
        }
    })
}

// logic for slider
arrelement.forEach((e) => {
    e.addEventListener('click', () => {
        slider.style.transform = `translateX(${-(e.id * 1383)}px)`;
        e.classList.add('active');
        removeall(e.id);
        btn=e;
    })
})
// automaticscroll for slider
setInterval(() => {
    slider.style.transform = `translateX(${-(btn.id * 1383)}px)`;
    btn.classList.add('active');
    removeall(btn.id);
    let idk=parseInt(btn.id);
    if(btn.id>=7){
        btn=btn1;
    }else{
        btn=document.getElementById(idk+1);
    }
}, 1500);
