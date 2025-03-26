document.addEventListener("DOMContentLoaded", function () {
    let currentPath = window.location.pathname;

    const registerForm = document.getElementById("rg");
    const loginForm = document.getElementById("l");
    const loggedInUser = document.getElementById('loggedInUser')
    const logout = document.getElementById('logout-btn')

    if (currentPath.includes('registration.html')) {
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
   

    if (currentPath.includes('login.html')) {
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
    

    if (currentPath.includes('welcome.html')){
        loggedInUser.innerText = localStorage.getItem('loggedInUserName')
        logout.addEventListener('click', function (e) {
            // localStorage.clear()
            localStorage.removeItem('loggedInUserName')
            window.location.href = '/login.html'
        })
    }
});
