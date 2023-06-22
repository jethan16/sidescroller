import express, {Express, Request, Response} from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const port = 3000;

const app: Express = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`now listening on on port ${port}`)
});



