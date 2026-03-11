// encrypted credentials

const USERS=[

{
user:"dXNlckBhcmFiaWNHcmFtbWFycGx1cw==",
pass:"dXNlckBhcmFiaWM=",
role:"user"
},

{
user:"YWRtaW5AYXJhYmljZ3JhbW1hcnBsdXM=",
pass:"YWRtaW5AYXJhYmlj",
role:"admin"
}

];

function decrypt(v){
return atob(v);
}

// LOGIN

function login(){

let u=document.getElementById("username").value;
let p=document.getElementById("password").value;

let valid=false;
let role="";

USERS.forEach(acc=>{

if(u===decrypt(acc.user) && p===decrypt(acc.pass)){

valid=true;
role=acc.role;

}

});

if(valid){

localStorage.setItem("arabicgrammarplusLogin","true");
localStorage.setItem("arabicgrammarplusRole",role);

document.getElementById("loginOverlay").style.display="none";

let btn=document.getElementById("logoutBtn");
if(btn) btn.style.display="block";

}else{

document.getElementById("error").innerText="Wrong Username or Password";

}

}

// LOGOUT

function logout(){

localStorage.removeItem("arabicgrammarplusLogin");
localStorage.removeItem("arabicgrammarplusRole");

window.location.href="index.html";

}


// SESSION CHECK

window.addEventListener("DOMContentLoaded",function(){

let loginStatus=localStorage.getItem("arabicgrammarplusLogin");

let logoutBtn=document.getElementById("logoutBtn");

if(loginStatus==="true"){

if(document.getElementById("loginOverlay")){
document.getElementById("loginOverlay").style.display="none";
}

if(logoutBtn){
logoutBtn.style.display="block";
}

}else{

if(!document.getElementById("loginOverlay")){
window.location.href="index.html";
}

}

});
