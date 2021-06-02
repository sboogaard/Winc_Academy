let username = prompt("Hello! What is your name? ");

alert("Hey " + username );

let number = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...")

let result = alert(Math.ceil(Math.random(number) * 25))

let answer = result.length

if (number === answer){
    alert("Correct!!")
}
else alert("FAIL!!!")
