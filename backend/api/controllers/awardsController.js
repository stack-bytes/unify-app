const fs = require('fs');
const path = require('path');

const {Award} = require('../../models/award-model');
const {User} = require('../../models/user-model')


const userBuyAward = async (req, res) => {
    const userId =  req.query.userId;
    const awardId =  req.query.awardId;

    try{
        const user = await User.findById(userId);
        const award = await Award.findById(awardId);

        if(award && user && (user.points > award.price)){
        user.inventory.push(award);
        user.points-award.price;
        await user.save();
        res.status(200).json({success:1});
        } else {
            res.status(200).json({success:0});
        }
    } catch (err) {
        console.log("could not add award -> ", err)
        res.status(500);
    }
}


const getDailyShop = (req, res) => {
    try{
        const dailyAwards = fs.readFileSync( path.join(__dirname, '..', '..', 'data', 'dailyShop.json'), 'utf8');
        const jsonedAwards = JSON.parse(dailyAwards);
        res.status(200).json(jsonedAwards);
    } catch (err) {
        console.log("could not add award -> ", err)
        res.status(500);
    }
}

module.exports = {
    userBuyAward,
    getDailyShop
}