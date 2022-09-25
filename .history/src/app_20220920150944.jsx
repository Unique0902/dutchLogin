import styles from './app.module.css';
import * as auth from './services/auth.js';
import React, { useRef, useState, useEffect } from 'react';

function App({ authService }) {
  const telRef = useRef();
  const numRef = useRef();
  const nameRef = useRef();
  const ageRef = useRef();
  const [showCheck, setShowCheck] = useState(false);
  const [isAuth, setIsAuth] = useState(true);
  const [sex, setSex] = useState('male');
  const [uid, setUid] = useState('');
  const [age, setAge] = useState('');
  const checkUser = authService.checkUser;
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
    auth.checkCode(number, setIsAuth, setUid, checkUser);
  };
  const makeUser = () => {
    const name = nameRef.current.value;
    authService.makeUser(uid, name, sex, age).then(() => {});
  };
  let male;
  let female;
  const selectSex = () => {
    if (sex === 'male') {
      male = styles.selected;
      female = styles.notSelected;
    } else {
      male = styles.notSelected;
      female = styles.selected;
    }
  };
  selectSex();
  return (
    <section className={styles.container}>
      {isAuth && (
        <>
          <h2 className={styles.title}>전화번호로 시작하기</h2>
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
        </>
      )}
      {!isAuth && (
        <>
          <h2 className={styles.title}>정보 입력</h2>
          <label htmlFor='name'>닉네임 입력</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={nameRef}
            className={styles.input}
            placeholder='닉네임 입력'
          />
          <label htmlFor='sex'>성별 선택</label>
          <div id='sex' className={styles.sexBtns}>
            <div
              className={`${styles.sexBtn} ${male}`}
              onClick={() => {
                setSex('male');
              }}
            >
              남자
            </div>
            <div
              className={`${styles.sexBtn} ${female}`}
              onClick={() => {
                setSex('female');
              }}
            >
              여자
            </div>
          </div>
          <div>나이입력</div>
          <input type='text' ref={ageRef} />
          <button
            className={styles.btn}
            onClick={() => {
              makeUser();
            }}
          >
            같이 더치 시작하기
          </button>
        </>
      )}
    </section>
  );
}

export default App;
