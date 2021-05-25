// classes는 좀 fancy한 오브젝트이다
// 대부분 나는 classes를 스스로 만들어 쓰진 않을 것이다 보통은 누군가의 classes를 이용한다
// class는 보통 사람들이 라이브러리나 리액트 같은 것을 만들때 Classes를 export하고
// 나는 그것을 이용해서 코드를 짜게 된다
// class는 코드를 구성하는데 도움을 준다
// 만약 내가 엄청나게 많은 양의 코드를 가지고 있고 이것을 구조화하길 원할떄 Class를
// 이용하면 유용하다 왜냐면 class는 재사용이 가능하기 떄문이다
// class가 정확히 뭘까? 기본적으로 class는 blueprint(청사진) 이다
// class를 만들어보자
// User라는 거를 만들었는데 그 안에는 constructor 들어간다 말그대로 user를 construct(구성)
// 하는 애를 말한다 그 안에 this가 들어가는데 이건 좀 이따 설명한다
// 근데 이렇게만 코드짜서 실행해보면 17번 줄에 undefined만 뜬다
// 이 아래 만든 거는 말그대로 어떻게 클라스가 구성될 것인지 보여주는 blueprint이다
// 혼자서는 쓸 수 없다 우리는 이 클라스를 선언해줘야 한다
class User {
  constructor() {
    this.username = "Nicolas";
  }
  sayHello() {
    console.log("Hi I'm Nico");
  }
}
// 아래처럼 new를 사용해 클라스를 선언해보자
// 이렇게 선언한 sexyUser는 클라스의 instance라고 한다. 즉 살아있는 클라스 이다
// 위에껀 죽어있는 것이다 단지 블루프린트일 뿐
// 이렇게 instance 만든 후 출력해보면 Nicolas 출력됨을 알 수 있다
const sexyUser = new User();
console.log(sexyUser.username);
// 클라스 안에 sayHello()라는 함수도 만들었다 이또한 실행해보자
setTimeout(sexyUser.sayHello, 2000);
// 이렇듯 class는 화려한 오브젝트인 것이다
// instance는 수없이 많이 사용할 수 있다
// class안에 인자를 넣는 것도 배워보자
