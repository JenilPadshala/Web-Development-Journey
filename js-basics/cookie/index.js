const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitButton = document.querySelector("#submitButton");
const cookieButton = document.querySelector("#cookieButton");

submitButton.addEventListener("click", () => {
    setCookie("firstName", firstText.value);
    setCookie("lastName", lastText.value);
});

cookieButton.addEventListener("click", ()=>{
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
})
function setCookie(name, value, daysToLive=365){
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires="+date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function deleteCookie(name){
    setCookie(name,null,null);
}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null
    cArray.forEach(element =>{
        if(element.indexOf(name) == 0){
            result =element.substring(name.length+1);
        }
    })
    return result;
}

// setCookie("email", "abc@gmail.com", 365);
// setCookie("firstName", "Nicole");
// setCookie("lastName", "Adams");

// console.log(getCookie("firstName"));
// console.log(getCookie("lastName"));

// console.log(document.cookie);

// deleteCookie("email");
// console.log(document.cookie + ";");