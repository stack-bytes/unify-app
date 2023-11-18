const { User } = require('../../models/user-model');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        return res.send({message: 'Success', data: users});
    } catch (e) {
        res.status(500).json({message: e.message});
    
    }
}

const getUserById = async (req, res) => {
    try {
        const body = req.body;

        const {
            userId,
        } = body;

        if(!userId){
            return res.send({message: 'Missing userId'});
        }

        const user = await User.findById(userId);

        if(!user){
            return res.send({message: 'User not found'});
        }

        return res.send({message: 'Success', data: user});
    } catch(e) {
        res.status(500).json({message: e.message});
    }
}

const createUser = async (req, res) => {
    try {
        const body = req.body;

        const {
            username,
            email,
            password,
        } = body;

        if(!username){
            return res.send({message: 'Missing username'});
        }
        
        if(!email){
            return res.send({message: 'Missing email'});
        }

        if(!password){
            return res.send({message: 'Missing password'});
        }

        const user = await User.create({
            username,
            email,
            password,
            pfp: '',
            friends: [],
            friendRequests: [],
            inventory: [],
            events: [],
            currentEvent: '',
            points: 0,
            location: {
                latitude: 0,
                longitude: 0
            },
            ghostMode: false,
            groups: [],
        });

        return res.send({message: 'Success', data: user});
        
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}


//write a deleteUser controller function
const deleteUser = async (req, res) => {
    try {
        const body = req.body;

        const {
            userId,
        } = body;

        if(!userId){
            return res.send({message: 'Missing userId'});
        }

        const user = await User.findByIdAndDelete(userId);

        return res.send({message: 'Success', data: user});
    } catch (e) {
        res.status(500).json({message: e.message});
    }
}

const updateUser = async (req, res) => {
    try {
        const body = req.body;

        const {
            userId
        } = body;

        if(!userId){
            return res.send({message: 'Missing userId'});
        }

        const user = await User.updateOne({_id: userId}, {
            $set: body,
        });

        return res.send({message: 'Success', data: user});
    } catch(e) {
        console.log(e);
        res.status(500).json({message: e.message});
    }
}


const getUserFriends = async (req, res) => {
    try{
      const userId = req.query.userId;
      const user = await User.findById(userId);
      const userFriendsIds = user.friends;
      let userFriends = [];
  
      for (const friendId of userFriendsIds) {
        const foundFriend = await User.findById(friendId);
        userFriends.push(foundFriend);
      }
  
      res.status(200).json(userFriends); 
    } catch (err) {
      console.error('Error fetching user friends:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};
  
module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser,
    getUserFriends,
}