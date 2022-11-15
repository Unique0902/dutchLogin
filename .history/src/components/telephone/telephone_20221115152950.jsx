import React from 'react';
import { useState } from 'react';
import styles from './telephone.module.css';

const Telephone = ({
  telRef,
  checkTel,
  canMsg,
  onClick,
  showCheck,
  codeRef,
  confirmCode,
  onConfirm,
  isCanCode,
  isCodeRight,
}) => {
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  return (
    <section className={styles.telephoneSec}>
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
        maxLength={13}
        onChange={() => {
          checkTel();
        }}
      />
      <button
        className={`${styles.btn} ${
          canMsg ? styles.activated : styles.unactivated
        }`}
        id='sign-in-button'
        onClick={() => {
          if (!setIsLoading1) {
            setIsLoading1(true);
            onClick(setIsLoading1);
          }
        }}
      >
        {isLoading1 ? <div className={styles.loading}></div> : '인증문자 받기'}
      </button>
      {showCheck && (
        <>
          <input
            ref={codeRef}
            type='tel'
            placeholder='코드입력'
            className={styles.input}
            maxLength={6}
            onChange={() => {
              confirmCode();
            }}
          />
          <button
            className={`${styles.btn} ${
              isCanCode ? styles.activated : styles.unactivated
            }`}
            onClick={() => {
              onConfirm();
            }}
          >
            인증
          </button>
          {!isCodeRight && (
            <p className={styles.warnText}>
              코드가 틀렸습니다. 다시 입력해주세요
            </p>
          )}
        </>
      )}
    </section>
  );
};

export default Telephone;
