//its use to when we want to menupulate the output of data , it can change as per ower will
//Use of "if, if else , else "

// let a = prompt("Enter the Number")
// a = Number.parseInt(a);//converting the string number into number

let a =23;

if(a<18){
    console.log("Use are not teen")
}
else if(a>18 && a<20){
    console.log("You are teen")
}
else{
    console.log("You are Audelt")
}

//let exe="Mango"
let exe="dfd";

switch(exe){
    case "Mango":
        console.log("You have  Mango")
        break;
    
    case "Stobary":
        console.log("You have  Stobary")
        break;

    case "Banana":
        console.log("You have  banana")
        break;

    default:
        console.log("YOu have not fruit")
}