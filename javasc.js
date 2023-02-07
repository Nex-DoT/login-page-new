const btn =document.querySelector('.span');
const form = document.querySelector('.inputs');

function singup(){
    btn.style.left="112px";
    form.style.left="-262px"
}
function login(){
    form.style.left="0px"
    btn.style.left="0px"
}

const formSingup = document.querySelector('.singUp');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const testOfEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const aleret= document.querySelector('.alert');
const closefr =document.querySelector('.fa-times-circle');

formSingup.addEventListener('submit' , function(e){
    e.preventDefault();
    const eamilval=email.value;
    const usernameval=username.value;
    const passval=pass.value;

    if(usernameval===""){
        erore(username,"username fild is empthy , please type a username");
    }else{
        success(username);
    }

    if(eamilval ===""){
        erore(email,"email fild is empthy , please type your email");
    }else if(!testEmail(eamilval)){
        erore(email,"this email not a valid email");
    }else{
        success(email)
    }
    if(passval===""){
        erore(pass,"pass fild is empthy , please type a pass")
    }else if(passval.length<6){
        erore(pass,"pass is to short")
    }else{
        success(pass);
    }
    
    
    
})
function testEmail(email){
 return testOfEmail.test(email);
};

function erore(index,message){
    const alertTextuser=aleret.querySelector('.usernamep');
    const alertTextpass=aleret.querySelector('.passp');
    const alertTextemail=aleret.querySelector('.emailp');
    
    aleret.classList.add('active');
    if(index==username){
        alertTextuser.innerHTML=message;
        username.style.animation = "redalert 1s infinite"
        username.style.border="2px solid red" ;
    }
    if(index==email){
    alertTextemail.innerHTML=message;
    email.style.border="2px solid red" ;
    email.style.animation = "redalert 1s infinite"
    }
    if(index==pass){
    alertTextpass.innerHTML=message;
    pass.style.border="2px solid red" ;
    pass.style.animation = "redalert 1s infinite"
    }
}

function success(index){
    if(index==username){
        username.style.border="2px solid green" ;
    }
    if(index==email){
        email.style.border="2px solid green" ;

        
    }
    if(index==pass){
        pass.style.border="2px solid green" ;
    }
    if(index==pass || index==email || index==username){
      aleret.classList.remove('active');
    }
}


closefr.addEventListener('click' , function(){
    aleret.classList.remove('active');
})