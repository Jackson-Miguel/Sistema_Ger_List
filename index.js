function validarForm(event){
    event.preventDefault();

    let titulo = document.forms["Formulario"]["title"].value;
    let datai = document.forms["Formulario"]["datei"].value;
    let dataf = document.forms["Formulario"]["datef"].value;
    let desc = document.forms["Formulario"]["desc"].value;
    document.getElementById("btn_limpar").addEventListener("click", function(){
        titulo.innerText = ""
        datai.innerText = ""
        dataf.innerText = ""
        desc.innerText = ""
    });
    if(titulo === "" || datai === "" || dataf === "" || desc === ""){
        alert("Preencha todos os campos.");
        return false
    }else{
     document.getElementById("base").innerText = "Olá, " + titulo.value + "!";
    }
}
