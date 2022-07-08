let username = `Hoodoo`;
let user_age = `thirty three`;
let is_member = true ;

if(username === "admin" || user_age >= 30 && is_member === true){
    console.log("Welcome Back!");
}else{
    console.log("Welcome");
}

console.log (`Hello ${username}. You are ${user_age}`);


let max_volume = 42;
let current_volume = 12;

console.log(max_volume / current_volume);
console.log(max_volume / current_volume * 100);


let users  = [`Colleen`,`Mathew`,`Lola`,`Macy`,`Ripley` ];
let user_ages = [33,35,10,5,3];

let first_user_name = users[0];
let last_user_name = users[4];
let middle_user_name = users[2];

console.log(last_user_name);
