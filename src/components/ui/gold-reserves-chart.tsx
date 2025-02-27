"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartData {
  yearPeriod: string;
  goldReserves: number;
  president: string;
  goldPrice: number;
}

const chartData: ChartData[] = [
  { president: "Ferdinand Marcos", yearPeriod: "1980", goldReserves: 220.00, goldPrice: 850 },
  { president: "Ferdinand Marcos", yearPeriod: "1981", goldReserves: 230.00, goldPrice: 500 },
  { president: "Ferdinand Marcos", yearPeriod: "1982", goldReserves: 240.00, goldPrice: 450 },
  { president: "Ferdinand Marcos", yearPeriod: "1983", goldReserves: 250.00, goldPrice: 450 },
  { president: "Ferdinand Marcos", yearPeriod: "1984", goldReserves: 245.00, goldPrice: 360 },
  { president: "Ferdinand Marcos", yearPeriod: "1985", goldReserves: 240.00, goldPrice: 317 },
  { president: "Ferdinand Marcos", yearPeriod: "1986", goldReserves: 235.00, goldPrice: 367 },
  { president: "Corazon Aquino", yearPeriod: "1987", goldReserves: 240.00, goldPrice: 446 },
  { president: "Corazon Aquino", yearPeriod: "1988", goldReserves: 245.00, goldPrice: 436 },
  { president: "Corazon Aquino", yearPeriod: "1989", goldReserves: 250.00, goldPrice: 382 },
  { president: "Corazon Aquino", yearPeriod: "1990", goldReserves: 255.00, goldPrice: 385 },
  { president: "Corazon Aquino", yearPeriod: "1991", goldReserves: 253.00, goldPrice: 362 },
  { president: "Corazon Aquino", yearPeriod: "1992", goldReserves: 252.00, goldPrice: 343 },
  { president: "Fidel V. Ramos", yearPeriod: "1993", goldReserves: 250.00, goldPrice: 359 },
  { president: "Fidel V. Ramos", yearPeriod: "1994", goldReserves: 248.00, goldPrice: 384 },
  { president: "Fidel V. Ramos", yearPeriod: "1995", goldReserves: 245.00, goldPrice: 384 },
  { president: "Fidel V. Ramos", yearPeriod: "1996", goldReserves: 244.00, goldPrice: 387 },
  { president: "Fidel V. Ramos", yearPeriod: "1997", goldReserves: 243.00, goldPrice: 331 },
  { president: "Joseph Estrada", yearPeriod: "1998", goldReserves: 240.00, goldPrice: 294 },
  { president: "Joseph Estrada", yearPeriod: "1999", goldReserves: 230.00, goldPrice: 278 },
  { president: "Joseph Estrada", yearPeriod: "2000", goldReserves: 224.83, goldPrice: 279 },
  { president: "Gloria M. Arroyo", yearPeriod: "2001", goldReserves: 248.22, goldPrice: 271 },
  { president: "Gloria M. Arroyo", yearPeriod: "2002", goldReserves: 271.49, goldPrice: 309 },
  { president: "Gloria M. Arroyo", yearPeriod: "2003", goldReserves: 274.42, goldPrice: 363 },
  { president: "Gloria M. Arroyo", yearPeriod: "2004", goldReserves: 221.42, goldPrice: 409 },
  { president: "Gloria M. Arroyo", yearPeriod: "2005", goldReserves: 154.52, goldPrice: 444 },
  { president: "Gloria M. Arroyo", yearPeriod: "2006", goldReserves: 143.73, goldPrice: 603 },
  { president: "Gloria M. Arroyo", yearPeriod: "2007", goldReserves: 131.67, goldPrice: 695 },
  { president: "Gloria M. Arroyo", yearPeriod: "2008", goldReserves: 153.94, goldPrice: 872 },
  { president: "Gloria M. Arroyo", yearPeriod: "2009", goldReserves: 155.10, goldPrice: 972 },
  { president: "Gloria M. Arroyo", yearPeriod: "2010", goldReserves: 154.10, goldPrice: 1224 },
  { president: "Benigno Aquino III", yearPeriod: "2011", goldReserves: 159.14, goldPrice: 1571 },
  { president: "Benigno Aquino III", yearPeriod: "2012", goldReserves: 192.72, goldPrice: 1668 },
  { president: "Benigno Aquino III", yearPeriod: "2013", goldReserves: 193.51, goldPrice: 1411 },
  { president: "Benigno Aquino III", yearPeriod: "2014", goldReserves: 195.30, goldPrice: 1266 },
  { president: "Benigno Aquino III", yearPeriod: "2015", goldReserves: 195.91, goldPrice: 1160 },
  { president: "Rodrigo Duterte", yearPeriod: "2016", goldReserves: 196.34, goldPrice: 1250 },
  { president: "Rodrigo Duterte", yearPeriod: "2017", goldReserves: 196.36, goldPrice: 1257 },
  { president: "Rodrigo Duterte", yearPeriod: "2018", goldReserves: 197.92, goldPrice: 1268 },
  { president: "Rodrigo Duterte", yearPeriod: "2019", goldReserves: 197.93, goldPrice: 1392 },
  { president: "Rodrigo Duterte", yearPeriod: "2020", goldReserves: 188.78, goldPrice: 1769 },
  { president: "Rodrigo Duterte", yearPeriod: "2021", goldReserves: 158.81, goldPrice: 1798 },
  { president: "Ferdinand Marcos Jr.", yearPeriod: "2022", goldReserves: 157.72, goldPrice: 1800 },
  { president: "Ferdinand Marcos Jr.", yearPeriod: "2023", goldReserves: 159.05, goldPrice: 1900 },
  { president: "Ferdinand Marcos Jr.", yearPeriod: "2024 Q2", goldReserves: 132.65, goldPrice: 1950 },
  { president: "Ferdinand Marcos Jr.", yearPeriod: "2024 Q3", goldReserves: 128.12, goldPrice: 1950 }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700">
        <p className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 mb-2">{label}</p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
          President: <span className="font-medium">{payload[0].payload.president}</span>
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
          Gold Reserves: <span className="font-medium">{payload[0].value.toFixed(2)} MT</span>
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Gold Price: <span className="font-medium">${payload[0].payload.goldPrice}/oz</span>
        </p>
      </div>
    );
  }
  return null;
};

export function GoldReservesChart() {
  return (
    <div className="w-full mt-8 bg-white dark:bg-neutral-900 rounded-xl shadow-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100 text-center">
        Philippine Gold Reserves Trend (1980 – 2024 Q3)
      </h2>
      <div className="w-full h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 30, bottom: 25 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#666" opacity={0.15} />
            <XAxis
              dataKey="yearPeriod"
              angle={-45}
              textAnchor="end"
              height={60}
              tick={{ fill: '#666', fontSize: 12 }}
              tickLine={{ stroke: '#666' }}
              axisLine={{ stroke: '#666' }}
            />
            <YAxis
              label={{
                value: 'Gold Reserves (Metric Tons)',
                angle: -90,
                position: 'insideLeft',
                style: { fill: '#666', fontSize: 12, fontWeight: 500 }
              }}
              tick={{ fill: '#666', fontSize: 12 }}
              tickLine={{ stroke: '#666' }}
              axisLine={{ stroke: '#666' }}
            />
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
              dataKey="goldReserves"
              name="Gold Reserves"
              stroke="#FFD700"
              strokeWidth={2.5}
              dot={{
                fill: '#FFD700',
                stroke: '#B8860B',
                strokeWidth: 1.5,
                r: 4
              }}
              activeDot={{
                r: 7,
                fill: '#FFD700',
                stroke: '#B8860B',
                strokeWidth: 2
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}