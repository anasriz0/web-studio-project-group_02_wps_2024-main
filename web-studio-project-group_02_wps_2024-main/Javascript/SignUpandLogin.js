function validateForm() {
    const email = document.querySelector('input[name="userEmail"]').value;
    const password = document.querySelector('input[name="userPassword"]').value;
    const confirmPassword = document.querySelector('input[name="repeatPassword"]').value;
    const captchaAnswer = document.getElementById('captchaAnswer').value;

    let incompleteFields = [];
    if (!email) incompleteFields.push("Email");
    if (!password) incompleteFields.push("Password");
    if (!confirmPassword) incompleteFields.push("Confirm Password");
    if (!captchaAnswer) incompleteFields.push("Captcha");

    if (incompleteFields.length > 0) {
        alert("Please complete the following fields: " + incompleteFields.join(", "));
        return false; // Prevent form submission
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false; // Prevent form submission
    }

    // Additional validations can be added here as needed

    return true; // Allow form submission if all fields are complete
}
    let captchaNum1, captchaNum2, captchaResult;

    function generateCaptcha() {
        captchaNum1 = Math.floor(Math.random() * 10);
        captchaNum2 = Math.floor(Math.random() * 10);
        captchaResult = captchaNum1 + captchaNum2;
        document.getElementById('captchaQuestion').textContent = `${captchaNum1} + ${captchaNum2}`;
        document.getElementById('captchaFeedback').style.display = 'none'; // Hide feedback initially
    }

    window.onload = generateCaptcha;

    function validateCaptcha() {
        const userAnswer = parseInt(document.getElementById('captchaAnswer').value);
        const feedback = document.getElementById('captchaFeedback');

        if (userAnswer === captchaResult) {
            feedback.textContent = "✔️ Correct!"; // Green tick
            feedback.className = 'feedback correct'; // Set to correct class
            feedback.style.display = 'block'; // Show feedback
            return true; // Allow form submission
        } else {
            feedback.textContent = "❌ Incorrect. Please try again."; // Red cross
            feedback.className = 'feedback incorrect'; // Set to incorrect class
            feedback.style.display = 'block'; // Show feedback
            generateCaptcha(); // Regenerate CAPTCHA if the answer is wrong
            return false; // Prevent form submission
        }
    }

    function checkCaptchaAnswer() {
        const userAnswer = parseInt(document.getElementById('captchaAnswer').value);
        const feedback = document.getElementById('captchaFeedback');

        if (userAnswer === captchaResult) {
            feedback.textContent = "✔️ Correct!";
            feedback.className = 'feedback correct';
            feedback.style.display = 'block';
        } else {
            feedback.textContent = "❌ Incorrect.";
            feedback.className = 'feedback incorrect';
            feedback.style.display = 'block';
        }
    }

    window.onclick = function(event) {
        const signupModal = document.getElementById('signupModal');
        const loginModal = document.getElementById('loginModal');
        const termsModal = document.getElementById('termsandPrivacy');
        if (event.target == signupModal) {
            signupModal.style.display = "none";
        }
        if (event.target == loginModal) {
            loginModal.style.display = "none";
        }
        if (event.target == termsModal) {
            termsModal.style.display = "none";
        }
    }

    function checkPasswordRequirements() {
        const password = document.getElementById('signupPassword').value;
        const lengthRequirement = document.getElementById('lengthRequirement');
        const letterRequirement = document.getElementById('letterRequirement');
        const numberRequirement = document.getElementById('numberRequirement');
        const uppercaseRequirement = document.getElementById('uppercaseRequirement');
        const specialRequirement = document.getElementById('specialRequirement');
        const signupSubmit = document.getElementById('signupSubmit');

        // Check each requirement
        const hasLength = password.length >= 8;
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        // Update requirements
        updateRequirement(lengthRequirement, hasLength);
        updateRequirement(letterRequirement, hasLetter);
        updateRequirement(numberRequirement, hasNumber);
        updateRequirement(uppercaseRequirement, hasUppercase);
        updateRequirement(specialRequirement, hasSpecial);

        // Enable or disable the signup button
        signupSubmit.disabled = !(hasLength && hasLetter && hasNumber && hasUppercase && hasSpecial);
    }

    function updateRequirement(requirementElement, isValid) {
        const span = requirementElement.querySelector('span');
        if (isValid) {
            requirementElement.className = 'requirement valid';
            span.textContent = '✓'; // Show tick
        } else {
            requirementElement.className = 'requirement invalid';
            span.textContent = '✖'; // Show cross
        }
    }

    function checkPasswordMatch() {
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('repeatPassword').value;
        const passwordMatchMessage = document.getElementById('passwordMatchMessage');
        const signupSubmit = document.getElementById('signupSubmit');

        if (password === confirmPassword) {
            passwordMatchMessage.textContent = "Passwords match";
            passwordMatchMessage.className = "password-message valid";
            signupSubmit.disabled = false; // Enable the submit button
        } else {
            passwordMatchMessage.textContent = "Passwords do not match";
            passwordMatchMessage.className = "password-message invalid";
            signupSubmit.disabled = true; // Disable the submit button
        }
    }
