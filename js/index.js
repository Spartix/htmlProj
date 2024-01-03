//import agrandir from "./taille.js"





function agrandir(object){
    const doc = document.getElementById(object)
    doc.style.fontSize = "100px"
}

function dezoom(object){
    document.getElementById(object).style.fontSize = "2rem"
}