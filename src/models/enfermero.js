import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Enfermero = sequelize.define('Enfermero', {
  legajo: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  turno: { 
    type: DataTypes.STRING, 
    allowNull: true 
  }
  
});

export default Enfermero;