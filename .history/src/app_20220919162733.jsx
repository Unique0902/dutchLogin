import './app.css';

function App() {
  return (
    <>
      <h2>전화번호로 로그인</h2>
      <input
        type='tel'
        name='telInput'
        placeholder='전화번호 입력'
        maxLength={11}
      />
    </>
    <button>인증</button>
  );
}

export default App;
