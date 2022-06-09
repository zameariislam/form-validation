//  Target all user Input

let id = (id) => document.getElementById(id)

let username = id('username'),
    email = id('email'),
    password = id('password'),
    form = id('form')
let classes = (classes) => document.getElementsByClassName(classes);
let successIcon = classes('success-icon'),
    failureIcon = classes('failure-icon'),
    errorMessage = classes('error');

// add eventlistener to the form 
form.addEventListener('submit', (e) => {
    e.preventDefault()
    engine(username, 0, 'User can not be blank');
    engine(email, 1, 'Email can not be blank');
    engine(password, 2, 'Password can not be blank');


})


let engine = (id, index, message) => {

    if (id.value.trim() === '') {
        errorMessage[index].innerHTML = message;
        failureIcon[index].style.opacity = 1;
        successIcon[index].style.opacity = 0;

    }
    else {
        errorMessage[index].innerHTML = ''
        failureIcon[index].style.opacity = 0;
        successIcon[index].style.opacity = 1;

    }
    id.value = '';
}



















