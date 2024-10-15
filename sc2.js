let a = 1;

//for loop
for(let i =1; i<100; i++){
    console.log(a+i);
}
let obj = {
    name : "Stuti",
    role :"Software Engineer",
    Company : "Google"
}

//for in loop
for(let key in obj){
    console.log(obj[key]);}


    //for of loop
    for(const c of "Stuti"){
        console.log(c);}

        //While loop
        let i = 0;
        while(i<6){
            console.log(i);
            i++;
        }

        //do while loop
        let j = 0;
        do{
            console.log(j);
            j++;
        }while(j<6);