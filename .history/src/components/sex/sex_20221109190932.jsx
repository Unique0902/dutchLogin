import React from 'react';
import styles from './sex.module.css';

const Sex = ({ canName, setSex, sex, setNowSettingPos }) => {
  return (
    <section className={styles.sexSec}>
      <section className={styles.titleSec}>
        <h2 className={styles.title}>성별 선택</h2>
      </section>
      <section className={styles.sexBtnSec}>
        <div className={styles.sexBtns}>
          <div
            className={`${styles.sexBtn} ${
              sex == 'male' ? styles.selected : styles.noeSelected
            }`}
            onClick={() => {
              setSex('male');
            }}
          >
            남자
          </div>
          <div
            className={`${styles.sexBtn} ${
              sex == 'female' ? styles.selected : styles.noeSelected
            }`}
            onClick={() => {
              setSex('female');
            }}
          >
            여자
          </div>
        </div>
      </section>
      <section className={styles.btnSec}>
        <button
          className={styles.beforeBtn}
          onClick={() => {
            setNowSettingPos('nickname');
          }}
        >
          이전
        </button>
        <button
          className={`${styles.nextBtn} ${
            canName ? styles.activated : styles.unactivated
          }`}
          onClick={() => {
            if (canName) {
              setNowSettingPos('age');
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
