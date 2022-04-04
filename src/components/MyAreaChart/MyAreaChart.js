import React from 'react';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyAreaChart = () => {
    
        const data = [
    {
        "month": "Mar",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
];
    return (
        <div>
            <AreaChart width={600} height={500} data={data}>
    <Area type="monotone" dataKey={"sell"} stackId="1" stroke="#8884d8" fill="#8884d8"/>
    <Area type="monotone" dataKey={"investment"} stackId="1" stroke="#82ca9d" fill="#82ca9d"/>
    <Area type="monotone"  dataKey={"revenue"} stackId="1" stroke="#ffc658" fill="#ffc658" />
                <XAxis dataKey="month"></XAxis>
                <Tooltip></Tooltip>
    <YAxis></YAxis>
  </AreaChart>
        </div>
    );
};

export default MyAreaChart;