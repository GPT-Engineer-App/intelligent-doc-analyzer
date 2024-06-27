import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const NetworkTesting = () => {
  const [testDocument, setTestDocument] = useState(null);
  const [extractedData, setExtractedData] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleUploadDocument = (e) => {
    const file = e.target.files[0];
    setTestDocument(file);
    // Logic to handle document upload
    console.log('Uploaded document:', file);
  };

  const handleViewExtractedData = () => {
    // Logic to view extracted data
    setExtractedData('Extracted data based on defined rules');
  };

  const handleFeedback = () => {
    // Logic to handle feedback
    console.log('Feedback:', feedback);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Network Testing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="testDocument">Upload Test Document</Label>
              <Input
                id="testDocument"
                type="file"
                onChange={handleUploadDocument}
              />
            </div>
            <Button onClick={handleViewExtractedData}>View Extracted Data</Button>
            {extractedData && <p>{extractedData}</p>}
            <div>
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter feedback"
              />
            </div>
            <Button onClick={handleFeedback}>Submit Feedback</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NetworkTesting;