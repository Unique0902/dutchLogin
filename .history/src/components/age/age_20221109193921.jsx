import React from 'react';
import { useEffect, useState } from 'react';
import styles from './age.module.css';

const Age = ({
  ageRef,
  setSex,
  checkAge,
  canAge,
  setNowSettingPos,
  makeUser,
  setAge,
  canApply,
}) => {
  return (
    <section className={styles.ageSec}>
      <section className={styles.titleSec}>
        <h2 className={styles.title}>나이 입력</h2>
      </section>
      <section className={styles.inputSec}>
        <input
          type='number'
          className={styles.input}
          ref={ageRef}
          onChange={() => {
            checkAge();
            setAge(ageRef.current.value);
          }}
        />
        {!canAge && (
          <p className={styles.warnText}>올바른 나이를 입력해주세요!</p>
        )}
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
            if (canAge) {
              makeUser();
            }
          }}
        >
          같이 더치 시작하기
        </button>
      </section>
    </section>
  );
};

export default Age;
