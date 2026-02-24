class CredencialesDTO {
  constructor({ usuario = '', contrasena = '' } = {}) {
    this.usuario = usuario;
    this.contrasena = contrasena;
  }
}

module.exports = { CredencialesDTO };
