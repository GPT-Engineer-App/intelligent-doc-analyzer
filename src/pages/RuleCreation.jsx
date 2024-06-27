import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const RuleCreation = () => {
  const [rule, setRule] = useState('');
  const [validationResult, setValidationResult] = useState('');

  const handleValidateRule = async () => {
    // Updated logic to validate rule
    try {
      const response = await fetch('/api/validate-rule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rule }),
      });
      const result = await response.json();
      setValidationResult(result.message);
    } catch (error) {
      console.error('Error validating rule:', error);
      setValidationResult('Validation failed');
    }
  };

  const handleSaveRule = async () => {
    // Updated logic to save rule
    try {
      const response = await fetch('/api/save-rule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ rule }),
      });
      const result = await response.json();
      console.log('Rule saved:', result);
    } catch (error) {
      console.error('Error saving rule:', error);
    }
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
                className="border border-gray-300"
              />
            </div>
            <Button variant="primary" onClick={handleValidateRule}>Validate Rule</Button>
            {validationResult && <p className="text-green-500">{validationResult}</p>}
            <Button variant="secondary" onClick={handleSaveRule}>Save Rule</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RuleCreation;