    const historico = [];
    document.getElementById('Formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const modalElement = document.getElementById('exampleModal');
    const modal1 = bootstrap.Modal.getOrCreateInstance(modalElement);
    const titulo = document.getElementById('title').value;
    const datai = document.getElementById('datai').value;
    const dataf = document.getElementById('dataf').value;
    const desc = document.getElementById('desc').value;
    if(titulo.trim() === "" || datai.trim() === "" || dataf.trim() === "" || desc.trim() === ""){
        alert("Preencha todos os campos.");
    }else{
        document.getElementById('title_res').value = titulo;
        document.getElementById('datai_res').value = datai;
        document.getElementById('dataf_res').value = dataf;
        document.getElementById('desc_res').value = desc;
        historico.push({ titulo, datai, dataf, desc });
        modal1.hide();
    }
});
document.getElementById("exx").addEventListener("click", function(){
    document.getElementById("lis").remove();
});
function atualizarHistorico() {
    const lista = document.getElementById('listaHistorico');
    if (!lista) return;

    lista.innerHTML = "";

    historico.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "list-group-item";
      li.textContent = `${index + 1}) Cão: ${item.cachorro}, Gato: ${item.gato}, Ração: ${item.racao}, Desc: ${item.desc}`;
      lista.appendChild(li);
    });
  }
