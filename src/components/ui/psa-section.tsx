export function PSASection() {
  return (
    <section className="w-full mt-16 mb-8 px-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
          Dev Notes:
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">
            All the data and graphs presented herein are compiled from publicly available records and authoritative sources online. The information regarding the Philippines' national government debt, its annual growth rates, GDP growth rates, and related fiscal indicators is based on data published by recognized government agencies and international organizations. The public is encouraged to double-check the accuracy of the information using the following trusted sources:
          </p>
          <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <li>
              <a 
                href="https://www.treasury.gov.ph/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors underline"
              >
                Department of the Treasury – Philippines
              </a>
            </li>
            <li>
              <a 
                href="https://www.dof.gov.ph/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors underline"
              >
                Department of Finance – Philippines
              </a>
            </li>
            <li>
              <a 
                href="https://www.foi.gov.ph/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors underline"
              >
                Freedom of Information – Philippines
              </a>
            </li>
            <li>
              <a 
                href="https://www.bsp.gov.ph/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors underline"
              >
                Bangko Sentral ng Pilipinas (BSP)
              </a>
            </li>
            <li>
              <a 
                href="https://www.officialgazette.gov.ph/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors underline"
              >
                Official Gazette of the Republic of the Philippines
              </a>
            </li>
            <li>
              <a 
                href="https://www.imf.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors underline"
              >
                International Monetary Fund (IMF)
              </a>
            </li>
            <li>
              <a 
                href="https://www.adb.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors underline"
              >
                Asian Development Bank (ADB)
              </a>
            </li>
            <li>
              <a 
                href="https://data.worldbank.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors underline"
              >
                World Bank – Data
              </a>
            </li>
          </ul>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-4">
            These resources are widely recognized for their reliability and serve as a solid basis for verifying economic and fiscal data.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-6 italic">
            This is a personal side project but I am planning provide update and add more useful features in the future. If you have suggestions or feedback, please use the feedback button at the top. If you'd like to support server fees or buy me a coffee, you can do so here:
            <br /> <br></br>
            <a 
              href="https://buymeacoffee.com/kalmado420" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors underline"
            >
              <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                Buy me a coffee
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
} 