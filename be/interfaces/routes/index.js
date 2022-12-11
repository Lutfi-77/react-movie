import ticket from "./ticket.js";

const routing = (app) => {
  app.use("/ticket", ticket);
};

export default routing;
