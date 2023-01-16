import * as express from "express";
import catRouter from "./cats/cats.router";

class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  // router middleware
  private setRouter() {
    this.app.use(catRouter);
  }

  private setMiddleware() {
    // const app: express.Express = express();
    // const app: express.Application = express()

    // Logging Middleware
    this.app.use((req, res, next) => {
      console.log(req.rawHeaders[1]);
      console.log("This is logging middleware");
      next();
    });

    // JSON Middleware
    this.app.use(express.json());

    this.setRouter;

    // 404 middleware
    this.app.use((req, res, next) => {
      console.log("This is error middleware");
      res.send({ error: "404 Not found error" });
      next();
    });
  }
  public listen() {
    this.setMiddleware();
    this.app.listen(8000, () => {
      console.log("server on");
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}

init();
