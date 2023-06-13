let result = document.getElementById('result');

function appendSymbol(symbol) {
    result.value += symbol;
}

function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}

function clearResult() {
    result.value = '';
}
