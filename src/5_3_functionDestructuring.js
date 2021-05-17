// 뭔가를 저장하는 함수를 만들어보자
function saveSettings(settings) {
  console.log(settings);
  console.log(settings.follow);
}
// 함수를 만들때 인자가 너무 많아질것 같으면 그냥
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

// const follow = follow();
// const alert = alert();

// const settingss={
//     notifications: {
//         follow: follow,
//         alert: alert
//     }
// }
// 이렇게 키랑 값이랑 이름 같을때는 아래처럼 축약이 가능하다
// const settingss = {
//   notifications: {
//     follow,
//     alert
//   }
// };

// variable swapping에 대해 배워보자
// 배리어블 스와핑은 말 그대로 변수끼리 값을 바꾸는 테크닉을 의미한다
// array destructuring을 사용해서 쉽게 할 수 있다
// 아래 변수들은 값을 바꿀 예정이어서 let을 사용했다
let mon = "Sat";
let sat = "Mon";
console.log(mon, sat);
[sat, mon] = [mon, sat];
console.log(mon, sat);
// 이런식으로 디스트럭쳐링을 해서 변수 값 스와핑 가능하다
// mon의 값이 sat에 들어가고 sat의 값이 mon에 들어간다
// 여기서 우측은 어레이를 선언함과 동시에 사용하기 위해 이렇게 짰다

// variable skipping에 대해 알아보자
// 얘는 변수를 생략하고 싶을 때 사용하는 테크닉이다
const days = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
const [, , , thr, , satt, sun] = days;
// 나는 days어레이에서 Thr 이랑 Sat, Sun만 얻고 싶다 그럴때는 필요하지 않은
// 부분은 그냥 , 콤마만 하고 변수 선언을 안함을 통해 생략할 수 있다
console.log(thr, satt, sun);
