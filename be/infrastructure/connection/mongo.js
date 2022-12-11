import mongoose from "mongoose";
import * as env from "dotenv";

import { ConnectionError } from "../helper/errorHandler.js";

env.config();

const connection = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(process.env.HOST);
    switch (mongoose.connection.readyState) {
      case 0:
        throw new ConnectionError("Database is disconnected.");
        break;
      case 1:
        console.log("Database is connected.");
        break;
      case 2:
        console.log("Database is connecting.");
        break;
      case 3:
        console.log("Database is disconnecting.");
        break;
      default:
        throw new ConnectionError("Invalid credentials.");
        break;
    }
  } catch (err) {
    console.log(err.message);
  }
};

export default connection;
