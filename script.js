document.addEventListener("DOMContentLoaded", function () {
    // ✅ Check if we are on the registration page before running this script
    const registerForm = document.getElementById("rg");
    if (registerForm) {
        // alert("You're in the register page");
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            const username = document.getElementById("rgname").value;
            const password = document.getElementById("rgpass").value;

            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            // alert("Registered successfully!!");
            this.reset(); // Clear the form
        });
    }

    // ✅ Check if we are on the login page before running this script
    const loginForm = document.getElementById("l");
    if (loginForm) {
        // alert("You're in the login page");
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const loginUsername = document.getElementById("lname").value;
            const loginPassword = document.getElementById("lpass").value;

            const getUsernameFromLocalStorage = localStorage.getItem("username");
            const getPasswordFromLocalStorage = localStorage.getItem("password");

            if (loginUsername === getUsernameFromLocalStorage && loginPassword === getPasswordFromLocalStorage) {
                window.location.href = "./views/welcome.html";
            } else {
                // alert("Invalid username or password");
            }

            this.reset();
        });
    }
    const logout = document.getElementById('logout-btn')
    if(logout){
        logout.addEventListener('click', function(e){
            localStorage.clear()
            window.location.href='/index.html'
        })
    }
});
