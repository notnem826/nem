// 1. DANH SÁCH 51 CÂU NÓI TRUYỀN CẢM HỨNG (GIỮ NGUYÊN 100% TÁC GIẢ)
const quoteDatabase = [
    {
        en: "“Don’t count the days, make the days count.” -Muhammad Ali",
        vi: "“Đừng đếm ngày tháng, hãy để ngày tháng có ý nghĩa.” -Muhammad Ali",
        ja: "「日数を数えるのではなく、日々を価値あるものにしなさい。」 -Muhammad Ali"
    },
    {
        en: "“Persistence can change failure into extraordinary achievement.” -Matt Biondi",
        vi: "“Sự kiên trì có thể biến thất bại thành thành tựu phi thường.” -Matt Biondi",
        ja: "「粘り強さは失敗を並外れた成果に変えることができる。」 -Matt Biondi"
    },
    {
        en: "“The real purpose of running isn’t to win a race. It’s to test the limits of the human heart.” -Bill Bowerman",
        vi: "“Mục đích thực sự của việc chạy không phải là chiến thắng cuộc đua, mà là thử thách giới hạn của trái tim con người.” -Bill Bowerman",
        ja: "「走る本当の目的はレースに勝つことではない。人間の心の限界を試すことだ。」 -Bill Bowerman"
    },
    {
        en: "“Shoot for the moon. Even if you miss it you will land among the stars.” -Les Brown",
        vi: "“Hãy nhắm tới mặt trăng. Dù có trượt, bạn cũng sẽ hạ cánh giữa những vì sao.” -Les Brown",
        ja: "「月を目指して撃て。たとえ外れても、星々の間に着地できる。」 -Les Brown"
    },
    {
        en: "“The man who moves a mountain begins by carrying away small stones.” -Confucius",
        vi: "“Người dời được núi non bắt đầu bằng việc mang đi những hòn đá nhỏ.” -Confucius",
        ja: "「山を動かす者は、まず小さな石を運び去ることから始める。」 -Confucius"
    },
    {
        en: "“All our dreams can come true if we have the courage to pursue them.” -Walt Disney",
        vi: "“Mọi ước mơ đều có thể trở thành hiện thực nếu chúng ta có đủ can đảm để theo đuổi chúng.” -Walt Disney",
        ja: "「すべての夢は叶う。それを追い求める勇気さえあれば。」 -Walt Disney"
    },
    {
        en: "“Some people want it to happen, some wish it would happen, others make it happen.” -Michael Jordan",
        vi: "“Có người muốn điều đó xảy ra, có người ước điều đó xảy ra, người khác biến nó thành hiện thực.” -Michael Jordan",
        ja: "「それが起こることを望む人もいれば、願う人もいる。そしてそれを実現させる人もいる。」 -Michael Jordan"
    },
    {
        en: "“It always seems impossible until it’s done.” -Nelson Mandela",
        vi: "“Mọi thứ dường như luôn là bất khả thi cho đến khi nó được hoàn thành.” -Nelson Mandela",
        ja: "「何事も成し遂げられるまでは不可能に見えるものだ。」 -Nelson Mandela"
    },
    {
        en: "“The only limit to the height of your achievements is the reach of your dreams and your willingness to work for them.” -Michelle Obama",
        vi: "“Giới hạn duy nhất cho tầm cao thành tựu của bạn là tầm với của ước mơ và sự sẵn lòng nỗ lực vì chúng.” -Michelle Obama",
        ja: "「あなたの功績の限界は、夢の広さとそのために働く意欲だけだ。」 -Michelle Obama"
    },
    {
        en: "“You can’t put a limit on anything. The more you dream, the farther you get.” -Michael Phelps",
        vi: "“Bạn không thể đặt giới hạn cho bất cứ điều gì. Càng ước mơ nhiều, bạn càng tiến xa.” -Michael Phelps",
        ja: "「何事にも限界を設けてはならない。夢見れば見るほど、遠くまで行ける。」 -Michael Phelps"
    },
    {
        en: "“Discipline is the bridge between goals and accomplishment.” -Jim Rohn",
        vi: "“Kỷ luật là chiếc cầu nối giữa mục tiêu và thành tựu.” -Jim Rohn",
        ja: "「規律こそが目標と達成を結ぶ架け橋である。」 -Jim Rohn"
    },
    {
        en: "“We all have dreams. But in order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline, and effort.” -Mark Spitz",
        vi: "“Tất cả chúng ta đều có ước mơ. Nhưng để biến ước mơ thành hiện thực cần rất nhiều quyết tâm, cống hiến, kỷ luật tự giác và nỗ lực.” -Mark Spitz",
        ja: "「誰にでも夢はある。しかし夢を現実にするには、途方もない決意、献身、自制心、そして努力が必要だ。」 -Mark Spitz"
    },
    {
        en: "“Do a little more each day than you think you possibly can.” -Lowell Thomas",
        vi: "“Mỗi ngày hãy làm nhiều hơn một chút so với những gì bạn nghĩ mình có thể.” -Lowell Thomas",
        ja: "「自分ができると思うことより、毎日少しだけ多くやりなさい。」 -Lowell Thomas"
    },
    {
        en: "“Do not let what you can not do interfere with what you can do.” -John Wooden",
        vi: "“Đừng để những gì bạn không thể làm cản trở những gì bạn có thể làm.” -John Wooden",
        ja: "「できないことに、できることを邪魔させてはならない。」 -John Wooden"
    },
    {
        en: "“Strength does not come from physical capacity. It comes from an indomitable will.” -Mahatma Gandhi",
        vi: "“Sức mạnh không đến từ năng lực thể chất. Nó đến từ ý chí bất khuất.” -Mahatma Gandhi",
        ja: "「強さは身体的な能力から生まれるのではない。不屈の意志から生まれるのだ。」 -Mahatma Gandhi"
    },
    {
        en: "“If something stands between you and your success, move it. Never be denied.” -Dwayne ‘The Rock’ Johnson",
        vi: "“Nếu có điều gì cản trở bạn và thành công, hãy dẹp nó đi. Đừng bao giờ chịu khuất phục.” -Dwayne ‘The Rock’ Johnson",
        ja: "「あなたと成功の間に何かが立ち塞がるなら、それをどかせ。決して拒まれるな。」 -Dwayne ‘The Rock’ Johnson"
    },
    {
        en: "“In training, you listen to your body. In competition, you tell your body to shut up.” -Rich Froning Jr.",
        vi: "“Khi luyện tập, hãy lắng nghe cơ thể. Trong thi đấu, hãy bảo cơ thể bạn im lặng.” -Rich Froning Jr.",
        ja: "「練習では自分の体に耳を傾けよ。勝負では体に黙れと言い聞かせよ。」 -Rich Froning Jr."
    },
    {
        en: "“Motivation is what gets you started. Habit is what keeps you going.” -Jim Ryun",
        vi: "“Động lực là thứ giúp bạn bắt đầu. Thói quen là thứ giúp bạn tiếp tục.” -Jim Ryun",
        ja: "「動機が始まりを与え、習慣が継続を生む。」 -Jim Ryun"
    },
    {
        en: "“The last three or four reps is what makes the muscle grow. This area of pain divides the champion from someone else who is not a champion.” -Arnold Schwarzenegger",
        vi: "“Ba hoặc bốn hiệp cuối cùng là thứ giúp cơ bắp phát triển. Vùng đau đớn này phân định nhà vô địch với những người bình thường.” -Arnold Schwarzenegger",
        ja: "「最後の3〜4回の反復こそが筋肉を成長させる。この痛みの領域が、王者とそうでない者を分けるのだ。」 -Arnold Schwarzenegger"
    },
    {
        en: "“Every champion was once a contender that refused to give up.” -Sylvester Stallone",
        vi: "“Mỗi nhà vô địch đều từng là một kẻ thách đấu không chịu bỏ cuộc.” -Sylvester Stallone",
        ja: "「すべてのチャンピオンは、かつて諦めることを拒んだ挑戦者だった。」 -Sylvester Stallone"
    },
    {
        en: "“Our greatest glory is not in never failing, but in rising every time we fall.” -Confucius",
        vi: "“Vinh quang lớn nhất không phải là không bao giờ vấp ngã, mà là đứng dậy sau mỗi lần ngã.” -Confucius",
        ja: "「最大の栄光とは一度も失敗しないことではなく、倒れるたびに起き上がることにある。」 -Confucius"
    },
    {
        en: "“Don’t dream of winning, train for it!” -Mo Farah",
        vi: "“Đừng mơ về chiến thắng, hãy rèn luyện vì nó!” -Mo Farah",
        ja: "「勝利を夢見るな、そのために練習せよ！」 -Mo Farah"
    },
    {
        en: "“You have a choice. You can throw in the towel, or you can use it to wipe the sweat off of your face.” -Gatorade",
        vi: "“Bạn có quyền lựa chọn: hoặc là ném khăn đầu hàng, hoặc dùng nó lau mồ hôi trên mặt.” -Gatorade",
        ja: "「選択肢はある。タオルを投げ入れるか、それで顔の汗を拭くかだ。」 -Gatorade"
    },
    {
        en: "“You miss 100 percent of the shots you don’t take.” -Wayne Gretzky",
        vi: "“Bạn sẽ bỏ lỡ 100% cú sút mà bạn không thực hiện.” -Wayne Gretzky",
        ja: "「打たないシュートは100パーセント外れる。」 -Wayne Gretzky"
    },
    {
        en: "“The difference between the impossible and the possible lies in a person’s determination.” -Tommy Lasorda",
        vi: "“Sự khác biệt giữa điều bất khả thi và khả thi nằm ở sự quyết tâm của mỗi người.” -Tommy Lasorda",
        ja: "「不可能と可能の違いは、その人の決意にある。」 -Tommy Lasorda"
    },
    {
        en: "“Obstacles don’t have to stop you. If you run into a wall, don’t turn around and give up. Figure out how to climb it, go through it, or work around it.” -Michael Jordan",
        vi: "“Chướng ngại vật không thể cản bước bạn. Nếu đâm vào tường, đừng quay đầu bỏ cuộc. Hãy tìm cách trèo qua, đi xuyên qua hoặc vòng qua nó.” -Michael Jordan",
        ja: "「障害に足を止められる必要はない。壁にぶつかっても諦めて引き返すな。登るか、突き破るか、回り込む方法を見つけろ。」 -Michael Jordan"
    },
    {
        en: "“It’s not whether you get knocked down; it’s whether you get up.” -Vince Lombardi",
        vi: "“Vấn đề không phải là bạn bị đánh ngã hay không; mà là bạn có đứng dậy hay không.” -Vince Lombardi",
        ja: "「打ち倒されたかどうかではない。立ち上がったかどうかが問題なのだ。」 -Vince Lombardi"
    },
    {
        en: "“Work hard in silence. Let success be your noise.” -Frank Ocean",
        vi: "“Hãy làm việc chăm chỉ trong im lặng. Hãy để thành công tạo nên tiếng vang cho bạn.” -Frank Ocean",
        ja: "「静寂の中で懸命に働け。成功を自らの音にせよ。」 -Frank Ocean"
    },
    {
        en: "“Today I will do what others won’t, so tomorrow I can accomplish what others can’t.” -Jerry Rice",
        vi: "“Hôm nay tôi sẽ làm những điều người khác không làm, để ngày mai tôi đạt được những điều người khác không thể.” -Jerry Rice",
        ja: "「今日、他人がやらないことをする。だから明日、他人ができないことを成し遂げられる。」 -Jerry Rice"
    },
    {
        en: "“I may win and I may lose, but I will never be defeated.” -Emmitt Smith",
        vi: "“Tôi có thể thắng hoặc thua, nhưng tôi sẽ không bao giờ bị đánh bại.” -Emmitt Smith",
        ja: "「勝つこともあれば負けることもある。だが決して屈服はしない。」 -Emmitt Smith"
    },
    {
        en: "“It hurts up to a point and then it doesn’t get any worse.” -Ann Trason",
        vi: "“Nỗi đau chỉ đến một mức độ nào đó rồi sẽ không thể tồi tệ hơn nữa.” -Ann Trason",
        ja: "「ある地点までは痛むが、それ以上悪化することはない。」 -Ann Trason"
    },
    {
        en: "“I will sacrifice whatever is necessary to be the best.” -J.J. Watt",
        vi: "“Tôi sẽ hy sinh bất cứ điều gì cần thiết để trở thành người giỏi nhất.” -J.J. Watt",
        ja: "「最高になるためなら、必要なことは何でも犠牲にする。」 -J.J. Watt"
    },
    {
        en: "“If you don’t practice, you don’t deserve to win.” -Andre Agassi",
        vi: "“Nếu bạn không khổ luyện, bạn không xứng đáng có được chiến thắng.” -Andre Agassi",
        ja: "「練習しない者に、勝利を手にする資格はない。」 -Andre Agassi"
    },
    {
        en: "“Pain is temporary. Quitting lasts forever.” -Lance Armstrong",
        vi: "“Nỗi đau là tạm thời. Sự bỏ cuộc sẽ kéo dài mãi mãi.” -Lance Armstrong",
        ja: "「痛みは一過性、諦めの後悔は永遠。」 -Lance Armstrong"
    },
    {
        en: "“Success is what comes after your stop making excuses.” -Luis Galarza",
        vi: "“Thành công là những gì đến sau khi bạn ngừng tìm kiếm lý do viện cớ.” -Luis Galarza",
        ja: "「言い訳をやめた後に訪れるもの、それが成功だ。」 -Luis Galarza"
    },
    {
        en: "“When I was younger, I was always taught not to make excuses.” -Derek Jeter",
        vi: "“Khi còn trẻ, tôi luôn được dạy rằng không bao giờ được viện lý do.” -Derek Jeter",
        ja: "「若い頃、言い訳をするなと常に教えられてきた。」 -Derek Jeter"
    },
    {
        en: "“If you do the work you get rewarded. There are no shortcuts in life.” -Michael Jordan",
        vi: "“Nếu bạn chịu bỏ công sức, bạn sẽ nhận được phần thưởng. Không có đường tắt trong cuộc sống.” -Michael Jordan",
        ja: "「努力すれば報われる。人生に近道など存在しない。」 -Michael Jordan"
    },
    {
        en: "“Most people fail, not because of lack of desire, but, because of lack of commitment.” -Vince Lombardi",
        vi: "“Hầu hết mọi người thất bại không phải vì thiếu khát khao, mà vì thiếu sự cam kết.” -Vince Lombardi",
        ja: "「多くの人が失敗するのは、欲望が足りないからではなく、覚悟が足りないからだ。」 -Vince Lombardi"
    },
    {
        en: "“Unless you puke, faint, or die, keep going!” -Jillian Michaels",
        vi: "“Trừ khi bạn nôn, ngất xỉu, hoặc gục ngã, hãy tiếp tục tiến lên!” -Jillian Michaels",
        ja: "「吐くか、気絶するか、倒れるまで、前進し続けろ！」 -Jillian Michaels"
    },
    {
        en: "“Someone who is busier than you is running right now.” -Nike",
        vi: "“Ai đó bận rộn hơn bạn lúc này cũng đang chạy đấy.” -Nike",
        ja: "「あなたより忙しい誰かが、今まさに走っている。」 -Nike"
    },
    {
        en: "“Even if you’re on the right track, you’ll get run over if you just sit there.” -Will Rogers",
        vi: "“Ngay cả khi bạn đang đi đúng đường, bạn vẫn sẽ bị cán qua nếu chỉ ngồi yên một chỗ.” -Will Rogers",
        ja: "「正しい道にいても、ただ座っているだけなら轢かれてしまう。」 -Will Rogers"
    },
    {
        en: "“You shall gain, but you shall pay with sweat, blood, and vomit.” -Pavel Tsatsouline",
        vi: "“Bạn sẽ đạt được, nhưng phải trả giá bằng mồ hôi, máu và sự kiệt sức.” -Pavel Tsatsouline",
        ja: "「手に入れることはできる、だが汗と血と苦痛で代償を払わねばならない。」 -Pavel Tsatsouline"
    },
    {
        en: "“The miracle isn’t that I finished. The miracle is that I had the courage to start.” -John Bingham",
        vi: "“Phép màu không phải là tôi đã về đích. Phép màu là tôi đã có đủ can đảm để bắt đầu.” -John Bingham",
        ja: "「奇跡は完走したことではない。始める勇気があったことだ。」 -John Bingham"
    },
    {
        en: "“If you run, you are a runner. It doesn’t matter how fast or how far. It doesn’t matter if today is your first day or if you’ve been running for twenty years. There is no test to pass, no license to earn, no membership card to get. You just run.” -John Bingham",
        vi: "“Nếu bạn chạy, bạn là một người chạy bộ. Không quan trọng nhanh hay xa bao nhiêu. Không quan trọng hôm nay là ngày đầu hay bạn đã chạy hai mươi năm. Không cần vượt qua kỳ thi nào, không cần bằng cấp, không cần thẻ thành viên. Bạn chỉ cần chạy.” -John Bingham",
        ja: "「走るなら、あなたはランナーだ。速さや距離は関係ない。今日が初日でも20年走っていても関係ない。合格すべきテストも免許も会員証もいらない。ただ走るだけだ。」 -John Bingham"
    },
    {
        en: "“Go fast enough to get there, but slow enough to see.” -Jimmy Buffett",
        vi: "“Hãy đi đủ nhanh để đến đích, nhưng hãy đi đủ chậm để ngắm nhìn xung quanh.” -Jimmy Buffett",
        ja: "「たどり着くのに十分な速さで進み、見渡すのに十分な遅さで行け。」 -Jimmy Buffett"
    },
    {
        en: "“Runners don’t quit. We fade; we “hit the wall”; we’re sometimes reduced to a walk. But we keep on.” -Amby Burfoot",
        vi: "“Người chạy bộ không bỏ cuộc. Chúng ta có thể mệt lử; chúng ta có thể 'chạm đáy kiệt sức'; đôi khi phải đi bộ. Nhưng chúng ta vẫn tiếp tục.” -Amby Burfoot",
        ja: "「ランナーは諦めない。失速し、壁にぶつかり、時には歩いてしまうこともある。それでも前へ進み続ける。」 -Amby Burfoot"
    },
    {
        en: "“It never gets easier, you just get better.” -Jordan Burroughs",
        vi: "“Mọi thứ không bao giờ dễ dàng hơn, chỉ là bạn đã trở nên giỏi hơn.” -Jordan Burroughs",
        ja: "「決して楽にはならない、ただ自分が強くなるだけだ。」 -Jordan Burroughs"
    },
    {
        en: "“The road to success runs uphill.” -Willie Davis",
        vi: "“Con đường dẫn đến thành công luôn là đường dốc ngược.” -Willie Davis",
        ja: "「成功への道は常に上り坂である。」 -Willie Davis"
    },
    {
        en: "“I’m either completely committed to what I am doing or have a few screws loose, who knows.” -Courtney Dauwalter",
        vi: "“Hoặc là tôi hoàn toàn tận hiến cho những gì mình đang làm, hoặc là đầu óc tôi có chút điên rồ, ai mà biết được.” -Courtney Dauwalter",
        ja: "「自分がやっていることに全力を尽くしているか、ネジが数本外れているか、誰にも分からない。」 -Courtney Dauwalter"
    },
    {
        en: "“Running allows me to set my mind free. Nothing seems impossible. Nothing unattainable.” -Kara Goucher",
        vi: "“Chạy bộ cho phép tâm trí tôi được tự do. Không có gì dường như là bất khả thi. Không có gì là không thể với tới.” -Kara Goucher",
        ja: "「走ることは私の心を解放してくれる。不可能なことなどなく、手の届かないものなどない。」 -Kara Goucher"
    },
    {
        en: "“Run often. Run long. But never outrun your joy of running.” -Julie Isphording",
        vi: "“Hãy chạy thường xuyên. Hãy chạy đường dài. Nhưng đừng bao giờ chạy nhanh hơn niềm vui chạy bộ của bạn.” -Julie Isphording",
        ja: "「頻繁に走れ。長く走れ。だが走る喜びを追い越してしまうな。」 -Julie Isphording"
    }
];

// 2. DỮ LIỆU ĐA NGÔN NGỮ ĐỒNG BỘ 100% (VI / EN / JA)
const langData = {
    vi: {
        name: "NGUYỄN NEM",
        bio: "Chỉ là một chú mèo 🐾<br>Yêu thích đua ngựa Nhật Bản 🐎<br>Với nhạc hardstyle và Chill cùng vibe âm nhậc 🎧✨",
        visitorsText: "Khách truy cập",
        quoteBoxTitle: "Mỗi ngày nhớ một câu",
        quoteBtn: '<i class="fas fa-rotate" style="margin-right: 4px;"></i> ĐỔI CÂU MỚI',
        donateTitle: "Góc Hảo Tâm & Đầu Tư",
        donateSubtitle: "Mọi sự ủng hộ và đồng hành của bạn đều là nguồn động lực quý báu giúp tôi hoàn thiện bản thân mỗi ngày.",
        bankHolderLbl: "Chủ TK:",
        bankNumLbl: "STK (Click copy):",
        bankNameLbl: "Ngân hàng:",
        qrModalTitle: "Quét Mã QR Ủng Hộ",
        qrZoomHint: "Nhấp để phóng to",
        reviewTitle: "Mong bạn để lại đánh giá",
        reviewSubtitle: "Mỗi 1 bài đánh giá đều giúp tôi tốt lên dù tốt hay xấu",
        reviewSubmitBtn: "GỬI ĐÁNH GIÁ",
        tab5Star: "5 Sao (5-10)",
        tabFeedback: "Góp ý (1-4 Sao)",
        emptyReview5Star: "Chưa có đánh giá 5 sao nào.",
        emptyFeedback: "Chưa có góp ý nào từ 1-4 sao.",
        reviewerPlaceholder: "Tên hoặc biệt danh...",
        commentPlaceholder: "Cảm nghĩ / đóng góp ý kiến của bạn...",
        socialHeader: "Kết Nối Mạng Xã Hội",
        skillsHeader: "Kỹ Năng & Hành Trình Nghệ Thuật",
        skillPsTitle: '<i class="fas fa-wand-magic-sparkles" style="color: var(--gold-accent); margin-right:6px;"></i>Photoshop & Illustrator',
        skillPsLvl: "Trình Độ Cao",
        skillPsDesc: "Sử dụng thành thạo và chuyên sâu; tối ưu hóa hình ảnh, thiết kế đồ họa và sáng tạo visual thẩm mỹ.",
        skillAeTitle: '<i class="fas fa-film" style="color: var(--gold-accent); margin-right:6px;"></i>After Effects & Premiere Pro',
        skillAeLvl: "Đang Trau Dồi",
        skillAeDesc: "Đang ở mức trung bình, nỗ lực học hỏi để hoàn thiện kỹ năng dựng video TikTok Edit, VFX và motion graphics.",
        skillArtTitle: '<i class="fas fa-heart" style="color: var(--gold-accent); margin-right:6px;"></i>Hội Hoạ & Thẩm Mỹ Thị Giác',
        skillArtLvl: "Không Ngừng Cố Gắng",
        skillArtDesc: "Cảm quan hội họa & thẩm mỹ thị giác cao, chỉnh sửa ảnh hợp nhãn người xem; tuy chưa vẽ giỏi nhưng luôn học vẽ mỗi ngày như người mới bắt đầu!",
        playlistHeader: "Danh Sách Nhạc Yêu Thích",
        footerText: "© 2025 by Nem. Created with GitHub."
    },
    en: {
        name: "Nem Nguyen",
        bio: "Just A Cat 🐾<br>Love racing Horse in Japan 🐎<br>With hardstyle and chilling vibe music. 🎧✨",
        visitorsText: "Visitors",
        quoteBoxTitle: "Daily Motivation",
        quoteBtn: '<i class="fas fa-rotate" style="margin-right: 4px;"></i> NEXT QUOTE',
        donateTitle: "Sponsorship & Support",
        donateSubtitle: "Any contribution, big or small, is an immense motivation helping me improve every day.",
        bankHolderLbl: "Account Holder:",
        bankNumLbl: "Account No. (Click copy):",
        bankNameLbl: "Bank:",
        qrModalTitle: "Scan QR To Support",
        qrZoomHint: "Click to zoom in",
        reviewTitle: "Leave a Feedback",
        reviewSubtitle: "Every single feedback helps me grow better, whether good or bad.",
        reviewSubmitBtn: "SUBMIT FEEDBACK",
        tab5Star: "5-Star (5-10)",
        tabFeedback: "Feedback (1-4 Stars)",
        emptyReview5Star: "No 5-star reviews yet.",
        emptyFeedback: "No feedback (1-4 stars) yet.",
        reviewerPlaceholder: "Your name or nickname...",
        commentPlaceholder: "Your thoughts / suggestions...",
        socialHeader: "Social Connections",
        skillsHeader: "Skills & Artistic Journey",
        skillPsTitle: '<i class="fas fa-wand-magic-sparkles" style="color: var(--gold-accent); margin-right:6px;"></i>Photoshop & Illustrator',
        skillPsLvl: "Advanced / Master",
        skillPsDesc: "Highly proficient in photo manipulation, graphic design, and crafting captivating aesthetic visuals.",
        skillAeTitle: '<i class="fas fa-film" style="color: var(--gold-accent); margin-right:6px;"></i>After Effects & Premiere Pro',
        skillAeLvl: "Intermediate",
        skillAeDesc: "Actively mastering video editing, TikTok pacing, motion graphics, and visual effects in AE & Premiere.",
        skillArtTitle: '<i class="fas fa-heart" style="color: var(--gold-accent); margin-right:6px;"></i>Artistic Sense & Drawing Journey',
        skillArtLvl: "Never Stop Learning",
        skillArtDesc: "Strong artistic sense and visual curation. While learning sketching from scratch, constantly pushing limits without giving up!",
        playlistHeader: "Favorite Playlists",
        footerText: "© 2025 by Nem. Created with GitHub."
    },
    ja: {
        name: "ネムチュア",
        bio: "ただの猫です 🐾<br>日本の競馬が大好き 🐎<br>ハードスタイルとChillな音楽のバイブスとともに 🎧✨",
        visitorsText: "訪問者数",
        quoteBoxTitle: "今日の一言",
        quoteBtn: '<i class="fas fa-rotate" style="margin-right: 4px;"></i> 言葉を変える',
        donateTitle: "ご支援・スポンサー",
        donateSubtitle: "皆様からの温かいご支援は、日々成長し続けるための大きな励みとなります。",
        bankHolderLbl: "口座名義:",
        bankNumLbl: "口座番号 (クリックしてコピー):",
        bankNameLbl: "銀行名:",
        qrModalTitle: "応援QRコードをスキャン",
        qrZoomHint: "拡大表示",
        reviewTitle: "フィードバックを残す",
        reviewSubtitle: "良い評価も改善点も、すべての声が私を成長させてくれます。",
        reviewSubmitBtn: "レビューを送信",
        tab5Star: "5つ星評価 (5-10)",
        tabFeedback: "ご意見 (1-4星)",
        emptyReview5Star: "まだ5つ星評価はありません。",
        emptyFeedback: "まだご意見はありません。",
        reviewerPlaceholder: "お名前またはニックネーム...",
        commentPlaceholder: "ご感想やご提案をお聞かせください...",
        socialHeader: "ソーシャルリンク",
        skillsHeader: "スキル ＆ アートジャーニー",
        skillPsTitle: '<i class="fas fa-wand-magic-sparkles" style="color: var(--gold-accent); margin-right:6px;"></i>Photoshop & Illustrator',
        skillPsLvl: "上級者 / プロ",
        skillPsDesc: "高度な画像編集、グラフィックデザイン、魅力的なビジュアル制作を得意としています。",
        skillAeTitle: '<i class="fas fa-film" style="color: var(--gold-accent); margin-right:6px;"></i>After Effects & Premiere Pro',
        skillAeLvl: "中級 / 学習中",
        skillAeDesc: "After EffectsとPremiere Proで動画編集やエフェクト技術を日々磨いています。",
        skillArtTitle: '<i class="fas fa-heart" style="color: var(--gold-accent); margin-right:6px;"></i>美的センス & アートジャーニー',
        skillArtLvl: "挑戦し続ける心",
        skillArtDesc: "高い美的センスを持ち、見る人に心地よい画像加工が得意。絵の初心者として毎日諦めずに練習を続けています！",
        playlistHeader: "お気に入りのプレイリスト",
        footerText: "© 2025 by Nem. GitHubで作成。"
    }
};

let currentLang = 'vi';
let currentQuoteIndex = 0;

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const data = langData[lang];
    renderFloatingName(data.name);
    document.getElementById('bioText').innerHTML = data.bio;
    document.getElementById('viewCountLabel').textContent = data.visitorsText;

    // Cập nhật Placeholders
    document.getElementById('reviewerName').placeholder = data.reviewerPlaceholder;
    document.getElementById('reviewComment').placeholder = data.commentPlaceholder;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) {
            el.innerHTML = data[key];
        }
    });

    displayCurrentQuote();
    loadReviews();
}

// Bouncy Floating Name
function renderFloatingName(nameStr) {
    const container = document.getElementById('usernameContainer');
    container.innerHTML = '';
    nameStr.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'username-letter';
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${index * 0.08}s`;
        container.appendChild(span);
    });
}

// 3. TYPING EFFECT CHO DYNAMIC BADGE
const badgeTitles = ["Cat Profile", "Cafe Profile", "Nem Profile", "N?ne Profile"];
let badgeIndex = 0;
let charIdx = 0;
let isDeleting = false;

function updateDynamicBadge() {
    const currentTitle = badgeTitles[badgeIndex];
    const badgeEl = document.getElementById('dynamicBadge');
    
    if (isDeleting) {
        badgeEl.textContent = currentTitle.substring(0, charIdx - 1);
        charIdx--;
    } else {
        badgeEl.textContent = currentTitle.substring(0, charIdx + 1);
        charIdx++;
    }

    let speed = isDeleting ? 40 : 80;
    if (!isDeleting && charIdx === currentTitle.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        badgeIndex = (badgeIndex + 1) % badgeTitles.length;
        speed = 350;
    }
    setTimeout(updateDynamicBadge, speed);
}

// 4. QUOTES CONTROLLER
function displayCurrentQuote() {
    const quoteEl = document.getElementById('quoteDisplay');
    const item = quoteDatabase[currentQuoteIndex];
    quoteEl.style.opacity = 0;
    setTimeout(() => {
        quoteEl.textContent = item[currentLang] || item.vi;
        quoteEl.style.opacity = 1;
    }, 200);
}

function nextQuote() {
    currentQuoteIndex = Math.floor(Math.random() * quoteDatabase.length);
    displayCurrentQuote();
}

// 5. MỞ PROFILE & CHIẾU SÁNG TOÀN MÀN HÌNH & BẬT NHẠC MẶC ĐỊNH 50%
const audio = document.getElementById('bgMusicAudio');
const openingScreen = document.getElementById('openingScreen');
const playIcon = document.getElementById('playIcon');
let isPlaying = false;

function openProfile() {
    openingScreen.classList.add('opened');
    setTimeout(() => {
        openingScreen.style.display = 'none';
    }, 1200);

    // Mặc định âm lượng 50%
    audio.volume = 0.5;
    document.getElementById('volumeSlider').value = 0.5;
    document.getElementById('volumePercent').textContent = "50%";

    audio.play().then(() => {
        isPlaying = true;
        playIcon.className = 'fas fa-pause';
        toggleSpinning(true);
    }).catch(e => {
        console.log('Autoplay prevented:', e);
    });
}

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        playIcon.className = 'fas fa-play';
        toggleSpinning(false);
    } else {
        audio.play();
        playIcon.className = 'fas fa-pause';
        toggleSpinning(true);
    }
    isPlaying = !isPlaying;
}

function toggleSpinning(spin) {
    const avatars = document.querySelectorAll('.konata-main-avatar, .konata-mini-avatar');
    avatars.forEach(av => {
        if (spin) av.classList.add('spinning');
        else av.classList.remove('spinning');
    });
}

function changeVolume(val) {
    audio.volume = parseFloat(val);
    document.getElementById('volumePercent').textContent = `${Math.round(val * 100)}%`;
}

// Chuyển bài hát ngay lập tức không cần nút xác nhận
function changeTrack(src) {
    const currentVol = audio.volume;
    audio.src = src;
    audio.volume = currentVol;
    audio.currentTime = 0;
    audio.play().then(() => {
        isPlaying = true;
        playIcon.className = 'fas fa-pause';
        toggleSpinning(true);
        showToast("🎵 Đang phát: " + (src.includes("Imposter") ? "Imposter Syndrome" : "Heather x Eyes Blue"));
    }).catch(e => console.log(e));
}

// Trượt kéo Drawer Nhạc ra / vào
let isDrawerOpen = false;
function toggleMusicDrawer() {
    const drawer = document.getElementById('musicSlideDrawer');
    const arrow = document.getElementById('drawerArrowIcon');
    isDrawerOpen = !isDrawerOpen;
    if (isDrawerOpen) {
        drawer.classList.add('open');
        arrow.className = 'fas fa-chevron-right';
    } else {
        drawer.classList.remove('open');
        arrow.className = 'fas fa-chevron-left';
    }
}

// 6. THUẬT TOÁN ĐẾM LƯỢNG NGƯỜI ĐÃ XEM (UNIQUE VISITORS)
function initUniqueVisitorCounter() {
    const visitorKey = 'nem_unique_user_token_v5';
    const countKey = 'nem_unique_visitors_total_v5';

    if (!localStorage.getItem(visitorKey)) {
        localStorage.setItem(visitorKey, 'visitor_' + Date.now());
        let currentTotal = parseInt(localStorage.getItem(countKey) || '147');
        currentTotal++;
        localStorage.setItem(countKey, currentTotal);
    }

    const finalCount = localStorage.getItem(countKey) || '147';
    document.getElementById('viewCount').textContent = finalCount;
}

// 7. QR DONATE MODAL PHÓNG TO
function openQrModal() {
    document.getElementById('qrModalOverlay').classList.add('show');
}
function closeQrModal() {
    document.getElementById('qrModalOverlay').classList.remove('show');
}

// 8. REVIEW SYSTEM (2 TAB: 5 SAO & GÓP Ý 1-4 SAO)
let currentRating = 5;
let currentTab = '5star';

const toxicBlacklist = [
    "đĩ", "cave", "súc sinh", "chó đẻ", "mẹ mày", "cha mày", "ông cố nội", 
    "bố mày", "con cặc", "lồn", "óc chó", "phò", "bắc kỳ", "nam kỳ", "mọi rợ", 
    "chết tiệt", "đụ", "dkm", "đm", "vcl", "nigga", "bitch", "nigger"
];

function setRating(stars) {
    currentRating = stars;
    const starIcons = document.querySelectorAll('#ratingStars i');
    starIcons.forEach((star, index) => {
        if (index < stars) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function switchReviewTab(tab) {
    currentTab = tab;
    document.getElementById('tab5StarBtn').classList.toggle('active', tab === '5star');
    document.getElementById('tabFeedbackBtn').classList.toggle('active', tab === 'feedback');
    loadReviews();
}

function loadReviews() {
    let stored = JSON.parse(localStorage.getItem('nem_reviews_store_v5')) || [];
    const listEl = document.getElementById('reviewsList');
    listEl.innerHTML = '';

    // Lọc theo Tab 5 sao hoặc góp ý (1-4 sao)
    let filtered = stored.filter(r => currentTab === '5star' ? r.rating === 5 : r.rating < 5);

    if (filtered.length === 0) {
        const emptyMsg = currentTab === '5star' ? langData[currentLang].emptyReview5Star : langData[currentLang].emptyFeedback;
        listEl.innerHTML = `<div class="empty-reviews-text">${emptyMsg}</div>`;
        return;
    }

    // Nếu là tab 5 sao và có hơn 10 bài, lấy ngẫu nhiên 5-10 bài
    if (currentTab === '5star' && filtered.length > 10) {
        filtered = filtered.sort(() => 0.5 - Math.random()).slice(0, 10);
    }

    filtered.forEach(r => {
        const item = document.createElement('div');
        item.className = 'review-item';
        item.innerHTML = `
            <div class="review-item-header">
                <span>${escapeHtml(r.name)}</span>
                <span>${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</span>
            </div>
            <div class="review-item-comment">${escapeHtml(r.comment)}</div>
        `;
        listEl.appendChild(item);
    });
}

function submitReview(e) {
    e.preventDefault();
    const name = document.getElementById('reviewerName').value.trim();
    const comment = document.getElementById('reviewComment').value.trim();

    if (!name || !comment) return;

    const contentCheck = (name + " " + comment).toLowerCase();
    const isToxic = toxicBlacklist.some(word => contentCheck.includes(word));

    if (isToxic) {
        showToast("⚠️ Đánh giá chứa từ ngữ chưa phù hợp, vui lòng tôn trọng nhau nhé!");
        return;
    }

    let stored = JSON.parse(localStorage.getItem('nem_reviews_store_v5')) || [];
    stored.push({ name, rating: currentRating, comment });
    localStorage.setItem('nem_reviews_store_v5', JSON.stringify(stored));

    document.getElementById('reviewerName').value = '';
    document.getElementById('reviewComment').value = '';
    setRating(5);
    
    currentTab = currentRating === 5 ? '5star' : 'feedback';
    document.getElementById('tab5StarBtn').classList.toggle('active', currentTab === '5star');
    document.getElementById('tabFeedbackBtn').classList.toggle('active', currentTab === 'feedback');
    
    loadReviews();
    showToast("✨ Cảm ơn bạn rất nhiều vì đã để lại đánh giá!");
}

function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// 9. TOAST THÔNG BÁO COPY SANG TRỌNG
function showToast(msg) {
    const toast = document.getElementById('customToast');
    const toastMsg = document.getElementById('toastMsg');
    toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

function copyContact(text, type) {
    navigator.clipboard.writeText(text);
    showToast(`Đã sao chép ${type} (${text}) vào bộ nhớ tạm!`);
}

// 10. TỐI ƯU CON TRỎ CHUỘT (60FPS KHÔNG LAG & HOẠT ĐỘNG HOÀN HẢO)
const cursor = document.getElementById('customCursor');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let curX = mouseX;
let curY = mouseY;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
}, { passive: true });

function animateCursor() {
    curX += (mouseX - curX) * 0.45;
    curY += (mouseY - curY) * 0.45;
    cursor.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animateCursor);
}

if (window.innerWidth > 820) {
    animateCursor();
}

document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, input, textarea, .contact-item, .avatar-wrap, .rating-stars i, .opening-screen, .qr-wrap')) {
        cursor.classList.add('active');
    } else {
        cursor.classList.remove('active');
    }
});

// 11. HIỆU ỨNG CHÂN TRANG ĐỘC QUYỀN (HIỆN KHI CUỘN ĐÁY)
const exclusiveFooter = document.getElementById('exclusiveFooter');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;

    if (scrollPosition + windowHeight >= bodyHeight - 40) {
        exclusiveFooter.classList.add('show-footer');
    } else {
        exclusiveFooter.classList.remove('show-footer');
    }
}, { passive: true });

// 12. KHỞI TẠO HỆ THỐNG
document.addEventListener('DOMContentLoaded', () => {
    renderFloatingName(langData.vi.name);
    document.getElementById('bioText').innerHTML = langData.vi.bio;
    updateDynamicBadge();
    displayCurrentQuote();
    initUniqueVisitorCounter();
    loadReviews();
});
