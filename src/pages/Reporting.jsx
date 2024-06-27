import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Reporting = () => {
  const handleGenerateReport = () => {
    // Logic to generate report
    console.log('Generating report...');
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Reporting</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button onClick={handleGenerateReport}>Generate Report</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reporting;