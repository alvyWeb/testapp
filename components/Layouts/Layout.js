import React from 'react';
import Navbar from '../common/Navbar';
import ProfileHeader from '../common/ProfileHeader';
import styles from '../../styles/layouts/Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <ProfileHeader></ProfileHeader>
      <div>
        {children}
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Layout;
