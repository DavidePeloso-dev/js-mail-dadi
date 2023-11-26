// define the mail and password in the sistem
const usersMail= ['davide@gmail.com', 'fabio@gmail.com', 'luca@gmail.com'];
const usersPassword = ['mangia', 'prega', 'ama'];

// declare the inputs in the form
const inputMail = document.querySelector('#email')
const inputPassword = document.querySelector('#password');

// declare the error modal
const errorModal = document.querySelector('.bg-modal');

// declare the all form
const accessForm = document.querySelector('#access_form');

// validating the submit
accessForm.addEventListener('submit', function(sub){
    // prevent defoult function
    sub.preventDefault();
    sub.stopPropagation();
    // declare the value in the imputs
    const userMailAccess = inputMail.value;
    const userPasswordAccess = inputPassword.value;

    // are some input empty?
    if (userMailAccess === "" || userPasswordAccess === ""){
        accessForm.classList.add('was-validated');
    }
    // if not, is the mail in the sistem?
    else if(usersMail.includes(userMailAccess)){
        // Yes
        for (let i = 0; i < usersMail.length; i++) {
            const mail = usersMail[i];
            // if so, is the password the correct one?
            if ((userMailAccess === mail)) {
                if(userPasswordAccess === usersPassword[i]){
                    // Yes
                    console.log('access');
                    inputMail.classList.remove('error', 'is-invalid')
                    inputPassword.classList.remove('error', 'is-invalid')
                } else {
                    // No
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
        // No
        errorModal.classList.remove('d-none');
        document.querySelector('.card-title').innerHTML = 'You are NOT registered';
        accessForm.classList.add('was-validated');
        inputMail.classList.add('error', 'is-invalid')
        inputPassword.classList.add('error', 'is-invalid')
    }
})

//remove the error validatin
inputMail.addEventListener('click', function(){
    inputMail.classList.remove('error', 'is-invalid')
})

inputPassword.addEventListener('click', function(){
    inputPassword.classList.remove('error', 'is-invalid')
})


//close the error modal
const closeModal = document.querySelector('#close_modal');

closeModal.addEventListener('click', function(){
    errorModal.classList.add('d-none');
})