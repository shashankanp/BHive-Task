import mongoose from "mongoose";

const connection = {};

async function connectMongo() {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
  });
  connection.isConnected = db.connections[0].readyState;
}

export default connectMongo;
