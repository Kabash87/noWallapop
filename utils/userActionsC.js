import { decodeToken } from "./decodeToken.js"
import { buildGreeting } from "./userActionView.js"
export function userActionController(userAction){
  const token = localStorage.getItem('token')


  //Se borran los Botones de Registro e Publicacion
  if (!token) {
    //Sesion NO iniciada, se borra el Boton de Publicacion
    const postElement = userAction.querySelector('#post')
    postElement.remove()

  } else{
    //Sesion Iniciada, se borra el Boton de Registro
    const signupElement = userAction.querySelector('#signup')
    signupElement.remove()

    const payload = decodeToken(token)
    userAction.appendChild(buildGreeting(payload.username))
    
  }
}

//Se borra los Botones de Inicio y Cierre de Sesión
export function botonesActionController(botonesAction){
  const logoutElement = botonesAction.querySelector('#logout')
    const token = localStorage.getItem('token')
    if (token) {
        //Se borra el Boton de Inicio de Sesion
        const signupElement = botonesAction.querySelector('#signup')
        signupElement.remove()
        logoutElement.addEventListener('click', () =>{
          localStorage.removeItem('token')
          alert('Se ha cerrado la Sesion')
          window.location.reload()
        })

    } else {
        logoutElement.remove()
    }

}