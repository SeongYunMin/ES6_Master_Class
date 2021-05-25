// 가끔 Promise가 성공하거나 실패했을때 뭔가를 하고 싶을 것이다
// 예를 들어 댓글을 api를 통해 저장하고 싶을때가 있을 것이다
// 그래서 user가 Save버튼을 눌렀을 때 Spinner를 보여주면 깔끔할것이다
// 만약 업로드에 성공하면 spinner를 멈추고 에러가 발생하면 spinner 멈추고
// 에러를 해결하라고 보여주고 싶다
// (spinner는 그 로딩할때 뱅글뱅글 도는거 의미한다)
// 이떄 필요하는게 finally 이다
const p1 = new Promise((resolve, rej) => {
  setTimeout(rej, 2000, "Hate JS!");
})
  .then((value) => console.log(value))
  .catch((err) => console.log(err))
  .finally(() => console.log("I'm done"));
// 이 finally는 then이 앞에 오든 catch가 오든 이어서 실행이된다
// 즉, Promise가 resolve 되든 reject 되든 상관없이 이어서 실행된다는 뜻
// api 가져오는데 성공하거나 실패하거나 상관없이 마지막에 로딩을 그만하고
// 싶을떄 그럴때 쓰면 되는 것이다
