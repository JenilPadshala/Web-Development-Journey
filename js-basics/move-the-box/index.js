const myDiv = document.getElementById("myDiv");
const resetButton = document.getElementById("resetButton");
const playgroundDiv = document.getElementById("playgroundDiv");
window.addEventListener("keydown", move);
let x=0;
let y=0;
function move(event){
    switch(event.key){
        case "ArrowDown":
            y+=10;
            if (y>400) y = 400;
            myDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y-=10;
            if (y<0) y = 0;
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight":
            x+=10;
            if(x> 400) x = 400;
            myDiv.style.left = x + "px";
            break;
        case "ArrowLeft":
            x-=10;
            if(x<0) x = 0;
            myDiv.style.left = x + "px";
    }
}

resetButton.addEventListener("click", ()=>{
    x = 0;
    y = 0;
    myDiv.style.top = 0;
    myDiv.style.left = 0;
})