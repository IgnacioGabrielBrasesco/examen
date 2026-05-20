import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Cama = sequelize.define('Cama', {
  estado: { 
    type: DataTypes.BOOLEAN, 
    allowNull: true 
  }
  
});

export default Cama;