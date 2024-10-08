"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Message = {
  id: number;
  sender: string;
  content: string;
  timestamp: Date;
};

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'John Doe', content: 'Hello, how can I help you today?', timestamp: new Date() },
    { id: 2, sender: 'You', content: 'I have a question about our latest project.', timestamp: new Date() },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const message: Message = {
        id: messages.length + 1,
        sender: 'You',
        content: newMessage,
        timestamp: new Date(),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] border rounded-lg overflow-hidden">
      <ScrollArea className="flex-grow p-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'You' ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`flex ${message.sender === 'You' ? 'flex-row-reverse' : 'flex-row'} items-start`}>
              <Avatar className="w-8 h-8">
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${message.sender}`} />
                <AvatarFallback>{message.sender[0]}</AvatarFallback>
              </Avatar>
              <div className={`mx-2 ${message.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200'} rounded-lg p-2 max-w-xs`}>
                <p>{message.content}</p>
                <span className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  );
}