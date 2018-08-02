## npm(Node Package Manager)
- Node계의 앱스토어.
- Module이라는 부품을 설치, 삭제, 관리등을 지원하는 Package Manager.
- https://www.npmjs.com


### 모듈 사용하기(underscore)
1. 초기화(package.json 생성)
```
$ npm init
```

2. 설치
~~~
$ npm install underscore [--save -g]
~~~
    - <b>--save 옵션</b> : 만약 현재 경로에 package.json 이 존재하면 아래와 같이 dependencies 항목에 자동으로 포함된다.
    - **-g** : 전역옵션

3. 사용
~~~
const _ = require('underscore');
~~~

