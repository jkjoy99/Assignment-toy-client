import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Test = () => {
    return (
        <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>
     
        <TabPanel>
          <h2>hello</h2>
        </TabPanel>
        <TabPanel>
          <h2>hi</h2>
        </TabPanel>
      </Tabs>
    );
};

export default Test;