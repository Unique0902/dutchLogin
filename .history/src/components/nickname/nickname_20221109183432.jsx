import React from 'react';
import styles from './nickname.module.css';

const Nickname = (props) => {
  return (
    <section className={styles.nicknameSec}>
      <h2 className={styles.title}>닉네임 입력</h2>
      {!canName && <p>두글자 이상 입력해주세요!</p>}
      <input
        type='text'
        name='name'
        id='name'
        ref={nameRef}
        onChange={() => {
          checkName();
        }}
        className={styles.input}
        placeholder='닉네임 입력'
      />
    </section>
  );
};

export default Nickname;
