// destructuring은 오브젝트나 어레이 안의 엘레먼트를 바깥으로
// 끄집어내서 변수로 사용할 수 잇도록 하는 것이다
// 일단 오브젝트 디스트럭쳐링부터 해보자
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
// notifications 같은 객체가 선언이 안돼있는 경우 반영 못한다
// 그래서 destructuring을 하는 것 일단 변수 하나 선언하자
// 근데 우리가 얻고자 하는 값은 settings.notifications.follow
// 랑 color 오브젝트이다
// 아래처럼 변수를 선언하면 정확히 오브젝트 안의 follow 엘레먼트에 접근할 수 있다
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
// 이 destructuring의 좋은 점은 바로 오브젝트 안에 없는 엘레먼트를 선언했을때
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

// array destructuring 에 대해 배워보지
// array destructuring은 가져온 정보를 조작하지 않을때 사용하는듯
// 얘는 api로부터 받은 데이터를 바꾸지 않고 변수에 저장할때 필요하긴한데
// 오브젝트 디스트럭쳐링을 더 많이 쓸것이다
// 일단 기존에는 어레이 안의 엘레먼트 가져오기 위해 아래와 같은 방법을 썼다
const days = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
const monday = days[0];
const tuesday = days[1];
console.log(monday, tuesday);
// 이 방법은 너무 귀찮고 줄 많이 차지한다
// 근데 오브젝트는 위를 예로들면 settings안에 notifications있고 그안에 alerts가 있다
// 즉, 타고 들어갈 수 있는 루트가 있었다는 것
// 하지만 어레이는 그런게 없네?
// 어레이에서는 그냥 순서대로 변수가 저장이 된다
// 초기값 설정도 오브젝트에서 했던거랑 동일하게 하면 된다
// 어레이 디스트럭쳐링에서는 변수명을 어레이의 엘레먼트와 일치시킬 필요없다
// 순서로다가 엘레먼트를 특정하기 때문
const [mon, tue, wed, thr, fir = "Wrong variable"] = days;
console.log(mon, tue, wed, thr, fir);
// 또한 이 디스트럭쳐링은 어레이나 오브젝트를 return 하는 함수에 대해서도 사용가능하다
const dayss = () => ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
const [mons, tues, weds, thrs, fris] = dayss();

const object = () => ({
  notifications: {
    follows: true,
    alertss: true,
    unfollows: false
  },
  colors: {
    themes: "dark"
  }
});
const {
  notifications: { alertss },
  colors
} = object();
console.log(alertss, colors);
// 이런식으로 오브젝트를 반환하는 함수또한  디스트럭쳐링으로 변수선언 쌉가능

//인제 renaming에 대해 알아보자
// 이것은 오브젝트 내의 엘레먼트의 이름을 바꾸고 싶을때 쓰는 방법이다
const settingss = {
  color: {
    chosen_color: "dark"
  }
};
const {
  color: { chosen_color: chosenColor = "light" }
} = settingss;
console.log(chosenColor);
// 위 light는 디폴트값 지정해준것
// 여기서 chosen_color를 chosenColor로 바꾸겠다
// 위처럼 chosen_color옆에 : chosenColor 를 첨가해줬다
// 이 이 코드는 settingss 안의 color 안의 chosen_color를 찾고 그 엘레먼트의 값을
// chosen_color가 아닌 chpsenColor라는 변수에다가 저장하라는 뜻
// 그리고 만약 chosen_color이 없을시에는 "light"를 chosenColor에 저장하라는 의미이다
// 기존에는 이렇게 했다
// const chosenColor = settingss.color.chosen_color || "light";
// console.log(chosenColor);
// ||를 써서 만약에 chosen_color 없을시에도 디폴트로 "light" 저장되게했다
// 이렇게 하는것은 별로다
const {
  color: { chosen_color: chosenColor2 = "light" }
} = settingss;
console.log(chosenColor2);

let chosenColor3 = "blue";
console.log(chosenColor3);
// 만약에 let으로 chosenColor3에 blue를 저장한 상태에서 이
// chosenColor3의 값에 settingss 안에 있는 chosen_color의 값을 넣고 싶다면 어떻게 할까?
// 바로바로 아래처럼 destruturing 코드를 소괄호 ()로 묶어주면 된다
// 이때는 위에서 let으로 선언한 chosenColor3에 다른 값을 업데이트하는 것이므로
// 중괄호 앞에 const나 let을 쓰지 않고 그냥 전체를 ()로 묶으면 된다
// 이렇게 하면 let으로 이미 선언한 변수를 settings안의 엘레먼트인 chose_color의 값으로
// 대체할 수 있다 즉 let 변수를 업데이트할때 아주 좋은 방법이다
({
  color: { chosen_color: chosenColor3 = "light" }
} = settingss);

console.log(chosenColor3);
