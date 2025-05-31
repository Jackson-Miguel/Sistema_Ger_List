   const historico = [];
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
    const ex = document.createElement('button');
    const p = document.createElement('p');
    const viz = document.createElement('button');

    p.textContent = `Tarefa ${cont}`;
    div.className = `t${cont}`;

    ex.id = `ex${cont}`
    ex.className = "btn btn-danger"
    ex.textContent = "Excluir";

    viz.className = "btn btn-secondary"
    viz.textContent = "Vizualizar";
    viz.setAttribute("data-bs-toggle", "modal");
    viz.setAttribute("data-bs-target", `#exampleModal${cont}`);

    div_btn.className = 'buttons';

    container.appendChild(div);
    div.appendChild(p);
    div.appendChild(div_btn);
    div_btn.appendChild(viz);
    div_btn.appendChild(ex);

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