// Get all input fields with the class "code"
const inputs = document.querySelectorAll(".code");

inputs.forEach((input, i) => {
    input.addEventListener("keydown", (e) => {
        // Check for numeric key input
        if (/^[0-9]$/.test(e.key)) {
            // If the input is valid, move to the next field after the current one is filled
            inputs[i].value = '';  // Reset the current value to only accept one digit
            setTimeout(() => {
                if (i < inputs.length - 1) {
                    inputs[i + 1].focus(); // Move to the next input
                }
            }, 100);
        } else if (e.key === "Backspace") {
            // Handle backspace, move to the previous field if necessary
            if (input.value === '' && i > 0) {
                inputs[i - 1].focus(); // Move to the previous input
            }
        } else {
            e.preventDefault(); // Prevent non-numeric keys
        }
    });

    // Allow navigation with left/right arrow keys
    input.addEventListener("keyup", (e) => {
        if (e.key === "ArrowLeft" && i > 0) {
            inputs[i - 1].focus();
        } else if (e.key === "ArrowRight" && i < inputs.length - 1) {
            inputs[i + 1].focus();
        }
    });
});
