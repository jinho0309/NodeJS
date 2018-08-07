## Express FramWork
- http://expreejs.com/ko/

###  시작하기
1. 설치
```
$ npm init
$ npm install express --save
```
2. 사용

```
const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hello home page');
});

app.get('/login',function(req,res){
    res.send('Login please');
})

//listen(port,function)
app.listen(3000, function(){
    console.log('Connected 3000 port!');
});
```

여기서 app.get은 get방식과 post방식의 get이고 첫번째 인자로 URL값을 넣어 라우팅한다.

### Express에서 정적파일 서비스
```
app.use(express.static('public'));
```

여기서  public은 폴더명

### Express 웹페이지 표현 방법
1. 정적표현 
    - 서버를 열고 닫을 필요없음.
    - 동적으로 바꿀 수 없지
2. 동적표현 
    - 서버를 열고 닫아야 Reload
    - But. for문이라든가 코딩이가능함
    
### Express 템플릿 엔진 (Jade)
정적표현과 동적표현의 장점을 잘 섞었군.

#### Express와 함께 템플릿 엔진을 사용하기
1. 설치
```
$ npm install jade --save
```
2. 설정
```
app.set('view engine', 'jade');
app.set('views', './views');
```
3. 사용
```
app.get('/template',(req,res)=>{
   res.render('temp', {time:'hello'}); 
});
```

#### Jade의 사용법과 문법
**app.js**
```
app.locals.pretty = true;
```
**temp.jade**
```
div = time
```

#### Express-URL을 이용한 정보의 전달
**Query String**
```
http://a.com/topic?id=1
http://a.com/topic?id=2
http://a.com/topic?id=3

```
**req.query**
```
app.get('/topic',(req,res)=>{

   res.send(req.query.id); 
});
```
**Semantic URL**
- Path형식
- req.params

**ex: localhost/topic/100**
```
app.get('/topic/:id',function);
req.params.id
```

#### Express - POST 방식
1. body-parser 설치
```
npm install body-parser --save
```
2. body-parser 사용
```
const bodyParser = require('body-parer');
app.use(bodyParser.urlencoded({extended:false}));
req.body.name
```
