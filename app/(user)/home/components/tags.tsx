
import React from 'react';
import { Badge } from '@/components/ui/badge';

const badges = ["Library", "Sports", "Halls", "Other"];

const Tags = () => {
  return (
    <>
      {badges.map((label) => (
        <Badge 
          key={label} 
          className="hover:bg-gray-100/50 dark:hover:bg-gray-800/50" 
          variant="secondary"
        >
          {label}
        </Badge>
      ))}
    </>
  );
};

export default Tags;
