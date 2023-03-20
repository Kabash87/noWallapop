import { createPost } from "./createPost.js"

export const createPostController = async (createPostFormElement) => {
  createPostFormElement.addEventListener('submit', async (event) =>{
    event.preventDefault()

    const formData = new FormData(createPostFormElement)

    const postContent = formData.get('flexRadioDefault')
    const postContentName = formData.get('name')
    const postContentInfo = formData.get('info')
    const postContentPrice = formData.get('price')
    const postContentCurrency= formData.get('currency')
    const postContentImg= formData.get('img')
    const postContentNick= formData.get('nickname')
    const postContentNumber= formData.get('number')

    try {
        await createPost(postContent, postContentName, postContentInfo, postContentPrice, postContentCurrency, postContentImg, postContentNick, postContentNumber)
        alert('Se ha creado la publicacion correctamente')
        window.location = '../index.html'
    } catch (error) {
        alert('Hubo un error en la creacion de la publicacion')
    }

  })
}