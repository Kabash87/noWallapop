import { postDetailController } from "./post-controller.js"

//Se busca el ID de la publicacion
const params = new URLSearchParams(window.location.search)
const postId = params.get('postId')


//Regreso a la pagina de Inicio si no hay ID
if (!postId) {
    window.location = '../../index.html'
} else {
    //Controlador que pasa el ID
   const postDetailElement = document.querySelector('.producto')
    postDetailController(postDetailElement, postId)
}