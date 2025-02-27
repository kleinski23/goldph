"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionData {
  title: string;
  content: React.ReactNode;
}

export function NationalDebtAnalysisDialog() {
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
      title: "1. Overview & Long-Term Trends",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Long-Term Expansion (1986-2024):</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Total Growth: <span className="font-medium text-red-600 dark:text-red-400">40-fold increase</span> (₱395,509M to ₱16.05T)</li>
              <li>Current Status: <span className="text-red-600 dark:text-red-400">₱16.05 trillion</span> (2024)</li>
              <li>Growth Pattern: Exponential increase with crisis-driven spikes</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Growth Rate Dynamics:</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Normal Range: <span className="text-neutral-600 dark:text-neutral-400">6-10%</span> annual growth</li>
              <li>Crisis Peaks: Up to <span className="text-red-600 dark:text-red-400">26.7%</span> (2020, COVID-19)</li>
              <li>Recent Trend: Sustained double-digit growth since 2020</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">GDP vs. Debt Growth:</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>GDP Growth Range: <span className="text-green-600 dark:text-green-400">3-7%</span> (1986-2024)</li>
              <li>Debt-GDP Divergence: Widening gap post-2020</li>
              <li>Fiscal Space: Increasingly constrained by debt service</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "2. Recent Presidential Periods Analysis",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Ferdinand Marcos Jr. (2022-2024):</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Debt Growth: <span className="text-red-600 dark:text-red-400">14.4%</span> (2022) to <span className="text-red-600 dark:text-red-400">9.8%</span> (2024)</li>
              <li>Total Debt: Reached <span className="text-red-600 dark:text-red-400">₱16.05 trillion</span> by 2024</li>
              <li>GDP Growth: Maintained at <span className="text-green-600 dark:text-green-400">6.0-6.5%</span></li>
              <li>Key Concern: Aggressive borrowing despite economic recovery</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Rodrigo Duterte (2016-2021):</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Peak Growth: <span className="text-red-600 dark:text-red-400">26.7%</span> (2020, COVID-19 crisis)</li>
              <li>Crisis Impact: <span className="text-red-600 dark:text-red-400">19.7%</span> growth in 2021</li>
              <li>Pre-Crisis: Moderate increases of <span className="text-neutral-600 dark:text-neutral-400">9-9.6%</span> (2017-2018)</li>
              <li>GDP Performance: Dropped to <span className="text-red-600 dark:text-red-400">3.0%</span> during crisis</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Historical Comparison:</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Best Period: Benigno Aquino III (2011-2015) - Balanced debt growth with GDP</li>
              <li>Worst Period: COVID-19 years (2020-2021) - Extreme debt growth vs. GDP</li>
              <li>Current Trend: Continued high borrowing under Marcos Jr.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "3. Risks and Sustainability Analysis",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Fiscal Sustainability:</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Debt-to-GDP Ratio: <span className="text-red-600 dark:text-red-400">64.1%</span> (2024)</li>
              <li>International Standard: 60% threshold for developing economies</li>
              <li>Regional Standing: Above ASEAN average of <span className="text-neutral-600 dark:text-neutral-400">50.6%</span></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Risk Factors:</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>Debt Service Burden: Rising cost of debt maintenance</li>
              <li>Fiscal Space: Limited room for new investments</li>
              <li>Economic Growth: Need for higher growth to sustain debt levels</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Crisis Impact Assessment:</h4>
            <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
              <li>COVID-19 Effect: Necessary but unsustainable borrowing spike</li>
              <li>Recovery Challenges: Balancing growth with debt management</li>
              <li>Future Risks: Potential constraints on fiscal flexibility</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "4. Societal Implications and Public Impact",
      content: (
        <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Household Economic Impact:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Tax Burden: Increased income and consumption taxes affecting disposable income</li>
              <li>Interest Rates: Higher borrowing costs for mortgages and personal loans</li>
              <li>Purchasing Power: Reduced spending capacity due to inflation pressures</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Public Services and Social Programs:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Healthcare: Reduced funding for public health facilities and programs</li>
              <li>Education: Limited resources for public schools and scholarships</li>
              <li>Infrastructure: Delayed maintenance and development of public facilities</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">Future Generation Burden:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>Debt Inheritance: Long-term payment obligations for current borrowing</li>
              <li>Economic Opportunities: Reduced investment in job-creating sectors</li>
              <li>Social Security: Potential cuts to pension and welfare programs</li>
            </ul>
          </div>
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
          National Debt Analysis: Trends, Risks, and Policy Implications
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