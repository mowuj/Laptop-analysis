import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    
     const [datas, setDatas] = useState([]);
    useEffect(() => {
        axios.get('data.json')
            .then(data => {
                const loadedData = data.data;
                const laptopData = loadedData.map(laptop => {
                    const sell=laptop.sell
                    const month = laptop.month;
                    const investment=laptop.investment
                    const revenue=laptop.revenue
                    const lp = {
                        month: month,
                        sell: sell,
                        investment: investment,
                        revenue:revenue
                    };
                    return lp;
                })
                setDatas(laptopData)
                
        })
    },[])
    return (
        <div>
            <LineChart width={600} height={400} data={datas}>
    <Line type="monotone" dataKey={"sell"} stroke="#8884d8"/>
    <Line type="monotone"  dataKey={"investment"} />
                <XAxis dataKey="month"></XAxis>
                <Tooltip></Tooltip>
    <YAxis></YAxis>
  </LineChart>
        </div>
    );
};

export default MyLineChart;