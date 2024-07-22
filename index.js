import { createServer } from "node:http";
import fs from 'fs';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact-me':
            path += 'contact-me.html';
            break;
        default:
            path += '404.html'
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(`Something went wrong: ${err.message}`);
            res.end('Something went wrong...');
        } else {
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
    console.log('Server is running...');
});