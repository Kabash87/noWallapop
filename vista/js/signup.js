export async function createUser(email, pass, name, lastname){
    const user = {
        username: email,
        password: pass,
        name: name,
        lastname: lastname
    }

    //Conexion con Sparrest
  const response =  await fetch('http://localhost:8000/auth/register', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      })

    if (!response.ok) {
        throw new Error('No se ha podido crearse el Usuario, Revisa los datos')
    }
}

