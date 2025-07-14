export const mockData = {
  sampleJournalText: `Hôm nay tôi cảm thấy rất bình yên khi ngồi trong công viên. Ánh nắng chiều tà qua những tán lá khiến tôi nhận ra rằng đôi khi chúng ta cần tạm dừng lại để thở. Có lẽ hạnh phúc không phải là một đích đến mà là cách chúng ta nhìn nhận những khoảnh khắc nhỏ bé trong cuộc sống.

Tôi nghĩ về những giấc mơ mà mình đã từng có và nhận ra rằng chúng vẫn luôn ở đó, chỉ đang chờ thời điểm thích hợp để nở rộ. Có lẽ đây chính là lúc tôi cần dũng cảm hơn với chính mình.`,

  sampleGeneratedImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",

  savedJournals: [
    {
      id: 1,
      title: "Cảm xúc mùa thu",
      content: "Hôm nay tôi cảm thấy rất bình yên...",
      date: "2024-01-15",
      isPrivate: true,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      title: "Những suy nghĩ về tương lai",
      content: "Tôi thường tự hỏi mình sẽ ra sao trong 10 năm tới...",
      date: "2024-01-14",
      isPrivate: false,
      image: null
    }
  ],

  personalInfo: [
    {
      type: "about",
      title: "Về tôi",
      description: "Tôi là một người có khuynh hướng nội tâm, thích suy ngẫm và khám phá bản thân. Thông qua việc viết nhật ký, tôi đã nhận ra nhiều điều thú vị về cách mình nhìn nhận cuộc sống. Tôi tin rằng mỗi ngày đều mang đến cơ hội để phát triển và trở thành phiên bản tốt hơn của chính mình.",
      tags: ["Nội tâm", "Tự nhận thức", "Phát triển bản thân"],
      progress: 75
    },
    {
      type: "research",
      title: "Nghiên cứu phát triển",
      description: "Tôi thường xuyên nghiên cứu về tâm lý học, triết học và các phương pháp phát triển bản thân. Việc đọc sách, tham gia các khóa học online và thực hành meditation đã giúp tôi hiểu rõ hơn về cảm xúc và suy nghĩ của mình.",
      tags: ["Tâm lý học", "Triết học", "Meditation", "Đọc sách"],
      progress: 68
    },
    {
      type: "strengths",
      title: "Điểm mạnh",
      description: "Khả năng lắng nghe và thấu hiểu cảm xúc của bản thân và người khác. Tôi có thể nhìn nhận vấn đề từ nhiều góc độ khác nhau và tìm ra giải pháp sáng tạo. Sự kiên nhẫn và khả năng tự học hỏi cũng là những điểm mạnh của tôi.",
      points: [
        "Khả năng lắng nghe và thấu hiểu",
        "Tư duy sáng tạo và linh hoạt",
        "Kiên nhẫn trong học hỏi",
        "Khả năng tự phản ánh và cải thiện"
      ],
      progress: 82
    },
    {
      type: "weaknesses",
      title: "Điểm yếu",
      description: "Đôi khi tôi có xu hướng suy nghĩ quá nhiều về một vấn đề, dẫn đến việc trì hoãn quyết định. Tôi cũng thường khá khắt khe với bản thân và cần học cách tha thứ cho những sai lầm của mình. Việc thể hiện cảm xúc trước đông người vẫn là một thách thức.",
      points: [
        "Có xu hướng overthinking",
        "Khắt khe với bản thân",
        "Khó thể hiện cảm xúc công khai",
        "Đôi khi thiếu quyết đoán"
      ],
      progress: 45
    },
    {
      type: "confidence",
      title: "Chìa khóa tự tin",
      description: "Tự tin của tôi đến từ việc hiểu rõ bản thân và chấp nhận những điểm mạnh cũng như điểm yếu. Khi tôi viết nhật ký và suy ngẫm, tôi cảm thấy được kết nối với chính mình. Những thành tựu nhỏ hàng ngày và phản hồi tích cực từ người khác cũng giúp tôi tự tin hơn.",
      tags: ["Tự nhận thức", "Thành tựu nhỏ", "Phản hồi tích cực"],
      progress: 70
    },
    {
      type: "improvement",
      title: "Gợi ý cải thiện",
      description: "Tôi nên thực hành thêm các kỹ năng giao tiếp và thể hiện cảm xúc một cách tự nhiên hơn. Việc tham gia các hoạt động nhóm và thử thách bản thân với những việc mới sẽ giúp tôi phát triển thêm. Đồng thời, tôi cần học cách cân bằng giữa suy nghĩ và hành động.",
      points: [
        "Thực hành kỹ năng giao tiếp",
        "Tham gia hoạt động nhóm",
        "Thử thách bản thân với điều mới",
        "Cân bằng suy nghĩ và hành động"
      ],
      progress: 60
    },
    {
      type: "development",
      title: "Cốt lõi phát triển",
      description: "Phát triển bản thân là hành trình dài không có điểm dừng. Tôi tin rằng việc duy trì thói quen viết nhật ký, đọc sách và thực hành mindfulness sẽ giúp tôi không ngừng phát triển. Mục tiêu là trở thành một người cân bằng giữa lý trí và cảm xúc, có khả năng tạo ra tác động tích cực đến cuộc sống của mình và người xung quanh.",
      tags: ["Mindfulness", "Cân bằng", "Tác động tích cực"],
      progress: 78
    }
  ],

  aiResponses: {
    emotional: [
      "Tôi hiểu bạn đang trải qua thời gian khó khăn. Cảm xúc buồn bã là hoàn toàn bình thường và cần thiết. Hãy cho phép mình cảm nhận những cảm xúc này, nhưng nhớ rằng chúng sẽ qua đi. Bạn có muốn chia sẻ thêm về điều gì đang làm bạn khó chịu không?",
      "Stress là phản ứng tự nhiên của cơ thể. Thử thực hiện một vài cú thở sâu - hít vào 4 nhịp, giữ 4 nhịp, thở ra 6 nhịp. Điều gì đang khiến bạn cảm thấy căng thẳng nhất hiện tại?",
      "Tôi cảm nhận được sự lo lắng trong những gì bạn chia sẻ. Hãy nhớ rằng bạn đã vượt qua 100% những ngày khó khăn trước đây. Bạn mạnh mẽ hơn bạn nghĩ đấy."
    ],
    motivational: [
      "Ước mơ của bạn rất đáng trân trọng! Hãy chia nhỏ mục tiêu lớn thành những bước nhỏ hơn. Bước đầu tiên bạn có thể thực hiện ngay hôm nay là gì?",
      "Tương lai được tạo nên bởi những quyết định và hành động của hôm nay. Bạn đang đi đúng hướng rồi, chỉ cần kiên trì thôi. Điều gì tạo động lực cho bạn nhất?",
      "Mỗi chuyên gia đều từng là người mới bắt đầu. Hành trình ngàn dặm bắt đầu bằng một bước chân. Bạn đã có kế hoạch cụ thể nào chưa?"
    ],
    journaling: [
      "Viết nhật ký là một món quà tuyệt vời bạn dành cho chính mình. Nó giúp bạn xử lý cảm xúc, ghi lại kỷ niệm và hiểu bản thân sâu hơn. Bạn thích viết về chủ đề gì nhất?",
      "Việc ghi chép những suy nghĩ giúp não bộ tổ chức thông tin tốt hơn. Có bao giờ bạn đọc lại những dòng cũ và cảm thấy bất ngờ chưa?",
      "Nhật ký của bạn là cuộc trò chuyện thật lòng nhất với chính mình. Đừng lo về ngữ pháp hay chính tả - hãy để trái tim mình dẫn dắt ngòi bút."
    ],
    reflection: [
      "Từ những dòng bạn đã viết, tôi cảm nhận được... Bạn có muốn tôi phân tích sâu hơn về cảm xúc trong nhật ký không?",
      "Những suy nghĩ bạn chia sẻ thể hiện một người rất tâm tư và sâu sắc. Có điều gì trong đó bạn muốn khám phá thêm không?",
      "Tôi thấy bạn có nhiều insight hay trong cách nhìn nhận cuộc sống. Điều nào khiến bạn ấn tượng nhất khi viết những dòng này?"
    ],
    general: [
      "Tôi đang lắng nghe bạn. Bạn có muốn chia sẻ thêm về cảm xúc hiện tại không?",
      "Mỗi ngày đều mang đến những trải nghiệm mới. Điều gì đã khiến bạn suy ngẫm hôm nay?",
      "Bạn có thể kể cho tôi nghe về một khoảnh khắc đáng nhớ gần đây không?",
      "Cảm ơn bạn đã chia sẻ với tôi. Tôi luôn ở đây để lắng nghe và đồng hành cùng bạn."
    ]
  }
};