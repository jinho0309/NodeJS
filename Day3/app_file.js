const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');


var _storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})


const upload = multer({storage : _storage});
app.use('/user',express.static('uploads'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.locals.pretty = true;

app.set('views', './views');
app.set('view engine', 'jade');
app.get('/upload', function(req,res){
   res.render('uploadform');
});

app.post('/upload', upload.single('userfile'), function(req,res){

   res.send('Uploaded'+req.file.filename);
});

app.listen(3000, function () {
    console.log('Connectec 3000 port!');
});
