import React from 'react';
import { useEffect, useState } from 'react';
import styles from './age.module.css';

const Age = ({ setSex, sex, setNowSettingPos }) => {
  return (
    <section className={styles.ageSec}>
      <section className={styles.titleSec}>
        <h2 className={styles.title}>나이 입력</h2>
      </section>
      <section className={styles.inputSec}>
        {!canAge && <p>올바른 나이를 입력해주세요!</p>}
        <input
          type='number'
          ref={ageRef}
          onChange={() => {
            checkAge();
          }}
        />
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
