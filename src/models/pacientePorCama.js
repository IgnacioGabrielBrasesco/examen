import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const PacientePorCama = sequelize.define('PacientePorCama', {
  fechaDeUso: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  idPaciente: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  idCama: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  }
  
});

export default PacientePorCama;