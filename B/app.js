let backgroundColor = document.getElementById('background');
let btnRandom = document.getElementById('btn-random');
let textColor = document.getElementById('myInput');
btnRandom.addEventListener("click", render_random);
function render_random()
{
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    backgroundColor.style.background = "#" + randomColor;
    textColor.innerHTML = "#" + randomColor;
}

