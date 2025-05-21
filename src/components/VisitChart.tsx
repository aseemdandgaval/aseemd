import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

interface DataItem {
  name: string;
  value: number;
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1'];

export default function VisitChart() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    // TODO: Fetch real visit data from analytics API
    const dummy = [
      { name: 'USA', value: 120 },
      { name: 'India', value: 80 },
      { name: 'UK', value: 40 },
      { name: 'Canada', value: 30 }
    ];
    setData(dummy);
  }, []);

  return (
    <PieChart width={300} height={300}>
      <Pie
        dataKey="value"
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      >
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}