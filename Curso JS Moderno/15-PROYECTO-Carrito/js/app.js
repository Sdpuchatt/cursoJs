// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrtito = [];


cargarEventListeners();
function cargarEventListeners() {
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}


function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}
// Lee el contenido del html al que le dimos click y exreae la informacion del curso
function leerDatosCurso(curso){
    
    //Crear un objeto con el contenido del curso Actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Agrega elementos al arreglo de carrito
    articulosCarrtito = [...articulosCarrtito, infoCurso];
    console.log(articulosCarrtito);
    carritoHTML();
}

// Muestra el carrito de compras en el HTML
function carritoHTML(){
    //Limpiar el HTML
    limpiarHTML();
    //Recorre el carrito y genera el HTML
    articulosCarrtito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>  
                 <img src="${curso.imagen}" width=100>
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad} </td>
            <td>   
            `;
        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
        })
}
//Elimina los cursos del tbody
function limpiarHTML(){
    //Forma lenta
    //contenedorCarrito.innerHTML = '';

    //Forma rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
