function togglePassword(inputId) {

    const input = document.getElementById(inputId);

    if (input.type === "password") {

        input.type = "text";

    } else {

        input.type = "password";

    }
}


/* Register */

const registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("fullName").value.trim();

        const email =
            document.getElementById("registerEmail").value.trim();

        const password =
            document.getElementById("registerPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const terms =
            document.getElementById("terms").checked;


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        if (!terms) {

            alert(
                "Please accept the Terms & Conditions."
            );

            return;
        }


        if (password.length < 8) {

            alert(
                "Password must contain at least 8 characters."
            );

            return;
        }


        console.log({
            name,
            email,
            password
        });


        alert(
            "Registration successful!"
        );

    });

}


/* Login */

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;


        if (!email || !password) {

            alert(
                "Please enter email and password."
            );

            return;
        }


        console.log({
            email,
            password
        });


        alert(
            "Login successful!"
        );

    });

}