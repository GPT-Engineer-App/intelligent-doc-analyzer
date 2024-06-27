import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            For any inquiries, please email us at support@portal.com.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;