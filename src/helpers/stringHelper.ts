import * as R from "ramda";

export const invalidFirstName = (firstName: string): boolean => {
  return (
    R.isEmpty(firstName) ||
    R.gt(firstName.length, 32) ||
    R.lt(firstName.length, 3)
  );
};

export const invalidLastName = (lastName: string): boolean => {
  return (
    R.isEmpty(lastName) || R.gt(lastName.length, 32) || R.lt(lastName.length, 3)
  );
};

const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const invalidEmail = (email: string): boolean => {
  return R.isEmpty(email) || R.gt(email.length, 32) || !isValidEmail(email);
};

export const invalidPassword = (password: string): boolean => {
  return (
    R.isEmpty(password) || R.lt(password.length, 5) || R.gt(password.length, 32)
  );
};
