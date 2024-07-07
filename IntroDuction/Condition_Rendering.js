//its use to when we want to menupulate the output of data , it can change as per ower will
//Use of "if, if else , else "

let a=prompt("Enter the Number");
a= Number.parseInt(a);//converting the string number into number

if(a<18){
    console.log("Use are not teen")
}
else if(a>18 && a<20){
    console.log("You are teen")
}
else{
    console.log("You are Audelt")
}