import { server } from "./server/server";

const port = 9000;

server.listen(port, () => {
  console.log("Servidor iniciado");
});
