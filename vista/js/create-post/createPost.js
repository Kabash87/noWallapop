export const createPost = async (postContent, postContentName, postContentInfo, postContentPrice, postContentCurrency, postContentImg, postContentNick, postContentNumber) => {

   
    const newPost = {
        name: postContentName,
        info: postContentInfo,
        price: postContentPrice,
        currency: postContentCurrency,
        type: postContent,
        img: postContentImg,
        nickname: postContentNick,
        number: postContentNumber
    }

    const token = localStorage.getItem('token')

    const response = await fetch('http://localhost:8000/api/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(newPost)
    })

    if (!response){
        throw new Error('Error creando Publicacion, regresa mas tarde')
    }
}