const user = {
  name: "nico",
  age: 24,
  password: 123456
};
// 여기서 우리는 password 항목만 제거하고 싶다
// 아래처럼 할 수도 있지만 구식 방법이다 그리고 이렇게하면 password라는 key자체를
// 없애지는 못한다
// user.password = null;
// console.log(user);

// 배운것을 활용해보자
// 오브젝트 디스트럭쳐링과 rest 로 인자를 생성해라
const killPassword = ({ password, ...rest }) => rest;

const cleanUser = killPassword(user);

console.log(cleanUser);
// 타라~ 이렇게 하면 password를 깔끔하게 제거 거능하다
// passwod와 ...rest를 받아서 rest만 return 했다
// destructuring과 rest를 함께 쓰면 정말 유용하다
// rest parameter는 인자가 array형태면 인자들을 모을때 어래이로 모으고
// 오브젝트 형태면 인자들을 오브젝트에 모으게 된다

// destructuring의 디폴트 값 설정법을 활용해 오브젝트에 country엘레먼트를 추가해보자
let setCountry = ({ country = "KR", ...rest }) => ({ country, ...rest });
console.log(setCountry(user));
// 이걸 실행해보면 user 오브젝트에 country엘레먼트가 포함돼있는것을 알 수 있다
// 또하나 아름다운 점은 위 인자 안에 쓰인 ...rest와 반환값의 ...rest의 ...의 기능이
// 각각 rest parameter 와 spread라는 점이다 왼쪽 ...rest의 경우 user 오브젝트 안에
// country 엘레먼트를 제외한(존재하지 않다) 모든 엘레먼트를 하나의 오브젝트로 묶었다
// 그리고 그것을 반환할떄 또다시 ...rest를 써서 하나의 오브젝트로 묶인 rest를 다시
// spread해줬다 그렇게 해서 새 엘레먼트를 첨가할 수 있게 된것
// 만약 우측 ...을 제거하게 되면 어떻게 될까?
setCountry = ({ country = "KR", ...rest }) => ({ country, rest });
console.log(setCountry(user));
// rest가 spread 되지 못해 오브젝트 안에 rest 오브젝트가 생겨버렸다
// 따라서 꼭 ...rest로 반환해줘야 한다

// renaming propery에 대해서 배워보자
// 아래 users 오브젝트 내의 NAME 이라는 속성명을 바꿔주고 싶다
const users = {
  NAME: "nico",
  age: 24,
  password: 123456
};
console.log(users);

const rename = ({ NAME: name, ...rest }) => ({ name, ...rest });
// 저번에 renameing에서 배운건데 : 을 쓰게 되면 NAME의 이름이 name으로 바뀌게 되고
// 그와 동시에 name이라는 변수가 생성이 된다 그리고 나머지 key들은 ...rest로 묶어서 함수에 먹이자
//  그리고 return 을 위와 같이 해주면 key의 이름만 변경할 수 있게 된다
// 오브젝트를 리턴할때는 필히 소괄호로 감싸줘야 implicit return 가능하다
// 이 한줄의 코드에 destructuring, rest parameter, spread가 다 들어있다
// 매우매우 섹시하다
renamedUsers = rename(users);
console.log(renamedUsers);
