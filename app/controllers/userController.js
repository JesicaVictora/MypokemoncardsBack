const User = require('../models/User');



/**
 * @param {array} formdata
 * @returns {json}
 */

async function createUser(req, res) {
    try {
        const newUser = new User(req.body);
        console.log(req.body);
        const checkUser = await User.findOne({
            email: newUser.email
        });

        if (checkUser && checkUser.email === newUser.email) {

            res.json({
                error: true,
                user: newUser.email
            });

        } else {

            await newUser.save();
            res.json({
                saved: true,
                newUser
            });

        }



    } catch (err) {
        console.log(err);
        res.json({
            error: 'Error al consultar DB!'
        });
    }
}
/**
 * @param {String} email
 * @returns {Promise}
 */
function getUserByEmail(email) {
    return User.findOne({
        email: email
    });
}


async function getUserByEmail2(req, res) {

    try {
        console.log(req.params);
        const result = await User.findOne({
            email: req.param.email
        });
        console.log(result);
        res.json({
            result: result
        })

    } catch (error) {

        res.json({
            errors: error.message
        })
    }
}



async function getUser(req, res) {
    try {
        const result = await User.findById(req.params.id);
        res.json({
            result: result
        })

    } catch (error) {

        res.json({
            errors: error.message
        })
    }
}

/**
 * @returns {json}
 */
function listUsers(req, res) {

    User.find().then(function (Users) {
        res.send(Users);
    });

}

async function editUser(req, res) {

    try {
        User.findOneAndUpdate({
            _id: req.params.id
        }, req.body);

        res.json({
            modify: User
        });

    } catch (error) {

        res.json({
            error: error.message
        });
    }

}


module.exports = {

    createUser,
    getUserByEmail,
    getUserByEmail2,
    getUser,
    listUsers,
    editUser,

};