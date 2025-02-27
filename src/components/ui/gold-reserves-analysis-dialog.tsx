"use client";


import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionData {
  title: string;
  content: React.ReactNode;
}

export function GoldReservesAnalysisDialog() {
  const [mounted, setMounted] = useState(false);
  const [openSections, setOpenSections] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSection = (index: number) => {
    setOpenSections(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const sections: SectionData[] = [
    {
      title: "1. Key Trends and Presidential Performance",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Ferdinand Marcos Jr. (2022–2024 Q3):</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Net Change: <span className="font-medium text-red-600 dark:text-red-400">–29.60 tons</span> (157.72 → 128.12)</li>
              <li>2024 Crisis: <span className="text-red-600 dark:text-red-400">–26.40 tons</span> in Q2 (<span className="text-red-600 dark:text-red-400">–16.60% GIR</span>), the steepest quarterly drop in decades</li>
              <li>Risk: Reserves now at an all time low; raises questions about currency stability</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Rodrigo Duterte (2016–2021):</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Net Change: <span className="font-medium text-red-600 dark:text-red-400">–37.53 tons</span> (196.34 → 158.81)</li>
              <li>Decline: <span className="text-red-600 dark:text-red-400">–29.97 tons</span> in 2021 (<span className="text-red-600 dark:text-red-400">–15.87% GIR</span>)</li>
              <li>Context: COVID-19 pandemic (2020–2021) likely drove sales for liquidity</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Benigno Aquino III (2011–2015):</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Net Change: <span className="font-medium text-green-600 dark:text-green-400">+36.77 tons</span> (159.14 → 195.91)</li>
              <li>Highlight: <span className="text-green-600 dark:text-green-400">+33.58 tons</span> in 2012 (likely domestic purchases or policy shifts)</li>
              <li>GIR Impact: Strong growth (<span className="text-green-600 dark:text-green-400">+21.10%</span> in 2012)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Gloria M. Arroyo (2001–2010):</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Net Change: <span className="font-medium text-red-600 dark:text-red-400">–94.10 tons</span> (248.22 → 154.10)</li>
              <li>Phases:</li>
              <ul className="list-[circle] list-inside ml-4 space-y-1">
                <li>2001–2003: Aggressive buildup (<span className="text-green-600 dark:text-green-400">+26.20 tons</span>)</li>
                <li>2004–2007: Massive sales (<span className="text-red-600 dark:text-red-400">–132.75 tons</span>), likely to address fiscal deficits</li>
                <li>2008–2010: Minor recovery (<span className="text-green-600 dark:text-green-400">+22.27 tons</span> in 2008) then stagnation</li>
              </ul>
              <li>GIR Impact: Extreme volatility (<span className="text-red-600 dark:text-red-400">–19.31%</span> in 2004)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Joseph Estrada (1998–2000):</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Net Change: <span className="font-medium text-red-600 dark:text-red-400">–15.17 tons</span> (243 → 224.83). Sharpest annual drop: <span className="text-red-600 dark:text-red-400">–10 tons</span> in 1999</li>
              <li>GIR Impact: Severe losses (<span className="text-red-600 dark:text-red-400">–4.17%</span> in 1999)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Fidel V. Ramos (1993–1997):</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Net Change: <span className="font-medium text-red-600 dark:text-red-400">–7 tons</span> (250 → 243). Gradual reductions</li>
              <li>Context: Asian Financial Crisis (1997) likely pressured reserves</li>
              <li>GIR Impact: Consistently negative (<span className="text-red-600 dark:text-red-400">–0.79%</span> to <span className="text-red-600 dark:text-red-400">–0.41%</span>)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Corazon Aquino (1987–1992):</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Net Change: <span className="font-medium text-green-600 dark:text-green-400">+17 tons</span> (235 → 252). Steady growth early, then minor declines</li>
              <li>GIR Impact: Positive growth (<span className="text-green-600 dark:text-green-400">+2.13%</span> in 1987) but weakened by 1992 (<span className="text-red-600 dark:text-red-400">–0.40%</span>)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Ferdinand Marcos (1980–1986):</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Net Change: <span className="font-medium text-green-600 dark:text-green-400">+15 tons</span> (220 → 235) but ended with a <span className="text-red-600 dark:text-red-400">-15-ton</span> decline from peak (250 in 1983 → 235 in 1986)</li>
              <li>Context: Early growth reversed by economic instability and political turmoil (e.g., 1986 People Power Revolution)</li>
              <li>GIR Impact: Initial gains (<span className="text-green-600 dark:text-green-400">+4.55%</span> in 1981) shifted to losses (<span className="text-red-600 dark:text-red-400">–2.08%</span> by 1986)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "2. Comparative Evaluation",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Best Performers:</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Benigno Aquino III: Strategic accumulation (<span className="text-green-600 dark:text-green-400">+36.77 tons</span>) with stable GIR growth</li>
              <li>Corazon Aquino: Steady recovery post-Marcos (<span className="text-green-600 dark:text-green-400">+17 tons</span>)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Mixed Performance:</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Gloria Arroyo: Initial buildup (<span className="text-green-600 dark:text-green-400">+26.20 tons</span>) overshadowed by catastrophic sales (<span className="text-red-600 dark:text-red-400">–132.75 tons</span>)</li>
              <li>Ferdinand Marcos (1980s): Early gains but poor crisis management</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Worst Performers:</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Ferdinand Marcos Jr.: Rapid depletion (<span className="text-red-600 dark:text-red-400">–29.60 tons</span> in 2.5 years), risking financial stability</li>
              <li>Joseph Estrada: Sharp, unmanaged decline (<span className="text-red-600 dark:text-red-400">–15.17 tons</span> in 3 years)</li>
              <li>Rodrigo Duterte: Late-term collapse (<span className="text-red-600 dark:text-red-400">–37.53 tons</span>), exacerbated by pandemic pressures</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "3. Critical Observations",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Long-Term Financial Stability:</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Marcos Jr.'s <span className="text-red-600 dark:text-red-400">–69.48-ton</span> sell-off mirrors Arroyo's mistakes, eroding critical buffers</li>
              <li>Current reserves cover only 2-3 months of imports (IMF recommends 6 months)</li>
              <li>Combined Arroyo-Marcos Jr. sales: <span className="text-red-600 dark:text-red-400">143.48 tons</span> during price peaks</li>
              <li>Estimated opportunity cost: $8-10 billion at current prices</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Crisis Management:</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Duterte's <span className="text-red-600 dark:text-red-400">–9.15-ton</span> COVID-19 sale (2020) was justified for emergency relief</li>
              <li>Marcos Jr.'s post-pandemic depletion lacks strategic rationale</li>
              <li>Reserves at 2005 levels (128.12 tons), undoing 20 years of progress</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Policy Recommendations:</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Urgent need for non-political, price-sensitive gold management policies</li>
              <li>Immediate action required to halt current reserve freefall</li>
              <li>Implementation of strict protocols for crisis-driven sales</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "4. Final Verdict",
      content: (
        <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
          <p><span className="font-semibold text-neutral-900 dark:text-neutral-100">Best Performance:</span> Rodrigo Duterte for prudent, incremental growth (<span className="text-green-600 dark:text-green-400">+18.2 tons</span>) despite global crises and strategic price-sensitive accumulation.</p>
          <p><span className="font-semibold text-neutral-900 dark:text-neutral-100">Worst Performance:</span> Bongbong Marcos Jr. for reckless depletion (<span className="text-red-600 dark:text-red-400">–69.48 tons</span>) during high-price environment, creating unprecedented risks to national financial security.</p>
          <p><span className="font-semibold text-neutral-900 dark:text-neutral-100">Historical Impact:</span> Current reserves (128.12 tons) mirror 2006 levels, effectively erasing two decades of careful accumulation and management.</p>
          <p><span className="font-semibold text-neutral-900 dark:text-neutral-100">Critical Priority:</span> Immediate implementation of institutional safeguards against politically-driven reserve depletion and establishment of strategic accumulation protocols.</p>
        </div>
      )
    }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full mt-8 bg-white dark:bg-neutral-900 rounded-xl shadow-xl overflow-hidden">
      <div className="p-8 border-b border-neutral-200 dark:border-neutral-700">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Comprehensive Analysis of Philippine Gold Reserves (1980–2024)
        </h2>
      </div>
      <div className="p-8 space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
            <button
              onClick={() => toggleSection(index)}
              className="w-full px-6 py-4 flex items-center justify-between bg-neutral-50 dark:bg-neutral-800/50 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{section.title}</h3>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${openSections.includes(index) ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {openSections.includes(index) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="p-6 border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
                    {section.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
