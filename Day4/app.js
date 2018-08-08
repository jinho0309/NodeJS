const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@@@@@@@@@',
    database: 'o2'
});

conn.connect();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.locals.pretty = true;

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/topic/add', function (req, res) {
    var sql = 'select id,title from topic';
    conn.query(sql, function (err, topics, fields) {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.render('add', {
            topics: topics
        });
    });
});

app.post('/topic/add', function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var author = req.body.author;
    var sql = 'insert into topic(title,description,author) values(?,?,?)';
    conn.query(sql, [title, description, author], function (err, result, fields) {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect('/topic/' + result.insertId);
        }
    });

});
app.get('/topic/:id/edit', function (req, res) {
    var sql = 'select id,title from topic';
    conn.query(sql, function (err, topics, fields) {
        var id = req.params.id;
        if (id) {
            var sql = 'select * from topic where id=?';
            conn.query(sql, [id], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                } else {
                    res.render('edit', {
                        topics: topics,
                        topic: rows[0]

                    });
                }
            });
        } else {
            console.log('There is no id.');
            res.status(500).send('Internal Server Error');
        }
    });
});

app.post('/topic/:id/edit', function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var author = req.body.author;
    var id = req.params.id;
    var sql = 'update topic set title=?, description=?, author=? where id=?';

    conn.query(sql, [title, description, author, id], function (err, result, fields) {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect('/topic/' + id);
        }
    });
});
app.get('/topic/:id/delete', function (req, res) {
    var sql = 'select id,title from topic';
    var id = req.params.id;
    conn.query(sql, function (err, topics, fields) {
        var sql = 'select * from topic where id=?';

        conn.query(sql, [id], function (err, topic) {
            if (err) {
                console.log(err);
            } else {
                if(topic.length==0){
                    console.log('There is no record.');
                }else{
                    res.render('delete', {
                    topics: topics,
                    topic : topic[0]
                });
                }

            }
        });


    });
});

app.post('/topic/:id/delete', function (req, res) {
    var id = req.params.id;
    var sql = 'delete from topic where id=?';
    conn.query(sql,[id],function(err,result){
        if(err){
            console.log(err);
        }else{
             res.redirect('/topic');
        }

    });
});

app.get(['/topic', '/topic/:id'], function (req, res) {
    var sql = 'select id,title from topic';
    conn.query(sql, function (err, topics, fields) {
        var id = req.params.id;
        if (id) {
            var sql = 'select * from topic where id=?';
            conn.query(sql, [id], function (err, rows, fields) {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                } else {
                    res.render('view', {
                        topics: topics,
                        topic: rows[0]

                    });
                }
            });
        } else {
            res.render('view', {
                topics: topics
            });
        }
    });
});



app.listen(3000, function () {
    console.log('Connectec 3000 port!');
});
