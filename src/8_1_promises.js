// promises는 무엇일까?? 어떻게 만들까?

// mdn에 promise 를 치면 이렇게 나온다
// "Promise는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타낸다"
// promise를 만들때는 실행할 수 있는 function을 넣어야 한다 forEach처럼 ()안에 내장함수를
// 넣으면 된다
// JS가 promise를 호출하면 promise는 이 함수를 실행하게 된다 근데 이 함수는
// 한쪽으로 치우쳐져서 실행되고 JS는 계속 다음 코드를 읽어나간다
// 이 괄호 안에 넣는 함수를 executor라고 한다
// executor 안에 넣는 인자는 resolve와 reject이다 이 둘은 내장함수이다
// 해야할 것은 이 promise를 resolve하거나 reject하는 것이다
// resolve는 "이거 너가 원하는 값이야 JS로 돌아가" 이고
// reject는 "미안 여기 에러가 있네" 라는 뜻이다
// 8_0에서 구글을 fetch했는데 promise가 reject 돼서 값이 없고 에러가 나왔던 것
// 아래의 amIHot를 출력해보자
const amIHot = new Promise((resolve, reject) => {});

console.log(amIHot);
// 출력해보니 pending이라고 뜬다 pending은 아직 끝나지 않았다라는 뜻이다
// 콘솔창에서 amIHot 입력해봐도 계속 pending이 뜬다 즉 JS는 지금 18번 행에
// 멈춰있다 Promise의 pending을 끝낼 방법이 무엇일까?
// 끝내기 위해서는 resolve 함수를 써야한다
// resolve를 통해 이 promise는 끝나고 너는 값을 얻게 된다
// Promise의 인자는 무조건 첫번째가 resolve 자리이고 두번쨰가 reject자리이다
// 이 각각의 인자는 함수이다 따라서 인자가 executor내에서 resolve함수로 쓰인것
// 따라서 아래처럼 인자 이름 res로 했으면 resolve함수도 res라는 이름으로 선언된 것이므로
// res()써야한다
const amISexy = new Promise((res, rej) => {
  setTimeout(res, 3000, "Yes you are!");
  // setTimeout(() => {
  //     res("Yes you are!!");
  //   }, 3000);
});
console.log(amISexy);
setInterval(console.log, 1000, amISexy);
// setInterval(() => {
//   console.log(amISexy);
// }, 1000);
// 후 갑자기 빡센 코드 나왔다고 생각할 수 있는데 의외로 간단하다
// 내가 한것은 setTimeout을 이용해 resolve 함수를 3초 뒤에 실행하도록 한것이다
// 인제 promise 안에 resolve함수가 생겼다 따라서 이 promise는 resolve함수가 실행되면
// 끝나고 값을 return 하게 된다 그래서 3초 전까진 pending 뜨다가 3초부터 Yes you are이
// 출력이 된다 즉 3초 부터 promise가 resolved 됐다
// 그리고 그것을 더 와닿게 보여주기 위해서 setInterval 써서 1초마다 amISexy출력 하도록
// 만들었다
// setTimeout은 아주 나이스한게 사실 위처럼 복잡하게 할 필요가 없이 handler를 쓰면 깔끔
// 하게 정리 가능하다 기존 것 주석 처리해놨고 핸들러 쓴것을 사용해봤다
// setTimeout(실행할 함수, 딜레이할 시간, 함수에 넣을 인자);
// setInterval(실행할 함수, 인터벌 시간, 함수에 넣는 인자);
// 이 포맷으로 사용하면 됨

// promise의 핵심은 내가 아직 모르는 value를 promise로 돌려놓고 그 value와 함께
// 작업을 할 수 있게 해준다는 것이다
// promise가 api를 호출한다면 어캄? promise가 파일 시스템에서 파일을 연다면?
// 그것들이 로딩 다 되면 그걸 다시 자바스크립트에 resolve등을 이용해서 돌려줘야 사용할 수 있다
// 다음장에선 promise를 어떻게 사용하는지에 대해 배울 것이다
