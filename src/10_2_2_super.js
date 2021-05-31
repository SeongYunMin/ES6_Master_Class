// class를 써서 버튼을 눌르면 카운트를 하는 장치를 만들어보자
class Counter {
  constructor({ initialNumber = 0, counterId, plusId, minusId }) {
    this.count = initialNumber;
    this.counter = document.getElementById(counterId);
    this.plusBtn = document.getElementById(plusId);
    this.minusBtn = document.getElementById(minusId);
    this.addEventListeners();
  }
  addEventListeners() {
    this.plusBtn.addEventListener("click", this.increase);
    this.minusBtn.addEventListener("click", this.decrease);
  }
  increase() {
    this.count += 1;
    // console.log(this);
    this.repaintCount();
  }
  decrease() {
    this.count -= 1;
    this.repaintCount();
  }
  repaintCount() {
    this.counter.innerText = this.count;
  }
}

new Counter({ counterId: "count", plusId: "add", minusId: "minus" });
// 근데 이렇게 짜고 실행할 경우 this.repaintCount 는 함수가 아니라는 메시지와 함께 오류가
// 뜬다 이걸 어케 해결할까?
// 이 문제는 this가 가리키는 것이 달라졌기 때문에 발생했다
// this는 우리 예상대로라면 new Counter를 가리켜야 한다. 하지만 이 this를 이벤트리스너
// 안에다가 쓰고 우리의 클릭으로 인해 이 이벤트리스너가 작동하면 this는 더이상 Counter를
// 가리키지 않고 니가 방금 클릭한 버튼 엘레먼트 그자체를 가리키게 된다 그래서
// 에러를 읽어보면 HTMLButtonElement에 repaintCount라는 함수는 없다고 뜨는 것이다
// this는 매우 tricky 한 애이다 얘를 만약 클래스 바깥에서 출력해보면 얘는 window를 출력한다
// class 안에서 출력하면 선언한 클래스를 출력하고 클래스 안에 생성한 함수 안에서 사용해도
// 이 클래스를 가리킨다. 하지만 addEventListener 안에서 쓰인 this.increase 는 해당 버튼을
// 가리키고 이게 inherit 돼서 increase 함수 안의 this도 해당 버튼을 가리키게 된다
// 16번쨰 주석을 출력해보면 알것이다 얘는 그냥 <button id="add">+</button> 이거를 출력한다
// 후 이거는 JS의 아주 기본적인 행동이고 이것은 경험을 통해 내가 이해해야 할 것이다
// 정리해보면 만약 내가 eventListner를 만들면 그 안 handler에 쓰인 this는 이 이벤트가 발생한
// 이벤트 타겟 자체를 가리키게 된다는 것이다!
// 이걸 어떻게 해결할까? 엄청 쉽다 바로 해당 this가 포함된 함수를 애로우펑션으로 바꾸면 된다!
// 다음장에서 보여주겠다
