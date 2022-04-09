import React from 'react';
import assets from '../assets';
import styles from '../styles/Global';
// import FeatureCard from './FeatureCard';
const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img className={styles.featureImg} src={iconUrl} alt='icon' />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);
const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center `}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.pText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.pText}`}>
            ProNef has been developed using a cross-platform technology,
            React-Native.
          </p>
        </div>
        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={assets.react} iconText={'React Native'} />
          <FeatureCard iconUrl={assets.javascript} iconText={'Javascript'} />
        </div>
      </div>
    </div>
  );
};

export default Features;
