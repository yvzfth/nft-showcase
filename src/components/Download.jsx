import React from 'react';
import assets from '../assets';
import styles from '../styles/Global';

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.blackText} ${styles.h1Text}`}>
            Download the source code
          </h1>
          <p className={`${styles.blackText} ${styles.pText}`}>
            Get the full source code on Github
          </p>
        </div>
        <button
          className={styles.btnPrimary}
          onClick={() =>
            window.open('https://github.com/yvzfth/nft-react-native', '_blank')
          }
        >
          Source Code
        </button>
        <div className={styles.flexCenter}>
          <img src={assets.scene} alt='scene' className={styles.fullImg} />
        </div>
      </div>
    </div>
  );
};

export default Download;
