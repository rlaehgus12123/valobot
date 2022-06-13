// 웹 구동 코드 //
const http = require('http');
const express = require('express');
const expressip = require('express-ip');
const app = express();
const router = express.Router();
const server = http.createServer(app);

app.set('view engine', 'ejs');
app.use(express.static('../views'));
app.use(express.static('../404'));
app.use(expressip().getIpInfoMiddleware);

// http 서버
app.get('/', (req, res) => {
    res.render('index', {
        server: `${client.guilds.cache.size}`,
        user: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)}`,
        music: "JVpTp8IHdEg",

    })
    console.log(req.ipInfo.ip + ": GET / HTTPS/1.1" + " 200 -");
})

app.get('*', (req, res) => {
    res.render('404', {})
})

const listener = server.listen(8082, function() {
    console.log("Web Server Onlien : HTTPS :" + listener.address().port);
})
// http 서버 END