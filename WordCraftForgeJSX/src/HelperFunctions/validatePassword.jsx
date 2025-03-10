export default function validatePassword(password) {
  const strongPasswordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!.])(?=.*[^\s]).{8,}$/;

  if (!strongPasswordRegex.test(password)) {
    // password is strong
    return "Choose a strong password.";
  } 
}
