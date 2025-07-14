import React, { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { mockData } from "../utils/mockData";
import { useToast } from "../hooks/use-toast";
import { Mic, MicOff, Image, Save, MessageCircle, Edit3, Info, Sparkles } from "lucide-react";
import ChatInterface from "./ChatInterface";
import InfoScreen from "./InfoScreen";

const Journal = () => {
  const [journalText, setJournalText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [currentMode, setCurrentMode] = useState("journal"); // "journal", "chat", or "info"
  const { toast } = useToast();

  const handleVoiceRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      // Mock voice recording - simulate recording for 3 seconds
      setTimeout(() => {
        setIsRecording(false);
        setJournalText(mockData.sampleJournalText);
        toast({
          title: "Ghi âm hoàn thành",
          description: "Văn bản đã được chuyển đổi thành công!",
        });
      }, 3000);
    } else {
      setIsRecording(false);
    }
  };

  const handleCreateImage = () => {
    if (!journalText.trim()) {
      toast({
        title: "Vui lòng nhập nội dung",
        description: "Hãy viết một số dòng để tạo ảnh.",
        variant: "destructive",
      });
      return;
    }

    // Mock image generation
    setTimeout(() => {
      setGeneratedImage(mockData.sampleGeneratedImage);
      toast({
        title: "Tạo ảnh thành công!",
        description: "Ảnh đã được tạo từ nội dung của bạn.",
      });
    }, 2000);
  };

  const handleSaveJournal = () => {
    if (!journalText.trim()) {
      toast({
        title: "Không có nội dung để lưu",
        description: "Hãy viết một số dòng trước khi lưu.",
        variant: "destructive",
      });
      return;
    }

    // Mock saving
    setTimeout(() => {
      toast({
        title: "Đã lưu nhật ký!",
        description: isPrivate ? "Nhật ký chỉ bạn có thể xem" : "Nhật ký đã được lưu",
      });
      setJournalText("");
      setGeneratedImage(null);
    }, 1000);
  };

  const handleModeSwitch = (mode) => {
    setCurrentMode(mode);
  };

  const getFooterText = () => {
    switch(currentMode) {
      case "journal":
        return "Một không gian riêng tư để bạn khám phá và thể hiện chính mình";
      case "chat":
        return "Trò chuyện với AI để khám phá sâu hơn về cảm xúc và suy nghĩ của bạn";
      case "info":
        return "Thông tin chi tiết về bản thân được phân tích từ nhật ký và cuộc trò chuyện";
      default:
        return "Một không gian riêng tư để bạn khám phá và thể hiện chính mình";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(120,200,255,0.2),transparent_60%)]"></div>
      
      {/* Stars */}
      <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-40 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-3000"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
              Hãy <span className="italic font-normal">viết</span> cho chính mình...
            </h1>
            
            {/* Mode toggle */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-full p-1 border border-white/20">
                <Button
                  onClick={() => handleModeSwitch("journal")}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    currentMode === "journal"
                      ? "bg-white/20 text-white shadow-lg"
                      : "bg-transparent text-white/70 hover:text-white"
                  }`}
                >
                  <Edit3 className="w-4 h-4 mr-2" />
                  Viết nhật ký
                </Button>
                <Button
                  onClick={() => handleModeSwitch("chat")}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    currentMode === "chat"
                      ? "bg-white/20 text-white shadow-lg"
                      : "bg-transparent text-white/70 hover:text-white"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Trò chuyện với AI
                </Button>
                <Button
                  onClick={() => handleModeSwitch("info")}
                  className={`px-4 py-2 rounded-full transition-all duration-300 ${
                    currentMode === "info"
                      ? "bg-white/20 text-white shadow-lg"
                      : "bg-transparent text-white/70 hover:text-white"
                  }`}
                >
                  <Info className="w-4 h-4 mr-2" />
                  Thông tin
                </Button>
              </div>
            </div>
          </div>

          {/* Journal Mode */}
          {currentMode === "journal" && (
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl transform transition-all duration-500">
              {/* Journal textarea */}
              <div className="mb-6">
                <Textarea
                  placeholder="Bạn có thể bắt đầu bằng cảm xúc, một suy nghĩ, hoặc một điều bạn muốn thấu hiểu..."
                  value={journalText}
                  onChange={(e) => setJournalText(e.target.value)}
                  className="min-h-[200px] bg-white/5 border-white/20 text-white placeholder:text-white/60 text-lg leading-relaxed resize-none focus:bg-white/10 transition-all duration-300"
                />
              </div>

              {/* Voice recording button */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Button
                    onClick={handleVoiceRecording}
                    className={`w-20 h-20 rounded-full transition-all duration-300 ${
                      isRecording
                        ? "bg-red-500 hover:bg-red-600 scale-110"
                        : "bg-white/20 hover:bg-white/30"
                    } border-2 border-white/30 shadow-lg`}
                    disabled={isRecording}
                  >
                    {isRecording ? (
                      <MicOff className="w-8 h-8 text-white" />
                    ) : (
                      <Mic className="w-8 h-8 text-white" />
                    )}
                  </Button>
                  
                  {/* Recording animation */}
                  {isRecording && (
                    <div className="absolute inset-0 rounded-full border-4 border-red-400 animate-ping"></div>
                  )}
                </div>
              </div>

              {/* Voice recording feedback text */}
              <div className="text-center mb-6">
                <p className="text-white/80 text-sm">
                  {isRecording 
                    ? "Đang ghi âm..." 
                    : "Cảm ơn bạn đã lắng nghe chính mình. Tôi luôn ở đây."
                  }
                </p>
              </div>

              {/* Generated image display */}
              {generatedImage && (
                <div className="mb-6 text-center">
                  <div className="bg-white/10 rounded-2xl p-4 inline-block">
                    <img 
                      src={generatedImage} 
                      alt="Generated from journal" 
                      className="max-w-full h-48 object-cover rounded-xl"
                    />
                  </div>
                </div>
              )}

              {/* Create image button */}
              <div className="flex justify-center mb-6">
                <Button
                  onClick={handleCreateImage}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Image className="w-5 h-5 mr-2" />
                  Tạo ảnh từ đoạn viết này
                </Button>
              </div>

              {/* Bottom controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Privacy checkbox */}
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="private"
                    checked={isPrivate}
                    onCheckedChange={setIsPrivate}
                    className="border-white/30 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                  />
                  <label
                    htmlFor="private"
                    className="text-sm text-white/80 cursor-pointer"
                  >
                    Chỉ mình tôi xem
                  </label>
                </div>

                {/* Save button */}
                <Button
                  onClick={handleSaveJournal}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Lưu nhật ký
                </Button>
              </div>
            </div>
          )}

          {/* Chat Mode */}
          {currentMode === "chat" && (
            <ChatInterface journalText={journalText} />
          )}

          {/* Info Mode */}
          {currentMode === "info" && (
            <InfoScreen />
          )}

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-white/60 text-sm">
              {getFooterText()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;