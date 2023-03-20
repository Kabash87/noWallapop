import { deletePost, getPostById } from "./postDetail.js"
import { buildPostDetail } from "./postDetailView.js"
import {decodeToken} from "../../../utils/decodeToken.js"

export const postDetailController = async (postDetailElement, postId) =>{

    try {
        const post = await getPostById(postId)
        postDetailElement.innerHTML = buildPostDetail(post)
        handleDeletePostButton(postDetailElement, post)
    } catch (error) {
        alert(error)
    }

    //Boton de borrado de Publicacion
function handleDeletePostButton(postDetailElement, post){
        const token = localStorage.getItem('token')
        const deleteButtonElement = postDetailElement.querySelector('#deletePost')

        if (!token) {
              deleteButtonElement.remove()
        } else{
            const userInfo = decodeToken(token)
            if(post.userId === userInfo.userId){
                //Se afirma el borrado de publicacion
                deleteButtonElement.addEventListener('click', async () =>{
                    const answer = confirm('¿Desea borrar la publicacion?')
                    if (answer) {
                        //Se borra la Publicacion
                     await deletePost(post.id)
                     alert('Se ha eliminado la publicacion correctamente')
                     window.location = '../../index.html'
                    }
                })
            }else{
                deleteButtonElement.remove()
            }
        }
    }
}
