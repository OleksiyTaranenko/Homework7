let aElement = document.getElementsByClassName("sendMessage")[0];

aElement.addEventListener('click', createMessage);

function createMessage(event) {
    event.preventDefault();
    let inputUser = document.getElementsByClassName("typeMessage")[0];
    let body = document.body;    
    let pElement = document.createElement('p');
    pElement.style.width = '470px';
    pElement.style.height = '30px';
    pElement.style.position = 'relative';
    pElement.style.bottom = '620px';
    pElement.style.left = '60px';    
    pElement.style.background = 'teal';    
    pElement.style.fontSize = 'x-large';    
    pElement.style.wordWrap = 'break-word';   
    body.appendChild(pElement);
    pElement.textContent = inputUser.value;
    document.getElementsByClassName("typeMessage")[0].value = "";
    return pElement;
}