var NotError = true
var gender = window.prompt('if you is Male press 1 if is Female press 2')
var age = window.prompt('say your age')
if (gender >2 || gender < 1) {
    document.write('<p>You send a error answer</p>')
    NotError = false
}
if (gender == 1 && age == 18) {
    document.write('<p> You is Male and 18 years old, go for military')
}

if (NotError == true && age <18 || gender == 2) {
    document.write('<p> You dont need go to military </p>')
}

var HeWant = window.prompt('Do you want go to military? press 1: Yes Press 2: No')

if (gender == 1) {
    HeWant ==1? document.write('<p>Oh , very good.</p>'): document.write('<p>Oh serious? I want you in military.</p>')
}   
document.write('<p>Have a good day</p>')

console.log('End')