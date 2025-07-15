import React, { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Download, RotateCcw, Sparkles, User } from "lucide-react";
import { mockData } from "../utils/mockData";
import { useToast } from "../hooks/use-toast";

const PersonalityCards = () => {
  const [selectedPersonality, setSelectedPersonality] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const cardRef = useRef(null);
  const { toast } = useToast();

  const generateRandomPersonality = () => {
    setIsGenerating(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const randomPersonality = mockData.personalityTypes[
        Math.floor(Math.random() * mockData.personalityTypes.length)
      ];
      setSelectedPersonality(randomPersonality);
      setIsGenerating(false);
      
      toast({
        title: "Đã tạo card tính cách!",
        description: `Bạn là ${randomPersonality.name}`,
      });
    }, 2000);
  };

  const downloadCard = () => {
    toast({
      title: "Tính năng đang phát triển",
      description: "Chức năng tải xuống sẽ sớm có trong phiên bản tiếp theo!",
    });
  };

  return (
    <div className="transform transition-all duration-500">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-light text-white mb-2">Tạo Card Tính Cách</h2>
          <p className="text-white/70 text-sm">
            AI sẽ phân tích tính cách của bạn và tạo ra card đẹp mắt để chia sẻ
          </p>
        </div>
      </div>

      {/* Generate Button */}
      <div className="flex justify-center mb-8">
        <Button
          onClick={generateRandomPersonality}
          disabled={isGenerating}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {isGenerating ? (
            <>
              <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Đang phân tích...
            </>
          ) : (
            <>
              <RotateCcw className="w-5 h-5 mr-2" />
              Tạo Card Tính Cách
            </>
          )}
        </Button>
      </div>

      {/* Generated Card */}
      {selectedPersonality && (
        <div className="space-y-6">
          {/* Card Preview */}
          <div className="flex justify-center">
            <div 
              ref={cardRef}
              className={`w-80 h-96 rounded-3xl relative overflow-hidden shadow-2xl ${selectedPersonality.gradient} border-2 ${selectedPersonality.borderColor}`}
              style={{ 
                background: selectedPersonality.background 
              }}
            >
              {/* Card Content */}
              <div className="h-full flex flex-col justify-between p-8 relative">
                {/* Title */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                    {selectedPersonality.name}
                  </h3>
                </div>

                {/* Silhouette */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-black/30 flex items-center justify-center">
                    <User className="w-16 h-16 text-black/60" />
                  </div>
                </div>

                {/* Quote */}
                <div className="text-center mb-6">
                  <p className="text-white/90 text-sm italic leading-relaxed">
                    {selectedPersonality.quote}
                  </p>
                </div>

                {/* Button */}
                <div className="text-center">
                  <div className={`inline-block px-6 py-2 rounded-full border-2 ${selectedPersonality.borderColor} bg-transparent`}>
                    <span className="text-white text-sm font-medium">
                      KHÁM PHÁ BẢN THÂN
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-4">
                  <p className="text-white/60 text-xs">
                    Tại WhoIsMe.AI bằng AI
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center">
            <Button
              onClick={downloadCard}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Tải xuống Card
            </Button>
          </div>

          {/* Personality Details */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-white text-lg font-medium mb-4 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Chi tiết về {selectedPersonality.name}
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-white/80 font-medium mb-2">Đặc điểm nổi bật:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPersonality.traits.map((trait, index) => (
                    <Badge key={index} className="bg-white/10 text-white border-white/30">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-white/80 font-medium mb-2">Mô tả:</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {selectedPersonality.description}
                </p>
              </div>

              <div>
                <h4 className="text-white/80 font-medium mb-2">Lời khuyên:</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {selectedPersonality.advice}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Placeholder when no card is generated */}
      {!selectedPersonality && !isGenerating && (
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/20 border-dashed">
            <Sparkles className="w-16 h-16 text-white/40 mx-auto mb-4" />
            <p className="text-white/60 text-lg mb-2">Chưa có card nào được tạo</p>
            <p className="text-white/40 text-sm">
              Nhấn "Tạo Card Tính Cách" để AI phân tích và tạo card cho bạn
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalityCards;