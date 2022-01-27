var btnCifrar = document.querySelector("#btnCrypter");

btnCifrar.addEventListener("click",function(event){
    event.preventDefault();

    var formulario = document.querySelector("#formIngreso");
    var textEncriptar = formulario.inpuTexto.value;

    var formOut = document.querySelector("#formSalida");
    formOut.outText.value = encriptar(textEncriptar);

});

var btnDescifrar = document.querySelector("#btnDecrypter");

btnDescifrar.addEventListener("click",function(event){
    event.preventDefault();

    var formulario2 = document.querySelector("#formIngreso");
    var textDecrypter = formulario2.inpuTexto.value;


    var formOut2 = document.querySelector("#formSalida");
    formOut2.outText.value = Desencriptar(textDecrypter);

});


function encriptar (ingreso){
    var textoCifrado = '';  
    for (let letra of ingreso){        
        if (letra == "a") (letra = "ai");
        if (letra == "e") (letra = "enter");
        if (letra == "i") (letra = "imes");
        if (letra == "o") (letra = "ober");
        if (letra == "u") (letra = "ufat");
        textoCifrado = textoCifrado + letra;
    }
    return textoCifrado;
}

function Desencriptar (ingreso){
    let textoDescifrado = '';  
        
    if (ingreso.search("ai") >= 0) (ingreso = ingreso.replace(/ai/g,'a'));
    if (ingreso.search("enter") >= 0) (ingreso= ingreso.replace(/enter/g,'e'));
    if (ingreso.search("imes") >= 0) (ingreso= ingreso.replace(/imes/g,'i'));
    if (ingreso.search("ober") >= 0) (ingreso= ingreso.replace(/ober/g,'o'));
    if (ingreso.search("ufat") >= 0) (ingreso= ingreso.replace(/ufat/g,'u'));            
        
            
    textoDescifrado = ingreso;
    //}
    return textoDescifrado;
}

