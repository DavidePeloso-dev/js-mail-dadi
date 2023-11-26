// define the mail and password in the sistem
const usersMail= ['davide@gmail.com', 'fabio@gmail.com', 'luca@gmail.com'];
const usersPassword = ['mangia', 'prega', 'ama'];

//declare the playground
const playground = document.getElementById('playground');

// declare the container of the forms
const logInContainer = document.getElementById('logIn_container');
const signInContainer = document.getElementById('signIn_container');

/*------------------
  Sign In section 
------------------*/
// define the inputs in the form
const signInMail = document.getElementById('email_signIn');
const mailConfirmation = document.getElementById('email_confirmation');
const signInPassword = document.getElementById('password_signIn');
const passwordConfirmation = document.getElementById('password_confirmation');

// declare the all form
const signInForm =document.getElementById('signIn_form');

// validating the submit
signInForm.addEventListener('submit', function(sub){
    // prevent defoult function
    sub.preventDefault();
    sub.stopPropagation();
    // declare the value in the inputs
    const createSignInMail = signInMail.value;
    const createMailConfirmation = mailConfirmation.value;
    const createSingInPassword = signInPassword.value;
    const createPasswordConfirmation = passwordConfirmation.value;

    // are some input empty?
    if (createSignInMail === "" || createMailConfirmation === "" || createSingInPassword === "" || createPasswordConfirmation === ""){
        signInForm.classList.add('was-validated');
    }
    // if not, are the mail the same?
    else if(createSignInMail === createMailConfirmation){
        // if so, has the mail already been used?
        if(usersMail.includes(createSignInMail)){
            // Yes
            signInForm.classList.add('was-validated');
            errorModal.classList.remove('d-none');
            modalTitle.innerHTML = 'This email has already been used'
            modalText.innerHTML = 'Try to Log In'
            signInMail.classList.add('error', 'is-invalid');
            mailConfirmation.classList.add('error');
        }
        //if so, are the passwords the same?
        else if(createSingInPassword === createPasswordConfirmation){
               // if so, has the password already been used?
            if(usersPassword.includes(createSingInPassword)){
                // Yes
                errorModal.classList.remove('d-none');
                modalTitle.innerHTML = 'This Password has already been used'
                modalText.innerHTML = 'Try another one'
                signInPassword.classList.add('error', 'is-invalid');
                passwordConfirmation.classList.add('error');
                signInForm.classList.add('was-validated');
            }   
            else {
                // No
                usersMail.push(createSignInMail);
                usersPassword.push(createSingInPassword);
                logInContainer.classList.remove('d-none');
                signInContainer.classList.add('d-none');
            }
        }   
        // No
        else {
            errorModal.classList.remove('d-none');
            modalTitle.innerHTML = "The Passwords are not the same"
            signInPassword.classList.add('error', 'is-invalid');
            passwordConfirmation.classList.add('error');
            signInForm.classList.add('was-validated');
        }

    }   
    // No
    else {
        errorModal.classList.remove('d-none');
        modalTitle.innerHTML = "The Mails are not the same"
        signInMail.classList.add('error', 'is-invalid');
        mailConfirmation.classList.add('error');
        signInForm.classList.add('was-validated');
    }

})

// declare the Log In button
const logInButton = document.getElementById('to_LogIn');
logInButton.addEventListener('click', function(){
    signInContainer.classList.add('d-none');
    logInContainer.classList.remove('d-none');
})

//remove the error validatin
signInMail.addEventListener('click', function(){
    signInMail.classList.remove('error', 'is-invalid');
    mailConfirmation.classList.remove('error');
});

signInPassword.addEventListener('click', function(){
    signInPassword.classList.remove('error', 'is-invalid');
    passwordConfirmation.classList.remove('error');
})

/*------------------
   Log In section 
------------------*/

// declare the inputs in the form
const inputMail = document.getElementById('email')
const inputPassword = document.getElementById('password');

// declare the error modal
const errorModal = document.querySelector('.bg-modal');
const modalTitle = document.querySelector('.card-title');
const modalText = document.querySelector('.card-text')

// declare the all form
const accessForm = document.getElementById('access_form');

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
                    inputMail.classList.remove('error', 'is-invalid');
                    inputPassword.classList.remove('error', 'is-invalid');
                    logInContainer.classList.add('d-none');
                    playground.classList.remove('d-none');
                } else {
                    // No
                    console.log('something wrong');
                    errorModal.classList.remove('d-none');
                    modalTitle.innerHTML = 'Try to check your credentials';
                    accessForm.classList.add('was-validated');
                    inputMail.classList.add('error', 'is-invalid');
                    inputPassword.classList.add('error', 'is-invalid');
                }
            } 
        }
    } else {
        // No
        errorModal.classList.remove('d-none');
        modalTitle.innerHTML = 'You are NOT registered';
        document.querySelector('.card-text').innerHTML = 'Click on the Sign in button to start!';
        accessForm.classList.add('was-validated');
        inputMail.classList.add('error', 'is-invalid');
        inputPassword.classList.add('error', 'is-invalid');
    }
});

// declare the Sign In button
const signInButton = document.getElementById('to_SignIn');
signInButton.addEventListener('click', function(){
    logInContainer.classList.add('d-none');
    signInContainer.classList.remove('d-none');
})

//remove the error validatin
inputMail.addEventListener('click', function(){
    inputMail.classList.remove('error', 'is-invalid');
});

inputPassword.addEventListener('click', function(){
    inputPassword.classList.remove('error', 'is-invalid');
});

//close the error modal
const closeModal = document.querySelector('#close_modal');

closeModal.addEventListener('click', function(){
    errorModal.classList.add('d-none');
    modalText.innerHTML = "";
});

/*----------------------
   Playground section 
----------------------*/

// declare play butto
const playButton = document.getElementById('play');

//start the game
playButton.addEventListener('click', function(){
    // declare the die spot
    const userDie = document.querySelector('.user_die');
    const computerDie = document.querySelector('.computer_die');

    // declare the die number
    const userResult = Math.floor(Math.random()* 6 +1);
    const computerResult = Math.floor(Math.random()* 6 +1);
    userDie.innerHTML = userResult;
    computerDie.innerHTML = computerResult;

    // declare message component
    const message =document.getElementById('resoult');
    const messageHeader = document.querySelector('#playground .card-header');
    const messageBody = document.querySelector('#playground .card-message');

    message.classList.remove('d-none');

    if (userResult > computerResult){
        console.log('you win');
        messageHeader.innerHTML = 'CONGRATULATION'
        messageBody.innerHTML = 'You Win!'
    } else if(userResult < computerResult){
        console.log('you lose');
        messageHeader.innerHTML = "I'AM SORRY"
        messageBody.innerHTML = 'You Lose!'
    } else {
        console.log('pair');
        messageHeader.innerHTML = 'NOT BAD'
        messageBody.innerHTML = "It's Pair!"
    }


})

const logOutButton = document.getElementById('to_LogOut');
logOutButton.addEventListener('click', function(){
    playground.classList.add('d-none');
    logInContainer.classList.remove('d-none');
    inputMail.value = "";
    inputPassword.value = "";
    signInMail.value = "";
    signInPassword.value = "";
    mailConfirmation.value = "";
    passwordConfirmation.value = "";

})