import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const SubCatagory = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
        </TabList>

        <TabPanel>
          <h2>hello</h2>
        </TabPanel>
        <TabPanel>
          <h2>hi</h2>
        </TabPanel>
        <TabPanel>
          <h2>to</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubCatagory;




