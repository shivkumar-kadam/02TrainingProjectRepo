let userInputHeightErr = document.querySelector('.inputHeightErr');
let userInputWeightErr = document.querySelector('.inputWeightErr');

const userInputHeight = document.querySelector('#inputHeight');
const userInputWeight = document.querySelector('#inputWeight');  

const newbtn=document.querySelector(".form-submit-button")
const btnReset=document.querySelector(".form-reset-button")

let P;

let heightValue= "";
let weightValue= "";




newbtn.addEventListener('click',function validateUserInput(e){
    e.preventDefault()
    heightValue= userInputHeight.value;
    weightValue= userInputWeight.value;

    if (userInputHeight.value===""){
        P="";
        P = document.createElement('p')
        P.appendChild(document.createTextNode(`Please enter your height in CM`))
        userInputHeight.appendChild(P);
        userInputHeightErr.appendChild(P);

    }else if (userInputWeight.value===""){
        P="";
        P = document.createElement('p');
        // Update Value for Weight
        P.appendChild(document.createTextNode(`Please enter your weight in KG`))
        userInputWeight.appendChild(P);
        userInputWeightErr.appendChild(P);

    }else{
        // Update value for Height
        P="";
        P = document.createElement('p')
        P.appendChild(document.createTextNode(`Your height is ${heightValue} CM`))
        userInputHeight.appendChild(P);
        userInputHeightErr.appendChild(P);

        P="";
        P = document.createElement('p');
        // Update Value for Weight
        P.appendChild(document.createTextNode(`Youe weight is ${weightValue} KG`))
        userInputWeight.appendChild(P);
        userInputWeightErr.appendChild(P);

    };
});

btnReset.addEventListener('click',function (e){
    e.preventDefault()
    document.getElementById("bmi-form").reset();
    userInputHeightErr.innerText=""
    userInputWeightErr.innerText=""
    
});