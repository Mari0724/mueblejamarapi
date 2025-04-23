const dbService = require('./bd/Conexion');
const bcrypt = require('bcrypt');

class ClienteModelo {

    //funsion para crear nuevos clientes
    static async crearClientes(doc, name, tel, email, contras) {
        const query = 'INSERT INTO usuarios (documento, nombres, telefono, correo, contrasena) VALUES (?, ?, ?, ?, ?)';
    
        try {
          // Generar el hash de la contraseña con bcrypt
          const salto = 10; // Nivel de seguridad de encriptación
          const contra = await bcrypt.hash(contras, salto);
    
          return await dbService.query(query, [doc, name, tel, email, contra]);
        } catch (err) {
          throw new Error(`Error al crear el usuario: ${err.message}`);
        }
      }
}

module.exports = ClienteModelo;