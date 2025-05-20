const user_service = require('../services/userService');
const testUserAPI = (req, resp)=>{
    console.log('testUserAPI');
    resp.status(200).send({
        "status": "ok",
        "message": "API user state: available",
    });
    
};

const getAllUsers = async (req, resp)=>{
    const users =  await user_service.getAllUsers();
    if(users)
        resp.status(200).send({
            "status":"ok",
            "message":"Usuarios",
            "data":users
});
    else{
            resp.status(400).send({"status":"error","message":"Error al obtener los usuarios"});
}
    resp.status(200).send({
        "status": "ok",
        "message": "API user state: available",
    });
    
}

const getOneUser = async (req, resp)=>{
    const id = req.params.id;
    const user = await user_service.getOneUser(id);
    if(user)
        resp.status(200).send({
            "status":"ok",
            "message":"Usuario encontrado",
            "data":user
    });
        else
            resp.status(400).send({"status":"error","message":"Error al traer el usuario"});
    
};

const saveUser = async (req, res)=>{
    const {body} = req;
    const createdUser = await user_service.saveUser(body.name, body.email, body.password);
    if(createdUser)
        res.status(201).send({ status:"ok", data:createdUser });
        else
            res.status(400).send({ status:"error",data: saveUser});
};


const updateUser = async (req, res)=>{
    let id = req.params.id;
    let {name, email, password} = req.body;
    const updatedUser = await user_service.updateUser(id, name, email,password);
    if(updatedUser)
        res.status(200).send({ status:"ok", data:updatedUser });
        else
            res.status(400).send({ status:"error",data: updateUser});
};

const deleteUser = async (req, res)=>{
    let id = req.params.id;
    const deletedUser = await user_service.deleteUser(id);
    if(deletedUser)
        res.status(200).send({ status:"ok", data:deletedUser });
        else
            res.status(400).send({ status:"error",data: deleteUser});
};
module.exports = {testUserAPI, getAllUsers, getOneUser, saveUser, updateUser, deleteUser};