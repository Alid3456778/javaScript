//there are three types of keyword which is created to create variables 
//the old one is var and new updates are let const
//var: is very simple which can create and hold the integer and character value and 
        //     its not block size mean any thing is givien outside the bock can be fetch inside of block
        //      it can be redeclared    

//let: is the block size means any thing which is given in the outside of block is different from indside of block
        //     and it can hold the integer and character value

//const: is the block size means any thing which is given in the outside of block is different
        //     from indside of block and it can hold the integer and character value and it can
        //     not be changed after the declaration of the variable


//const and let are the most in use case


const age=4;
console.log(age);
//const cannot be re inis
// age=4;
// console.log(age);



let sudo =23;
{
    //this is block and let consider the block and outside block in different way


    let sudo=44;
    console.log(sudo);
}
console.log(sudo);

