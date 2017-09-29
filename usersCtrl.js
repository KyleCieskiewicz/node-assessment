const userData = require('./userData.json')

module.exports = {
    getUsers: (req, res, next) => {

        if(req.query.age){
            res.status(200).send(userData.filter(user => {
                return user.age < req.query.age;
            }))
        }
        else if(req.query.lastname){
            res.status(200).send(userData.filter(user => {
                return user.last_name === req.query.lastname;
            }))
        }
        else if(req.query.email){
            res.status(200).send(userData.filter(user => {
                return user.email === req.query.email;
            }))
        }
        else if(req.query.favorites){
            res.status(200).send(userData.filter(user => {
                return user.favorites.includes(req.query.favorites);
            }))
        }
        else{
            res.json(userData)
        }
    },

    getUsersId: (req, res, next) => {
        if (req.params.id) {
            for (let obj of userData) {
                if (obj.id == req.params.id) {
                    res.status(200).json(obj);
                    return;
                }
            }
            res.status(404).json(null);
        }
},

    getAdmins: (req, res, next) => {
        res.status(200).send(userData.filter(user => {
            return user.type === "admin"
        }))
    },

    getNonAdmins: (req, res, next) => {
        res.status(200).send(userData.filter(user => {
            return user.type != "admin"
        }))
    },

    getUserByTypes: (req, res, next) => {
        if(req.params.type){
            res.status(200).send(userData.filter(user => {
                return user.type === req.params.type;
            }))
        }
        else if(req.params.type){
            res.status(200).send(userData.filter(user => {
                return user.type === req.params.type;
            }))
        }
        else if(req.params.type){
            res.status(200).send(userData.filter(user => {
                return user.type === req.params.type;
            }))
        }
    },

    putUser: (req, res, next) => {
        let users = userData;
        for (let i = 0; i < users.length; i++){
            if (users[i].id == req.params.id) {
                users[i] = req.body;
                res.status(200).json(users);
                return;
            }
        }
        res.status(200).json(users);
        return;
    },

    
    postUser: (req, res, next) => {
        if(req.body){
            let id = userData.length+1;
            req.body.id = id;
            userData.push(req.body)
        }
        res.status(200).send(userData);

    },

    deleteUser: (req, res, next) => {
        if(req.params.id){
            for(var i = 0; i < userData.length; i++){
                if(userData[i].id === parseInt(req.params.id)){
                    userData.splice(i, 1);
                }
            }
            res.status(200).send(userData);
    }


}
}