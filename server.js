const app = require("./config/custom-express");
app.listen(3001, () =>
  console.log("Server is running at http://localhost:3001")
);
