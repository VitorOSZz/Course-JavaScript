var color = window.prompt('Do you want change Background? Say a color')
color = color.toLowerCase()
document.body.style.backgroundColor = color;

color == 'red'? document.write('<p>This Color is Red 😀</p>'): document.write("<p> This Color is'nt Red</p>")
if (color == 'black') {
    document.write('<style> p { color: white}</style>')
}