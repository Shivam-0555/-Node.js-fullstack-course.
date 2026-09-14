import http from 'http'

const server = http.createServer();

const port = 3000;
server.listen(port,()=> console.log(`Server is running on port ${port}`));