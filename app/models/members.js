module.exports = (sequelize, Sequelize) => {
	const Miembro = sequelize.define('miembro', {
	  id_user: {
			type: Sequelize.INTEGER,
      autoIncrement: true,
			primaryKey: true
    },
	  nombre: {
			type: Sequelize.STRING
	  },
    apellido: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    telefono: {
      type: Sequelize.NUMERIC
    },
    direccion: {
      type: Sequelize.STRING
    },
    fecha_reg: {
      type: Sequelize.DATE
    },
    estado: {
      type: Sequelize.ENUM('Activo', 'Inactivo','Suspendido')
    },
	});
	
	return Miembro;
}