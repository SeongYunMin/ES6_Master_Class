const amISexy = new Promise((resolve, reject) => {
  resolve(2);
});

// amISexy.then((number) => console.log(number));
// 이렇게 하면 당연히 number인자는 resolve가 반환한 값을 받고
// 내장함수를 실행할 것이다
// 근데 만약 우리가 API를 받는데 그 api는 암호로 되있다고 가정하자
// 그러면 우린 데이터를 받아온 후(then) 암호화를 푸는 promise를 또 만들어줘야 한다
// 암호 푸는 작업은 시간이 좀 걸리므로 promise를 또 써야한다는 것
// 그리고 그 암호 푸는 거 끝난 후 파일로 데이터를 저장까지 해야할 수도 있다 그러면
// promose가 3개 필요하다
amISexy
  .then((number) => {
    console.log(number * 2);
    return number * 2;
  })
  .then((otherNumber) => {
    console.log(otherNumber * 2);
  });
// 위에서 otherNumber 인자가 값을 받기 위해서는 그전 then에서 값을 return 해줘야 한다

// 아래처럼 아예 2배 하는 함수 만들어서 then 안에 넣어줘도 된다
const timesTwo = (number) => number * 2;
amISexy
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then((lastNumber) => console.log(lastNumber));

// 그렇다면 이 then들 중 에러가 발생한 애 있으면 우린 그걸 catch 해줘야 한다
amISexy
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(timesTwo)
  .then(() => {
    throw Error("Something is wrong");
  })
  .then((lastNumber) => console.log(lastNumber))
  .catch((error) => console.log(error));
// 위에서 then catch 배울떄와 마찬가지로 만약 then chain 내에 에러가 발생할 경우
// 이걸 catch 하기 위해 마지막에 catch 메서드를 붙여주면 된다 그러면 얘 같은 경우
// error의 내용을 출력하게 된다
// 마지막에 catch를 붙여주기만 하면 얘는 위의 많은 then안에서 에러를 찾을것이고
// 심지어 Promise(여기선 amISexy) 내에서도 reject된 거 있는지 찾을 것이다
// 이런식으로 error를 catch할 수 있다
