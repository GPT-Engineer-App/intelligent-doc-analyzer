import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DocumentManagement = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Document Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            Manage documents here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentManagement;