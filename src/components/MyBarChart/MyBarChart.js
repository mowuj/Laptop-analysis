import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
const MyBarChart = () => {
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
        <BarChart
          width={600}
          height={400}
          data={datas}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip></Tooltip>
          <Legend />
          <Bar dataKey="sell" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
          <Bar dataKey="month" fill="#82ca9d" />
        </BarChart>
    )
};

export default MyBarChart;