export const checkEmail = (email) => {
  return email.includes("@");
};

export const checkPassword = (password) => {
  return password.length >= 8;
};
