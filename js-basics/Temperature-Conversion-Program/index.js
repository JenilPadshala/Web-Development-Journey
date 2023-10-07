const toCelsius = (temp) => (temp - 32) * (5/9);
const toFahrenheit = (temp) => temp * 9 / 5 + 32;
document.getElementById("submitButton").onclick = function(){
    let temp = Number(document.getElementById("textBox").value);
    if (document.getElementById("CelsiusRadio").checked){
        let newTemp = toCelsius(temp);
        newTemp = newTemp.toLocaleString(undefined, {style: "unit", unit: "celsius"});
        // console.log(typeof newTemp);
        document.getElementById("outputLabel").innerHTML = newTemp;
    }
    else if (document.getElementById("FahrenheitRadio").checked){
        let newTemp = toFahrenheit(temp);
        newTemp = newTemp.toLocaleString(undefined, {style: "unit", unit:"fahrenheit"});
        document.getElementById("outputLabel").innerHTML = newTemp;
    }
    else{
        document.getElementById("outputLabel").innerHTML = "Select a unit!";

    }
}

