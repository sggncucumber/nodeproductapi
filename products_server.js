var restify = require('restify');
var mongojs = require('mongojs');
 
var db = mongojs('mongodb://admin:admin123@ds053718.mongolab.com:53718/restifymyapp', ['products']);
 
// Server
var server = restify.createServer();
 
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
 
server.listen(3000, function () {
    console.log("Server started @ 3000");
});
 
server.get("/products", function (req, res, next) {
    db.products.find(function (err, products) {
        res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8'
        });
        res.end(JSON.stringify(products));
    });
    return next();
});

server.post('/product', function (req, res, next) {
    var product = req.params;
    db.products.save(product,
        function (err, data) {
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8'
            });
            res.end(JSON.stringify(data));
        });
    return next();
});