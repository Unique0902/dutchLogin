import React from 'react';
import styles from './sex.module.css';

const Sex = ({ canName, nameRef, checkName, setNowSettingPos }) => {
  return (
    <section className={styles.nicknameSec}>
      <section className={styles.titleSec}>
        <h2 className={styles.title}>성별 선택</h2>
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

export default Sex;
