// server.mjs
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const PORT = process.env.PORT;

const server = createServer(async (req, res) => {
  try {
    const filePath = new URL('./home.html', import.meta.url);
    const contents = await readFile(filePath, {encoding:'utf8'});
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.end('Hello World!\n');
    res.end(contents);
  } catch (err) {
    console.error(err.message);
  }
});

// starts a simple http server locally
server.listen(PORT, () => {
  console.log(`Listening on 127.0.0.1:${PORT}`);
});

// run with `node server.mjs`
