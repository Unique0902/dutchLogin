import styles from './app.module.css';
import * as auth from './services/auth.js';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const telRef = useRef();
  const numRef = useRef();
  const [showCheck, setShowCheck] = useState(false);
  const onClick = () => {
    const phoneNum = telRef.current.value;
    if (phoneNum.length != 10) {
      console.log('hi');
      return;
    }
    auth.sendMsg('+1' + phoneNum, setShowCheck);
  };
  const onConfirm = () => {
    const number = numRef.current.value;
    auth.checkCode(number);
  };
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>전화번호로 로그인</h2>
      <p className={styles.description}>
        같이 더치는 번호를 안전하게 보관하며 가입 이외의 어떤 목적으로도
        사용하지 않습니다.
      </p>
      <input
        className={styles.input}
        type='tel'
        ref={telRef}
        name='telInput'
        placeholder='전화번호 입력'
        maxLength={11}
      />
      <button
        className={styles.btn}
        id='sign-in-button'
        onClick={() => {
          onClick();
        }}
      >
        인증문자 받기
      </button>
      {showCheck && (
        <>
          <input
            ref={numRef}
            type='text'
            placeholder='숫자입력'
            className={styles.input}
          />
          <button
            className={styles.btn}
            onClick={() => {
              onConfirm();
            }}
          >
            인증
          </button>
        </>
      )}
    </section>
  );
}

export default App;
