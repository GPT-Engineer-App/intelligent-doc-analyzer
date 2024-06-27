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
          <Button onClick={handleGenerateReport}>Generate Report</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reporting;