const LocalStrategy = require('passport-local').Strategy;

const crudUser = require('../../controllers/userController');


const loginStrategy = new LocalStrategy(
    {
        usernameField: 'email',
        passReqToCallback: true,
    },
    function (req, email, password, done) {
        crudUser.getUserByEmail(req.body.email)
        .then(function (userFound) {
            if (userFound) {
                if (userFound.checkPassword(req.body.password)) {
                    return done(null, userFound);
                }
                else {
                    done(null, false);
                }
            }
            else {
                done(null, false);
            }
        })
        .catch(function (err) {
            done(err)
        });
    }
);

const loginStrategyShelter = new LocalStrategy(
    {
        usernameField: 'email',
        passReqToCallback: true,
    },
    function (req, email, password, done) {
        crudUser.getUserByEmail(req.body.email)
        .then(function (userFound) {
            if (userFound) {
                if (userFound.checkPassword(req.body.password)) {
                    return done(null, userFound);
                }
                else {
                    done(null, false);
                }
            }
            else {
                done(null, false);
            }
        })
        .catch(function (err) {
            done(err)
        });
    }
);

module.exports = {
    loginStrategy,
    loginStrategyShelter,
};
