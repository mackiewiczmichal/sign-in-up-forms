function createValidationRule(ruleName, errorMessage, validateFunc) {
  return {
    name: ruleName,
    message: errorMessage,
    validate: validateFunc,
  };
}

export function requiredRule(inputName) {
  return createValidationRule(
    'required',
    `${inputName} required`,
    (inputValue, formObj) => inputValue.length !== 0
  );
}

export function minLengthRule(inputName, minCharacters) {
  return createValidationRule(
    'minLength',
    `${inputName} should contain atleast ${minCharacters} characters`,
    (inputValue, formObj) => inputValue.length >= minCharacters
  );
}

export function maxLengthRule(inputName, maxCharacters) {
  return createValidationRule(
    'minLength',
    `${inputName} cannot contain more than ${maxCharacters} characters`,
    (inputValue, formObj) => inputValue.length <= maxCharacters
  );
}

export function validFullName() {
  return createValidationRule(
    'validFullName',
    `Provide full name`,
    (inputValue, formObj) => {
      const temp = inputValue.split(' ').length < 2;
      return !temp;
    }
  );
}

export function correctEmail() {
  return createValidationRule(
    'correctEmail',
    `Provide valid email address`,
    (inputValue, formObj) => /\S+@\S+\.\S+/.test(inputValue) === true
  );
}

export function passwordMatchRule() {
  return createValidationRule(
    'passwordMatch',
    `passwords do not match`,
    (inputValue, formObj) => inputValue === formObj.password.value
  );
}
