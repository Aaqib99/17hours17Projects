const validatePhoneNumber = (value) => {
  if (!value) {
    return "Phone number is required";
  } else if (!/^(\+\d{1,3})?\d{10}$/.test(value)) {
    return "Invalid phone number";
  }
  return true;
};

export default validatePhoneNumber;
