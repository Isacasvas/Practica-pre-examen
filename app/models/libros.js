module.exports = (sequelize, Sequelize) => {
    const Libro = sequelize.define('libro', {
      id_libro: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      autor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isbn: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      editorial: {
        type: Sequelize.STRING
      },
      anio_publicacion: {
        type: Sequelize.INTEGER
      },
      categoria: {
        type: Sequelize.STRING
      },
      cantidad_disponible: {
        type: Sequelize.INTEGER
      },
      ubicacion: {
        type: Sequelize.STRING
      }
    });
  
    return Libro;
  };
  