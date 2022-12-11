import mongoose from "mongoose";
import { Schema } from "mongoose";

const ticketSchema = new Schema({
  movieId: {
    type: String,
    required: true,
  },
  movieTitle: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  studio: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
});

const model = mongoose.model("tickets", ticketSchema);
export default model;
