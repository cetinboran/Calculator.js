const number1 = document.getElementById("Number1Text");
const number2 = document.getElementById("Number2Text");
const output = document.getElementById("outputText");
const operations = []
let numbers = [];
let total = 0;

for(let i = 1; i <= 4; i++){
    let operation = document.getElementById("n" + i);
    operations.push(operation);
}

operations[3].addEventListener("click", () => {
    getNumbers();
    
    if(numbers[1] == 0){
        output.textContent = "0'a bölemezsiniz";
    }
    else{
        total = numbers[0] / numbers[1];
        render();
    }
});

operations[2].addEventListener("click", () => {
    getNumbers();
    
    total = numbers[0] * numbers[1];
    render();
});

operations[1].addEventListener("click", () => {
    getNumbers();
    
    total = numbers[0] - numbers[1];
    render();
});

operations[0].addEventListener("click", () => {
    getNumbers();

       for(let number of numbers) {
           total += number;
       }
       output.textContent = total;
       total = 0;
});

const getNumbers = () => {
    if(number1.value == "" || number2.value == ""){
    }
    else{
        numbers = [parseInt(number1.value), parseInt(number2.value)];
    }
}

const render = () => {
    output.textContent = total;
    total = 0;
}
