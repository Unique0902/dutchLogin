import React from 'react';
import styles from './telephone.module.css';

const Telephone = ({
  telRef,
  checkTel,
  canMsg,
  onClick,
  showCheck,
  numRef,
  confirmCode,
  onConfirm,
}) => {
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
          onClick();
        }}
      >
        인증문자 받기
      </button>
      {showCheck && (
        <>
          <input
            ref={numRef}
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
              canCode ? styles.activated : styles.unactivated
            }`}
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
};

export default Telephone;
