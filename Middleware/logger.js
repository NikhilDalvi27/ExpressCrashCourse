const moment = require('moment');

const logger = (req,res,next)=>{

    console.log(`Comming from Logger`);
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:   ${moment().format()}` )

    //todo next is call the
    // NEXT MIDDLEWARE function in stack
    next();
}

module.exports = logger;