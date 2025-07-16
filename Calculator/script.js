const display = document.getElementById("display");
function appendValue(val){
    document.getElementById("display").value += val;
}
function clearDisplay(){
    document.getElementById("display").value = "";
}
 function calculate(){
    try{
        const result = eval(display.value);
        display.value = result;
    } catch (e) {
        alert("Invalid Expression!");
    }
 }

 document.addEventListener("keydown", function(event){
    const key = event.key;

    if (!isNaN(key) || "+-*/().".includes(key)) {

        appendValue(key);
    } else if (key === "Enter") {
        event.preventDefault();
        calculate();
    }else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }else if (key === "Escape"){
        clearDisplay();
    }
 });