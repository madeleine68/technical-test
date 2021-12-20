import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect, useMemo } from "react";
import Header from './Header.jsx';
import axios from 'axios'
import {  BrowserRouter } from "react-router-dom"
import { Tabs, Tab, TabList,TabPanel } from "react-tabs";
import Inbox from './Inbox.jsx';
import All from './All.jsx';
import Archived from './Archived.jsx'
import 'react-tabs/style/react-tabs.css';
import Footer from './Footer.jsx';
import { group } from './helper'

const App = () => {
  const [activityData, setActivityData] = useState();
  useEffect (() => {
      const apiUrl = "https://aircall-job.herokuapp.com/activities"
      axios.get(apiUrl)
          .then(res => setActivityData(res.data))
          .catch(err => console.log(err))
  }, [])
  const grouped = activityData ? group(activityData) : null
 
  return (
    
    <div className='container'>
      <div className="container-view">
      <Header/>
      <BrowserRouter>
        <Tabs >
          <TabList>
            <Tab> All Calls</Tab>
            <Tab> Archived </Tab>
          </TabList>
          <TabPanel>  <All grouped={grouped} activityData={activityData}/> </TabPanel>
          <TabPanel> <Archived grouped={grouped} activityData={activityData}/> </TabPanel>
        </Tabs>
      </BrowserRouter>  
        <Footer activityData={activityData}/>
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
