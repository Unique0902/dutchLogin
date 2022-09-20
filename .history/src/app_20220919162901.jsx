import './app.css';

function App() {
  return (
    <>
      <h2>전화번호로 로그인</h2>
      <p>
        같이 더치는 번호를 안전하게 보관하며 가입이외의 어떤 목적으로도 사용하지
        않습니다.
      </p>
      <input
        type='tel'
        name='telInput'
        placeholder='전화번호 입력'
        maxLength={11}
      />
      <button>인증</button>
    </>
  );
}

export default App;
