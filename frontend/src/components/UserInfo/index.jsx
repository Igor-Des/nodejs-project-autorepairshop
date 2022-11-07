import React from 'react';
import styles from './UserInfo.module.scss';

export const UserInfo = ({
  fullName,
  email,
  role,
  createAt,
}) => {
  return (
    <div className={styles.root}>
      <img className={styles.avatar} src={'/noavatar.png'} alt={fullName} />
      <div className={styles.userDetails}>
        <span className={styles.userName}>{fullName}</span>
        <span className={styles.additional}>{email}</span>
      </div>
    </div>
    
  );
};
