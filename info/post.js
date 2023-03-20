//Publiaciones dentro de noWallapop
export async function getPosts() {

const postsURL = 'http://localhost:8000/api/posts'

    const response = await fetch(postsURL)
    const posts = await response.json()

//Se devuelven las publicaciones
return posts
}