const db = require('../models');
const getAllUsers = async () => {
    try {
        const allUsers = await db.User.findAll();
        return allUsers;
    } catch (error) {
       return error.message || "Error al obtener los usuarios";
    }
};

const getOneUser = async (id) => {
    try {
        const user = await db.User.findByPk(id);
        return user;
    } catch (error) {
        return error.message || "Error al traer el usuario";
    }
}

const saveUser = async (name, email, password) => {
    try {
        const newUser = await db.User.create({
            name,
            email,
            password
        });
        return newUser;
    } catch (error) {
        return error.message || "Error al crear el usuario";
    }
};

const updateUser = async (id, name, email, password) => {
    try {
       const updatedUser = await db.User.update({
           name,
           email,
           password
       }, {
           where: {
             id 
            }
       });
       return updatedUser;
    } catch (error) {
        return error.message ||"Error al actualizar el usuario";
    }
};

const deleteUser = async (id) => {
    try {
        const deletedUser = await db.User.destroy({
            where: {
                id
            }
        });
        return deletedUser;
    } catch (error) {
        return error.message || "Error al eliminar el usuario";
    }
}
module.exports = { getAllUsers, getOneUser, saveUser, updateUser, deleteUser };