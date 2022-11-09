import React from 'react';
import { useEffect, useState } from 'react';
import styles from './age.module.css';

const Age = ({ ageRef, setSex, checkAge, canAge, setNowSettingPos }) => {
  return (
    <section className={styles.ageSec}>
      <section className={styles.titleSec}>
        <h2 className={styles.title}>나이 입력</h2>
      </section>
      <section className={styles.inputSec}>
        <input
          type='number'
          ref={ageRef}
          onChange={() => {
            checkAge();
          }}
        />
        {!canAge && <p>올바른 나이를 입력해주세요!</p>}
      </section>
      <section className={styles.btnSec}>
        <button
          className={styles.beforeBtn}
          onClick={() => {
            setNowSettingPos('sex');
            setSex(null);
          }}
        >
          이전
        </button>
        <button
          className={`${styles.nextBtn} ${
            canAge ? styles.activated : styles.unactivated
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
