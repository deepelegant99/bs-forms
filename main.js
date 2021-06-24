const myForm = document.querySelector('#my-form'); 
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const msg = document.querySelector('.msg')


myForm.addEventListener('submit', onSubmit)


function onSubmit(e){
    e.preventDefault(); 

    if(inputName.value==='' || inputEmail.value===''){
        msg.classList.add('error')
        msg.textContent ='Please enter required fields'
        setTimeout(()=>msg.remove(), 3000);
    }else{
        document.querySelector('body').classList.add('bg-dark');
        inputEmail.value = ''
        inputName.value  = ''
    }
}
   
