import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const SalaHospitalizacion = sequelize.define('SalaHospitalizacion', {
  nombreONumero: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  idCama: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  idDepartamento: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  }
  
});

export default SalaHospitalizacion;