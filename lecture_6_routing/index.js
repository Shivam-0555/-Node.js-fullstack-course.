import http from 'http';

const server = http.createServer((req, res) => {
res.end('<h1>your request was received</h1>')
})
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});