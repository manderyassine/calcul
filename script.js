let current = '';
let previous = '';
let op = null;

function enterNumber(num) {
    if (current.includes('.') && num === '.') return;
    current += num;
    updateScreen();
}

function selectOperation(operation) {
    if (current === '') return;
    if (previous !== '') {
        getResult();
    }
    op = operation;
    previous = current;
    current = '';
}

function getResult() {
    let result;
    const prev = parseFloat(previous);
    const curr = parseFloat(current);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (op) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = curr === 0 ? 'Err' : prev / curr;
            break;
        default:
            return;
    }
    current = result.toString();
    op = null;
    previous = '';
    updateScreen();
}

function resetCalc() {
    current = '';
    previous = '';
    op = null;
    updateScreen();
}

function updateScreen() {
    const screen = document.getElementById('screen');
    screen.innerText = current || '0';
}
