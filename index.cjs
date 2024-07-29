const app = require("./src/app.cjs");

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(
    `Example app listening on ${process.env.HOST}:${process.env.PORT}`
  );
});
