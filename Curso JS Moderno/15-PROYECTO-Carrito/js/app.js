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

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrtito = []; // Reseteamos el arreglo
        limpiarHTML();
    });
}


function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }   
}
// Elimina un curso del carrito
function eliminarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        // Eliminar del arreglo del carrito
        articulosCarrtito = articulosCarrtito.filter(curso => curso.id !== cursoId);
        carritoHTML();
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
    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrtito.some(curso => curso.id === infoCurso.id)
    if(existe){
        //Actualizamos la cantidad
        const cursos = articulosCarrtito.map(curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; // retorna el objeto actualizado
            }else{
                return curso; // retorna los objetos que no son los duplicados
            }
        });
        articulosCarrtito = [...cursos];
    }else{
        articulosCarrtito = [...articulosCarrtito, infoCurso];
    }
    // Agrega elementos al arreglo de carrito
    console.log(articulosCarrtito); 
    carritoHTML(); 
}

// Muestra el carrito de compras en el HTML
function carritoHTML(){
    //Limpiar el HTML
    limpiarHTML();
    //Recorre el carrito y genera el HTML
    articulosCarrtito.forEach(curso => {
        const {imagen, titulo, precio, id, cantidad} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>  
                 <img src="${imagen}" width=100>
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad} </td>
            <td>  
                <a href='#' class="borrar-curso" data-id="${id}">X</a>
            </td>
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
