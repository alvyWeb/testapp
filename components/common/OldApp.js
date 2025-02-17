import React from 'react';
import styles from '../../styles/common/OldApp.module.scss';

const OldApp = () => {
  return (
    <div className={styles.container}>
      <iframe className={styles.external} src="http://google.com"> 
      </iframe>
      </div>
  );
};

export default OldApp;
