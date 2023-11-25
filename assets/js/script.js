const userMail= ['davide@gmail.com', 'fabio@gmail.com', 'luca@gmail.com'];
const userPassword = ['mangia', 'prega', 'ama'];

const errorModal = document.querySelector('.bg-modal');

const Access = document.querySelector('#access_form');

Access.addEventListener('submit', function(sub){
    sub.preventDefault();
    const userMailAccess = document.querySelector('#email').value;
    const userPasswordAccess = document.querySelector('#password').value;

    if(userMail.includes(userMailAccess)){
        for (let i = 0; i < userMail.length; i++) {
            const mail = userMail[i];
            if ((userMailAccess === mail)) {
                if(userPasswordAccess === userPassword[i]){
                    console.log('access');
                } else {
                    console.log('something wrong');
                    errorModal.classList.remove('d-none');
                    document.querySelector('.card-text').innerHTML = 'Try to check your credentials';
                }
            } 
        }
    } else {
        errorModal.classList.remove('d-none');
        document.querySelector('.card-text').innerHTML = 'You are NOT registered';
    }
})

const closeModal = document.querySelector('#close_modal');

closeModal.addEventListener('click', function(){
    errorModal.classList.add('d-none');
})