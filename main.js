

// target id and classes 

let id = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)
let username = id('username');
let email = id('email');
let password = id('password');
let form = id('form')
let errorMessage = document.getElementsByClassName('error')
let successIcon = classes('success-icon')
let failureIcon = classes('failure-icon')
// add event listener 
form.addEventListener('submit', function (e) {
    e.preventDefault()
    engine(username, 0, 'User name can not be blank');
    engine(email, 1, 'Email  can not be blank');
    engine(password, 2, 'Password can not be blank');


})

let engine = (id, serial, message) => {

    if (id.value.trim() === '') {
        errorMessage[serial].innerHTML = message;
        failureIcon[serial].style.opacity = 1
        successIcon[serial].style.opacity = 0
    }
    else {
        errorMessage[serial].innerHTML = ''
        successIcon[serial].style.opacity = 1
        failureIcon[serial].style.opacity = 0

    }

    id.value = ''

}





