import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Integration = () => {
  const handleImportData = () => {
    // Logic to import data
    console.log('Importing data...');
  };

  const handleExportData = () => {
    // Logic to export data
    console.log('Exporting data...');
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Integration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button onClick={handleImportData}>Import Data</Button>
            <Button onClick={handleExportData}>Export Data</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Integration;