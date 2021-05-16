// parameter가 무엇인가?
// parameter는 함수에서 사용하는 알규먼트, 즉 인자를 의미한다
// rest parameter를 알려면 끝도 없는 parameter 를 전달받는 함수를 만들어보면 된다
// spread가 어레이나 오브젝트를 unpack하는거였다면 rest는 도로 pack하는 것이다
// 아래의 예시를 보자
// infiniteArgs 함수는 인자가 매우 많은 함수이다
// 이걸 하나의 어레이로 묶어서 알규먼트를 만들 수 있을까?
//  있다 spread처럼 ...을 쓰는것이다
const infiniteArgs = (...kimchi) => console.log(kimchi);
infiniteArgs("asd", "adsad", 1231, "qwer", "wqwqw", "Seongyun", 888, "안녕");
// 이렇게 ...kimchi 알규먼트는 이 수많은 인자를 array로 정리한 알규먼트가 됐다
// 출력값 보면 이해 될것

// rest는 모든 value를 하나의 variable로 축소(contract)시켜주는 역할을 한다
// 즉 ...kimchi의 뜻은 함수에 어떤 인자들이 들어오든 전부다 kimchi라는 알규먼트에
// 넣을거야라는 의미이다 즉 그 인자들을 가지고 array를 만들게 된다
// 아래 예시를 보자
const bestFriendMaker = (firstOne, ...rest) => {
  console.log(`My best friend is ${firstOne}`);
  console.log(rest);
  console.log(rest[1]);
};
bestFriendMaker("nic", "lynn", "dal", "Sudan guy");
// 여기서 firstOne인자는 "nic"을 받고 ...rest 인자는 나머지 3개의 인자를 하나의
// array로 만들어서 함수에 제시하게 된다 rest는 인자이므로 어떤 단어든 가능하지만
// rest쓰면 직관적이므로 rest를 쓰도록 하자
