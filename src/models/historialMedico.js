import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const HistorialMedico = sequelize.define('HistorialMedico', {
  id: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  }
  
});

export default HistorialMedico;