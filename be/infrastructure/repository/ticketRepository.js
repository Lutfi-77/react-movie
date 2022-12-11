import ticketSchema from "../database/schema/ticketSchema.js";

const getAll = async () => {
  return await ticketSchema.find({}).exec();
};

export { getAll };
