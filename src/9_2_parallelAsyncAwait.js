// parallel에 대해 알아보자
// 우리는 두개의 api를 가져오고 싶다 하나는 인기 영화 리스트를 가져오고
// 나머지 하나는 제안 받은 영화리스트를 가져오고 싶다
// 이것을 하기 위해서 promise.all을 쓸 것이고 destructuring assignment 도 할 것이다
// 아래처럼 response변수에 Promise.all의 결과값을 넣도록 하자
// Promise.all 에 들어갈 어레이 인자에는 두 api를 가져오는 promise가 들어간다
// 이 await Promise.all() 실행되면 가져온 api는 어레이에 정렬된채 저장된다
// 따라서 각각의 fetch된 api를 두 변수에 저장하기 위해 destructuring을 써서 변수를 선언하자
// 이렇게 response 가져온 후 같은 방법으로 json을 가져오도록 하자
// 그리고 2개를 동시에 출력해보면 성공적으로 두 api를 한꺼번에 가져왔음을 알 수 있다
// destructuring과 await의 콜라보는 정말 엄청난듯
// 근데 좀 짜증나는것은 await을 쓰려면 무조건 async 함수를 만들어야 한다는 것이다
//  최상위에서 await을 쓰지 못하는게 좀 아쉽다
// await을 최상위에서 쓸 수 있다면 함수에 넣지 않아도 되고 더 쿨할 것이다
// 하지만 방법이 없다 무조건 await은 async function 안에 있어야 한다
// 그리고 fetch로 api를 가져오면 무조건 response를 가져오고 json으로 변환하는
// 작업을 아래처럼 해줘야 한다. 좀 불편하다. 아얘 api가져올때 모든 내용을 json이나 text로
// 변환하는 라이브러리인 axios를 쓰는 게 더 편할 수도 있다 더 검색해보자
const getMoviesAsync = async () => {
  try {
    const [moviesResponse, suggestionResponse] = await Promise.all([
      fetch("https://yts.mx/api/v2/list_movies.json"),
      fetch("https://yts.mx/api/v2/movie_suggestions.json?movie_id=100")
    ]);
    const [movies, suggestion] = await Promise.all([
      moviesResponse.json(),
      suggestionResponse.json()
    ]);
    console.log(movies, suggestion);
  } catch (err) {
    console.log(`❌❤❌ ${err}`);
  } finally {
    console.log("async/await is SEXY!!");
  }
};

getMoviesAsync();
