document.addEventListener('DOMContentLoaded',function (){
    // Seleccionar los elementos de l interfaz
    const inputEmail = document.querySelector('#email')
    const inputAsunto = document.querySelector('#asunto')
    const inputMensaje = document.querySelector('#mensaje')
    const formulario = document.querySelector('#formulario')
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    // Asignar los eventos de los inputs
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    btnReset.addEventListener('click', function(e){
        e.preventDefault();
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        formulario.reset();
        comprobarEmail();
    })

    function validar(e){
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta(`El email no es valido`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        limpiarAlerta(e.target.parentElement);

        // Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();
        //Comprobar el objeto email
        comprobarEmail();
    }
    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia);

        //Genera Alerta en html
        const error = document.createElement('P');
        error.textContent = mensaje ;
        error.classList.add('bg-red-600' ,'text-white','p-2','mt-2','text-center');
        //Inyectar error al formulario
        referencia.appendChild(error);
    }
    function limpiarAlerta(referencia){
         //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }
    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        resultado = regex.test(email)
        return resultado;
         
    }
    function comprobarEmail(){
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return
        }
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
        console.log(email)
    } 
})
