module.exports = (sequelize, Sequelize) => {
    const Autor = sequelize.define('autor', {
      id_autor: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apellido: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nacionalidad: {
        type: Sequelize.STRING
      },
      fecha_nacimiento: {
        type: Sequelize.DATE
      }
    });
  
    return Autor;
  };
  