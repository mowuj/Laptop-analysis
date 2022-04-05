import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import './Dashboard.css'
const Dashboard = () => {
    
    // console.log(month.sell)
    // console.log(sell.month)

    return (
        <div className='chart '>
            
            <MyLineChart className="line-chart"></MyLineChart>
            
            <MyBarChart></MyBarChart>
            
        </div>
    );
};

export default Dashboard;