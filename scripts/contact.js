const form = document.querySelector("#contact > form")
const elements = {
    name: document.querySelector("#name"),
    email: document.querySelector("#contact > form > div:nth-child(2) > div:nth-child(2) > input[type=email]"),
    contact: document.querySelector("#contact"),
    service: document.querySelector("#service"),
    msg: document.querySelector("#contact > form > div:nth-child(8) > input[type=text]")
};

form.addEventListener('submit', e => {
    console.log(
        `Name: ${elements.name.value}
        Email: ${elements.email.value}
        Contact Method: ${elements.contact.value}
        Service: ${elements.service.value}
        Message: ${elements.msg.value}`
    )
    e.preventDefault()
})
