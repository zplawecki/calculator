const Calculator = (n1, opeator, n2) => {
    let result = ''
    
    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'substract') {
        result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
        result = parseFloat(n1) * parseFloat(n2)
    } else if (opeator === 'divide') {
        result = parseFloat(n1) / parseFloat(n2)
    }
    
    return result
}