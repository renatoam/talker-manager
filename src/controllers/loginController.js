const { generateRandomToken, validateEmail, validatePassword } = require('../helpers');

const loginController = (request, response) => {
  const { email, password } = request.body;
  const randomToken = generateRandomToken();
  const { error: emailError, errorMessage: emailErrorMessage } = validateEmail(email);
  const { error: passwordError, errorMessage: passwordErrorMessage } = validatePassword(password);

  if (emailError) return response.status(400).json({ message: emailErrorMessage });
  if (passwordError) return response.status(400).json({ message: passwordErrorMessage });

  return response.status(200).json({
    token: randomToken,
  });
};

module.exports = {
  loginController,
};
