const http = require("http");
const port = process.env.PORT || 8000;
const app = require("./app");
const cors = require("cors");
const server = http.createServer(app);
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://daniyalshehzad41:c4SwLPVpd9zdbz5i@cluster0.o6zxlmh.mongodb.net/test`
);
mongoose.connection.on("error", (err) => {
  console.log("connection failed", err);
});
mongoose.connection.on("connected", (err) => {
  console.log("connected successfully With database ");
});
app.use(cors());
server.listen(port, () => {
  console.log(`apps are running on localhost: "+${port}`);
});
