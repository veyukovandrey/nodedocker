const express = require('express');
const app = express();
const router = express.Router();

const publicPath = __dirname + '/public/';
const viewsPath = publicPath + '/views/';
const port = 3000;

router.use(function (req, res, next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req, res){
  res.sendFile(viewsPath + 'index.html');
});

router.get('/testroute', function(req, res){
  res.sendFile(viewsPath + 'testroute.html');
});

app.use(express.static(publicPath));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})