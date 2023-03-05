let text = document.getElementById("input-message");

function cryptography (){
    let message = text.value;
    let result = 5;
    let key = 145;

    return {
       /* increment(){
            message++;
        },*/
        getMessage(){
            return message;
        }
    }
}

const message1 = cryptography();

console.log(message1.getMessage());