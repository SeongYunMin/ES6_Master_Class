// JS로 CSS를 좀 조작해보자!
let styled = (css) => console.log(css);

styled`border-radius:10px;
color: blue;
`;
// 흠 styled라는 함수 만들었는데 저런식으로 백택으로 된 인자를
// ()안에 넣지 않고 그냥 styled 옆에 써버리면 어떻게 될까?
// 이러면 이 ``으로 된 인자는 알규먼트가 된다
// 알규먼트는 어레이 형태로 함수에 전달되는 인자를 의미한다
// 그래서 console.log 출력 값이 array이다
// 즉 template literal 만으로도 함수의 호출이 가능하다는 뜻!

// 그럼 이제 styled 함수를 좀 다르게 만들어서 css를 조작해보자 우선 아래의 에러나는 코드를 살펴보자
// styled = (aElement) => {
//   const el = document.createElement(aElement);
//   return el;
// };
// const title = styled("div")`
// border-radius: 10px;
// color: blue;
// `;
// console.log(title);
// 아래의 작동하는 코드를 위해 주석 처리했다
// 이렇게 무작정 styled("div")옆에 백택으로 알규먼트 만든다고 이게 실행되지 않는다
// 왜냐면 JS는 위와 같이 짜게 되면 백택 앞부분의 styled("div") 자체를 함수라고
// 생각해서 styled("div") 함수가 정의되어 있는지 확인하기 때문
// 그런 함수는 없으므로 콘솔창에 styled() is not a function 이라는 문구를 띄우게 된다
// 그렇다면 styled 자체가 함수를 return 하는 함수이면 해결할 수 있지 않을까?
// styled 함수가 return 한 값이 styled(aElement) 라는 함수면 위와 같이 이상하게
// 쓴 코드를 읽을 수 있지 않을까 따라서 인제는 함수를 return 하는 함수를 만들어보자

styled = (aElement) => {
  const el = document.createElement(aElement);
  return (args) => {
    const style = args[0];
    el.style = style;
    return el;
  };
};
// 이렇게 하면 styled함수는 styled(aElement)라는 함수를 return 하게 되고
// 이 styled(aElement) 함수는 args 라는 알규먼트를 인자로 가진다 그 알규먼트가
// 아래 백택으로 표현한 css 스타일시트이고 이 어래이인 알규먼트의 엘레먼트는
// string 하나인데 그것을 style에 저장한다(아래 주석에서 계속)
const title = styled("div")`
  border-radius: 10px;
  color: blue;
`;
console.log(title);
// 그리고 그것을 el.style, 즉 div의 style 로 지정한다 그리고 이렇게 style 첨가된
// el을 다시 return 하게 된다 이러면 콘솔창에 style 첨가된 div태그가 표현된다
// 이렇게 함수의 함수를 만들 수 있다 이거는 JS로 html과 css를 한꺼번에 조작할 수 있게 해주는듯
