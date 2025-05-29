    const historico = [];
    let contador = 1;
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
        historico.push({ titulo, datai, dataf, desc});
        modal1.hide();
        document.getElementById('title_res').value = titulo;
        document.getElementById('datai_res').value = datai;
        document.getElementById('dataf_res').value = dataf;
        document.getElementById('desc_res').value = desc;
    }
});

function historico(titulo, datai, dataf, desc){
    const container = document.querySelector('.lis');
    const div = document.createElement('div');
    const div_btn = document.createElement('div');
    const ed = document.createElement('button');
    const ex = document.createElement('button');
    const p = document.createElement('p');
            p.textContent = "Tarefa" + contador;
            ed.setAttribute("data-bs-toggle", `#exampleModal${i}`);
            div.className = `t${contador}`;
            ex.id = `ex${contador}`
    ed.textContent = "Editar";
    ed.id = "edd"
    ed.className = "btn btn-secondary"
    ex.className = "btn btn-danger"
    ex.textContent = "Excluir";
    div_btn.className = 'buttons';
    container.appendChild(div)
    container.appendChild(div_btn)
    container.appendChild(p)
    container.appendChild(ed)
    container.appendChild(ex)
    contador++;
}









document.getElementById("ex1").addEventListener("click", function() {
    document.querySelectorAll(".t1").forEach(function(el) {
        el.remove();
    });
});
document.getElementById("ex2").addEventListener("click", function() {
    document.querySelectorAll(".t2").forEach(function(el) {
        el.remove();
    });
});
document.getElementById("ex3").addEventListener("click", function() {
    document.querySelectorAll(".t3").forEach(function(el) {
        el.remove();
    });
});
document.getElementById("ex4").addEventListener("click", function() {
    document.querySelectorAll(".t4").forEach(function(el) {
        el.remove();
    });
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
