let grade = 60;

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
}



// let age = 5;

// while (age < 10) {
//     console.log("You're not even 10!")
//     age++;
//     console.log("Hell yeah")
// }

// document.write("You are 10 or over");

// for loop

var links = document.getElementsByTagName("a")

for (i = 1; i <= links.length; i++){
    console.log("This is link number " + i)
    
}

document.write("Loop complete");