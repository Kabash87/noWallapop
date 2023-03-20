export function isEmailValid(email) {
    //Valida que el Correo tenga sentido
const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) 
        
return mailRegExp.test(email)

}