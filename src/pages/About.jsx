import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">
            This portal is designed to help you manage documents and chatbots efficiently.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;