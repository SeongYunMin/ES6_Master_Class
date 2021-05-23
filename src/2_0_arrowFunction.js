// arrowfunction은 기존의 function을 좀더 쓰기 쉽게 만든것
const names = ["nico", "lynn", "flynn"];

const hearts = names.map(function (item) {
  return item + " ❤";
});
console.log(hearts);
// map은 array 내의 각각의 item에다가 함수를 먹이는 역할을 한다 여기선 하트 추가 했다
// 이게 요즘 사람들이 함수를 쓰는 방법이다 원래는 아래처럼 했다

// const names = ["nico", "lynn", "flynn"];

// function addHearts(item){
//   return item + " ❤";
// }
// const hearts = names.map(addHearts);
// console.log(hearts);
// 이렇게 코드를 짜는 것은 새 함수를 너무 많이 만들어야 해서 비추한다

// 요즘은 위 방법을 조금 더 보기 편하게 다듬은 arrow function을 사용한다

const name = ["nicolas", "lynne", "flynne"];

const heart = name.map((item, index) => {
  console.log("we are in" + index);
  return item + " ❤";
});
console.log(heart);
// 이렇게 function(item, index){} 하는게 아니라 그냥 간단하게
// (item, index) => {} 쓰면 편하다 이게 애로우 펑션이다
// 여기서 index는 map 함수의 두번째 requirements 이다
// 몇번째 item인지를 알려주는 인자이다
// 근데 심지어 map 안에 쓴 함수의 표현식이 return 한줄이다? 그러면
// 더 간단하게 implicit return 을 할 수 있다
const heartss = names.map((item, index) => item + " ❤ " + index);
console.log(heartss);
// 이렇게 간단하게 return과 {} 다 빼고 매우 직관적으로 표현할 수 있다
// 이게 implicit return 이다 이 "절대적 리턴"의 뜻은 애로우 오른쪽에
// 어떤 것이든 같은 줄에 써있으면 그걸 리턴한다는 뜻

// arrow function을 쓰면 안되는 경우에 대해 알아보자
// 바로 this를 쓸 때이다 일단 html에 버튼을 하나 만들었다
const button = document.querySelector("button");
button.addEventListener("click", function () {
  // this
  // addEventListner 안에다가 함수를 바로 넣을 경우 JS는 이 button을
  // this라는 키워드로 인식한다 this도 scope의 일종이다
  // this는 출력해보면 html의 button태그를 출력한다
  // 얘는 button을 reference 하므로 button 대신 이 this를 쓸 수 있다
  console.log(this);
  console.log("I have been clicked!!");
  this.style.backgroundColor = "tomato";
  // 이렇듯 this를 사용해 button이 눌렸을떄 배경색 변하도록 할수도 있다
});

// button.addEventListener("click", () => {
//   console.log(this);
//   console.log("I have been clicked!!");
//   this.style.backgroundColor = "red";
// });
// 근데 이렇게 기존 방식이 아닌 arrow function 으로 this를 쓰게 되면
// console.log(this)를 했을떄 콘솔 창에는 window오브젝트가 출력된다
// 이렇듯 arrow function 안에서 this는 button을 참조하는게 아니라
// window를 참조하게 되므로 this 쓸때는 arrow function 쓰면 안된다!!
// this 쓸때는 그냥 function을 쓰도록 하자
// 또한 아래와 같은 오브젝트 안에 함수를 만든 경우에도 애로우 펑션을 쓸 수 없다
const profile = {
  name: "Seongyun",
  age: 22,
  addYear() {
    this.age++;
  }
};
// 위처럼 오브젝트 내에서는 함수를 다른 키처럼 function 쓸 필요없이 바로 쓸 수 있다
// arrow function 쓰지 말자 여기선
profile.addYear();
profile.addYear();
console.log(profile);

// 지금부터는 어래이에 적용할 수 있는 여러 메소드 들에대해 알아볼것이다
// array.find()에 대해 알아보자
const email = ["andy@naver.com", "lynn@gmail.com", "priority@nate.com", "qwer@hanmail.net"];
// array.find() 는 괄호 안의조건을 만족하는 엘레멘트 중 첫번째 엘레먼트를 반환하는 함수이다
// find 의 괄호 안에는 원하는 조건을 만족하는 엘레먼트만 return 하게 arrow function
// 을 적용한다
const foundMail = email.find((item) => true);
// 이 어래이의 아이템이 true인 것들을 찾을 것이므로 모든 엘레먼트 다 만족한다
// 따라서 그 중 첫번쨰인 andy8809@naver.com을 return해서 foundMail에 저장할 것이다
console.log(foundMail);
const foundGmail = email.find((item) => item.includes("gmail.com"));
// 이 includes()는 어레이의 아이템중 괄호 안의 string을 포함한 아이템을 찾아낸다
console.log(foundGmail);

// array.filter()에 대해 알아보자
// filter 메소드는 ()안에 제공된 함수의 조건을 만족하는 모든 엘레먼트로
// 새로운 어레이를 만든다
// gmail.com을 포함하지 않은 엘레먼트들만 filter해보자
const removeGmail = email.filter((item) => !item.includes("gmail.com"));
// 이렇게 filter 매소드 안에다가 조건을 넣어주면 되는데 이때 gmail.com을 포함하자
// "않은" 엘레먼트들을 추리기 위해서는 not의 의미를 가진 ! 를 return 값 앞에다
// 붙여주면 된다
console.log(removeGmail);

// forEach를 배우기 전 split()에 대해 알아보자
// split은 괄호안의 내용을 기준으로 string을 나눠서 어레이를 형성한다
const myName = "SeongYun Min";
const splitted = myName.split(" ");
console.log(splitted);
// 이런식으로 괄호 안의 것을 기준으로 나눠서 어레이를 만든다

// array.forEach()에 대해 알아보자
// forEach 메소드는 주어진 함수를 array의 요소마다 적용한다
// email 어레이에서 username 만을 뽑아내고 싶다 이때 forEach 써보자
email.forEach((item) => {
  console.log(item.split("@")[0]);
});
// 근데 forEach는 함수를 각각 엘레먼트에 적용만 할뿐 결과를 어레이로 정리하진 못한다
// 근데 이렇게 추려낸 username을 한 어래이에 저장하려면 어떻게 할까?
// 아래처럼 해도 되긴 된다 근데 너무 코드 길어짐
const cleaned = [];
email.forEach((item) => {
  cleaned.push(item.split("@")[0]);
});
console.log(cleaned);
// map()은 forEach랑 동일한 역할을 하지만 함수를 적용한 결과값을 새로운
// array에 저장해준다
const userName = email.map((item) => item.split("@")[0]);
console.log(userName);
// 이렇게 map을 사용하면 훨씬 간단하게 코드를 짤 수 있다
// 만약에 implicit return으로 value가 아닌 오브젝트를 리턴받고 싶으면 어칼까?
const userNames = email.map((item, index) => ({
  user: item.split("@")[0],
  index
}));
// 이렇게 오브젝트 를 implicit return 을 통해 return 하고 싶으면
// 애로우 오른쪼게 있는오브젝트 자체에 ()를 씌워야 한다 그래야
// JS가 한줄이라고 생각해 정상 작동한다
console.log(userNames);

// Default Value에 대해 알아보자
// 우리는 가끔 인자가 필요한 함수에 어떤 인자도 대입하지 않을 떄도 있을 수 있다
// 그래서 그 인자의 디폴트값을 정해줘야 한다
function sayHi(aName = "anonymus") {
  return "Hello " + aName;
}
console.log(sayHi());
// 이렇게 인자 뒤에 등호로 디폴트값 정해주면 값 함수에 넣지 않았을때도
// 기본값을 출력할 수 있다
// 위 예제를 es6의 문법인 arrow function 으로 구현해보자
const sayHello = (aName = "anonymus") => "hello " + aName;
console.log(sayHello());
console.log(sayHello("SeongYun"));
// 이렇게 arrow function을 쓰면 함수를 마치 변수 선언하듯이 간단하게 만들 수 있다.
