# 221005 HTML, CSS (1)

---

- 교재
    
    [2DAY - HTML의 사본](https://docs.google.com/presentation/d/1Gdg1N2Zlb02Y7DwP8NofCFz21HJ9VgRFm1Y74MuVHB4/edit?usp=sharing)
    
    [2DAY - CSS 기초의 사본](https://docs.google.com/presentation/d/10DAZd9jENOU7wpyLc6Yncru0xeLPBZ1PJBlxUEiKvz0/edit?usp=sharing)
    
- 과제
    - 퀴즈
        
        [QUIZ-20221005T014046Z-001.zip](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/QUIZ-20221005T014046Z-001.zip)
        
        [QUIZ-20221005T052331Z-001.zip](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/QUIZ-20221005T052331Z-001.zip)
        
    - 답변
        
        [DAY 2 퀴즈 HTML.zip](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/DAY_2_%25ED%2580%25B4%25EC%25A6%2588_HTML.zip)
        
        [DAY 2 퀴즈 CSS.zip](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/DAY_2_%25ED%2580%25B4%25EC%25A6%2588_CSS.zip)
        
    - 정답
        
        [HTML_ANS-20221005T084145Z-001.zip](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/HTML_ANS-20221005T084145Z-001.zip)
        
        [CSS_ANS-20221005T084158Z-001.zip](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/CSS_ANS-20221005T084158Z-001.zip)
        
- 필기
    - HTML
        - 웹 동작방식
            
            ![Untitled](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/Untitled.png)
            
            - 클라이언트(브라우저)
                - 주소창에 주소를 입력하고 엔터
                    - http(s) - 네트워크에서 데이터를 주고받을 떄 사용하는(지켜야되는) 규약 (S는 보안 서버를 사용하는지 여부)
                    - naver.com  - 주소
                    - /category/notification - 요청 내용
            - 응답의 종류: HTML 페이지, 데이터(JSON)
        - html 파일
            - 확장자로 .html
            - 사용언어: html, css, javascript
                - html: 콘텐츠를 작성(글씨, 이미지), 구조 잡는 역할
                - css: 디자인
                - javascript: 사용자와 인터랙션 기능 구현
        - html  문서
            
            <!DOCUTYPE html> → 선언
            
            <html> </html>
            
            <head> </head> body에 대한 설명(보이지 않음 - <title>은 제외)
            
            <body> </body> 브라우저의 내용
            
            ![Untitled](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/Untitled%201.png)
            
        - VS CODE
            
            ![Untitled](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/Untitled%202.png)
            
        - HTML 문법
            
            ![Untitled](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/Untitled%203.png)
            
            - 한줄=요소 ( <H1>hello</h1>)
                - 테그에 / 없는 것: 시작, / 있는 것: 끝
                - 속성
                    - a href: 앵커
                    - 속성값은 “” 안에 써야 함
            - 중요 포인트
                - 열면 닫아야 한다.
                - 중첩해서 사용할 수 있다.
                - 안닫는 것도 있다. (<img src=””>)
            - 문법
                - 제목: h1 - h6
                    - h1이 가장 큰 제목
                    - h6이 가장 작은 제목
                - 문단: <p>
                - 앵커: <a href=”주소 url” target=”_blank”> → 주소로 이동,
                    - target=”_blank”새탭에서 열기
                - 이미지: <img src=”logo.png” widhth=”10px” height=”10px”>
                    - 닫는 테그 없음
                - 리스트 표현: ul, ol, li
                    - ul: 글머리 기호로
                    - ol: 번호 매기기로
                    - li: 글머리/번호매기기의 내용
                - 표: table
                    - tr: 행
                    - th: 헤드
                    - td: 열
                        
                        ![Untitled](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/Untitled%204.png)
                        
                - 폼
                    
                    ![Untitled](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/Untitled%205.png)
                    
                    - 백엔드, 서버로 데이터를 보낼 떄 사용
                    - 사용자의 입력을 받는 요소와 함께 쓰임
                        - input: 주요속성 type
            - developer.mozila.org/ko/
                
                ![Untitled](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/Untitled%206.png)
                
            - 시맨틱 요소: 스타일에 변형을 주지 않고 의미를 담는 요소들, SEO(검색엔진최적화)에 영향을 미침
                - <div>: 구역
                - <nav>: 네비게이션 역할(구역화)
                - <section>
                - <article>
                - <header>: 머리글
                - <footer>
                - <main>: 주요 내용
        - 웹 표준
            - 웹 표준을 잘 지켜서 작성할 수록 SEO가 잘 됨
                - [https://www.w3.org/WAI/standards-guidelines/ko](https://www.w3.org/WAI/standards-guidelines/ko)
                - [validator.w3.org](http://validator.w3.org)
        
        📖 웹의 기본
        
    - CSS
        - CSS 문법
            - HTML로 뼈대를 만들 고 CSS로 꾸밈
                
                ![Untitled](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/Untitled%207.png)
                
            - <head> ~ </head>사이에 <style> ~ </style> 삽입하고 그 사이에 css코드 적용
                
                ![Untitled](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/Untitled%208.png)
                
        - 선택자
            - 요소 선택자: html 문서 안의 요소를 선택하여 적용할 경우
                
                → p {color:red;}
                
            - 클래스 선택자: html 요소의 클래스 속성을 이용한 선택
                
                → <p **class**=”first”>처음</p>
                
                    .first {color:red;}
                
            - 아이디 선택자: html 요소의 아이디 속성을 이용한 선택
                
                → <p **id**=”onlyone”>유일한</p>
                
                    #onlyone {color:red;}
                
        - CSS 적용 방법
            - 요소에 속성으로 작성
                
                → <p style=”color:red;”>빨간색</p>
                
            - <head > <style> ~~ </style> </head>
            - css 파일을 분리해서 별도로 작성 **>> 가장 많이 사용**
                
                → <head>
                
                        <link rel=”stylesheet” href=”style.css”
                
                    </head>
                
                     p {color:red;}
                
        - 다중 선택자
            - 자손 선택자 div 안에 포함된 모든 p
                
                → div p[color: red;}
                
            - 자식 선택자 - div 안에 바로 포함된 p
                
                → div > h1 {color:red;}
                
            - 형제 선택자 - 형제 관계를 이용해서 선택
                
                → div + h2 {color:red;} (인접 형제 선택자)
                
                - <h1>//<h1>//<h1> ... 의 경우 h1+h1으로 표기하면 첫번째 h1 외의 h1이 모두 표시 됨 (h1의 인접이 계속 중첩되기 때문에)
                
                → div ~ h2 {color:red;} (일반 형제 선택자)
                
                [CSS 형제 선택자? CSS의 + 및 ~ 기호 사용법 정리 - dasima](https://dasima.xyz/css-%ED%98%95%EC%A0%9C-%EC%84%A0%ED%83%9D%EC%9E%90-%EC%A2%85%EB%A5%98-%EA%B8%B0%ED%98%B8-%EC%A0%95%EB%A6%AC/)
                
        - CSS 우선순위 : 요소의 스타일 속성 > 아이디 > 클래스 > 요소
        - 폰트
            - font-family: 사용하려고 하는 폰트를 값으로 설정 ‘,’를 사용해서 여러 개의 폰트를 나열 가능
                
                → p {
                
                font-family: aaa, “Times New Roman”, serief, sans-serief;
                
                }
                
            - font-size
                - px: 모니터의 최소 단위(고정값)
                - % 부모 요소에 비례한 크기 설정 (상대적)
                
                → p {
                
                font-size: 14px; or font-size: 100%;
                
                }
                
            - font-weight
                - bold 두껍게
                - 100 얇은
                - 400 normal
                - 700 bold
                
                → p {
                
                font-weight: bold;
                
                }
                
            - 웹 폰트 적용
                - 폰트 사용시 주의 사항
                    - 사용자 컴퓨터 안에 개발자가 지정한 폰트가 설치되어있지 않으면 사용 X
                    - 대안: 웹 폰트 사용
                - 웹 폰트: 구글 폰트
        - 박스모델
            
            ![Untitled](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/Untitled%209.png)
            
            - Contents → Padding → Border → Margin
            - Contents: Width/Height로 크기 설정
            - Padding: 컨텐츠와 테두리의 간격
                - Padding-top: 10px;
                - Padding-right: 10px;
                - Padding-bottom: 10px;
                - Padding-left: 10px;
                - Padding: 10px; - 모두
                - Padding: 10px 20px; - 상&하/좌&우
                - Padding: 10px, 20px, 30px, 40px; - 상/우/하/좌 (시계방향)
                
                ![Untitled](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/Untitled%2010.png)
                
            - Border: 경계선 굵기
                - border-width:1px; - 두께
                - border-style:solid; - 종류 (Solid, dashed, dotted)
                - border-color: red; - 선색
                - **border: 1px solid black; - 한번에 기입**
                
                ![Untitled](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/Untitled%2011.png)
                
            - Margin: 다른 요소와의 간격 (바깥 여백)
                - Margin-top: 10px;
                - Margin-right: 10px;
                - Margin-bottom: 10px;
                - Margin-left: 10px;
                - Margin: 10px; - 모두
                - Margin: 10px 20px; - 상&하/좌&우
                - Margin: 10px, 20px, 30px, 40px; - 상/우/하/좌 (시계방향)
                
                ![Untitled](221005%20HTML,%20CSS%20(1)%202670bda9f43142d39b6a460c62fff340/Untitled%2012.png)
                
                - 위/아래 요소가 겹치는 경우 더하지 않음
                    - 요소 1 (아래 Margin 10px)
                    - 요소 2 (위 Margin 20px)
                        
                        >> 둘 사이 간격은 20px (더해서 30px이 아님)
                        
            - 요소의 크기
                - 가로: width + padding + border
                - 세로 : height + padding + border
            - 크롬 검사에서 확인 가능
            
- 질문
    - [x]  html:5가 포멧을 자동으로 작성해주는 건 vscode안에서의 약속인가요?
        
        yes 다른 에디터에서는 사용안될 수 있음
        
    - [ ]  
- 공부할 것
    - 시맨틱 테그에 대하여 알아보기 (em도 시맨틱 태그다)
        - <p>HTML의 강조를 나타내는 <b>strong</b>과 <i>기울기</i>를 나타내는 em요소가 있습니다.</p><hr>
        - <p>HTML의 강조를 나타내는 <strong>strong</strong>과 <em>기울기</em>를 나타내는 em요소가 있습니다.</p><hr> **→ 시맨틱!**
    - 다중선택자
    - 웹폰트 링크는 <style> 밖에 적용
