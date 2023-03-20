import { isEmailValid } from "../../../utils/isEmailValid.js";
import { loginUser } from "./login.js";

export function logInController(logInElement){
    
    logInElement.addEventListener('submit', (event) =>{
    event.preventDefault()
  
    const emailElement = logInElement.querySelector('#username')

    if(!isEmailValid(emailElement.value)){
        alert('El Email ingresado esta mal escrito, revise nuevamente')
    } else{
      logUser(logInElement)
    }
})
    async function logUser(logInElement) {
        const formData = new FormData(logInElement)
        const username = formData.get('username')
        const password = formData.get('password')
try {
   const jwt =  await loginUser(username, password)
   localStorage.setItem('token', jwt)
   window.location = '../index.html'
} catch (error) {
    alert('Error al Inicio de Sesión, intente nuevamente o más tarde')
  }        
 }
}