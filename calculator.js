let display = document.getElementById("display")
let buttons = document.querySelectorAll("button")

buttons.forEach(button => {
    button.addEventListener("click", function(){
        handleButtonClick(button.textContent);
    })
})

// Handle Buttons Click based on the button's content
function handleButtonClick(value){
    if(value === "C"){
        clearDisplay();
    } else if(value === "=" ){
        calculate();
    }else {
        addToDisplay(value)
    }
}

// Add value to display function
function addToDisplay(value){
    display.value += value;
}

// calculate the result
function calculate(){
    try{
        display.value  = eval(display.value);
    } catch{
        display.value = 'error';
    }

}

// Clear Screen
function clearDisplay(){
    display.value = ''
}