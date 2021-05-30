// 만든 User 클래스를 리팩토링 해보자
// 기존처럼 컨스트럭터에 인자 많이 넣지 않고 options 오브젝트를 인자로 넣을 것이다
// 너가 만약 많은 인자를 쓰고 싶다면 아래처럼 오브젝트를 인자로 쓰는게 편하다
// 아님 함수 디스트럭쳐링을 써도 된다
class User {
  constructor({ username, lastName, email, password }) {
    this.username = username;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.something = "I love Korea";
  }
}
const sexyUser = new User({
  username: "Nicolas",
  lastName: "Serrano",
  email: "example@gmail.com",
  password: 123456
});

// extended 클래스에서 constructor를 조작하는 법에 대해서 배워보자 어케 할까?
// classes 안에서만 작동하는 함수인 super를 쓰면 된다
// super()는 base class의 constructor를 호출하게 된다
// 그렇게 하기 위해선 admin에 넣을 함수값을 받을 인자를 constructor() 과 super()
// 안에 넣어주면 된다 이때 constructor에 추가하고 싶은 인자는 이 기존 인자들 뒤에
// 추가적으로 넣어주면 된다 아래 superAdmin 처럼
// react 같은 라이브러리 쓸때 class 많이 쓴다
// 보통 라이브러리에서 class를 import 해와서 그것을 extend 해서 쓰면 된다
class Admin extends User {
  constructor({ username, lastName, email, password, superAdmin, isActive }) {
    super({ username, lastName, email, password });
    this.superadmin = superAdmin;
    this.isactive = isActive;
  }
  deleteWebsite() {
    console.log("Deleting the whole website...");
  }
}

const sexyAdmin = new Admin({
  username: "Nicolas",
  lastName: "Serrano",
  email: "example@gmail.com",
  password: 123456,
  superAdmin: "superSexy",
  isActive: "yesItIs"
});
console.log(sexyAdmin);
sexyAdmin.deleteWebsite();
