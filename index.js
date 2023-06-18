const http = require("http");
const port = process.env.PORT || 8000;
const app = require("./app");
const cors = require("cors");
const server = http.createServer(app);
app.use(cors());
server.listen(port, () => {
  console.log(`apps are running on localhost: "+${port}`);
});
