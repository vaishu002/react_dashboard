import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';


const data = [
  { date: '6/30/2024', orders: 1600, sales: 1400, avgOrderValue: 351 },
  { date: '7/6/2024', orders: 1200, sales: 1000, avgOrderValue: 351 },
  { date: '7/13/2024', orders: 800, sales: 500, avgOrderValue: 351 },
  { date: '7/20/2024', orders: 400, sales: 100, avgOrderValue: 351 },
  { date: '7/27/2024', orders: 2, sales: -1, avgOrderValue: 351 }, 
];

const LineChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        { }
        <YAxis
          yAxisId="left" 
          orientation="left"
          domain={[200, 1400]} 
          ticks={[-1, 0, 400, 800,1200, 1600]} 
        />
        { }
        <YAxis
          yAxisId="right"
          orientation="right"
          domain={[500, 1600]}  
          ticks={[ 400, 800, 1200, 1600]} 
        />
        <Tooltip />
        <Legend />
        { }
        <Line yAxisId="right" type="monotone" dataKey="orders" stroke="#f46535" dot={{ r: 6 }} strokeWidth={2} />
        { }
        <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#0ddcd5" dot={{ r: 6 }} strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;
