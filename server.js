const express = require('express');
const app = express();
const admin = require('./routes/admin')
const path = require("path");
const bodyParser = require('body-parser');
var methodOverride = require('method-override')

//app.use(bodyParser());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
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
app.use('/admin', admin);
app.get('/',function(req,res){
  res.render(path.normalize(__dirname + '/views/index'),{title: "Index"});
});


app.listen(3000,function(){
    console.log('App listening on locolhost:3000')
})
