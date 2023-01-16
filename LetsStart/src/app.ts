import { ExecOptionsWithBufferEncoding } from "child_process";
import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
// const app: express.Application = express()

// 미들웨어
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("middleware");
  next();
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get("/cats/blue", (req, res, next: express.NextFunction) => {
  res.send({ blue: Cat[0] });
});

app.get("/cats/som", (req, res) => {
  res.send({ som: Cat[1] });
});

app.listen(8000, () => {
  console.log("server on");
});
