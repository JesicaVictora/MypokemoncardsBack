const passport = require('passport');

const localStrategies = require('./strategies/localStrategyLoader');

function passportLoader(app) {

    passport.use('login-local', localStrategies.loginStrategy);
    passport.use('login-local-shelter', localStrategies.loginStrategyShelter);

    app.use(passport.initialize());
}

module.exports = passportLoader;
