import * as express from 'express';
import { Cat, CatType } from './app.model';

const app: express.Express = express();
// const app: express.Application = express()

app.get('/', (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ cats: Cat });
});

app.listen(3000, () => {
  console.log('server on');
});