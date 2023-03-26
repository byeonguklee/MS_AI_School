# 221011 JavaScript (2)

- 과제
    - 오전 QUIZ/ANS
        
        [과제-20221011T003737Z-001.zip](221011%20JavaScript%20(2)%20961e9d7735bf40e5837d0457dc0a44aa/%25EA%25B3%25BC%25EC%25A0%259C-20221011T003737Z-001.zip)
        
    - 오후 QUIZ
        
        [quiz-20221011T043931Z-001.zip](221011%20JavaScript%20(2)%20961e9d7735bf40e5837d0457dc0a44aa/quiz-20221011T043931Z-001.zip)
        
        [quiz-20221011T065829Z-001.zip](221011%20JavaScript%20(2)%20961e9d7735bf40e5837d0457dc0a44aa/quiz-20221011T065829Z-001.zip)
        
    - 오후 ANS
        
        [ans-20221011T234017Z-001.zip](221011%20JavaScript%20(2)%20961e9d7735bf40e5837d0457dc0a44aa/ans-20221011T234017Z-001.zip)
        
- 필기
    - jquery 기초 1
        - jquery란?: html 요소들의 수정, 추가 등을 작업을 편리하게 사용할 수 있는 라이브러리
        - 사용법
            - [https://releases.jquery.com/](https://releases.jquery.com/) 에서 CDN 주소 확인후 `<script>`에 삽입
        - jqery를 이용해서 경고창 띄우기
            
            ```
            <script>
                    $(document).ready(function(){
                        alert("hello world")
                    })
                </script>
            ```
            
            - $: jqery 사용
            - document: 문서
            - ready: 렌더링 후 뒤의 함수 실행
        - jquery로 요소 다루기
            - 요소 불러오기
                - $ (’선택자’)
                - 선택자는 CSS에서 사용하는 선택자 사용
                    - `$(“h1”)`
                    - `$(“.class”)`
                    - `$(“#only”)`
                    - `$(”div p”)`
                    - `$(”div > p”)`
            - 요소 콘텐츠 출력하기
                
                ```
                <script>
                        $(document).ready(function(){
                            let divElements = $('div')
                            console.log(divElements.html())
                        })
                ```
                
            - 요소 콘텐츠 변경하기
                
                ```
                <script>
                        $(document).ready(function(){
                            let divElements = $('div')
                            divElements.html("hello world")
                        })
                    </script>
                ```
                
            - 요소 삭제하기
                - empty: 요소안의 컨텐츠 지우기
                
                ```
                <script>
                        $(document).ready(function(){
                            let divElements = $('div')
                            divElements.empty();
                            // divElements.remove();
                        })
                    </script>
                ```
                
                - remove: <div>자체를 지우기
                
                ```
                <script>
                        $(document).ready(function(){
                            let divElements = $('div')
                            // divElements.empty();
                            divElements.remove();
                        })
                    </script>
                ```
                
            - 요소 추가하기
                
                ```
                <script>
                        $(document).ready(function(){
                            let divElements = $('div')
                            divElements.append("<p>Hello world</p>")
                        })
                ```
                
            - 요소 생성하고 추가하기
                
                ```
                <div>Grandparent</div>
                <script>
                        $(document).ready(function() {
                
                            let newElement = $('<div class="parent">parent</div>')
                            newElement.append("<p class='child'>child</p>")
                
                            let divElemtns = $("div")
                            divElemtns.append(newElement)
                        })
                    </script>
                ```
                
            - CSS 설정하기
                - `divElements.css(”color”, “red”);`
            - CSS 값 읽어오기
                - `console.log(divElements.css(”color”);`
        - 순회(찾기, 검색)
            - 부모를 중심으로 자식 요소 찾기 - children()
            - 자식을 통해서 부모  찾기 - parent()
            - 자손 찾기 - find()
            - 걸러내기 - fileter()
            - 형제 찾기 - next() // 다음 형제
            - 형제 찾기 - prev() // 이전 형제
            - .length
                - `let len = $(’p’).length``` (p의 개수)
            - .index (형제들 중 몇 번쨰
                - `index($(’selector’))`
            - 순회하기 each
        - 스타일, 애니메이션
            - .hide(): 숨기기
            - .show(): 나타내기
            - .width(), .(height)
            - fadeIn(1000): 1000ms = 1s
            - slideDown(1000) // 아래로 내려오기
            - 애니메이션 종류 후 추가작업
                - ```
                    .slideDown(1000, function() {
                    
                    alert(’animation complete’)]
                    
                    }
                  ```
                    
            - `.animate({width:200, height:200}, 1000, function() { ~ }`
                - (개체를 바꾸는 것, 바뀌는 시간, 이후 함수)
    - jquery 기초 2
        - attr
        - class 다루기
            - class 설정하기 `.addClass(’클래스 명’)`
            - class 삭제하기 `.removeClass(’클래스 명’)`
        - 요소 추가
            - `$('div').append('<p>world</p>');` // 뒤쪽에
            - `$('<p>Testing</p>').appendTo($('div'));` // 뒤쪽에
            - `$('div').pretend('<p>world</p>');` //앞쪽에
            - `$('<p>Testing</p>').pretendTo($('div'));` // 앞쪽에
        - 이동
            - insertBeforew
            - before
        - 이벤트
            - click
            - resize
            - mouseenter
            - mouseleave
            - hover // mousenter/leave 를 동시에
            - focus
            - blur
            - 이벤트 여러게 등록하기
                - `$((’p’),on({ 이벤트 1 }, { 이벤트 2 })`
            - `.off` // 이벤트 끄기
            - `.trigger(’click’)` // 이벤트 발생
            - `$.Event(”brand-new-event”)` → 거의 쓸일 없음
            - 이벤트 주의사항
                - `event.stopPropagation` (이벤트의 버블링을 멈춰줌)
                - `event.preventDefault` (기본적인 상호작용 기능을 없애줌)
