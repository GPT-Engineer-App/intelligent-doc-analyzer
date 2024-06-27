import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const RuleCreation = () => {
  const [rule, setRule] = useState('');
  const [validationResult, setValidationResult] = useState('');

  const handleValidateRule = () => {
    // Logic to validate rule
    console.log('Rule:', rule);
    setValidationResult('Validation successful');
  };

  const handleSaveRule = () => {
    // Logic to save rule
    console.log('Rule saved:', rule);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Rule Creation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="rule">Data Extraction Rule</Label>
              <Textarea
                id="rule"
                value={rule}
                onChange={(e) => setRule(e.target.value)}
                placeholder="Enter data extraction rule"
              />
            </div>
            <Button onClick={handleValidateRule}>Validate Rule</Button>
            {validationResult && <p>{validationResult}</p>}
            <Button onClick={handleSaveRule}>Save Rule</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RuleCreation;