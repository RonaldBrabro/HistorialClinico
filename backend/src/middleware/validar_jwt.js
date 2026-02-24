const jwt = require('jsonwebtoken');

const secreto = process.env.JWT_SECRETO || 'secreto_desarrollo';

const validarJwt = (req, res, next) => {
  const encabezado = req.headers.authorization || '';
  const token = encabezado.startsWith('Bearer ') ? encabezado.slice(7) : null;

  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proporcionado.' });
  }

  try {
    const payload = jwt.verify(token, secreto);
    req.usuario = payload;
    return next();
  } catch (error) {
    return res.status(401).json({ mensaje: 'Token invalido.' });
  }
};

module.exports = { validarJwt };
