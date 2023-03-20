//Se importa el Controlador de Inicio de Sesion
import { signupController } from "./su-controller.js"


//Se traen todos los elementos del Inicio de Sesion
const signupElement = document.querySelector('#createUser')
signupController(signupElement)