import React from 'react';
import styles from './dummyTable.module.css';

const DummyTable = () => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th className={styles.column}>Header 1</th>
        <th className={styles.column}>Header 2</th>
        <th className={styles.column}>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className={styles.column}>Info 1</td>
        <td className={styles.column}>Info 2</td>
        <td className={styles.column}>Info 3</td>
      </tr>
    </tbody>
    <tbody>
      <tr>
        <td className={styles.column}>Info 4</td>
        <td className={styles.column}>Info 5</td>
        <td className={styles.column}>Info 6</td>
      </tr>
    </tbody>
  </table>
);

export default DummyTable;
