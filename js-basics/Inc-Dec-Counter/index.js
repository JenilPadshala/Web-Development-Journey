let count = 0;

document.getElementById("increaseButton").onclick = function(){
    count++;
    document.getElementById("counterLabel").innerHTML = count;
}
document.getElementById("decreaseButton").onclick = function(){
    count--;
    document.getElementById("counterLabel").innerHTML = count;
}