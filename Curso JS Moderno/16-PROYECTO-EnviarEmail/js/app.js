document.addEventListener('DOMContentLoaded',function (){
    // Seleccionar los elementos de l interfaz
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const formulario = this.documentElement.querySelector('#formulario')

    // Asignar los eventos de los inputs
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e){
        console.log(e.target.parentElement);
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }
        limpiarAlerta(e.target.parentElement);
    }
    function mostrarAlerta(mensaje, referencia){
        //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }

        //Genera Alerta en html
        const error = document.createElement('P');
        error.textContent = mensaje ;
        error.classList.add('bg-red-600' ,'text-white','p-2','mt-2','text-center');
        //Inyectar error al formulario
        referencia.appendChild(error);
    }
    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }
})