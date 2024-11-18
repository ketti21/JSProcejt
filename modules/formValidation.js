export function validateForm() {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input, textarea');
  const showPasswordCheckbox = document.getElementById('show-password');

  form.addEventListener('submit', (e) => {
    let isValid = true;

    inputs.forEach((input) => {
      if (input.value.trim() === '') {
        isValid = false;
        input.classList.add('error');
      } else {
        input.classList.remove('error');
      }
    });

    if (!isValid) {
      e.preventDefault();
      alert('Please fill in all required fields.');
    }
  });

  
  if (showPasswordCheckbox) {
    showPasswordCheckbox.addEventListener('change', () => {
      const passwordInput = document.getElementById('password');
      passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
    });
  }
}
