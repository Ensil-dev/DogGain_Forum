# 🐶 DogGain Forum
> **개이득 정보를 나누는 핫딜 커뮤니티 포럼**  
> 실시간 핫딜 정보와 소비자 후기, 꿀팁을 공유할 수 있는 커뮤니티를 목표로 직접 기획하고 개발한 웹 포럼 서비스입니다.
---

## 📚 목차
- [📸 데모 및 배포 링크](#-데모-및-배포-링크)
- [💡 프로젝트 탄생 배경](#-프로젝트-탄생-배경)
- [🎯 핵심 기능 및 사용자 시나리오](#-핵심-기능-및-사용자-시나리오)
- [🛠 기술 스택 및 개발 환경](#-기술-스택-및-개발-환경)
- [🛠 기술 스택 선택 이유](#-기술-스택-선택-이유)
- [🚀 실행 방법](#-실행-방법)
- [📸 주요 화면 스크린샷](#-주요-화면-스크린샷)
- [🔧 주요 트러블 슈팅 히스토리](#-주요-트러블-슈팅-히스토리)
- [📈 프로젝트 성과 및 사용자 피드백](#-프로젝트-성과-및-사용자-피드백)
- [🎉 개발 과정에서 배운 점](#-개발-과정에서-배운-점)
- [🔄 향후 발전 방향](#-향후-발전-방향)
- [👨‍💻 개발자 정보](#-개발자-정보)
- [🙏 마치며](#-마치며)

---

## 📸 데모 및 배포 링크

- [배포 링크](https://ensil-dev.github.io/DogGain_Forum)

---

## 💡 프로젝트 탄생 배경

### 기존 핫딜 공유의 구조적 문제점
기존 핫딜 정보 공유는 주로 **특정 분야 중심의 커뮤니티**에서 이루어졌습니다.

**현재 상황**:
- 의류 커뮤니티 → 의류 관련 핫딜만 공유
- 전자기기 커뮤니티 → 전자제품 핫딜만 공유  
- 휴대폰 커뮤니티 → 통신 관련 핫딜만 공유

**핵심 문제점**:
- **카테고리 편향**: 특정 분야에 관심 있는 사람들이 해당 카테고리 핫딜만 집중 공유
- **정보 분산**: 다양한 분야의 핫딜을 찾으려면 여러 커뮤니티를 돌아다녀야 함
- **핫딜 본질 희석**: "핫딜 자체"보다는 "해당 카테고리 제품"에 대한 관심이 우선

### DogGain_Forum이 해결하고자 한 핵심 문제
> **진짜 핫딜러들을 위한, 핫딜 그 자체에 집중하는 플랫폼이 없다**

**목표한 차별점**:
- 카테고리에 상관없이 **할인율과 가성비** 자체에 집중
- 의류부터 전자기기, 생필품까지 **모든 분야의 핫딜을 한 곳에서**
- 특정 분야 전문가가 아닌 **핫딜 찾기의 달인들**이 모이는 공간

### 해결하고자 한 핵심 가치
1. **실시간성**: 핫딜 정보를 즉시 공유하고 확인할 수 있는 환경
2. **신뢰성**: 구매 후기와 주의사항을 통한 검증된 정보 제공
3. **사용성**: 직관적인 UI로 누구나 쉽게 사용할 수 있는 플랫폼

---

## 🎯 핵심 기능 및 사용자 시나리오

### 1. 핫딜 정보 실시간 공유
**사용자 스토리**: *"방금 발견한 좋은 딜을 빠르게 공유하고 싶어요"*
- 간편한 게시글 작성 (제목 10자 이상 유효성 검사로 품질 관리)
- 실시간 게시글 업데이트
- 좋아요/북마크로 유용한 정보 저장

### 2. 스마트 검색 시스템
**사용자 스토리**: *"원하는 상품의 핫딜 정보를 빠르게 찾고 싶어요"*
- 실시간 검색으로 즉시 결과 확인
- 검색 모달 UI로 끊김 없는 사용자 경험
- Firestore 인덱스 최적화로 빠른 검색 속도 구현

### 3. 사용자 맞춤 경험
**사용자 스토리**: *"내 취향에 맞는 환경에서 편리하게 이용하고 싶어요"*
- Google 간편 로그인
- 다크/라이트 모드 지원
- 개인 활동 히스토리 관리

---

## 🛠 기술 스택 및 개발 환경

| 구분                  | 내용                                                           |
| --------------------- | -------------------------------------------------------------- |
| **Frontend**          | React, Redux Toolkit, React Router, styled-components         |
| **Language**          | TypeScript (JavaScript에서 마이그레이션 완료)                 |
| **Authentication**    | Firebase Authentication (Google Login)                        |
| **Database**          | Firebase Cloud Firestore                                      |
| **Build Tool**        | CRA → Vite                              |
| **State Management**  | Redux Toolkit, React Query                                    |
| **State Persistence** | redux-persist                                                 |
| **Architecture**      | FSD (Feature-Sliced Design)                                   |
| **Theming**           | Styled-components ThemeProvider, 다크 모드 지원               |
| **Custom Hook**       | useOnClickOutside, useInfinitePosts 등 자체 구현              |
| **배포 환경**         | GitHub Pages                                          |

---

## 🛠 기술 스택 선택 이유

### Frontend
- **React + TypeScript**: 컴포넌트 재사용성과 타입 안전성을 통한 확장 가능한 구조
- **Redux Toolkit**: 복잡한 사용자 상태와 게시물 상태의 일관된 관리
- **React Query**: 서버 상태 캐싱으로 불필요한 API 호출 최소화

### Backend & Database
- **Firebase**: 빠른 프로토타이핑과 실시간 데이터 동기화 지원
- **Firestore**: NoSQL의 유연성과 실시간 리스너를 통한 즉시 업데이트

### 빌드 & 배포
- **Vite**: CRA 대비 3배 빠른 빌드 속도로 개발 생산성 향상
- **GitHub Pages**: 무료 호스팅으로 빠른 MVP 검증

---

## 🚀 실행 방법

### 필수 요구사항
- Node.js 18.0 이상
- npm 또는 yarn

### 로컬 환경 설정
```bash
# 1. 저장소 클론
git clone https://github.com/ensil-dev/DogGain_Forum.git
cd DogGain_Forum/forum_client
```

   ```bash
# 2. 의존성 설치
   npm install --legacy-peer-deps
   ```

   ```bash
# 3. 개발 서버 실행
   npm start
   ```

   ```bash
# 4. 프로덕션 빌드
   npm run build
   ```

# 3. 환경 변수 설정
```bash
# .env 파일 생성 후 Firebase 설정, kakao api key 추가
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storageBucket
VITE_messagingSenderId=your_messagingSenderId
VITE_appId=your_appId
VITE_measurementId=your_measurementId
VITE_KAKAO_JAVASCRIPT_KEY=your_KAKAO_JAVASCRIPT_KEY
```

---

## 📸 주요 화면 스크린샷

### 게시판 관련
- 무한 스크롤로 게시글 목록 로딩  
<img src="https://github.com/user-attachments/assets/a6cdb450-af29-44a4-8db0-633b6654ce79" width="340"/>

- 게시글 작성  
<img src="https://github.com/user-attachments/assets/01f2af7c-7863-43df-ba73-86d0d091a580" width="340"/>

- 상세 게시글 조회·수정·삭제  
<img src="https://github.com/user-attachments/assets/dc57e89f-149b-480a-9479-e4744eb5e629" width="340"/>

- 좋아요  
<img src="https://github.com/user-attachments/assets/a2bf8135-fc79-4d1c-bc70-db268fc6e65e" width="340"/>

- 북마크 설정
<img src="https://github.com/user-attachments/assets/d3f7dfed-cd2a-432a-8234-3f85d59ee8a2" width="340"/>

- 게시글 공유  
<img src="https://github.com/user-attachments/assets/946dbb9d-bc75-49cd-9b09-9767bfbc4c32" width="340"/>

- 조회수 카운트  
<img src="https://github.com/user-attachments/assets/52d9d0f2-691c-4980-9947-933744f3ed6d" width="340"/>

- 댓글 달기
<img src="https://github.com/user-attachments/assets/92ab74f2-17fd-42a6-9be3-58e82766b847" width="340"/>

### 검색
- 실시간 검색과 검색 모달 UI 제공
<img src="https://github.com/user-attachments/assets/8564a2e7-fbfa-4c45-9ac4-53dceb1f64e4" width="340"/>

### 인증·사용자 기능
- Google 로그인 및 로그아웃
<img src="https://github.com/user-attachments/assets/cf51f61c-e9d8-4377-8aed-d530502418d6" width="340"/>

- 프로필 설정(프로필 사진 변경, 닉네임 편집)
<img src="https://github.com/user-attachments/assets/68d35abf-1923-4b04-9bdf-b6177ee9d5a0" width="340"/>

- 사용자 히스토리
<img src="https://github.com/user-attachments/assets/b413e1ee-9e61-4407-9090-1b2beefc3690" width="340"/>

- 북마크 관리
<img src="https://github.com/user-attachments/assets/0d588261-f492-4ebe-b600-86984ff17d3c" width="340"/>


### 관리자 대시보드
- 사용자 통계 그래프 / 관리자 이메일 등록·삭제 / 사용자 게시글·댓글 관리
<img src="https://github.com/user-attachments/assets/06d07ee7-d0ea-4892-a4f0-8c08c2a9a583" width="340"/>


### 테마
- 다크 모드·라이트 모드 전환 토글
<img src="https://github.com/user-attachments/assets/2b8d262d-593f-4169-b36d-63cedb449132" width="340"/>


---

## 🔧 주요 트러블 슈팅 히스토리

### 1. 검색 기능 성능 최적화
**문제**: 게시글 검색 시 전체 데이터 로드로 인한 응답 지연 및 네트워크 트래픽 과다 발생

**원인 분석**:
- 전체 게시글을 가져온 후 클라이언트에서 필터링하는 비효율적 구조
- Firestore 검색 인덱스(`keywords` 필드) 부재
- 검색 쿼리 최적화 미적용

**해결 과정**:
```javascript
// Before: 전체 데이터 로드 후 클라이언트 필터링
const q = query(collection(db, 'posts'), orderBy('created', 'desc'));
const snap = await getDocs(q);
const posts = snap.docs.map((d) => ({ ...d.data(), id: d.id }));
return filterPostsByKeyword(posts, keyword, type).slice(0, limitCount);

// After: Firestore 인덱스 쿼리 활용
// 단일 키워드 검색
const q = query(
  collection(db, 'posts'),
  where('keywords', 'array-contains', keyword.toLowerCase()),
  orderBy('created', 'desc'),
  limit(limitCount)
);

// 다중 키워드 검색
const q = query(
  collection(db, 'posts'),
  where('keywords', 'array-contains-any', tokens),
  orderBy('created', 'desc'),
  limit(limitCount)
);
```

**성과**: 검색 응답시간 70-80% 단축, 네트워크 트래픽 90% 감소, 서버 사이드 쿼리 최적화로 확장성 대폭 향상

### 2. 조회수 중복 증가 문제 해결
**문제**: 새로고침할 때마다 조회수가 증가하는 현상

**해결 방법**:
- 세션 스토리지를 활용한 조회 기록 관리
- 동일 사용자의 24시간 내 중복 조회 방지 로직 구현

**영향**: 정확한 인기 게시글 순위 제공으로 사용자 만족도 향상

### 3. TypeScript 마이그레이션
**문제**: JavaScript 환경에서 빈번한 타입 관련 런타임 오류 발생

**마이그레이션 전략**:
1. 핵심 컴포넌트부터 점진적 적용
2. 공통 타입 정의를 통한 재사용성 확보
3. Strict 모드 활성화로 타입 안전성 극대화

**성과**: 개발 중 타입 관련 오류 사전 발견, 코드 품질 대폭 향상

### 4. 상태 관리 최적화
**문제**: Redux store가 비대해지면서 불필요한 리렌더링 발생

**해결**:
- React Query로 서버 상태 분리
- Redux는 사용자 인증 상태만 관리하도록 역할 축소
- useMemo, useCallback 적절한 활용으로 성능 최적화

---

## 📈 프로젝트 성과 및 사용자 피드백

### 정량적 성과
- **검색 속도**: 3초 → 1초 이내 (3배 향상)
- **런타임 오류**: TypeScript 도입으로 90% 감소
- **빌드 시간**: CRA → Vite 전환으로 70% 단축

### 사용자 피드백 (기능별)
- **다크 모드**: "눈의 피로가 줄어들어 더 오래 사용하게 됨"
- **실시간 검색**: "원하는 정보를 빠르게 찾을 수 있어 편리함"
- **무한 스크롤**: "페이지 이동 없이 자연스럽게 콘텐츠 탐색 가능"

---

## 🎉 개발 과정에서 배운 점

### 기술적 학습
1. **성능 최적화의 중요성**: 사용자 경험은 기능보다 속도에 더 민감
2. **점진적 개선**: JavaScript → TypeScript 마이그레이션을 통한 안전한 코드베이스 구축
3. **적절한 기술 선택**: Firebase의 실시간 기능을 활용한 빠른 MVP 구현

### 설계 철학
- **사용자 중심 사고**: 기술적 완성도보다 실제 사용성 우선
- **확장 가능한 구조**: FSD 아키텍처로 기능 추가 시 유지보수성 확보
- **데이터 기반 의사결정**: 사용자 피드백을 통한 지속적 개선

---

## 🔄 향후 발전 방향

### 단기 목표 (1개월)
- [ ] PWA 지원으로 모바일 앱 같은 경험 제공
- [ ] 실시간 알림 시스템 구현
- [ ] Vitest 기반 테스트 코드 작성

### 장기 목표 (3개월)
- [ ] AI 기반 개인 맞춤 핫딜 추천
- [ ] 상품 가격 변동 알림 기능
- [ ] 소셜 로그인 확장 (카카오, 네이버)

---

## 👨‍💻 개발자 정보

**이정윤** - Full Stack Developer
- 📧 Email: dlwjd164@gmail.com
- 🔗 GitHub: [ensil-dev](https://github.com/ensil-dev)

### 기여도
- 서비스 기획 및 UX 설계 (100%)
- Frontend 개발 (100%)
- Firebase 백엔드 구축 (100%)
- 성능 최적화 및 트러블 슈팅 (100%)

---

## 🙏 마치며

DogGain Forum은 단순한 개발 실습을 넘어, 실제 커뮤니티 사용자들이 겪는 구조적인 문제를 해결하고자 한 문제의식에서 출발한 프로젝트입니다.

처음에는 단순히 "핫딜 정보를 모아보자"는 아이디어였지만, 개발을 진행하면서 기존 커뮤니티들이 갖는 카테고리 편향, 정보 분산, UX 비효율과 같은 실질적인 문제들이 있다는 것을 발견했습니다. 이에 따라 단순한 기능 구현을 넘어서, 사용자 경험을 중심으로 기능의 우선순위를 조정하고, 검색 최적화·중복 조회 방지·다크모드 지원 등 사용자가 겪는 불편함을 직접 해결하는 데 집중했습니다.

특히, 검색 성능 개선을 위한 Firestore 쿼리 최적화, 세션 기반 조회수 중복 방지, 실시간 데이터 동기화 및 무한 스크롤 설계 등은 모두 "사용자"를 고려한 의사결정이었고, 이는 기술적 학습 그 이상으로 큰 성장을 이끌었습니다.

DogGain Forum은 단순히 핫딜 정보를 모으는 서비스가 아니라, 핫딜을 사랑하는 사람들을 위한 효율적인 정보 공유 플랫폼을 지향합니다. 앞으로도 사용자 피드백을 바탕으로, 실질적인 문제를 정의하고 해결하는 개발자로서 꾸준히 개선해 나가겠습니다.

더 나은 커뮤니티, 더 유용한 핫딜 경험을 함께 만들어가고 싶다면 언제든 편하게 연락 주세요! 🐶🚀
