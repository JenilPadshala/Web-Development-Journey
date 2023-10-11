const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");


innerDiv.addEventListener("click",colorToGreen);
outerDiv.addEventListener("click",colorToGreen,true);

function colorToGreen(){
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "lightgreen";
}