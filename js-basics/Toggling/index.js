const toggleButton = document.querySelector("#toggleButton");
const img = document.querySelector("#leomessi");

toggleButton.addEventListener("click",togglefunc);

function togglefunc(){
    if(img.style.visibility == "hidden"){
        img.style.visibility = "visible";
    }
    else{
        img.style.visibility = "hidden";
    }
}