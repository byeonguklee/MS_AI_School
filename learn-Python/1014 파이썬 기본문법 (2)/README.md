# 221014 파이썬 기본문법 (2)

  - 깃허브
      - Git
          - Git
              - 코드 저장소
              - 변경 저장소
              - 버전 컨트롤
              - 분산버전관리 시스템
                  - 여러 개발 pc와 저장소에 분산해서 저장
          - Github
              - 코드저장소(Git)를 클라우드에 옮겨 놓은 원격저장소
                  - 공유 가능(협업)
                  - 코드 복구 가능
          - 분산버전관리
              - 파일 변화를 시간에 따라 기록했다가 특정 시점의 버전을 다시 가져올 수 있는 것
              - 내가 올리려는 파일이 누군가 편집한 내용과 충돌 시 덮어쓰기 위험에서 벗어나 해결 가능
      - 저장소(Responsitory)
          - 저장소란?
              - Remote Repository (서버에서 관리)
              - Local Repository (개인 전용 저장소)

                  ![Untitled](221014%20%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8A%E1%85%A5%E1%86%AB%20%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB%E1%84%86%E1%85%AE%E1%86%AB%E1%84%87%E1%85%A5%E1%86%B8%20(2)%201796cf1d34bf496796b35b1f7f6d2fc0/Untitled.png)

      - 명령어
          - Add
          - Commit
          - Push

  - 파이썬 기본문법
      - 7 layers of the OSI Model
          - Physical (물리계층)
          - Data Link
          - Networrk (IP - 데이터 패키징 방법)
              - IPv4: 8bit * 4
              - IPv6: 8bit * 6
          - Transport (TCP - 데이터 컨트롤 방법) + L4 Switch
              - 3/4 단계의 TCP/IP = INTERNET
          - Session
          - Presentation
          - Application (HTTP)
      - gtts

          ```python
          from gtts import gTTS #gtts 에서 gTTS기능만 import 하기

          text = "안녕하세요 마이크로소프트 에이아이스쿨에 오신 것을 환영합니다."

          tts = gTTS(text = text, lang = 'ko')
          tts.save('hi.mp3')
          ```
