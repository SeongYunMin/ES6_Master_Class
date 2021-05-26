// async와 await은 위에서 배운 두 Promise의 업데이트 버전이다
// 이 둘은 더 보기 좋은 코드를 위해서 만들어졌다
// 이전 섹션에서 배운 then이나 catch 는 구닥다리 방법이다
// 왜냐면 프로그램을 위해서 너무 많은 then과 catch가 필요하기 때문
// 그리고 각각의 then마다 function을 많이 써야해서 코드 복잡해진다
// Async 와 Await은 더 간단하고 명료한 promise 코드를 짤 수 있게 해준다
// 이전 섹션에서 배운 then과 catch만 구식이다
// Promise, resolve, reject, Promise.all, Promise.race는 쭉 사용할 것이다
// 기본적으로 Async와 Await은 promise 밖에서 값을 가져올 수 있는 방법이다
// then이나 catch를 사용하지 않고 말이다
// 우선 await은 혼자 쓰일 수 없고 항상 async function 안에서만 사용할 수 있다
// await은 그냥 wait으로 받아들이면 된다 즉 p romise가 끝날길기다리는 것이다
// 아래는 async와 비교하기 위한 기존의 then을 활용한 promise 문이다
const getMoviesPromise = () => {
  fetch("https://yts.mx/api/v2/list_movies.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((json) => console.log(json))
    .catch((e) => console.log(e));
};

// 아래처럼 async function을 만들어봤다
// 1. 함수 만들고 첫번쨰로 할 것은 promise를 저장할 변수를 만드는 것(여기선 response)
// 그리고 뒤의 fetch 앞에다가 await을 붙여주는 것이다
// 그러면 이 await은 이 fetch가 완료된 후의 값(response)을, 선언한 변수인
// response에다가 넣어준다 즉 fetch가 resolve된 값을 response 변수에다가 넣어준 것
//  16번 줄에서 then을 써서 한일을 이렇게 await과 변수선언 한줄로 끝내버렸다
// 이렇게 한후 콘솔창을 보면 pending이 아닌 response의 값이 출력된 것을 알 수 있다
// 그리고 위처럼 then 여러개 주렁주렁 달 필요없이 json도 얻고 싶다면 그냥
// await 변수를 하나 더 선언해주면 된다
// 명심하자 await변수를 사용하려면 이 함수를 async함수로 선언해야 한다!!
// 위에서 then을 주렁주렁 달아서 길게 짠 코드를 async await을 쓰면 아래처럼 간단하게
// 짤 수 있다 다음 섹션에서는 async/await 구문에서 catch를 하는 법을 알려주겠다
const getMoviesAsync = async () => {
  const response = await fetch("https://yts.mx/api/v2/list_movies.json");
  const json = await response.json();
  console.log(response);
  console.log(json);
};

getMoviesAsync();
// async function getMovies() {}
// 이런식으로 arrow 펑션 안쓰고도 async function 만들 수 있다
