/* eslint-disable */

const signup = (email, password) => {
     alert(email, password);
}

document.querySelector('.form').addEventListener('submit', e => {
     e.preventDefault();
     const email = document.getElementById('email').value;
     const password = document.getElementById('password').value;
     signup(email, password);
});

// e is event listener.
// e.preventDefault - would prevent form to RELOAD any other page