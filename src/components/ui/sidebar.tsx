"use client";

import { useState } from "react";
import { Button } from "./button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { AdSense } from "./adsense";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div 
      className={`fixed left-0 top-0 h-full bg-white dark:bg-neutral-900 shadow-lg transition-all duration-300 ${
        isCollapsed ? 'w-[50px]' : 'w-[300px]'
      }`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-neutral-900 shadow-md rounded-full"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <ChevronRightIcon className="h-4 w-4" />
        ) : (
          <ChevronLeftIcon className="h-4 w-4" />
        )}
      </Button>
      <div className="p-4 h-full">
        {!isCollapsed && (
          <div className="w-full h-full">
            <AdSense 
              className="block w-full h-full"
              style={{
                display: 'block',
                minHeight: '600px'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
} 