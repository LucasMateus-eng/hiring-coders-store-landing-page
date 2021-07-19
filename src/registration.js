window.addEventListener('load', handleForm)
const form = document.forms.registration

function handleForm() {
    const chkOffer = document.querySelector('#container .input-group-checkbox  #checkOffer')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        if (chkOffer.checked) {
            handleSubmit()
            handleData(true) 
        } else {
            handleSubmit()
            handleData(false)
        }
    })
}

function handleSubmit() {
    alert('Uhuul! Seja bem-vindo(a) ao melhor do mundo automotivo. Somos uma concessionária digital, mas estaremos sempre por perto :)')
    setInterval(handleRouter, 500)
}

function handleData(boolean) {
    localStorage.acceptOffer = boolean
    localStorage.clientName = form.name.value
    localStorage.clientEmail = form.email.value
    localStorage.phoneClient = form.phoneNumber.value
}

function handleRouter() {
    window.location.assign('../index.html')
}