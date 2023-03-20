
//Controlador de Publicaciones
//Importa la lista de Publicaciones
import { postListController } from "./info/controller.js"
import { userActionController } from "./utils/userActionsC.js"
import { botonesActionController } from "./utils/userActionsC.js"

const postListElement = document.querySelector('.posts-list')
const userActionconElement = document.querySelector('.post')
const botonesElement = document.querySelector('.botones')

postListController(postListElement)
userActionController(userActionconElement)
botonesActionController(botonesElement)





