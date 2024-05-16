
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabsTriggerProps {
  value: string; 
  children: React.ReactNode;
  className?: string; 
}

const FaciTabs: React.FC<TabsTriggerProps> = ({ value, children, className = '' }) => {
  return (
    <TabsTrigger className={`bg-[#1C7B45] text-white hover:bg-[#155c34] font-libre-franklin ${className}`} value={value}>
      {children}
    </TabsTrigger>
  );
};

export default FaciTabs;
