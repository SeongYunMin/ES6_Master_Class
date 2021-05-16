// 뭔가를 저장하는 함수를 만들어보자
function saveSettings(settings) {
  console.log(settings);
  console.log(settings.follow);
}
// 함수를 만들때 아규먼트가 너무 많아질것 같으면 그냥
// 함수를 쓸때 인자 자리에 오브젝트를 넣어버려라 그래야 코드 해석
// 편안하다
saveSettings({
  follow: true,
  alert: true,
  mkt: true,
  color: "green"
});
// 근데 이렇게 하면 함수를 실행할때는 괜찮지만 함수를 작성할떄
// settings.follow 이런식으로 인자를 길게 써줘야 돼서 안좋다
// 또한 이렇게 하면 만약에 위 오브젝트 인자 중 color만 다른 함수로
// 보내고 싶다면 어케 해야할까 아래처럼 해야한다
// function saveColors(settings.color){
// }
// 근데 이렇게 하면 만약에 인자에 color 엘레먼트 없거나 하면
// 에러가 발생할 것이다
// 우리가 할것은 첫쨰로 변수들의 가독성을 확보하는 것이고
// 두번쨰는 각 변수의 디폴트값을 설정할 것이다
// 따라서 우리는 함수 선언할때 인자 자리에 object distructuring을 사용할 것이다
//
function saveSetting({ notifications: { alerts, fork = "defaultValue" }, color }) {
  console.log(alerts, color);
  console.log(fork);
}
// 이렇게 함수 선언할때 아래에서 넣은 오브젝트 인자의 포맷을 그대로 따라
// destructuring 해주면 변수의 길이도 짧아져서 가독성도 올라가고 혹여나
// 그 인자 없어도 디폴트값 설정이 가능하다
saveSetting({
  notifications: {
    follow: true,
    alerts: true,
    unfollow: false
  },
  color: {
    theme: "dark"
  }
});

// value Shorthands에 대해 알아보자
// 이건 전에 함 배웠던 건데 만약에 오브젝트 내의 키의 이름과 대입하는 값의 이름이
// 같다면 이를 단축해서 쓸 수 있게 하는 것이다

const follow = follow();
const alert = alert();

// const settingss={
//     notifications: {
//         follow: follow,
//         alert: alert
//     }
// }
// 이렇게 키랑 값이랑 이름 같을때는 축약이 가능하다
const settingss = {
  notifications: {
    follow,
    alert
  }
};
