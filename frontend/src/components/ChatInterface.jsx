import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send, Bot, User, Heart, Lightbulb, MessageCircle } from "lucide-react";
import { mockData } from "../utils/mockData";

const ChatInterface = ({ journalText }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initialize with welcome message
    setMessages([
      {
        id: 1,
        type: "ai",
        content: "Xin chào! Tôi là AI companion của bạn. Tôi ở đây để lắng nghe và giúp bạn khám phá những suy nghĩ, cảm xúc trong nhật ký. Bạn có muốn chia sẻ gì với tôi không?",
        timestamp: new Date()
      }
    ]);
  }, []);

  const generateAIResponse = (userMessage) => {
    const responses = mockData.aiResponses;
    
    // Simple keyword matching for more contextual responses
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('buồn') || lowerMessage.includes('khó khăn') || lowerMessage.includes('stress')) {
      return responses.emotional[Math.floor(Math.random() * responses.emotional.length)];
    } else if (lowerMessage.includes('mục tiêu') || lowerMessage.includes('tương lai') || lowerMessage.includes('ước mơ')) {
      return responses.motivational[Math.floor(Math.random() * responses.motivational.length)];
    } else if (lowerMessage.includes('nhật ký') || lowerMessage.includes('viết') || lowerMessage.includes('ghi')) {
      return responses.journaling[Math.floor(Math.random() * responses.journaling.length)];
    } else if (journalText && (lowerMessage.includes('phân tích') || lowerMessage.includes('nghĩ') || lowerMessage.includes('cảm xúc'))) {
      return responses.reflection[Math.floor(Math.random() * responses.reflection.length)];
    } else {
      return responses.general[Math.floor(Math.random() * responses.general.length)];
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newUserMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      const newAIMessage = {
        id: messages.length + 2,
        type: "ai",
        content: aiResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, newAIMessage]);
      setIsTyping(false);
    }, 1500 + Math.random() * 2000); // Random delay between 1.5-3.5 seconds
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "Hôm nay tôi cảm thấy thế nào?",
    "Tôi có thể cải thiện tâm trạng như thế nào?",
    "Phân tích cảm xúc trong nhật ký của tôi",
    "Cho tôi lời khuyên về việc viết nhật ký"
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden transform transition-all duration-500">
      {/* Chat header */}
      <div className="bg-white/5 border-b border-white/10 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-medium">AI Companion</h3>
            <p className="text-white/60 text-sm">Luôn sẵn sàng lắng nghe bạn</p>
          </div>
        </div>
      </div>

      {/* Messages area */}
      <div className="h-96 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                message.type === "user"
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-white/10 text-white border border-white/20"
              }`}
            >
              <div className="flex items-start space-x-2">
                {message.type === "ai" && (
                  <Bot className="w-4 h-4 mt-1 text-purple-300" />
                )}
                <div>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString('vi-VN', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
                {message.type === "user" && (
                  <User className="w-4 h-4 mt-1 text-blue-300" />
                )}
              </div>
            </div>
          </div>
        ))}
        
        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white/10 border border-white/20 px-4 py-3 rounded-2xl">
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4 text-purple-300" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-purple-300 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested questions */}
      {messages.length === 1 && (
        <div className="px-6 pb-4">
          <p className="text-white/60 text-sm mb-3">Câu hỏi gợi ý:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {suggestedQuestions.map((question, index) => (
              <Button
                key={index}
                onClick={() => setInputMessage(question)}
                className="bg-white/5 hover:bg-white/10 text-white text-sm border border-white/20 rounded-full px-4 py-2 transition-all duration-300"
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      )}

      {/* Input area */}
      <div className="bg-white/5 border-t border-white/10 p-6">
        <div className="flex space-x-3">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Chia sẻ suy nghĩ của bạn..."
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/15 transition-all duration-300"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isTyping}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;