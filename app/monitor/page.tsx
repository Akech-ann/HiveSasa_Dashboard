'use client'
import React from 'react';
import Chart from '../Daily-Monitoring';
import Layout from '../component/Layout';

const MyChart: React.FC = () => {
  return (
    <Layout>
    <div className="p-4 space-y-4">
      <h1 className="text-xs font-medium bg-brown-500 text-[#F59B22]">MONITOR</h1>

    
    <Chart />
    </div>
    </Layout>
  );
};

export default MyChart;

