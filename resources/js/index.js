var operators = ['+','-','*','/'];
var operatorOne = 0;
var operator = '';
function numkeyClick(character){
    var existingInput = document.getElementById('displayinput').innerHTML
    if(existingInput == '0' || existingInput == 'Are you stupid ?'){
        existingInput = ''
        document.getElementById('displayinput').innerHTML = ''
    }
    if(operators.includes(character)){
        if(operators.includes(existingInput.charAt(existingInput.length - 1))){
            document.getElementById('displayinput').innerHTML = existingInput.slice(0, -1) + character
        }
    } if(character == '='){
        try{
            document.getElementById('displayinput').innerHTML = eval(existingInput).toFixed(4)           
        }
        catch(error){
            document.getElementById('displayinput').innerHTML = 'Are you stupid ?'
        }
    } else if(character == 'DEL'){
        document.getElementById('displayinput').innerHTML = existingInput.slice(0,-1)
    } else if(character == 'CE'){
        document.getElementById('displayinput').innerHTML = '0'
    } else {
        document.getElementById('displayinput').innerHTML += character
    }
}