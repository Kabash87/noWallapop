export function buildPostView(post){ 
   const newPostElement = document.createElement('article')
   newPostElement.innerHTML = `

   <div class="card" style="width: 18rem;">
       <img src="${post.img}" class="card-img-top" alt="...">
       <div class="card-body">
          <h5 class="card-title">${post.name} <span class="badge badge-secondary" style="background-color: rgb(95, 95, 95);">${post.type}</span></h5>
          <p class="card-text">${post.info}</p>
          <a href="../vista/product/product.html?postId=${post.id}" class="btn btn-primary">Más informacion</a>
    </div></div>
    
   `

 return newPostElement
}

//Spinner de carga 
export function buildSpinnerView(){
    return `
    <!--Spinner de carga-->
    <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div></div>
        `
}

/**Mensaje cuando ocurre un error dentro del sistema */
export function buildError(){
  return `
  <div class="error">
  <br><h2>¡Oh no! :(</h2>
  <h6>En estos momentos existe un fallo dentro de nuestro servicio</h6>
  <h6>Estamos arreglando este problema lo más pronto posible</h6>
  <br><hr>
</div>`
}

/**Mensaje cuando no se ha encontrado ninguna publciacion */
export function buildEmptyPostList(){
  return ` 
  <div class="error">
  <br><h2>Mmmmm :/</h2>
  <h6>No se ha encontrado ninguna publicacion por el momento</h6>
  <h6>Vuelve más tarde o crea tu propia publicacion gratis</h6>
  <br><hr>
</div>
`
}