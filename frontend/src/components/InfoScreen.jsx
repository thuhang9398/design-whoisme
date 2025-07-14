import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { User, TrendingUp, Heart, AlertTriangle, Key, Target, Zap, Star } from "lucide-react";
import { mockData } from "../utils/mockData";

const InfoScreen = () => {
  const infoSections = mockData.personalInfo;

  const getIcon = (type) => {
    switch(type) {
      case "about": return <User className="w-5 h-5" />;
      case "research": return <TrendingUp className="w-5 h-5" />;
      case "strengths": return <Heart className="w-5 h-5" />;
      case "weaknesses": return <AlertTriangle className="w-5 h-5" />;
      case "confidence": return <Key className="w-5 h-5" />;
      case "improvement": return <Target className="w-5 h-5" />;
      case "development": return <Zap className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getGradient = (type) => {
    switch(type) {
      case "about": return "from-blue-500 to-purple-500";
      case "research": return "from-green-500 to-blue-500";
      case "strengths": return "from-pink-500 to-red-500";
      case "weaknesses": return "from-orange-500 to-yellow-500";
      case "confidence": return "from-purple-500 to-indigo-500";
      case "improvement": return "from-teal-500 to-green-500";
      case "development": return "from-indigo-500 to-purple-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div className="transform transition-all duration-500">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-light text-white mb-2">Hồ sơ cá nhân</h2>
          <p className="text-white/70 text-sm">
            Thông tin được phân tích từ nhật ký và cuộc trò chuyện của bạn
          </p>
        </div>
      </div>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {infoSections.map((section, index) => (
          <Card 
            key={index} 
            className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-3 text-white">
                <div className={`w-10 h-10 bg-gradient-to-r ${getGradient(section.type)} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {getIcon(section.type)}
                </div>
                <span className="text-lg font-medium">{section.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/80 text-sm leading-relaxed">
                {section.description}
              </p>
              
              {/* Tags if available */}
              {section.tags && (
                <div className="flex flex-wrap gap-2">
                  {section.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      className="bg-white/10 text-white border-white/30 hover:bg-white/20 transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Progress bar for certain sections */}
              {section.progress && (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-white/60">
                    <span>Mức độ phát triển</span>
                    <span>{section.progress}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${getGradient(section.type)} transition-all duration-1000 ease-out`}
                      style={{ width: `${section.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Bullet points if available */}
              {section.points && (
                <ul className="space-y-1 text-white/70 text-sm">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-2">
                      <span className="text-purple-300 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Card */}
      <div className="mt-8">
        <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg border-white/30">
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Star className="w-5 h-5" />
              </div>
              <span className="text-lg font-medium">Tổng kết</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-white/80 text-sm leading-relaxed">
              {mockData.personalInfo.find(item => item.type === "summary")?.description || 
              "Bạn là một người có nhiều suy nghĩ sâu sắc và khả năng tự nhận thức cao. Thông qua việc viết nhật ký và trò chuyện, bạn đang trên con đường phát triển bản thân tích cực. Hãy tiếp tục duy trì thói quen này để khám phá thêm nhiều điều thú vị về chính mình."}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoScreen;