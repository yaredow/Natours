/* eslint-disable */

const login = (email, password) => {
  console.log(email, password);
};

document.querySelector('.form').addEventListener('submit', (e) => {
  preventDefault(e);
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  login(email, password);
});
