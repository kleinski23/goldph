"use client";

import { useEffect } from 'react';

interface AdSenseProps {
  style?: React.CSSProperties;
  className?: string;
}

export function AdSense({ style, className }: AdSenseProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client="ca-pub-2420188449608292"
      data-ad-slot="YOUR_AD_SLOT_ID" // Replace with your ad slot ID
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
} 