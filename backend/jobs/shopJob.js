const cron = require('node-cron');
const fs = require('fs')
const path = require('path');
const { Award } = require('../models/award-model');

const shopJobFunction = async () => {
    try{
        const randomAwards = await Award.aggregate([
            { $sample: { size: 2 } }
        ]);
       
        const jsonAwards = JSON.stringify(randomAwards, null, 2);
        fs.writeFileSync( path.join(__dirname, '..', 'data', 'dailyShop.json'), jsonAwards);

    } catch(e){console.log(e);}
};


cron.schedule('* 20 * * * *', shopJobFunction);


