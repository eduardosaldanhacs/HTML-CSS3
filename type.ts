
function numericField(inputValue : string){
    return /^[0-9]*$/.test(inputValue);
}

function alphabetField(inputValue : string){
    return /^[a-zA-Z]*$/.test(inputValue);
}

function invalidCVV(cvv : string){
    return (!numericField(cvv) || cvv.length < 3);
}

function invalidCardNumber(cardNumber : string){
    return (!numericField(cardNumber) || cardNumber.length < 16);
}

function invalidName(name : string){
    return (!alphabetField(name) || name.length < 1);
}

function invalidDate(date : string){
    const inputDate = new Date(date);
    const currentDate = new Date();
    return (inputDate > currentDate);
}

function validateSubmit(){

    let incorrectFields : string[] = [];

    const cvv =  (<HTMLInputElement>document.getElementById('card-cvv')).value;
    if(invalidCVV(cvv) ){
        incorrectFields.push("CVV");
    }

    const cardNumber =  (<HTMLInputElement>document.getElementById('card-number')).value;
    if(invalidCardNumber(cardNumber) ){
        incorrectFields.push("Card Number");
    }

    const name = (<HTMLInputElement>document.getElementById('full-name')).value;
    if(invalidName(name)){
        incorrectFields.push("Name");        
    }

    const date = (<HTMLInputElement>document.getElementById('card-expiration')).value;
    if(invalidDate(date)){
        incorrectFields.push("Expiration Date");
    }
    
    window.alert("Please review the following fields:\n" + incorrectFields.join('\n') );
}

const submitButton = document.querySelector('.submitButton');
submitButton:addEventListener('click', validateSubmit);