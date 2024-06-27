import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


const ChatbotTesting = () => {
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSendMessage = () => {
    // Logic to send message to chatbot and get response
    console.log('Chat Input:', chatInput);
    setChatResponse('Chatbot response based on input');
  };

  const handleFeedback = () => {
    // Logic to handle feedback
    console.log('Feedback:', feedback);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Chatbot Testing</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="chatInput">Chat Input</Label>
              <Textarea
                id="chatInput"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Enter your message"
              />
            </div>
            <Button onClick={handleSendMessage}>Send Message</Button>
            {chatResponse && <p>{chatResponse}</p>}
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

export default ChatbotTesting;