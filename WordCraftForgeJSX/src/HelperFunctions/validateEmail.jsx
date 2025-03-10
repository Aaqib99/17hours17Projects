 
 const validateEmail = (value) => {
    if (!value) {
      return 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      return 'Invalid email format';
    }
    return true;
  };
  export default validateEmail;
