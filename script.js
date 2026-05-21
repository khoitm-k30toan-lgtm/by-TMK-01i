const questions = [
    {
        id: 1,
        question: "Đối tượng nghiên cứu của Tâm lý học giáo dục không bao gồm nội dung nào sau đây?",
        options: [
            "Sự phát triển tâm lý của người học, các điều kiện phát triển tâm lý trong quá trình dạy học và giáo dục.",
            "Bản chất hoạt động học tập của người học, những yếu tố tạo nên hiệu quả học tập.",
            "Những vấn đề liên quan đến việc hình thành các phẩm chất nhân cách, định hướng giá trị, hành vi đạo đức của người học.",
            "Toàn bộ những khó khăn tâm lý của con người trong quá trình hoạt động và giao tiếp."
        ],
        answer: 3 // d
    },
    {
        id: 2,
        question: "Thuyết nào sau đây cho rằng di truyền (những tiềm năng sinh vật bẩm sinh được mã hoá trong gen) là yếu tố đóng vai trò quyết định đối với sự phát triển tâm lý người?",
        options: [
            "Thuyết duy vật biện chứng",
            "Thuyết duy cảm",
            "Thuyết tiền định",
            "Thuyết hội tụ hai yếu tố"
        ],
        answer: 2 // c
    },
    {
        id: 3,
        question: "Bản chất của sự phát triển tâm lý trẻ em theo thuyết duy vật biện chứng là:",
        options: [
            "Quá trình tích luỹ dần về lượng của các hiện tượng tâm lý",
            "Biến đổi về chất trong các hoạt động tâm lý",
            "Tích luỹ về lượng của tri thức, kỹ năng",
            "Gia tăng về lượng của các hoạt động tâm lý"
        ],
        answer: 1 // b
    },
    {
        id: 4,
        question: "Các em học sinh ở cùng lứa tuổi nhưng lại có sự chênh lệch về tốc độ và mức độ phát triển tâm lý (nhận thức, tình cảm, ý chí…) là biểu hiện của quy luật nào?",
        options: [
            "Quy luật không đồng đều trong sự phát triển tâm lý cá nhân",
            "Quy luật đồng đều trong sự phát triển tâm lý cá nhân",
            "Quy luật toàn vẹn trong sự phát triển tâm lý cá nhân",
            "Quy luật mềm dèo và khả năng bù trừ trong sự phát triển tâm lý cá nhân"
        ],
        answer: 0 // a
    },
    {
        id: 5,
        question: "Trong sự phát triển tâm lý cá nhân, có những giai đoạn hội đủ điều kiện tối ưu cho sự phát triển một hiện tượng tâm lý nào đó một cách vượt trội gọi là?",
        options: [
            "Giai đoạn thuận lợi",
            "Giai đoạn bình ổn",
            "Giai đoạn phát cảm",
            "Giai đoạn khủng hoảng"
        ],
        answer: 2 // c
    },
    {
        id: 6,
        question: "Phát biểu chưa đúng về cấu tạo tâm lý mới đặc trưng cho lứa tuổi là?",
        options: [
            "Nét tâm lý lần đầu tiên xuất hiện ở giai đoạn lứa tuổi đó.",
            "Làm thay đổi bộ mặt nhân cách con người trong giai đoạn lứa tuổi ấy.",
            "Có sự khác biệt tâm lý về chất so với lứa tuổi trước.",
            "Có sự khác biệt về số lượng các hiện tượng tâm lý so với lứa tuổi trước."
        ],
        answer: 3 // d
    },
    {
        id: 7,
        question: "Dấu hiệu thể chất cơ bản để nhận biết trẻ đã bước sang tuổi thiếu niên là?",
        options: [
            "Tăng trưởng về chiều cao",
            "Tăng trưởng về cân nặng",
            "Hiện tượng dậy thì",
            "Tất cả đều sai"
        ],
        answer: 2 // c
    },
    {
        id: 8,
        question: "Hoạt động chủ đạo của lứa tuổi thiếu niên là?",
        options: [
            "Vui chơi, giải trí cùng bạn bè",
            "Giao tiếp mang tính cá nhân thân tình",
            "Sinh hoạt câu lạc bộ, đội nhóm",
            "Học tập – hướng nghiệp"
        ],
        answer: 1 // b
    },
    {
        id: 9,
        question: "Điều quan trọng mà giáo viên cần làm khi phát hiện học sinh có biểu hiện “yêu đương sớm”?",
        options: [
            "Giáo viên theo dõi thận trọng, dùng lời lẽ tế nhị để hướng dẫn, uốn nắn.",
            "Giáo viên theo dõi chặt chẽ, đối thoại trực tiếp, thẳng thắn với học sinh.",
            "Giáo viên theo dõi tình hình và liên tục báo tin cho phụ huynh giải quyết.",
            "Giáo viên nhắc nhở học sinh trước lớp, sau đó bỏ qua."
        ],
        answer: 0 // a
    },
    {
        id: 10,
        question: "Hoạt động nhận thức của học sinh THCS có đặc trưng nổi bật là:",
        options: [
            "Tính mục đích, tính độc lập trong tất cả các quá trình nhận thức",
            "Tính mục đích, tính chủ định trong tất cả các quá trình nhận thức",
            "Tính độc lập, tính chủ định trong tất cả các quá trình nhận thức",
            "Tính phê phán, tính sang tạo trong tất cả các quá trình nhận thức"
        ],
        answer: 1 // b
    },
    {
        id: 11,
        question: "Tư duy của thiếu niên không có đặc điểm nào sau đây?",
        options: [
            "Tư duy trừu tượng phát triển mạnh mẽ",
            "Khả năng suy luận tương đối hợp lý và có cơ sở",
            "Trong tư duy chứa đựng nhiều mâu thuẫn",
            "Tính phê phán còn hạn chế, rất dễ tin lời người khác"
        ],
        answer: 3 // d
    },
    {
        id: 12,
        question: "Biểu hiện đặc trưng trong đời sống tình cảm của thiếu niên là:",
        options: [
            "Tính mâu thuẫn, tính bồng bột tăng",
            "Tính bồng bột giảm, ổn định, khó thay đổi",
            "Tính mâu thuẫn, chưa ổn định, dễ thay đổi",
            "Tất cả ý trên đều sai"
        ],
        answer: 2 // c
    },
    {
        id: 13,
        question: "Trong đời sống xúc cảm - tình cảm của thiếu niên đang hình thành và phát triển mạnh các loại tình cảm nào?",
        options: [
            "Tình cảm trí tuệ, tình cảm đạo đức",
            "Tình cảm đạo đức, tình cảm thẩm mỹ",
            "Tình cảm tập thể, đặc biệt là tình bạn",
            "Tất cả các loại tình cảm trên"
        ],
        answer: 3 // d
    },
    {
        id: 14,
        question: "Nội dung không đúng về sự tự đánh giá của thiếu niên là?",
        options: [
            "Thiếu niên tự nhận thức từ dáng vẻ bề ngoài tới phẩm chất của mình.",
            "Thiếu niên tự nhận thức từ các phẩm chất đơn lẻ đến những phẩm chất phức tạp.",
            "Thiếu niên chưa quan tâm đến vai trò và chuẩn mực về giới.",
            "Thiếu niên có khả năng nhận biết giới tính của mình."
        ],
        answer: 2 // c
    },
    {
        id: 15,
        question: "Sự phát triển về mặt sinh lý của thanh niên có đặc điểm là?",
        options: [
            "Sức mạnh cơ bắp tăng nhanh",
            "Các tuyến nội tiết chưa ổn định",
            "Tim phát triển nhanh, mạch phát triển chậm",
            "Tốc độ tăng trưởng chiều cao tăng dần"
        ],
        answer: 0 // a
    },
    {
        id: 16,
        question: "Hoạt động chủ đạo của thanh niên là gì?",
        options: [
            "Hoạt động sinh hoạt tập thể",
            "Hoạt động vui chơi - giải trí",
            "Hoạt động học tập chuyên ngành",
            "hoạt động học tập - hướng nghiệp"
        ],
        answer: 3 // d
    },
    {
        id: 17,
        question: "Nét cấu tạo tâm lý mới đặc trưng nảy sinh từ hoạt động chủ đạo của thanh niên là gì?",
        options: [
            "Khả năng tự nhận thức",
            "xu hướng nghề nghiệp",
            "xuất hiện mối tình đầu",
            "Tất cả ý trên đều sai"
        ],
        answer: 1 // b
    },
    {
        id: 18,
        question: "Tri giác của học sinh THPT có đặc điểm nào sau đây?",
        options: [
            "Tính chủ định, tính mục đích",
            "Tính mục đích, tính độc lập",
            "Tính độc lập, tính hệ thống",
            "Tính mục đích, tính hệ thống"
        ],
        answer: 3 // d
    },
    {
        id: 19,
        question: "Học sinh THPT biết tóm tắt ý chính bài học, xác định nội dung nào cần nhớ, nội dung nào cần hiểu là biểu hiện phát triển về khả năng nào sau đây?",
        options: [
            "Ghi nhớ máy móc",
            "Ghi nhớ có ý nghĩa, logic",
            "Cả hai ý trên đều đúng",
            "Cả hai ý trên đều sai"
        ],
        answer: 1 // b
    },
    {
        id: 20,
        question: "Trong quan hệ bạn bè, thanh niên học sinh đề cao điều gì?",
        options: [
            "Tuân thủ bộ luật tình bạn",
            "Bạn bè sống chết có nhau",
            "Trung thành, gắn bó, tin cậy",
            "Tất cả ý trên đều đúng"
        ],
        answer: 2 // c
    },
    {
        id: 21,
        question: "Mối tình đầu của thanh niên xuất hiện dựa trên cơ sở nào?",
        options: [
            "Nhu cầu về tình bạn khác giới tăng",
            "Nhu cầu chân chính về tình cảm sâu sắc",
            "Phạm vi quan hệ bạn bè mở rộng",
            "Tất cả ý trên đều đúng"
        ],
        answer: 3 // d
    },
    {
        id: 22,
        question: "Nhu cầu đặc trưng nổi bật của lứa tuổi thanh niên là gì?",
        options: [
            "Vươn lên làm người lớn",
            "Thể hiện bản thân",
            "Tự khẳng định mình",
            "Được độc lập"
        ],
        answer: 1 // b
    },
    {
        id: 23,
        question: "Thanh niên đưa ra nhận định của mình về các vấn đề trong cuộc sống, chọn lựa những nguyên tắc ứng xử. Đó là biểu hiện của điều gì sau đây?",
        options: [
            "Sự hình thành thế giới quan khoa học",
            "Sự khẳng định vị trí của bản thân",
            "Sự phát triển về trí tuệ",
            "Sự hình thành lý tưởng sống"
        ],
        answer: 0 // a
    },
    {
        id: 24,
        question: "Hoạt động dạy theo phương thức nhà trường không có đặc điểm nào sau đây?",
        options: [
            "Hoạt động dạy hướng đến việc phát triển tri thức, kỹ năng, kỹ xảo cho người học.",
            "Giáo viên truyền đạt kiến thức, học sinh chỉ việc tiếp thu kiến thức đó.",
            "Giáo viên tổ chức, điều khiển hoạt động học của người học.",
            "Song hành cùng hoạt động học, tạo thành hoạt động kép."
        ],
        answer: 1 // b
    },
    {
        id: 25,
        question: "Giáo viên thực hiện hoạt động dạy như thế nào?",
        options: [
            "Truyền đạt kiến thức",
            "Tập huấn kỹ năng",
            "Tổ chức và điều khiển hoạt động học của học sinh",
            "Tất cả đều sai"
        ],
        answer: 2 // c
    },
    {
        id: 26,
        question: "Đối tượng của hoạt động học là gì?",
        options: [
            "Giáo viên",
            "Người học",
            "Tri thức, kỹ năng, kỹ xảo",
            "Tất cả các ý trên đều đúng"
        ],
        answer: 2 // c
    },
    {
        id: 27,
        question: "Học sinh có lòng khao khát mở rộng tri thức, mong muốn có nhiều hiểu biết, say mê với việc giải quyết các nhiệm vụ học tập là những biểu hiện của nhóm động cơ học tập nào?",
        options: [
            "Nhóm động cơ quan hệ xã hội",
            "Nhóm động cơ hoàn thiện tri thức",
            "Cả a và b đều đúng",
            "Cả a và b đều sai"
        ],
        answer: 1 // b
    },
    {
        id: 28,
        question: "“Hoạt động học” không có đặc điểm nào sau đây?",
        options: [
            "Người học hướng đến chiếm lĩnh những tri thức, kỹ năng, kỹ xảo, các phương thức hành động, các chuẩn mực, giá trị đạo đức nhân văn.",
            "Học tuỳ hứng, không đòi hỏi áp dụng những phương pháp tích cực.",
            "Trong thời hạn nhất định, người học thu nhận được một khối lượng lớn tri thức khoa học và các kỹ năng tương ứng.",
            "Chỉ có con người mới có hoạt động học."
        ],
        answer: 1 // b
    },
    {
        id: 29,
        question: "Để học tập hiệu quả, người học cần làm gì?",
        options: [
            "Lĩnh hội tri thức",
            "Nắm vững phương pháp",
            "Cả a và b đều đúng",
            "Cả a và b đều sai"
        ],
        answer: 2 // c
    },
    {
        id: 30,
        question: "Loại hành động học tập được xem là đặc biệt và có mục đích khác với các loại hành động học tập còn lại là:",
        options: [
            "Hành động phân tích",
            "Hành động mô hình hoá",
            "Hành động cụ thể hoá",
            "Hành động tự kiểm tra, tự đánh giá"
        ],
        answer: 3 // d
    },
    {
        id: 31,
        question: "Học sinh tích cực học tập có biểu hiện ra sao?",
        options: [
            "Không rõ động cơ, hứng thú học",
            "Tập trung chú ý đến nội dung và nhiệm vụ học tập",
            "Tránh né các nhiệm vụ học tập",
            "Làm qua loa các nhiệm vụ học tập"
        ],
        answer: 1 // b
    },
    {
        id: 32,
        question: "Giáo viên dạy học tích cực có biểu hiện như thế nào?",
        options: [
            "Không quan tâm khơi gợi hứng thú học tập cho học sinh",
            "Bỏ qua đặc điểm cá nhân, vốn kinh nghiệm của học sinh",
            "Phối hợp đa dạng các phương pháp giảng dạy",
            "Giáo viên luôn luôn cung cấp bài mẫu cho học sinh làm theo"
        ],
        answer: 2 // c
    },
    {
        id: 33,
        question: "Hành động học tập nào sau đây thuộc về hành động mô hình tượng trưng?",
        options: [
            "Trái cây giả bằng nhựa",
            "Mô hình sa bàn",
            "Công thức toán học",
            "Sơ đồ đoạn thẳng mô tả một quan hệ toán học"
        ],
        answer: 3 // d
    },
    {
        id: 34,
        question: "Mục đích cuối cùng của hoạt động dạy là gì?",
        options: [
            "Truyền đạt thông tin xã hội",
            "Điều khiển người khác",
            "Phát triển người học",
            "Chứng tỏ năng lực giảng dạy của giáo viên"
        ],
        answer: 2 // c
    },
    {
        id: 35,
        question: "Đạo đức là gì?",
        options: [
            "Đạo đức là sự phản ánh vào ý thức cá nhân một hệ thống các chuẩn mực, đủ sức chi phối và điều khiển hành vi cá nhân trong mối quan hệ giữa lợi ích của bản thân với lợi ích của người khác và xã hội.",
            "Đạo đức là sự phản ánh vào nhận thức con người một hệ thống các chuẩn mực, đủ sức chi phối và điều khiển hành vi cá nhân trong mối quan hệ giữa lợi ích của bản thân với lợi ích của người khác và xã hội.",
            "Đạo đức là sự phản ánh vào ý thức cá nhân một hệ thống các chuẩn mực, đủ sức chi phối và điều khiển hành vi cá nhân trong mối quan hệ giữa lợi ích của bản thân, người khác với lợi ích toàn xã hội.",
            "Đạo đức là sự phản ánh vào nhận thức con người một hệ thống các chuẩn mực, đủ sức chi phối và điều khiển hành vi cá nhân trong mối quan hệ giữa lợi ích của bản thân, người khác với lợi ích của xã hội."
        ],
        answer: 0 // a
    },
    {
        id: 36,
        question: "Để đánh giá một hành vi đạo đức, ta cần dựa vào các tiêu chí nào?",
        options: [
            "Tính tự giác, tính vụ lợi và tính có ích",
            "Tính tự giác, tính không vụ lợi và tính có ích",
            "Tính tự chủ, tính vụ lợi và phi lợi ích.",
            "Tính tự lực, tính không vụ lợi và phi lợi ích"
        ],
        answer: 1 // b
    },
    {
        id: 37,
        question: "Trong đời sống, có những sự việc diễn ra không giống như tri thức đạo đức mà học sinh được học, về lâu dài sẽ dẫn tới điều gì?",
        options: [
            "Học sinh bị mất niềm tin đạo đức",
            "Học sinh không thực hiện hành vi đạo đức",
            "Cả hai ý trên đều sai",
            "Cả hai ý trên đều đúng"
        ],
        answer: 3 // d
    },
    {
        id: 38,
        question: "Ý hướng của con người vào việc tạo ra giá trị đạo đức, mong muốn thực hiện hành vi đạo đức được gọi là gì?",
        options: [
            "Ý chí đạo đức",
            "Thiện chí đạo đức",
            "Nghị lực đạo đức",
            "Niềm tin đạo đức"
        ],
        answer: 1 // b
    },
    {
        id: 39,
        question: "Nhận định nào sau đây nói đúng về giá trị?",
        options: [
            "Giá trị nằm trong chủ thể",
            "Giá trị nằm trong khách thể",
            "Giá trị nằm trong mối quan hệ giữa chủ thể và khách thể",
            "Giá trị nằm ngoài mối quan hệ giữa chủ thể và khách thể"
        ],
        answer: 2 // c
    },
    {
        id: 40,
        question: "Phát biểu nào sau đây không đúng về định hướng giá trị?",
        options: [
            "Định hướng giá trị là thái độ mang tính khuynh hướng lựa chọn những giá trị nhất định.",
            "Định hướng giá trị giữa cá nhân này với cá nhân khác luôn giống nhau.",
            "Định hướng giá trị có thể khác nhau thời điểm này với thời điểm khác.",
            "Định hướng giá trị thể hiện sự sẵn sàng của chủ thể đối với một hay một số giá trị một cách có ý thức."
        ],
        answer: 1 // b
    },
    {
        id: 41,
        question: "Lemin, Potts & Welsford, 1994 cho rằng để hình thành và định hướng giá trị cho học sinh trong trường học cần trải qua bao nhiêu bước?",
        options: [
            "4 bước",
            "5 bước",
            "6 bước",
            "7 bước"
        ],
        answer: 2 // c
    },
    {
        id: 42,
        question: "Vốn đã không thích em B, khi phát hiện em B quay cóp trong giờ kiểm tra, học sinh A liền báo cáo ngay với giáo viên. Hơn nữa, A cảm thấy khoái chí khi B bị kiểm điểm. Nhận định nào sau đây là đúng đắn và đầy đủ về tình huống trên?",
        options: [
            "Em A chỉ ra em B quay cóp là hành vi đạo đức, khoái chí khi B bị phạt là vô đạo đức",
            "Em A chỉ ra em B quay cóp không phải là hành vi đạo đức vì còn động cơ riêng khác.",
            "Em B quay cóp là hành vi bình thường trường học",
            "Cả b và c đều đúng"
        ],
        answer: 1 // b
    },
    {
        id: 43,
        question: "Giáo viên làm gì để thúc đẩy học sinh thực hiện được 1 hành vi đạo đức?",
        options: [
            "Yêu cầu học sinh quyên góp cụ thể bao nhiêu tiền cho 1 phong trào từ thiện",
            "Cung cấp thông tin về trường hợp khó khăn cụ thể, kêu gọi học sinh hỗ trợ tuỳ tâm",
            "Làm gương, tiên phong tham gia các hoạt động thiện nguyện của trường",
            "Cả b và c đều đúng"
        ],
        answer: 3 // d
    },
    {
        id: 44,
        question: "Nhận định nào không đúng về giáo dục giá trị cho học sinh?",
        options: [
            "Giáo dục giá trị chỉ cần thiết cho học sinh thường vi phạm nội quy trường học",
            "Học sinh cần được giáo dục nhiều giá trị khác nhau",
            "Giáo dục giá trị chỉ cần cung cấp kiến thức về giá trị đó là đủ",
            "Cả a và c"
        ],
        answer: 3 // d
    },
    {
        id: 45,
        question: "Bản chất của hoạt động hỗ trợ tâm lý học đường là:",
        options: [
            "Hướng đến việc chăm sóc sức khoẻ tâm thần cho học sinh và phụ huynh",
            "Hướng đến việc chăm sóc sức khoẻ tâm thần cho giáo viên và học sinh",
            "Hướng đến việc chăm sóc sức khoẻ tâm thần cho ban giám hiệu và giáo viên",
            "Hướng đến việc chăm sóc sức khoẻ tâm thần cho cho các thành viên trong nhà trường và phụ huynh"
        ],
        answer: 3 // d
    },
    {
        id: 46,
        question: "Vai trò của giáo viên trong hoạt động hỗ trợ tâm lý học đường là gì?",
        options: [
            "Người hỗ trợ",
            "Người được hỗ trợ",
            "a & b đều đúng",
            "a & b đều sai"
        ],
        answer: 2 // c
    },
    {
        id: 47,
        question: "Biểu hiện nào sau đây là thuộc rối loạn lo âu ở học sinh?",
        options: [
            "Cảm giác lo lắng vì mai có bài kiểm tra",
            "Lo lắng chờ đợi điểm thi",
            "Lo sợ giáo viên gọi lên khảo bài",
            "Cảm giác giống như sợ, nhưng không có sự đe dọa rõ rệt, sắp đến"
        ],
        answer: 3 // d
    },
    {
        id: 48,
        question: "Vấn đề tâm lý nào của học sinh không được xem là rối loạn tâm lý nghiêm trọng?",
        options: [
            "Trầm cảm",
            "Nghiện game",
            "Buồn chán trong lớp học",
            "Rối loạn lo âu"
        ],
        answer: 2 // c
    },
    {
        id: 49,
        question: "Nhận định nào sau đây là sai về hoạt động đánh giá tâm lý?",
        options: [
            "Nhằm định hướng cho giáo viên / chuyên viên tâm lý học đường",
            "Bất kì giáo viên/ cán bộ nào trong trường cũng đánh giá đúng tâm lý học sinh",
            "Đánh giá tâm lý để xác định phương thức giúp đỡ học sinh vượt qua khó khăn tâm lý",
            "Bổ sung dữ liệu cho hồ sơ tâm lý học đường của người học"
        ],
        answer: 1 // b
    },
    {
        id: 50,
        question: "Nhận định nào sau đây là sai về hoạt động dự phòng và phát triển tâm lý?",
        options: [
            "Tham vấn – trị liệu tâm lý",
            "Chẩn đoán sớm rối nhiễu tâm lý",
            "Phát hiện và bồi dưỡng năng khiếu cho học sinh",
            "Giáo dục kỹ năng sống cho học sinh"
        ],
        answer: 0 // a
    },
    {
        id: 51,
        question: "Nhận định nào sau đây là sai về hoạt động tham vấn tâm lý học đường?",
        options: [
            "Chỉ dành cho học sinh",
            "Tham vấn các vấn đề học tập và các mối quan hệ trong trường học",
            "Do học sinh tự có nhu cầu",
            "Do yêu cầu từ giáo viên/ phụ huynh"
        ],
        answer: 0 // a
    },
    {
        id: 52,
        question: "Biểu hiện vi phạm nguyên tắc đạo đức khi hỗ trợ tâm lý cho học sinh là?",
        options: [
            "Tôn trọng nhân cách, quyền tự quyết của học sinh",
            "Tôn trọng quyền của cha mẹ, người giám hộ học sinh",
            "Trạng thái tinh thần bất ổn nhưng vẫn hỗ trợ tâm lý cho học sinh",
            "Tất cả ý trên"
        ],
        answer: 2 // c
    },
    {
        id: 53,
        question: "Người thực hiện việc hỗ trợ tâm lý cho học sinh cần tránh thái độ gì?",
        options: [
            "Quan tâm",
            "Nhiệt tình",
            "Đồng cảm",
            "Phán xét"
        ],
        answer: 3 // d
    },
    {
        id: 54,
        question: "Biểu hiện của người hỗ trợ tâm lý thiếu kỹ năng lắng nghe học sinh là gì?",
        options: [
            "Tập trung chú ý vào câu chuyện học sinh đang kể",
            "Ngắt lời học sinh khi có thắc mắc giữa chừng câu chuyện",
            "Chú ý phi ngôn ngữ của học sinh",
            "Không bấm/ lướt điện thoại khi học sinh đang tâm sự"
        ],
        answer: 1 // b
    },
    {
        id: 55,
        question: "Đặc thù của giao tiếp sư phạm dựa trên nền tảng giao tiếp giữa ai với ai là chủ yếu?",
        options: [
            "Giáo viên với giáo viên",
            "Giáo viên với phụ huynh",
            "Giáo viên với học sinh",
            "Tất cả ý trên đều đúng"
        ],
        answer: 2 // c
    },
    {
        id: 56,
        question: "Giáo viên ăn mặc lịch sự, gọn gàng thể hiện tuân thủ theo nguyên tắc giao tiếp sư phạm nào sau đây?",
        options: [
            "Nguyên tắc đồng cảm",
            "Nguyên tắc mẫu mực",
            "Nguyên tắc có thiện ý",
            "Tất cả ý trên đều đúng"
        ],
        answer: 1 // b
    },
    {
        id: 57,
        question: "“Thầy A chỉ 1 ngón tay để gọi học sinh và khi học sinh trả lời thì thầy A lại khoanh tay, nhìn sang hướng khác” - Trường hợp này giáo viên A đã vi phạm nguyên tắc giao tiếp sư phạm nào?",
        options: [
            "Nguyên tắc mô phạm",
            "Nguyên tắc có thiện ý",
            "Nguyên tắc tôn trọng nhân cách học sinh",
            "Tất cả các nguyên tắc trên"
        ],
        answer: 2 // c
    },
    {
        id: 58,
        question: "Biểu hiện của người giáo viên thiếu thiện chí với học trò là?",
        options: [
            "Khen ngợi học sinh",
            "Nhiệt tình giúp đỡ khi học sinh cần",
            "Tha thứ lỗi lầm cho học sinh",
            "Ưu ái học sinh giỏi, ban cán sự lớp hơn"
        ],
        answer: 3 // d
    },
    {
        id: 59,
        question: "“Cô P. luôn quan tâm, tìm hiểu, nắm rõ hoàn cảnh của học trò - nắm bắt diễn tiến tâm lý - lý giải nguyên nhân đích thực – tìm cách tương tác tích cực” chứng tỏ cô P. tuân thủ nguyên tắc giao tiếp sư phạm nào?",
        options: [
            "Nguyên tắc mẫu mực",
            "Nguyên tắc đồng cảm",
            "Nguyên tắc tông trọng",
            "Nguyên tắc thiện ý"
        ],
        answer: 1 // b
    },
    {
        id: 60,
        question: "Việc trả lời được câu hỏi “mục đích của việc giao tiếp giữa thầy trò là gì?” là nền tảng của kỹ năng giao tiếp sư phạm nào?",
        options: [
            "Kỹ năng ra quyết định",
            "Kỹ năng định vị",
            "Kỹ năng điều khiển",
            "Kỹ năng định hướng"
        ],
        answer: 3 // d
    },
    {
        id: 61,
        question: "“Y phục xứng kỳ đức” phù hợp với nguyên tắc giao tiếp sư phạm nào?",
        options: [
            "Nguyên tắc mẫu mực",
            "Nguyên tắc đồng cảm",
            "Nguyên tắc tôn trọng nhân cách học sinh",
            "Nguyên tắc thiện ý"
        ],
        answer: 0 // a
    },
    {
        id: 62,
        question: "Giáo viên không nên có cử chỉ nào với học trò?",
        options: [
            "Vỗ vai động viên, an ủi học sinh",
            "Cười trìu mến với học sinh",
            "Cho tay vào túi quần khi giảng bài",
            "Quan sát học sinh giờ ra chơi"
        ],
        answer: 2 // c
    },
    {
        id: 63,
        question: "Trong phong cách giao tiếp sư phạm của giáo viên cần tránh đặc điểm nào?",
        options: [
            "Mẫu mực",
            "Cầu kì, loè loẹt",
            "Giản dị",
            "Lịch sự"
        ],
        answer: 1 // b
    },
    {
        id: 64,
        question: "Giáo viên cần tránh những cử chỉ nào khi học sinh đang phát biểu ý kiến?",
        options: [
            "Nhìn thẳng về phía học sinh đang phát biểu",
            "Bĩu môi",
            "Thở ra",
            "Cả b và c"
        ],
        answer: 3 // d
    },
    {
        id: 65,
        question: "Nhiệm vụ “xác định quy luật lĩnh hội kỹ năng, kỹ xảo” có ý nghĩa thực tiễn gì?",
        options: [
            "Chứng minh rằng luyện tập không quan trọng bằng năng khiếu bẩm sinh",
            "Giúp giáo viên thiết kế các bài tập thực hành phù hợp để người học nhằm hình thành năng lực",
            "Giúp học sinh học thuộc lòng các bài văn mẫu nhanh hơn",
            "Giảm bớt thời gian lên lớp của giáo viên xuống mức tối thiểu"
        ],
        answer: 1 // b
    },
    {
        id: 66,
        question: "Ai được xem là “cha đẻ” của Tâm lý học giáo dục phương Tây?",
        options: [
            "Johann Herbart",
            "John Locke",
            "Plato",
            "P.F. Kapterev"
        ],
        answer: 0 // a
    },
    {
        id: 67,
        question: "Nguyên tắc cơ bản trong phương pháp giáo dục của A.X. Makarenko là gì?",
        options: [
            "Giáo dục thông qua các mô hình học tập khám phá",
            "Giáo dục dựa trên sự phát triển tự nhiên bẩm sinh",
            "Giáo dục bằng tập thể và thông qua tập thể",
            "Giáo dục thông qua hoạt động trực quan và củng cố tri thức"
        ],
        answer: 2 // c
    },
    {
        id: 68,
        question: "Việc sử dụng nhóm xã hội như một môi trường và phương tiện dạy học, giáo dục dựa trên cơ sở nghiên cứu của chuyên ngành nào?",
        options: [
            "Tâm lý học nhận thức",
            "Tâm lý học khác biệt",
            "Tâm lý học văn hóa",
            "Tâm lý học xã hội"
        ],
        answer: 3 // d
    },
    {
        id: 69,
        question: "Phương pháp nào được định nghĩa là cách thu thập dữ liệu bằng cách tri giác có chủ định và ghi chép lại các hành vi, cử chỉ, lời nói của khách thể?",
        options: [
            "Phương pháp quan sát",
            "Phương pháp điều tra bằng phiếu hỏi",
            "Phương pháp trắc nghiệm",
            "Phương pháp nghiên cứu trường hợp"
        ],
        answer: 0 // a
    },
    {
        id: 70,
        question: "Tại sao trong công tác giáo dục, nhà giáo dục cần phải “đi trước sự phát triển” của người học thay vì chỉ chờ đợi người học tự lớn lên?",
        options: [
            "Vì giáo dục đóng vai trò quyết định mọi biến đổi tâm lý",
            "Vì bẩm sinh di truyền không có ý nghĩa gì trong sự phát triển tâm lý",
            "Để phù hợp với vai trò chủ đạo của giáo dục trong việc dẫn dắt và định hướng sự phát triển tâm lý",
            "Để đảm bảo người học không gặp phải bất kỳ cuộc khủng hoảng lứa tuổi nào"
        ],
        answer: 2 // c
    },
    {
        id: 71,
        question: "Các chuyên gia giáo dục thường khuyến cáo cha mẹ nên cho trẻ học ngoại ngữ từ sớm (giai đoạn trước 6 tuổi) vì đây là thời điểm trẻ có khả năng thẩm thấu ngôn ngữ tốt nhất. Khuyến cáo này dựa trên việc vận dụng khái niệm nào trong tâm lý học?",
        options: [
            "Khả năng bù trừ tâm lý",
            "Sự biến đổi các quá trình thành các thuộc tính tâm lý",
            "Giai đoạn phát cảm",
            "Quy luật toàn vẹn của tâm lý"
        ],
        answer: 2 // c
    },
    {
        id: 72,
        question: "Đặc điểm nào sau đây giúp phân biệt rõ nhất giữa \"Hoạt động chủ đạo\" và các hoạt động khác của cá nhân trong một giai đoạn lứa tuổi?",
        options: [
            "Là hoạt động chiếm nhiều thời gian nhất trong ngày của cá nhân.",
            "Là hoạt động mà cá nhân cảm thấy yêu thích và hứng thú nhất.",
            "Là hoạt động quy định những biến đổi chủ yếu nhất trong tâm lý con người ở giai đoạn đó.",
            "Là hoạt động duy nhất mà cá nhân thực hiện trong suốt giai đoạn lứa tuổi."
        ],
        answer: 2 // c
    },
    {
        id: 73,
        question: "Điểm khác biệt cơ bản giữa \"Giai đoạn bình ổn\" và \"Giai đoạn khủng hoảng\" trong sự phát triển tâm lý là gì?",
        options: [
            "Giai đoạn bình ổn diễn ra ngắn hơn so với giai đoạn khủng hoảng",
            "Giai đoạn bình ổn tích lũy về lượng, trong khi giai đoạn khủng hoảng tạo ra sự biến đổi về chất",
            "Giai đoạn khủng hoảng không để lại dấu ấn gì cho sự phát triển nhân cách",
            "Chỉ giai đoạn khủng hoảng mới có sự xuất hiện của các đặc điểm sinh lý mới"
        ],
        answer: 1 // b
    },
    {
        id: 74,
        question: "Tại sao Vygotsky khẳng định trẻ em chỉ có thể lĩnh hội được kinh nghiệm xã hội - lịch sử thông qua dạy học và giáo dục?",
        options: [
            "Vì dạy học và giáo dục là con đường duy nhất cung cấp các đặc điểm sinh lý cho trẻ",
            "Vì thông qua dạy học và giáo dục, trẻ thực hiện các hoạt động và giao tiếp với người lớn để chuyển hóa kinh nghiệm bên ngoài thành của mình",
            "Vì dạy học và giáo dục có khả năng thay thế hoàn toàn các hoạt động tự thân của đứa trẻ",
            "Vì chỉ có dạy học mới có thể làm thay đổi hoàn toàn các yếu tố di truyền của cá nhân."
        ],
        answer: 1 // b
    },
    {
        id: 75,
        question: "Đặc điểm nào của dạy học và giáo dục giúp trẻ phát triển theo những chuẩn mực mà xã hội mong đợi?",
        options: [
            "Tính tự phát và ngẫu nhiên trong quá trình tương tác",
            "Việc tổ chức các hoạt động vui chơi giải trí thuần túy",
            "Tính mục đích, có kế hoạch và có nội dung định hướng cụ thể",
            "Sự tác động không giới hạn của người lớn vào mọi suy nghĩ của trẻ"
        ],
        answer: 2 // c
    },
    {
        id: 76,
        question: "Tại sao lứa tuổi thiếu niên thường có biểu hiện vụng về, lóng ngóng và đôi khi làm đổ vỡ đồ đạc (\"đụng đâu bể đó\")?",
        options: [
            "Do trọng lượng não bộ tăng nhanh đột ngột khiến các em chưa kịp thích nghi",
            "Do sự phát triển không cân đối giữa hệ xương (nhanh) và hệ cơ (chậm), cùng sự phát triển không đều của các đốt ngón tay",
            "Do các em muốn gây sự chú ý với người lớn thông qua những hành động khác lạ",
            "Do hệ thần kinh trung ương bị ức chế mạnh hơn hưng phấn làm giảm khả năng điều khiển vận động"
        ],
        answer: 1 // b
    },
    {
        id: 77,
        question: "Hiện tượng thiếu niên dễ bị kích động, bốc đồng và hay vi phạm kỷ luật được giải thích chủ yếu bởi đặc điểm nào của hệ thần kinh?",
        options: [
            "Trọng lượng não bộ tăng trưởng đột ngột ở các vùng chức năng",
            "Sự hoàn thiện của hệ thống tín hiệu thứ hai so với hệ thống tín hiệu thứ nhất",
            "Hoạt động của hệ thần kinh chưa cân bằng, trong đó hưng phấn mạnh hơn ức chế",
            "Khả năng hình thành phản xạ có điều kiện đối với từ ngữ diễn ra rất nhanh"
        ],
        answer: 2 // c
    },
    {
        id: 78,
        question: "Khi thấy con trai học lớp 8 bắt đầu dành nhiều thời gian soi gương, yêu cầu được tự chọn quần áo theo sở thích cá nhân và không muốn bố mẹ can thiệp vào việc trang trí phòng riêng, cha mẹ nên có thái độ ứng xử nào là phù hợp nhất?",
        options: [
            "Khuyến khích con tập trung vào việc học, không nên quá chú trọng vẻ bề ngoài",
            "Cấm đoán con tự chọn quần áo vì lo sợ con sẽ chạy theo những phong cách ăn mặc không lành mạnh",
            "Lờ đi và coi đó là những thay đổi nhất thời, không cần can thiệp hay định hướng",
            "Tôn trọng nhu cầu độc lập của con bằng cách để con tự quyết định trong phạm vi nhất định và hướng dẫn con cách làm đẹp phù hợp"
        ],
        answer: 3 // d
    },
    {
        id: 79,
        question: "Trong giờ thực hành Sinh học, học sinh lớp 8 quan sát mẫu vật nhưng thường nhận xét qua loa, thiếu hệ thống. Giáo viên nên làm gì để các em thực hành quan sát tốt hơn?",
        options: [
            "Giáo viên hướng dẫn và yêu cầu học sinh quan sát kỹ hơn.",
            "Cung cấp sẵn kết luận để học sinh ghi nhớ",
            "Hướng dẫn học sinh quan sát có mục đích, theo trình tự và đặt câu hỏi gợi ý",
            "Giảm yêu cầu quan sát vì học sinh chưa có khả năng"
        ],
        answer: 2 // c
    },
    {
        id: 80,
        question: "Một học sinh lớp 8 có khả năng giải các bài toán hình học không gian rất tốt nhưng lại gặp khó khăn khi phải thuyết trình về ý nghĩa thực tiễn của các định lý đó. Dựa trên cấu trúc tư duy của thiếu niên, giáo viên cần tác động vào yếu tố nào?",
        options: [
            "Yêu cầu học sinh học thuộc lòng các ứng dụng thực tế trong sách giáo khoa để thuyết trình tốt hơn.",
            "Tăng cường các bài tập rèn luyện tư duy hình tượng - cụ thể để củng cố nền tảng tư duy.",
            "Cho phép học sinh bỏ qua phần thuyết trình để tập trung vào thế mạnh giải toán trừu tượng.",
            "Hướng dẫn học sinh cách vận dụng lý thuyết vào thực tiễn và lập luận giải quyết vấn đề có cơ sở."
        ],
        answer: 3 // d
    },
    {
        id: 81,
        question: "Trong giờ học, khi giáo viên đặt một câu hỏi mở về một vấn đề xã hội mới nổi, cả lớp thiếu niên bỗng trở nên hào hứng, tranh luận sôi nổi và quên cả thời gian. Trạng thái này minh chứng cho đặc điểm nào sau đây?",
        options: [
            "Sự mất cân bằng sinh lý khiến thiếu niên dễ bị lôi cuốn vào những hoạt động đám đông",
            "Tính mâu thuẫn trong biểu hiện hành vi: vừa tập trung đó lại sao nhãng ngay đó",
            "Sự phát triển của tình cảm trí tuệ liên quan đến nhu cầu khám phá và phát hiện cái mới.",
            "Sự phát triển mạnh mẽ của tình cảm đạo đức đối với các vấn đề chung của xã hội."
        ],
        answer: 2 // c
    },
    {
        id: 82,
        question: "Một học sinh lớp 8 say mê đọc sách về các danh nhân và cố gắng rèn luyện theo các đức tính của họ. Loại tình cảm nào đang đóng vai trò chủ đạo ở đây?",
        options: [
            "Sự bắt chước máy móc do thiếu niên chưa có khả năng kiềm chế bản thân.",
            "Tình cảm trí tuệ kết hợp với tình cảm đạo đức đang phát triển mạnh.",
            "Chỉ đơn thuần là tình cảm thẩm mỹ vì học sinh thấy hình ảnh danh nhân rất đẹp.",
            "Tình cảm tập thể phát triển: vì học sinh muốn được xã hội công nhận như các danh nhân ."
        ],
        answer: 1 // b
    },
    {
        id: 83,
        question: "Một học sinh lớp 8 tự lập kế hoạch học tiếng Anh mỗi tối nhưng chỉ thực hiện được 2 ngày rồi bỏ cuộc để đi chơi điện tử. Hiện tượng này phản ánh hạn chế nào trong nhân cách thiếu niên?",
        options: [
            "Sự phát triển của tự ý thức làm cho học sinh cảm thấy hài lòng với những gì mình đã làm.",
            "Mâu thuẫn giữa mong muốn tự giáo dục ý chí với khả năng thực hiện còn nhiều thiếu sót.",
            "Thiếu niên hoàn toàn chưa có khả năng lập kế hoạch tự tu dưỡng rèn luyện.",
            "Học sinh chưa có “cảm nhận mình là người lớn” nên không có trách nhiệm với bản thân."
        ],
        answer: 1 // b
    },
    {
        id: 84,
        question: "Hành vi một học sinh nữ lớp 8 bắt đầu để ý đến phong cách ăn mặc và cách đi đứng sao cho “nữ tính” hơn phản ánh trình độ nào trong tự nhận thức?",
        options: [
            "Nhu cầu tự tu dưỡng ý chí để vượt qua những định kiến về giới tính.",
            "Sự hình thành quan điểm riêng về hệ thống giá trị đạo đức xã hội.",
            "Khả năng nhận biết những phẩm chất phức tạp như lòng tự trọng cá nhân khả.",
            "Khả năng nhận biết và thể hiện bản thân đồng nhất với giới tính của mình."
        ],
        answer: 3 // d
    },
    {
        id: 85,
        question: "Việc thanh niên trong gia đình quan tâm nhiều đến lối sống và đạo đức của cha mẹ phản ánh đặc điểm nào của sự phát triển tâm lý?",
        options: [
            "Sự phụ thuộc hoàn toàn vào gia đình",
            "Nhu cầu vui chơi giải trí tăng cao",
            "Xu hướng hình thành chuẩn mực và giá trị cá nhân",
            "Sự giảm sút vai trò của gia đình"
        ],
        answer: 2 // c
    },
    {
        id: 86,
        question: "Sự phát triển mạnh của tự ý thức ở lứa tuổi đầu thanh niên thể hiện rõ nhất ở biểu hiện nào?",
        options: [
            "Dễ bị chi phối bởi ý kiến người khác",
            "Khả năng tự đánh giá và nhận thức về bản thân tăng cao",
            "Giảm nhu cầu khẳng định bản thân",
            "Ít quan tâm đến vị trí xã hội của mình"
        ],
        answer: 1 // b
    },
    {
        id: 87,
        question: "Một học sinh nhận thấy mình học tốt môn Sinh học nhưng lại chọn ngành Công nghệ thông tin chỉ vì ngành này “hot” và dễ xin việc. Tình huống này cho thấy học sinh đã:",
        options: [
            "Vận dụng tốt nguyên tắc chọn nghề theo nhu cầu xã hội",
            "Bỏ qua sự phù hợp giữa năng lực bản thân và nghề nghiệp",
            "Thể hiện rõ xu hướng nghề nghiệp ổn định",
            "Đã có sự phối hợp đầy đủ giữa các yếu tố hướng nghiệp"
        ],
        answer: 1 // b
    },
    {
        id: 88,
        question: "Một học sinh lựa chọn ngành học phù hợp với năng lực và sở thích, nhưng ngành đó hiện có nhu cầu xã hội thấp. Để đảm bảo lựa chọn hợp lý, học sinh nên:",
        options: [
            "Điều chỉnh kế hoạch bằng cách tìm hiểu sâu hơn về cơ hội phát triển và hướng đi liên quan",
            "Giữ nguyên lựa chọn và bỏ qua yếu tố xã hội",
            "Từ bỏ ngay ngành đã chọn",
            "Chuyển sang ngành có thu nhập cao hơn"
        ],
        answer: 0 // a
    },
    {
        id: 89,
        question: "Một học sinh phản biện rất mạnh nhưng thường dựa trên cảm tính cá nhân. Giáo viên nên:",
        options: [
            "Khuyến khích mọi ý kiến để phát triển tự tin",
            "Hạn chế tranh luận để tránh sai lệch",
            "Hướng dẫn tiêu chí đánh giá lập luận dựa trên bằng chứng",
            "Yêu cầu học sinh im lặng khi chưa chắc chắn"
        ],
        answer: 2 // c
    },
    {
        id: 90,
        question: "Trong giờ học, học sinh thường chỉ tập trung vào phần giáo viên nhấn mạnh mà bỏ qua các phần liên kết. Để khắc phục, giáo viên nên:",
        options: [
            "Nhấn mạnh nhiều hơn nội dung chính",
            "Giảm lượng kiến thức",
            "Yêu cầu học sinh ghi chép đầy đủ",
            "Hướng dẫn học sinh nhận diện cấu trúc tổng thể của bài học"
        ],
        answer: 3 // d
    },
    {
        id: 91,
        question: "Một học sinh lớp 12 đang có 'mối tình đầu' và bắt đầu lơ là việc học. Thay vì cấm đoán gay gắt, giáo viên đã nhẹ nhàng chia sẻ về những kỷ niệm đẹp của tuổi học trò và định hướng cách để cùng nhau tiến bộ. Cách tiếp cận này của giáo viên dựa trên việc hiểu đặc điểm nào của tình yêu tuổi thanh niên?",
        options: [
            "Tình yêu đầu đời của thanh niên thường mang tính lý tưởng, thuần khiết và rất nhạy cảm",
            "Tình yêu của các em chủ yếu dựa trên hứng thú trí tuệ và sự say mê tìm tòi cái mới",
            "Tình yêu tuổi này thường rất bền vững và khó thay đổi nên không thể cấm đoán",
            "Thanh niên đã hoàn toàn làm chủ được lý trí nên sẽ tự biết điều chỉnh hành vi"
        ],
        answer: 0 // a
    },
    {
        id: 92,
        question: "Một học sinh tỏ ra rất nhạy cảm với cái đẹp, thường phê bình các sản phẩm học tập không “đẹp về hình thức”. Giáo viên nên xử lý thế nào để vừa phù hợp đặc điểm tâm lý vừa đảm bảo mục tiêu giáo dục?",
        options: [
            "Phê bình vì quá chú trọng hình thức",
            "Bỏ qua vì không ảnh hưởng học tập",
            "Kết hợp định hướng thẩm mĩ với yêu cầu về nội dung học thuật",
            "Khuyến khích học sinh nhận xét các sản phẩm của bạn để học hỏi"
        ],
        answer: 2 // c
    },
    {
        id: 93,
        question: "Một học sinh đánh giá bản thân rất cao về năng lực lãnh đạo, nhưng thực tế thường gặp khó khăn khi làm việc nhóm. Cách can thiệp nào phù hợp nhất?",
        options: [
            "Phê bình để học sinh nhận ra sai lầm",
            "Tạo cơ hội phản hồi đa chiều giúp học sinh điều chỉnh tự đánh giá",
            "Giao vai trò lãnh đạo ngay để “thử thách”",
            "Không can thiệp vì đó là nhận thức cá nhân"
        ],
        answer: 1 // b
    },
    {
        id: 94,
        question: "Tại sao việc chuyển từ phương thức dạy đời thường sang “hoạt động dạy” (phương thức nhà trường) được coi là bước ngoặt quyết định cho sự phát triển của trẻ trong xã hội đương đại?",
        options: [
            "Vì phương thức này giúp hoc sinh hình thành các năng lực bản chất người dựa trên hệ thống kỹ năng và tri thức khoa học",
            "Vì giúp học sinh thay thế hoàn toàn những kinh nghiệm ứng xử đời thường bằng tri thức khoa học khô khan",
            "Vì học sinh ở độ tuổi đi học không còn chịu tác động từ những lời dạy bảo của người lớn trong gia đình",
            "Vì chỉ có giáo viên mới có khả năng tạo ra ý thức trách nhiệm cho học sinh đối với những việc làm được giao"
        ],
        answer: 0 // a
    },
    {
        id: 95,
        question: "Trong giờ dạy môn Sinh, một giáo viên sử dụng phương pháp giảng bài rất hấp dẫn, học sinh chăm chú nghe nhưng không có cơ hội tương tác hay thực hành. Sau tiết học, học sinh nhớ bài nhưng không vận dụng được. Đánh giá nào sau đây là chính xác nhất?",
        options: [
            "Hoạt động dạy thành công vì học sinh ghi nhớ tốt",
            "Hoạt động dạy chưa đầy đủ vì thiếu tổ chức hoạt động học",
            "Hoạt động dạy đạt yêu cầu vì đảm bảo truyền đạt kiến thức",
            "Hoạt động dạy hiệu quả vì giáo viên kiểm soát lớp tốt"
        ],
        answer: 1 // b
    },
    {
        id: 96,
        question: "Một giáo viên cho rằng: “Chỉ cần học sinh tự học tốt, giáo viên không cần can thiệp nhiều.” Theo lý thuyết, nhận định nào đúng nhất?",
        options: [
            "Hoàn toàn đúng vì học sinh là trung tâm",
            "Đúng nếu học sinh có năng lực cao",
            "Không liên quan đến hoạt động dạy",
            "Sai vì thiếu vai trò tổ chức, định hướng của hoạt động dạy"
        ],
        answer: 3 // d
    },
    {
        id: 97,
        question: "Một giáo viên nhận thấy học sinh trong lớp đang thụ động, chỉ chờ chép bài mà không tham gia phát biểu. Để hoạt động dạy và học thực sự \"gắn kết, hỗ trợ nhau\" theo đúng quy luật tâm lý, giáo viên này nên ưu tiên giải pháp nào?",
        options: [
            "Tăng cường thuyết giảng để học sinh lĩnh hội được nhiều thành tựu vật chất và tinh thần hơn.",
            "Yêu cầu học sinh học thuộc lòng các nội dung đã được chọn lọc trong chương trình.",
            "Thiết kế lại các nhiệm vụ học tập phù hợp để kích thích tính tự giác và ý thức về đối tượng lĩnh hội của trẻ.",
            "Chấp nhận sự thụ động của trẻ vì đó là đặc điểm trình độ nhận thức ở cấp học này."
        ],
        answer: 2 // c
    },
    {
        id: 98,
        question: "Trong một tiết dạy về đạo đức, giáo viên đưa ra một tình huống thực tế đang gây tranh cãi trên mạng xã hội để học sinh tranh luận. Xét về mặt mục đích của hoạt động dạy, việc sử dụng “tình huống gây tranh cãi” này đóng vai trò gì?",
        options: [
            "Là cách để giáo viên áp đặt quan điểm cá nhân của mình lên học sinh một cách khéo léo",
            "Là phương tiện để học sinh tự tái tạo và hình thành thái độ, nhân cách trước các giá trị xã hội",
            "Giúp học sinh ghi nhớ các quy tắc đạo đức nhanh hơn thông quan ví dụ thực tế",
            "Chỉ đơn thuần là cách làm mới sách giáo khoa để tiết học bớt nhàm chán"
        ],
        answer: 1 // b
    },
    {
        id: 99,
        question: "Giáo viên yêu cầu học sinh chép bài đầy đủ và học thuộc, nhưng không tạo điều kiện cho học sinh hiểu và vận dụng. Điều này làm suy giảm yếu tố nào của hoạt động học?",
        options: [
            "Tính tự giác",
            "Tính hệ thống",
            "Mục đích lĩnh hội tri thức một cách khoa học",
            "Mối quan hệ giữa dạy và học"
        ],
        answer: 2 // c
    },
    {
        id: 100,
        question: "Học sinh tham gia thảo luận rất sôi nổi nhưng nội dung lan man, không đi vào trọng tâm bài học. Giáo viên cần ưu tiên:",
        options: [
            "Giảm thời gian thảo luận nhóm",
            "Cung cấp đáp án đúng ngay lập tức",
            "Định hướng lại mục tiêu và nội dung học tập",
            "Đánh giá điểm số để kiểm soát hoạt động"
        ],
        answer: 2 // c
    },
    {
        id: 101,
        question: "Giáo viên giao nhiệm vụ: “Hãy tự thiết kế một sơ đồ tư duy để tóm tắt bài học”. Khi học sinh hoàn thành nhiệm vụ này, sản phẩm quan trọng nhất theo quan điểm tâm lý học giáo dục là gì?",
        options: [
            "Sự gia tăng kho tàng kiến thức mới về sơ đồ tư duy cho nhân loại",
            "Sự tiết kiệm thời gian dạy học cho giáo viên trên lớp",
            "Những biến đổi về năng lực tư duy và sự hiểu biết hệ thống bên trong người học",
            "Bản sơ đồ tư duy đẹp mắt treo ở cuối lớp học để trang trí"
        ],
        answer: 2 // c
    },
    {
        id: 102,
        question: "Hành động nào sau đây của giáo viên cho thấy họ đang chú trọng bản chất “hình thành tri thức của chính bản thân hoạt động học”?",
        options: [
            "Hướng dẫn học sinh cách phân tích đề bài, cách tra cứu tài liệu và cách tự kiểm tra kết quả",
            "Luôn đưa ra đáp án đúng ngay lập tức khi học sinh vừa mới đặt câu hỏi",
            "Yêu cầu học sinh nhắc lại chính xác từng từ trong định nghĩa sách giáo khoa",
            "Sắp xếp thời gian làm bài tập về nhà thật nhiều để học sinh không có thời gian chơi"
        ],
        answer: 0 // a
    },
    {
        id: 103,
        question: "Trong giờ Vật lý, giáo viên yêu cầu học sinh dùng các ký hiệu , V, A để thiết lập mối quan hệ giữa các đại lượng trong định luật Ohm. Sau đó, yêu cầu học sinh tính toán cho một mạch điện cụ thể tại gia đình. Chuỗi hành động này tuân thủ trình tự logic nào của các hành động học tập?",
        options: [
            "Mô hình hóa gần giống vật thật -> Phân tích tinh thần -> Cụ thể hóa",
            "Phân tích -> Cụ thể hóa -> Mô hình hóa",
            "Phân tích lời nói -> Mô hình hóa tượng trưng -> Đánh giá chuẩn đoán",
            "Mô hình hóa (mã hóa) -> Cụ thể hóa -> Tự kiểm tra"
        ],
        answer: 3 // d
    },
    {
        id: 104,
        question: "Một giáo viên yêu cầu học sinh phải tham gia hoạt động tình nguyện, nếu không sẽ bị trừ điểm rèn luyện. Nhiều học sinh tham gia tích cực và mang lại lợi ích thực tế cho cộng đồng. Theo tiêu chí hành vi đạo đức, nhận định nào sau đây là chính xác nhất?",
        options: [
            "Đây là hành vi đạo đức vì có ích cho xã hội",
            "Đây chưa hoàn toàn là hành vi đạo đức vì thiếu tính tự giác",
            "Đây là hành vi đạo đức vì phù hợp chuẩn mực xã hội",
            "Đây là hành vi phi đạo đức vì mang tính ép buộc"
        ],
        answer: 1 // b
    },
    {
        id: 105,
        question: "Một giáo viên kỳ cựu luôn thực hiện việc công bằng trong chấm thi một cách tự động, không cần suy nghĩ (thói quen). Tuy nhiên, khi đối mặt với áp lực từ cấp trên buộc phải nâng điểm cho một học sinh đặc biệt, giáo viên này đã phải trải qua một cuộc đấu tranh nội tâm dữ dội trước khi quyết định từ chối. Sự xuất hiện của “cuộc đấu tranh” này chứng tỏ điều gì?",
        options: [
            "Khi thói quen bị thách thức bởi hoàn cảnh mới, ý chí đạo đức phải xuất hiện để bảo vệ giá trị đạo đức",
            "Thói quen đạo đức của giáo viên này chưa thực sự bền vững nên bị lung lay trước áp lực",
            "Niềm tin đạo đức của giáo viên đã bị suy giảm do sự tác động tiêu cực từ môi trường xã hội",
            "Tình cảm đạo đức của giáo viên đã chuyển hóa hoàn toàn thành tri thức lý luận thuần túy"
        ],
        answer: 0 // a
    },
    {
        id: 106,
        question: "Hành vi gây hấn nhằm mục đích có được vật dụng hoặc đồ chơi mình muốn mà không chủ tâm gây thương tích cho người khác được gọi là gì?",
        options: [
            "Gây hấn quan hệ",
            "Gây hấn phản ứng",
            "Gây hấn chiếm đoạt",
            "Gây hấn thù địch"
        ],
        answer: 2 // c
    },
    {
        id: 107,
        question: "Đặc điểm cốt lõi để phân biệt hành vi “Bắt nạt” với các dạng gây hấn bộc phát khác là gì?",
        options: [
            "Sự mất cân bằng quyền lực, có tính chủ ý và tính lặp lại",
            "Chỉ bao gồm các hình thức tấn công thể lực",
            "Xảy ra do bản tính nóng nảy nhất thời",
            "Là hành vi đáp lại những đe dọa nhận biết được"
        ],
        answer: 0 // a
    },
    {
        id: 108,
        question: "Thành tố nào trong cấu trúc tâm lý cần được “rèn luyện” để trở nên vững chắc và tự động hóa theo thời gian?",
        options: [
            "Tri thức đạo đức",
            "Ý chí và thói quen đạo đức",
            "Tình cảm đạo đức",
            "Niềm tin đạo đức"
        ],
        answer: 1 // b
    },
    {
        id: 109,
        question: "Thành tố tâm lý nào đóng vai trò khởi đầu trong con đường giáo dục đạo đức?",
        options: [
            "Thói quen đạo đức",
            "Ý chí đạo đức",
            "Tình cảm đạo đức",
            "Tri thức đạo đức"
        ],
        answer: 0 // a
    },
    {
        id: 110,
        question: "Khi một học sinh đứng trước quyết định khó khăn: hoặc là báo cáo hành vi sai trái của bạn thân (giá trị trung thực), hoặc là giữ im lặng để bảo vệ tình bạn (giá trị nhân văn). Yếu tố nào sau đây đóng vai trò là 'nền tảng' giúp học sinh đưa ra quyết định cuối cùng?",
        options: [
            "Định hướng giá trị đúng đắn đã được hình thành",
            "Sự hiểu biết về định nghĩa các giá trị đạo đức",
            "Sự can thiệp kịp thời từ phía nhà trường",
            "Hệ thống giá trị vật chất mà học sinh đang sở hữu"
        ],
        answer: 0 // a
    },
    {
        id: 111,
        question: "Xung đột giữa việc “trung thực nhận lỗi” (giá trị đạo đức) và “giữ thể diện trước lớp” (giá trị cá nhân) thường gây ra khó khăn trong việc ra quyết định. Yếu tố nào giúp chủ thể vượt qua xung đột này?",
        options: [
            "Sự can thiệp bằng hình phạt của giáo viên",
            "Hệ thống thứ bậc trong định hướng giá trị đã được xác lập vững chắc",
            "Sự thay đổi của điều kiện xã hội xung quanh học sinh",
            "Việc từ bỏ mọi giá trị tinh thần để tập trung vào giá trị vật chất"
        ],
        answer: 1 // b
    },
    {
        id: 112,
        question: "Sự khác biệt cốt lõi giữa Bước 2 (So sánh) và Bước 4 (Khai thác giá trị khác biệt) trong quy trình hình thành và định hướng giá trị là gì?",
        options: [
            "Bước 2 là về giá trị cá nhân, Bước 4 là về triết lý sống chung của xã hội",
            "Bước 2 yêu cầu hành động thực tế, Bước 4 chỉ dừng lại ở thảo luận lý thuyết",
            "Bước 2 tập trung vào nhận thức sự khác biệt, Bước 4 tập trung vào kỹ năng đương đầu và thương lượng với xung đột",
            "Bước 2 diễn ra sau khi đã có kế hoạch hành động cụ thể ở Bước 4"
        ],
        answer: 2 // c
    },
    {
        id: 113,
        question: "Trong quá trình hình thành và định hướng giá trị, nếu một học sinh thấy rằng hành vi thực tế của mình thường xuyên đi ngược lại giá trị đã chọn ở Bước 1, học sinh đó nên làm gì để đảm bảo tính nhất quán?",
        options: [
            "Quyết định thay đổi kiểu hành vi hoặc xem xét lại giá trị đã chọn",
            "Tiếp tục giữ giá trị cũ nhưng che giấu hành vi sai lệch với giáo viên",
            "Bỏ qua kế hoạch hành động và chỉ tập trung vào việc thảo luận lý thuyết ở Bước 2",
            "Ngay lập tức quay lại Bước 3 để tìm hiểu cảm nhận của người khác"
        ],
        answer: 0 // a
    },
    {
        id: 114,
        question: "Theo Graham Haydon (2006), các giá trị cần hình thành ở người học được chia thành bao nhiêu nhóm chính?",
        options: [
            "4 nhóm",
            "3 nhóm",
            "5 nhóm",
            "6 nhóm"
        ],
        answer: 0 // a
    },
    {
        id: 115,
        question: "Định nghĩa 'làm xong công việc của mình và cố gắng làm hết khả năng của mình' thuộc về giá trị nào?",
        options: [
            "Trung thực",
            "Hợp tác",
            "Đạn kết",
            "Trách nhiệm"
        ],
        answer: 3 // d
    },
    {
        id: 116,
        question: "Khi phát hiện một học sinh có dấu hiệu rối loạn tâm lý nghiêm trọng vượt quá khả năng xử lý của nhà trường, hành động nào sau đây thể hiện đúng nhất bản chất của \"Hoạt động điều phối\"?",
        options: [
            "Nhà tâm lý học đường trực tiếp tiến hành trị liệu chuyên sâu cho học sinh ngay tại phòng tham vấn của trường",
            "Giáo viên chủ nhiệm phối hợp với phụ huynh để đưa học sinh đến các cơ sở trợ giúp ngoài phạm vi trường học",
            "Ban giám hiệu ra quyết định cho học sinh nghỉ học tạm thời để tránh ảnh hưởng đến các học sinh bình thường khác",
            "Chuyên gia tâm lý nhà trường tổ chức giáo dục kỹ năng sống bổ sung cho nhóm học sinh nguy cơ cao"
        ],
        answer: 1 // b
    },
    {
        id: 117,
        question: "Nếu một nhà quản lý giáo dục cảm thấy kiệt sức (burnout) và cần được tư vấn, hoạt động này có được coi là hỗ trợ tâm lý học đường không?",
        options: [
            "Không, vì hỗ trợ tâm lý học đường chỉ phục vụ mục đích dạy và học của học sinh",
            "Có, vì nhà quản lý giáo dục cũng là thành viên trong nhà trường cần được chăm sóc sức khỏe tâm thần",
            "Có, nhưng chỉ khi nhà quản lý này đang trực tiếp đứng lớp giảng dạy",
            "Không, vì nhà quản lý phải tự giải quyết vấn đề cá nhân để làm gương cho giáo viên"
        ],
        answer: 1 // b
    },
    {
        id: 118,
        question: "Khi một học sinh lớp 12 liên tục thay đổi nguyện vọng đăng ký đại học và cảm thấy buồn rầu, mất ngủ vì sợ chọn sai ngành. Khó khăn này thuộc nhóm nào và có tính chất gì?",
        options: [
            "Khó khăn từ bản thân; mang tính chất mặc cảm tự ti về năng lực học tập.",
            "Khó khăn trong mối quan hệ; do áp lực từ kỳ vọng của cha mẹ và xã hội.",
            "Khó khăn trong lựa chọn nghề nghiệp; kết hợp với trạng thái lo âu dai dẳng về tương lai.",
            "Khó khăn trong học tập; cụ thể là khó tập trung nghe giảng và ghi nhớ bài."
        ],
        answer: 2 // c
    },
    {
        id: 119,
        question: "Khi một học sinh cảm thấy \"buồn rầu\", đâu là ranh giới để phân biệt giữa \"Buồn chán\" và \"Khó khăn từ chính bản thân\"?",
        options: [
            "Buồn chán là trạng thái nhất thời, buồn rầu là trạng thái vĩnh viễn không thể thay đổi.",
            "Buồn chán liên quan đến sự thiếu hứng thú với hoạt động; buồn rầu thường đi kèm với mặc cảm, tự ti về giá trị cá nhân.",
            "Buồn chán chỉ xảy ra ở trường, còn buồn rầu do đánh giá thấp bản thân chỉ xảy ra ở nhà.",
            "Không có sự khác biệt vì cả hai đều là trải nghiệm tâm lý tiêu cực."
        ],
        answer: 1 // b
    },
    {
        id: 120,
        question: "Điểm khác biệt cốt lõi để phân biệt giữa \"Rối loạn lo âu\" và \"Trầm cảm\" dựa trên đặc điểm cảm xúc chủ đạo là gì?",
        options: [
            "Rối loạn lo âu đặc trưng bởi sự mệt mỏi thể chất, trong khi trầm cảm đặc trưng bởi sự hoảng sợ cấp tính.",
            "Rối loạn lo âu đặc trưng bởi sự lo lắng, sợ hãi quá mức; còn trầm cảm đặc trưng bởi khí sắc trầm và giảm hứng thú.",
            "Rối loạn lo âu thường kéo dài vĩnh viễn, còn trầm cảm chỉ xuất hiện thành từng cơn đột ngột.",
            "Rối loạn lo âu là do yếu tố truyền thông, còn trầm cảm hoàn toàn do áp lực học tập."
        ],
        answer: 1 // b
    },
    {
        id: 121,
        question: "Tại sao việc \"thiếu vắng hệ thống hỗ trợ, nâng đỡ sức khỏe tâm thần trong nhà trường\" lại được xem là một nguy cơ nghiêm trọng?",
        options: [
            "Vì nó làm cho học sinh không có nơi để vui chơi sau giờ học.",
            "Vì điều này bắt buộc gia đình phải kiểm soát con cái khắt khe hơn.",
            "Vì giáo viên sẽ không có đủ thời gian để soạn giáo án.",
            "Vì các vấn đề tâm lý không được phát hiện sớm và can thiệp kịp thời."
        ],
        answer: 3 // d
    },
    {
        id: 122,
        question: "Tại sao việc “Trao đổi với cha mẹ học sinh” chỉ được khoảng 50% giáo viên lựa chọn (trong một nghiên cứu về những khó khăn tâm lý của giáo viên trung học) dù tất cả những người thực hiện đều thấy hiệu quả?",
        options: [
            "Do rào cản tâm lý cho rằng khó tìm kiếm được tiếng nói chung và sự hợp tác từ phía gia đình",
            "Do giáo viên thiếu kỹ năng giao tiếp thuyết phục đối với phụ huynh",
            "Do giáo viên ưu tiên tự giải quyết để khẳng định uy tín cá nhân trước phụ huynh",
            "Do quy định của nhà trường hạn chế việc giáo viên liên lạc trực tiếp với phụ huynh"
        ],
        answer: 0 // a
    },
    {
        id: 123,
        question: "Trong các khó khăn tâm lý liên quan đến học sinh, nội dung nào dưới đây được ghi nhận là khiến giáo viên trung học bận tâm nhất?",
        options: [
            "Lúng túng trong việc sử dụng các biện pháp trách phạt học sinh",
            "Khó tìm kiếm sự hợp tác với cha mẹ học sinh trong việc giáo dục",
            "Không có thời gian để tiếp xúc, gần gũi với học sinh",
            "Khó kềm chế sự nóng giận trước những hành vi sai trái của học sinh"
        ],
        answer: 1 // b
    },
    {
        id: 124,
        question: "\"Việc nhận ra, thấu hiểu quan điểm và cảm xúc của người khác, tôn trọng quan điểm của người khác mà không bị lôi cuốn cảm xúc vào đó\" là định nghĩa của thái độ nào?",
        options: [
            "Sự chân thành",
            "Sự chấp nhận",
            "Sự nhiệt tình",
            "Sự đồng cảm"
        ],
        answer: 3 // d
    },
    {
        id: 125,
        question: "Đặc điểm \"tương tác giữa chủ thể và chủ thể\" trong giao tiếp sư phạm có ý nghĩa gì đối với mối quan hệ thầy - trò?",
        options: [
            "Giáo viên và học sinh hoàn toàn bằng hàng về mặt tri thức khoa học và kinh nghiệm sống.",
            "Cả giáo viên và học sinh đều tham gia với tư cách là những con người tự giác, biết tôn trọng và hợp tác có văn hóa.",
            "Giáo viên có thể bỏ qua các nguyên tắc sư phạm để trở thành bạn thân ngang hàng với học sinh.",
            "Học sinh có quyền tự quyết định nội dung bài học mà không cần sự định hướng của giáo viên."
        ],
        answer: 1 // b
    },
    {
        id: 126,
        question: "Tại sao trong Giáo dục học hiện đại, giao tiếp sư phạm được xem là quá trình trao đổi \"vốn sống và kinh nghiệm\" chứ không chỉ là \"tri thức khoa học\"?",
        options: [
            "Vì tri thức khoa học hiện nay đã có sẵn trên internet, giáo viên không cần truyền đạt nữa.",
            "Vì vốn sống và kinh nghiệm giúp học sinh dễ dàng vượt qua các kỳ thi lý thuyết thuần túy.",
            "Vì mục tiêu của giáo dục là giúp người học chuyển hóa những kinh nghiệm xã hội thành năng lực và phẩm chất cá nhân.",
            "Vì giáo viên thường không có đủ thời gian để giảng giải hết các kiến thức chuyên môn sâu."
        ],
        answer: 2 // c
    },
    {
        id: 127,
        question: "Trong giờ thảo luận, một học sinh đưa ra ý kiến trái ngược hoàn toàn với kiến thức giáo viên vừa giảng. Giáo viên mỉm cười, cảm ơn em và tổ chức cho cả lớp tranh luận về ý kiến đó thay vì bác bỏ ngay. Nguyên tắc \"Tôn trọng nhân cách học sinh\" ở đây được thể hiện sâu sắc nhất ở khía cạnh nào?",
        options: [
            "Chấp nhận học sinh ở trạng thái nhất định và không áp đặt ý kiến chủ quan.",
            "Thừa nhận quyền bình đẳng của học sinh trong việc tranh luận với giáo viên.",
            "Thể hiện sự lịch sự, tinh tế trong giao tiếp và khả năng lắng nghe nguyện vọng.",
            "Không dùng từ ngữ xúc phạm và tôn trọng cá tính riêng biệt của người học."
        ],
        answer: 0 // a
    },
    {
        id: 128,
        question: "Trước khi bước vào lớp có một học sinh cá biệt vừa gây gổ, giáo viên dành 2 phút để hình dung về phản ứng của em đó và chuẩn bị sẵn 3 phương án đối thoại khác nhau. Thao tác này thể hiện loại kỹ năng nào và đóng vai trò gì trong tiến trình giao tiếp?",
        options: [
            "Kỹ năng định vị; giúp xác định vị trí giao tiếp của giáo viên và học sinh.",
            "Kỹ năng định hướng trước khi tiếp xúc; giúp xây dựng mô hình tâm lý giả định và lường trước các phản ứng của đối tượng.",
            "Kỹ năng điều khiển; giúp làm chủ trạng thái cảm xúc của bản thân trước khi bắt đầu xử lý vi phạm.",
            "Kỹ năng định hướng trong giao tiếp; giúp linh hoạt thay đổi thái độ phù hợp với diễn biến tâm lý tại chỗ của học sinh."
        ],
        answer: 1 // b
    },
    {
        id: 129,
        question: "Một giáo viên đang giảng bài thì thấy một học sinh cúi mặt, tay vân vê tà áo, mắt đỏ hoe. Giáo viên dừng bài giảng, đi xuống nhẹ nhàng đặt tay lên vai em và ra hiệu cho cả lớp tự học để gặp riêng em. Việc \"nhận ra sự bất ổn qua cử chỉ\" và \"ra quyết định xử lý\" thể hiện sự chuyển hóa kỹ năng nào sau đây?",
        options: [
            "Từ kỹ năng sử dụng phương tiện phi ngôn ngữ sang kỹ năng điều khiển đối tượng.",
            "Từ kỹ năng đọc nét mặt sang kỹ năng làm chủ trạng thái cảm xúc cá nhân.",
            "Từ kỹ năng định hướng (tri giác bên ngoài) sang kỹ năng định vị (đặt mình vào vị trí học sinh để thấu cảm).",
            "Từ kỹ năng định vị xã hội sang kỹ năng điều chỉnh quá trình giao tiếp theo mục tiêu giáo dục."
        ],
        answer: 2 // c
    },
    {
        id: 130,
        question: "Khi giáo viên nói: \"Cô rất hiểu khó khăn của em, nhưng quy định của lớp là công bằng cho tất cả, em cần hoàn thành bài vào sáng mai\", giáo viên đang thực hiện nội dung nào của phong cách dân chủ?",
        options: [
            "Xóa nhòa ranh giới giữa thầy và trò để tạo sự thân mật.",
            "Lắng nghe tích cực nhưng vẫn giữ vững nguyên tắc, không \"nuông chiều thả mặc\".",
            "Thay đổi mục đích giao tiếp tùy theo tâm trạng và hoàn cảnh của học sinh.",
            "Đặt mục đích công việc lên trên hết và xem nhẹ đặc điểm tâm lý cá nhân."
        ],
        answer: 1 // b
    },
    {
        id: 131,
        question: "Đối tượng nghiên cứu của Tâm lý học giáo dục là:",
        options: [
            "quá trình dạy học và giáo dục qua các giai đoạn lứa tuổi từ nhỏ đến lớn",
            "tất cả các vấn đề liên quan đến giáo viên và học sinh",
            "một số vấn đề liên quan đến sức khỏe tâm thần của học sinh, khó khăn tâm lý mà học sinh gặp phải.",
            "sự phát triển tâm lý của người học, các điều kiện phát triển tâm lý trong quá trình dạy học và giáo dục"
        ],
        answer: 3 // d
    },
    {
        id: 132,
        question: "Phát biểu nào sau đây là đúng nhất khi nói đến nhiệm vụ nghiên cứu của Tâm lý học giáo dục?",
        options: [
            "Xác định quy luật lĩnh hội tri thức, kỹ năng, kỹ xảo của học sinh trong quá trình dạy học.",
            "Xác định cơ sở tâm lý học của hoạt động dạy học, giáo dục cũng như công tác hỗ trợ tâm lý học đường",
            "Cung cấp cơ sở tâm lý cho các hoạt động giáo dục gia đình và cộng đồng.",
            "Xác lập cơ sở tâm lý học của các quan điểm, triết lý, xu hướng giáo dục"
        ],
        answer: 1 // b
    },
    {
        id: 133,
        question: "Nhận định nào dưới đây không phù hợp khi nói về Tâm lý học giáo dục:",
        options: [
            "Tâm lý học giáo dục có mối quan hệ với các chuyên ngành Tâm lý học khác",
            "Tâm lý học giáo dục chú trọng sử dụng một phương pháp nghiên cứu đặc thù",
            "Tâm lý học giáo dục có đối tượng nghiên cứu là bản chất tâm lý của các hoạt động giáo dục",
            "Cả a, b, c đều đúng"
        ],
        answer: 1 // b
    },
    {
        id: 134,
        question: "Sự phát triển tâm lí của trẻ em là:",
        options: [
            "Sự tăng lên hoặc giảm đi về số lượng các hiện tượng tâm lí.",
            "Sự nâng cao khả năng của con người trong cuộc sống.",
            "Sự thay đổi về chất lượng các hiện tượng tâm lí.",
            "Sự tăng lên hoặc giảm về số lượng dẫn đến biến đổi về chất lượng của hiện tượng đang được phát triển"
        ],
        answer: 3 // d
    },
    {
        id: 135,
        question: "Bản chất của sự phát triển tâm lý trẻ em theo thuyết duy vật biện chứng",
        options: [
            "Sự biến đổi về chất trong các hoạt động tâm lý",
            "Quá trình tích luỹ dần về lượng của các hiện tượng tâm lý",
            "Sự tích luỹ về lượng của tri thức, kỹ năng",
            "Sự gia tăng về lượng của các hoạt động tâm lý"
        ],
        answer: 0 // a
    },
    {
        id: 136,
        question: "Sự hình thành và phát triển tâm lý người diễn ra theo cơ chế:",
        options: [
            "Hình thành hoạt động từ bên ngoài và chuyển hoạt động đó vào bên trong của cá nhân và cải tổ lại hình thức của hoạt động đó",
            "Sự tác động của môi trường bên ngoài làm biến đổi các yếu tố tâm lý bên trong của cá nhân cho phù hợp với sự biến đổi của môi trường bên ngoài",
            "Sự tác động qua lại giữa yếu tố tâm lý đã có bên trong với môi trường bên ngoài.",
            "Hình thành các yếu tố tâm lý từ bên ngoài sau đó chuyển vào bên trong của chủ thể"
        ],
        answer: 0 // a
    },
    {
        id: 137,
        question: "Trong quá trình phát triển tâm lý cá nhân, các giai đoạn phát triển là:",
        options: [
            "Có tính tuyệt đối",
            "Là kết quả của sự tích luỹ các tri thức, kỹ năng, kỹ xảo của cá nhân",
            "Chỉ có ý nghĩa tương đối",
            "Các giai đoạn phát triển tâm lý do sự phát triển cơ thể quy định"
        ],
        answer: 2 // c
    },
    {
        id: 138,
        question: "Yếu tố giữ vai trò chủ đạo trong sự hình thành và phát triển tâm lý trẻ em là:",
        options: [
            "Di truyền",
            "Môi trường gia đình và xã hội",
            "Giáo dục",
            "Cả di truyền, môi trường gia đình và xã hội"
        ],
        answer: 2 // c
    },
    {
        id: 139,
        question: "Quan niệm “trẻ em không phải là người lớn thu nhỏ lại” là quan điểm của:",
        options: [
            "Thuyết tiền định",
            "Thuyết duy cảm",
            "Thuyết hội tụ hai yếu tố",
            "Tâm lý học Macxit"
        ],
        answer: 3 // d
    },
    {
        id: 140,
        question: "Biểu hiện nào dưới đây KHÔNG ĐÚNG về quy luật mềm dẻo trong sự phát triển tâm lý?",
        options: [
            "Trẻ em có thể thay đổi, có khả năng lĩnh hội kiến thức, kỹ năng… để phát triển bản thân",
            "Khi một chức năng tâm lý nào yếu hoặc thiếu thì các chức năng tâm lý khác sẽ được tăng cường để bù đắp",
            "Khi một chức năng sinh lý nào đó thiếu thì các chức năng sinh lý khác để được phất triển mạnh hơn để bù đắp",
            "Khả năng bù trừ tạo ra tính mềm dẻo, nghĩa là các chức năng tâm lý và sinh lý có khả năng bù đắp cho nhau."
        ],
        answer: 3 // d
    },
    {
        id: 141,
        question: "Hạn chế chung nhất về tự ý thức của thiếu niên là gì?",
        options: [
            "Khả năng nhận thức, đánh giá bản thân và người khác nhiều lúc chưa chính xác",
            "Đánh giá những hành vi, cảm xúc riêng lẻ của bản thân",
            "Đánh giá cao về bản thân, đánh giá thấp người lớn",
            "Vừa bắt chước"
        ],
        answer: 2 // c
    },
    {
        id: 142,
        question: "Biểu hiện của hiện tượng dậy thì là:",
        options: [
            "Tuyến sinh dục bắt đầu hoạt động",
            "Cơ thể xuất hiện các dấu hiệu giới tính (nam mọc ria mép…)",
            "Nam có sự xuất tính, nữ có kinh nguyệt",
            "Cả a, b, c"
        ],
        answer: 0 // a
    },
    {
        id: 143,
        question: "Đặc điểm nào dưới đây không đặc trưng cho sự phát triển tâm lý của tuổi thiếu niên?",
        options: [
            "Sự phát triển mạnh mẽ, cân đối các yếu tố thể chất và tâm lý",
            "Sự phát triển mạnh mẽ, thiếu cân đối về mặt trí tuệ, cảm xúc và xu hướng, đạo đức",
            "Sự phát triển mạnh mẽ tính tích cực xã hội hướng đến các chuẩn mực văn hoá – xã hội",
            "Sự phát triển diễn ra không đều, tạo ra tính hai mặt: “vừa là trẻ con vừa là người lớn”."
        ],
        answer: 0 // a
    },
    {
        id: 144,
        question: "Đặc điểm trí nhớ của học sinh THCS là:",
        options: [
            "Có tiến bộ trong ghi nhớ tài liệu từ ngữ trừu tượng",
            "Có tiến bộ trong khả năng ghi nhớ ý nghĩa",
            "Coi thường ghi nhớ máy móc, nhưng khi ghi nhớ ý nghĩa gặp khó khăn sẽ sử dụng ghi nhớ máy móc",
            "Cả a, b, c"
        ],
        answer: 3 // d
    },
    {
        id: 145,
        question: "Chỉ ra đặc điểm không thể hiện tính phê phán của tư duy ở thiếu niên:",
        options: [
            "Luôn bướng bỉnh, nghi ngờ dù không có căn cứ",
            "Biết lập luận giải quyết vấn đề một cách có căn cứ",
            "Không dễ tin",
            "Chỉ tiếp thu khi được chứng minh rõ ràng"
        ],
        answer: 0 // a
    },
    {
        id: 146,
        question: "Nội dung tự ý thức của thiếu niên được xuất hiện dẫn theo thứ tự nào?",
        options: [
            "Tự ý thức hành vi → Phẩm chất liên quan đến tình bạn → Phẩm chất liên quan đến bản thân → Phẩm chất liên quan đến học tập → Phẩm chất thể hiện nhiều mặt của nhân cách",
            "Tự ý thức hành vi → Đồng thời tự ý thức những phẩm chất liên quan đến tình bạn, đến học tập, đến bản thân → Phẩm chất liên quan đến nhiều mặt của nhân cách",
            "Tự ý thức hành vi → Phẩm chất liên quan đến học tập → Phẩm chất liên quan đến người khác → Phẩm chất liên quan đến bản thân → Phẩm chất liên quan đến nhiều mặt của nhân cách",
            "Tự ý thức hành vi → Phẩm chất liên quan đến bản thân → Phẩm chất liên quan đến người khác → Phẩm chất liên quan đến công việc → Phẩm chất liên quan đến nhiều mặt của nhân cách"
        ],
        answer: 2 // c
    },
    {
        id: 147,
        question: "Trong xã hội ngày nay, hiện tượng gia tốc phát triển đã khiến cho tuổi đầu thanh niên:",
        options: [
            "Bắt đầu và kết thúc sớm hơn trước đây",
            "Bắt đầu sớm nhưng kết thúc muộn hơn",
            "Bắt đầu muộn nhưng kết thúc sớm hơn",
            "Bắt đầu và kết thúc muộn hơn trước đây"
        ],
        answer: 1 // b
    },
    {
        id: 148,
        question: "Sự phát triển về cơ thể ở tuổi học sinh THPT diễn ra:",
        options: [
            "Tương đối êm ả và cân đối",
            "Nhanh, mạnh và có nhiều biến động",
            "Mạnh mẽ nhưng không cân đối",
            "Mạnh mẽ và cân đối"
        ],
        answer: 0 // a
    },
    {
        id: 149,
        question: "Trong quan hệ với tuổi đầu thanh niên, người lớn thường:",
        options: [
            "Yêu cầu ở các em tính độc lập và ý thức trách nhiệm",
            "Đòi hỏi các em phục tùng những yêu cầu của mình đề ra",
            "Một mặt đòi hỏi các em phục tùng những yêu cầu của mình, mặt khác lại mong muốn ở các em tính độc lập, tự giác và ý thức trách nhiệm",
            "Mong muốn các em có cách ứng xử và khă năng thực hiện các công việc như người lớn"
        ],
        answer: 2 // c
    },
    {
        id: 150,
        question: "Điểm đặc trưng trong nhận thức của học sinh Trung học phổ thông là:",
        options: [
            "Chuyển từ tính không chủ định sang có chủ định",
            "Tính có chủ định phát triển mạnh, chiếm ưu thế",
            "Cả tính có chủ định và tính không chủ định cùng phát triển",
            "Tính không chủ định phát triển mạnh và chiếm ưu thế"
        ],
        answer: 1 // b
    },
    {
        id: 151,
        question: "Điểm nào không phản ánh đặc điểm tư duy của tuổi học sinh Trung học phổ thông?",
        options: [
            "Tính phê phán của tư duy phát triển mạnh",
            "Tính độc lập của tư duy phát triển",
            "Tính trực quan của tư duy phát triển",
            "Tính chặt chẽ và nhất quán phát triển"
        ],
        answer: 2 // c
    },
    {
        id: 152,
        question: "Nguyên nhân cơ bản khiến học sinh Trung học phổ thông rất quan tâm đến diện mạo, hình thức bề ngoài của bản thân là:",
        options: [
            "Sự biến đổi mạnh mẽ về mặt cơ thể ở lứa tuôi này.",
            "Sự thúc đẩy của nhu cầu trở thành người lớn",
            "Hình ảnh về thân thể của mình là một thành tố quan trọng trong sự tự ý thức ở lứa tuổi này",
            "Cả a, b, c"
        ],
        answer: 2 // c
    },
    {
        id: 153,
        question: "Sự xuất hiện nhiều nhóm pha trộn bên cạnh những nhóm thuần nhất ở lứa tuổi đầu thanh niên là dấu hiệu chứng tỏ:",
        options: [
            "Sự tích cực hoá rõ rệt trong quan hệ bạn khác giới ở lứa tuổi này",
            "Sự phức tạp hoá trong nhu cầu giao tiếp ở lứa tuổi này",
            "Sự đa dạng các nhu cầu hoạt động của lứa tuổi này",
            "Sự lý tưởng hoá tình bạn của các em ở lứa tuổi này"
        ],
        answer: 1 // b
    },
    {
        id: 154,
        question: "Đặc điểm nào không đúng với đặc điểm tâm lý tuổi đầu thanh niên hiện nay?",
        options: [
            "Quan hệ bạn bè chiếm vị trí thứ yếu so với quan hệ với người lớn hay với trẻ em nhỏ tuổi hơn",
            "Nhu cầu kết bạn của tuổi đầu thanh niên rất cao và tình bạn rất bền vững",
            "Nhu cầu lựa chọn nghề nghiệp dần trở thành vấn đề cấp thiết trong đời sống của các em",
            "Hình ảnh về thân thể của mình là một thành tố quan trọng trong tự ý thức của các em"
        ],
        answer: 0 // a
    },
    {
        id: 155,
        question: "Tự ý thức của thanh niên học sinh được xuất phát từ:",
        options: [
            "Yêu cầu của cuộc sống và hoạt động",
            "Sự biến đổi và phát triển mạnh mẽ của cơ thể",
            "Mong muốn thay đổi kiểu quan hệ với người lớn của các em",
            "Cả a, b, c"
        ],
        answer: 3 // d
    },
    {
        id: 156,
        question: "Tiến hành hoạt động dạy, người thầy có nhiệm vụ:",
        options: [
            "Sáng tạo ra tri thức mới",
            "Tái tạo lại tri thức, nền văn hoá xã hội cho bản thân",
            "Tổ chức, điều khiển quá trình tái tạo lại lại tri thức, nền văn hoá xã hội ở học sinh",
            "Cả a, b, c"
        ],
        answer: 2 // c
    },
    {
        id: 157,
        question: "Việc nắm được những tri thức, kỹ năng, kỹ xảo thông qua thực hiện một hoạt động nào đó trong cuộc sống ngày, được gọi là:",
        options: [
            "Hoạt động học",
            "Hoạt động tự học",
            "Học kỹ năng",
            "Học ngẫu nhiên"
        ],
        answer: 3 // d
    },
    {
        id: 158,
        question: "Đối tượng của hoạt động học là:",
        options: [
            "Tri thức khoa học",
            "Tri thức và những kỹ năng, kỹ xảo tương ứng của nó",
            "Sự tiếp thu tri thức",
            "Quá trình nhận thức"
        ],
        answer: 1 // b
    },
    {
        id: 159,
        question: "Hoạt động học hướng vào làm thay đổi:",
        options: [
            "Chủ thể của hoạt động",
            "Khách thể của hoạt động",
            "Đối tượng của hoạt động",
            "Động cơ của hoạt động"
        ],
        answer: 0 // a
    },
    {
        id: 160,
        question: "Nếu hoạt động học tập của học sinh được thúc đẩy bởi động cơ quan hệ xã hội thì:",
        options: [
            "Học sinh thường không say sưa, không có khát vọng học tập",
            "Học sinh vẫn say sưa học tập do sự hấp dẫn của bản thân tri thức",
            "Học sinh vẫn say sưa học tập, nhưng sự say sưa đó thường do sự hấp dẫn, lôi cuốn của một “cái khác” nằm ngoài mục đích trực tiếp của việc học",
            "Học sinh say sưa học vì bị hấp dẫn bởi tiến trình và kết quả học tập"
        ],
        answer: 2 // c
    },
    {
        id: 161,
        question: "Hoạt động nào sau đây là hoạt động dạy?",
        options: [
            "Mẹ đang truyền cho Lan bí kíp để nấu canh cá không bị tanh",
            "Cô giáo truyền đạt kiến thức về bài Căn bậc hai cho cả lớp",
            "Chú hàng xóm chỉ dẫn cho Hoa cách đi đường tắt để đến siêu thị",
            "Tất cả các phương án trên đều đúng"
        ],
        answer: 1 // b
    },
    {
        id: 162,
        question: "Qua trình hình thành khái niệm cho học sinh trong dạy học là quá trình:",
        options: [
            "Chuyển hoá khái niệm từ đầu giáo viên sang đầu học sinh",
            "Giáo viên mô tả, giảng giải để học sinh nắm được định nghĩa, khái niệm",
            "Giáo viên tổ chức, điều khiển hoạt động học của học sinh nhằm giúp các em tái tạo lại những năng lực thực tiễn của loài người được gửi gắm trong thế giới đối tượng cho bản thân",
            "Giáo viên hệ thống hoá những kinh nghiệm vốn có trong bản thân học sinh để hình thành ở các em những khái niệm khoa học"
        ],
        answer: 2 // c
    },
    {
        id: 163,
        question: "Chỉ sau hai lần giải các bài tập cùng loại, học sinh đã nắm được cách giải tổng quát của loại bài tập đó. Điều này chứng tỏ sự phát triển cao của phẩm chất trí tuệ nào?",
        options: [
            "Tốc độ định hướng trí tuệ",
            "Tốc độ khái quát hóa",
            "Tính tiết kiệm của tư duy",
            "Tính mềm dẽo của trí tuệ"
        ],
        answer: 1 // b
    },
    {
        id: 164,
        question: "Hành vi nào được xem là hành vi đạo đức trong các hành vi sau?",
        options: [
            "Hôm nay, Hải làm được một việc tốt và được nhà trường tuyên dương: em đã giúp được một cụ già bị ngất vào trạm xá gần trường.",
            "Em rất vui khi nghĩ đến phần thưởng của bố vì bố đã hứa:”Nếu con làm được một việc tốt thì bố sẽ có phần thưởng”.",
            "Hương rất chăm chỉ học hành, nhưng do chưa có phương pháp tốt nên kết quả học tập của em năm nào cũng thấp",
            "Nhìn thấy cụ già chuẩn bị qua đường giữa dòng xe tấp nập, Hồng vội vàng chạy tới nói:”Ông ơi, ông để cháu dắt ông qua đường”",
            "Mai đăng ký tham gia phát quà thiện nguyện vì địa điểm đến là nơi Mai ước ao được đi"
        ],
        answer: 2 // c
    },
    {
        id: 165,
        question: "Đặc điểm nào dưới đây không thuộc về các khâu của việc hình thành khái niệm khoa học cho học sinh?",
        options: [
            "Làm xuất hiện nhu cầu nhận thức ở học sinh",
            "Tổ chức học hành động trên đối tượng để phát hiện ra các dấu hiệu bản chất của đối tượng và mô hình hoá các dấu hiệu đó (phát biểu định nghĩa)",
            "Vận dụng định nghĩa (triển khai mô hình)",
            "Tổ chức cho học sinh hành động với các đối tượng chứa đựng khái niệm, nhằm tách những thuộc tính chung, bản chất để khát quát thành khái niệm"
        ],
        answer: 3 // d
    },
    {
        id: 166,
        question: "Sự phát triển trí tuệ được biểu hiện ở sự thay đổi về:",
        options: [
            "Số lượng tri thức",
            "Cấu trúc của tri thức được phản ánh trong hoạt động nhận thức",
            "Phương thức phản ánh tri thức",
            "Cả b và c"
        ],
        answer: 3 // d
    },
    {
        id: 167,
        question: "Chỉ sau hai lần giải các bài tập cùng loại, học sinh đã nắm được cách giải tổng quát của loại bài tập đó. Điều này chỉ ra chỉ số nào của sự phát triển trí tuệ ở học sinh?",
        options: [
            "Tốc độ định hướng trí tuệ",
            "Tốc độ khái quát hoá",
            "Tính tiết kiệm của tư duy",
            "Tính mềm dẻo của trí tuệ"
        ],
        answer: 1 // b
    },
    {
        id: 168,
        question: "Hành vi đạo đức là:",
        options: [
            "Hành vi được thúc đẩy bởi động cơ có ý nghĩa về mặt đạo đức do cá nhân tự giác làm",
            "Một hành vi có ích cho xã hội và cho cá nhân, không vi phạm các chuẩn mực đạo đức",
            "Một hành vi do cá nhân tự nguyện thực hiện",
            "Cả a, b, c"
        ],
        answer: 3 // d
    },
    {
        id: 169,
        question: "Trong tình huống phải đấu tranh giữa cái “tôi cần” và “tôi muốn thì việc thực hiện hành vi đạo đức là kết quả của những yếu tố nào trong các yếu tố sau?",
        options: [
            "Thiện chí và tri thức đạo đức",
            "Nghị lực và niềm tin đạo đức",
            "Thói quen đạo đức",
            "Thiện chí, nghị lực và tri thức đạo đức"
        ],
        answer: 3 // d
    },
    {
        id: 170,
        question: "Yếu tố nào xoá đi khoảng cách giữa ý thức đạo đức với hành vi đạo đức, làm ý thức đạo đức thống nhất với hành vi đạo đức?",
        options: [
            "Niềm tin đạo đức.",
            "Tình cảm đạo đức.",
            "Thói quen đạo đức.",
            "Thiện chí"
        ],
        answer: 2 // c
    },
    {
        id: 171,
        question: "Nhận định nào sau đây đúng khi nói về giá trị?",
        options: [
            "Giá trị nằm trong chủ thể",
            "Giá trị nằm ngoài chủ thể",
            "Giá trị nằm trong mối quan hệ giữa chủ thể và khách thể",
            "Giá trị nằm ngoài mối quan hệ giữa chủ thể và khách thể"
        ],
        answer: 2 // c
    },
    {
        id: 172,
        question: "“Ngày còn bé, Nam rất thích đọc truyện tranh. Nam ước mơ khi lớn lên sẽ sưu tầm được tất cả bộ truyện tranh mình muốn. Khi trưởng thành, Nam nhận thức việc sưu tầm truyện tranh không còn ý nghĩa nhiều với mình như trước”. Ví dụ trên cho thấy đặc điểm nào của giá trị?",
        options: [
            "Giá trị nằm trong bản thân sự vật, hiện tượng",
            "Giá trị phụ thuộc vào trình độ phát triển nhân cách",
            "Giá trị nằm trong mối quan hệ giữa chủ thể và khách thể",
            "Giá trị có ý nghĩa vật chất lẫn tinh thần với cá nhân"
        ],
        answer: 1 // b
    },
    {
        id: 173,
        question: "“Học sinh xác định được xung đột của bản thân và của người khác, cũng như biết cách bảo vệ quan điểm của mình, đương đầu với xung đột”. Đây là nội dung của bước nào trong các bước hình thành giá trị?",
        options: [
            "Xác định và làm rõ các giá trị",
            "So sánh và làm nổi bật sự khác biệt",
            "Khai thác các giá trị khác biệt",
            "Xem xét các phương án và ý nghĩa"
        ],
        answer: 2 // c
    },
    {
        id: 174,
        question: "Các hoạt động như giáo dục kỹ năng sống, bồi dưỡng năng khiếu cho học sinh thuộc về nội dung của hoạt động hỗ trợ tâm lý học đường nào?",
        options: [
            "Đánh giá tâm lý",
            "Dự phòng và phát triển tâm lý",
            "Tư vấn – tham vấn và trị liệu tâm lý",
            "Hoạt động điều phối"
        ],
        answer: 1 // b
    },
    {
        id: 175,
        question: "Phát biểu nào KHÔNG phải mục đích của hoạt động đánh giá tâm lý?",
        options: [
            "Tạo điều kiện tâm lý – xã hội thuận lợi cho học sinh phát triển.",
            "Lập hoặc bổ sung dữ liệu cho hồ sơ tâm lý học đường của học sinh.",
            "Lựa chọn phương tiện, công cụ, hình thức phù hợp để trợ giúp học sinh.",
            "Xác định phương thức và hình thức giúp đỡ học sinh gặp khó khăn."
        ],
        answer: 0 // a
    },
    {
        id: 176,
        question: "Đối tượng thụ hưởng của dịch vụ hỗ trợ tâm lý học đường là ai?",
        options: [
            "Học sinh",
            "Học sinh, cha mẹ học sinh",
            "Giáo viên, học sinh, cha mẹ học sinh",
            "Học sinh, cha mẹ học sinh và các lực lượng giáo dục trong nhà trường"
        ],
        answer: 3 // d
    },
    {
        id: 177,
        question: "Trong các vấn đề dưới đây, đâu là rối loạn tâm lý nghiêm trọng?",
        options: [
            "Cảm thấy vô dụng",
            "Nghiện game, internet",
            "Giảm trí nhớ",
            "Tự cô lập bản thân."
        ],
        answer: 1 // b
    },
    {
        id: 178,
        question: "Phát biểu nào sau đây KHÔNG phù hợp?",
        options: [
            "Giáo viên làm công tác tư vấn cho học sinh là giáo viên được đào tạo hoặc bồi dưỡng về nghiệp vụ tư vấn",
            "Giáo viên làm công tác hỗ trợ tâm lý học đường là những người không cần sự hỗ trợ tâm lý.",
            "Giáo viên cần tuân thủ các nguyên tắc đạo đức, các kỹ năng cơ bản trong công tác hỗ trợ tâm lý",
            "Giáo viên cần có trạng thái tinh thần ổn định khi hỗ trợ tâm lý."
        ],
        answer: 1 // b
    },
    {
        id: 179,
        question: "Trong giao tiếp sư phạm, giáo viên được gọi là đối tượng gì?",
        options: [
            "Chủ thể giao tiếp",
            "Khách thể chủ động",
            "Chủ thể tiếp nhận",
            "Chủ thể có ý thức"
        ],
        answer: 0 // a
    },
    {
        id: 180,
        question: "Các phương tiện giao tiếp bao gồm:",
        options: [
            "Lời nói, ngôn ngữ nói",
            "Ngôn ngữ viết",
            "Cử chỉ, hành vi, điệu độ, động tác",
            "Cả a, b, c"
        ],
        answer: 3 // d
    },
    {
        id: 181,
        question: "Giáo viên có vai trò gì trong sự phát triển toàn diện của học sinh?",
        options: [
            "Hướng dẫn, hỗ trợ và tạo môi trường học tập tích cực",
            "Chỉ truyền đạt kiến thức",
            "Phớt lờ nhu cầu của học sinh",
            "Tập trung vào kết quả học tập"
        ],
        answer: 0 // a
    },
    {
        id: 182,
        question: "Biểu hiện của nguyên tắc đồng cảm trong giao tiếp sư phạm là:",
        options: [
            "Cố gắng áp đặt suy nghĩ của mình cho học sinh",
            "Đặt mình vào hoàn cảnh của học sinh để thấu hiểu.",
            "Khuyến khích học sinh tranh luận mạnh mẽ.",
            "Luôn luôn đồng tình với mọi hành động của học sinh"
        ],
        answer: 1 // b
    },
    {
        id: 183,
        question: "Trong một tiết học, khi H. phát biểu ý kiến sai, thầy D. không chê bai mà khen ngợi sự mạnh dạn của H., sau đó nhẹ nhàng chỉnh sửa và giải thích lại cho cả lớp. Thầy D. đã thể hiện nguyên tắc giao tiếp sư phạm nào?",
        options: [
            "Nguyên tắc có thiện chí",
            "Nguyên tắc đồng cảm.",
            "Nguyên tắc tính mẫu mực.",
            "Nguyên tắc tôn trọng nhân cách học sinh."
        ],
        answer: 0 // a
    },
    {
        id: 184,
        question: "Phong cách giao tiếp dân chủ thể hiện qua hành vi nào sau đây?",
        options: [
            "Giáo viên khuyến khích học sinh tham gia vào việc xây dựng quy tắc lớp học",
            "Giáo viên tự quyết mọi việc không tham khảo ý kiến học sinh.",
            "Giáo viên áp đặt hình thức khen thưởng, phạt học sinh theo ý mình.",
            "Giáo viên luôn đồng tình với mọi yêu cầu của học sinh."
        ],
        answer: 0 // a
    },
    {
        id: 185,
        question: "Trong tiết kiểm tra, thầy D. áp đặt hình thức kiểm tra mà không giải thích lý do hay lắng nghe những đề xuất khác của học sinh. Thầy D. đang sử dụng phong cách giao tiếp sư phạm nào?",
        options: [
            "Phong cách giao tiếp dân chủ.",
            "Phong cách giao tiếp tự do.",
            "Phong cách giao tiếp độc đoán.",
            "Phong cách giao tiếp cởi mở."
        ],
        answer: 2 // c
    },
    {
        id: 186,
        question: "Phong cách giao tiếp tự do có đặc điểm nào sau đây?",
        options: [
            "Luôn ổn định và không bị ảnh hưởng bởi cảm xúc",
            "Dễ bị chi phối bởi tâm trạng cảm xúc",
            "Tập trung vào xây dựng mối quan hệ sâu sắc",
            "Không quan tâm đến tâm trạng của người khác"
        ],
        answer: 1 // b
    },
    {
        id: 187,
        question: "Kỹ năng định vị trong giao tiếp sư phạm giúp giáo viên làm gì?",
        options: [
            "Xác định mục tiêu bài học",
            "Nhận biết vai trò của mình và học sinh trong giao tiếp",
            "Kiểm soát cảm xúc cua học sinh",
            "Tạo động lực học tập cho học sinh"
        ],
        answer: 1 // b
    },
    {
        id: 188,
        question: "Kỹ năng điều khiển giúp giáo viên làm gì khi học sinh tranh cãi trong lớp?",
        options: [
            "Xác định mục tiêu bài học",
            "Nhận biết vai trò của mình trong lớp học",
            "Kiểm soát tình huống và điều chỉnh hành vi giao tiếp",
            "Tạo môi trường học tập tích cực"
        ],
        answer: 2 // c
    },
    {
        id: 189,
        question: "Vai trò chính của giao tiếp sư phạm là gì?",
        options: [
            "Xây dựng và phát triển nhân cách toàn diện cho học sinh",
            "Giúp giáo viên kiểm soát cảm xúc",
            "Tạo mối quan hệ xã hội giữa giáo viên và phụ huynh",
            "Giúp học sinh giao tiếp với bạn bè"
        ],
        answer: 0 // a
    },
    {
        id: 190,
        question: "Giao tiếp sư phạm là gì?",
        options: [
            "Quá trình tiếp xúc tâm lý giữa giáo viên và học sinh trong giáo dục",
            "Quá trình giao tiếp giữa giáo viên và phụ huynh",
            "Quá trinhg giao tiếp trong xã hội nói chung",
            "Quá trình trao đổi thông tin giữa các giáo viên"
        ],
        answer: 0 // a
    },
    {
        id: 191,
        question: "Yếu tố nào dưới đây không phải là đối tượng nghiên cứu của TLH giáo dục?",
        options: [
            "Sự phát triển tâm lý của người học",
            "Bản chất hoạt động học tập của người học",
            "Những khó khăn tâm lý của cá nhân trong quá trình dạy học, giáo dục",
            "Phương pháp giảng dạy hiệu quả"
        ],
        answer: 3 // Không nhận diện được gạch chân
    },
    {
        id: 192,
        question: "Đâu là nhiệm vụ nghiêm cứu của tâm lý học giáo dục?",
        options: [
            "Xác định quy luật lĩnh hội tri thức, kỹ năng, kỹ xảo, phát triển các loại hình trí tuệ trong quá trình dạy - học",
            "Xác định cơ sở tâm lý của việc điều khiển quá trình dạy học và giáo dục",
            "Nghiên cứu các quan điểm, triết lý, xu hướng giáo dục",
            "Tất cả các đáp án trên đều đúng"
        ],
        answer: 3
    },
    {
        id: 193,
        question: "Tâm lý học giáo dục vận dụng kiến thức từ lĩnh vực nào để tổ chức hoạt động dạy học?",
        options: [
            "Tâm lý học văn hóa",
            "Tâm lý học xã hội",
            "Tâm lý học phát triển",
            "Tâm lý học khác biệt"
        ],
        answer: 1
    },
    {
        id: 194,
        question: "Phương pháp quan sát là gì?",
        options: [
            "Phương pháp thu thập dữ liệu bằng cách tri giác có chủ định và ghi chép lại các hành vi, cử chỉ, hành động, lời nói",
            "Phương pháp thu thập dữ liệu bằng cách sử dụng phiếu trưng cầu ý kiến với một hệ thống câu hỏi được soạn thảo dựa trên mục đích nghiên cứu",
            "Phương pháp tìm hiểu và phân tích chuyên sâu một trường hợp nhất định",
            "Phương pháp sử dụng công cụ đã được tiêu chuẩn hóa để đo lường tâm lý con người một cách khách quan"
        ],
        answer: 0
    },
    {
        id: 195,
        question: "Để tổ chức các hoạt động dạy học, giáo dục và hỗ trợ tâm lý trong trường học một cách hiệu quả thì tâm lý học giáo dục cần dựa trên cơ sở nào?",
        options: [
            "Tâm lý học phát triển",
            "Tâm lý học khác biệt",
            "Tâm lý học nhận thức",
            "Tâm lý học xã hội"
        ],
        answer: 2
    },
    {
        id: 196,
        question: "Đối tượng nghiên cứu của tâm lý học giáo dục là gì?",
        options: [
            "Sự phát triển tâm lý của người học",
            "Những khó khăn tâm lý của cá nhân trong quá trình dạy học, giáo dục",
            "Bản chất hoạt động học tập của người học",
            "Tất cả các đáp án trên đều đúng"
        ],
        answer: 3
    },
    {
        id: 197,
        question: "Những thành tựu nghiên cứu của chuyên ngành nào là cơ sở quan trọng cho việc nghiên cứu các hiện tượng tâm lý nảy sinh trong hoạt động dạy học và giáo dục tương ứng với từng thời kỳ phát triển của cá nhân?",
        options: [
            "Tâm lý học nhận khác biệt",
            "Tâm lý học phát triển",
            "Tâm lý học xã hội",
            "Tâm lý học văn hoá"
        ],
        answer: 1
    },
    {
        id: 198,
        question: "Nghiên cứu tương quan là gì?",
        options: [
            "Nghiên cứu tập trung vào mô tả mối liên hệ giữa hai hay nhiều biến số nghiên cứu.",
            "Sử dụng công cụ đã được tiêu chuẩn hóa để đo lường tâm lý con người một cách khách quan",
            "Phương pháp tìm hiểu và phân tích chuyên sâu một trường hợp nhất định",
            "Phương pháp thu thập dữ liệu bằng cách sử dụng phiếu trưng cầu ý kiến"
        ],
        answer: 0
    },
    {
        id: 199,
        question: "Phương pháp trắc nghiệm đòi hỏi công cụ nghiên cứu phải đáp ứng yêu cầu gì?",
        options: [
            "Độ tin cậy",
            "Độ giá trị",
            "Được chuẩn hóa.",
            "Cả 3 đáp án trên"
        ],
        answer: 3
    },
    {
        id: 200,
        question: "Phuơng pháp nghiên cứu nào cho phép thu thập ý kiến chủ quan của một số đông khách thể, trên diện rộng, trong thời gian ngắn và mang tính chủ động cao?",
        options: [
            "Phương pháp điều tra bằng phiếu hỏi",
            "Phương pháp phỏng vấn",
            "Phương pháp nghiên cứu trường hợp",
            "Phương pháp nghiên cứu tương quan"
        ],
        answer: 0
    },
    {
        id: 201,
        question: "Mỗi đứa trẻ có những khác biệt về tính cách, hứng thú, đam mê... điều đó tạo ra những khuynh hướng phát triển khác nhau, tạo ra cái riêng rất đặc trưng và không lặp lại. Điều này thể hiện quy luật nào trong sự phát triển tâm lý cá nhân?",
        options: [
            "Quy luật toàn vẹn",
            "Quy luật mềm dẻo và khả năng bù trừ",
            "Quy luật về tính không đồng đều",
            "Quy luật thống nhất"
        ],
        answer: 2
    },
    {
        id: 202,
        question: "Đâu là đặc trưng điển hình để xác định các giai đoạn phát triển tâm lý cá nhân?",
        options: [
            "Đặc điểm sinh lý",
            "Cấu tạo tâm lý mới",
            "Khủng hoảng lứa tuổi",
            "Đặc điểm xã hội"
        ],
        answer: 1
    },
    {
        id: 203,
        question: "Các quá trình nhận thức ở học sinh Trung học phổ thông có đặc điểm gì?",
        options: [
            "Tính mục đích",
            "Tính lựa chọn",
            "Tính chủ định",
            "Tính ý nghĩa"
        ],
        answer: 2
    },
    {
        id: 204,
        question: "Sự khác nhau cơ bản trong hoạt động học tập của thanh niên so với lứa tuổi thiếu niên là gì?",
        options: [
            "Nội dung học tập nhiều hơn",
            "Nội dung học tập đi sâu vào những tri thức cơ bản, những quy luật của những bộ môn khoa học",
            "Phương pháp giảng dạy của giáo viên cũng có nhiều thay đổi",
            "Cả a, b & c"
        ],
        answer: 3
    },
    {
        id: 205,
        question: "Động cơ học tập có ý nghĩa quan trọng nhất đối với thanh niên?",
        options: [
            "Động cơ nhận thức",
            "Động cơ có ý nghĩa thực tiễn",
            "Động cơ xã hội",
            "Động cơ thi đua"
        ],
        answer: 1
    },
    {
        id: 206,
        question: "Đặc điểm nổi bật trong sự phát triển nhân cách của thanh niên mới lớn?",
        options: [
            "Tự ý thức",
            "Đánh giá người khác",
            "Tự giáo dục",
            "Ý chí"
        ],
        answer: 0
    },
    {
        id: 207,
        question: "Đâu là cấu tạo tâm lý mới đặc trưng của lứa tuổi đầu thanh niên?",
        options: [
            "Hình thành lý tưởng sống",
            "Định hướng nghề nghiệp",
            "Tình yêu nam nữ",
            "Hình thành thế giới quan"
        ],
        answer: 3
    },
    {
        id: 208,
        question: "Hoạt động nào quy định những biến đổi chủ yếu nhất trong sự phát triển tâm lý của trẻ ở mỗi giai đoạn lứa tuổi?",
        options: [
            "Hoạt động học tập",
            "Hoạt động lao động",
            "Hoạt động chủ đạo",
            "Hoạt động vui chơi"
        ],
        answer: 2
    },
    {
        id: 209,
        question: "Theo Vygotsky dạy học và giáo dục giữ vai trò gì đối với sự phát triển tâm lý?",
        options: [
            "Tiền đề",
            "Quyết định",
            "Tác động",
            "Chủ đạo"
        ],
        answer: 3
    },
    {
        id: 210,
        question: "Cấu tạo tâm lý mới trung tâm trong nhân cách của thiếu niên là gì?",
        options: [
            "Hiện tượng dậy thì",
            "Nảy sinh nhu cầu giao tiếp với bạn bè",
            "Tình bạn khác giới",
            "Cảm giác mình là người lớn"
        ],
        answer: 3
    },
    {
        id: 211,
        question: "Hoạt động học là hoạt động đặc thù của con người, được điều khiển bởi …………. là lĩnh hội những tri thức, giá trị, kỹ năng, kỹ xảo, phương thức hành vi một cách khoa học và hệ thống.",
        options: [
            "Giáo viên",
            "Mục đích tự giác",
            "Học sinh",
            "Ý chí"
        ],
        answer: 1
    },
    {
        id: 212,
        question: "Hoạt động học được thúc đẩy bởi nhóm động cơ nào được đánh giá là tối ưu theo quan điểm sư phạm?",
        options: [
            "Động cơ quan hệ xã hội",
            "Động cơ khen thưởng",
            "Động cơ thi đua",
            "Động cơ hoàn thiện tri thức"
        ],
        answer: 3
    },
    {
        id: 213,
        question: "Khi giáo viên giao một bài toán mới trong khi những bạn khác chưa tìm ra được cách giải, thì bạn A đã giải được bài toán. Tình huống này thể hiện chỉ số nào của sự phát triển trí tuệ ở học sinh A?",
        options: [
            "Tính mềm dẻo của trí tuệ",
            "Tốc độ của sự định hướng trí tuệ",
            "Tốc độ khái quát hoá",
            "Tính tiết kiệm của tư duy"
        ],
        answer: 1
    },
    {
        id: 214,
        question: "Đặc trưng của phát triển trí tuệ là?",
        options: [
            "Sự thay đổi cấu trúc nội dung",
            "Sự thay đổi phương thức phản ánh",
            "Cả a & b đúng",
            "Cả a & b sai"
        ],
        answer: 2
    },
    {
        id: 215,
        question: "Thực chất quá trình lĩnh hội khái niệm là gì?",
        options: [
            "Quá trình dạy học",
            "Sáng tạo tri thức mới",
            "Quá trình lĩnh hội những thuộc tính bề ngoài của sự vật, hiện tượng bằng nhận thức cảm tính",
            "Quá trình chuyển nội hàm của khái niệm từ bên ngoài vào bên trong tâm lý của chủ thể"
        ],
        answer: 3
    },
    {
        id: 216,
        question: "Một bài toán có nhiều cách giải khác nhau. Học sinh A chọn cách giải ngắn gọn hơn. Điều này thể hiện chỉ số nào của sự phát triển trí tuệ?",
        options: [
            "Tính tiết kiệm của tư duy",
            "Tốc độ của sự định hướng trí tuệ",
            "Sự thấm sâu vào tài liệu, sự vật, hiện tượng",
            "Tốc độ khái quát hoá"
        ],
        answer: 0
    },
    {
        id: 217,
        question: "Mục đích cuối cùng của hoạt động dạy là gì?",
        options: [
            "Đạt được thành tích cao trong thi cử",
            "Phát triển năng lực của người học",
            "Đảm bảo nội dung giảng dạy phong phú",
            "Tạo ra văn hóa học tập"
        ],
        answer: 1
    },
    {
        id: 218,
        question: "Hoạt động học đòi hỏi con người phải tiếp thu “cái” và “cách”. “Cách” ở đây được hiểu là gì?",
        options: [
            "Con đường hay cách thức để con người tìm đến tri thức, giải quyết vấn đề",
            "Kiến thức các môn học",
            "Kỹ năng, kỹ xảo",
            "Tri thức khoa học"
        ],
        answer: 0
    },
    {
        id: 219,
        question: "Về mặt nội dung, khái niệm phản ánh điều gì?",
        options: [
            "Phản ánh thuộc tính bề ngoài của sự vật, hiện tượng",
            "Chính bản thân sự vật, hiện tượng",
            "Phản ánh thuộc tính bản chất của sự vật, hiện tượng",
            "Phương thức lĩnh hội"
        ],
        answer: 2
    },
    {
        id: 220,
        question: "Quá trình lĩnh hội khái niệm sẽ trải giai đoạn nào?",
        options: [
            "Học sinh chiếm lĩnh được “nội dung” của khái niệm, tức cái tổng quát",
            "Rèn luyện củng cố khái niệm, tức chuyển cái tổng quát vào các trường hợp cụ thể",
            "Cả a & b đều đúng",
            "Cả a & b đều sai"
        ],
        answer: 2
    },
    {
        id: 221,
        question: "Tri thức đạo đức là gì?",
        options: [
            "Sự hiểu biết về các chuẩn mực đạo đức",
            "Sự cảm nhận về hành vi của người khác",
            "Sự học thuộc lòng các nguyên tắc đạo đức",
            "Sự tin tưởng vào tính chính nghĩa của đạo đức"
        ],
        answer: 0
    },
    {
        id: 222,
        question: "Ý chí đạo đức hướng vào điều gì?",
        options: [
            "Thúc đẩy hành vi tiêu cực",
            "Học thuộc các nguyên tắc đạo đức",
            "Cảm nhận về hành vi của người khác",
            "Tạo ra giá trị đạo đức"
        ],
        answer: 3
    },
    {
        id: 223,
        question: "Trong một buổi thảo luận tại trường, Lan và Minh đang tranh luận về mối quan hệ giữa tri thức đạo đức và niềm tin đạo đức. Lan cho rằng chúng có mối quan hệ chặt chẽ với nhau, trong khi Minh lại không đồng ý. Mối quan hệ giữa tri thức đạo đức và niềm tin đạo đức là gì?",
        options: [
            "Chúng chỉ liên quan đến cảm xúc",
            "Chúng không ảnh hưởng đến hành vi đạo đức",
            "Chúng có mối quan hệ chặt chẽ với nhau",
            "Chúng hoàn toàn độc lập"
        ],
        answer: 2
    },
    {
        id: 224,
        question: "Giáo dục đạo đức nhằm mục đích gì?",
        options: [
            "Hình thành phẩm chất đạo đức cho học sinh",
            "Giúp học sinh học thuộc lòng các nguyên tắc",
            "Chỉ dạy tri thức đạo đức",
            "Khuyến khích hành vi tiêu cực"
        ],
        answer: 0
    },
    {
        id: 225,
        question: "Niềm tin đạo đức có thể ảnh hưởng đến hành vi của con người như thế nào?",
        options: [
            "Chỉ ảnh hưởng đến hành vi trong một số tình huống",
            "Giúp hình thành hành vi tích cực",
            "Chỉ ảnh hưởng đến hành vi tiêu cực",
            "Không ảnh hưởng gì"
        ],
        answer: 1
    },
    {
        id: 226,
        question: "Hành vi đạo đức là hành động ........ được thúc đẩy bởi động cơ có ý nghĩa về mặt đạo đức",
        options: [
            "Tự do",
            "Tự chủ",
            "Tự giác",
            "Tự nhiên"
        ],
        answer: 2
    },
    {
        id: 227,
        question: "Tiêu chuẩn đánh giá hành vi đạo đức bao gồm:",
        options: [
            "Tính hợp pháp của hành vi, tính không vụ lợi, tính có ích của hành vi",
            "Tính liên quan của hành vi, tính có ích của hành vi, tính không vụ lợi",
            "Tính ý nghĩa của hành vi, tính không vụ lợi, tính có ích của hành vi",
            "Tính tự giác của hành vi, tính có ích của hành vi, tính không vụ lợi"
        ],
        answer: 3
    },
    {
        id: 228,
        question: "Nam đang đứng trước một tình huống khó xử khi bạn của cô ấy là Tuấn, đề nghị làm điều gì đó không đúng đắn. Đâu là yếu tố định hướng hành vi đạo đức của Nam trong tình huống này?",
        options: [
            "Niềm tin đạo đức",
            "Thói quen đạo đức",
            "Động cơ đạo đức",
            "Tri thức đạo đức"
        ],
        answer: 3
    },
    {
        id: 229,
        question: "Yếu tố nào là động lực chính làm cơ sở cho những hành động của con người, biến hành động của con người thành hành vi đạo đức.",
        options: [
            "Động cơ đạo đức",
            "Tri thức đạo đức",
            "Niềm tin đạo đức",
            "Tình cảm đạo đức"
        ],
        answer: 0
    },
    {
        id: 230,
        question: "Giáo dục đạo đức nhằm mục đích gì?",
        options: [
            "Giúp học sinh học thuộc lòng các nguyên tắc đạo đức",
            "Cung cấp tri thức đạo đức",
            "Khuyến khích hành vi đạo đức",
            "Hình thành phẩm chất đạo đức cho học sinh"
        ],
        answer: 3
    },
    {
        id: 231,
        question: "Chủ thể tư vấn, hỗ trợ học sinh trong hoạt động giáo dục và dạy học là:",
        options: [
            "Hiệu trưởng, hiệu phó, Các lực lượng giáo dục khác trong nhà trường",
            "Giáo viên chủ nhiệm; giáo viên bộ môn, Bí thư Đoàn Thanh niên Cộng sản Hồ Chí Minh",
            "Cán bộ, giáo viên kiêm nhiệm công tác tư vấn tâm lí cho học sinh",
            "Cả a,b và c"
        ],
        answer: 3
    },
    {
        id: 232,
        question: "Khả năng giáo viên tập trung chú ý, quan tâm, thấu hiểu suy nghĩ, cảm xúc, vấn đề của học sinh và đưa ra những phản hồi phù hợp giúp học sinh nhận biết rằng mình đang được quan tâm, chia sẻ là kỹ năng nào sau đây?",
        options: [
            "Đặt câu hỏi",
            "Phản hồi",
            "Lắng nghe",
            "Chia sẻ"
        ],
        answer: 2
    },
    {
        id: 233,
        question: "Tư vấn, hỗ trợ học sinh trong dạy học và giáo dục là hoạt động ………….. của giáo viên và các lực lượng khác hướng đến tất cả học sinh trong nhà trường nhằm đảm bảo sức khỏe thể chất và tâm lí ổn định, tạo điều kiện tốt nhất cho các em tham gia học tập, rèn luyện và phát triển bản thân.",
        options: [
            "Trợ giúp",
            "Tác động",
            "Giúp đỡ",
            "Hỗ trợ"
        ],
        answer: 0
    },
    {
        id: 234,
        question: "Hoạt động nào nhằm phát hiện và can thiệp kịp thời cho học sinh gặp khó khăn tâm lý?",
        options: [
            "Hoạt động tư vấn",
            "Hoạt động trị liệu",
            "Hoạt động điều phối",
            "Hoạt động đánh giá"
        ],
        answer: 0
    },
    {
        id: 235,
        question: "Hoạt động hỗ trợ tâm lý học đường hướng đến việc chăm sóc sức khỏe tâm thần cho ai?",
        options: [
            "Học sinh",
            "Phụ huynh và giáo viên",
            "Cán bộ nhà trường và nhà quản lý giáo dục",
            "Tất cả các thành viên trong nhà trường"
        ],
        answer: 3
    },
    {
        id: 236,
        question: "Nếu học sinh gặp khó khăn vượt quá khả năng tư vấn, hỗ trợ của giáo viên thì giáo viên sẽ:",
        options: [
            "Trao đổi với cha mẹ học sinh để gia đình của các em tự thu xếp",
            "Báo cáo Ban Giám hiệu để đưa ra quyết định xử lí cuối cùng",
            "Cố gắng tư vấn, hỗ trợ tâm lí cho học sinh theo hướng chuyên sâu hơn.",
            "Phối hợp với cha mẹ học sinh và các lực lượng khác để cùng đánh giá, hỗ trợ học sinh, có thể đề nghị chuyển đến cơ sở hỗ trợ chuyên sâu nếu thấy cần thiết."
        ],
        answer: 3
    },
    {
        id: 237,
        question: "Việc phân tích trường hợp thực tiễn về tư vấn, hỗ trợ học sinh THPT nên dựa trên căn cứ nào?",
        options: [
            "Mức độ khó khăn mà học sinh gặp phải và các nguồn lực có thể hỗ trợ",
            "Nhu cầu của học sinh và gia đình học sinh",
            "Thời gian mà giáo viên có thể dành cho việc tư vấn, hỗ trợ",
            "Tất cả những căn cứ trên"
        ],
        answer: 3
    },
    {
        id: 238,
        question: "Hoạt động tư vấn, hỗ trợ học sinh nên được thực hiện:",
        options: [
            "Khi học sinh và gia đình các em có nhu cầu được hỗ trợ",
            "Thường xuyên, liên tục, kịp thời, phù hợp với khó khăn của học sinh",
            "Theo định kì, theo các hoạt động cụ thể",
            "Tùy theo điều kiện và khả năng của giáo viên"
        ],
        answer: 1
    },
    {
        id: 239,
        question: "Để hỗ trợ tâm lý dự phòng cho học sinh, giáo viên có thể làm gì?",
        options: [
            "Quan sát và nhận diện các dấu hiệu sớm của vấn đề",
            "Trò chuyện, lắng nghe và thiết lập tốt mối quan hệ với học sinh",
            "Tổ chức các hoạt động thư giãn, giải trí để gắn kết học sinh với nhau",
            "Tất cả các câu trên"
        ],
        answer: 3
    },
    {
        id: 240,
        question: "Biểu hiện trầm cảm của một học sinh có thể được nhận biết qua những dấu hiệu nào?",
        options: [
            "Cảm xúc trầm buồn thường xuyên, ít trò chuyện với bạn bè",
            "Kết quả học tập sa sút, thiếu chủ động tương tác bài học",
            "Rút lui khỏi bạn bè và hoạt động xã hội",
            "Tất cả các câu trên"
        ],
        answer: 3
    },
    {
        id: 241,
        question: "Rào cản nào sau đây thường gặp nhất trong giao tiếp sư phạm:",
        options: [
            "Sự khác biệt về văn hóa và kinh nghiệm sống giữa giáo viên và học sinh.",
            "Thiếu kỹ năng giao tiếp của giáo viên.",
            "Môi trường học tập không phù hợp.",
            "Thái độ tiêu cực của học sinh."
        ],
        answer: 0
    },
    {
        id: 242,
        question: "Theo bạn, lợi ích của việc rèn luyện kỹ năng định hướng đối với một người giáo viên là gì?",
        options: [
            "Giúp giáo viên có các phương án ứng xử khác nhau.",
            "Có cơ hội được tìm hiểu tính cách và có biện pháp giáo dục học sinh hiệu quả.",
            "Thấu hiểu và dự đoán được trước các vấn đề có thể xảy ra và để có đề xuất được các giải pháp xử lý phù hợp.",
            "Cả 3 ý trên đều đúng."
        ],
        answer: 3
    },
    {
        id: 243,
        question: "Kỹ năng lắng nghe tích cực trong giao tiếp sư phạm bao gồm:",
        options: [
            "Ngắt lời để hỏi lại.",
            "Chỉ tập trung vào ý chính mà người nói muốn truyền đạt.",
            "Đặt câu hỏi mở để tìm hiểu sâu hơn về ý kiến của người khác.",
            "Đưa ra đánh giá về ý kiến của người khác ngay lập tức."
        ],
        answer: 2
    },
    {
        id: 244,
        question: "Giao tiếp sư phạm có vai trò như thế nào với hoạt động sư phạm?",
        options: [
            "Là thước đo , nền tảng của hoạt động sư phạm",
            "Là công cụ , phương tiện , điều kiện của hoạt động sư phạm",
            "Là thước đo của hoạt động sư phạm",
            "Là công cụ của hoạt động sư phạm"
        ],
        answer: 1
    },
    {
        id: 245,
        question: "Cho các trường hợp nào sau đây là giao tiếp sư phạm: TH1: Giáo viên A đang báo cáo với hiệu trưởng tình hình lớp học. TH2: Hai giáo viên đi họp nói chuyện với nhau. TH3: Cô D đang giảng bài cho lớp 9A. TH4: Thầy C đang nói chuyện với bảo vệ về vấn đề khóa cửa của lớp mình.",
        options: [
            "TH3",
            "TH2",
            "TH4",
            "TH1"
        ],
        answer: 0 // a (Dựa trên thông tin "[đúng]" trong file)
    },
    {
        id: 246,
        question: "Xác định phong cách giao tiếp của giáo viên trong hai câu thơ sau: “Sao không chịu học bài? Thưa cô ….nhà ….dầu….hết / Ngồi xuống ngay điểm một / Lười học! Chỉ ham chơi!” (Trong lớp – Phí Văn Trân)",
        options: [
            "Phong cách dân chủ",
            "Phong cách độc đoán",
            "Phong cách tự do"
        ],
        answer: 0
    },
    {
        id: 247,
        question: "KD. Usinxki: “Nhân cách của người thầy giáo có sức mạnh to lớn đến mức không thể thay thế bằng sách giáo khoa, bằng lời, khuyên bảo đạo đức, bằng hệ thống khen thưởng và kỷ luật nào cả”. Câu nói trên thể hiện nguyên tắc nào trong giao tiếp sư phạm?",
        options: [
            "Tính mẫu mực",
            "Tôn trọng nhân cách",
            "Thiện ý",
            "Đồng cảm"
        ],
        answer: 1
    },
    {
        id: 248,
        question: "Điền vào chỗ trống: \"Giao tiếp sư phạm là sự tiếp xúc tâm lý giữa ………. nhằm truyền đạt và lĩnh hội thông tin, đồng thời trao đổi cảm xúc, nhu cầu. nhằm xây dựng và phát triển nhân cách toàn diện ở người học.\"",
        options: [
            "Giáo viên và học sinh",
            "Giáo viên và đồng nghiệp",
            "Giáo viên và phụ huynh",
            "Tất cả các đáp án trên"
        ],
        answer: 0
    },
    {
        id: 249,
        question: "Giao tiếp sư phạm dựa trên nền tảng nào?",
        options: [
            "Sự tương tác giữa học sinh và xã hội",
            "Sự tương tác giữa giáo viên và phụ huynh",
            "Sự tương tác giữa học sinh và học sinh",
            "Sự tương tác giữa chủ thể và chủ thể"
        ],
        answer: 3
    },
    {
        id: 250,
        question: "Kỹ năng định hướng giúp giáo viên xác định điều gì của đối tượng giao tiếp?",
        options: [
            "Trình độ học vấn",
            "Động cơ, tâm trạng, nhu cầu",
            "Vấn đề tâm lý",
            "Sở thích cá nhân"
        ],
        answer: 2
    },
    {
        id: 251,
        question: "Phương pháp nghiên cứu nào trong Tâm lý học giáo dục tập trung vào việc mô tả mối liên hệ giữa hai hay nhiều biến số để đưa ra dự báo?",
        options: [
            "Phương pháp quan sát.",
            "Phương pháp nghiên cứu trường hợp.",
            "Phương pháp thực nghiệm.",
            "Phương pháp nghiên cứu tương quan."
        ],
        answer: 3 // D
    },
    {
        id: 252,
        question: "Điểm khác biệt cơ bản giữa đối tượng nghiên cứu của Tâm lý học giáo dục với Tâm lý học phát triển là gì?",
        options: [
            "Tâm lý học giáo dục nghiên cứu sự hình thành nhân cách trong điều kiện gia đình, xã hội",
            "Tâm lý học phát triển chỉ nghiên cứu trẻ em, còn Tâm lý học giáo dục nghiên cứu mọi lứa tuổi",
            "Tâm lý học giáo dục tập trung vào các hiện tượng tâm lý trong quá trình dạy học và giáo dục",
            "Tâm lý học phát triển không liên quan đến hoạt động học tập"
        ],
        answer: 2 // C
    },
    {
        id: 253,
        question: "Khi thiết kế bài giảng, giáo viên muốn đo lường khả năng ghi nhớ từ vựng tiếng Anh của học sinh một cách khách quan. Phương pháp phù hợp là:",
        options: [
            "Trắc nghiệm",
            "Phỏng vấn",
            "Quan sát",
            "Ghi âm bài phát biểu của học sinh"
        ],
        answer: 0 // A
    },
    {
        id: 254,
        question: "Tại sao nói rằng Tâm lý học phát triển là cơ sở quan trọng cho Tâm lý học giáo dục?",
        options: [
            "Vì nó giúp xác định các tiêu chí đánh giá sự tiến bộ học tập của người học",
            "Vì nó giúp hiểu rõ các giai đoạn phát triển để thiết kế hoạt động dạy học phù hợp với từng độ tuổi",
            "Vì nó nghiên cứu đặc điểm tâm lý cá nhân trong mối quan hệ xã hội",
            "Vì nó chỉ ra các hình thức học tập hiệu quả trong môi trường văn hóa khác nhau"
        ],
        answer: 1 // B
    },
    {
        id: 255,
        question: "Một nhà nghiên cứu muốn tìm hiểu sâu về một học sinh có biểu hiện hành vi chống đối trong lớp. Phương pháp phù hợp nhất là:",
        options: [
            "Điều tra bằng phiếu hỏi",
            "Trắc nghiệm trí tuệ",
            "Nghiên cứu trường hợp",
            "Nghiên cứu tương quan"
        ],
        answer: 2 // C
    },
    {
        id: 256,
        question: "Phân tích sự khác biệt về dữ liệu thu được giữa nghiên cứu trường hợp và nghiên cứu tương quan trong Tâm lý học giáo dục cho thấy:",
        options: [
            "Trường hợp cung cấp dữ liệu định lượng, tương quan cung cấp dữ liệu định tính",
            "Trường hợp đi sâu vào một cá nhân, tương quan xử lý mối liên hệ giữa các biến trên diện rộng",
            "Trường hợp mang tính bao quát, tương quan mang tính cụ thể",
            "Trường hợp chỉ dùng cho học sinh yếu, tương quan dùng cho học sinh khá"
        ],
        answer: 1 // B
    },
    {
        id: 257,
        question: "Một nhà nghiên cứu muốn tìm hiểu mối liên hệ giữa mức độ tự tin và kết quả học tập của học sinh. Phương pháp nghiên cứu phù hợp nhất là:",
        options: [
            "Nghiên cứu tương quan",
            "Nghiên cứu mô tả",
            "Nghiên cứu thực nghiệm",
            "Phỏng vấn sâu"
        ],
        answer: 0 // A
    },
    {
        id: 258,
        question: "Điểm khác biệt cơ bản giữa phương pháp quan sát và phương pháp điều tra bằng phiếu hỏi trong nghiên cứu Tâm lý học giáo dục là:",
        options: [
            "Quan sát mang tính chủ quan cao, phiếu hỏi thì khách quan",
            "Quan sát chủ yếu áp dụng với nhóm, phiếu hỏi chỉ áp dụng cá nhân",
            "Quan sát thu thập hành vi trực tiếp, phiếu hỏi thu thập ý kiến chủ quan",
            "Quan sát được dùng cho học sinh, phiếu hỏi dùng cho giáo viên"
        ],
        answer: 2 // C
    },
    {
        id: 259,
        question: "Khi xây dựng kế hoạch giảng dạy cho học sinh THPT, giáo viên cần ứng dụng thành tựu của Tâm lý học phát triển để:",
        options: [
            "Lựa chọn nội dung và phương pháp phù hợp với giai đoạn phát triển của học sinh",
            "Phát triển chương trình học thống nhất cho tất cả học sinh",
            "Áp dụng một phương pháp giảng dạy duy nhất cho mọi đối tượng",
            "Tăng cường khối lượng kiến thức để rèn luyện tư duy logic"
        ],
        answer: 0 // A
    },
    {
        id: 260,
        question: "Phân tích vai trò của Tâm lý học phát triển đối với Tâm lý học giáo dục, nhận định nào dưới đây là chính xác nhất?",
        options: [
            "Tâm lý học phát triển chỉ cung cấp kiến thức về đặc điểm tuổi học sinh",
            "Tâm lý học phát triển giúp xác định hoạt động học tập phù hợp với từng giai đoạn phát triển",
            "Tâm lý học phát triển nghiên cứu sâu hơn về nhận thức học đường",
            "Tâm lý học phát triển thay thế hoàn toàn vai trò của Tâm lý học giáo dục"
        ],
        answer: 1 // B
    },
    {
        id: 261,
        question: "Một giáo viên nhận thấy một số trẻ có khả năng ghi nhớ và kể lại các câu chuyện dài rất tốt, trong khi đó có nhiều trẻ khác lại gặp khó khăn hơn. Dựa trên quy luật nào về sự phát triển tâm lý cá nhân, bạn có thể giải thích sự khác biệt này?",
        options: [
            "Quy luật không đồng đều",
            "Quy luật toàn vẹn",
            "Quy luật mềm dẻo và khả năng bù trừ",
            "Quy luật phủ định của phủ định"
        ],
        answer: 0 // A
    },
    {
        id: 262,
        question: "Một học sinh lớp 7 đang trải qua giai đoạn nổi loạn, thường xuyên chống đối ý kiến của cha mẹ và thầy cô. Theo quan điểm của L.S. Vygotsky và các nhà Tâm lý học hoạt động, hiện tượng này có thể được xem là dấu hiệu của điều gì trong quá trình phát triển tâm lý?",
        options: [
            "Sự hình thành các thuộc tính tâm lý ổn định",
            "Sự thay đổi hoạt động chủ đạo",
            "Khủng hoảng lứa tuổi",
            "Sự phát triển theo quy luật tuần tự"
        ],
        answer: 2 // C
    },
    {
        id: 263,
        question: "Một bạn học sinh lớp 7 cảm thấy buồn bã và thu mình sau khi bị một nhóm bạn thân phê bình về cách ăn mặc. Dựa trên đặc điểm giao tiếp với bạn bè ở lứa tuổi thiếu niên, bạn hãy giải thích tại sao sự phê bình của bạn bè lại có tác động mạnh mẽ đến tâm trạng của bạn học sinh này?",
        options: [
            "Vì thiếu niên không quan tâm đến ý kiến của bạn bè.",
            "Vì thiếu niên có nhu cầu được hòa mình vào tập thể và tìm kiếm sự chấp nhận từ bạn bè.",
            "Vì thiếu niên thường cường điệu hóa những nhận xét tiêu cực.",
            "Vì thiếu niên chưa phát triển khả năng tự đánh giá."
        ],
        answer: 1 // B
    },
    {
        id: 264,
        question: "Trong một gia đình, cha mẹ thường xuyên áp đặt ý kiến và không lắng nghe quan điểm của con cái ở độ tuổi thiếu niên. Dựa trên đặc điểm giao tiếp của thiếu niên với người lớn, bạn hãy dự đoán thái độ và phản ứng có thể xảy ra ở các em?",
        options: [
            "Các em sẽ hoàn toàn tuân theo ý kiến của cha mẹ.",
            "Các em có thể có thái độ tiêu cực, chống đối, hoặc thu mình lại.",
            "Các em sẽ cố gắng giải thích và thuyết phục cha mẹ bằng mọi cách.",
            "Các em sẽ tìm đến bạn bè để chia sẻ và giải tỏa."
        ],
        answer: 1 // B
    },
    {
        id: 265,
        question: "Trong một buổi tư vấn tâm lý, một học sinh lớp 8 chia sẻ rằng em cảm thấy rất khó chịu khi bị bạn bè trêu chọc về ngoại hình. Dựa trên đặc điểm tự nhận thức của thiếu niên, bạn hãy giải thích tại sao những lời trêu chọc lại gây ra cảm xúc tiêu cực mạnh mẽ cho em?",
        options: [
            "Vì thiếu niên đang trong quá trình nhận thức rõ hơn về bản thân và nhạy cảm với những đánh giá từ người khác về vẻ bề ngoài của mình.",
            "Vì thiếu niên không quan tâm đến ngoại hình.",
            "Vì thiếu niên thường phóng đại những lời nhận xét tiêu cực.",
            "Vì thiếu niên chưa có sự ổn định về mặt cảm xúc."
        ],
        answer: 0 // A
    },
    {
        id: 266,
        question: "Trong một nhóm bạn thân lớp 8, một bạn thường xuyên bao che và nói dối thầy cô cho những lỗi lầm của bạn mình. Dựa trên đặc trưng tình bạn của thiếu niên, hành vi này thể hiện điều gì?",
        options: [
            "Sự trung thành và sẵn sàng giúp đỡ bạn bè.",
            "Sự phát triển ý thức đạo đức cá nhân.",
            "Mong muốn thể hiện sự khác biệt với người lớn.",
            "Sự ngộ nhận về chuẩn mực tình bạn sai lầm."
        ],
        answer: 3 // D
    },
    {
        id: 267,
        question: "Khi thảo luận về một vấn đề xã hội phức tạp, một học sinh lớp 8 đưa ra nhiều ý kiến trái chiều và cố gắng phân tích vấn đề từ nhiều góc độ khác nhau trước khi đưa ra kết luận của riêng mình. Hành động này thể hiện sự phát triển nào trong tư duy của thiếu niên?",
        options: [
            "Tư duy trực quan hành động.",
            "Tính độc lập và sáng tạo trong tư duy.",
            "Sự ưa lập luận và hay cãi lý.",
            "Tư duy còn phụ thuộc vào kinh nghiệm cá nhân."
        ],
        answer: 1 // B
    },
    {
        id: 268,
        question: "Một bạn học sinh lớp 11 rất đam mê môn Vật lý và dành nhiều thời gian tự học, tìm hiểu các thí nghiệm khoa học. Dựa trên đặc điểm tâm lý lứa tuổi đầu thanh niên, điều gì có thể giải thích cho sự hứng thú học tập sâu sắc và bền vững này?",
        options: [
            "Vì môn Vật lý là môn học bắt buộc trong chương trình.",
            "Vì bạn ấy muốn đạt điểm cao để làm hài lòng cha mẹ.",
            "Vì động cơ học tập của bạn ấy gắn liền với sở thích cá nhân và có thể định hướng cho nghề nghiệp tương lai liên quan đến khoa học kỹ thuật.",
            "Vì bạn ấy muốn thể hiện sự thông minh của mình với bạn bè."
        ],
        answer: 2 // C
    },
    {
        id: 269,
        question: "Trong một gia đình, cha mẹ luôn khuyến khích con cái ở độ tuổi 17 tự đưa ra ý kiến và quyết định về việc lựa chọn môn học tự chọn ở trường. Dựa trên đặc điểm tâm lý lứa tuổi đầu thanh niên, cách ứng xử này của cha mẹ có tác động tích cực đến sự phát triển nào của con cái?",
        options: [
            "Sự phát triển về thể chất và chiều cao.",
            "Sự phát triển về khả năng ghi nhớ kiến thức.",
            "Sự phát triển về kỹ năng giao tiếp với bạn bè.",
            "Sự phát triển ý thức về tính người lớn và nhu cầu độc lập trong việc đưa ra quyết định."
        ],
        answer: 3 // D
    },
    {
        id: 270,
        question: "Một học sinh lớp 10 bắt đầu có những rung cảm lãng mạn với một bạn khác giới và cảm thấy những cảm xúc này rất mới mẻ và đặc biệt. Dựa trên đặc điểm tình yêu ở tuổi đầu thanh niên, điều này cho thấy đặc điểm nào của mối tình đầu?",
        options: [
            "Tính chất vụ lợi và thực dụng.",
            "Tính chất trong sáng, giàu cảm xúc và mang tính lý tưởng hóa.",
            "Tính chất hời hợt và dễ dàng thay đổi.",
            "Tính chất dựa trên sự nổi tiếng hoặc ngoại hình."
        ],
        answer: 1 // B
    },
    {
        id: 271,
        question: "Theo định nghĩa đã cho, hoạt động dạy của giáo viên khác biệt với các hoạt động hướng dẫn thông thường ở điểm nào?",
        options: [
            "Chỉ diễn ra trong môi trường nhà trường.",
            "Luôn hướng đến mục tiêu phát triển toàn diện người học.",
            "Mang tính chuyên nghiệp và được tổ chức một cách có hệ thống.",
            "Chỉ tập trung vào việc truyền đạt kiến thức."
        ],
        answer: 2 // C
    },
    {
        id: 272,
        question: "Vai trò chính của giáo viên trong quá trình tái tạo tri thức cho người học là gì?",
        options: [
            "Trực tiếp cung cấp toàn bộ kiến thức cho học sinh.",
            "Chỉ tập trung vào việc kiểm tra mức độ hiểu bài của học sinh.",
            "Yêu cầu học sinh ghi nhớ chính xác những gì giáo viên truyền đạt.",
            "Sử dụng tri thức đã chọn lọc như là công cụ để tổ chức và hướng dẫn học sinh tự xây dựng lại kiến thức đó."
        ],
        answer: 3 // D
    },
    {
        id: 273,
        question: "Theo định nghĩa đã cho, hoạt động học của con người được xem là \"đặc thù\" vì điều gì?",
        options: [
            "Nó được điều khiển bởi mục đích tự giác là lĩnh hội kiến thức, kỹ năng và các giá trị một cách khoa học và hệ thống.",
            "Nó được thúc đẩy bởi sự ép buộc từ bên ngoài.",
            "Nó diễn ra một cách ngẫu nhiên và không có mục đích rõ ràng.",
            "Nó chỉ diễn ra trong môi trường giáo dục chính thức."
        ],
        answer: 0 // A
    },
    {
        id: 274,
        question: "Khi nói về việc \"hoạt động học được điều khiển một cách có ý thức nhằm tiếp thu tri thức\", ý nào sau đây thể hiện rõ nhất vai trò có ý thức của người dạy?",
        options: [
            "Người dạy chỉ cần truyền đạt kiến thức một cách chính xác.",
            "Người dạy phải có ý thức rõ trách nhiệm trong việc tổ chức và thiết kế các nhiệm vụ học tập.",
            "Người dạy không cần quan tâm đến hình thức trình bày tri thức.",
            "Người dạy chỉ cần kiểm tra kết quả học tập của học sinh."
        ],
        answer: 1 // B
    },
    {
        id: 275,
        question: "Động cơ học tập thuộc nhóm \"hoàn thiện tri thức\" khác biệt với nhóm \"quan hệ xã hội\" ở điểm nào?",
        options: [
            "Động cơ hoàn thiện tri thức tạo ra nhiều áp lực tâm lý hơn.",
            "Động cơ quan hệ xã hội quan trọng hơn động cơ hoàn thiện tri thức.",
            "Động cơ hoàn thiện tri thức trực tiếp xuất phát từ sự khao khát hiểu biết và giải quyết vấn đề.",
            "Cả hai loại động cơ này đều có bản chất giống nhau."
        ],
        answer: 2 // C
    },
    {
        id: 276,
        question: "Mô hình \"mã hóa\" khác biệt với mô hình \"gần giống vật thật\" ở điểm nào?",
        options: [
            "Mô hình \"mã hóa\" có tính trực quan cao hơn.",
            "Mô hình \"mã hóa\" hoàn toàn có tính quy ước và loại bỏ yếu tố trực quan, chỉ giữ lại mối liên hệ logic thuần khiết.",
            "Cả hai loại mô hình này đều được sử dụng như nhau trong dạy học.",
            "Mô hình \"mã hóa\" chỉ phù hợp với học sinh nhỏ tuổi."
        ],
        answer: 1 // B
    },
    {
        id: 277,
        question: "Tính tích cực nhận thức của người học được thể hiện như thế nào?",
        options: [
            "Thông qua việc huy động cao các chức năng tâm lý để giải quyết nhiệm vụ nhận thức, có hứng thú, chủ động và sáng tạo.",
            "Chỉ tập trung vào việc ghi nhớ thông tin một cách máy móc.",
            "Chỉ làm theo yêu cầu của giáo viên mà không cần hiểu rõ nhiệm vụ.",
            "Chỉ nỗ lực hoàn thành các nhiệm vụ quen thuộc."
        ],
        answer: 0 // A
    },
    {
        id: 278,
        question: "Để hình thành động cơ học tập thuộc nhóm \"hoàn thiện tri thức\" cho sinh viên trong môn học của mình, bạn sẽ thiết kế hoạt động nào sau đây?",
        options: [
            "Tổ chức các cuộc thi có nhiều phần thưởng giá trị.",
            "Tạo ra các nhiệm vụ học tập mang tính thử thách, khơi gợi sự tò mò và mong muốn khám phá kiến thức mới.",
            "Thường xuyên so sánh kết quả học tập của sinh viên với nhau.",
            "Nhấn mạnh việc học tập để làm hài lòng gia đình."
        ],
        answer: 1 // B
    },
    {
        id: 279,
        question: "Một giáo viên nhận thấy học sinh thường gặp khó khăn khi giải các bài toán không theo một khuôn mẫu nhất định. Dựa trên các chỉ số phát triển trí tuệ, học sinh này đang yếu ở chỉ số nào?",
        options: [
            "Tốc độ khái quát hóa.",
            "Tính tiết kiệm của tư duy.",
            "Tốc độ của sự định hướng trí tuệ (sự nhanh trí).",
            "Tính mềm dẻo của trí tuệ."
        ],
        answer: 3 // D
    },
    {
        id: 280,
        question: "Khi giải một bài toán hình học, một học sinh trình bày một lời giải dài dòng với nhiều bước không cần thiết. Chỉ số phát triển trí tuệ nào của học sinh này cần được rèn luyện?",
        options: [
            "Tính tiết kiệm của tư duy.",
            "Tính phê phán của trí tuệ.",
            "Tính mềm dẻo của trí tuệ.",
            "Tốc độ của sự định hướng trí tuệ (sự nhanh trí)."
        ],
        answer: 0 // A
    },
    {
        id: 281,
        question: "Một học sinh chứng kiến bạn mình bị một nhóm học sinh khác bắt nạt và lấy đồ dùng học tập. Dựa trên các tiêu chí đánh giá hành vi đạo đức, hành động nào sau đây của học sinh chứng kiến được xem là có tính tự giác cao nhất?",
        options: [
            "Im lặng và không can thiệp vì sợ bị trả thù.",
            "Báo cáo sự việc với giáo viên sau khi sự việc đã kết thúc.",
            "Quay video lại sự việc để làm bằng chứng sau này.",
            "Ngay lập tức lên tiếng bênh vực bạn và yêu cầu nhóm học sinh kia dừng lại."
        ],
        answer: 3 // D
    },
    {
        id: 282,
        question: "Một học sinh thường xuyên giúp đỡ bạn bè trong học tập một cách nhiệt tình và không mong đợi sự đáp trả. Hành vi này dần trở thành một điều tự nhiên trong ứng xử của em. Yếu tố nào trong cấu trúc tâm lý của hành vi đạo đức đã được hình thành rõ rệt ở học sinh này?",
        options: [
            "Tri thức đạo đức.",
            "Niềm tin đạo đức.",
            "Tình cảm đạo đức (tình cảm vị tha).",
            "Thói quen đạo đức."
        ],
        answer: 3 // D
    },
    {
        id: 283,
        question: "Tình huống nào sau đây thể hiện rõ nhất một hành vi đạo đức theo các tiêu chí đã học?",
        options: [
            "Một nhân viên thu ngân trả lại số tiền thừa lớn cho khách hàng vì sợ bị quản lý phát hiện.",
            "Một học sinh nhường chỗ cho bạn thân đang bị đau chân trên xe buýt.",
            "Một người dân âm thầm dọn dẹp rác thải trên vỉa hè vào mỗi buổi sáng.",
            "Một người nổi tiếng quyên góp tiền từ thiện để xây dựng hình ảnh cá nhân tốt đẹp hơn."
        ],
        answer: 2 // C
    },
    {
        id: 284,
        question: "Trong quá trình giáo dục đạo đức, biện pháp nào sau đây giúp học sinh chuyển tri thức đạo đức thành niềm tin đạo đức sâu sắc nhất?",
        options: [
            "Yêu cầu học sinh học thuộc lòng các chuẩn mực đạo đức.",
            "Tạo cơ hội cho học sinh trải nghiệm các tình huống đạo đức thực tế, khuyến khích các em suy nghĩ, thảo luận và đưa ra quyết định dựa trên các giá trị đạo đức.",
            "Kể chuyện về những tấm gương đạo đức.",
            "Tổ chức các cuộc thi về kiến thức đạo đức."
        ],
        answer: 1 // B
    },
    {
        id: 285,
        question: "Một học sinh thường xuyên bị các bạn trong lớp cô lập và lan truyền những lời nói không hay sau lưng. Học sinh này đang là nạn nhân của hành vi bắt nạt nào?",
        options: [
            "Bắt nạt trực tiếp thể lực.",
            "Bắt nạt trực tiếp bằng lời nói.",
            "Bắt nạt gián tiếp.",
            "Cả bắt nạt trực tiếp và gián tiếp."
        ],
        answer: 2 // C
    },
    {
        id: 286,
        question: "Bạn muốn giúp học sinh nhận thức rõ hơn về sự tôn trọng trong các mối quan hệ. Hành động nào sau đây là phù hợp nhất để áp dụng vào giờ giáo dục công dân?",
        options: [
            "Mô tả một tình huống thiếu tôn trọng và yêu cầu học sinh đóng vai để xử lý tình huống đó",
            "Cho học sinh nghe một bài hát về tình bạn",
            "Phân tích định nghĩa từ “tôn trọng”",
            "Giao bài viết về những người nổi tiếng được kính trọng"
        ],
        answer: 0 // A
    },
    {
        id: 287,
        question: "Trong một hoạt động ngoại khóa, bạn muốn học sinh hình thành giá trị hợp tác. Bạn sẽ áp dụng hình thức nào sau đây?",
        options: [
            "Tổ chức thi đua cá nhân để kích thích cạnh tranh",
            "Giao nhiệm vụ xây dựng một kế hoạch tổ chức sự kiện theo nhóm",
            "Cho học sinh nghe một bài giảng về vai trò của hợp tác",
            "Cho học sinh viết cảm nghĩ về một người bạn tốt"
        ],
        answer: 1 // B
    },
    {
        id: 288,
        question: "Một giáo viên tổ chức thảo luận lớp về nhiều quan điểm khác nhau xoay quanh khái niệm yêu thương. Cách làm này ứng với bước nào trong tiến trình hình thành định hướng giá trị?",
        options: [
            "Bước 2: So sánh và làm nổi bật sự khác biệt",
            "Bước 4: Khai thác các giá trị khác biệt",
            "Bước 5: Xem xét các phương án",
            "Bước 6: Hành động hóa giá trị"
        ],
        answer: 0 // A
    },
    {
        id: 289,
        question: "Một học sinh lớp 8 thường xuyên giúp bạn học yếu hơn trong nhóm học tập. Hành động này thể hiện rõ nhất giá trị nào sau đây?",
        options: [
            "Hạnh phúc",
            "Hợp tác",
            "Trung thực",
            "Khoan dung"
        ],
        answer: 1 // B
    },
    {
        id: 290,
        question: "Khi giáo viên hướng dẫn học sinh quan sát các tình huống khác nhau trong đời sống để nhận ra biểu hiện của sự “khoan dung”, họ đang giúp học sinh:",
        options: [
            "Hành động theo giá trị",
            "So sánh giá trị",
            "Nhận thức và làm rõ giá trị",
            "Tự lựa chọn giá trị"
        ],
        answer: 2 // C
    },
    {
        id: 291,
        question: "Một học sinh lớp 10 thường xuyên lo lắng quá mức khi làm bài kiểm tra. Là cán bộ tâm lý học đường, bạn sẽ áp dụng phương pháp hỗ trợ nào đầu tiên để giúp em ổn định cảm xúc?",
        options: [
            "Tiến hành trị liệu tâm lý chuyên sâu ngay",
            "Hướng dẫn em tham gia nhóm kỹ năng sống để học cách quản lý căng thẳng",
            "Báo với phụ huynh yêu cầu đưa đi khám bác sĩ tâm thần",
            "Phân công giáo viên bộ môn kèm cặp chặt chẽ hơn"
        ],
        answer: 1 // B
    },
    {
        id: 292,
        question: "Bạn là nhân viên tâm lý học đường, cần đánh giá khả năng hòa nhập xã hội của một học sinh khuyết tật trí tuệ nhẹ. Hoạt động nào sau đây là phù hợp nhất?",
        options: [
            "Tham vấn tâm lý nhóm",
            "Tham gia hoạt động ngoại khóa",
            "Tăng cường học thêm cho học sinh",
            "Đánh giá tâm lý cá nhân"
        ],
        answer: 1 // B
    },
    {
        id: 293,
        question: "Một học sinh than phiền với bạn rằng em lo sợ khi phải thuyết trình trước lớp. Để giúp em giảm lo âu học đường, bạn nên làm gì?",
        options: [
            "Khuyên em tránh không thuyết trình nữa",
            "Phân công em thuyết trình ngay hôm sau để vượt qua nỗi sợ",
            "Hướng dẫn em luyện tập và hỗ trợ trình bày theo nhóm nhỏ trước",
            "Động viên em chấp nhận nỗi sợ vì ai cũng có"
        ],
        answer: 2 // C
    },
    {
        id: 294,
        question: "Một học sinh có biểu hiện chán học: hay nghỉ học, không làm bài, thờ ơ với việc học. Là giáo viên, bạn nên:",
        options: [
            "Trò chuyện riêng để tìm hiểu nguyên nhân, kết hợp đổi mới phương pháp dạy",
            "Tăng cường trả bài để em học nghiêm túc hơn",
            "Khiển trách học sinh trước lớp",
            "Giao thêm bài tập để học sinh có trách nhiệm hơn"
        ],
        answer: 0 // A
    },
    {
        id: 295,
        question: "Nếu bạn phát hiện một học sinh có dấu hiệu trầm cảm như mệt mỏi, buồn bã, giảm sút kết quả học tập, bạn nên làm gì trước tiên?",
        options: [
            "Giao bài nhiều hơn để em bận rộn và không có thời gian nghĩ ngợi",
            "Thông báo ngay cho Ban giám hiệu yêu cầu kỷ luật",
            "Trò chuyện, lắng nghe và kết nối với chuyên viên tâm lý học đường",
            "Gọi phụ huynh đến để răn đe học sinh"
        ],
        answer: 2 // C
    },
    {
        id: 296,
        question: "Một học sinh lớp bạn chủ nhiệm mê chơi game online đến mức bỏ bê học tập. Biện pháp can thiệp nào dưới đây là hợp lý nhất?",
        options: [
            "Tịch thu điện thoại và cảnh cáo trước lớp",
            "Thảo luận với học sinh, tìm hiểu nguyên nhân, phối hợp với gia đình định hướng lại thói quen",
            "Giao nhiều bài tập hơn để học sinh bận rộn",
            "Phạt lao động để học sinh sợ và chừa"
        ],
        answer: 1 // B
    },
    {
        id: 297,
        question: "Khi nhận thấy một học sinh có những biểu hiện bất thường về tâm lý, hành động đầu tiên nào của giáo viên là quan trọng nhất?",
        options: [
            "Gọi điện thoại thông báo ngay cho phụ huynh.",
            "Quan sát kỹ hơn các biểu hiện, tìm hiểu thông tin từ bạn bè và những người xung quanh, sau đó tìm cơ hội trò chuyện riêng với học sinh một cách cởi mở và lắng nghe.",
            "Phớt lờ vì cho rằng đó chỉ là những thay đổi tuổi mới lớn.",
            "Kỷ luật học sinh để răn đe."
        ],
        answer: 1 // B
    },
    {
        id: 298,
        question: "Trong một buổi trò chuyện với học sinh có biểu hiện buồn bã, giáo viên chủ nhiệm luôn giữ ánh mắt thân thiện, gật đầu lắng nghe và có những cử chỉ quan tâm. Hành động này thể hiện kỹ năng cơ bản nào trong công tác hỗ trợ tâm lý?",
        options: [
            "Kỹ năng giao tiếp bằng lời.",
            "Kỹ năng tóm lược.",
            "Kỹ năng quan sát và giao tiếp phi ngôn ngữ.",
            "Kỹ năng đặt câu hỏi."
        ],
        answer: 2 // C
    },
    {
        id: 299,
        question: "Một học sinh có biểu hiện thu mình, ít giao tiếp trong lớp. Là giáo viên chủ nhiệm, bạn sẽ áp dụng kỹ năng nào đầu tiên để hiểu rõ hơn tình huống này?",
        options: [
            "Phản ánh lại cảm xúc của học sinh",
            "Đặt câu hỏi trực tiếp về lý do em buồn",
            "Báo ngay cho ban giám hiệu",
            "Quan sát cử chỉ, nét mặt và hành vi của học sinh"
        ],
        answer: 3 // D
    },
    {
        id: 300,
        question: "Bạn là giáo viên và nhận thấy mình thường xuyên bị căng thẳng vì áp lực từ công việc và học sinh. Theo nội dung đã học, bạn nên làm gì đầu tiên để được hỗ trợ hiệu quả?",
        options: [
            "Chia sẻ với đồng nghiệp hoặc chuyên viên tâm lý",
            "Tìm hiểu tâm lý học qua sách vở",
            "Giấu kín cảm xúc và tiếp tục công việc",
            "Xin chuyển công tác sang bộ phận khác"
        ],
        answer: 0 // A
    },
    {
        id: 301,
        question: "Trong quá trình chấm bài kiểm tra, cô Phương nhận thấy một học sinh có nhiều lỗi sai nhưng lại trình bày rất cẩn thận và có nhiều cố gắng. Dựa trên nguyên tắc \"Có thiện ý trong giao tiếp sư phạm với học sinh\", cô Phương nên đưa ra nhận xét như thế nào?",
        options: [
            "Chỉ tập trung vào những lỗi sai và cho điểm thấp để học sinh cố gắng hơn.",
            "Nhận xét một cách chung chung để tránh làm học sinh buồn.",
            "Ghi nhận sự cố gắng và nỗ lực của học sinh, chỉ ra cụ thể những lỗi sai cần cải thiện và khuyến khích em tiếp tục phát huy những điểm mạnh.",
            "So sánh bài làm của học sinh này với những bạn làm tốt hơn để tạo động lực."
        ],
        answer: 2 // C
    },
    {
        id: 302,
        question: "Một giáo viên chủ nhiệm luôn lắng nghe học sinh trình bày ý kiến, không ngắt lời và cố gắng đáp ứng những nhu cầu chính đáng của các em. Nguyên tắc giao tiếp sư phạm nào đang được giáo viên này chú trọng?",
        options: [
            "Tôn trọng nhân cách học sinh trong giao tiếp sư phạm.",
            "Tính mẫu mực trong giao tiếp sư phạm của giáo viên.",
            "Có thiện ý trong giao tiếp sư phạm với học sinh.",
            "Đồng cảm trong giao tiếp sư phạm với học sinh."
        ],
        answer: 0 // A
    },
    {
        id: 303,
        question: "Một giáo viên luôn chú ý đến trang phục lịch sự, tác phong nhanh nhẹn, lời nói rõ ràng và thái độ hòa nhã khi giao tiếp với học sinh. Nguyên tắc giao tiếp sư phạm nào được thể hiện qua những hành vi này?",
        options: [
            "Tôn trọng nhân cách học sinh.",
            "Có thiện ý trong giao tiếp sư phạm.",
            "Đồng cảm trong giao tiếp sư phạm.",
            "Tính mẫu mực trong giao tiếp sư phạm của giáo viên."
        ],
        answer: 3 // D
    },
    {
        id: 304,
        question: "Một học sinh thường xuyên không làm bài tập về nhà. Thay vì trách mắng, giáo viên đã dành thời gian trò chuyện riêng để tìm hiểu nguyên nhân và cùng em xây dựng kế hoạch học tập phù hợp. Nguyên tắc nào được giáo viên ưu tiên áp dụng?",
        options: [
            "Tính mẫu mực trong giao tiếp sư phạm.",
            "Tôn trọng nhân cách học sinh.",
            "Có thiện ý trong giao tiếp sư phạm.",
            "Đồng cảm trong giao tiếp sư phạm."
        ],
        answer: 3 // D
    },
    {
        id: 305,
        question: "Một giáo viên mới vào nghề thường tỏ ra căng thẳng, dễ cáu gắt trước học sinh. Kỹ năng nào cần được rèn luyện để cải thiện tình huống này?",
        options: [
            "Kỹ năng sử dụng phi ngôn ngữ",
            "Kỹ năng đọc cảm xúc học sinh",
            "Kỹ năng điều khiển cảm xúc bản thân",
            "Kỹ năng định vị vai trò nghề nghiệp"
        ],
        answer: 2 // C
    },
    {
        id: 306,
        question: "Một học sinh trong lớp tỏ ra lơ đãng và không tập trung. Là giáo viên, bạn cần sử dụng kỹ năng giao tiếp sư phạm nào để xác định tâm trạng và nhu cầu của học sinh này?",
        options: [
            "Kỹ năng định hướng trong quá trình tiếp xúc",
            "Kỹ năng định vị vị trí xã hội",
            "Kỹ năng điều khiển cảm xúc bản thân",
            "Kỹ năng sử dụng phương tiện phi ngôn ngữ"
        ],
        answer: 0 // A
    },
    {
        id: 307,
        question: "Để tạo cảm giác gần gũi, giáo viên thường xuyên dùng ánh mắt khích lệ, nụ cười động viên khi học sinh phát biểu. Đây là biểu hiện của kỹ năng giao tiếp nào?",
        options: [
            "Định vị mục tiêu dạy học",
            "Điều khiển phản hồi cảm xúc",
            "Đọc biểu hiện nhân cách học sinh",
            "Sử dụng phương tiện phi ngôn ngữ"
        ],
        answer: 3 // D
    },
    {
        id: 308,
        question: "Trong một giờ học, giáo viên luôn khuyến khích học sinh phát biểu ý kiến, tổ chức các hoạt động nhóm để các em cùng nhau giải quyết vấn đề và lắng nghe, tôn trọng các quan điểm khác nhau. Phong cách giao tiếp sư phạm nào đang được giáo viên này thể hiện?",
        options: [
            "Phong cách giao tiếp độc đoán.",
            "Phong cách giao tiếp tự do.",
            "Phong cách giao tiếp dân chủ.",
            "Không có phong cách giao tiếp rõ ràng."
        ],
        answer: 2 // C
    },
    {
        id: 309,
        question: "Một giáo viên thường xuyên thay đổi cách ứng xử tùy theo tâm trạng và tình huống cụ thể trong lớp học, đôi khi rất gần gũi, thân mật, nhưng đôi khi lại tỏ ra nghiêm khắc và khó gần. Phong cách giao tiếp sư phạm nào đang được giáo viên này thể hiện?",
        options: [
            "Phong cách giao tiếp tự do.",
            "Phong cách giao tiếp độc đoán.",
            "Phong cách giao tiếp dân chủ.",
            "Phong cách giao tiếp ổn định."
        ],
        answer: 0 // A
    },
    {
        id: 310,
        question: "Một giáo viên luôn có xu hướng tự quyết định mọi vấn đề trong lớp học, từ việc sắp xếp chỗ ngồi đến lựa chọn hình thức kiểm tra, mà ít khi tham khảo ý kiến của học sinh. Phong cách giao tiếp sư phạm nào đang được giáo viên này áp dụng?",
        options: [
            "Phong cách giao tiếp dân chủ.",
            "Phong cách giao tiếp tự do.",
            "Phong cách giao tiếp linh hoạt.",
            "Phong cách giao tiếp độc đoán."
        ],
        answer: 3 // D
    },
    {
        id: 311,
        question: "Tâm lí học giáo dục nghiên cứu:",
        options: [
            "Bản chất của hoạt động  dạy học.",
            "Những vấn đề liên quan đến việc hình thành các phẩm chất nhân cách, hình thành định hướng giá trị đạo đức, hành vi ứng xử của học sinh.",
            "Những khó khăn tâm lí của cá nhân trong quá trình dạy học, giáo dục.",
            "Cả a,b,và c ."
        ],
        answer: 3 // 1D
    },
    {
        id: 312,
        question: " Phương pháp nghiên cứu nào sau đây cho phép thu thập ý kiến chủ quan của số đông khách thể, trên diện rộng, thời gian ngắn?",
        options: [
            "Phương pháp quan sát.",
            "Phương pháp nghiên cứu thực nghiệm.",
            "Phương pháp phỏng vấn.",
            "Phương pháp điều tra bằng phiếu hỏi."
        ],
        answer: 3 // 2D
    },
    {
        id: 313,
        question: "   Khi muốn theo dõi hành vi của cá nhân cần sử dụng  phương pháp nào sau đây?",
        options: [
            "Phỏng vấn.",
            "Quan sát",
            "Nghiên cứu trường hợp.",
            "Trắc nghiệm"
        ],
        answer: 1 // 3B
    },
    {
        id: 314,
        question: " Tâm lí học giáo dục vận dụng tìm hiểu các hoạt động nhận thức của con người để tổ chức các hoạt động dạy học, giáo dục, hỗ trợ tâm lí học đường… Cho thấy tâm lí học giáo dục có mối liên quan với:",
        options: [
            "Tâm lí học khác biệt.",
            "Tâm lí học xã hội .",
            "Tâm lí học nhận thức",
            "Tâm lí học phát triển."
        ],
        answer: 2 // 4C
    },
    {
        id: 315,
        question: "   Trong hoạt động dạy học, giáo dục hay hỗ trợ tâm lí trong trường học đảm bảo phù hợp với đặc điểm tâm lí lứa tuổi. Cho thấy tâm lí học giáo dục có mối liên quan với:",
        options: [
            "Tâm lí học khác biệt.",
            "Tâm lí học xã hội .",
            "Tâm lí học phát triển.",
            "Tâm lí học văn hóa."
        ],
        answer: 2 // 5C
    },
    {
        id: 316,
        question: " Tâm lí học giáo dục nghiên cứu những vấn đề nào liên quan đến người học?",
        options: [
            "A. Chỉ các hoạt động học tập trên lớp.",
            "B. Quá trình dạy học và các yếu tố kỹ thuật giảng dạy.",
            "C. Những vấn đề liên quan đến việc hình thành các phẩm chất nhân cách, định hướng giá trị, hành vi đạo đức, các yếu tố tác động đến động cơ, thái độ và hành vi ứng xử của người học.",
            "D. Nội dung chương trình đào tạo."
        ],
        answer: 2 // 6C
    },
    {
        id: 317,
        question: " Nội dung nào dưới đây phản ánh đúng nhiệm vụ của Tâm lí học giáo dục?",
        options: [
            "A. Phân tích quá trình dạy học từ góc độ triết học.",
            "B. Xác định phương pháp giảng dạy tích cực trong từng cấp học.",
            "C. Thiết kế chương trình giáo dục kỹ thuật số.",
            "D. Quy luật lĩnh hội tri thức, trí tuệ, hình thành kĩ năng kĩ xảo, phẩm chất nhân cách, định hướng giá trị, thái độ hành vi học sinh."
        ],
        answer: 3 // 7D
    },
    {
        id: 318,
        question: "Đối tượng nghiên cứu của Tâm lí học giáo dục không bao gồm yếu tố nào sau đây?",
        options: [
            " Sự phát triển tâm lí và điều kiện phát triển tâm lí của người học.",
            " Tác động của môi trường giáo dục đến sự phát triển tâm lí người học.",
            " Các chương trình giảng dạy và nội dung học tập theo cấp học.",
            " Những khó khăn tâm lí cá nhân trong quá trình học tập."
        ],
        answer: 2 // 8C
    },
    {
        id: 319,
        question: " Trong Tâm lí học giáo dục hiện đại, ba khuynh hướng nghiên cứu cơ bản là:",
        options: [
            " Nghiên cứu mô tả, nghiên cứu tương quan, nghiên cứu thực nghiệm.",
            " Nghiên cứu so sánh, nghiên cứu lý thuyết, nghiên cứu định tính.",
            " Nghiên cứu tình huống, nghiên cứu định lượng, nghiên cứu dự báo.",
            " Nghiên cứu tổng kết, nghiên cứu thử nghiệm, nghiên cứu thống kê."
        ],
        answer: 0 // 9A
    },
    {
        id: 320,
        question: " Yếu tố nào dưới đây có thể ảnh hưởng đến độ chính xác của thông tin khi sử dụng phương pháp điều tra bằng phiếu hỏi?",
        options: [
            " Độ dài của câu hỏi trong phiếu hỏi.",
            " Các yếu tố gây nhiễu và môi trường trả lời phiếu hỏi không đảm bảo khách quan.",
            " Số lượng câu hỏi trong phiếu hỏi.",
            " Phân loại câu hỏi trong phiếu hỏi (câu hỏi đóng hay mở)."
        ],
        answer: 1 // 10B
    },
    {
        id: 321,
        question: " Quy luật toàn vẹn trong sự phát triển tâm lý của con người chỉ ra rằng:",
        options: [
            " Tâm lí con người càng phát triển thì càng trở nên phức tạp và rời rạc.",
            " Tâm lí con người càng phát triển thì ngày càng trở nên trọn vẹn, thống nhất và bền vững hơn.",
            " Tâm lí con người luôn duy trì sự thiếu hệ thống trong suốt cuộc đời.",
            " Tâm lí của con người ngày càng trở nên mâu thuẫn và không thống nhất."
        ],
        answer: 1 // 11B
    },
    {
        id: 322,
        question: "  Quy luật chung của sự phát triển tâm lí được thể hiện bởi:",
        options: [
            "Tính không đều của sự phát triển tâm lí.",
            "Tính toàn vẹn của tâm lí.",
            "Tính mềm dẻo và khả năng bù trừ.",
            "Cả a,b, và c."
        ],
        answer: 3 // 12D
    },
    {
        id: 323,
        question: "  Nguyên nhân cơ bản của sự phát triển tâm lí ở trẻ là:",
        options: [
            " Hoàn cảnh sống và quan hệ của chính đứa trẻ.",
            " Môi trường sống của trẻ.",
            " Hoàn cảnh xã hội khi đứa trẻ ra đời.",
            " Hoàn cảnh kinh tế của gia đình đứa trẻ."
        ],
        answer: 0 // 13A
    },
    {
        id: 324,
        question: " Sự phát triển “nhảy vọt” ở tuổi thiếu niên có sự thay đổi nào sau đây?",
        options: [
            " Thay đổi về thể chất, trưởng thành về mặt sinh dục và vị thế trong gia đình, nhà trường, xã hội.",
            " Thay đổi về môi trường sống và quan điểm chính trị.",
            " Thay đổi về nhận thức nhưng không có sự thay đổi về thể chất.",
            " Thay đổi về tình cảm mà không có sự phát triển về mặt nhận thức."
        ],
        answer: 0 // 14A
    },
    {
        id: 325,
        question: "  Ở tuổi thiếu niên các em khó làm chủ cảm xúc, dễ bị kích động, hay vi phạm kỉ luật, thường có hành vi bốc đồng dễ dẫn đến bạo lực học đường là do:",
        options: [
            "Sự phát triển không cân đối của hệ xương.",
            "Hoạt động hệ thần kinh chưa cân bằng, hưng phấn mạnh.",
            "Các em muốn chứng minh mình là người lớn.",
            "Sự phát triển mạnh nhưng thiếu cân đối của hệ cơ."
        ],
        answer: 1 // 15B
    },
    {
        id: 326,
        question: " Nguyên nhân chủ yếu khiến thiếu niên thường dễ bị kích động, có cảm xúc mạnh, dễ bực tức, nổi khùng, phản ứng mạnh mẽ với các tác động bên ngoài là do:",
        options: [
            "Sự phát triển hệ xương mạnh hơn hệ cơ.",
            "Tuyến nội tiết hoạt động mạnh, ảnh hưởng tới hệ thần kinh.",
            "Sự phát triển mạnh nhưng thiếu cân đối của hệ tuần hoàn, ảnh hưởng tới hệ thần kinh.",
            "Trẻ em ý thức về sự phát triển không cân đối của cơ thể."
        ],
        answer: 1 // 16B
    },
    {
        id: 327,
        question: " Điểm nào không đúng với việc mở rộng vai trò người lớn của tuổi đầu thanh niên?",
        options: [
            " Trong gia đình, các em có nhiều quyền lợi và trách nhiệm của người lớn hơn.",
            " Ngoài xã hội, các em đã có quyền công dân.",
            " Trong nhà trường và ngoài xã hội, thái độ của người lớn thể hiện tính chất hai mặt đối với các em tuổi đầu thanh niên: vừa đòi hỏi ở các em tính độc lập, ý thức trách nhiệm, vừa đòi hỏi các em phải thích ứng với yêu cầu của người lớn",
            " Cơ thể các em đã trưởng thành, cân đối và khoẻ mạnh có thể làm được nhiều việc của người lớn."
        ],
        answer: 3 // 17D
    },
    {
        id: 328,
        question: " Đặc điểm nào sau đây đúng về đời sống tình cảm của tuổi đầu thanh niên?",
        options: [
            " Mang tính ổn định, ít thay đổi, không có nhu cầu yêu đương.",
            " Mang tính đa dạng, ổn định và xuất hiện nhu cầu yêu đương.",
            " Tình cảm luôn rối ren, không ổn định và thiếu mối quan hệ rõ ràng.",
            " Tình cảm không có sự phát triển rõ ràng trong giai đoạn này."
        ],
        answer: 1 // 18B
    },
    {
        id: 329,
        question: " Điều nào không đúng với sự phát triển thể chất của lứa tuổi đầu thanh niên?",
        options: [
            "Đa số các em đang trong thời kì phát dục .",
            "Đa số cơ thể phát triển cân đối, khỏe, đẹp như cơ thể người lớn.",
            "Sự phát triển hệ thần kinh gần tương đương với hệ thần kinh người trưởng thành.",
            "Chiều cao và cân nặng vẫn phát triển nhưng đã có chiều hướng chững lại."
        ],
        answer: 0 // 19A
    },
    {
        id: 330,
        question: "Thanh niên chưa xác định được lý tưởng sống của bản thân có thể gặp khó khăn gì?",
        options: [
            " Họ có thể gặp khó khăn trong việc đạt được mục tiêu và định hướng tương lai.",
            " Họ sẽ tự động tìm thấy lý tưởng sống mà không cần sự hỗ trợ.",
            " Họ sẽ không gặp phải bất kỳ vấn đề gì trong việc phát triển bản thân.",
            " Họ sẽ dễ dàng lựa chọn nghề nghiệp và vai trò trong xã hội."
        ],
        answer: 0 // 20A
    },
    {
        id: 331,
        question: " Tiến hành hoạt động dạy, người thầy có nhiệm vụ:",
        options: [
            " Sáng tạo ra tri thức mới.",
            " Tổ chức, điều khiển quá trình tái tạo lại tri thức, nền văn hoá xã hội ở học sinh.",
            " Tái tạo lại tri thức, nền văn hoá xã hội cho bản thân.",
            " Cả a, b và c"
        ],
        answer: 1 // 21B
    },
    {
        id: 332,
        question: " Quá trình hình thành khái niệm cho học sinh trong dạy học là quá trình:",
        options: [
            " Giáo viên tổ chức, điều khiển hoạt động học của học sinh nhằm giúp các em tái tạo lại những năng lực thực tiễn của loài người được gửi gắm trong thế giới đối tượng cho bản thân.",
            " Giáo viên mô tả, giảng giải để học sinh nắm được định nghĩa, khái niệm.",
            " Chuyển hoá khái niệm từ đầu giáo viên sang đầu học sinh.",
            " Giáo viên hệ thống hoá những kinh nghiệm vốn có trong bản thân học sinh để hình thành ở các em những khái niệm khoa học."
        ],
        answer: 0 // 22A
    },
    {
        id: 333,
        question: " Động cơ hoàn thiện tri thức là do:",
        options: [
            " Sự hấp dẫn, lôi cuốn bởi tri thức và phương pháp giành lấy tri thức đó của học sinh.",
            " Nhu cầu học và nhu cầu nhận thức của học sinh.",
            " Nguyện vọng hoàn thiện tri thức của học sinh.",
            " Cả a, b và c."
        ],
        answer: 3 // 23D
    },
    {
        id: 334,
        question: " Nếu hoạt động học tập của học sinh được thúc đẩy bởi động cơ quan hệ xã hội thì:",
        options: [
            " Học sinh thường không say sưa học tập.",
            "  Học sinh vẫn say sưa học tập do sự hấp dẫn của tri thức.",
            " Học sinh vẫn say sưa học tập, nhưng sự say sưa đó thường do sự hấp dẫn lôi cuốn của một “cái khác” nằm ngoài mục đích trực tiếp của việc học.",
            " Học sinh say sưa học vì bị hấp dẫn bởi tiến trình và kết quả học tập."
        ],
        answer: 2 // 24C
    },
    {
        id: 335,
        question: " Để hình thành động cơ học tập vững bền, giáo viên cần làm gì trong mỗi tiết học?",
        options: [
            " Giảng dạy lý thuyết cho học sinh.",
            " Thiết kế bài giảng hấp dẫn, đưa ra ví dụ thực tiễn và bài tập củng cố.",
            " Cho học sinh tham gia vào những hoạt động có tính chất vui chơi, giải trí.",
            " Để học sinh tự học mà không cần hướng dẫn của giáo viên."
        ],
        answer: 1 // 25B
    },
    {
        id: 336,
        question: " Khi giáo viên áp dụng các phương pháp dạy học tích cực, học sinh sẽ được trang bị gì?",
        options: [
            " Kỹ năng sống và kỹ năng xã hội.",
            " Cách học hiệu quả và khả năng tự học, làm việc sáng tạo.",
            " Kỹ năng thực hành và khả năng ghi nhớ.",
            " Kỹ năng tư duy phản biện mà không cần tự học."
        ],
        answer: 1 // 26B
    },
    {
        id: 337,
        question: "  Chỉ sau 2 lần giải bài tập cùng loại, học sinh đã nắm được giải tổng quát của bài tập đó. Điều này chứng tỏ sự phát triển cao của chỉ số trí tuệ nào?",
        options: [
            " Tốc độ khái quát hóa.",
            " Tốc độ định hướng của trí tuệ.",
            " Tính tiết kiệm của tư duy.",
            " Tính mềm dẻo của trí tuệ"
        ],
        answer: 0 // 27A
    },
    {
        id: 338,
        question: " Cả hai nhóm động cơ hoàn thiện tri thức và động cơ quan hệ xã hội tồn tại song song, nhưng thường được sắp xếp thành một hệ thống theo thứ bậc. Điều này có nghĩa là gì?",
        options: [
            " Động cơ hoàn thiện tri thức luôn chiếm ưu thế tuyệt đối trong tất cả học sinh.",
            " Tùy vào điều kiện dạy học và yếu tố gia đình, đặc điểm tâm lý học sinh mỗi loại động cơ có ảnh hưởng khác nhau.",
            " Động cơ quan hệ xã hội luôn mạnh mẽ hơn động cơ hoàn thiện tri thức.",
            " Các động cơ hoàn thiện tri thức và quan hệ xã hội không có sự tương tác nào với nhau."
        ],
        answer: 1 // 28B
    },
    {
        id: 339,
        question: " Khi hình thành khái niệm, điều quan trọng nhất mà giáo viên cần chú ý là:",
        options: [
            " Sử dụng nhiều ví dụ khác nhau để học sinh so sánh.",
            " Giới thiệu nhiều đối tượng nhưng không cần phân tích các thuộc tính.",
            " Đảm bảo tính đầy đủ và mềm dẻo của khái niệm, giúp học sinh vận dụng khái niệm đúng đắn.",
            " Chỉ tập trung vào việc ghi nhớ khái niệm mà không cần phân tích sâu."
        ],
        answer: 2 // 29C
    },
    {
        id: 340,
        question: " Trong quá trình dạy học, giáo viên cần thực hiện nhiệm vụ nào sau đây để đảm bảo học sinh lĩnh hội mục đích học tập?",
        options: [
            " Đảm bảo học sinh không gặp khó khăn khi thực hiện bài tập.",
            " Hướng dẫn học sinh tích cực tham gia vào các nhiệm vụ học tập, giúp hình thành khái niệm và kỹ năng.",
            " Đưa ra các bài kiểm tra khó để học sinh thử thách bản thân.",
            " Phát triển các bài học mang tính lý thuyết cao, ít liên quan đến thực tế."
        ],
        answer: 1 // 30B
    },
    {
        id: 341,
        question: " Khi nào nhu cầu đạo đức trở thành động cơ đạo đức?",
        options: [
            " Khi nó được thể hiện trong hành vi đạo đức cụ thể.",
            " Khi gặp đối tượng có thể thỏa mãn nó trong một tình huống cụ thể.",
            " Khi nó được nhận thức rõ ràng trong tâm trí chủ thể.",
            " Khi nó bị ức chế bởi các yếu tố bên ngoài."
        ],
        answer: 1 // 31B
    },
    {
        id: 342,
        question: " Yếu tố xoá đi khoảng cách giữa ý thức đạo đức với hành vi đạo đức, làm ý thức đạo đức thống nhất với hành vi đạo đức là:",
        options: [
            " Niềm tin đạo đức.",
            " Tình cảm đạo đức.",
            " Thói quen đạo đức.",
            " Thiện chí"
        ],
        answer: 2 // 32C
    },
    {
        id: 343,
        question: "Câu 33. Cách hiểu nào không đúng về động cơ đạo đức trong các động cơ sau?",
        options: [
            " Động cơ đạo đức thể hiện giá trị của hành vi đạo đức.",
            " Động cơ đạo đức là động cơ có ý nghĩa về đạo đức.",
            " Động cơ thể hiện sức mạnh của hành vi đạo đức.",
            " Động cơ có thể mâu thuẫn với mục đích trực tiếp của hành động cụ thể."
        ],
        answer: 3 // 33D
    },
    {
        id: 344,
        question: " Các tiêu chí để đánh giá một hành vi đạo đức là:",
        options: [
            " Tính không vụ lợi, tính có ích của hành vi, tính tự giác của hành vi.",
            " Tính lợi ích, tính tự giác, tính không vụ lợi.",
            " Tính có ích của đạo đức, tính tự chủ của đạo đức, tính tôn trọng.",
            " Tính tự giác của hành vi, tính tự chủ của hành vi, tính không vụ lợi."
        ],
        answer: 0 // 34A
    },
    {
        id: 345,
        question: " Tình cảm đạo đức có thể được biểu hiện ở dạng nào dưới đây?",
        options: [
            " Tình cảm đối với nghĩa vụ và trách nhiệm.",
            " Tình cảm yêu thích công việc.",
            " Tình cảm thể thao.",
            " Tình cảm nghệ thuật."
        ],
        answer: 0 // 35A
    },
    {
        id: 346,
        question: " Hành vi đạo đức là:",
        options: [
            " Hành vi được thúc đẩy bởi động cơ có ý nghĩa về mặt đạo đức do cá nhân tự giác làm.",
            " Một hành vi có ích cho xã hội và cho cá nhân, không vi phạm các chuẩn mực đạo đức.",
            " Một hành vi do cá nhân tự nguyện thực hiện.",
            " Cả a, b, c"
        ],
        answer: 3 // 36D
    },
    {
        id: 347,
        question: " Tính tự giác của hành vi đạo đức được thể hiện ở:",
        options: [
            " Tính tích cực của chủ thể hành động.",
            " Ý thức được kết quả hành động và tự nguyện thực hiện.",
            " Tính tự nguyện của chủ thể hành động.",
            " Ý thức được mục đích và ý nghĩa hành động."
        ],
        answer: 1 // 37B
    },
    {
        id: 348,
        question: " Hình thành cho học sinh khả năng biết giải quyết tranh chấp một cách hòa bình thuộc nhóm giá trị nào trong các nhóm giá trị sau?",
        options: [
            "Bản thân.",
            " Các mối quan hệ.",
            " Xã hội.",
            " Môi trường."
        ],
        answer: 1 // 38B
    },
    {
        id: 349,
        question: " Đâu không phải là giá trị của bản thân?",
        options: [
            "Trách nhiệm.",
            " Ngại ngùng",
            " Nhân ái.",
            " Trung thực ."
        ],
        answer: 1 // 39B
    },
    {
        id: 350,
        question: " Giáo dục giá trị trong nhà trường chủ yếu nhằm:",
        options: [
            " Giúp học sinh đạt điểm cao trong các kỳ thi.",
            " Hướng dẫn học sinh ứng xử đúng mực với thầy cô.",
            " Hình thành giá trị và định hướng giá trị đúng đắn cho học sinh.",
            " Rèn luyện kỹ năng giao tiếp cho học sinh."
        ],
        answer: 2 // 40C
    },
    {
        id: 351,
        question: "Các khó khăn tâm lí thường gặp ở học sinh bao gồm:",
        options: [
            "Khó khăn từ phía bản thân .",
            "Khó khăn trong mối quan hệ với bạn bè, thầy cô, cha mẹ.",
            "Khó khăn từ việc lựa chọn nghề nghiệp.",
            "Cả a,b,c"
        ],
        answer: 3 // 41D
    },
    {
        id: 352,
        question: " Những khó khăn tâm lí nghiêm trọng học sinh có thể gặp bao gồm:",
        options: [
            " Không hoàn thành bài tập về nhà, không nghe lời cha mẹ.",
            " Tăng động, nói nhiều trong lớp, hay hỏi bài.",
            " Rối loạn lo âu, trầm cảm tuổi vị thành niên, nghiện game và internet.",
            " Lười biếng, ham chơi, vô lễ với thầy cô."
        ],
        answer: 2 // 42C
    },
    {
        id: 353,
        question: " Nguyên tắc đạo đức cơ bản mà giáo viên cần tuân thủ trong công tác hỗ trợ tâm lí là gì?",
        options: [
            " Cứng rắn, lý trí, công bằng, nghiêm khắc.",
            " Tôn trọng, quan tâm, chấp nhận, chân thành và đồng cảm.",
            " Hướng dẫn, theo dõi, đánh giá, phê bình.",
            " Kiểm tra, giám sát, xử lý, báo cáo."
        ],
        answer: 1 // 43B
    },
    {
        id: 354,
        question: " Khi học sinh gặp khó khăn tâm lí, nhưng giáo viên không đủ khả năng hỗ trợ hay tư vấn thì giáo viên làm cách nào dưới đây?",
        options: [
            "Trao đổi với cha mẹ để cha mẹ tự thu xếp.",
            "Báo cáo để Ban giám hiệu tư vấn, hỗ trợ cho học sinh.",
            "Cố tư vấn, hỗ trợ cho học sinh theo hướng chuyên sâu hơn.",
            "Phối hợp với cha mẹ học sinh và các lực lượng khác để cùng tư vấn hỗ trợ."
        ],
        answer: 3 // 44D
    },
    {
        id: 355,
        question: " Nhận định nào sau đây đúng khi đề cập đến bản chất của hoạt động hỗ trợ tâm lí học đường?",
        options: [
            " Hoạt động hỗ trợ tâm lí học đường hướng đến việc chăm sóc sức khỏe tâm thần cho các thành viên trong nhà trường.",
            " Hoạt động hỗ trợ tâm lý học đường cung cấp các dịch vụ tham vấn, trị liệu tâm lí cho học sinh trong trường học.",
            " Hoạt động hỗ trợ tâm lí học đường hướng đến việc phát triển tư duy và năng lực của học sinh.",
            " Hoạt động hỗ trợ tâm lí học đường phục vụ cho nhu cầu chăm sóc sức khỏe tinh thần của đội ngũ cán bộ, giáo viên nhà trường."
        ],
        answer: 0 // 45A
    },
    {
        id: 356,
        question: " Các nội dung trong hoạt động hỗ trợ tâm lí học đường gồm?",
        options: [
            " Chẩn đoán, đánh giá và tham vấn, trị liệu tâm lí.",
            " Đánh giá tâm lí, dự phòng và phát triển tâm lí, tư vấn, tham vấn và trị liệu tâm lý, hoạt động điều phối.",
            " Đánh giá tâm lí, giáo dục kỹ năng sống, tư vấn hướng nghiệp, trị liệu tâm lí, báo cáo chuyên đề sân cờ các chủ đề tâm lí.",
            " Đánh giá tâm lí, dự phòng và giáo dục kỹ năng sống, tham vấn và trị liệu tâm lý, tổ chức hoạt động trải nghiệm và hướng nghiệp cho học sinh."
        ],
        answer: 1 // 46B
    },
    {
        id: 357,
        question: " “Không thúc ép học sinh ra quyết định để giải quyết vấn đề khi học sinh chưa sẵn sàng ” là biểu hiện của nguyên tắc đạo đức nào trong hỗ trợ tâm lí cho học sinh?",
        options: [
            "Không phán xét học sinh.",
            " Tôn trọng học sinh.",
            " Bảo mật.",
            " Đảm bảo trạng thái tinh thần ổn định khi hỗ trợ tâm lí cho học sinh."
        ],
        answer: 1 // 47B
    },
    {
        id: 358,
        question: " Bạn cảm thấy mệt mỏi, kiệt sức vì thường xuyên phải lắng nghe và hỗ trợ tâm lý cho học sinh, nhưng không ai chia sẻ với bạn. Trong trường hợp này, bạn nên:",
        options: [
            "Giấu kín và tiếp tục chịu đựng vì đó là trách nhiệm của giáo viên.",
            "Bỏ mặc học sinh để tự cân bằng lại bản thân.",
            " Chủ động tìm đến sự hỗ trợ từ đồng nghiệp, ban giám hiệu hoặc chuyên viên tâm lý học đường.",
            " Nghỉ dạy một thời gian để tránh tiếp xúc với học sinh."
        ],
        answer: 2 // 48C
    },
    {
        id: 359,
        question: " Một học sinh tâm sự với bạn rằng em cảm thấy lạc lõng, không ai trong lớp muốn chơi với em. Là giáo viên, bạn sẽ phản ứng thế nào?",
        options: [
            "Khuyên em nên thay đổi tính cách để được bạn bè chấp nhận.",
            " Tổ chức một buổi sinh hoạt lớp để khơi gợi sự thấu hiểu giữa các bạn và tạo cơ hội gắn kết.",
            " Nói em đừng để tâm vì chuyện này sẽ qua.",
            " Chuyển em sang lớp khác."
        ],
        answer: 1 // 49B
    },
    {
        id: 360,
        question: "  Vai trò của giáo viên trong công tác tâm lý học đường là gì?",
        options: [
            " Vừa là người hỗ trợ, vừa là người cần được hỗ trợ trong công tác tâm lý học đường.",
            " Là người điều phối và kiêm nhiệm công tác tư vấn tâm lý cho học sinh.",
            " Vừa là người dạy, vừa là bác sĩ thăm khám, hỗ trợ tâm lý cho học sinh.",
            " Là người đảm bảo việc chăm sóc và phát triển toàn diện sức khỏe tâm thần cho học sinh."
        ],
        answer: 0 // 50A
    },
    {
        id: 361,
        question: "C Kĩ năng nào sau đây thuộc nhóm kĩ năng định hướng giao tiếp?",
        options: [
            " Kĩ năng tạo động lực học tập.",
            " Kĩ năng lắng nghe tích cực.",
            " Kĩ năng đọc trạng thái tâm lí qua nét mặt và lời nói.",
            " Kĩ năng tổ chức hoạt động nhóm."
        ],
        answer: 2 // 51C
    },
    {
        id: 362,
        question: " Biểu hiện giáo viên luôn mổ xẻ gay gắt những lỗi sai của học sinh mà không hướng dẫn, hỗ trợ học sinh cải thiện, vi phạm nguyên tắc cụ thể nào trong giao tiếp sư phạm?",
        options: [
            "Nguyên tắc tính mẫu mực.",
            " Nguyên tắc tôn trọng nhân cách học sinh.",
            " Nguyên tắc có thiện ý.",
            " Nguyên tắc đồng cảm."
        ],
        answer: 2 // 52C
    },
    {
        id: 363,
        question: "   Đâu là biểu hiện của nguyên tắc tính mẫu mực trong giao tiếp sư phạm của giáo viên?",
        options: [
            "Biết đặt mình vào vị trí, hoàn cảnh của học sinh để thấu hiểu.",
            "Có sự mẫu mực về thái độ, cử chỉ, hành vi và cách nói năng.",
            "Biết lắng nghe học sinh, gợi mở để học sinh trình bày tâm tư nguyện vọng của mình.",
            "Giáo viên không có những hành vi bộc phát ngẫu nhiên, mất lịch sự khi tiếp xúc với học sinh."
        ],
        answer: 1 // 53B
    },
    {
        id: 364,
        question: " “Thái độ của giáo viên cần thống nhất, thể hiện phù hợp với các phản ứng hành vi”. Nội dung trên đang đề cập đến biểu hiện nào của tính mẫu mực trong giao tiếp sư phạm của giáo viên?",
        options: [
            "Sự mẫu mực về trang phục.",
            " Sự mẫu mực trong thái độ, cử chỉ hành vi, cách nói năng.",
            " Sự mẫu mực trong cung cách ứng xử với học sinh",
            " Mẫu mực trong việc xử lý tình huống và cách giải quyết vấn đề trong hoạt động nghề nghiệp."
        ],
        answer: 1 // 54B
    },
    {
        id: 365,
        question: " Biểu hiện giáo viên cảm thông với những hoàn cảnh riêng tư, những đặc điểm riêng và cả những yếu tố thuộc về cá tính của học sinh thuộc nguyên tắc cụ thể nào trong giao tiếp sư phạm?",
        options: [
            "Nguyên tắc tính mẫu mực.",
            "Nguyên tắc tôn trọng nhân cách học sinh.",
            "Nguyên tắc có thiện ý.",
            "Nguyên tắc đồng cảm."
        ],
        answer: 3 // 55D
    },
    {
        id: 366,
        question: " “Luôn chuẩn bị bài giảng chu đáo, đặt quyền lợi của học sinh lên hàng đầu” là biểu hiện của:",
        options: [
            "Tính mô phạm.",
            "Thiện ý trong giao tiếp.",
            "Tôn trọng học sinh.",
            "Đồng cảm với học sinh."
        ],
        answer: 1 // 56B
    },
    {
        id: 367,
        question: "  “Đặt mình vào vị trí của học sinh để thấu hiểu các em” là biểu hiện của nguyên tắc giao tiếp sư phạm nào?",
        options: [
            " Tôn trọng.",
            " Thiện ý.",
            " Mô phạm.",
            " Đồng cảm."
        ],
        answer: 3 // 57D
    },
    {
        id: 368,
        question: " Trong thực tế dạy học, việc lựa chọn phong cách giao tiếp nên được thực hiện như thế nào?",
        options: [
            " Nên dùng phong cách dân chủ trong mọi tình huống.",
            " Luôn sử dụng phong cách độc đoán để đảm bảo kỷ luật.",
            " Vận dụng linh hoạt các phong cách tùy theo hoàn cảnh, mục đích giao tiếp cụ thể.",
            " Duy trì lớp thoải mái, học sinh tự do ngôn luận."
        ],
        answer: 2 // 58C
    },
    {
        id: 369,
        question: " Một số học sinh cảm thấy giáo viên \"dễ quá\", không nghiêm túc, từ đó thiếu tôn trọng khi giao tiếp. Để cải thiện, bạn nên:",
        options: [
            " Thay đổi ngay sang phong cách độc đoán để lấy lại uy quyền.",
            " Bỏ qua vì học sinh sẽ tự điều chỉnh.",
            " Kết hợp thêm yếu tố nghiêm túc, thống nhất nguyên tắc rõ ràng trong các tình huống.D.",
            "Cố gắng thân thiết hơn để học sinh không xa cách."
        ],
        answer: 2 // 59C
    },
    {
        id: 370,
        question: " Khi phát hiện học sinh THPT của mình đang có quan hệ “tình yêu tuổi học trò”, giáo viên nên làm gì cho phù hợp?",
        options: [
            " Cấm cản, giáo dục tư tưởng cho học sinh việc quan trọng nhất của tuổi này là học để thi đậu đại học.",
            " Tôn trọng, lắng nghe, giáo dục giá trị tình yêu và kỹ năng thể hiện tình cảm phù hợp để học sinh biết cách ứng xử đúng đắn trong tình yêu tuổi học trò.",
            " Tôn trọng, kiên quyết với quan điểm “học tập trước, yêu đương sau” và định hướng cho học sinh xử lý, kết thúc chuyện tình cảm “không có kết quả” đó.",
            " Tiếp cận với các học sinh đang yêu để khuyên nhủ, động viên các em không nên tiếp tục mối quan hệ yêu đương vì sẽ ảnh hưởng rất lớn đến tâm lý và việc học."
        ],
        answer: 1 // 60B
    },
];
const essayQuestions = [
    "Tình huống 1: Trong giờ Toán, thầy Hùng phát hiện An đang nói chuyện riêng. Dù đã được nhắc nhở nhẹ nhàng lần một, An vẫn tiếp tục quay xuống bàn dưới tán gẫu. Mất bình tĩnh, thầy Hùng quát lớn: \"Cậu ra ngay khỏi lớp cho tôi!\" và kiên quyết đuổi An ra ngoài. Câu hỏi: Thầy Hùng đã vi phạm NGHIÊM TRỌNG NHẤT nguyên tắc gì trong giao tiếp sư phạm? Nếu là thầy Hùng, anh/chị sẽ xử lý tình huống này thế nào?",
    "Tình huống 2:  Giờ Hóa học, cô Mai gọi Bình lên bảng giải bài tập cũ. Dù cô đã gợi ý nhiều lần, Bình vẫn lúng túng không làm được. Quá thất vọng, cô Mai gõ thước xuống bàn và nói trước lớp: \"Có bài dễ thế này mà cũng không hiểu, đúng thật là nước đổ đầu vịt\". Lời nói của cô Mai vi phạm nguyên tắc giao tiếp sư phạm nào? Anh/chị hãy đưa ra cách giải quyết sư phạm phù hợp với nguyên tắc giao tiếp sư phạm.",
    "Tình huống 3:Dạo gần đây, Nam thường xuyên đi học muộn vào tiết đầu. Sáng nay, khi Nam vừa bước vào cửa, mồ hôi nhễ nhại, cô Lan (giáo viên chủ nhiệm) không để Nam giải thích mà phạt em đứng ở góc lớp suốt tiết học và ghi tên vào sổ đầu bài. Thực tế, hôm nay trên đường đi Nam đã nán lại để giúp một em nhỏ bị ngã xe. Câu hỏi: Phân tích nguyên tắc giao tiếp sư phạm bị vi phạm trong tình huống trên. Cách xử lý phù hợp của anh/chị là gì?. ",
    "Tình huống 4: Em B là học sinh cá biệt, liên tục vi phạm nội quy nhưng lại là con của Chủ tịch huyện. Sợ ảnh hưởng đến bản thân, giáo viên chủ nhiệm luôn bao che, không ghi sổ kỷ luật, thậm chí luôn bênh vực em B khi có mâu thuẫn với bạn khác khiến tập thể lớp vô cùng bất mãn. Sự nhân nhượng này vi phạm nguyên tắc giáo dục nào? Nếu anh/chị là giáo viên trong tình huống trên anh/chị sẽ giải quyết như nào ?"
    
];
