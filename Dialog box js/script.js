// Function to display an alert dialog
function showAlert() {
    window.alert("This is an alert dialog.");
}

// Function to display a confirm dialog
function showConfirm() {
    const result = window.confirm("Do you want to continue?");
    if (result) {
        window.alert("You clicked 'OK'.");
    } else {
        window.alert("You clicked 'Cancel'.");
    }
}

// Function to display a prompt dialog
function showPrompt() {
    const userInput = window.prompt("Please enter your name:", "John Doe");
    if (userInput !== null) {
        window.alert("You entered: " + userInput);
    } else {
        window.alert("You canceled the prompt.");
    }
}
