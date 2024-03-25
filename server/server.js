import http from "http";
import dotenv from "dotenv";

dotenv.config({ path: ["./config.env", "./config.local.env"] });

const server = http.createServer((req, res) => {
  res.end("Connected");
});

const port = process.env.PORT || 3000;
server.listen(port, (req, res) => {
  console.log(`Server listening on port ${port}`);
});
