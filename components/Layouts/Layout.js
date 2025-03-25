import React from 'react';
import Navbar from '../common/Navbar';
import ProfileHeader from '../common/ProfileHeader';
import styles from '../../styles/layouts/Layout.module.scss';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <motion.div
      key={location.key} // Key ensures a new animation on route change
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Adjust the duration for the animation speed
    >
    <div className={styles.container}>
      <ProfileHeader></ProfileHeader>
      <div>
        {children}
      </div>
      <Navbar></Navbar>
    </div>
    </motion.div>
  );
};

export default Layout;
