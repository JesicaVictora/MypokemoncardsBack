const mongooseLoader = require('./loaders/mongooseLoader');
const expressLoader = require('./loaders/expressLoader');
const passportLoader = require('./loaders/passportLoader');

async function loader(app) {

    try{
        await mongooseLoader();
        console.info('db funcionando');
        passportLoader(app);
        console.info('Passport funcionando');
        expressLoader(app);
        console.info('Express funcionando');
       
    }
    catch(err){
        console.error(err.message);
        throw err;
    };

}

module.exports = loader;
