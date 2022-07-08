let username = `Hoodoo`;
let user_age = `thirty three`;
let is_member = true ;

if(username === "admin" || user_age >= 30 && is_member === true){
    console.log("Welcome Back!");
}else{
    console.log("Welcome");
}

console.log (`Hello ${username}. You are ${user_age}`);