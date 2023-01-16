import * as express from "express";
import { Cat, CatType } from "./app.model";

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

// READ : 고양이 전체 데이터 조회 API
app.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    // throw new Error('db connect error'); // 에러 강제 발생
    res.status(200).send({ success: true, data: { cats } });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
});

// READ : 특정 고양이 데이터 조회 API
app.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const cats = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({ success: true, data: { cats } });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
});

// CREATE : 새로운 고양이 데이터 추가 API
app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    res.status(200).send({ success: true, data: {} });
  } catch (error) {
    res.status(400).send({ success: false, error: error.message });
  }
});

// 404 middleware
app.use((req, res, next) => {
  console.log("This is error middleware");
  res.send({ error: "404 Not found error" });
  next();
});

app.listen(8000, () => {
  console.log("server on");
});
