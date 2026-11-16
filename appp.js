const input = document.getElementById("texto");
const agregar = document.getElementById("agregar");
const lista = document.getElementById("lista");
const tareas = JSON.parse(localStorage.getItem("tareas")) || [];//Creo una constante llamada tareas, que sera 

tareas.forEach(function (texto) {
    tarea(texto);
});

function tarea(texto) { 

    const li = document.createElement("li"); li//
    li.textContent = texto;
    lista.appendChild(li);

    const button = document.createElement("button");
    button.textContent = "borrar";
    li.appendChild(button);

    button.addEventListener("click", function () {
        li.remove();
        const posicion = tareas.indexOf(texto);
        tareas.splice(posicion, 1);
        localStorage.setItem("tareas", JSON.stringify(tareas));
    })
};

agregar.addEventListener("click", function () {// indico que funcion hara agregar al hacerle click//


    if (input.value.trim() === "") {
        return;
    }
    const entrada = input.value.trim();
    tarea(entrada);
    tareas.push(entrada);
    localStorage.setItem("tareas", JSON.stringify(tareas));
    console.log(tareas);
    input.value = "";
});
