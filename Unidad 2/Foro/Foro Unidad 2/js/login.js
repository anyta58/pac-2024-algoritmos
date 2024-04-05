const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];

    const validarUser =Users.find(user => user.email === email && user.password === password);
    if (!validarUser) {
        return alert('Usuario y contraña incorrectos!');
    }

    alert(`Bienvenido ${validarUser.name}`);
    localStorage.setItem('login_success', JSON.stringify(validarUser))
    window.location.href = 'index.html';
});