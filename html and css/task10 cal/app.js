function dabaya(e){
    document.getElementById('inp').value += e
}
function equal(){
    var a = document.getElementById('inp')
    a.value = eval(a.value)
}
    function clearall() {
        document.getElementById('inp').value = '';
    }
    function removeLastCharacter() {
        var inputField = document.getElementById('inp');
        var inputValue = inputField.value;
        
        // Check if there's any content to remove
        if (inputValue.length > 0) {
            // Remove the last character
            inputValue = inputValue.slice(0, -1);
            inputField.value = inputValue;
        }
    }






    