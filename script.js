function checkPasswordStrength()
 {
  const password = document.getElementById('password').value;
  const strengthLevels = document.querySelectorAll('.quality-level');
  strengthLevels.forEach(level => level.classList.remove('active'));
  let strength = calculateStrength(password);
    if (password.length > 0)
      {
        strengthLevels[strength - 1].classList.add('active');
      }

}
function calculateStrength(password)
 {
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[a-z]/.test(password)) score++; // lowercase
    if (/[A-Z]/.test(password)) score++; // uppercase
    if (/[0-9]/.test(password)) score++; // numerical values
    if (/[^a-zA-Z0-9]/.test(password)) score++; // for special characters

    // Ensuring score is between 1 and 5
    score = Math.max(1, Math.min(5, score));
    return score;
}



function togglePasswordVisibility() 
{
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

}
