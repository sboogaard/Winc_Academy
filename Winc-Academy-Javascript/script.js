const age = 19;
const isFemale = true;
const driverStatus = true;
const totalAmount = 100;
let firstName = Sean;

if (age >= 18 && isFemale && driverStatus) {
    document.write("WELCOME ")
    console.log("ACCESS GRANTED")
} else {
    document.write("GET OUT ")
    alert("FORBIDDEN!!")
    console.log("ACCESS DENIED")
}



if (isFemale) {
    document.write(" Lady ")
}



if (driverStatus) {
    document.write("You may leave ")
} else{
    document.write("CALL A CAB! ")
}

if (age >= 18 && age <= 25 ){
    document.write("KORTING ")
} else {
    document.write("Ouwe flikker ")
}

if (firstName === Bram || Sarah){
    document.write("GRATIS BIER!! ")
} else {
    document.write("Verander je naam voor gratis bier! ")
}

if (totalAmount >= 25) {
    document.write( "Gratis bittergarnituurtje")
} else if (totalAmount >= 50) {
    document.write( "Gratis Nachosssss")
} else if (totalAmount >= 100) {
    document.write( "Champagne!")
}