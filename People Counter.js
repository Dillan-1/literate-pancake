<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h2{
    font-size: 50px;
    margin-top: 0;
    margin-bottom: 20px;
}

button {
    border: none;
    padding-top: 10px;
    color: white;
    font-weight: bold;
    width: 200px;
    margin-bottom: 5px;
    border-radius: 5px;
    height: 65px ;
}

#increment-btn {
        background: darkred;
}
        </style>
</head>
<body>
    <h1>People Entered</h1>
    <h2 id="count-el">0</h2>
    <button id="increment-btn" onclick="increment()">INCREMENT</button>
    <button id="save-btn " onclick = "save()" >SAVE</button>
    <p id="save-el">Previous entries:</p>
    <script>
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
    count = 0
    countEl.innerText = count
}
        </script>
</body>
</html>
