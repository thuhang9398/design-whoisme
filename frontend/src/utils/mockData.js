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