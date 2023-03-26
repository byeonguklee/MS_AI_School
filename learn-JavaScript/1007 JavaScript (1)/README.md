# 221007 JavaScript (1)


- 과제
    - 퀴즈
        
        [QUIZ-20221007T084522Z-001.zip](221007%20JavaScript%20(1)%20280f2896c8e04777abb462e3b64d3c40/QUIZ-20221007T084522Z-001.zip)
        
    - 정답
        
        [ANS-20221007T064858Z-001.zip](221007%20JavaScript%20(1)%20280f2896c8e04777abb462e3b64d3c40/ANS-20221007T064858Z-001.zip)
        
        [ANS-20221007T084522Z-001.zip](221007%20JavaScript%20(1)%20280f2896c8e04777abb462e3b64d3c40/ANS-20221007T084522Z-001.zip)
        
- 필기
    - JS 기초 1
        - HTML 페이지를 만들 떄 각 언어의 역할
            - HTML: 뼈대
            - CSS: 디자인
            - JS: 사용자와 상호작용
        - 변수
            - 연산을 하기 위해서는 숫자를 기억해야함
            - 데이터가 저장된 주소를 모두 기억하는 것은 어렵다
            - 주소에 별칭을 붙인다! (1032주소 → birthday)
            - 변수선언
                - let num: (‘num’ 별칭으로 메모리 공간 설정)
                    - let: 예약어 (JS 약속)
                    - num: 변수명 (자유롭게)
                - num = 10 (num 변수에 10 저장)
                - let num = 10 (한번에도 가능)
                - num (변수명만 기입하면 데이터 불러오기)
            - 사칙연산 (+, -, * , / )
                - let sum = 10 + 1 → 11 (숫자+숫자)
                - let second = sum + 1 →12 (변수+숫자)
                - let third = sum + second → 23 (변수+변수)
                - **num = num + 1 ⇒ num += 1 (같은말)**
            - 데이터 유형
                - 20 : 숫자
                - ‘20‘, ‘park’ : 문자열
                - park : 변수로 인식
                    - 문자열에도 + 사용 가능(단순 합치기)
                    - let name = “park” + “ai” ⇒ parkai
                    - “1” + 30 ⇒ ‘130’ (숫자+문자=문자열)
            - Boolean  형
                - let is_check = true;
                - let under = false;
            - 배열
                - 연관된 여러 개의 데이터를 변수와 순서로 관리할 때 편리한 데이터 유형
                - let names = [’park’, ‘lee’, ‘kim’]
                    - `[ ]`를 사용하여 데이터 유형을 표시
                    - 여러개를 입력할 때는 ‘,’ 사용
                    - `[ ]` 안의 데이터 하나를 요소라고 부른다.
                - 리스트 요소 추가
                    - let names = [’park’, ‘lee’, ‘kim’]
                    - **names.push(’pyo’, ‘jeon’)**
                    - 배열에 요소를 추가하고 싶을 때는 배열 이름과.push(데이터)를 사용
                - 배열의 요소 값 불러오기
                    - let names = [’park’, ‘lee’, ‘kim’, ‘pyo’]
                    - **names[0] = park 값을 가져옴**
                    - `[ ]` 안에 작성된 숫자를 **인덱스**
                    - `[ ]` 안에 작성될 수 있는 숫자는 0 부터 (요소들의 총 갯수 -1)
                - 배열의 주요 기능
                    - **names.length (배열의 길이) (실제 개수라 0부터 새는거 아님)**
            - 객체
                - 연관이 높은 속성들을 관리할 때 편함
                - 여러 개의 데이터를 키(속성)과 값으로 관리
                - let person = {’name’:’park’, ‘age’:15, ‘city’:’seoul’}
                - 요소는 ‘키(속성)’ : 값 으로 저장
                - 객체 요소 추가하기
                    - **person[’rank’] = ‘VIP’**
                    - person = {’name’:’park’, ‘age’:15, ‘city’:’seoul’, ’rank’:‘VIP’}
                - 객체 요소 값 불러오기
                    - person[’name’] ⇒ ‘park’
                    - 객체명과 `[ ]` 키를 사용해서 값을 가져옴
            - 배열과 객체 같이 쓰기
                - let people = [{’name’:’kim’, ‘age’:40}, {’name’:’kim’, ‘age’:40}]
                - people[0] ⇒ {’name’:’kim’, ‘age’:40}
                - poeple[0][’name’] ⇒ ‘kim’
                    - [0] : 배열의 인덱스
                    - [’name’] 객체의 키
                - 배열에 객체 요소 추가하기
                    - people.push({’name’:’park’, ‘age’:15}) 또는
                    - let person = {’name’:’park’, ‘age’:15}
                        
                        → people.push(person)
                        
            - 함수
                - 기본 연산이 아닌 직접 연산 또는 기능들의 묶음을 만들고 싶을 때 사용
                    - function 함수이름 (변수들)
                        
                        명령문들 ..
                        
                        return;
                        
                        }
                        
                    - funtion test () {
                        
                        console.log(’hello function!’);
                        
                        return;
                        
                        }        ⇒ 함수 선언
                        
                        ---
                        
                        test() ⇒ 호출
                        
            - 조건문
                - ```if ( num < 20) {
                    
                    명령문 …
                    
                    }```
                    
                    - ( ) 안의 값이 true 이면 { } 안의 명령문을 실행
                    - if 예약어, (), {} 세가지로 구성
                - ```if ( num < 20) {
                    
                    명령문 …
                    
                    } else {
                    
                    명령문 …
                    
                    }```
                    
                - 조건문 && 조건문 : and
                - 조건문 || 조건문 : or
                - if … else if … else if … else
            - 반복문
                - ```for ( let i = 0; i < 100 ; i++ ) {
                    
                    console.log(i);
                    
                    }```
                    
                    - 시작부분: let i = 0;  // i에 0을 저장
                    - 조건체크: i < 100; // true 이면 {} 를 실행
                    - 증가부분: i++  // i를 1 키움
                        
                        …
                        
                    - i < 100; // 조건체크 결과 false면 실행 종료
    - JS 기초 2
        - HTML 안에서 script 태그 사용
            - ```<body>
                
                    <script>
                
                    console.log(’hello world !’)
                
                    </script>
                
                </body>```
                
        - 파일로 분리시켜서 사용하기
            - ```<body>
                
                     <script src = “script.js”></script>
                
                </body>```
                
        - html 요소 다루기
            - let h1Elements = documents. getElementsByTagNames(’h1’)
                - 모든 h1의 값을 배열의 형태로 저장
                - documents. : 문서 전체
            - let pElements = documents.getElementsByClassName(’test’)
                - test는 클래스 명
            - let idElements = document.getElementById(’idtest’)
                - id test는 id 명, ID는 한개만 있기 때문에 배열형태가 아님
                - id를 여러개 썼다고 해도 첫번째만 출력됨
        - html 요소의 값 출력해보기
            - console.log(luElements.innerHTML)
                - innerHTML → 요소의 값 확인
            - console.log(getComputedStyle(luElement).color)
                - getComputedStyle(요소).color → 요소의 색깔
            - luElement.innerText = “parking” → html 요소의 내용을 parking으로 변경
                - **innerText 사용 시, 숫자를 가져오더라도 문자열로 인식하기 때문에 innerText로 불러온 값을 parseInt(INT)로 정수로 변경을 해야 숫자로 인식 가능**
                    - PARSEINT(pElements[0].innerText)
            - luElement.style.color = ‘blue’ → CSS속성 하나만 변경
            - luElement.style.cssText = ‘background-color:green; font-size:20px;’ → 여러개의 CSS속성을 동시에 변경
        - html 요소 추가하기
            - luElement.innerHTML += “<div>inner</div>” → 요소 추가
        - html 요소 삭제하기
            - luElement.remove()
        - 이벤트 다루기
            - 객체에 이벤트 핸들러 등록: Click 시에 처리할 핸들러 등록하기
                - ```luElement.addEventListener(’click’, function(){
                    
                        alert(’Click!’)   (←함수를 이벤트 핸들러 라고 함)
                    
                    })```
                    
            - resize 이벤트 발생 시
                - ```window.addEventListener(’rezise’, function(){
                    
                        alert(window.innerwidth)
                    
                    })```
