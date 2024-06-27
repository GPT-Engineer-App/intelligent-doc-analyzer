import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UserManagement = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">User Management</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            Manage users here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagement;