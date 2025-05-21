import React from 'react';
import VisitChart from '../components/VisitChart';

export default function Home() {
  return (
    <div>
      <h1 className="text-xl">Hello, I'm Aseem Dandgaval</h1>
      <p className="mt-2">Welcome to my personal portfolio!</p>
      <div className="mt-6">
        <h2 className="text-lg">Visitor Distribution</h2>
        <VisitChart />
      </div>
    </div>
  );
}