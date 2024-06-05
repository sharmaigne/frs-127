import { ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from 'react'
interface CardWrapperProps {
  title: string;
  children: ReactNode;
}


const CardWrapper = ({ title, children }: CardWrapperProps)  => {
  return (
    <Card className="bg-white dark:bg-gray-950 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {children}
      </CardContent>
    </Card>
  );
}
export default CardWrapper