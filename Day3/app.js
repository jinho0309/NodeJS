const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.locals.pretty = true;

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/topic/new', function (req, res) {
    res.render('new');
});

app.get(['/topic', '/topic/:id'], function (req, res) {
    fs.readdir('data', function (err, files) {
        if (err) {
            console.log(err);
            res.status(500).send('Internal SErver Error');
        }
        const id = req.params.id;
        if (id) {
            //id값이 있을때
            fs.readFile('data/' + id, 'utf8', function (err, data) {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal SErver Error');
                }
                res.render('view', {
                    title: id,
                    topics: files,
                    description: data
                });

            });
        } else {
            //id 값일 없을때
            res.render('view', {
                topics: files,
                title : 'Welcome',description: 'Hello, Javascript for server'
            });
        }

    });
});



app.post('/topic', function (req, res) {
    const title = req.body.title;
    const description = req.body.description;
    fs.writeFile('data/' + title, description, function (err) {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.redirect('/topic/'+title);
    });

});

app.listen(3000, function () {
    console.log('Connectec 3000 port!');
});
