import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import tabsData from '../tabs.json';
import Tab from './Tab';
import styles from './Tabs.module.css';

const TabComponents = {
  dummyTable: lazy(() => import('../tabs/dummyTable')),
  dummyChart: lazy(() => import('../tabs/dummyChart')),
  dummyList: lazy(() => import('../tabs/dummyList')),
};

const Tabs = () => {
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState(null);

  useEffect(() => {
    const tabId = location.pathname.replace('/', '');
    const tab = tabsData.find((tab) => tab.id === tabId);
    setCurrentTab(tab);
  }, [location]);

  const renderSelectedTab = (tab) => {
    const TabComponent = TabComponents[tab.id];
    return (
      <Suspense fallback={<div>Loading...</div>}>
        {TabComponent && <TabComponent />}
      </Suspense>
    );
  };

  return (
    <div>
      <div className={styles.tabList}>
        {tabsData.map((tab) => (
          <Tab key={tab.id} tab={tab} />
        ))}
      </div>
      <div className={styles.tabContent}>
        {currentTab && renderSelectedTab(currentTab)}
      </div>
    </div>
  );
};

export default Tabs;
