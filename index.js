function validarForm(event){
    event.preventDefault();

    let titulo = document.forms["Formulario"]["title"].value;
    let datai = document.forms["Formulario"]["datei"].value;
    let dataf = document.forms["Formulario"]["datef"].value;
    let desc = document.forms["Formulario"]["desc"].value;

    if(titulo === "" || datai === "" || dataf === "" || desc === ""){
        alert("Preencha todos os campos.");
        return false
    }
    titulo = event.target.titulo.value;
     document.getElementById("res").innerText = "Olá, " + titulo + "!";
}