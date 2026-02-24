const jwt = require('jsonwebtoken');

const secreto = process.env.JWT_SECRETO || 'secreto_desarrollo';

class ServicioAutenticacion {
  validarCredenciales(credenciales) {
    return (
      credenciales.usuario === 'clinica' && credenciales.contrasena === 'clinica123'
    );
  }

  generarToken(usuario) {
    return jwt.sign({ usuario }, secreto, { expiresIn: '8h' });
  }
}

module.exports = { ServicioAutenticacion };
