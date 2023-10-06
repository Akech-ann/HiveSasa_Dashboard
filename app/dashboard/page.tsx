'use client'
import React from 'react';
import Layout from '../component/Layout';
import Dashboards from '../component/HumTemp';
import Overview from '../component/Overview';
import Graphs from '../component/Graphs';
import Display from '../component/Display';
const Landingpage: React.FC = () => {
  return (
    <Layout>
    <div className="space-y-4 ">
      <Dashboards />
      <Overview />
       <Graphs/>
      <Display/>
    </div>
    </Layout>
  );
};
export default Landingpage;