// this에 의한 에러는 arrow function을 통해 해결 가능하다
class Counter {
  constructor({ initialNumber = 0, counterId, plusId, minusId }) {
    this.count = initialNumber;
    this.counter = document.getElementById(counterId);
    this.counter.innerText = initialNumber;
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.addEventListeners();
  }
  addEventListeners = () => {
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  };
  increase = () => {
    this.count += 1;
    console.log(this);
    this.repaintCount();
    // 이 increase 함수를 애로우 펑션으로 만들고 this 출력해보니 얘는
    // 기존 함수와는 달리 Counter 클래스를 정확히 가리킨다! 그래서 아래 this.repaintCounter
    // 도 오류없이 잘 작동하게 된다
    // this는 규칙이 좀 많은데 이게 그중 하나이다 따라서 안심하고 쓰기 위해
    // 클래스 안에서 this 쓸 경우 함수 생성은 무조건 arrow function으로 하는게 좋다
  };
  decrease = () => {
    this.count -= 1;
    console.log(this);
    this.repaintCount();
  };
  repaintCount = () => {
    this.counter.innerText = this.count;
  };
}

new Counter({ counterId: "count", plusId: "add", minusId: "minus" });
// 이렇게 너는 너만의 클래스를 하나 만들었다
// 물론 클래스 없이 그냥 만들 수도 있겠지만 이렇게 클래스를 만들면
// 이 Count 기능이 필요할때 갖다 쓸 수 있어서 더 편하다
// 무한정 많은 Counter 클래스를 생성할 수 있다
// class를 쓸려면 너는 위처럼 blueprint를 만들 수 있는 능력을 가져야 한다
// 아래 초기값이 다른 추가적인 Counter를 만들었다
new Counter({
  counterId: "count2",
  plusId: "add2",
  minusId: "minus2",
  initialNumber: 777
});
// 상당히 조직적이고 깔끔한 방법이다
// 보통은 다른 사람들이 만든 클래스들의 집합소인 라이브러리(리액트)에서 가져와서
// 쓸 것이다 파이썬에서 쓰이는 라이브러리인 장고 또한 클래스로 가득 차있는
// 라이브러리 이다
// 이 클래스가 JS에서 가장 섹시한 부분이다
