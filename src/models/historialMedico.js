import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const HistorialMedico = sequelize.define('HistorialMedico', {
  descripcion: { 
    type: DataTypes.STRING, 
    allowNull: true 
  }
  
});

export default HistorialMedico;