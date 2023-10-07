//producing code
const promise  = new Promise((resolve, reject)=> {
    let fileLoaded = false;

    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File NOT loaded");
    }
});

//consuming code
promise.then((value) => console.log(value))
.catch(error => console.log(error));