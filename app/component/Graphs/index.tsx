'use client'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

const Graphs: React.FC = () => {
  const dailyData = [
    { name: '4', Humidity: 30, Temperature: 15 },
    { name: '8', Humidity: 40, Temperature: 16 },
    { name: '12', Humidity: 35, Temperature: 21 },
    { name: '16', Humidity: 45, Temperature: 23 },
    { name: '20', Humidity: 50, Temperature: 20 },
    { name: '24', Humidity: 45, Temperature: 27 },
  ];

  return (
    <div className="w-1/2 flex flex-col">
      <div className='w-screen'>
        <h3 className=" text-custom-orange font-bold text-2xl ml-96 mt-4 ">Humidity and Temperature</h3>
      </div>
      <div className="flex ">
        <div className="bg-white mt-6 p-8 rounded-lg border border-gray-400 ml-96  ">
          <LineChart width={500} height={300} data={dailyData}>
            <XAxis dataKey="name">
              <Label value="Hours" offset={-2} position="insideBottom" />
            </XAxis>
            <YAxis>
              <Label value="% Celsius" offset={0} position="left" angle={-90} />
            </YAxis>
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Line type="basis" dataKey="Humidity" stroke="#F59B22" name="Humidity" />
            <Line type="basis" dataKey="Temperature" stroke="#422503" name="Temperature" />
          </LineChart>
        </div>
        <div className="bg-white mt-6 p-8 rounded-lg border border-gray-400 ml-4 ">
          <LineChart width={500} height={300} data={dailyData}>
            <XAxis dataKey="name">
              <Label value="Hours" offset={-2} position="insideBottom" />
            </XAxis>
            <YAxis>
              <Label value="% Celsius" offset={0} position="left" angle={-90} />
            </YAxis>
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Humidity" stroke="#F59B22" name="Humidity" />
            <Line type="monotone" dataKey="Temperature" stroke="#422503" name="Temperature" />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Graphs;

