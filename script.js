function cryptography (){
    let message = 0;
    let result = 5;
    let key = 145;

    return {
        increment(){
            message++;
        },
        getMessage(){
            return message;
        }
    }
}

const message1 = cryptography();
message1.increment();
message1.increment();
message1.increment();
console.log(message1.getMessage());