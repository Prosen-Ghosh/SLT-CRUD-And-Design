const express = require('express');
const app = express();
const admin = require('./routes/admin')
const path = require("path");

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
