export async function loginUser(email, pass){
    const user = {
        username: email,
        password: pass
    }

    //Conexion con Sparrest
  const response =  await fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      })

    if (!response.ok) {
        throw new Error('Error al Identificar al Usuario. Intente nuevamente')
    }

    const data = await response.json()

    return data.accessToken
}

