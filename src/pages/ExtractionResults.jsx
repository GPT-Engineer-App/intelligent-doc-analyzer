import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExtractionResults = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Extraction Results</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            View and correct extraction results here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExtractionResults;