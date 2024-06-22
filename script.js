document.addEventListener('DOMContentLoaded', () => {
    const countDisplay = document.getElementById('count');
    const errorDisplay = document.getElementById('error');
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const clearButton = document.getElementById('clear');
    
    let count = 0;
    
    function updateDisplay() {
        countDisplay.innerText = count;
        if (count <= 0) {
            errorDisplay.style.display = 'block';
            decrementButton.disabled = true;
        } else {
            errorDisplay.style.display = 'none';
            decrementButton.disabled = false;
        }
        clearButton.style.display = count > 0 ? 'inline-block' : 'none';
    }
    
    decrementButton.addEventListener('click', () => {
        if (count > 0) {
            count--;
        }
        updateDisplay();
    });
    
    incrementButton.addEventListener('click', () => {
        count++;
        updateDisplay();
    });
    
    clearButton.addEventListener('click', () => {
        count = 0;
        updateDisplay();
    });
    
    updateDisplay();
});