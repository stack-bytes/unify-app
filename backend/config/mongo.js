const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();
const uri = process.env.MONGOCON;


const manageConnection = {
    openConnection : async () => {
      try {
        await mongoose.connect(uri, {
          dbName:"UnifyData",
        });
        console.log("🍃 Client connected to MongoDB 🍃");
      } catch (error) {
        throw new Error("Could not connect to the database: " + error.message);
      }
    },

    closeConnection : async () => {
      try {
        await mongoose.connection.close();
        console.log("Connection closed!");
      } catch (error) {
        throw new Error("Could not close connection: " + error.message);
      }
    }
}

const debug = {
    listCollections : async () => {
        try {
            const collections = await mongoose.connection.db.listCollections().toArray();

            console.log("Collections in the database:");
            collections.forEach((collection) => {
              console.log(collection.name);
            });
          } catch (error) {
            throw new Error("Could not list collections: " + error.message);
          }
    },
}
  

module.exports = { manageConnection, debug};