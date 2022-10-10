import express, { Application,Request,Response,NextFunction } from 'express';

const app: Application = express();
const port = 5001;

app.get('/', (req: Request, res: Response,next:NextFunction) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});