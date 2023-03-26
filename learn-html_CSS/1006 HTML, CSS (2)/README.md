# 221006 HTML, CSS (2)


- 과제
    - 퀴즈
        
        [QUIZ-20221006T011858Z-001.zip](221006%20HTML,%20CSS%20(2)%2098b82b067bd44257bb835a4b115ace73/QUIZ-20221006T011858Z-001.zip)
        
        [QUIZ-20221006T043236Z-001.zip](221006%20HTML,%20CSS%20(2)%2098b82b067bd44257bb835a4b115ace73/QUIZ-20221006T043236Z-001.zip)
        
    - 정답
        
        [ANS-20221006T083704Z-001.zip](221006%20HTML,%20CSS%20(2)%2098b82b067bd44257bb835a4b115ace73/ANS-20221006T083704Z-001.zip)
        
        [ANS-20221006T083655Z-001.zip](221006%20HTML,%20CSS%20(2)%2098b82b067bd44257bb835a4b115ace73/ANS-20221006T083655Z-001.zip)
        
- 필기
    - CSS 심화 - Layout (float, position)
        - html 문서의 배치 흐름: 왼쪽에서 오른쪽, 위에서 아래로 배치
        - 인라인요소: `<a> <a>`
        - 블락요소: `<p> (줄바꿈) <p>, <div> (줄바꿈) <div>`
        - 레이아웃 작업: 요소를 정상적인 배치에서 벗어나게 하는 것
        - float 속성: 워드의 그림 어울림과 같은 속성
            
            **→ 블락요소에 다단구조를 만들 수 있다.**
            
            <aside>
            💡 img{
            
                   float: left; or right;
            
            }
            
            </aside>
            
            ![Untitled](221006%20HTML,%20CSS%20(2)%2098b82b067bd44257bb835a4b115ace73/Untitled.png)
            
        - clear 속성: float 속성을 없애고 싶을 때
            
            <aside>
            💡 div {
            
                   clear: both;  (모든방향 없앰)
            
                   clear: left; (왼쪽 float 없앰)
            
                   clear: right; (오른쪽 방향 없앰)
            
            }
            
            </aside>
            
        - overflow: 콘텐츠가 블락요소보다 클 떄
            - float을 이용한 다단 구조에서 overflow를 이용해서 clear 같은 효과를 줄 수 있음.
            - 상위요소에 overflow:hidden 설정
            
            <aside>
            💡 p {
            
                 overflow: visible; (콘텐츠를 다 노출함)
            
                 overflow: hiddn; (넘치는 부분을 숨김)
            
                 overflow: scrool; (스크롤 생성)
            
            }
            
            </aside>
            
        - Position: 요소이 배치 기준을 지정하는 속성
            
            <aside>
            💡 p {
            
                 position: static; (기본 배치 방향 - top, left right bottom 적용안됨)
            
                 position: absolute; (기준점: 상위요소)
            
                 positioin: relative; (기준점: 원래 배치 위치)
            
                 position: fixed; (기준점: 브라우저)
            
                 top, left right, bottom: 10px; 
            
                 (기준점에서 얼만큼 떨어지는지)
            
            }
            
            </aside>
            
            ![Untitled](221006%20HTML,%20CSS%20(2)%2098b82b067bd44257bb835a4b115ace73/Untitled%201.png)
            
            - Static position
                - 요소의 위치가 기본 배치 흐름을 따르도록 설정
                - 위치좌표 속성이 적용 안됨
                - 사용 할 일 없음
            - absolute position
                - 상위요소를 기준으로 잡고 위치좌표 속성에 따라 배치
                - 기준이 되는 상위요소: Position이 static이 아닌 가장 근접한 상위요소
                    - 기준이 될 상위요소에 position:relative를 적용한 후 위치좌표 속성들을 사용할 것!
            - relative position
                - 요소의 기본 위치를 기준점으로 잡고 위치좌표를 설정하여 배치
                - 단독적으로는 잘 사용되지 않고, absolute의 기준요소로 설정하기 위하여 사용
            - fixed position
                - 브라우저의 viewport(브라우저의 제일 위) 기준으로 위치좌표 설정
                - 스크롤을 해도 사라지지 않음(사이트의 navigation bar가 스크롤헤서 아래로 내려도 위에 붙어 있는 것의 이유)
                - fixed를 설정하면 레이어가 한층 올라오기 때문에 아래 요소가 뒤로 겹쳐짐 → padding 또는 margin을 뒤에 오는 요소에 설정해서 보이게 함
    - CSS 심화 - 반응형, 부트스트랩
        - 반응형 - 미디어쿼리
            - 반응형
                - 반응형 웹: 브라우저 크기에 따라 디자인이 변하는 웹
                - 필요 속성
                    - width의 값을 %(상대값)로 표현
                    - %로 설정했을 시, 부모요소의 크기를 기준으로 함
            - 미디어쿼리
                
                <aside>
                💡 @media (max-width:800px){
                
                  (800이하 브라우저 크기에서 아래 내용 적용)
                
                @media (min-width:400px){ 
                
                  (400이상 브라우저 크기에서 아래 내용 적용)
                
                @media (max-width:800px) and (min-width:400px){
                
                  (400~800 사이의 브라우저 크기에서 아래 내용 적용)
                
                       div {
                
                background-color: red;
                
                }
                
                }
                
                </aside>
                
            - veiewport meta 요소
                
                <aside>
                💡 <head>
                
                    <meta name=“viewport” …
                
                </aside>
                
                - 웹 페이지를 실행하고 있는 디바이스 인식
                - 사용하지 않으면, 태블릿인지 pc인지 확인 불가
            - 주로 사용하는 미디어쿼리 크기
                - [https://viewportsizer.com/devices/](https://viewportsizer.com/devices/)
                - 큰 데스크탑: 1200px 이상
                - 중간크기 데스크탑: 992px 이상
                - 태블릿: 768px 이상
                - 모바일 768px 미만
            - **반응형 3대장: 미디어쿼리 / 상대값 / meta viewport 요소**
    - 부트스트랩
        - 반응형 웹 페이지를 빠르게 만들 수 있는 프레임워크
            - 트위터에서 개발 - HTML, CSS, JS언어로  만들어짐
        - CSS 속성을 잘 몰라도 부트스트랩에서 제공하는 클래스를 이용해서 빠르게 페이지를 만들 수 있다는 장점
        - 시작하기
            - `<head>`에 bootstrap link
            - `<body>`에 class=”container main”
            - 다단 배치를 위하여 class=”row”
            - 열을 위하여 class=”col” → 1페이지를 12로 나눴다고 했을 때 “col-md-3” : 한페이지에 4개 나올 col 크기
                
                “col-sm-6” : 한페이지에 2개 나올 col 크기
                
            - 각 영역별로 꾸며주기
            - [placeimg.com/300/300/any](http://placeimg.com/300/300/any) 더미 이미지 가져오는 곳
        - 아코디언
            - class=”acordion”
