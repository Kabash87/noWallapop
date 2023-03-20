import { createUser } from "./signup.js"

export function signupController(signupElement){

signupElement.addEventListener('submit', async (event)=> {
    event.preventDefault()
    
    //Constancias de el formulario de relleno
    const emailElement = signupElement.querySelector('#email')        // Correo Electronico
    const passElement = signupElement.querySelector('#pass')          // Contraseña
    const passConfirmElement = signupElement.querySelector('#pass2')  // Confirma Contraseña
    const nameElement = signupElement.querySelector('#name')          // Nombre
    const lastnameElement = signupElement.querySelector('#lastname')  // Apellido
    

    if (isEmailValid(emailElement.value) &&
     isPassValid(passElement.value, passConfirmElement.value)) {
        //Crea usuario
        try {
            await createUser(emailElement.value, passElement.value, nameElement.value, lastnameElement.value)
            signupElement.reset()
            alert('Se ha creado el usuario correctamente, Bienvenido!')
            //Redireccion a otra pestaña
           
            window.location = '../index.html'
        } catch (error) {
         alert(error.message)  
        }
        
    }
 })

   //Funciones si el correo es inexistente o la contraseña esta mal ingresada
    function isEmailValid(email) {
        const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) //Valida que el Correo tenga sentido
        
        if (!mailRegExp.test(email)) {
            alert('El Correo ingresado es inexistente, ingrese otro correo valido')
            return false
        }
            return true
    }

    function isPassValid(pass, pass2) {
        if (pass !== pass2) {
            alert('Las contraseñas ingresadas no son correctas. Por favor revise')
            return false
        }
            return true
    }

  
}

