const add = (a, b) => a + b;

// string 사이에 인자 넣을때 백택` 이랑 $를 쓰자
// 이 둘을 쓰는 것을 template literal 이라고 한다
const sayHello = (aName = "anonymus") =>
  `hello ${aName} Nice to meet you ${101 * 37} ${add(3, 5)}`;
// 이렇게 ${}안에는 인자 뿐만 아니라 표현식도 넣을 수 있다
// function은 안에 생성 못한다 근데 생성된 함수는 넣을 수 있다
console.log(sayHello());
console.log(sayHello("SeongYun"));

const wrapper = document.querySelector(".wrapper");
const addWelcome = () => {
  const div = document.createElement("div");
  // 여기서 이 변수의 이름은 div일 필요 없다 태그 이름만 정확히 입력하면 됨
  // potato로 해도 된다
  const potato = document.createElement("h1");
  potato.classList.add("fucj");
  // 내가보기에 동사는 객체가 아닌 함수여서 윗줄처럼 값 입력하고 아래 innerText같은
  // 애는 명사이므로 객체이다 그래서 아래 처럼 값을 넣어줘야 하는 것 같다
  potato.innerText = "Hello";
  div.append(potato);
  wrapper.append(div);
};
// 이런식으로 html안에 원하는 태그를 만들 수 있다
setTimeout(addWelcome, 1000);
// 얘는 1000ms 뒤에 addWelcome 실행시키는 함수이다
// 그럼 인제 template literal을 써서 위에서 한 것을 더 간단하게 짜보자
// template literal을 쓰면 더 복잡한 html을 더 간단하게 JS로 조작할 수 있다
const wrapper2 = document.querySelector(".wrapper2");
const addGoodBye = () => {
  const div = `
  <div class = "sayBye">
    <h1 class="title">ByeBye</h1>
  </div>
  `;
  wrapper2.innerHTML = div;
};
addGoodBye();
// 이런식으로 하면 아예 html 코드를 백택 안에다가 똑같이 업력할 수 있어서
// 훨 복잡한 html도 추가하고 조작할 수 있다
// template literal의 좋은점은 너가 입력한 줄바꾸기(엔터) 와 탭 등의 서식도 반영
// 해준다는 것 더 직관적으로 코드를 짤 수 있다 그냥 single이나 double quote은
// 줄바꾸기를 지원하지 않는다 줄 바꿈 포함된 텍스트는 백택을 사용하자!
console.log(`
 


    line changing accepted

`);
const wrapper3 = document.querySelector(".wrapper3");
const wrapper4 = document.querySelector(".wrapper4");
const friends = ["nico", "JK", "WY", "JY"];

let list = `
  <h1>People i like</h1>
  <ul>
    ${friends.map((friend) => `<li>${friend}</li>`)}
  </ul>
`;
// 이렇게 map함수와 template literal 사용해서 li를 간편하게 만들 수 있다
wrapper3.innerHTML = list;
// 근데 이 ul은 콤마가 있어서 안예쁘다 콤마를 지워보자
// 그러기 위해선 split의 반대인 join()이라는 메소드를 알아야한다
// join()은 괄호안의 string으로 array의 엘레먼트를 하나의 string으로 묵는다
console.log(friends);
const joined = friends.join("");
console.log(joined);
// 이렇게 묶어준다
// 위에서 let으로 선언한 list의 콤마를 제거해보자
list = `
  <h1>People i like</h1>
  <ul>
    ${friends.map((friend) => `<li>${friend}</li>`).join("")}
  </ul>
`;
wrapper4.innerHTML = list;
// 이렇게 map함수가 만든 새로운 li 어래이에 또 join함수를 먹여서 ,를 제거하고 하나의 연결된 string으로 만들자
