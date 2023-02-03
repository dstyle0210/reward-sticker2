# 마봉칭찬스티커2 by svelte
마봉칭찬스티커 업데이트 버전 기존의 Vue가 아닌, Svelte로 진행.


## 환경
- node v18.13.0
- svelte 3.54.0 , ( create-svelte@2.3.2 )
- firebase (realtime database , hosting)


## 개발하기(sveltekit)
```bash
npm run dev
```
## 빌드하기(sveltekit)
```bash
npm run build
```



## TODO
- 이미지 삽입하기
- 뽑기 기능 만들기 : 모달로 띄우기? : 부트스트랩 연동?
- 퍼블리싱 해놓기 : 디자인은?



### links
[svelte](https://svelte.dev/)


// 스벨트로 정적 페이지 만들기
https://gbg.pages.dev/posts/sveltekit-blog


// 스벨트 라우팅 (+page 등 설명)
https://osg.kr/archives/674

firebase  (web javascript)
https://firebase.google.com/docs/database/web/read-and-write?hl=ko


svelte 에서 CRUD 생성
https://blog.logrocket.com/building-crud-application-svelte-firebase/



svelte static page 로 firebase에 배포하기
아빠의 삽질로 일궈낸 칭찬 스티커 만들기!


시작
아들이 포켓몬에 빠져 살다가 "팔데아"지방인가 뭔가 "코라이돈인가 미라이돈인가 뭔가" 때문에,
해당 포켓몬들이 나오는 칭찬스티커를 내놓으라는 명에 따라 만들기 시작한 이야기.

그래 덕분에 공부할려고 했던 svelte 와 기존에 있던 칭찬스티커를 조합해보자 라는 생각으로
v2를 만들기 시작했다.

목표
- svelte로 구현
- hosting은 기존계정이 있으니 firebase 유지
- 선택 방법에서 뽑기 방식으로 변경



# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
