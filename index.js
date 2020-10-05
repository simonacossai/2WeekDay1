let info={};
function sendData() {
    let firstInput = document.querySelector('#name');
    let secondInput = document.querySelector('#email');
    let messageInput = document.querySelector('#message');


    info["name"]= firstInput.value;
    info["email"]= secondInput.value;
    info["message"]= messageInput.value;

    console.log(info);
    firstInput.value = '';
    secondInput.value = '';
    messageInput.value = '';
  }


  function changeHeadingText(){
    let heading = document.querySelector('.brandName');
    heading.style.color = "red";
  }

  function changeBodyColor(){
    let page = document.querySelector('body');
    page.style.backgroundColor= "yellow";
    
  }

  function changeAddress(){
    let address = document.querySelector('#address');
    address.innerHTML = "Via Roma, 72";
  }