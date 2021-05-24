// promise의 사용을 배우기 위해 then에 대해 알아보자
// then은 promise가 끝나는 시점에 값을 돌려달라는 뜻을 가지고 있다
//
// 아래처럼 활용할 수 있다
const amISexy = new Promise((res, rej) => {
  setTimeout(res, 3000, "Yes you are!");
});

amISexy.then((value) => console.log(value));
// 이렇게 then안에 내장함수를 넣어서 쓰면 된다 여기서 인자 value에는 resolve함수의 반환값이
// 들어가게 된다
// 출력창에는 당연히  3초 뒤에 Yes you are! 이 출력 된다
// 실전에선 Promise로 api를 불러온다던가 로컬스토리지에서 쿠키등을 불러오고
// 다 불러온 후 then 함수 를 실행하게 된다
// 대부분 promise는 내가 만들어서 쓰기 보단 남들이 사용하도록 promise를 만드는 작업을 하게 된다

// 그렇다면 promise에 에러가 발생했을때는 어떡할까? 우린 그걸 catch해야 한다
const amIHot = new Promise((res, rej) => {
  setTimeout(rej, 3000, "You are ugly");
});
// amIHot.then((value) => console.log(value));
// 이렇게 rej함수를 쓴 후 출력해보면 uncaught이라는 에러와 함꼐 You are ugly 가 출력된다
// 근데 이렇게 했더니만 "uncaught" 에러가 발생했다 우리가 이 에러를 잡지 못했다는뜻
// 에러를 잡아줘야 한다
// 이때 쓰는게 catch라는 메서드이다 얘는 에러를 캐치해서 값을 돌려주는 역할을 한다
// 아래처럼 catch 메서드를 먹이면 에러발생시 catch안의 함수를 출력한다
amIHot.then((result) => console.log(result)).catch((error) => console.log(error));
// 이렇게 amIHot에대해 두가지 메서드를 사용했는데 이게 뭔뜻일까?
// 만약 이 promise가 resolve 됐다면 then 메서드가 실행되고
// 만약 이 promise가 reject 됐다면 catch 메서드가 실행된다
// 이렇게 resolve와 reject 모두에 대해 대응을 할 수 있다
// 보통 amIHot.then().catch() 로 코드짜면 then 메서드가 먼저 실행되고 catch 메서드 실행
// 되는거구나 라고 생각할 수 있는데 아니다!!
// 이 둘은 각기 다른 상황에서 실행되는 아이들이다
// 이 then과 catch 코드를 짤때는 promise를 좀 확인해봐야 한다 어떻게 사용할지에 대해
