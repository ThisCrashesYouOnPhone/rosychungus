document.addEventListener('DOMContentLoaded', () => {
    console.log('SCRIPT IS RUNNING');
    alert('Homo chickens says hi');

    try {
        console.log('Document ready state:', document.readyState);
    } catch (error) {
        console.error('Error checking document state:', error);
    }
});

// Immediate logging
console.log('IMMEDIATE CONSOLE LOG');
alert('Immediate Alert!');
// Define an array of background colors
const backgrounds = [
    "megenta", // Orange
    "black", // Green
    "blue", // Blue
    "grey", // Pink
    "#F06T78"  // Gold
];

let index = 0;

function changeBackground() {
    console.log(`Attempting to change background. Current index: ${index}`);
    console.log(`Trying to set background to: ${backgrounds[index]}`);

    try {
        document.body.style.backgroundColor = backgrounds[index];
        console.log(`Successfully changed background to: ${backgrounds[index]}`);
        index = (index + 1) % backgrounds.length;
    } catch (error) {
        console.error('Error changing background:', error);
    }
}

// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Initial change
    changeBackground();

    // Change background every 500ms
    setInterval(changeBackground, 5000);
});