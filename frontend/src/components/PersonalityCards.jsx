import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Download, RotateCcw, Sparkles, User, Share2 } from "lucide-react";
import { mockData } from "../utils/mockData";
import { useToast } from "../hooks/use-toast";
import html2canvas from "html2canvas";

const PersonalityCards = () => {
  const [selectedPersonality, setSelectedPersonality] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const cardRef = useRef(null);
  const { toast } = useToast();

  // Auto-generate card when component mounts
  useEffect(() => {
    generateRandomPersonality();
  }, []);

  const generateRandomPersonality = () => {
    setIsGenerating(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const randomPersonality = mockData.personalityTypes[
        Math.floor(Math.random() * mockData.personalityTypes.length)
      ];
      setSelectedPersonality(randomPersonality);
      setIsGenerating(false);
      
      if (selectedPersonality) { // Only show toast if it's a regeneration
        toast({
          title: "Đã tạo card mới!",
          description: `Bạn là ${randomPersonality.name}`,
        });
      }
    }, 1500);
  };

  const shareCard = async () => {
    if (!selectedPersonality) {
      toast({
        title: "Lỗi",
        description: "Không có card để chia sẻ. Vui lòng thử lại.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSharing(true);
      
      toast({
        title: "Đang tạo ảnh để chia sẻ...",
        description: "Vui lòng đợi một chút.",
      });

      // Reuse the same card generation logic from download
      const getImageAsBase64 = (url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const dataURL = canvas.toDataURL('image/png');
            resolve(dataURL);
          };
          img.onerror = () => {
            resolve(url);
          };
          img.src = url;
        });
      };

      const base64Image = await getImageAsBase64(selectedPersonality.backgroundImage);
      
      // Create temp card for sharing
      const tempCard = document.createElement('div');
      tempCard.style.cssText = `
        width: 288px;
        height: 450px;
        position: fixed;
        top: -9999px;
        left: -9999px;
        border-radius: 24px;
        overflow: hidden;
        background-image: url(${base64Image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border: 2px solid;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      `;

      const borderColors = {
        'border-orange-400': '#fb923c',
        'border-green-400': '#4ade80',
        'border-purple-400': '#c084fc',
        'border-blue-400': '#60a5fa',
        'border-teal-400': '#2dd4bf',
        'border-gray-400': '#9ca3af'
      };
      tempCard.style.borderColor = borderColors[selectedPersonality.borderColor] || '#60a5fa';

      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2), transparent);
      `;

      const content = document.createElement('div');
      content.style.cssText = `
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 24px;
        position: relative;
        z-index: 10;
      `;

      const title = document.createElement('div');
      title.style.cssText = `text-align: center; padding-top: 16px;`;
      const titleText = document.createElement('h3');
      titleText.style.cssText = `
        font-size: 20px;
        font-weight: bold;
        color: white;
        margin: 0 0 8px 0;
        letter-spacing: 0.025em;
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      `;
      titleText.textContent = selectedPersonality.name;
      title.appendChild(titleText);

      const spacer = document.createElement('div');
      spacer.style.cssText = 'flex: 1;';

      const quote = document.createElement('div');
      quote.style.cssText = `text-align: center; margin-bottom: 24px; padding: 0 8px;`;
      const quoteText = document.createElement('p');
      quoteText.style.cssText = `
        color: white;
        font-size: 14px;
        font-style: italic;
        line-height: 1.5;
        margin: 0;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      `;
      quoteText.textContent = selectedPersonality.quote;
      quote.appendChild(quoteText);

      const button = document.createElement('div');
      button.style.cssText = `
        text-align: center;
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      `;
      const buttonDiv = document.createElement('div');
      buttonDiv.style.cssText = `
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 14px 24px;
        border-radius: 9999px;
        border: 2px solid ${borderColors[selectedPersonality.borderColor] || '#60a5fa'};
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        text-align: center;
        min-width: 200px;
        height: 44px;
        box-sizing: border-box;
      `;
      const buttonText = document.createElement('span');
      buttonText.style.cssText = `
        color: white;
        font-size: 14px;
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1;
        text-align: center;
        display: inline-block;
        white-space: nowrap;
        vertical-align: middle;
        margin: 0;
        padding: 0;
      `;
      buttonText.textContent = 'KHÁM PHÁ BẢN THÂN';
      buttonDiv.appendChild(buttonText);
      button.appendChild(buttonDiv);

      const footer = document.createElement('div');
      footer.style.cssText = `text-align: center; padding-bottom: 8px;`;
      const footerText = document.createElement('p');
      footerText.style.cssText = `
        color: rgba(255, 255, 255, 0.8);
        font-size: 12px;
        margin: 0;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      `;
      footerText.textContent = 'Tại WhoIsMe.AI bằng AI';
      footer.appendChild(footerText);

      content.appendChild(title);
      content.appendChild(spacer);
      content.appendChild(quote);
      content.appendChild(button);
      content.appendChild(footer);
      
      tempCard.appendChild(overlay);
      tempCard.appendChild(content);
      document.body.appendChild(tempCard);

      await new Promise(resolve => setTimeout(resolve, 1000));

      const canvas = await html2canvas(tempCard, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: false,
        allowTaint: true,
        logging: false,
        width: 288,
        height: 450,
        foreignObjectRendering: false,
      });

      document.body.removeChild(tempCard);

      // Convert canvas to blob
      const blob = await new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Failed to create blob'));
          }
        }, 'image/png', 1.0);
      });

      // Upload image to imgur for sharing
      const uploadToImgur = async (imageBlob) => {
        const formData = new FormData();
        formData.append('image', imageBlob);
        
        try {
          const response = await fetch('https://api.imgur.com/3/image', {
            method: 'POST',
            headers: {
              'Authorization': 'Client-ID 546c25a59c58ad7', // Public client ID
            },
            body: formData
          });
          
          const result = await response.json();
          if (result.success) {
            return result.data.link;
          } else {
            throw new Error('Upload failed');
          }
        } catch (error) {
          console.error('Imgur upload error:', error);
          return null;
        }
      };

      // Upload image to get shareable URL
      toast({
        title: "Đang upload ảnh...",
        description: "Vui lòng đợi để có thể chia sẻ.",
      });

      const imageUrl = await uploadToImgur(blob);
      
      if (!imageUrl) {
        // Fallback: Use base64 data URL
        const dataUrl = canvas.toDataURL('image/png', 1.0);
        
        // Try Web Share API with data URL
        if (navigator.share) {
          try {
            const file = new File([blob], `personality-card-${selectedPersonality.name.replace(/\s+/g, '-').toLowerCase()}.png`, {
              type: 'image/png',
            });
            
            await navigator.share({
              title: `Card Tính Cách: ${selectedPersonality.name}`,
              text: `Tôi là ${selectedPersonality.name}! ${selectedPersonality.quote}`,
              files: [file],
            });
            
            toast({
              title: "Chia sẻ thành công!",
              description: "Card đã được chia sẻ.",
            });
            return;
          } catch (error) {
            console.log('Web Share API failed, showing fallback options');
          }
        }
      }
      
      // Create share options with image URL
      const shareText = `Tôi là ${selectedPersonality.name}! ${selectedPersonality.quote}`;
      const shareUrl = window.location.href;
      const finalImageUrl = imageUrl || shareUrl; // Use app URL as fallback
      
      const shareOptions = [
        {
          name: 'Facebook',
          icon: '📘',
          url: imageUrl 
            ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imageUrl)}&quote=${encodeURIComponent(shareText)}`
            : `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
        },
        {
          name: 'Twitter',
          icon: '🐦',
          url: imageUrl 
            ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(imageUrl)}`
            : `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
        },
        {
          name: 'LinkedIn',
          icon: '💼',
          url: imageUrl 
            ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(imageUrl)}`
            : `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
        },
        {
          name: 'Pinterest',
          icon: '📌',
          url: imageUrl 
            ? `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(shareText)}`
            : `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareText)}`,
        },
        {
          name: 'Telegram',
          icon: '✈️',
          url: imageUrl 
            ? `https://t.me/share/url?url=${encodeURIComponent(imageUrl)}&text=${encodeURIComponent(shareText)}`
            : `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
        },
        {
          name: 'WhatsApp',
          icon: '💬',
          url: imageUrl 
            ? `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + imageUrl)}`
            : `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
        },
        {
          name: 'Copy link ảnh',
          icon: '📋',
          action: 'copy',
          data: imageUrl || shareUrl,
        },
      ];

      // Show share modal or dropdown
      const shareModal = document.createElement('div');
      shareModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      `;

      const shareContent = document.createElement('div');
      shareContent.style.cssText = `
        background: white;
        padding: 24px;
        border-radius: 16px;
        max-width: 400px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
      `;

      const shareTitle = document.createElement('h3');
      shareTitle.style.cssText = `
        margin: 0 0 16px 0;
        font-size: 18px;
        font-weight: 600;
        color: #1f2937;
        text-align: center;
      `;
      shareTitle.textContent = 'Chia sẻ card tính cách';

      const shareButtons = document.createElement('div');
      shareButtons.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 12px;
      `;

      shareOptions.forEach(option => {
        const btn = document.createElement('button');
        btn.style.cssText = `
          padding: 12px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          background: white;
          color: #374151;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        `;
        btn.textContent = option.name;
        
        btn.addEventListener('click', () => {
          if (option.action === 'copy') {
            navigator.clipboard.writeText(shareUrl);
            toast({
              title: "Đã copy link!",
              description: "Link đã được copy vào clipboard.",
            });
          } else {
            window.open(option.url, '_blank', 'width=600,height=400');
          }
          document.body.removeChild(shareModal);
        });
        
        btn.addEventListener('mouseenter', () => {
          btn.style.backgroundColor = '#f9fafb';
          btn.style.borderColor = '#d1d5db';
        });
        
        btn.addEventListener('mouseleave', () => {
          btn.style.backgroundColor = 'white';
          btn.style.borderColor = '#e5e7eb';
        });
        
        shareButtons.appendChild(btn);
      });

      const closeBtn = document.createElement('button');
      closeBtn.style.cssText = `
        margin-top: 16px;
        padding: 8px 16px;
        background: #6b7280;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        width: 100%;
        font-size: 14px;
      `;
      closeBtn.textContent = 'Đóng';
      closeBtn.addEventListener('click', () => {
        document.body.removeChild(shareModal);
      });

      shareContent.appendChild(shareTitle);
      shareContent.appendChild(shareButtons);
      shareContent.appendChild(closeBtn);
      shareModal.appendChild(shareContent);
      document.body.appendChild(shareModal);

      // Close modal when clicking outside
      shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) {
          document.body.removeChild(shareModal);
        }
      });

      toast({
        title: "Chọn nền tảng chia sẻ",
        description: "Chọn nền tảng bạn muốn chia sẻ card.",
      });

    } catch (error) {
      console.error("Share error:", error);
      toast({
        title: "Lỗi chia sẻ",
        description: "Không thể chia sẻ card. Vui lòng thử lại.",
        variant: "destructive",
      });
    } finally {
      setIsSharing(false);
    }
  };

  const downloadCard = async () => {
    if (!cardRef.current || !selectedPersonality) {
      toast({
        title: "Lỗi",
        description: "Không thể tải xuống card. Vui lòng thử lại.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsDownloading(true);
      
      toast({
        title: "Đang tạo ảnh...",
        description: "Vui lòng đợi một chút.",
      });

      // Function to convert image to base64
      const getImageAsBase64 = (url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const dataURL = canvas.toDataURL('image/png');
            resolve(dataURL);
          };
          img.onerror = () => {
            // Fallback: use original URL if conversion fails
            resolve(url);
          };
          img.src = url;
        });
      };

      // Convert background image to base64
      const base64Image = await getImageAsBase64(selectedPersonality.backgroundImage);

      // Create a temporary card element for rendering
      const tempCard = document.createElement('div');
      tempCard.style.cssText = `
        width: 288px;
        height: 450px;
        position: fixed;
        top: -9999px;
        left: -9999px;
        border-radius: 24px;
        overflow: hidden;
        background-image: url(${base64Image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        border: 2px solid;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      `;

      // Set border color based on personality
      const borderColors = {
        'border-orange-400': '#fb923c',
        'border-green-400': '#4ade80',
        'border-purple-400': '#c084fc',
        'border-blue-400': '#60a5fa',
        'border-teal-400': '#2dd4bf',
        'border-gray-400': '#9ca3af'
      };
      tempCard.style.borderColor = borderColors[selectedPersonality.borderColor] || '#60a5fa';

      // Create overlay
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2), transparent);
      `;

      // Create content container
      const content = document.createElement('div');
      content.style.cssText = `
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 24px;
        position: relative;
        z-index: 10;
      `;

      // Create title
      const title = document.createElement('div');
      title.style.cssText = `
        text-align: center;
        padding-top: 16px;
      `;
      const titleText = document.createElement('h3');
      titleText.style.cssText = `
        font-size: 20px;
        font-weight: bold;
        color: white;
        margin: 0 0 8px 0;
        letter-spacing: 0.025em;
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      `;
      titleText.textContent = selectedPersonality.name;
      title.appendChild(titleText);

      // Create spacer
      const spacer = document.createElement('div');
      spacer.style.cssText = 'flex: 1;';

      // Create quote
      const quote = document.createElement('div');
      quote.style.cssText = `
        text-align: center;
        margin-bottom: 24px;
        padding: 0 8px;
      `;
      const quoteText = document.createElement('p');
      quoteText.style.cssText = `
        color: white;
        font-size: 14px;
        font-style: italic;
        line-height: 1.5;
        margin: 0;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      `;
      quoteText.textContent = selectedPersonality.quote;
      quote.appendChild(quoteText);

      // Create button
      const button = document.createElement('div');
      button.style.cssText = `
        text-align: center;
        margin-bottom: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      `;
      const buttonDiv = document.createElement('div');
      buttonDiv.style.cssText = `
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 14px 24px;
        border-radius: 9999px;
        border: 2px solid ${borderColors[selectedPersonality.borderColor] || '#60a5fa'};
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(4px);
        text-align: center;
        min-width: 200px;
        height: 44px;
        box-sizing: border-box;
      `;
      const buttonText = document.createElement('span');
      buttonText.style.cssText = `
        color: white;
        font-size: 14px;
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1;
        text-align: center;
        display: inline-block;
        white-space: nowrap;
        vertical-align: middle;
        margin: 0;
        padding: 0;
      `;
      buttonText.textContent = 'KHÁM PHÁ BẢN THÂN';
      buttonDiv.appendChild(buttonText);
      button.appendChild(buttonDiv);

      // Create footer
      const footer = document.createElement('div');
      footer.style.cssText = `
        text-align: center;
        padding-bottom: 8px;
      `;
      const footerText = document.createElement('p');
      footerText.style.cssText = `
        color: rgba(255, 255, 255, 0.8);
        font-size: 12px;
        margin: 0;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      `;
      footerText.textContent = 'Tại WhoIsMe.AI bằng AI';
      footer.appendChild(footerText);

      // Assemble the card
      content.appendChild(title);
      content.appendChild(spacer);
      content.appendChild(quote);
      content.appendChild(button);
      content.appendChild(footer);
      
      tempCard.appendChild(overlay);
      tempCard.appendChild(content);
      document.body.appendChild(tempCard);

      // Wait for everything to be ready
      await new Promise(resolve => setTimeout(resolve, 1000));

      const canvas = await html2canvas(tempCard, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: false,
        allowTaint: true,
        logging: false,
        width: 288,
        height: 450,
        foreignObjectRendering: false,
      });

      // Clean up
      document.body.removeChild(tempCard);

      // Create download link
      const link = document.createElement("a");
      const fileName = `personality-card-${selectedPersonality.name.replace(/\s+/g, '-').toLowerCase()}.png`;
      link.download = fileName;
      link.href = canvas.toDataURL("image/png", 1.0);
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Tải xuống thành công!",
        description: `Card "${selectedPersonality.name}" đã được lưu vào máy của bạn.`,
      });
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Lỗi tải xuống",
        description: "Không thể tải xuống card. Vui lòng thử lại.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="transform transition-all duration-500">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-light text-white mb-2">Card Tính Cách</h2>
          <p className="text-white/70 text-sm">
            AI đã phân tích tính cách của bạn và tạo ra card đẹp mắt
          </p>
        </div>
      </div>

      {/* Loading State */}
      {isGenerating && (
        <div className="flex justify-center items-center mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mb-4"></div>
              <p className="text-white/80 text-sm">Đang phân tích tính cách...</p>
            </div>
          </div>
        </div>
      )}

      {/* Generated Card */}
      {selectedPersonality && !isGenerating && (
        <div className="space-y-6">
          {/* Card Preview */}
          <div className="flex justify-center">
            <div 
              ref={cardRef}
              className={`w-72 h-[450px] rounded-3xl relative overflow-hidden shadow-2xl border-2 ${selectedPersonality.borderColor}`}
              style={{
                backgroundImage: `url(${selectedPersonality.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Card Content */}
              <div className="h-full flex flex-col justify-between p-6 relative z-10">
                {/* Title */}
                <div className="text-center pt-4">
                  <h3 className="text-xl font-bold text-white mb-2 tracking-wide drop-shadow-lg">
                    {selectedPersonality.name}
                  </h3>
                </div>

                {/* Spacer for background image */}
                <div className="flex-1"></div>

                {/* Quote */}
                <div className="text-center mb-6">
                  <p className="text-white text-sm italic leading-relaxed drop-shadow-md px-2">
                    {selectedPersonality.quote}
                  </p>
                </div>

                {/* Button */}
                <div className="text-center mb-4">
                  <div className={`inline-block px-6 py-3 rounded-full border-2 ${selectedPersonality.borderColor} bg-black/30 backdrop-blur-sm`}>
                    <span className="text-white text-sm font-medium">
                      KHÁM PHÁ BẢN THÂN
                    </span>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center pb-2">
                  <p className="text-white/80 text-xs drop-shadow-sm">
                    Tại WhoIsMe.AI bằng AI
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <Button
              onClick={generateRandomPersonality}
              disabled={isGenerating}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Tạo Lại
            </Button>
            
            <Button
              onClick={shareCard}
              disabled={isSharing}
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {isSharing ? (
                <>
                  <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Đang chia sẻ...
                </>
              ) : (
                <>
                  <Share2 className="w-5 h-5 mr-2" />
                  Chia Sẻ
                </>
              )}
            </Button>
            
            <Button
              onClick={downloadCard}
              disabled={isDownloading}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {isDownloading ? (
                <>
                  <div className="w-5 h-5 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Đang tải...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Tải Xuống
                </>
              )}
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
    </div>
  );
};

export default PersonalityCards;