import React from 'react';
import styles from './sex.module.css';

const Sex = ({ canName, nameRef, checkName, setNowSettingPos }) => {
  return (
    <section className={styles.sexSec}>
      <section className={styles.titleSec}>
        <h2 className={styles.title}>성별 선택</h2>
      </section>
      <section id='sex' className={styles.sexBtnSec}>
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
