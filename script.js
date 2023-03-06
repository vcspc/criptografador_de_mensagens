function start(){

    let buttonCode = document.querySelector('#button-code');
    let buttonDecode = document.querySelector('#button-decode');
    let buttonCopy = document.querySelector('#button-copy');
    let buttonKey = document.querySelector('#button-key');
        buttonKey.addEventListener('click', captureKey);
        buttonCode.addEventListener('click',  handButtonClickCode);
        buttonDecode.addEventListener('click', handButtonClickDecode);
        buttonCopy.addEventListener('click', handButtonClickCopy);
        
}

    function handButtonClickCode(){
        let textMessage = document.querySelector('#input-message');
        let codeResult = document.querySelector('#result');


        let message = textMessage.value;
        let messageCode = [];
        let keyMessageCode = [];
        let result = "";
        let messageTranslated = [];
    

        for(let cont = 0; cont < message.length; cont++){
            messageCode.push(message.charCodeAt(cont))
            keyMessageCode.push(addMessageCode(messageCode[cont], message))
            messageTranslated.push(String.fromCharCode(keyMessageCode[cont]))
            result = result + messageTranslated[cont]
        }

        codeResult.value = result;
        
    }

    function handButtonClickDecode(){
        let textMessage = document.querySelector('#input-message');
        let codeResult = document.querySelector('#result');


        let message = textMessage.value;
        let messageCode = [];
        let keyMessageCode = [];
        let result = "";
        let messageTranslated = [];
    

        for(let cont = 0; cont < message.length; cont++){
            messageCode.push(message.charCodeAt(cont))
            keyMessageCode.push(removeMessageCode(messageCode[cont], message))
            messageTranslated.push(String.fromCharCode(keyMessageCode[cont]))
            result = result + messageTranslated[cont]
        }

        codeResult.value = result;
    }

    function addMessageCode(number, message){

       for(let cont = 0; cont < message.length; cont++){

            let value = number + key[cont];


            return value;
        }
    }
        
    function removeMessageCode(number, message){
         
        for(let cont = 0; cont < message.length; cont++){
    
                let value = number - key[cont];
    
                return value;
            }
        }
    
    function handButtonClickCopy(){

        let codeResult = document.querySelector('#result');
        
        navigator.clipboard.writeText(codeResult.value);

        var copied = codeResult.value;

        alert('"' + copied + '"' + ' copiado');
    }

    
    var key = [];

    function captureKey (){
    
    key = [];

    let key1 = document.querySelector('#key').value

    for(var cont = 0; cont < 6; cont++){
        let keyAux = parseInt(key1[cont]);

        key.push(keyAux);
    }

    console.log(key);
    }

start();
