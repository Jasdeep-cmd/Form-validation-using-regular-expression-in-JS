const userName=document.getElementById('name');
const email=document.getElementById('email');
const number=document.getElementById('number');
// console.log(name,email,number);

userName.addEventListener('blur',()=>{
    // console.log('blurred');
    //validate name
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){0,10}$/;
    let str=userName.value;
    // console.log(regex,str)
    if(regex.test(str)){
        console.log("It matched");
        userName.classList.remove('is-invalid');
    }
    else{
        console.log('No match');
        userName.classList.add('is-invalid');
    }

});

email.addEventListener('blur',()=>{
    // console.log('blurred');
});


number.addEventListener('blur',()=>{
    // console.log('blurred');
});
