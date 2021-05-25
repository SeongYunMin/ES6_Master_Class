// Promise.race는 기본적으로 형태는 Promise.all 이랑 같지만 얘는
// all과는 다르게 여러 promise들 중 한개라도 먼저 resolve되거나 reject되면
// 다음 then, catch가 실행된다
// 즉 마치 race를 하는 것처럼 p1,p2,p3 중 가장 빨리 resolve나 reject되는게 실행되는 것
const p1 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "First");
});
const p2 = new Promise((reject) => {
  setTimeout(reject, 4000, "I hate JS");
});
const p3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Third");
});
const motherPromise = Promise.race([p1, p2, p3]);

motherPromise
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
// 즉 이럴경우 Promise.all은 셋이 다 끝날때까지 기다렸다가 then이 실행되지만
// Promise.race는 p1,p2,p3중 가장빠르게 출력된 Third만 return 되고 then 실행되어
// 콘솔창에는 새로고침 후 3초뒤 Third만 출력된다
// 말그대로 p1,p2,p3가 race하는 것이라고 생각하면 직관적이다
// Promise.race([p1, p2, p3])
//   .then((values) => console.log(values))
//   .catch((err) => console.log(err));
// 참고로 저렇게 motherPromise 선언할 필요없이 그냥 위 주석 처럼 표현해도 된다 더 간단하다
