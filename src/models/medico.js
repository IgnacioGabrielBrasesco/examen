import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Medico = sequelize.define('Medico', {
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  nroMatricula: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  especialidadPrincipal: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  telefonoContacto: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  idDepartamento: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  idHospital: { 
    type: DataTypes.STRING, 
    allowNull: true 
  }
  
});

export default Medico;