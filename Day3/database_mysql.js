var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '#######',
  database : 'o2'
});

conn.connect();

//let sql = 'select * from topic';
//conn.query(sql,function(err,rows,fields){
//   if(err)
//       console.log(err);
//    else{
//        for(var i=0; i<rows.length ;i ++)
//            console.log(rows[i].title);
//    }
//});
//
//let sql = 'insert into topic(title,description,author) values(?, ?, ?)';
//var params = ['Supervisor','Watcher','graph'];
//
//conn.query(sql, params, function(err,rows,fields){
//   if(err){
//       console.log(err);
//   }else{
//       console.log(rows.insertId);
//   }
//});

let sql = 'update topic set title=?, author=? where id=?';
var params=['NPM', 'leezche',1];
conn.query(sql, params, function(err,rows,fields){
   if(err){
       console.log(err);
   }else{
       console.log(rows);
   }
});

conn.end();
