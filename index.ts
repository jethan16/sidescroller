import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
// app.use('public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`server started at localhost:${port}`));