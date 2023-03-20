export const getPostById = async (postId) => {
    //Busqueda de ID 
   const response = await fetch(`http://localhost:8000/api/posts/${postId}`)


   //Mensaje de error
   if (!response.ok) {
    throw new Error('La publicacion solicitada no existe')
   }

   const post = await response.json()
   return post
}

export const deletePost = async(postId) => {
    const token = localStorage.getItem('token')

    const response = await fetch(`http://localhost:8000/api/posts/${postId}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
        }
    })
}