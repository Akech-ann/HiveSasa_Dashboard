import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
} from 'recharts';
import useGetConditions from '../hooks/useGetConditions';
import { FaBell, FaUserAlt } from 'react-icons/fa';

const Chart: React.FC = () => {
  const { temp } = useGetConditions();
  // Initialize chart data state for daily and weekly views
  const [dailyChartData, setDailyChartData] = useState<any[]>([]);
  const [weeklyChartData, setWeeklyChartData] = useState<any[]>([]);
  const [activeButton, setActiveButton] = useState<'daily' | 'weekly'>('daily');
  useEffect(() => {
    // Function to filter and format data for daily and weekly views
    const formatData = (data: any[], groupBy: 'hour' | 'day') => {
      return data.map((item) => ({
        [groupBy]: groupBy === 'hour' ? new Date(item.time_stamp).getHours() : item.time_stamp,
        temperature: parseFloat(item.temperature),
        humidity: parseFloat(item.humidity),
      }));
    };
    // Set formatted data for daily and weekly views
    setDailyChartData(formatData(temp, 'hour'));
    setWeeklyChartData(formatData(temp, 'day'));
  }, [temp]);
  const handleButtonClick = (buttonType: 'daily' | 'weekly') => {
    setActiveButton(buttonType);
  };
  return (
    <div className="flex ml-60">
      <div className='icons fixed top-4 right-10 flex'>
        <FaUserAlt className='text-custom-color text-2xl mx-2' />
        <FaBell className='text-custom-color text-2xl mx-2' />
      </div>

      <div className="ml-[100px] flex flex-col items-left font-family-Poppins">
        <h1 className="text-4xl font-bold leading-[normal] mb-4 ml-24 text-[#422503] text-left">
          Beehive Conditions
        </h1>
        <p className="text-4xl -mt-2 mb-9 ml-24 text-base font-medium text-[#422503]">
          Humidity and Temperature Over Time
        </p>
        <div className="bg-white-200 p-4 font-semibold rounded-lg shadow-lg">
          <div className="flex justify-end space-x-2 -mt-32 mb-48">
            <button
              className={`rounded-full px-8 py-3 text-base font-medium border-0 border-[#603913]  ${
                activeButton === 'daily' ? 'bg-orange-500 text-white' : 'bg-white'
              }`}
              onClick={() => handleButtonClick('daily')}
            >
              Daily
            </button>
            <button
              className={`rounded-full font-medium text-base px-8 py-3  border-0 border-[#603913]  ${
                activeButton === 'weekly' ? 'bg-orange-500 text-white' : 'bg-white'
              }`}
              onClick={() => handleButtonClick('weekly')}
            >
              Weekly
            </button>
          </div>
          <LineChart
            className="mt-[-110px]"
            width={1200}
            height={630}
            data={activeButton === 'daily' ? dailyChartData : weeklyChartData}
          >
            <XAxis dataKey={activeButton === 'daily' ? 'hour' : 'day'}>
              <Label value={activeButton === 'daily' ? 'Hours' : 'Days'} position="insideBottom" dy={7} />
            </XAxis>
            <YAxis>
              <Label value="Degrees Celsius" angle={-90} position="insideLeft" />
            </YAxis>
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="humidity" stroke="#F59B22" className="mt-10" name="Humidity" />
            <Line type="monotone" dataKey="temperature" stroke="#422503" className="mt-10" name="Temperature" />
          </LineChart>
        </div>
        <style>
          {`
          .ml{
            padding-right:200px;
          }
          `}
        </style>
      </div>
    </div>
  );
};
export default Chart;