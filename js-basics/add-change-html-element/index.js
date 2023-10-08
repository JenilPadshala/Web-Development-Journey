// const NameHeader = document.createElement("h1");

// NameHeader.textContent = window.prompt("Enter your name: ");

// document.body.appendChild(NameHeader);

const myList = document.querySelector("#fruits");

const listItem = document.createElement("li");
listItem.textContent = "Mango";

// myList.prepend(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);