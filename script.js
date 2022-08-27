
const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
const texSup = document.querySelector(".texto-superior");
const texInf = document.querySelector(".texto-inferior");
var letras=" abcdefghijklmnñopqrstuvwxyz";


function btnEncriptar() {
    globalThis.permitido = 0;
    tiene_letras(inputTexto.value);
    if (permitido == 0) {
        const textoEncriptado = encriptar(inputTexto.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage="none";
        inputTexto.value = "";
        btnCopy.style.display = "block";
        texSup.style.display = "none";
        texInf.style.display = "none";
    }
}

/* Validar si el texto  tiene caracteres distintos de minúsculas y espacios */

function tiene_letras(textoEncriptado) {
 
    for(i=0; i<textoEncriptado.length; i++) { 

        if (letras.indexOf(textoEncriptado.charAt(i),0)==-1) {
            alert ("Solo se permiten minusculas o espacios sin caracteres especiales o acentos");
            permitido = 1;
            return permitido;
        }
    } 
    permitido = 0;
    return permitido;
}

function encriptar(stringEncriptada) {
   let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
   stringEncriptada = stringEncriptada.toLowerCase();
      for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }    
   }
   return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesEncriptado = desEncriptar(inputTexto.value)
    mensaje.value = textoDesEncriptado;
    inputTexto.value = ""
}

function desEncriptar(stringDesEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesEncriptada = stringDesEncriptada.toLowerCase();
       for(let i=0; i < matrizCodigo.length; i++) {
         if(stringDesEncriptada.includes(matrizCodigo[i][1])) {
            stringDesEncriptada = stringDesEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
         }    
    }
    return stringDesEncriptada;
 }

function btnCopiar () {   
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto copiado al portapapeles")
} 