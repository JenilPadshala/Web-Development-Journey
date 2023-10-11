const myDiv = document.getElementById("myDiv");
const resetButton = document.getElementById("resetButton");

window.addEventListener("keydown", move);
let x=0;
let y=0;
function move(event){
    switch(event.key){
        case "ArrowDown":
            y+=5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y-=5;
            myDiv.style.top = y + "px";
            break;
        case "ArrowRight":
            x+=5;
            myDiv.style.left = x + "px";
            break;
        case "ArrowLeft":
            x-=5;
            myDiv.style.left = x + "px";
    }
}

resetButton.addEventListener("click", ()=>{
    x = 0;
    y = 0;
    myDiv.style.top = 0;
    myDiv.style.left = 0;
})