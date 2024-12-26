// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');


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
    console.log(curso)
    //Crear un objeto con el contenido del curso Actual
    const infoCurso = {
        imagen : curso.querySelector('img').src,
    }

    console.log(infoCurso)
}