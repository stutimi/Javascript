console.log("Hey Stuti, Welcome to javascript");
console.log("Hey Stuti, Your t-shirt is nice");
console.log("Hey Stuti, Your hair is nice");
console.log("Hey Stuti, you are awesome");

//function
function greet(name){
    console.log( "Hey " + name + " Welcome to javascript");
    console.log("Hey "+ name + " Your t-shirt is nice");
    console.log("Hey "+ name +" Your hair is nice");
    console.log("Hey " + name + " you are awesome");
}
greet("Khushi");
greet("Mr Serious");

function add(a,b){
    return a+b;
}
 sum = add(2,3);
 sum1 = add(4,5);
 sum2 = add(6,7);
 sum4 = add(8,9);

console.log( "The sum of these numbers is " ,sum);
console.log( "The sum of these numbers is " ,sum1);
console.log( "The sum of these numbers is " ,sum2);
console.log( "The sum of these numbers is " ,sum4);

function sub(a,b){
    console.log(a-b);
}
sub(5,3)
function add(a,b,  c =3){
    return a+b+c;
}
 sum = add(2,3);
 sum1 = add(4,5);
 sum2 = add(6,7);
 sum4 = add(8,9, 1);

console.log( "The sum of these numbers is " ,sum);
console.log( "The sum of these numbers is " ,sum1);
console.log( "The sum of these numbers is " ,sum2);
console.log( "The sum of these numbers is " ,sum4);

//Arrow function
const funn1 = (name) => {
    console.log( "Hey ", name);
    
}
funn1("23");
funn1("24");