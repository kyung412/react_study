//jsx 주의사항
//1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음
//2. 숫자, 문자열, 배열 값만 렌더링
//3. 모든 태그는 닫혀있어야 함
//4. 최상위 태그는 반드시 하나여야만 함

const Main = () => {
  const user = {
    name:"고경",
    isLogin: true,
  };
  return<>
  {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
  </>;
};

export default Main;