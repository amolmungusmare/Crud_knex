const express = require("express");
const app = express();
const port = 2021;
app.use(express.json());
const routes = require("./routes/routes");
app.use("/", routes);
app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
