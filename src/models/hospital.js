import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Hospital = sequelize.define('Hospital', {
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: true 
  }
  
});

export default Hospital;