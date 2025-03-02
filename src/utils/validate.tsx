interface IValidateCredentials {
  email: string;
  password: string;
  fullName?: string;
  isSignUPClicked?: boolean;
}

interface IValidationMessage {
  passwordMessage: string;
  emailMessage: string;
  fullNameMessage?: string;
}
export interface IvalidationResult {
  isError: boolean;
  message: IValidationMessage;
}
export const validateCredentials = (
  validateCreds: IValidateCredentials,
): IvalidationResult => {
  let emailMessage = "";
  let passwordMessage = "";
  let fullNameMessage = "";
  let isError = false;

  const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(
    validateCreds.email,
  );
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm.test(
    validateCreds.password,
  );
  if (!validateCreds.fullName && !validateCreds.isSignUPClicked) {
    fullNameMessage = "Full name is required.";
    isError = true;
  }
  if (!isEmailValid) {
    emailMessage = "Please enter a valid email address.";
    isError = true;
  }

  if (!isPasswordValid) {
    passwordMessage =
      "Please enter a valid password";
    isError = true;
  }
  return {
    isError: isError,
    message: {
      emailMessage: emailMessage,
      passwordMessage: passwordMessage,
      fullNameMessage: fullNameMessage,
    },
  };
};
