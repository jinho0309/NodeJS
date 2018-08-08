#### 팁 - Nodejs를 자동으로 재시작
1. 설치
```
$npm install supervisor -g
```
2. 사용
```
 $supervisor app.js
```

#### 라우터의 주소 묶기
```
app.get(['/topic','/topic/:id'])
```
#### redirect()
```
respond.redirect('adress');
```

### 파일 업로드
#### multer 모듈

1. 설치
```
$npm install multer --save
```

2. 사용
```
const multer = require('multer');

const upload = multer({dest : 'uploads/'})

app.post('/upload', upload.single('userfile'), function(req,res){
   res.send('Uploaded' + req.file); 
});
```

### 데이터베이스
#### MySQL
1. node-mysql 설치
```
$npm install node-mysql --save
```
