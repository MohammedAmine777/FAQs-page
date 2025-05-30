
function openD(element) {
    let txt = element.parentElement.nextElementSibling
    txt.classList.toggle("open")
    element.src = txt.classList.contains("open") ? "icon-minus.svg" : "icon-plus.svg" 
}

