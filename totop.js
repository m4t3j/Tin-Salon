const btn = document.querySelector('.gotopbtn');

function show(){
    if($(document).scrollTop() < 50){
        btn.style.display = "none";
    }
}

