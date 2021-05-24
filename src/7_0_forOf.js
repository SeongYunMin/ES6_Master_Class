// 이 파트에서는 es6의 새로운 for of 루프를 배워보자
let friends = ["Nico", "Lynn", "ha", "qu"];
// 기존의 방식은 C언어 와 매우 흡사핟
// 첫번쨰  루프 방식(기존의 방식)
for (let i = 0; i < 20; i++) {
  console.log("I Love Kimchi");
}

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}
// 두번쨰 루프 방식
// 근데 이거는 섹시하지 않다
// friends의 엘레먼트 각각에 함수를 먹이고 싶다면 forEach를 쓰는 방법도 있다
// forEach는 기본적으로 알규먼트 한개를 가지고 두번쨰 알규먼트는 어레이의 current index
// 를 가져온다 3번쨰 알규먼트는 current array를 가져온다
// 출력해보면 a 인자는 현재 함수가 적용된 어레이를 출력하는 것을 알 수 있다
// 기억하자 이함수는 3개의 알규먼트를 가지는데 첫번쨰는 별 특성 없는거고 두번쨰는
// current index, 세번쨰는 current array를 갖고 오게 된다!!
const addHeart = (c, i, a) => {
  console.log(`${c} ${i}`);
  console.log(a);
};
friends.forEach(addHeart);
//위처럼 해도 되는데 그냥 아래처럼 forEach안에대가 함수 바로 넣는게 더 보기 편하다!!
friends.forEach((current, index, array) => {
  console.log(`${current} ${index}`);
  console.log(array);
});

// 3번쨰 루프 방식
// for of 를 사용하는 방법이다
for (const friend of friends) {
  console.log(friend);
}

// 이렇게 매우 직관적으로 루프를 구성할 수 있다
// 이 for of 루프의 나이스한 점은 우선 forEach에서 인자를 사용하는 것과는 다르게
// const나 let 변수를 선언할 수 있다는 것이다 forEach에서는 안되는 것이다
// 또한 string에서도 루프를 형성할 수 있다(for 0f 에서 선언한 const 변수는 전역 변수 아니므로
// for문 안에서만 사용 가능!!)
for (const letter of "Hello priorityMin") {
  console.log(letter);
}
// 이렇게 string에서 for of 문 돌리면 글자 하나하나 출력이된다
// forEach는 이거 안됨 forEach는 어레이에서만 쓸 수 있다
// for of 루프는 array나 string외에도 많은 곳에서 쓸 수 있는데 이는 구글링 ㄱㄱ

// for 루프는 중간에 원하는 곳에서 루프를 멈추는 기능도 있다
// 아래에서 나는 Mark 까지만 출력하고 루프를 멈추길 원한다 아래처럼 조건문 쓰면 됨
friends = ["Nico", "Lynn", "ha", "qu", "Mark", "keke", "Mina"];
for (const friend of friends) {
  if (friend === "Mark") {
    break;
  } else {
    console.log(friend);
  }
}
