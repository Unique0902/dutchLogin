import './app.css';

function App() {
  return (
    <>
      <input
        type='tel'
        name='telInput'
        placeholder='전화번호 입력'
        maxLength={11}
      />
    </>
  );
}

export default App;
