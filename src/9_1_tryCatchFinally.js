// try catch는 파이썬에서 쓰이는 특징인데 이번에 JS에 추가됐다
// try catch 구문은 일단 async함수 안에 try{} 만들어서 try해보고 안되면
// 그 다음에 오는 catch{} 에서 에러에 대응하는 구문이다
// 아래처럼 try 안에서 json으로 영화 목록을 가져오고 만약 에러가 나면 에러 출력하도록
// 해보겠다 (api 주소를 틀리게 줘서 일부러 에러가 나게 했다)
// 이렇게 try catch만 써도 오류처리가 가능해진다 예전처럼 then여러개 쓰고 마지막에
// catch넣고 할 필요 없어졌다
// 여기서 catch{}는 try 내의 json에서 오류가 나도 정확히 catch해서 출력해줄 것이다
// 즉 catch는 try에서 일어나는 모든 error를 잡아낸다
// 심지어 await 변수 가 아닌 곳에서 발생한 오류도 잡아낸다
// 아 그리고 이 async/await 구문에도 finally가 있다
// 그냥 catch다음에 finally{} 붙여주면 된다
const getMoviesAsync = async () => {
  try {
    const response = await fetch("https://yts.mx/api/v2/lismovies.json");
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.log(`❌❤❌ ${err}`);
  } finally {
    console.log("async/await is SEXY!!");
  }
};

getMoviesAsync();

// async/await은 정말 정말 단순하고 보기 편하므로 자주 사용하도록 하자
