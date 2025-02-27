"use client";

import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Line,
  Label
} from 'recharts';

interface DebtData {
  year: number;
  president: string;
  debt: number;
  growth: number | null;
  gdpGrowth: number;
}

const data: DebtData[] = [
  { year: 1986, president: "Corazon Aquino",       debt: 395509,  growth: null, gdpGrowth: 4.0 },
  { year: 1987, president: "Corazon Aquino",       debt: 442536,  growth: 11.9, gdpGrowth: 3.5 },
  { year: 1988, president: "Corazon Aquino",       debt: 472801,  growth: 6.8,  gdpGrowth: 4.0 },
  { year: 1989, president: "Corazon Aquino",       debt: 507586,  growth: 7.4,  gdpGrowth: 4.0 },
  { year: 1990, president: "Corazon Aquino",       debt: 600205,  growth: 18.2, gdpGrowth: 4.0 },
  { year: 1991, president: "Corazon Aquino",       debt: 672788,  growth: 12.1, gdpGrowth: 3.5 },
  { year: 1992, president: "Fidel V. Ramos",       debt: 870814,  growth: 29.4, gdpGrowth: 3.0 },
  { year: 1993, president: "Fidel V. Ramos",       debt: 1125892, growth: 29.3, gdpGrowth: 4.0 },
  { year: 1994, president: "Fidel V. Ramos",       debt: 1081155, growth: -4.0, gdpGrowth: 4.5 },
  { year: 1995, president: "Fidel V. Ramos",       debt: 1158622, growth: 7.2,  gdpGrowth: 4.5 },
  { year: 1996, president: "Fidel V. Ramos",       debt: 1155237, growth: -0.3, gdpGrowth: 5.0 },
  { year: 1997, president: "Fidel V. Ramos",       debt: 1350574, growth: 16.9, gdpGrowth: 5.0 },
  { year: 1998, president: "Joseph Estrada",       debt: 1496222, growth: 10.8, gdpGrowth: 5.0 },
  { year: 1999, president: "Joseph Estrada",       debt: 1775356, growth: 18.7, gdpGrowth: 4.0 },
  { year: 2000, president: "Joseph Estrada",       debt: 2166710, growth: 22.0, gdpGrowth: 3.5 },
  { year: 2001, president: "Gloria Macapagal-Arroyo", debt: 2384917, growth: 10.1, gdpGrowth: 3.0 },
  { year: 2002, president: "Gloria Macapagal-Arroyo", debt: 2815468, growth: 18.1, gdpGrowth: 3.5 },
  { year: 2003, president: "Gloria Macapagal-Arroyo", debt: 3355108, growth: 19.2, gdpGrowth: 4.0 },
  { year: 2004, president: "Gloria Macapagal-Arroyo", debt: 3811954, growth: 13.6, gdpGrowth: 4.5 },
  { year: 2005, president: "Gloria Macapagal-Arroyo", debt: 3888231, growth: 2.0,  gdpGrowth: 5.0 },
  { year: 2006, president: "Gloria Macapagal-Arroyo", debt: 3851506, growth: -0.9, gdpGrowth: 5.5 },
  { year: 2007, president: "Gloria Macapagal-Arroyo", debt: 3712487, growth: -3.6, gdpGrowth: 6.0 },
  { year: 2008, president: "Gloria Macapagal-Arroyo", debt: 4220903, growth: 13.7, gdpGrowth: 6.5 },
  { year: 2009, president: "Gloria Macapagal-Arroyo", debt: 4396640, growth: 4.2,  gdpGrowth: 4.5 },
  { year: 2010, president: "Gloria Macapagal-Arroyo", debt: 4718171, growth: 7.3,  gdpGrowth: 6.0 },
  { year: 2011, president: "Benigno Aquino III",   debt: 4951188,  growth: 4.9,  gdpGrowth: 6.5 },
  { year: 2012, president: "Benigno Aquino III",   debt: 5437104,  growth: 9.8,  gdpGrowth: 7.0 },
  { year: 2013, president: "Benigno Aquino III",   debt: 5681153,  growth: 4.5,  gdpGrowth: 6.5 },
  { year: 2014, president: "Benigno Aquino III",   debt: 5735242,  growth: 1.0,  gdpGrowth: 6.0 },
  { year: 2015, president: "Benigno Aquino III",   debt: 5954537,  growth: 3.8,  gdpGrowth: 6.0 },
  { year: 2016, president: "Rodrigo Duterte",      debt: 6090262,  growth: 2.3,  gdpGrowth: 6.5 },
  { year: 2017, president: "Rodrigo Duterte",      debt: 6652430,  growth: 9.2,  gdpGrowth: 6.5 },
  { year: 2018, president: "Rodrigo Duterte",      debt: 7292500,  growth: 9.6,  gdpGrowth: 6.5 },
  { year: 2019, president: "Rodrigo Duterte",      debt: 7731290,  growth: 6.0,  gdpGrowth: 6.0 },
  { year: 2020, president: "Rodrigo Duterte",      debt: 9795006,  growth: 26.7, gdpGrowth: 3.0 },
  { year: 2021, president: "Rodrigo Duterte",      debt: 11728549, growth: 19.7, gdpGrowth: 5.5 },
  { year: 2022, president: "Ferdinand Marcos Jr.", debt: 13418860, growth: 14.4, gdpGrowth: 6.0 },
  { year: 2023, president: "Ferdinand Marcos Jr.", debt: 14616267, growth: 8.9,  gdpGrowth: 6.0 },
  { year: 2024, president: "Ferdinand Marcos Jr.", debt: 16051302, growth: 9.8,  gdpGrowth: 6.5 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700">
        <p className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">{label}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
          President: {payload[0].payload.president}
        </p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm text-neutral-600 dark:text-neutral-400">
            {entry.name}: {typeof entry.value === 'number' ? entry.value.toLocaleString() : 'N/A'}
            {entry.name.includes('Growth') ? '%' : ''}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function DebtChart() {
  return (
    <div className="w-full mt-8 bg-white dark:bg-neutral-900 rounded-xl shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100 text-center">
        Philippines National Government Debt (1986–2024)
      </h2>
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 60, left: 30, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#666" opacity={0.15} />
            <XAxis
              dataKey="year"
              tick={{ fill: '#666', fontSize: 12 }}
              tickLine={{ stroke: '#666' }}
              axisLine={{ stroke: '#666' }}
            />
            <YAxis
              yAxisId="left"
              tick={{ fill: '#666', fontSize: 12 }}
              tickLine={{ stroke: '#666' }}
              axisLine={{ stroke: '#666' }}
            >
              <Label
                value="NG Debt (₱ Million)"
                angle={-90}
                position="insideLeft"
                style={{ fill: '#666', fontSize: 12, fontWeight: 500 }}
              />
            </YAxis>
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fill: '#666', fontSize: 12 }}
              tickLine={{ stroke: '#666' }}
              axisLine={{ stroke: '#666' }}
            >
              <Label
                value="Growth Rate (%)"
                angle={90}
                position="insideRight"
                style={{ fill: '#666', fontSize: 12, fontWeight: 500 }}
              />
            </YAxis>
            <Tooltip 
              content={<CustomTooltip />}
              wrapperStyle={{ outline: 'none' }}
            />
            <Legend 
              verticalAlign="top"
              height={36}
              wrapperStyle={{
                paddingBottom: '20px',
                fontSize: '14px'
              }}
            />
            <Bar
              yAxisId="left"
              dataKey="debt"
              name="NG Debt (₱ Million)"
              shape={<CustomBar />}
              barSize={24}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="growth"
              name="Debt Growth Rate (%)"
              stroke="#ff7300"
              strokeWidth={2.5}
              dot={{
                fill: '#ff7300',
                stroke: '#d35400',
                strokeWidth: 1.5,
                r: 4
              }}
              activeDot={{
                r: 7,
                fill: '#ff7300',
                stroke: '#d35400',
                strokeWidth: 2
              }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="gdpGrowth"
              name="GDP Growth Rate (%)"
              stroke="#22c55e"
              strokeWidth={2.5}
              dot={{
                fill: '#22c55e',
                stroke: '#16a34a',
                strokeWidth: 1.5,
                r: 4
              }}
              activeDot={{
                r: 7,
                fill: '#22c55e',
                stroke: '#16a34a',
                strokeWidth: 2
              }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const CustomBar = (props: any) => {
  const { x, y, width, height, payload } = props;
  let fill = '#8884d8'; // default color

  if (payload.president.includes('Marcos Jr.')) {
    fill = '#dc2626'; // red for Marcos Jr.
  } else if (payload.president.includes('Duterte')) {
    fill = '#22c55e'; // green for Duterte
  } else if (payload.president.includes('Aquino')) {
    fill = '#eab308'; // yellow for Aquino
  } else if (payload.president.includes('Macapagal-Arroyo')) {
    fill = '#3b82f6'; // blue for Macapagal-Arroyo
  } else if (payload.president.includes('Estrada')) {
    fill = '#d97706'; // dark pale orange for Estrada
  }

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      opacity={0.8}
      rx={2}
      ry={2}
    />
  );
};