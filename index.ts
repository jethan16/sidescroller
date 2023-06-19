// // express
// import express, { Express } from 'express';

// const app: Express = express();
// const PORT = 3000;

// // middleware
// app.use(express.static(__dirname + "dist"));
// app.get('/', (req, res) => {
//    console.log(res)
// })
// app.listen(PORT, () => console.log(`listening on --> http://localhost:${PORT}`, ));

import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server is running with nodemon');
        res.sendFile(__dirname + "/public/index.html")
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});