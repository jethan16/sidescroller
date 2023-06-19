// express
import express from 'express';
// import path from 'path';

const app = express();
const PORT = 3000;

// middleware
const HTML_DIR = path.join(__dirname, '/public/')
app.use(express.static(HTML_DIR));

app.listen(PORT, () => console.log(`listening on --> http://localhost:${PORT}`, ));