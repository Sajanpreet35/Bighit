const form = document.getElementById('signupForm');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Simple validation
  if(name && email && password) {
    // Here you can add Firebase / LocalStorage logic
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    message.textContent = `Welcome, ${name}! Signup successful.`;
    form.reset();
  } else {
    message.style.color = 'red';
    message.textContent = 'Please fill all fields!';
  }
});
