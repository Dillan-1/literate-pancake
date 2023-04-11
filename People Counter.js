let saveEl = document.getElementById('save-el')
let count = 0

let countEl = document.getElementById ("count-el")

function increment(){
    count +=  1
    countEl.innerText = count
}
function save(){
    let countDash = count+'-'
    saveEl.innerText+= countDash
    console.log(count)
}
