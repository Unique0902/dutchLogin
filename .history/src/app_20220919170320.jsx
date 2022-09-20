import './app.css';
import * as auth from './services/auth.js';
import React, { useRef } from 'react';
import { useEffect } from 'react';

function App() {
  const telRef = useRef();
  const onClick = () => {
    console.log('hi');

    const phoneNum = telRef.current.value;
    if (phoneNum.length != 10) {
      console.log('hi');
      return;
    }
    auth.sendMsg();
  };
  useEffect(() => {
    auth.setRecatcha();
  }, []);
  return (
    <>
      <h2>전화번호로 로그인</h2>
      <p>
        같이 더치는 번호를 안전하게 보관하며 가입이외의 어떤 목적으로도 사용하지
        않습니다.
      </p>
      <input
        type='tel'
        ref={telRef}
        name='telInput'
        placeholder='전화번호 입력'
        maxLength={11}
      />
      <button
        id='sign-in-button'
        onClick={() => {
          onClick();
        }}
      >
        인증문자 받기
      </button>
      <div id='recaptcha-container'></div>
    </>
  );
}

export default App;
