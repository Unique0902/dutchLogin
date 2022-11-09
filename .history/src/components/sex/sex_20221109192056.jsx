import React from 'react';
import { useEffect, useState } from 'react';
import styles from './sex.module.css';

const Sex = ({ setSex, sex, setNowSettingPos }) => {
  const [fsex, setFsex] = useState(null);
  useEffect(() => {
    console.log(sex === 'male');
    setFsex(sex);
  }, [sex]);
  return (
    <section className={styles.sexSec}>
      <section className={styles.titleSec}>
        <h2 className={styles.title}>성별 선택</h2>
      </section>
      <section className={styles.sexBtnSec}>
        <div className={styles.sexBtns}>
          <div
            className={`${styles.sexBtn} ${
              fsex === 'male' ? styles.selected : styles.notSelected
            }`}
            onClick={() => {
              setSex('male');
            }}
          >
            남자
          </div>
          <div
            className={`${styles.sexBtn} ${
              fsex === 'female' ? styles.selected : styles.notSelected
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
            sex ? styles.activated : styles.unactivated
          }`}
          onClick={() => {
            if (sex) {
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
