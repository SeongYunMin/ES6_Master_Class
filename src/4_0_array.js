// Array.of에 대해 알아보자
const friendss = Array.of("nico", "lynn", "elly", "Seon");
// 이렇게 Array.of 함수를 쓰면 인자들을 array로 만들어준다
console.log(friendss);
// 이 array.of는 어래이의 엘레먼트가 많을떄 사용하면 좋을듯

// array.from에 대해 알아보자
// 아래와 같이 querySelectorAll로 도큐먼트 안의 모든 버튼을 찾는다고 해보자
// 그리고 그것을 buttons에 저장한후 출력해보면 얘는 nodeList 형태로 출력이된다
// 얼핏 보면 어래이 같지만 얘는 어래이 아니다
// 왜냐면 얘는 forEach나 map 같은 어레이 메서드를 사용할 수 없기 떄문
// 그렇다면 이 어레이 메서드 적용하기 위해 nodeList, HTMLcollection 같은 array-like-object를
// 어레이로 바꾸는 방법이 있을까? 바로 Array.from()를 쓰는 것이다
// 이걸 써서 이 button들이 눌릴때마다 콘솔창에 출력이되는 장치 만들어보자
const buttons = document.querySelectorAll("button");
console.log(buttons);
Array.from(buttons).forEach((item) => {
  item.addEventListener("click", () => console.log("clicked!"));
});
// 이렇게 array-like-object또한 어레이로 바꿔서 가각에 함수를 먹일 수 있다!
// array.from은 정말 유용한 장치이다

// Array.find()에 대해서 알아보자
// 이거는 그냥 어래이 내에서 원하는 조건 맞는 첫번째엘레먼트 찾아내는 메서드이다
// 괋호 안에는 찾는 조건을 부여하는 내장함수를 입력해준다
const friends = [
  "nico@gmail.com",
  "andy@naver.com",
  "priority@hanmail.net",
  "dal@hotmail.net",
  "flynn@gorea.com"
];
target = friends.find((friend) => friend.includes("@hotmail.net"));
console.log(target);
// 이렇게 find를 통해 원하는 조건의 엘레먼트를 추려낼 수 있다

// Array.findIndex() 에 대해 알아보자
where = friends.findIndex((friend) => friend.includes("@gorea.com"));
console.log(where);
// 거의 find와 같지만 이친구는 그 엘레먼트가 몇번째인지 index를 return 한다
// 이거는 원하는 element가 어디있는지 찾고 싶을때 유용한 메서드이다
// 그렇다면 이메일 주솔에 오타를 친 인원을 찾아서 출력하는 프로그램 만들어보자
const username = friends[where].split("@");
const email = "korea.com";
username[1] = email;
console.log(username[0]);
console.log(username.join("@"));
