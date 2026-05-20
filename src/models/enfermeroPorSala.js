import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const EnfermeroPorSala = sequelize.define('EnfermeroPorSala', {
  horarios: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  idEnfermero: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  idSala: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  }
  
});

export default EnfermeroPorSala;