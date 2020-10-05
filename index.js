let info={};
function sendData() {
    let firstInput = document.querySelector('#name')
    let secondInput = document.querySelector('#email')
    let messageInput = document.querySelector('#message')


    info["name"]= firstInput.value;
    info["email"]= secondInput.value;
    info["message"]= messageInput.value;

    /*console.log('Your name is', firstInput.value)
    console.log('Your surname is', surnameInput.value)
    console.log('Your email is', emailInput.value)*/

    console.log(info);
    firstInput.value = ''
    secondInput.value = ''
    messageInput.value = ''
  }