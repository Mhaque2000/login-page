// form can listen submit event 

document.getElementById('rg').addEventListener('submit', function (e) {
    e.preventDefault() //if we submit the form browser will automatically reload to prevent that we use preventDefauly()
    alert('you\' in register page')

    const username = document.getElementById('rgname').value
    const password = document.getElementById('rgpass').value

    localStorage.setItem('username', username)
    localStorage.setItem('password', password)

    alert('resgister successfully!!')
    this.reset() // Clear the form

})

document.getElementById('l').addEventListener('submit', function (e) {
    e.preventDefault()
    alert('you\' in login page')

    const loginUsername = document.getElementById('lname').value
    const loginPassword = document.getElementById('lpass').value

    const getUsernameFromLocalStorage = localStorage.getItem('username')
    const getPasswordFromLocalStorage = localStorage.getItem('password')

    if (loginUsername === getUsernameFromLocalStorage && loginPassword === getPasswordFromLocalStorage) {
        window.location.href = './views/welcome.html'
    } else {
        alert('invalid username or password')
    }
    this.reset()

})