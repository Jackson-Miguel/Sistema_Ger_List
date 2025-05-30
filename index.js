    const historico = [];
    let indiceEditando = null;
    let cont = 1;
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
    historico.push({titulo, datai, dataf, desc});

    const container = document.querySelector('.lis');
    const div = document.createElement('div');
    const div_btn = document.createElement('div');
    const ed = document.createElement('button');
    const ex = document.createElement('button');
    const p = document.createElement('p');

    p.textContent = `Tarefa ${cont}`;
    ed.setAttribute("data-bs-toggle", "modal");
    ed.setAttribute("data-bs-target", `#exampleModal${cont}`);
    div.className = `t${cont}`;
    ex.id = `ex${cont}`

    ed.textContent = "Editar";
    ed.id = "edd"
    ed.className = "btn btn-secondary"
    ex.className = "btn btn-danger"
    ex.textContent = "Excluir";
    div_btn.className = 'buttons';

    container.appendChild(div)
    div.appendChild(p)
    div.appendChild(div_btn)
    div_btn.appendChild(ed)
    div_btn.appendChild(ex)

    const ultimo = historico[historico.length - 1];
    document.getElementById(`title_res${cont}`).value = ultimo.titulo;
    document.getElementById(`datai_res${cont}`).value = ultimo.datai;
    document.getElementById(`dataf_res${cont}`).value = ultimo.dataf;
    document.getElementById(`desc_res${cont}`).value = ultimo.desc;

    modal1.hide();
    cont++;
        
    document.getElementById('title').value = "";
    document.getElementById('datai').value = "";
    document.getElementById('dataf').value = "";
    document.getElementById('desc').value = "";

document.getElementById('Form1').addEventListener('submit', function(event) {
  event.preventDefault();

  const titulo = document.getElementById('title_res1').value;
  const datai = document.getElementById('datai_res1').value;
  const dataf = document.getElementById('dataf_res1').value;
  const desc = document.getElementById('desc_res1').value;

  if (!titulo || !datai || !dataf || !desc) {
    alert("Preencha todos os campos.");
    return;
  }

  if (indiceEditando !== null && historico[indiceEditando]) {
    historico[indiceEditando] = { titulo, datai, dataf, desc };
    alert("Atualizado com sucesso!");
    exibirHistorico();
    indiceEditando = null;

    // Limpar campos após atualizar
    document.getElementById('Form1').reset();
  } else {
    alert("Nenhum item selecionado para atualizar.");
  }
});

    }
}); 
    
 

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