
// let fruits = document.getElementsByName("fruits");

// document.getElementById("mySubmitRadio").onclick = function () {
//     fruits.forEach(fruit => {
//         if (fruit.checked) {
//             console.log(fruit.value);
//         }
//     })
// }


// let vegetables = document.getElementsByTagName("li");

// vegetables[0].style.backgroundColor = "lightgreen";


// let desserts = document.getElementsByClassName("desserts");
// desserts[2].style.backgroundColor = "red";

let elements = document.querySelectorAll("[for]");

elements.forEach( element => {
    element.style.backgroundColor = "lightblue";
})

