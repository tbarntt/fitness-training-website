
// One Rep Max Calculator

const form = document.getElementById("rm-form");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the user's inputs
    const weight = Number(document.getElementById("weight").value);
    const reps = Number(document.getElementById("reps").value);

    // Validate the inputs
    if (!Number.isFinite(weight) || weight <= 0 ||
        !Number.isInteger(reps) || reps < 1 || reps > 30) {
        result.textContent = "Please enter valid weight and repetitions.";
        return;
    }

    // Calculate estimated 1RM using the Epley formula
    const oneRepMax = reps === 1
        ? weight
        : weight * (1 + reps / 30);

    // Display the result
    result.textContent =
        "Your estimated 1RM is " + oneRepMax.toFixed(1) + " lbs.";
});
