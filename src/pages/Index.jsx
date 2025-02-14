import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Welcome to the Portal</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            Use the navigation menu to explore the features of the portal.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;