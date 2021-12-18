import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from "react";
import Header from './Header.jsx';
import Activity from './Activity.jsx';
import axios from 'axios'

const App = () => {
  const [activityData, setActivityData] = useState();
  useEffect (() => {
      const apiUrl = "https://aircall-job.herokuapp.com/activities"
      axios.get(apiUrl)
          .then(res => setActivityData(res.data))
          .catch(err => console.log(err))
  }, [])
  return (
    <div className='container'>
      <Header/>
      <Activity activityData={activityData}/>
      <div className="container-view">Some activities should be here</div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
