const userName=document.getElementById('name');
const email=document.getElementById('email');
const number=document.getElementById('number');
// console.log(name,email,number);
let validName=false;
let validemail=false;
let validNumber=false;

userName.addEventListener('blur',()=>{
    // console.log('blurred');
    //validate name
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
    let str=userName.value;
    // console.log(regex,str)
    if(regex.test(str)){
        console.log("It matched");
        userName.classList.remove('is-invalid');
        validName=true;
    }
    else{
        console.log('No match');
        userName.classList.add('is-invalid');
        validName=false;
    }

});

email.addEventListener('blur',()=>{
    // console.log('blurred');
    let regex=/^([._a-zA-Z0-9]+)@([_.0-9a-zA-Z]+)\.([a-zA-Z]+){2,7}$/;
    let str=email.value;
    // console.log(regex,str)
    if(regex.test(str)){
        console.log("It matched");
        email.classList.remove('is-invalid');
        validemail=true;
    }
    else{
        console.log('No match');
        email.classList.add('is-invalid');
        validemail=false;
    }
});


number.addEventListener('blur',()=>{
    // console.log('blurred');
    let regex=/^[0-9]{10}$/;
    let str=number.value;
    // console.log(regex,str)
    if(regex.test(str)){
        console.log("It matched");
        number.classList.remove('is-invalid');
        validNumber=true;
    }
    else{
        console.log('No match');
        number.classList.add('is-invalid');
        validNumber=false;
    }
});
let failure=document.getElementById('failure');
let success=document.getElementById('success');
let submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();

    if(validName && validNumber && validemail){
        success.classList.add('show');
        failure.classList.remove('show');
    }
    else{
        failure.classList.add('show');
        success.classList.remove('show');
    }  
});
