const db = require('../config/db.config.js');
const Miembro = db.Miembro;

exports.create = (req, res) => {
    let miembro = {};

    try {
        miembro.nombre = req.body.nombre;
        miembro.apellido = req.body.apellido;
        miembro.email = req.body.email;
        miembro.telefono = req.body.telefono;
        miembro.direccion = req.body.direccion; 
        miembro.fecha_reg = req.body.fecha_reg;
        miembro.estado = req.body.estado;

        Miembro.create(miembro).then(result => {
            res.status(200).json({
                message: "Miembro creado exitosamente con id = " + result.id_user,
                miembro: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Fallo al crear el MIEMBRO!",
            error: error.message
        });
    }
};

exports.retrieveAllMembers = (req, res) => {
    Miembro.findAll()
        .then(miembros => {
            res.status(200).json({
                message: "¡Miembros obtenidos exitosamente!",
                miembros: miembros
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "¡Error al obtener los miembros!",
                error: error
            });
        });
};

exports.getMiembroById = (req, res) => {
    let miembroId = req.params.id;
    Miembro.findByPk(miembroId)
        .then(miembro => {
            res.status(200).json({
                message: "Miembro obtenido exitosamente con id = " + miembroId,
                miembro: miembro
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "¡Error al obtener miembro con id!",
                error: error
            });
        });
};

exports.updateById = async (req, res) => {
    try {
        let miembroId = req.params.id;
        let miembro = await Miembro.findByPk(miembroId);
    
        if (!miembro) {
            res.status(404).json({
                message: "No se encontró el Miembro para actualizar con id = " + miembroId,
                miembro: "",
                error: "404"
            });
        } else {    
            let updatedObject = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                email: req.body.email,
                fecha_reg: req.body.fecha_reg,
                estado: req.body.estado
            }
            let result = await Miembro.update(updatedObject, {returning: true, where: {id_user: miembroId}});
            
            if (!result) {
                res.status(500).json({
                    message: "No se puede actualizar un miembro con id = " + req.params.id,
                    error: "No se pudo actualizar el miembro",
                });
            };

            res.status(200).json({
                message: "Actualización exitosa de un Miembro con id = " + miembroId,
                miembro: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede actualizar un miembro con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deleteById = async (req, res) => {
    try {
        let miembroId = req.params.id;
        let miembro = await Miembro.findByPk(miembroId);

        if (!miembro) {
            res.status(404).json({
                message: "No existe el miembro con id = " + miembroId,
                error: "404",
            });
        } else {
            await miembro.destroy();
            res.status(200).json({
                message: "Eliminación exitosa del Miembro con id = " + miembroId,
                miembro: miembro,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "No se puede eliminar un miembro con id = " + req.params.id,
            error: error.message,
        });
    }
};

