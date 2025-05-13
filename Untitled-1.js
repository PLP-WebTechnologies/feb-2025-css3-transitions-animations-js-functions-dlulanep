// Apply stored preferences on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedText = localStorage.getItem('dynamicText');
    const dynamicText = document.getElementById('dynamicText');

    if (storedText) {
        dynamicText.textContent = storedText;
    }
});

// Change text content dynamically and store it in localStorage
const changeTextBtn = document.getElementById('changeTextBtn');
changeTextBtn.addEventListener('click', () => {
    const dynamicText = document.getElementById('dynamicText');
    const newText = "The text has been changed!";
    dynamicText.textContent = newText;

    // Add animation
    dynamicText.classList.add('fade-in');
    setTimeout(() => dynamicText.classList.remove('fade-in'), 1000);

    // Store the new text in localStorage
    localStorage.setItem('dynamicText', newText);
});

// Add or remove an element with animation
const toggleElementBtn = document.getElementById('toggleElementBtn');
let elementAdded = false;

toggleElementBtn.addEventListener('click', () => {
    if (!elementAdded) {
        const newElement = document.createElement('p');
        newElement.id = 'newElement';
        newElement.textContent = "This is a dynamically added element.";
        newElement.classList.add('fade-in'); // Add animation
        document.body.appendChild(newElement);
        elementAdded = true;
    } else {
        const existingElement = document.getElementById('newElement');
        if (existingElement) {
            existingElement.classList.add('fade-in'); // Add animation before removal
            setTimeout(() => {
                document.body.removeChild(existingElement);
                elementAdded = false;
            }, 1000); // Wait for animation to complete
        }
    }
});