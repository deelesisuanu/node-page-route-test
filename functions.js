function determinePage(url){
    let path = "./";
    let statCode = 200;
    switch (url) {
        case "/":
            path += "index.html";
            statCode = 200;
            break;
        case "/about":
            path += "about.html";
            statCode = 200;
            break;
        default:
            statCode = 404;
            path += "404.html";
            break;
    }

    return { path, statCode };
}

module.exports = { determinePage }