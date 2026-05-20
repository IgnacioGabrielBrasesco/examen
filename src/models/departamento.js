import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Departamento = sequelize.define('Departamento', {
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  jefeDepartamento: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  idHospital: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  }
  
});

export default Departamento;