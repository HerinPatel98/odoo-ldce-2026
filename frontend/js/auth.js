const url = window.location.port === "8000" ? "" : "http://localhost:8000";
const logoutBtn = document.querySelectorAll(".logout-btn")
if (logoutBtn) {
    console.log("logout button", logoutBtn)
    logoutBtn.forEach(btn => {
        btn.addEventListener("click", logOut)
    })
    function logOut() {
        console.log("hello")
        fetch(`${url}/api/auth/logout`)
            .then(response => response.json())
            .then(data => {

                window.location.href = "pages/login.html";
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred during logout.");
            });
    }
}
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

    registerForm.addEventListener("submit", function (event) {

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


        fetch(`${url}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
            .then(async response => {
                const data = await response.json();
                if (!response.ok) throw new Error(data.message || "Registration failed.");
                return data;
            })
            .then(data => {
                alert(
                    "Registration successful!"
                );
                window.location.href = "login.html";
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred during registration.");
            });


    });

}


const loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

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

        fetch(`${url}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(async response => {
                const data = await response.json();
                if (!response.ok) throw new Error(data.message || "Login failed.");
                return data;
            })
            .then(data => {
                alert("Login successful!");
                window.location.href = "../index.html";
            })
            .catch(error => {
                console.error("Error:", error);
                alert(error.message || "An error occurred during login.");
            });

    });

}