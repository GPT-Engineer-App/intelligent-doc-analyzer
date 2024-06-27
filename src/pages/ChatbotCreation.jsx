import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ChatbotCreation = () => {
  const [knowledgeBase, setKnowledgeBase] = useState(null);
  const [personality, setPersonality] = useState('');
  const [name, setName] = useState('');
  const [knowledgeScope, setKnowledgeScope] = useState('');

  const handleUploadKnowledgeBase = (e) => {
    const file = e.target.files[0];
    setKnowledgeBase(file);
    // Logic to handle knowledge base upload
    console.log('Uploaded knowledge base:', file);
  };

  const handleSaveChatbot = () => {
    // Logic to save chatbot details
    console.log('Chatbot Name:', name);
    console.log('Personality:', personality);
    console.log('Knowledge Scope:', knowledgeScope);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[600px]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">Chatbot Creation</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="knowledgeBase">Upload Knowledge Base</Label>
              <Input
                id="knowledgeBase"
                type="file"
                onChange={handleUploadKnowledgeBase}
              />
            </div>
            <div>
              <Label htmlFor="name">Chatbot Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter chatbot name"
              />
            </div>
            <div>
              <Label htmlFor="personality">Chatbot Personality</Label>
              <Textarea
                id="personality"
                value={personality}
                onChange={(e) => setPersonality(e.target.value)}
                placeholder="Define chatbot personality"
              />
            </div>
            <div>
              <Label htmlFor="knowledgeScope">Knowledge Scope</Label>
              <Textarea
                id="knowledgeScope"
                value={knowledgeScope}
                onChange={(e) => setKnowledgeScope(e.target.value)}
                placeholder="Define knowledge scope"
              />
            </div>
            <Button onClick={handleSaveChatbot}>Save Chatbot</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatbotCreation;