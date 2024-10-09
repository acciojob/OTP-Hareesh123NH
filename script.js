const inputs = document.querySelectorAll(".code");

inputs.forEach((input, i) => {
    input.addEventListener("input", (e) => {
        if (/^[0-9]$/.test(e.target.value)) {
            // Move to the next input after valid input
            if (i < inputs.length - 1) {
                inputs[i + 1].focus();
            }
        }
    });

    input.addEventListener("keydown", (e) => {
        // Handle backspace: Move to the previous input
        if (e.key === "Backspace" && input.value === '') {
            if (i > 0) {
                inputs[i - 1].focus();
            }
        }
    });

    // Optional: Allow arrow navigation
    input.addEventListener("keyup", (e) => {
        if (e.key === "ArrowLeft" && i > 0) {
            inputs[i - 1].focus();
        } else if (e.key === "ArrowRight" && i < inputs.length - 1) {
            inputs[i + 1].focus();
        }
    });
});
