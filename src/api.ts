import { Router } from 'express';

const apiRouter = Router();

apiRouter.get('/', (_, res) => {
  res.send('Hello, world!');
});

export default apiRouter;
