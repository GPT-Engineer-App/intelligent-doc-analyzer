import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DocumentClassification = () => {
  const [documentClass, setDocumentClass] = useState('');
  const [criteria, setCriteria] = useState('');

  const handleAddClass = () => {
    // Logic to add document class
    console.log('Document Class:', documentClass);
    console.log('Criteria:', criteria);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Document Classification</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="documentClass">Document Class</Label>
              <Input
                id="documentClass"
                value={documentClass}
                onChange={(e) => setDocumentClass(e.target.value)}
                placeholder="Enter document class"
              />
            </div>
            <div>
              <Label htmlFor="criteria">Classification Criteria</Label>
              <Input
                id="criteria"
                value={criteria}
                onChange={(e) => setCriteria(e.target.value)}
                placeholder="Enter classification criteria"
              />
            </div>
            <Button onClick={handleAddClass}>Add Class</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentClassification;