console.log(myName);
var myName = "Andy";
// var 을 쓰면 위와 같은 말도 안되는 코드를 입력해도 에러가 나지 않고 undefined가 된다
// 왜냐면 JS 내부적으로 선언한 변수를 코드 제일 위로 올려버리기 때문(hoisting)
// 따라서 JS는 아래처럼 코드를 해석한다
// var myName;
// console.log(myName);
// myName = "Andy";
// 그래서 코드 이상하게 짰는데도 콘솔창에 undefined라는 값이 뜨는것이다 상식적으로는 에러가 나야하는데
// 따라서 var은 절대 쓰면 안된다 잘못 코드를 짜도 멋대로 해석을 해버리니까
// 그래서 있는 그대로 위에서 아래로 해석하는 let을 써야한다
console.log(myAge);
let myAge = "25";
// 이렇게 let은 출력 안되고 에러가 난다
if (true) {
  const hello = "hi";
}
console.log(hello);
// 근데 block, let은 block scope이다 즉 {}로 표현되는 블락 안에서만 쓸 수 있다는 뜻!
// 그러므로 위와 같은 코드는 에러가 난다
if (true) {
  var hello = "hi";
}
console.log(hello);
// 근데 var을 쓰면 이렇게 if 문 같은 블락 안에 선언을 해도 블락 밖에서 사용 가능
// 왜냐면 var은 function block이기 때문 얘는 같은 function 안에 있을때만
// 선언하고 쓸 수 있다
function a() {
  var hello = "hi";
}
console.log(hello);
// 이렇게 하면 에러가 난다 즉 다른 function에서 이 변수에 접근하는 것은 막으나
// 다른 블락에 있다고해서 막지는 못한다
// 절대절대 var은 쓰지 말자!
