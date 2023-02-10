console.log("Entro index.js");

//Mediante el DOM podemos acceder al HTML desde JS
//document es la forma de acceder a nuestro HTML
console.log(document);

let title1 = document.getElementById("titulo1");
let title2 = document.getElementById("titulo2");

title1.innerText = "Modificado desde JS";

//Agregar una nueva clase desde JS (REEMPLAZA LAS CLASES ACTUALES)
title1.className = "text-green";
console.log(title1.classList);

title2.className = "text-orange";
title2.innerText = "Modificando título 2 desde JS";

title2.style.color = "red"; //Aquí cambiamos el color del título sin la necesidad de modificar el archivo style.
title2.style.fontSize = "1rem";

let title3Uno = document.getElementById(titulo3Uno);
let title3Dos = document.getElementById(titulo3Dos);

let conjuntoTitles3 = document.getElementsByTagName("h3");

//Ahora la etiqueta h3 se puede usar como un array
// conjuntoTitles3[0].classList.add("text-blue");
// conjuntoTitles3[1].classList.add("text-orange");

for (let i = 0; i < conjuntoTitles3.length; i++) { //Aquí le estamos dando el mismo color a todo el array
    // conjuntoTitles3[i].classList.add("text-blue");
    if (i === 2) { //Aquí estamos seleccionando el array en específico que queremos que cambie de color, mientras que los otros quedará en un color uniforme, esto es posible gracias a la posición i o index sin la necesidad de que las etiquetas tengan un id, simplemente lo utilizamos como array.
        conjuntoTitles3[i].classList.add("text-orange");
        conjuntoTitles3[i].innerText = "Soy de color naranja";
        conjuntoTitles3[i].innerHTML = "<p> Soy de color naranja <p>"; //Con innerHTML se pueden utilizar etiquetas de marcado, mientras que con innertText lo toma todo como un string.
    } else {
        conjuntoTitles3[i].classList.add("text-blue");
    }
}

console.log(conjuntoTitles3);

let contenedorElementos = document.getElementById("contenedorElementos");
let parrafoNuevo = document.createElement("h1");
parrafoNuevo.innerHTML = "Hola <br> Mundo";
contenedorElementos.appendChild(parrafoNuevo); //Esto hace que se muestre el nuevo párrafo


let acumulador = 2;
function clickButton(){
    acumulador++;
    console.log(acumulador);
    if (acumulador == 5) {
        let emoji = document.getElementById("emoji");
        emoji.innerText = "💥";
        // acumulador = 2;
    }
    // emoji.style.fontSize = acumulador + "rem";
    emoji.style.fontSize = `${acumulador}rem`;

    alert("Se hizo click en el button");

    let emojiTexto = document.getElementById("emojiTexto");
    emojiTexto.innerText = "Emoji con lentes";
}


function clickButton2(){
    let emoji = document.getElementById("emoji");
    emoji.innerText = "🤬";
    acumulador = 2;
    emoji.style.fontSize = `${acumulador}rem`;
}