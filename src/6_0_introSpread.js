// spread 에 대해 알아보자
// spread는 말그대로 어레이를 플어해쳐서(unpack) 나열(spread) 하는 기능이다
const friends = [1, 2, 3, 4];
const family = ["a", "b", "c"];
console.log(friends);
console.log(...friends);
// spread는 기본적으로 변수 앞에 ...을 붙여서 사용한다
// 출력해보면 알겠지만 어레이가 spread된 채로 1 2 3 4 로 나열된 것을 볼 수 있다
// friends랑 family를 동시에 콘솔창에 띄어보자
console.log([friends, family]);
// friends랑 family 어레이의 요소를 spread로 합쳐서 하나의 어레이로 만들어보자
console.log([...friends, ...family]);

// 오브젝트 또한 이 ...으로 함칠 수 있다
const sexy = {
  name: "SY",
  age: 22
};
const hello = {
  sexy: true,
  hello: "hello"
};
console.log({ ...sexy });
console.log({ ...sexy, ...hello });
// 오브젝트 를 spread할떄는 ...sexy만 하면 안되고 중괄호를 꼭 씌워줘야 한다
// 이렇게 하면 쉽게 합체 가능하다 한개의 오브젝트에 2개 다 들어갔다

// 인제 뭔가를 add하거나 merge하거나 update하는 법을 배울 것이다
const friendss = ["nico", "lynn"];
const newFriendss = [...friendss, "dall"];
// 이렇게 기존에 있던 어레이를 다른 어레이에 add할 수 있다
console.log(newFriendss);

// 오브젝트에서도 동일한 로직이 적용된다
// 만약 nico 오브젝트에 새로운 엘레먼트인 password add하고 싶다면 다음처럼 하면 된다
const nico = {
  username: "nico",
  age: 22
};
console.log({ ...nico, password: 12345 });
// 이렇게 스무스하게 추가 가능하다
// 상당히 쉬운 방법이다
console.log({ hello: { ...nico } });

const first = ["Mon", "Tue", "Wed"];

const weekend = ["sat", "sun"];
const fullweek = [...first, "Thr", "Fri", ...weekend];
console.log(fullweek);

// conditional object에 대해 배워보자
const lastName = prompt("Last Name1");
// 원래는 아래처럼 ternary operator를 써서 조건을 부여했다
// 근데 우리는 만약 조건 안 맞을 때 lastName을 undefined로 바꾸길 원하는게 아니라
// 아예 lastname key 자체를 없애고 싶다 그럴땐 이것만으로는 안된다
const user = {
  username: "a",
  age: 24,
  lastname: lastName !== "" ? lastName : undefined
};
console.log(user);
// ... spread를 사용하여 이 문제점을 해결해보자
const lastNames = prompt("Last Name2");
const users = {
  username: "a",
  age: 24,
  ...(lastNames !== "" && { lastname: lastName })
  //   이렇게 하면 &&기준으로 왼쪽 오른쪽이 true일
  // 이 코드는 조금 낯설 수 있는데 이렇게 이해하면 된다
  // 우선 &&는 좌측과 우측이 모두 true여야지만 true를 반환한다 즉 괄호 안이 실행이된다
  // 그래서 우선 lastName !== ""가 true인지 체크한다. 그리고 {lastname: lastName}이
  // true인지
  // 체크하는데 얘는 조건문 아니므로 항상 true이다 따라서 &&왼쪽 부분의 참 거짓 여부에 따라
  // 이 코드 실행된다 즉 ...()가 실행된다 즉 spread가 된다는 뜻 근데 spread는 오브젝트나
  // 어레이에서만 정상 작동하므로 그냥 string인 lastname: lastName에 {}를 씌워 오브젝트로 만들어준다
  // 이렇게 하면 lastName !== "" 이 false일때는 아예 64번 줄이 실행이 안되어 key 자체가
  // 생성 안되고 저 조건이 true이면 lastname: lastName 이 출력되어 user오브젝트에 key로
  // 추가된다
  //   이렇게 conditional object를 만들 수 있다
  // conditional "array"의 경우는 tertiary operator 사용해서 하는게 좋을듯
};
console.log(users);
