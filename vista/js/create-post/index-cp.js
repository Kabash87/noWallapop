import { createPostController } from "./createPostController.js"

const token = localStorage.getItem('token')

//Valida si hay una Sesion Iniciada o regresa a la pagina de Inicio
if (!token) {
    window.location = '../index.html'
} else {
    const createPostFormElement = document.querySelector('#createPostForm')
    createPostController(createPostFormElement)
}