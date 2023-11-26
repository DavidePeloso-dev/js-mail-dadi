const usersMail= ['davide@gmail.com', 'fabio@gmail.com', 'luca@gmail.com'];
const usersPassword = ['mangia', 'prega', 'ama'];

const inputMail = document.querySelector('#email')
const inputPassword = document.querySelector('#password');


const errorModal = document.querySelector('.bg-modal');

const accessForm = document.querySelector('#access_form');

accessForm.addEventListener('submit', function(sub){
    sub.preventDefault();
    sub.stopPropagation();
    const userMailAccess = inputMail.value;
    const userPasswordAccess = inputPassword.value;

    if(usersMail.includes(userMailAccess)){
        for (let i = 0; i < usersMail.length; i++) {
            const mail = usersMail[i];
            if ((userMailAccess === mail)) {
                if(userPasswordAccess === usersPassword[i]){
                    console.log('access');
                    inputMail.classList.remove('error', 'is-invalid')
                    inputPassword.classList.remove('error', 'is-invalid')
                } else {
                    console.log('something wrong');
                    errorModal.classList.remove('d-none');
                    document.querySelector('.card-title').innerHTML = 'Try to check your credentials';
                    accessForm.classList.add('was-validated');
                    inputMail.classList.add('error', 'is-invalid')
                    inputPassword.classList.add('error', 'is-invalid')
                }
            } 
        }
    } else {
        errorModal.classList.remove('d-none');
        document.querySelector('.card-title').innerHTML = 'You are NOT registered';
        accessForm.classList.add('was-validated');
        inputMail.classList.add('error', 'is-invalid')
        inputPassword.classList.add('error', 'is-invalid')
    }
})

inputMail.addEventListener('click', function(){
    inputMail.classList.remove('error', 'is-invalid')
})

inputPassword.addEventListener('click', function(){
    inputPassword.classList.remove('error', 'is-invalid')
})

const closeModal = document.querySelector('#close_modal');

closeModal.addEventListener('click', function(){
    errorModal.classList.add('d-none');
})