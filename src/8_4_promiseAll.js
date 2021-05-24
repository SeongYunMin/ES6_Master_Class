// promise.all은 일단 있는 promise를 다 실행하고 그 중 resolve된
// promise를 반환하는 애이다
// 여러개의 promise를 만들어보자
const p1 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "First");
});
const p2 = new Promise((resolve) => {
  setTimeout(resolve, 1000, "Second");
});
const p3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Third");
});
// 때떄로 우린 한 화면에 3,4개의 api에서 값을 불러와야될때 있다
// 영화 소개 사이트 만드는데 나는 상영중인 영화 api도 가져와야 할거고
// 인기 영화 api도 가져와야하고 성인영화 api도 가져와야 할 것이다
// 그런거는 then을 통해 순차적으로 가져오면 시간 낭비이다 한꺼번에 가져와야 함
// 이때 promise.all이 필요한 순간이다
// promise.all은 한개의 promise를 리턴값으로 주는데 모든 promise가 다 resolve
// 되고 난 후 마지막 promise에 return값을 주는 것이다
// promise.all 선언할떄는 new 안 붙인다
const motherPromise = Promise.all([p1, p2, p3]);
motherPromise.then((values) => console.log(values));
// 이런식으로 Promise.all에 array로 p1,p2,p3를 넣고 then으로
// 출력했더니만 p1,p2,p3의 return 값들이 array에 담긴채로 각각이 resolve 다
// 끝난뒤에 출력이 되는 것을 알 수 있다 즉 5초 뒤에 출력된다
// 또한 promise.all의 좋은점은 p1,p2,p3가 resolve되는 순서대로 어레이에
// 값을 넣는게 아니라 기존에 인자로 설정해둔 순서로 값이 저장된다는 것이다
// 그럼 만약에 promise들 중 하나에 에러가 발생했을 경우는 어떡할까?
const q1 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "First");
});
const q2 = new Promise((resolve, reject) => {
  setTimeout(reject, 1000, "I hate JS");
});
const q3 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "Third");
});
const motherQromise = Promise.all([q1, q2, q3]);
motherQromise
  .then((values) => console.log(values))
  .catch((err) => console.log(err));
// 위의 예시처럼 q2가 reject된 경우 실행해보면 에러가 뜸을 알 수 있다
// 즉 promise가 하나라도 reject 되면 Promise.all도 reject된다
// 따라서 promise.all에 catch를 붙여서 err에 대응할 수 있게 짤 수 있다
// 이거의 경우 q2에서 err발생했으므로 실행시키면 1000ms뒤 I hate JS만 출력됨을 알 수 있다
// 그 이후의 것은 출력안됨 앞에서 reject됐으므로
// 즉 여러 promise들 중 하나라도 reject되면 다른 promise들도 다 reject 되는 것이다
// 매우 유용한 기능이다
// 제대로 작동이 되는지 확인할때 유용하게 쓸 수 있다
