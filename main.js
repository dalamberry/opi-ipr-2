function rand(low, high) {
    return Math.floor(Math.random()*(high-low)+low)
}
let m1 = document.getElementById("m1")
let m2 = document.getElementById("m2")

let answer;
function generateQuiz() {
    let a = rand(1,10)
    let b = rand(1,10)
    answer = a * b;

    m1.innerText = a
    m2.innerText = b  
}

generateQuiz()

let input = document.getElementById("answer")
let btn = document.getElementById("check")

function submit(){
    if(input.value==answer) {
     alert ("ПРАВИЛЬНО")
 
     generateQuiz()
     input.value=""
     input.focus()
    } else {
     alert("НЕПРАВИЛЬНО")
    }
 }

btn.onclick = submit
window.onkeydown = function (ev) {
    if (ev.key == "Enter") {
        submit()
    }
}
