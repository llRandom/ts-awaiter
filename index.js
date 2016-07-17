let http = require('http');
let url = require('url');
let express = require('express');
let app = express();
app.use(express.static('./wwwroot'))
    .get('/users/:id', function (req, res) {
        res.json({
            id: parseInt(/\/users\/(\d+)/.exec(req.url)[1]),
            name: "John Doe"
        });
    }).get('/posts', function (req, res) {
        res.json([
            ['test1', 'test2', 'test3'].map((body, index) => {
                return {
                    id: index + 1,
                    body: body,
                    userId: parseInt(url.parse(req.url, true).query.userId)
                };
            })
        ]);
    });
http.createServer(app).listen(80);