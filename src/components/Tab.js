import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tab.module.css'; 

const Tab = ({ tab }) => (
  <Link to={`/${tab.id}`} className={styles.tabLink}>
    {tab.title}
  </Link>
);

export default Tab;
