const http = require("http");
const fs = require("fs");

const { determinePage } = require("./functions");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
    const determiner = determinePage(request.url);
    const statusCode = determiner.statCode;
    response.statusCode = statusCode;

    // if(statusCode == 301){
    //     response.setHeader("Location", "/");
    // }

    response.setHeader("Content-Type", "text/html");
    fs.readFile(determiner.path, (err, data) => {
        if (err) {
            console.error(err);
            response.end();
        } else{
            response.write(data);
            response.end();
        }
    });
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http:://${HOSTNAME}:${PORT}`);
});