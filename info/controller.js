//Se importa la Informacion del documento de las publicaciones
//Se importa el View de las publicaciones
import { getPosts } from "./post.js";
import { buildPostView, buildSpinnerView, buildError, buildEmptyPostList } from "./postview.js";

export async function postListController(postListElement) {
   //Se muestra la ruleta de carga
   postListElement.innerHTML = buildSpinnerView()
   let posts = []

try {
    posts = await getPosts()

    //Oculta la ruleta de carga
    hideSpinner(postListElement)

    //Mensaje por si no se ha encontrado ninguna publicacion
    if (posts.length === 0) {
    postListElement.innerHTML = buildEmptyPostList()
    }
   
    for (const post of posts) {
      //Se añade dentro del DOM
      const newPostElement = buildPostView(post)
      postListElement.appendChild(newPostElement)
    }
} catch (error) {
   //Gestion si hay un error
   postListElement.innerHTML = buildError()
}





}

//Funcion que oculta la ruleta
function hideSpinner(postListElement){
   //Se oculta la ruleta de carga y se obtiene las publicaciones
   const spinnerElement = postListElement.querySelector('.text-center')
   spinnerElement.classList.add('hide')
}
  