"use client";

import { useState } from 'react';
import React from 'react';

import { AlertTriangle } from 'lucide-react';

interface GoldReserveData {
  president: string;
  yearPeriod: string;
  goldReserves: number;
  totalChange: number | null;
  girPercentage: number | null;
  goldPrice: number;
}

const goldReservesData: GoldReserveData[] = [
  { president: "Ferdinand Marcos", yearPeriod: "1980", goldReserves: 220.00, totalChange: null, girPercentage: null, goldPrice: 850 },
  { president: "Ferdinand Marcos", yearPeriod: "1981", goldReserves: 230.00, totalChange: 10.00, girPercentage: 4.55, goldPrice: 500 },
  { president: "Ferdinand Marcos", yearPeriod: "1982", goldReserves: 240.00, totalChange: 10.00, girPercentage: 4.35, goldPrice: 450 },
  { president: "Ferdinand Marcos", yearPeriod: "1983", goldReserves: 250.00, totalChange: 10.00, girPercentage: 4.17, goldPrice: 450 },
  { president: "Ferdinand Marcos", yearPeriod: "1984", goldReserves: 245.00, totalChange: -5.00, girPercentage: -2.00, goldPrice: 360 },
  { president: "Ferdinand Marcos", yearPeriod: "1985", goldReserves: 240.00, totalChange: -5.00, girPercentage: -2.04, goldPrice: 317 },
  { president: "Ferdinand Marcos", yearPeriod: "1986", goldReserves: 235.00, totalChange: -5.00, girPercentage: -2.08, goldPrice: 367 },
  { president: "Corazon Aquino", yearPeriod: "1987", goldReserves: 240.00, totalChange: 5.00, girPercentage: 2.13, goldPrice: 446 },
  { president: "Corazon Aquino", yearPeriod: "1988", goldReserves: 245.00, totalChange: 5.00, girPercentage: 2.08, goldPrice: 436 },
  { president: "Corazon Aquino", yearPeriod: "1989", goldReserves: 250.00, totalChange: 5.00, girPercentage: 2.04, goldPrice: 382 },
  { president: "Corazon Aquino", yearPeriod: "1990", goldReserves: 255.00, totalChange: 5.00, girPercentage: 2.00, goldPrice: 385 },
  { president: "Corazon Aquino", yearPeriod: "1991", goldReserves: 253.00, totalChange: -2.00, girPercentage: -0.78, goldPrice: 362 },
  { president: "Corazon Aquino", yearPeriod: "1992", goldReserves: 252.00, totalChange: -1.00, girPercentage: -0.40, goldPrice: 343 },
  { president: "Fidel V. Ramos", yearPeriod: "1993", goldReserves: 250.00, totalChange: -2.00, girPercentage: -0.79, goldPrice: 359 },
  { president: "Fidel V. Ramos", yearPeriod: "1994", goldReserves: 248.00, totalChange: -2.00, girPercentage: -0.80, goldPrice: 384 },
  { president: "Fidel V. Ramos", yearPeriod: "1995", goldReserves: 245.00, totalChange: -3.00, girPercentage: -1.21, goldPrice: 384 },
  { president: "Fidel V. Ramos", yearPeriod: "1996", goldReserves: 244.00, totalChange: -1.00, girPercentage: -0.41, goldPrice: 387 },
  { president: "Fidel V. Ramos", yearPeriod: "1997", goldReserves: 243.00, totalChange: -1.00, girPercentage: -0.41, goldPrice: 331 },
  { president: "Joseph Estrada", yearPeriod: "1998", goldReserves: 240.00, totalChange: -3.00, girPercentage: -1.23, goldPrice: 294 },
  { president: "Joseph Estrada", yearPeriod: "1999", goldReserves: 230.00, totalChange: -10.00, girPercentage: -4.17, goldPrice: 278 },
  { president: "Joseph Estrada", yearPeriod: "2000", goldReserves: 224.83, totalChange: -5.17, girPercentage: -2.25, goldPrice: 279 },
  { president: "Gloria M. Arroyo", yearPeriod: "2001", goldReserves: 248.22, totalChange: 23.39, girPercentage: 10.40, goldPrice: 271 },
  { president: "Gloria M. Arroyo", yearPeriod: "2002", goldReserves: 271.49, totalChange: 23.27, girPercentage: 9.37, goldPrice: 309 },
  { president: "Gloria M. Arroyo", yearPeriod: "2003", goldReserves: 274.42, totalChange: 2.93, girPercentage: 1.08, goldPrice: 363 },
  { president: "Gloria M. Arroyo", yearPeriod: "2004", goldReserves: 221.42, totalChange: -53.00, girPercentage: -19.31, goldPrice: 409 },
  { president: "Gloria M. Arroyo", yearPeriod: "2005", goldReserves: 154.52, totalChange: -66.90, girPercentage: -30.23, goldPrice: 444 },
  { president: "Gloria M. Arroyo", yearPeriod: "2006", goldReserves: 143.73, totalChange: -10.79, girPercentage: -6.98, goldPrice: 603 },
  { president: "Gloria M. Arroyo", yearPeriod: "2007", goldReserves: 131.67, totalChange: -12.06, girPercentage: -8.39, goldPrice: 695 },
  { president: "Gloria M. Arroyo", yearPeriod: "2008", goldReserves: 153.94, totalChange: 22.27, girPercentage: 16.92, goldPrice: 872 },
  { president: "Gloria M. Arroyo", yearPeriod: "2009", goldReserves: 155.10, totalChange: 1.16, girPercentage: 0.75, goldPrice: 972 },
  { president: "Gloria M. Arroyo", yearPeriod: "2010", goldReserves: 154.10, totalChange: -1.00, girPercentage: -0.64, goldPrice: 1224 },
  { president: "Benigno Aquino III", yearPeriod: "2011", goldReserves: 159.14, totalChange: 5.04, girPercentage: 3.27, goldPrice: 1571 },
  { president: "Benigno Aquino III", yearPeriod: "2012", goldReserves: 192.72, totalChange: 33.58, girPercentage: 21.10, goldPrice: 1668 },
  { president: "Benigno Aquino III", yearPeriod: "2013", goldReserves: 193.51, totalChange: 0.79, girPercentage: 0.41, goldPrice: 1411 },
  { president: "Benigno Aquino III", yearPeriod: "2014", goldReserves: 195.30, totalChange: 1.79, girPercentage: 0.93, goldPrice: 1266 },
  { president: "Benigno Aquino III", yearPeriod: "2015", goldReserves: 195.91, totalChange: 0.61, girPercentage: 0.31, goldPrice: 1160 },
  { president: "Rodrigo Duterte", yearPeriod: "2016", goldReserves: 196.34, totalChange: 0.43, girPercentage: 0.22, goldPrice: 1250 },
  { president: "Rodrigo Duterte", yearPeriod: "2017", goldReserves: 196.36, totalChange: 0.02, girPercentage: 0.01, goldPrice: 1257 },
  { president: "Rodrigo Duterte", yearPeriod: "2018", goldReserves: 197.92, totalChange: 1.56, girPercentage: 0.79, goldPrice: 1268 },
  { president: "Rodrigo Duterte", yearPeriod: "2019", goldReserves: 197.93, totalChange: 0.01, girPercentage: 0.005, goldPrice: 1392 },
  { president: "Rodrigo Duterte", yearPeriod: "2020", goldReserves: 188.78, totalChange: -9.15, girPercentage: -4.63, goldPrice: 1769 },
  { president: "Rodrigo Duterte", yearPeriod: "2021", goldReserves: 158.81, totalChange: -29.97, girPercentage: -15.87, goldPrice: 1798 },
  { president: "Ferdinand Marcos Jr.", yearPeriod: "2022", goldReserves: 157.72, totalChange: -1.09, girPercentage: -0.69, goldPrice: 1800 },
  { president: "Ferdinand Marcos Jr.", yearPeriod: "2023", goldReserves: 159.05, totalChange: 1.33, girPercentage: 0.84, goldPrice: 1900 },
  { president: "Ferdinand Marcos Jr.", yearPeriod: "2024 Q2", goldReserves: 132.65, totalChange: -26.40, girPercentage: -16.60, goldPrice: 1950 },
  { president: "Ferdinand Marcos Jr.", yearPeriod: "2024 Q3", goldReserves: 128.12, totalChange: -4.53, girPercentage: -3.41, goldPrice: 1950 }
];

type SortKey = 'yearPeriod' | 'goldReserves' | 'totalChange' | 'girPercentage' | 'goldPrice';

export function GoldReservesTable(): React.ReactElement {
  const [sortKey, setSortKey] = useState<SortKey>('yearPeriod');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedData = [...goldReservesData].sort((a, b) => {
    const multiplier = sortOrder === 'asc' ? 1 : -1;
    const valueA = a[sortKey];
    const valueB = b[sortKey];

    if (valueA === null) return 1;
    if (valueB === null) return -1;
    return (valueA < valueB ? -1 : 1) * multiplier;
  });

  const formatNumber = (value: number | null, isPercentage = false) => {
    if (value === null) return '—';
    const formatted = Math.abs(value).toFixed(2);
    const sign = value < 0 ? '–' : value > 0 ? '+' : '';
    return `${sign}${formatted}${isPercentage ? '%' : ''}`;
  };

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div className="overflow-x-auto">
          <div className="overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-200/50 hover:scrollbar-thumb-neutral-300/70 dark:scrollbar-thumb-neutral-600/50 dark:hover:scrollbar-thumb-neutral-500/70 transition-colors">
            <table className="w-full border-collapse bg-white dark:bg-neutral-900">
              <thead className="sticky top-0 z-10 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm shadow-sm">
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <th className="px-6 py-4 text-left text-sm font-medium tracking-wider text-neutral-500 dark:text-neutral-400 uppercase">
                    President
                  </th>
                  <th 
                    className="px-6 py-4 text-left text-sm font-medium tracking-wider text-neutral-500 dark:text-neutral-400 uppercase cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    onClick={() => handleSort('yearPeriod')}
                  >
                    <div className="flex items-center space-x-1">
                      <span>Year/Period</span>
                      <span className="text-neutral-400 dark:text-neutral-500">{sortKey === 'yearPeriod' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</span>
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-right text-sm font-medium tracking-wider text-neutral-500 dark:text-neutral-400 uppercase cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    onClick={() => handleSort('goldReserves')}
                  >
                    <div className="flex items-center justify-end space-x-1">
                      <span>Gold Reserves (MT)</span>
                      <span className="text-neutral-400 dark:text-neutral-500">{sortKey === 'goldReserves' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</span>
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-right text-sm font-medium tracking-wider text-neutral-500 dark:text-neutral-400 uppercase cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    onClick={() => handleSort('totalChange')}
                  >
                    <div className="flex items-center justify-end space-x-1">
                      <span>Δ Change</span>
                      <span className="text-neutral-400 dark:text-neutral-500">{sortKey === 'totalChange' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</span>
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-right text-sm font-medium tracking-wider text-neutral-500 dark:text-neutral-400 uppercase cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    onClick={() => handleSort('girPercentage')}
                  >
                    <div className="flex items-center justify-end space-x-1">
                      <span>GIR %</span>
                      <span className="text-neutral-400 dark:text-neutral-500">{sortKey === 'girPercentage' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</span>
                    </div>
                  </th>
                  <th 
                    className="px-6 py-4 text-right text-sm font-medium tracking-wider text-neutral-500 dark:text-neutral-400 uppercase cursor-pointer hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                    onClick={() => handleSort('goldPrice')}
                  >
                    <div className="flex items-center justify-end space-x-1">
                      <span>Gold Price (USD/oz)</span>
                      <span className="text-neutral-400 dark:text-neutral-500">{sortKey === 'goldPrice' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((row, index) => (
                  <tr 
                    key={`${row.president}-${row.yearPeriod}`}
                    className={`${index % 2 === 0 ? 'bg-white dark:bg-neutral-900' : 'bg-neutral-50 dark:bg-neutral-800/50'} border-t border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors`}
                  >
                    <td className="px-6 py-4 text-sm text-neutral-900 dark:text-neutral-100">
                      {row.president}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-900 dark:text-neutral-100">
                      {row.yearPeriod}
                    </td>
                    <td className="px-6 py-4 text-sm text-right relative group">
                      <div className="inline-flex items-center justify-end space-x-2 px-3 py-1.5 rounded-md transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800">
                        {row.goldReserves === 128.12 ? (
                          <div 
                            className="inline-flex items-center space-x-2.5 cursor-help"
                            onMouseEnter={() => setTooltipVisible(true)}
                            onMouseLeave={() => setTooltipVisible(false)}
                          >
                            <AlertTriangle className="h-4.5 w-4.5 text-amber-500 opacity-90" />
                            <span className="text-xl font-bold tracking-wide text-amber-500 dark:text-amber-400 font-mono">
                              {row.goldReserves.toFixed(2)}
                            </span>
                            {tooltipVisible && (
                              <div className="absolute z-50 w-80 p-4 bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm rounded-lg shadow-lg border border-neutral-200/80 dark:border-neutral-700/80 -left-[12rem] top-0 transition-all duration-150">
                                <div className="flex flex-col space-y-3">
                                  <div className="flex items-start space-x-2.5">
                                    <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                    <h4 className="text-lg font-semibold text-amber-500/90">Critical Point Alert</h4>
                                  </div>
                                  <p className="text-sm leading-relaxed text-left text-neutral-700 dark:text-neutral-300">
                                    We've reached a historic low in gold reserves - levels we haven't seen since 2007.
                                  </p>
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className={`text-xl font-bold tracking-wide font-mono ${row.totalChange === null ? 'text-neutral-900 dark:text-neutral-100' : row.totalChange > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                            {row.goldReserves.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-right">
                      <span
                        className={`px-2 py-1 rounded font-medium ${row.totalChange === null ? 'text-neutral-500' : row.totalChange > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}
                      >
                        {formatNumber(row.totalChange)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-right">
                      <span
                        className={`px-2 py-1 rounded font-medium ${row.girPercentage === null ? 'text-neutral-500' : row.girPercentage > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}
                      >
                        {formatNumber(row.girPercentage, true)}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-right text-neutral-900 dark:text-neutral-100">
                      ${row.goldPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}