import React from 'react';
import { useEffect, useState } from 'react';
import styles from './age.module.css';

const Age = ({ setSex, sex, setNowSettingPos }) => {
  return (
    <section className={styles.sexSec}>
      <section className={styles.titleSec}>
        <h2 className={styles.title}>성별 선택</h2>
      </section>
      <section className={styles.sexBtnSec}>
        <div className={styles.sexBtns}>
          <div
            className={`${styles.sexBtn} ${
              sex == 'male' ? styles.selected : styles.notSelected
            }`}
            onClick={() => {
              setSex('male');
            }}
          >
            남자
          </div>
          <div
            className={`${styles.sexBtn} ${
              sex == 'female' ? styles.selected : styles.notSelected
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
            setSex(null);
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

export default Age;
