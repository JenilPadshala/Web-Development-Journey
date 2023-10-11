// const element = document.getElementById("submitButton");

// element.onclick = function(){
//     alert("You clicked the button!");
// }

// const element2 = document.body;
// element2.onload = function(){
//     alert("You loaded the body!");
// }

const element3 = document.getElementById("myText");

element3.onchange = function(){
    alert("You changed something!");
}

const element4 = document.getElementById("myDiv");
element4.onmouseover = function(){
    element4.style.backgroundColor = "grey";
}
element4.onmouseout = function(){
    element4.style.backgroundColor = "black";
}