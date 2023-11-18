const { Group } =  require('../../models/Group-model'); 

const getGroups = async (req, res) => {
    try {
        const groups = await Group.find({});
        res.send(groups);
    } catch (e) {
        console.log(e);
        res.send({message: 'Internal Server Error'});
    }
}

const getGroupById = async (req, res) => {
    try {
        const body = req.body;

        const {
            groupId,
        } = body;

        if(!groupId){
            return res.send({message: 'Missing groupId'});
        }

        const group = await Group.findOne({_id: groupId});

        if(!group){
            return res.send({message: 'Group not found'});
        }

        res.send({message: 'Group found!', data: Group});
    } catch (e) {
        console.log(e);
        res.send({message: 'Internal Server Error'});
    }

}

const createGroup = async (req, res) => {
    try {
        const body = req.body;

        const {
            userId,
            name,
            type,
            backgroundPic,
            members,
            groups,
            location,
        } = body;

        if(!name){
            return res.send({message: 'Missing name'});
        }

        if(!type){
            return res.send({message: 'Missing type'});
        }

        if(!backgroundPic){
            return res.send({message: 'Missing backgroundPic'});
        }

        if(!members){
            return res.send({message: 'Missing members'});
        }

        if(!groups){
            return res.send({message: 'Missing groups'});
        }

        if(!location){
            return res.send({message: 'Missing location'});
        }

        const group = await Group.create({
            name,
            type,
            backgroundPic,
            members,
            groups,
            location,
            organizer: userId,
            createdAt: new Date(),
            updatedAt: new Date(),
            icebreaker: '',
            photos: [],
            trending: false,
        });

        res.send({message: 'Group created!', data: group});
    } catch (e) {
        console.log(e);
        res.send({message: 'Internal Server Error'});
    }
}

const updateGroup = async (req, res) => {
    try {
        const body = req.body;

        const {
            groupId,
        } = body;

        if(!groupId){
            return res.send({message: 'Missing groupId'});
        }

        const group = await Group.updateOne({_id: groupId}, {
            $set: body,
            $currentDate: { updatedAt: true }
        });

        return res.send({message: 'Success', data: group});
    } catch (e){
        res.status(500).json({message: e.message});
    }

}

const deleteGroup = async (req, res) => {
    try {
        const body = req.body;

        const {
            groupId,
        } = body;

        if(!groupId){
            return res.send({message: 'Missing groupId'});
        }

        const group = await Group.deleteOne({_id: groupId});

        return res.send({message: 'Success', data: group});
    } catch (e){
        res.status(500).json({message: e.message});
    }

}

module.exports = {
    getGroups,
    getGroupById,
    createGroup,
    updateGroup,
    deleteGroup,
}