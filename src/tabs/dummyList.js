import React from 'react';
import styles from './dummyList.module.css';

const DummyList = () => (
  <ul className={styles.list}>
    <li className={styles.listItem}>Item 1</li>
    <li className={styles.listItem}>Item 2</li>
    <li className={styles.listItem}>Item 3</li>
  </ul>
);

export default DummyList;
