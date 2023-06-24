let screen = document.getElementById('screen');  // to take the screen
buttons = document.querySelectorAll('button');  // to take the buttons
let screenValue= '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;  // to make button to do function
        console.log('button text is', buttonText)
        if(buttonText== 'X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue= "";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue); // eval is a func in js to evaluate
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}