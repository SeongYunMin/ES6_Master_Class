// this는 기본적으로 class 안에서 볼 수 있고 클래스 그 자체를 가리키는 애이다
// 너가 만약 클래스 안에서 어떤걸 불러오고 싶거나 뭘 추가하고 싶을때 this를 쓴다
// this가 만약 클라스 바깥에서 쓰인다면 console.log로 출력해보면 알 수 있듯이
// 얘는 window 자체를 가리키게 된다
// this는 클래스 안에서 사용되어야 그 클래스를 가리킬 수 있다
// class 안에서 생성한 애로우 펑션 안에서쓰는 this는 위의 sayHello()에서처럼 클래스 자체
// 를 가리킨다 근데 예전에 배웠겠지만 오브젝트 선언할때 오브젝트 안에
// 애로우펑션으로 함수를 만들고 그안에 this를 쓸 경우 this는 윈도우를 가리키게 된다
// class 내에 있는 속성들을 property 라고 한다

class User {
  constructor(name, lastName, email, password) {
    this.username = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.something = "I love Korea";
  }
  sayHello() {
    console.log(`Hello My name is ${this.username}`);
  }
  getProfile() {
    console.log(
      `${this.username} ${this.lastName} ${this.email} ${this.password} ${this.something}`
    );
  }
  updatePassword(newPassword, currentPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("Can't change password");
    }
  }
}

const sexyUser = new User("Nico", "Serrano", "example@gmail.com", "123456");
console.log(sexyUser);
sexyUser.getProfile();
// 이 sexyUser의 비번을 바꿔보자
// 일단 sexyUser.getProfile(); 이렇게 씀으로서 class의 property를 불러 올 수 있다
// properties를 바꾸는 것을 어떻게 할까? password를 바꿔보자 그러기 위해서
// 위 class의 property에 upadtePassword 펑션을 추가했다 이 펑션은 만약 currentPassword
// 인자가 기존의 password 라면 새로 입력한 new password로 바꿔주는 함수이다
console.log(sexyUser.password);
sexyUser.updatePassword("8809", "123456");
console.log(sexyUser.password);
// extended Class를 알아보자
// 만약 너가 User class를 선언했는데 추후에 User class 의 특정 부분을 수정하고 싶다면?
// 예를 들어 User 클라스를 조금 수정해서 admin(관리자) 만 건들일 수 있는 클래스를 만들고 싶다면?
// 이때 extends가 쓰이게 된다 user라는 class에서 extend하는 것
// deleteWebsite 프로퍼티가 있는 Admin 클라스를 만들어보자
class Admin extends User {
  deleteWebsite() {
    console.log("Deleting the whole website...");
  }
}
const sexyAdmin = new Admin("Nico", "Serrano", "example@gmail.com", "123456");
sexyAdmin.deleteWebsite();
console.log(sexyAdmin.username);
sexyAdmin.sayHello();
//User class를 extend 해서만든 Admin 클래스는 User를 포함한다
// 근데 이거는 조금 문제점이 있다 아래처럼 admin 클래스에 새로운 constructor property
// 를 추가해 봤다
// class Admin extends User {
//    constructor(superAdmin){
//        this.superadmin=superAdmin;
//    }
//     deleteWebsite() {
//       console.log("Deleting the whole website...");
//     }
//   }
// const sexyAdmin = new Admin("Nico", "Serrano", "example@gmail.com", "123456",true);

// 이렇게 위처럼 extended class에 constructor 추가해버리면 sexyAdmin 선언시 에러가
// 발생한다 그 이유는 extended에 새 constructor를 생성하는 순간 기존꺼는 사라지고
// 얘가 메인이 되기 때문이다 따라서 JS는 이 클래스의 인자가 superAdmis 하나라고 생각한다
// 그렇다면 만약 기존의 User 클래스의 constructor를 extend하고 싶으면 어칼까? 다음장에서 ㄱㅋ
