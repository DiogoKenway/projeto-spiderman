const modal = document.querySelector('#email-modal')
const openBtn = document.querySelector('.main-btn')
const closeBtn = document.querySelector('.close-btn')

openBtn.addEventListener('click', () =>{
    modal.style.display = 'initial'
})


closeBtn.addEventListener('click', () =>{
    modal.style.display = 'none'
})

addEventListener('click', e => {
    if(e.target == modal) {
        modal.style.display = 'none'
    }
})


const formFields = {
    submitForm: document.querySelector('#form'),
    name: document.querySelector('#name'),
    email: document.querySelector('#email'),
    password: document.querySelector('#password'),
    passwordConfirm: document.querySelector('#password-confirm')
}


function showError (input, message) {
    const formValidation = input.parentNode
    const errorMessage = formValidation.querySelector('p')

    formValidation.className = 'form-validation error'
    errorMessage.innerHTML = message
    errorMessage.style.display = 'initial'
}

function showValid (input) {
    const formValidation = input.parentNode
    formValidation.className = 'form-validation valid'
    const p = formValidation.querySelector('p')
    p.style.display = 'none'
}

function checkRequired(inputArray) {
    inputArray.forEach(input => {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} necessário`)
        } else {
            showValid(input)
        }
    })
}



function passwordMatch(input1, input2) {
    if (input1.value !== input2.value) showError(input2, "Senha não confere")
}


function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1)
}



function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} deve ter pelo menos ${min} caracteres`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} deve ser menor que ${max} caracteres`)
    } else {
        showValid(input)
    }
}



formFields.submitForm.addEventListener('submit', e => {
    e.preventDefault()

    checkRequired([formFields.name, formFields.email
                 , formFields.password, formFields.passwordConfirm])
    checkLength(formFields.name, 3, 30)
    checkLength(formFields.password, 8, 20)
    checkLength(formFields.passwordConfirm, 8, 20)
    passwordMatch(formFields.password, formFields.passwordConfirm)
})

