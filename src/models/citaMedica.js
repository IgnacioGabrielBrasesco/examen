import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const CitaMedica = sequelize.define('CitaMedica', {
  fecha: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  hora: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  motivoConsulta: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  resumenDiagnostico: { 
    type: DataTypes.STRING, 
    allowNull: true 
  },
  idPaciente: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  idMedico: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  },
  idDepartamento: { 
    type: DataTypes.INTEGER, 
    allowNull: true 
  }
  
});

export default CitaMedica;