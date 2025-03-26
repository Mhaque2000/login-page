document.addEventListener("DOMContentLoaded", function () {
    // ✅ Check if we are on the registration page before running this script
    const registerForm = document.getElementById("rg");

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("rgname").value;
            const password = document.getElementById("rgpass").value;

            let users = JSON.parse(localStorage.getItem('users')) || []

            const userExists = users.some(user => user.username === username)

            if(userExists){
                alert('user is already exits, please choose another username')
                return
            }

            users.push({username: username, password: password})

            localStorage.setItem('users',JSON.stringify(users))

            alert('registration is successful')

            this.reset(); // Clear the form
        });
    }

    // ✅ Check if we are on the login page before running this script
    const loginForm = document.getElementById("l");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const loginUsername = document.getElementById("lname").value;
            const loginPassword = document.getElementById("lpass").value;

            const users = JSON.parse(localStorage.getItem('users')) || []

            const validUser = users.find(user => user.username === loginUsername && user.password===loginPassword)

            if (validUser) {
                localStorage.setItem('loggedInUserName', validUser.username)
                window.location.href = "./views/welcome.html";
            } else {
                alert("Invalid username or password");
            }
            
            this.reset();
        });
    }
    
    // ✅ Check if we are on the welcome page before running this script
    const loggedInUser = document.getElementById('loggedInUser')
    const logout = document.getElementById('logout-btn')
    
    if (loggedInUser || logout){
        loggedInUser.innerText = localStorage.getItem('loggedInUserName')
        logout.addEventListener('click', function (e) {
            // localStorage.clear()
            localStorage.removeItem('loggedInUserName')
            window.location.href = '/login.html'
        })
    }
});
