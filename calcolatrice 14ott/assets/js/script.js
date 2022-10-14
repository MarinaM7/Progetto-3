
function scriviId(numero) {
    document.getElementById('empty').value += numero;
}
function operazione(operaz) {
    document.getElementById('empty').value += operaz;
}

function clearScreen() {
    document.getElementById('empty').value = "";
}

function calcolo() {
    var result = eval(document.getElementById('empty').value);
    document.getElementById('empty').value = result;
}
