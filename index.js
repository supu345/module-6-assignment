const app = require("./app");
const port = 8000;

app.get("/", function (req, res) {
  res.send("Hello Home page");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
