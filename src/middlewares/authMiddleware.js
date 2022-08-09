const authMiddleware = (request, response, next) => {
  const { authorization } = request.headers;
  
  if (!authorization) {
    return response.status(401).json({ message: 'Token não encontrado' });
  }

  if (authorization.length > 16 || authorization.length < 16) {
    return response.status(401).json({ message: 'Token inválido' });
  }

  next();
};

module.exports = {
  authMiddleware,
};
