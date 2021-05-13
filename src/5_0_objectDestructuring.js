// destructuring은 오브젝트나 어레이 안의 변수를 바깥으로
// 끄집어내서 사용할 수 잇도록 하는 것이다

const settings = {
  notifications: {
    follow: true,
    alerts: true,
    unfollow: false
  },
  color: {
    theme: "dark"
  }
};
// 이런식으로 상황을 만들어봤다
// 우리가 하고 싶은 것은 체크를 하는 것이다
// 만약 유저의 notification의 follow가 true가 되었다면 email을
// 보낸다던가 하는 일을 하고 싶은것이다
// 누군가 이 유저를 follow했을때를 체크하는 경우도 있을 수 있다
// 예전에는 이걸 아래처럼 했다
if (settings.notifications.follow === true) {
  // send email
}
// 이런식으로 했다 좀 별로의 방법이다 일단 settings.notifications.follow 너무길고
// notifications 같은 객체가 선언이 안돼있을 수도 있다
// 그래서 destructuring을 하는 것 일단 변수 하나 선언하자
// 근데 우리가 얻고자 하는 값은 settings.notifications.follow
// 랑 color 오브젝트이다
// 아래처럼 변수를 선언하면 정확히 오브젝트 안의 follow에 접근할 수 있다
// 아래에서 선언한 변수가 뭐냐고? 토마토 색깔이 변수 이다
// 찾고자하는 값이 있는 오브젝트의 형태를 그대로 본따서 변수를 선언하는 것이다
// 왜 destructuring이냐면 생긴게 일단 오브젝트 structure하는 것의
// 반대로 생겼기 때문
const {
  notifications: { follow },
  color
} = settings;
console.log(follow);
console.log(color);
// 근데 여기서 notifications도 변수일까? ㄴㄴ 얘는 단지 그냥 follow가
// 어디있는지만 알려주는 애일 뿐 변수 아니다
// notifications 오브젝트 자체를 원하면 아래처럼 하면 된다
const { notifications } = settings;
console.log(notifications);
if (follow === true) {
  console.log("Destructuring is GOOD🤣");
}
// es6에서는 오브젝트 안의 값을 specific하게 얻고 싶을때 이렇게 오브젝트 선언을 거꾸로
// 한 것 같은 destructuring을 하면 된다
// 근데 이때 주의할 점은 무조건 변수명이 우리가 얻고자 하는 값을 담은 key 또는 오브젝트와
// 같아야 한다는 것!!
// 이렇게 변수 선언하면 기존처럼 settings.notifications.follow이런 긴 것 안써도 된다
const {
  notifications: { unalerts = "potato" }
} = settings;
console.log(unalerts);
// 이 destructuring의 좋은 점은 바로 오브젝트 안에 없는 거를 선언했을때
// 대처가 가능하다는 것이다. 위처럼 코드 작성하게 되면 JS는 일단
// notifications 객체 안에서 unalerts라는 엘레먼트를 찾고 만약 없다면 디폴트값
// 으로 potato를 저장한다
const { denotifications: { yesalerts = "tomato" } = {} } = settings;
console.log(yesalerts);
// 근데 만약에 나는 denotifications 오브젝트 안의 yesalerts를 찾고 싶은데
// denotifications 오브젝트 자체가 없다면 어떡할까?
// 그럴 경우를 대비해서 위처럼 denotification 오브젝트의 디폴트값을 빈 오브젝트 {}
// 로 선언해놨다 따라서 JS는 denotifications를 우선 찾고 만약 없으면
// denotifications의 디폴트값인 {} 안으로 들어가서 yesalerts를 찾게 된다
// 빈 오브젝트이므로 당연히 yesalerts 없으므로 디폴트값인 tomato가 yesalerts에
// 저장이 된다
// 이렇게 한줄로 끝내는 것을 one-line-statement라고 한다
// 이렇게 하는게 if(denotifications === {}) 이렇게 하는 것보다 훨씬 간단하고 이해 빠르다
