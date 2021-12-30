const btn = document.getElementById('btn');
let counter = 0;
const randomColor = () => {return ('rgb(' + Math.random()*255 + ',' + Math.random()*255 + ',' + Math.random()*255+ ')')};

console.log(randomColor())

btn.addEventListener("mouseover", function(){
    document.body.style.backgroundColor = randomColor();
    btn.style.backgroundColor = randomColor();
    counter ++
    document.getElementById('counter').innerHTML = "Counter = " + counter;
}) 

btn.addEventListener("mouseover", function(){
    let i = Math.floor(Math.random()*window.innerWidth) + 1;
    let j = Math.floor(Math.random()*window.innerHeight) + 1;
    console.log('i: ' + i + 'j: ' +j);
    btn.style.left = i+'px';
    btn.style.top = j+'px';

}) 
