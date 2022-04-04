import React from 'react';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div className='chart'>
            
            <MyLineChart className="line-chart"></MyLineChart>
            <MyAreaChart></MyAreaChart>
        </div>
    );
};

export default Dashboard;