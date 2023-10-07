const firstMessage = (item, price) => alert(`Buy ${item} at just $${price}!`);
const secondMessage = () => alert(`Bro Please Buy it!`);
const thirdMessage = () => alert(`I beg you to buy it 😭`);

let item = "MKBHD Shoes";
let price = 1000.00;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 7000);
let timer3 = setTimeout(thirdMessage, 10000);

document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    document.getElementById("myLabel").innerHTML = "Item Bought!";
}