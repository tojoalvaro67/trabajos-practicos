let b_texto = document.querySelector ("#b1")
let b_fondo = document.querySelector ("#b2")
let b_color = document.querySelector ("#b3")
let b_letra = document.querySelector ("#b4")
let parrafo = document.querySelector ("#p1")
let REINICIAR = document.querySelector ("#b5")

b_texto.onclick = function(){
    parrafo.textContent = 'Hola a todos'
}

b_fondo.onclick = function(){
    parrafo.style.backgroundColor = "green"
}

b_color.onclick = function (){
    parrafo.style.color = "white"
}

b_letra.onclick = function (){
    parrafo.style.fontFamily = "impact"
}

REINICIAR.onclick = function(){
    parrafo.style.fontFamily = "arial"
    parrafo.style.color = "black"
    parrafo.style.backgroundColor = "red"
   parrafo.textContent = 'este texto puede modificarse'
}    
