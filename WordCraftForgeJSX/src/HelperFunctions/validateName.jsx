 
 const validateName = (value) => {
    if (!value) {
      return 'Name is required';
    } else if (!/^[a-zA-Z]+$/.test(value)) {
      return 'Name can only contain alphabets A-Z';
    }
    return true;
  };
  export default validateName;
