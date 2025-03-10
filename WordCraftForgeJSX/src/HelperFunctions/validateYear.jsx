export const validateYear = (value) => {
  if (!value) {
    return "Year is required";
  } else if (!/\d{4}-\d{4}/.test(value)) {
    return "Invalid year format";
  }
  return true;
};

export const validateDate = (value) => {
  function isValidDateFormat(dateString) {
    const dateFormat = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    return dateFormat.test(dateString);
  }
  
  // Example usage
  if (isValidDateFormat(value)) {
    return;
  } else {
    return "Format is not valid. Use MM/DD/YYYY.";
  }
  
};


