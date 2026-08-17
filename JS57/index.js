console.log("i am a tutorial on loops")

//looping repetative task
//types of loops in js
// for loop
let a=1;
//basic forr loop
for (let i = 0; i < 100; i++) {
    console.log(a+i)
    
}

let obj={
    name:"abhishek",
    role:"programmer",
    company:"codewith harry"
}

for(const key in obj){
    const element=obj[key];
    console.log(key)
}

//while loop
// let i=6;
// while(i<7){
//     console.log(i);
//     i++;
// }

//do-while loop
let i=10;

do{
    console.log(i)
    i++;
}while(i<6);