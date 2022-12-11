import { getAll } from "../../infrastructure/repository/ticketRepository.js";

const getAllTicket = async () => {
  const findAll = await getAll();
  return findAll;
};

export { getAllTicket };
