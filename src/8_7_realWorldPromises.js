// 인제 이 promise를 실제로 어떻게 쓰는지 배워보자
// fetch는 뭔가를 가져오는 함수이다
// 구글닷컴은 사실 fetch할 수 없다 왜냐면 구글이 막아놨기 때문
// 우리 라이브 서버를 fetch 해보자
// 여기서 이 라이브 서버를 api라고 가정하고 생각해보자
// fetch("http://127.0.0.1:5500/8_7_realWorldPromises.html")
//.then((response) => console.log(response.text()))
// .then((response) => response.text())
// .then((potato) => console.log(potato))
// .catch((err) => console.log(`❌${err}`));
// response를 그냥 console.log 해보면
// 여러 상태를 알려주는 오브젝트가 콘솔창에 뜬다
// 근데 respone.text() 콘솔창에 출력하면(7번행) promise가 pending중이라고 뜬다
// 이제 할 것은 response를 text로 바꾼 걸 return하는 것이다
// 그러니까 fetch를 사용해서 api 요청을 하면 api는 response(답장)을 return 한다
// 그러면(then) 그 resoponse를 text로 변환하는 것을 시도한다
// 그리고 이 response.text()는 나한테 promise를 준다 이 뜻은 이걸 바로 쓸 수 없고
// 또 then을 써야 한다는 것이다
// 즉 7번행처럼 response.text() 를 바로 출력해봤자 pending만 뜨므로(response.tex()는 promise니까)
// 위처럼 then을 써서 pending 끝난 후 return값을 console.log해줘야 한다
// 이렇게 하면 document 전체를 콘솔창에 출력할 수 있다

// 위 코드는 아래 쓸 json을 위해 주석 처리했다 인제 영화정보를 가져오는 api를 fetch
// 한 후 .json()함수를 통해 정보를 가져와보자

fetch("https://yts.mx/api/v2/list_movies.json")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((e) => console.log(e));
// 이렇게 api로부터 정보를 가져와서 콘솔창에다가 출력해봤다 오브젝트안에 영화 정보가
// 들어있는 것을 볼 수 있다
// response만 가져와서는 별로 정보를 얻을 수 없었다 json()를 통해 이 api의 바디를
// 가져올 수 있었다
