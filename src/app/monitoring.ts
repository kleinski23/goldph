export function reportWebVitals(metric: any) {
  if (metric.label === 'web-vital') {
    console.log(metric) // Send to your analytics service
  }
} 