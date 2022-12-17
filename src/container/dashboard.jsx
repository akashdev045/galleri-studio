import React from 'react';
import Header from '../components/Header';
import CategoriessContainer from '../components/CategoriessContainer';
import './dashboard.scss';
import ScrollableBannerImages from '../components/ScrollableBannerImages';

function Dashboard() {
  return (
    <div className="dashboard">
        <Header />
        <CategoriessContainer />
        <h3>
            Brands in Highlight
        </h3>
        <ScrollableBannerImages />
    </div>
  );
}

export default Dashboard;
