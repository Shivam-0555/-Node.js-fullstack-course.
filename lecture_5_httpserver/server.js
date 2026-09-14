import http from 'http'

const server = http.createServer((req, res) => {
    res.end('your request was received');
});

const port = 3001;
server.listen(port,()=> console.log(`Server is running on port ${port}`));