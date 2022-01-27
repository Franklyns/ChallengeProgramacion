var btnCopy = document.querySelector("#btnCopiar");

btnCopy.addEventListener ("click",() => {
    event.preventDefault();

    var copyText = document.querySelector("#inCopy");
    copyText.disabled=false;
    copyText.select();
    document.execCommand("copy");
    copyText.disabled = true;
    
})

