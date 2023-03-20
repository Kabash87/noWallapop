export function buildGreeting(name){
    const text = document.createElement('h6')
    text.textContent = `Usuario iniciado sesión con: ${name}`
    return text
}