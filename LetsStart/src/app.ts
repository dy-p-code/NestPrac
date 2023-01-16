import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
// const app: express.Application = express()

// logging
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("This is logging middleware");
  next();
});

app.use((req, res, next) => {
  console.log("This is error middleware");
  res.send({ error: "404 Not found error" });
  next();
});

app.listen(8000, () => {
  console.log("server on");
});
