import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Paciente = sequelize.define('Paciente', {
  nombreCompleto: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  dni: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  fechaNacimiento: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  direccion: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  telefono: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  contactoEmergencia: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  historiaClinica: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  }
  
});

export default Paciente;