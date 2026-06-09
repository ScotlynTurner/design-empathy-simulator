const http = require('http');
const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const port = Number(process.env.PORT) || 3000;

const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((request, response) => {
    const requestPath = request.url === '/' ? '/index.html' : request.url;
    const filePath = path.join(rootDir, decodeURIComponent(requestPath));

    if (!filePath.startsWith(rootDir)) {
        response.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('Forbidden');
        return;
    }

    if (!fs.existsSync(filePath)) {
        response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('Not found');
        return;
    }

    const contentType = mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream';

    response.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-store'
    });

    fs.createReadStream(filePath).pipe(response);
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});