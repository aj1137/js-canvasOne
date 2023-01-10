// Import stylesheets
import './style.css';

// Write Javascript code!


function start(){
const cvs = document.getElementById('main');
const ctx = cvs.getContext("2d");

ctx.beginPath();
ctx.moveTo(25,25);
ctx.lineTo(105,25);
ctx.lineTo(25,105);
ctx.fill();


}

start();