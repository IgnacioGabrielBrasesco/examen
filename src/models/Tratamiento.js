import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Tratamiento = sequelize.define('Tratamiento', {
  descripcion: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  fecha: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  idHistorialMedico: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  idMedico: { 
    type: DataTypes.STRING, 
    allowNull: true 
  }
  
});

export default Tratamiento;