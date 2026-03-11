document.addEventListener("DOMContentLoaded", function () {

const USERS = [
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

function decrypt(v){ return atob(v); }

// CSS
const style = document.createElement("style");
style.innerHTML = `
#loginOverlay{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.85);
display:flex;
justify-content:center;
align-items:center;
z-index:9999;
}

.loginBox{
background:#111;
padding:30px;
border-radius:10px;
text-align:center;
color:white;
width:320px;
}

.loginBox input{
width:100%;
padding:10px;
margin:8px 0;
border:none;
border-radius:5px;
background:white;
color:black;
}

.loginBtn{
width:100%;
padding:10px;
background:#ff7a18;
border:none;
color:white;
cursor:pointer;
border-radius:5px;
}

#logoutBtn{
position:fixed;
top:15px;
right:15px;
padding:10px 18px;
background:#ff3b3b;
color:white;
border:none;
border-radius:6px;
cursor:pointer;
display:none;
z-index:999;
}
`;
document.head.appendChild(style);

// HTML
document.body.insertAdjacentHTML("beforeend",`

<button id="logoutBtn">Log Out</button>

<div id="loginOverlay">
<div class="loginBox">

<h2>ArabicGrammarPlus Login</h2>

<input type="text" id="username" placeholder="Username">
<input type="password" id="password" placeholder="Password">

<button class="loginBtn" id="loginBtn">Login</button>

<p id="error" style="color:red"></p>

</div>
</div>

`);

// Login
document.getElementById("loginBtn").addEventListener("click",function(){

let u=document.getElementById("username").value.trim();
let p=document.getElementById("password").value.trim();

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
document.getElementById("logoutBtn").style.display="block";

}else{

document.getElementById("error").innerText="Wrong Username or Password";

}

});

// Logout
document.getElementById("logoutBtn").addEventListener("click",function(){

localStorage.removeItem("arabicgrammarplusLogin");
localStorage.removeItem("arabicgrammarplusRole");

window.location.href="index.html";

});

// Session check
let loginStatus = localStorage.getItem("arabicgrammarplusLogin");

if(loginStatus==="true"){

document.getElementById("loginOverlay").style.display="none";
document.getElementById("logoutBtn").style.display="block";

}else{

if(!window.location.pathname.includes("index.html")){
window.location.href="index.html";
}

}

});
