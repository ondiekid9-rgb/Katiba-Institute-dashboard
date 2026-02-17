// script.js

// Function to get the current date and time in the specified format
function getCurrentDateTime() {
    const date = new Date();
    return date.toISOString().slice(0, 19).replace('T', ' ');
}

// Function to handle dummy data
function handleDummyData() {
    const dummyData = [
        { id: 1, name: 'Sample Item 1' },
        { id: 2, name: 'Sample Item 2' },
        { id: 3, name: 'Sample Item 3' }
    ];
    console.log('Dummy Data:', dummyData);
}

// Interactive function
function interactiveFunctionality() {
    console.log('Current Date and Time (UTC):', getCurrentDateTime());
    handleDummyData();
}

// Execute interactive functionality
interactiveFunctionality();