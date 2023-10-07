let date = new Date();
console.log(date);

// date = date.toLocaleString();
document.getElementById("myLabel").innerHTML = formatDate(date) + " "+ formatTime(date);

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let dateOfMonth = date.getDate();
    // let day = date.getDay();
    return `${dateOfMonth}-${month}-${year}`;
}

function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours > 12 ? "PM" : "AM";
    hours = (hours % 12) || 12;
    return `${hours}:${minutes}:${seconds} ${ampm}`;
}