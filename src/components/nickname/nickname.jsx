import React from 'react';
import { useEffect } from 'react';
import styles from './nickname.module.css';

const Nickname = ({
  canName,
  nameRef,
  checkName,
  setNowSettingPos,
  setName,
  name,
}) => {
  useEffect(() => {
    if (name) {
      nameRef.current.value = name;
    }
  }, []);
  return (
    <section className={styles.nicknameSec}>
      <section className={styles.titleSec}>
        <h2 className={styles.title}>닉네임 입력</h2>
      </section>
      <section className={styles.inputSec}>
        <input
          type='text'
          name='name'
          id='name'
          ref={nameRef}
          onChange={() => {
            checkName();
          }}
          className={styles.input}
          placeholder='닉네임 입력'
        />
        {!canName && (
          <p className={styles.warnText}>두글자 이상 입력해주세요!</p>
        )}
      </section>
      <section className={styles.btnSec}>
        <button
          className={`${styles.nextBtn} ${
            canName ? styles.activated : styles.unactivated
          }`}
          onClick={() => {
            if (canName) {
              setName(nameRef.current.value);
              setNowSettingPos('sex');
            }
          }}
        >
          다음
        </button>
      </section>
    </section>
  );
};

export default Nickname;
