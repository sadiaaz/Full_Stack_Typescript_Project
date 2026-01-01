import express, { Request, Response } from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Backend is running with TypeScript!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is flying at http://localhost:${PORT}`);
});