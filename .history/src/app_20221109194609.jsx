import styles from './app.module.css';
import * as auth from './services/auth.js';
import Telephone from './components/telephone/telephone.jsx';
import Nickname from './components/nickname/nickname.jsx';
import Sex from './components/sex/sex.jsx';
import Age from './components/age/age.jsx';
import React, { useRef, useState, useEffect } from 'react';

function App({ authService }) {
  const telRef = useRef();
  const codeRef = useRef();
  const nameRef = useRef();
  const ageRef = useRef();
  const [showCheck, setShowCheck] = useState(false);
  const [sex, setSex] = useState(null);
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [uid, setUid] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [canMsg, setCanMsg] = useState(false);
  const [isCanCode, setIsCanCode] = useState(false);
  const [isCodeRight, setIsCodeRight] = useState(true);
  const [canName, setCanName] = useState(false);
  const [canAge, setCanAge] = useState(false);
  const [canApply, setCanApply] = useState(false);
  const [nowSettingPos, setNowSettingPos] = useState('telephone');
  const checkUser = authService.checkUser;
  useEffect(() => {
    if (canAge && age && uid && sex && name) {
      setCanApply(true);
    } else {
      setCanApply(false);
    }
  }, [canAge, age, uid, sex, name]);
  const onClick = () => {
    if (canMsg) {
      const phoneNum = telRef.current.value;
      if (phoneNum.length === 12) {
        auth.sendMsg('+1' + phoneNum, setShowCheck);
      } else if (phoneNum.length === 13) {
        auth.sendMsg('+82' + phoneNum, setShowCheck);
      }
    }
  };
  const onConfirm = () => {
    const number = codeRef.current.value;
    if (number.length === 6) {
      auth.checkCode(
        number,
        setNowSettingPos,
        setUid,
        checkUser,
        setRefreshToken
      );
    }
  };
  const makeUser = () => {
    console.log(uid, name, sex, age);
    authService.makeUser(uid, name, sex, age).then(() => {
      console.log('유저 생성됨!');
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ uid, refreshToken })
      );
    });
  };
  const checkCanMsg = (tel) => {
    if (tel.length === 13 || tel.length === 12) {
      let isCanMsg = true;
      for (let i = 0; i < tel.length; i++) {
        const ch = tel[i];
        if (ch != ' ' && (ch < '0' || ch > '9')) {
          setCanMsg(false);
          isCanMsg = false;
          console.log('you cant msg!');
          break;
        }
      }
      if (isCanMsg) {
        setCanMsg(true);
      }
    } else {
      setCanMsg(false);
    }
  };
  let isJump;
  const checkTel = () => {
    let tel = telRef.current.value;
    if (tel.length === 4) {
      if (tel[3] !== ' ') {
        telRef.current.value = `${tel[0] + tel[1] + tel[2]} ${tel[3]}`;
      }
    }

    if (tel.length === 3) {
      if (isJump) {
        telRef.current.value = `${tel} `;
        isJump = false;
      }
    }
    if (tel.length === 9) {
      if (tel[8] !== ' ') {
        telRef.current.value = `${
          tel[0] + tel[1] + tel[2] + tel[3] + tel[4] + tel[5] + tel[6] + tel[7]
        } ${tel[8]}`;
      }
    }

    if (tel.length === 8) {
      console.log('now!');
      if (isJump) {
        telRef.current.value = `${tel} `;
        isJump = false;
      }
    }
    if (tel.length >= 4) {
      if (tel[3] != ' ') {
        const tel = telRef.current.value;
        const front = [...tel].slice(0, 3);
        const back = [...tel].slice(3, tel.length);
        telRef.current.value = `${front.join('')} ${back.join('')}`;
      }
    }
    if (tel.length >= 9) {
      const tel = telRef.current.value;
      if (tel[8] != ' ') {
        const front = [...tel].slice(0, 8);
        const back = [...tel].slice(8, tel.length);
        telRef.current.value = `${front.join('')} ${back.join('')}`;
      }
    }
    if (tel.length === 7 || tel.length === 2) {
      isJump = true;
    } else {
      isJump = false;
    }
    checkCanMsg(tel);
  };
  const confirmCode = () => {
    const codes = codeRef.current.value;
    if (codes.length === 6) {
      setIsCanCode(true);
    } else {
      setIsCanCode(false);
    }
  };
  const checkName = () => {
    const name = nameRef.current.value;
    if (name.length >= 2) {
      setCanName(true);
    } else {
      setCanName(false);
    }
  };
  const checkAge = () => {
    const age = ageRef.current.value;
    const num = parseInt(age);
    if (num) {
      if (num < 200 && num > 0) {
        setCanAge(true);
      } else {
        setCanAge(false);
      }
    } else {
      setCanAge(false);
    }
  };
  return (
    <section className={styles.container}>
      {nowSettingPos == 'telephone' && (
        <Telephone
          telRef={telRef}
          checkTel={checkTel}
          canMsg={canMsg}
          onClick={onClick}
          showCheck={showCheck}
          codeRef={codeRef}
          confirmCode={confirmCode}
          onConfirm={onConfirm}
          isCanCode={isCanCode}
          isCodeRight={isCodeRight}
        />
      )}
      {nowSettingPos == 'nickname' && (
        <Nickname
          canName={canName}
          nameRef={nameRef}
          checkName={checkName}
          setNowSettingPos={setNowSettingPos}
          setName={setName}
          name={name}
        />
      )}
      {nowSettingPos == 'sex' && (
        <Sex setSex={setSex} sex={sex} setNowSettingPos={setNowSettingPos} />
      )}
      {nowSettingPos == 'age' && (
        <Age
          ageRef={ageRef}
          setSex={setSex}
          checkAge={checkAge}
          canAge={canAge}
          setNowSettingPos={setNowSettingPos}
          makeUser={makeUser}
          setAge={setAge}
          canApply={canApply}
        />
      )}
    </section>
  );
}

export default App;
