const { CredencialesDTO } = require('../dtos/credenciales_dto');
const { ServicioAutenticacion } = require('../servicios/servicio_autenticacion');

const servicioAutenticacion = new ServicioAutenticacion();

const login = (req, res) => {
  const credenciales = new CredencialesDTO(req.body);
  const valido = servicioAutenticacion.validarCredenciales(credenciales);

  if (!valido) {
    return res.status(401).json({ mensaje: 'Credenciales invalidas.' });
  }

  const token = servicioAutenticacion.generarToken(credenciales.usuario);
  return res.json({ token });
};

module.exports = { login };
