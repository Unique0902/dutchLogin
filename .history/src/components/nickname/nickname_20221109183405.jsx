import React from 'react';
import styles from './nickname.module.css';

const Nickname = (props) => {
  return (
    <section className={styles.nicknameSec}>
      <h2 className={styles.title}>닉네임 입력</h2>
    </section>
  );
};

export default Nickname;
