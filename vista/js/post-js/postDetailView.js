export const buildPostDetail = (post) =>{
    return `
    <div class="card mb-3" style="width: 70rem; margin: 0px auto">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${post.img}" class="img-fluid rounded-start" width="400px">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title">${post.name} <span class="badge badge-secondary" style="background-color: rgb(95, 95, 95);">${post.type}</span></h3>
          <p class="card-text">${post.info}</p>
          <h4>${post.price}${post.currency}</h4>
          <div class="informacion" style="line-height: 50%;">
          <p class="card-text"><small class="text-muted">Información del Vendedor: </small></p>
          <h5> ${post.nickname}</h5>
          <p>- ${post.number}</p></div>
        </div></div>
        <button id="deletePost" class="btn btn-primary btn-lg">Borrar Publiacion</button>
        </div>
    `
}