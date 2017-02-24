const express = require('express');
const app = express();
const admin = require('./routes/admin');
const user = require('./routes/users');
const path = require("path");
const bodyParser = require('body-parser');
var methodOverride = require('method-override');
const expressValidator = require('express-validator');

//app.use(bodyParser());

//app.use(fileUpload());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

//app.use(express.methodOverride());

app.set('view engine', 'ejs'); // For template engine
app.use('/assets',express.static(__dirname + '/public'));
app.set('/views',path.normalize(__dirname + ' /views'));
app.use('/images',express.static(__dirname + '/public/img/userImages'));
app.use('/interactive_task',express.static(__dirname + '/public/interactive_task'));
app.use('/admin', admin);
app.use('/', user);
/*app.get('/',function(req,res){
  res.render(path.normalize(__dirname + '/views/index'),{title: "Index"});
});
*/

app.listen(3000,function(){
    console.log('App listening on locolhost:3000')
})
