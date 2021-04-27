const userController = require('../controllers/userController');
const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const routesUser = express.Router();


//LOGIN ROUTES//
//  .all(authController.verifyToken) PARA RESTRINGIR EL ACCESO  

routesUser.route('/login')
    .post(passport.authenticate('login-local', {
        session: false
    }), authController.getToken);

routesUser.route('/register')
    .post(userController.createUser);

routesUser.route('/logout')
    .get(function (req, res) {
        req.logout();
        res.json({
            logout: true
        });
    });

routesUser.route('/edit/:id')
    .get(userController.editUser);


routesUser.route('/list/:id')
    .get(userController.getUser);


routesUser.route('/list')
    .get(authController.verifyToken, userController.listUsers);


module.exports = routesUser;