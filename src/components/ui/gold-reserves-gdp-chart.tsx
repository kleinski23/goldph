"use client";

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';

interface ChartData {
  year: number;
  president: string;
  goldReserves: number;
  gdpGrowth: number;
  gir: number | null;
}

const chartData: ChartData[] = [
  { year: 1980, president: "Ferdinand Marcos", goldReserves: 220.00, gdpGrowth: 4.0, gir: null },
  { year: 1981, president: "Ferdinand Marcos", goldReserves: 230.00, gdpGrowth: 4.0, gir: 4.55 },
  { year: 1982, president: "Ferdinand Marcos", goldReserves: 240.00, gdpGrowth: 3.5, gir: 4.35 },
  { year: 1983, president: "Ferdinand Marcos", goldReserves: 250.00, gdpGrowth: 3.0, gir: 4.17 },
  { year: 1984, president: "Ferdinand Marcos", goldReserves: 245.00, gdpGrowth: 3.0, gir: -2.00 },
  { year: 1985, president: "Ferdinand Marcos", goldReserves: 240.00, gdpGrowth: 3.0, gir: -2.04 },
  { year: 1986, president: "Ferdinand Marcos", goldReserves: 235.00, gdpGrowth: 2.5, gir: -2.08 },
  { year: 1987, president: "Corazon Aquino", goldReserves: 240.00, gdpGrowth: 3.5, gir: 2.13 },
  { year: 1988, president: "Corazon Aquino", goldReserves: 245.00, gdpGrowth: 4.0, gir: 2.08 },
  { year: 1989, president: "Corazon Aquino", goldReserves: 250.00, gdpGrowth: 4.0, gir: 2.04 },
  { year: 1990, president: "Corazon Aquino", goldReserves: 255.00, gdpGrowth: 4.0, gir: 2.00 },
  { year: 1991, president: "Corazon Aquino", goldReserves: 253.00, gdpGrowth: 3.5, gir: -0.78 },
  { year: 1992, president: "Corazon Aquino", goldReserves: 252.00, gdpGrowth: 3.0, gir: -0.40 },
  { year: 1993, president: "Fidel V. Ramos", goldReserves: 250.00, gdpGrowth: 4.0, gir: -0.79 },
  { year: 1994, president: "Fidel V. Ramos", goldReserves: 248.00, gdpGrowth: 4.5, gir: -0.80 },
  { year: 1995, president: "Fidel V. Ramos", goldReserves: 245.00, gdpGrowth: 4.5, gir: -1.21 },
  { year: 1996, president: "Fidel V. Ramos", goldReserves: 244.00, gdpGrowth: 5.0, gir: -0.41 },
  { year: 1997, president: "Fidel V. Ramos", goldReserves: 243.00, gdpGrowth: 5.0, gir: -0.41 },
  { year: 1998, president: "Joseph Estrada", goldReserves: 240.00, gdpGrowth: 5.0, gir: -1.23 },
  { year: 1999, president: "Joseph Estrada", goldReserves: 230.00, gdpGrowth: 4.0, gir: -4.17 },
  { year: 2000, president: "Joseph Estrada", goldReserves: 224.83, gdpGrowth: 3.5, gir: -2.25 },
  { year: 2001, president: "Gloria M. Arroyo", goldReserves: 248.22, gdpGrowth: 3.0, gir: 10.40 },
  { year: 2002, president: "Gloria M. Arroyo", goldReserves: 271.49, gdpGrowth: 3.5, gir: 9.37 },
  { year: 2003, president: "Gloria M. Arroyo", goldReserves: 274.42, gdpGrowth: 4.0, gir: 1.08 },
  { year: 2004, president: "Gloria M. Arroyo", goldReserves: 221.42, gdpGrowth: 4.5, gir: -19.31 },
  { year: 2005, president: "Gloria M. Arroyo", goldReserves: 154.52, gdpGrowth: 5.0, gir: -30.23 },
  { year: 2006, president: "Gloria M. Arroyo", goldReserves: 143.73, gdpGrowth: 5.5, gir: -6.98 },
  { year: 2007, president: "Gloria M. Arroyo", goldReserves: 131.67, gdpGrowth: 6.0, gir: -8.39 },
  { year: 2008, president: "Gloria M. Arroyo", goldReserves: 153.94, gdpGrowth: 6.5, gir: 16.92 },
  { year: 2009, president: "Gloria M. Arroyo", goldReserves: 155.10, gdpGrowth: 4.5, gir: 0.75 },
  { year: 2010, president: "Gloria M. Arroyo", goldReserves: 154.10, gdpGrowth: 6.0, gir: -0.64 },
  { year: 2011, president: "Benigno Aquino III", goldReserves: 159.14, gdpGrowth: 6.5, gir: 3.27 },
  { year: 2012, president: "Benigno Aquino III", goldReserves: 192.72, gdpGrowth: 7.0, gir: 21.10 },
  { year: 2013, president: "Benigno Aquino III", goldReserves: 193.51, gdpGrowth: 6.5, gir: 0.41 },
  { year: 2014, president: "Benigno Aquino III", goldReserves: 195.30, gdpGrowth: 6.0, gir: 0.93 },
  { year: 2015, president: "Benigno Aquino III", goldReserves: 195.91, gdpGrowth: 6.0, gir: 0.31 },
  { year: 2016, president: "Rodrigo Duterte", goldReserves: 196.34, gdpGrowth: 6.5, gir: 0.22 },
  { year: 2017, president: "Rodrigo Duterte", goldReserves: 196.36, gdpGrowth: 6.5, gir: 0.01 },
  { year: 2018, president: "Rodrigo Duterte", goldReserves: 197.92, gdpGrowth: 6.5, gir: 0.79 },
  { year: 2019, president: "Rodrigo Duterte", goldReserves: 197.93, gdpGrowth: 6.0, gir: 0.005 },
  { year: 2020, president: "Rodrigo Duterte", goldReserves: 188.78, gdpGrowth: 3.0, gir: -4.63 },
  { year: 2021, president: "Rodrigo Duterte", goldReserves: 158.81, gdpGrowth: 5.5, gir: -15.87 },
  { year: 2022, president: "Ferdinand Marcos Jr.", goldReserves: 157.72, gdpGrowth: 6.0, gir: -0.69 },
  { year: 2023, president: "Ferdinand Marcos Jr.", goldReserves: 159.05, gdpGrowth: 6.0, gir: 0.84 },
  { year: 2024, president: "Ferdinand Marcos Jr.", goldReserves: 130.39, gdpGrowth: 6.5, gir: -18.0 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700">
        <p className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 mb-2">{label}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
          President: <span className="font-medium">{payload[0].payload.president}</span>
        </p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm text-neutral-600 dark:text-neutral-400 mb-1 last:mb-0">
            {entry.name}: <span className="font-medium">{entry.value?.toFixed(2) ?? 'N/A'}{entry.unit}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function GoldReservesGDPChart() {
  return (
    <div className="w-full mt-8 bg-white dark:bg-neutral-900 rounded-xl shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100 text-center">
        Philippine GDP Growth Rate (1980 – 2024)
      </h2>
      <div className="w-full h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#666" opacity={0.15} />
            <XAxis
              dataKey="year"
              tick={{ fill: '#666', fontSize: 12 }}
              tickLine={{ stroke: '#666' }}
              axisLine={{ stroke: '#666' }}
            />
            <YAxis
              tick={{ fill: '#666', fontSize: 12 }}
              tickLine={{ stroke: '#666' }}
              axisLine={{ stroke: '#666' }}
            >
              <Label
                value="GDP Growth Rate (%)"
                angle={-90}
                position="insideLeft"
                style={{ fill: '#666', fontSize: 12, fontWeight: 500 }}
              />
            </YAxis>
            <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: 'none' }} />
            <Legend 
              verticalAlign="top"
              height={36}
              wrapperStyle={{
                paddingBottom: '20px',
                fontSize: '14px'
              }}
            />
            <Line
              type="monotone"
              dataKey="gdpGrowth"
              name="GDP Growth"
              stroke="#4CAF50"
              strokeWidth={2.5}
              unit="%"
              dot={{
                fill: '#4CAF50',
                stroke: '#2E7D32',
                strokeWidth: 1.5,
                r: 4
              }}
              activeDot={{
                r: 7,
                fill: '#4CAF50',
                stroke: '#2E7D32',
                strokeWidth: 2
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const CustomBar = (props: any) => {
  const { fill, x, y, width, height, value } = props;
  const barFill = value && value < -10 ? '#f44336' : '#2196F3';
  
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={barFill}
      rx={2}
      ry={2}
    />
  );
};