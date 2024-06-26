import React, { useEffect, useState } from 'react';
import BudgetReport from './BudgetReport';
import Cards from './Cards';
import './dashboard.css';
import News from './News';
import RecentActivity from './RecentActivity';
import RecentSales from './RecentSales';
import Reports from './Reports';
import TopSelling from './TopSelling';
import WebTraffic from './WebTraffic';

function Dashboard() {
  const [cards, setCards] = useState([])

  const fetchData = () => {
    fetch('http://localhost:4000/cards')
      .then(res => res.json())
      .then(data =>{
        setCards(data);
      })
      .catch(e => console.log(e.message));
  };
  
    useEffect(() => {
      fetchData();
    },  []);

  return (
    <section className='dashboard section'>
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                  <Cards />
                  <div className="col-12">
                    <Reports />
                  </div>
                  <div className="col-12">
                    <RecentSales />
                  </div>
                  <div className="col-12">
                    <TopSelling />
                  </div>
                </div>
            </div>
            <div className="col-lg-4">
                  <RecentActivity />
                  <BudgetReport />
                  <WebTraffic />
                  <News />
            </div>
        </div>
    </section>
  );
}

export default Dashboard