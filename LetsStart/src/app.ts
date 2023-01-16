import * as express from "express";
import catRouter from "./cats/cats.router";

const app: express.Express = express();
// const app: express.Application = express()

// Logging Middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("This is logging middleware");
  next();
});

// JSON Middleware
app.use(express.json());

// Cat router
app.use(catRouter);

// 404 middleware
app.use((req, res, next) => {
  console.log("This is error middleware");
  res.send({ error: "404 Not found error" });
  next();
});

app.listen(8000, () => {
  console.log("server on");
});
