// lev1_2

let btn = document.querySelector("#btn");
let percent = document.querySelector(".zeit");

let start = 100;

btn.addEventListener("click", () => {
    console.log("test");
    let interval = setInterval(() => {
        if (start == 0) {
            clearInterval(interval)
        }
        else {
            start--;
            percent.innerHTML = `${start}%`
        }
    }, 100)
})


// lev1_3

//Browsername: Navigator userAgent
//betriebssystem-Architektur
//Browser Version: 
//Innere Breite des Dokuments
//Dokument Innenhöne:
//Color Depth:
//Pixel Depth:

let btn2 = document.querySelector(".btn2");
let outputData = document.querySelector(".browserData");

console.log(window);
console.log(navigator.appName); //Browser Name
console.log(navigator.oscpu);

console.log(navigator.appVersion); //Browser Version

console.log(window.innerWidth); //Innere Breite Dokunent;
console.log(window.innerHeight); //Innere Höhe
console.log(window.screen.colorDepth) //color Depth;
console.log(window.screen.pixelDepth);


btn2.addEventListener("click", () => {
    outputData.innerHTML = `Browsername: ${navigator.appName}<br>
                            Betriebssystem-Architektur: ${navigator.oscpu}<br>
                            Browser Version: ${navigator.appVersion}<br>
                            Innere Breite des Dokuments: ${window.screen.availWidth}<br>
                            Innenhöne des Dokuments: ${window.screen.availHeight}<br>
                            Color Depth: ${window.screen.colorDepth}<br>
                            Pixel Depth: ${window.screen.pixelDepth}`
})







