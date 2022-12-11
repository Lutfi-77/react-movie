import { getAllTicket } from "../../domain/use_cases/ticketService.js";

const index = async (req, res) => {
  const test = await getAllTicket();
  console.log(test);
};

export { index };
