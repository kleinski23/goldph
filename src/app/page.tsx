import { GoldReservesTable } from '@/components/ui/gold-reserves-table';
import { GoldReservesChart } from '@/components/ui/gold-reserves-chart';
import { GoldReservesGDPChart } from '@/components/ui/gold-reserves-gdp-chart';
import { GoldReservesAnalysisDialog } from '@/components/ui/gold-reserves-analysis-dialog';
import { DebtChart } from '@/components/ui/debt-chart';
import { ErrorBoundary } from '@/components/ui/error-boundary';
import { MarqueeDemo } from '@/components/ui/marquee-demo';
import { PSASection } from '@/components/ui/psa-section';
import { Header } from '@/components/ui/header';
import { Sidebar } from '@/components/ui/sidebar';
import { HeroSection } from '@/components/ui/hero-section';
import { Background } from '@/components/ui/background';
import { NationalDebtAnalysisDialog } from "@/components/ui/national-debt-analysis-dialog"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Background />
      <Header />
      <Sidebar />
      <div className="pl-[300px] transition-all duration-300"> {/* Changed from pr to pl */}
        <main className="max-w-[1400px] mx-auto p-8 pb-20 sm:p-20">
          <ErrorBoundary fallback={<div>Error loading hero</div>}>
            <HeroSection />
          </ErrorBoundary>
          <ErrorBoundary fallback={<div>Error loading table</div>}>
            <GoldReservesTable />
          </ErrorBoundary>
          <ErrorBoundary fallback={<div>Error loading chart</div>}>
            <GoldReservesChart />
          </ErrorBoundary>
          <ErrorBoundary fallback={<div>Error loading GDP chart</div>}>
            <GoldReservesGDPChart />
          </ErrorBoundary>
          <ErrorBoundary fallback={<div>Error loading analysis</div>}>
            <GoldReservesAnalysisDialog />
          </ErrorBoundary>
          <ErrorBoundary fallback={<div>Error loading debt chart</div>}>
            <DebtChart />
          </ErrorBoundary>
          <ErrorBoundary fallback={<div>Error loading national debt analysis</div>}>
            <NationalDebtAnalysisDialog />
          </ErrorBoundary>
          <ErrorBoundary fallback={<div>Error loading marquee</div>}>
            <MarqueeDemo />
          </ErrorBoundary>
          <ErrorBoundary fallback={<div>Error loading PSA</div>}>
            <PSASection />
          </ErrorBoundary>
        </main>
      </div>
    </div>
  );
}
