// Language translations
const translations = {
    'zh-CN': {
        // Navigation
        'logo': '東森株式会社',
        'nav-home': '首页',
        'nav-services': '服务',
        'nav-destinations': '目的地',
        'nav-about': '关于我们',
        'nav-contact': '联系我们',
        
        // Hero Section
        'hero-title': '探索日本，沉浸每一寸感动',
        'hero-subtitle': '拒绝赶场式的奔波，您的专属旅程，理应由心定义。我们提供专业的旅游包车服务，以匠心精神为您定制独一无二的旅行篇章。',
        'hero-description': '无论是穿梭于东京的霓虹繁华，还是流连于京都的唐风古韵，您的专属座驾与本地司导，不仅是安全的保障，更是您探索未知的贴心旅伴。让我们聆听您的想法，为您量身打造一段关于日本的、充满温情的记忆。',
        'hero-btn-primary': '立即预订',
        'hero-btn-secondary': '了解更多',
        
        // Services Section
        'services-title': '我们的服务',
        'services-subtitle': '为您提供全方位的日本旅行解决方案',
        'service-1-title': '包车服务',
        'service-1-desc': '舒适豪华的车辆，经验丰富的司机，让您的旅程更加安心舒适。',
        'service-2-title': '行程定制',
        'service-2-desc': '根据您的兴趣和需求，量身定制专属的日本旅行路线。',
        'service-3-title': '多语言服务',
        'service-3-desc': '提供中文、日文、英文专业导游服务，消除语言障碍。',
        'service-4-title': '24小时服务',
        'service-4-desc': '全天候客户服务，随时为您解决旅行中的各种问题。',
        
        // Destinations Section
        'destinations-title': '热门目的地',
        'destinations-subtitle': '探索日本最受欢迎的旅游景点',
        'dest-1-title': '东京',
        'dest-1-desc': '现代与传统完美融合的都市，体验日本的前沿科技和传统文化。',
        'dest-2-title': '京都',
        'dest-2-desc': '千年古都，感受日本传统文化的精髓和禅意之美。',
        'dest-3-title': '大阪',
        'dest-3-desc': '美食之都，品尝最地道的日本料理和体验关西文化。',
        'dest-4-title': '北海道',
        'dest-4-desc': '自然风光秀丽，四季景色各异，是放松身心的理想之地。',
        
        // About Section
        'about-title': '关于我们',
        'about-desc': '我们是一家专业的日本包车服务公司，拥有多年的行业经验和专业的服务团队。我们致力于为每一位客户提供最优质的旅行体验，让您的日本之旅成为难忘的回忆。',
        'about-feature-1': '专业认证司机',
        'about-feature-2': '豪华舒适车辆',
        'about-feature-3': '24小时客户服务',
        'about-feature-4': '个性化定制服务',
        
        // Contact Section
        'contact-title': '联系我们',
        'contact-subtitle': '准备开始您的日本之旅了吗？立即联系我们获取更多信息',
        'contact-phone-title': '电话',
        'contact-email-title': '邮箱',
        'contact-address-title': '地址',
        'contact-address': '東京都墨田区立花四丁目23番7号椎葉302号室',
        
        // Toast Messages
        'toast-phone-copied': '电话号码已复制到剪贴板！',
        'toast-address-copied': '地址已复制到剪贴板！',
        'form-name': '姓名',
        'form-email': '邮箱',
        'form-phone': '电话',
        'form-message': '留言',
        'form-submit': '发送消息',
        
        // Footer
        'footer-desc': '東森株式会社 企業サイト。観光・ビジネス・医療・教育まで、あなたの日本での大切な瞬間を共に。',
        'nav-services-corp': '服务介绍',
        'nav-strengths': '我们的优势',
        'nav-voices': '客户之声',
        'footer-services-title': '服务',
        'footer-service-1': '包车服务',
        'footer-service-2': '行程定制',
        'footer-service-3': '多语言服务',
        'footer-service-4': '24小时服务',
        'footer-destinations-title': '目的地',
        'footer-dest-1': '东京',
        'footer-dest-2': '京都',
        'footer-dest-3': '大阪',
        'footer-dest-4': '北海道',
        'footer-contact-title': '联系方式',
        'footer-rights': '保留所有权利',

        // Corporate Nav/Hero
        'nav-corporate': '企业',
        'corp-title': '東森株式会社',
        'corp-catch': '此刻，与东森同行。',
        'corp-sub': '—— 在日本的每一刻，我们与你同行。',

        // Corporate Intro
        'corp-intro-title': '我们为您呈现，特别的“瞬间” - Our Moments with You',
        'corp-intro-p1': '东森株式会社成立于2022年，怀着为每一位访日客户创造“特别瞬间”的初心，持续满足多样化需求。',
        'corp-intro-p2': '无论是观光、商务还是学习——在与众多客户共同打造“日本体验”的过程中，我们最重视的不是简单的安排，而是帮助您收获内心的“感动”和“成功”。',
        'corp-intro-p3': '“此刻，与东森同行”',
        'corp-intro-p4': '这句话是我们的承诺：机场迎接时的安心瞬间；商务签约达成时的喜悦瞬间；面对日本美景屏息的感动瞬间；获得通往健康未来的安心瞬间——',
        'corp-intro-p5': '在您旅途的每一个瞬间相伴，默默支持，精心打磨最佳舞台——这是东森株式会社的使命。',

        // Corporate Services
        'corp-services-title': '服务介绍 - 为您的“瞬间”提供可靠支持',
        'corp-serv-1-title': '观光·文化体验 —— 共同见证感动瞬间',
        'corp-serv-1-desc': '团体观光旅游接待、研修·修学旅行、私人包车、机场接送、传统文化体验安排',
        'corp-serv-2-title': '商务·专业支持 —— 共同成就成功瞬间',
        'corp-serv-2-desc': '商务接待与考察安排、商谈会·会展支持、口译与资料制作支持',
        'corp-serv-3-title': '医疗·健康 —— 共同守护安心瞬间',
        'corp-serv-3-desc': '健康体检与先进医疗机构介绍、美容医疗接待与全程口译支持',
        'corp-serv-4-title': '学术·教育 —— 共同发现探索瞬间',
        'corp-serv-4-desc': '学术交流团支持、教育机构考察安排、研究·商业考察',

        // Corporate Strengths
        'corp-strengths-title': '东森的优势 - 支撑您“瞬间”的可靠理由',
        'corp-strength-1-title': '1. 丰富实绩与灵活应对',
        'corp-strength-1-desc': '承接各类旅行团、商务考察团、学术交流团接待。根据多样需求灵活提供最优方案。',
        'corp-strength-2-title': '2. 强大网络与专属负责人制',
        'corp-strength-2-desc': '覆盖观光、商务、医疗、教育等领域的合作网络。具备相应专业知识的负责人全程负责。',
        'corp-strength-3-title': '3. 细致入微的“待客之道”',
        'corp-strength-3-desc': '秉持“此刻，与东森同行”的服务精神，跨越语言壁垒，提供贴心、周到的服务。',

        // Corporate Voices
        'corp-voices-title': '客户之声 - 珍贵瞬间的记录',
        'corp-voice-1': 'A公司 商务考察团负责人：在日本的首次商谈，东森安排的口译与日程管理非常出色，助我们抓住签约这一成功的“瞬间”。真正感受到“此刻，与东森同行”。',
        'corp-voice-2': 'B大学 研修旅行学生：不仅学习了日本技术，茶道等文化体验更是难忘的“瞬间”。东森团队的温暖支持让一切更加特别。',
        'corp-voice-3': 'C先生 夫妇医疗之旅：毫无语言焦虑，轻松完成高级健康体检。听到结果释怀的那一刻，感谢东森与我们共同见证“安心”。',

        // Corporate Contact
        'corp-contact-title': '联系我们 - 您的特别“瞬间”从这里开始',
        'corp-contact-desc': '愿您在日本的计划化作无可替代的“瞬间”。欢迎随时咨询。',
        'corp-contact-info': '東森株式会社 〒XXX-XXXX 東京都〇〇区〇〇X-X-X TEL: 03-XXXX-XXXX FAX: 03-XXXX-XXXX Email: info@[your-domain].jp',
        'corp-contact-cta': '从这里迈出通往“瞬间”的第一步',
        'corp-stories-title': '精彩瞬间与声音',
        'corp-stories-sub': '東森株式会社 的影像与照片及客户之声',
        'corp-stories-voices-title': '客户之声'
    },
    
    'zh-TW': {
        // Navigation
        'logo': '東森株式會社',
        'nav-home': '首頁',
        'nav-services': '服務',
        'nav-destinations': '目的地',
        'nav-about': '關於我們',
        'nav-contact': '聯繫我們',
        'nav-corporate': '企業',
        'nav-services-corp': '服務介紹',
        'nav-strengths': '我們的優勢',
        'nav-voices': '客戶之聲',
        
        // Hero Section
        'hero-title': '探索日本，沉浸每一寸感動',
        'hero-subtitle': '拒絕趕場式的奔波，您的專屬旅程，理應由心定義。我們提供專業的旅遊包車服務，以匠心精神為您定制獨一無二的旅行篇章。',
        'hero-description': '無論是穿梭於東京的霓虹繁華，還是流連於京都的唐風古韻，您的專屬座駕與本地司導，不僅是安全的保障，更是您探索未知的貼心旅伴。讓我們聆聽您的想法，為您量身打造一段關於日本的、充滿溫情的記憶。',
        'hero-btn-primary': '立即預訂',
        'hero-btn-secondary': '了解更多',
        
        // Corporate sections
        'corp-title': '東森株式會社',
        'corp-catch': '此刻，與東森同行。',
        'corp-sub': '—— 在日本的每一刻，我們與你同行。',
        'corp-intro-title': '我們為您提供的特別「瞬間」 - Our Moments with You',
        'corp-intro-p1': '2022年誕生的東森株式會社，懷著為每一位訪日客戶創造「特別瞬間」的願望，一直以來回應著各種需求。',
        'corp-intro-p2': '觀光、商務、學習——。在參與眾多客戶「日本體驗」的過程中，我們最重視的不是單純的安排，而是協助客戶獲得內心深處的「感動」與「成功」。',
        'corp-intro-p3': '「此刻，與東森同行」',
        'corp-intro-p4': '這句話是我們的承諾。在機場迎接時的安心瞬間。商務合約達成時的喜悅瞬間。被日本美麗風景震撼的感動瞬間。獲得未來健康安心的瞬間——。',
        'corp-intro-p5': '陪伴您旅程的每一個瞬間，默默支持，為您準備最佳的舞台。這就是東森株式會社的使命。',
        
        // Services
        'corp-services-title': '服務介紹 - 為您的「瞬間」增添色彩，可靠的支援',
        'corp-serv-1-title': '觀光・文化體驗 ─ 共同創造感動的瞬間',
        'corp-serv-1-desc': '團體觀光接待、研修・修學旅行、私人包車、機場接送、傳統文化體驗安排',
        'corp-serv-2-title': '商務・專業 ─ 共同創造成功的瞬間',
        'corp-serv-2-desc': '商務接待・考察安排、商談會・會議支援、口譯・資料製作支援',
        'corp-serv-3-title': '醫療・健康 ─ 共同創造安心的瞬間',
        'corp-serv-3-desc': '健康檢查・先進醫療機構介紹、美容醫療接待・治療全程口譯支援',
        'corp-serv-4-title': '學術・教育 ─ 共同創造發現的瞬間',
        'corp-serv-4-desc': '學術交流團支援、教育機構考察安排、研究・商務考察',
        
        // Strengths
        'corp-strengths-title': '東森的優勢 - 支撐您「瞬間」的可靠理由',
        'corp-strength-1-title': '1. 豐富的實績與靈活的應對能力',
        'corp-strength-1-desc': '我們擁有接待各種規模旅行團、商務考察團、學術交流團的豐富實績。能夠靈活應對多樣化需求，為您提供最適合的方案。',
        'corp-strength-2-title': '2. 可靠的網絡與專屬負責制',
        'corp-strength-2-desc': '我們在觀光、商務、醫療、教育等各領域擁有強大的合作夥伴網絡。具備相應專業知識的負責人將從頭到尾為您提供服務。',
        'corp-strength-3-title': '3. 細緻的「款待」之心',
        'corp-strength-3-desc': '以「此刻，與東森同行」的精神，提供超越語言障礙的心靈相通服務。我們站在客戶立場，注重細緻入微的關懷。',
        
        // Stories
        'corp-stories-title': '精彩瞬間與聲音',
        'corp-stories-sub': '東森株式會社的影像・照片與客戶之聲',
        'corp-stories-voices-title': '客戶之聲',
        'corp-voice-1': 'A公司 商務考察團負責人: 雖然是第一次在日本進行商談，但東森安排的口譯和行程管理非常出色，成功抓住了簽約這個『瞬間』。真正體驗到了『此刻，與東森同行』。',
        'corp-voice-2': 'B大學 研修旅行參加學生: 不僅學習了日本的技術，還能體驗茶道等文化，這是一個難忘的『瞬間』。東森工作人員的溫暖支援，讓一切都變得更加特別。',
        'corp-voice-3': 'C先生夫婦 醫療旅遊: 沒有語言上的不安，能夠很放鬆地接受高級健康檢查。聽到結果後感到『安心』的那個瞬間，能夠與東森分享，非常感謝。',
        
        // Contact
        'corp-contact-title': '聯繫我們 - 您特別「瞬間」的開始',
        'corp-contact-desc': '願您在日本的計劃成為無可替代的「瞬間」。歡迎隨時諮詢。',
        'corp-contact-cta': '從這裡邁出通往「瞬間」的第一步',
        
        // Contact section
        'contact-title': '聯繫我們',
        'contact-subtitle': '準備開始您的日本之旅了嗎？立即聯繫我們獲取更多信息',
        'contact-phone-title': '電話',
        'contact-address-title': '地址',
        'contact-address': '東京都墨田區立花四丁目23番7號椎葉302號室',
        
        // Toast Messages
        'toast-phone-copied': '電話號碼已複製到剪貼板！',
        'toast-address-copied': '地址已複製到剪貼板！',
        
        // Footer
        'footer-desc': '專業的日本包車服務，為您提供最優質的旅行體驗。',
        'footer-contact-title': '聯繫方式',
        'footer-rights': '保留所有權利'
    },
    
    ja: {
        // Navigation
        'logo': '東森株式会社',
        'nav-home': 'ホーム',
        'nav-services': 'サービス',
        'nav-destinations': '目的地',
        'nav-about': '私たちについて',
        'nav-contact': 'お問い合わせ',
        
        // Hero Section
        'hero-title': '日本を探索し、ひとときの感動に浸る',
        'hero-subtitle': '駆け足の観光はもう終わりにしませんか。お客様だけの特別な旅は、心のままに定義されるべきです。私たちは専門的な貸切チャーターサービスを提供し、職人の精神で唯一無二の旅の一章を綴ります。',
        'hero-description': '東京の霓虹灯が織りなす繁華街を穿梭するもよし、京都に息づく唐代の風情のあるたたずまいに流連するもよし、専用の車両と地元の知識豊富な運転手は、単なる安全の保障ではなく、未知を探索するための心安らぐ道先案内人です。どうぞお気軽にご要望をお聞かせください。お客様のための、温もりあふれる日本での思い出を、心を込めてお作りします。',
        'hero-btn-primary': '今すぐ予約',
        'hero-btn-secondary': '詳細を見る',
        
        // Services Section
        'services-title': '私たちのサービス',
        'services-subtitle': '日本旅行の包括的なソリューションを提供',
        'service-1-title': 'チャウファーサービス',
        'service-1-desc': '快適で豪華な車両と経験豊富なドライバーで、安心で快適な旅を提供します。',
        'service-2-title': '旅程カスタマイズ',
        'service-2-desc': 'お客様の興味とニーズに基づいて、専用の日本旅行ルートをカスタマイズします。',
        'service-3-title': '多言語サービス',
        'service-3-desc': '中国語、日本語、英語のプロガイドサービスを提供し、言語の壁を取り除きます。',
        'service-4-title': '24時間サービス',
        'service-4-desc': '24時間365日のカスタマーサービスで、旅行中のあらゆる問題を解決します。',
        
        // Destinations Section
        'destinations-title': '人気の目的地',
        'destinations-subtitle': '日本で最も人気の観光スポットを探索',
        'dest-1-title': '東京',
        'dest-1-desc': '現代と伝統が完璧に融合した都市で、日本の最先端技術と伝統文化を体験できます。',
        'dest-2-title': '京都',
        'dest-2-desc': '千年の古都で、日本伝統文化の真髄と禅の美しさを感じることができます。',
        'dest-3-title': '大阪',
        'dest-3-desc': '美食の都で、最も本格的な日本料理を味わい、関西文化を体験できます。',
        'dest-4-title': '北海道',
        'dest-4-desc': '美しい自然風景と四季折々の景色で、心身をリラックスさせる理想的な場所です。',
        
        // About Section
        'about-title': '私たちについて',
        'about-desc': '私たちはプロの日本チャウファーサービス会社で、長年の業界経験とプロのサービスチームを持っています。すべてのお客様に最高の旅行体験を提供し、日本の旅を忘れられない思い出にすることに専念しています。',
        'about-feature-1': 'プロ認定ドライバー',
        'about-feature-2': '豪華で快適な車両',
        'about-feature-3': '24時間カスタマーサービス',
        'about-feature-4': '個別カスタマイズサービス',
        
        // Contact Section
        'contact-title': 'お問い合わせ',
        'contact-subtitle': '日本の旅を始める準備はできましたか？詳細情報は今すぐお問い合わせください',
        'contact-phone-title': '電話',
        'contact-email-title': 'メール',
        'contact-address-title': '住所',
        'contact-address': '東京都墨田区立花四丁目23番7号椎葉302号室',
        
        // Toast Messages
        'toast-phone-copied': '電話番号がクリップボードにコピーされました！',
        'toast-address-copied': '住所がクリップボードにコピーされました！',
        'form-name': 'お名前',
        'form-email': 'メールアドレス',
        'form-phone': '電話番号',
        'form-message': 'メッセージ',
        'form-submit': 'メッセージを送信',
        
        // Footer
        'footer-desc': '東森株式会社 企業サイト。観光・ビジネス・医療・教育まで、あなたの日本での大切な瞬間を共に。',
        'nav-services-corp': 'サービス紹介',
        'nav-strengths': '東森の強み',
        'nav-voices': 'お客様の声',
        'footer-services-title': 'サービス',
        'footer-service-1': 'チャウファーサービス',
        'footer-service-2': '旅程カスタマイズ',
        'footer-service-3': '多言語サービス',
        'footer-service-4': '24時間サービス',
        'footer-destinations-title': '目的地',
        'footer-dest-1': '東京',
        'footer-dest-2': '京都',
        'footer-dest-3': '大阪',
        'footer-dest-4': '北海道',
        'footer-contact-title': '連絡先',
        'footer-rights': 'すべての権利を保有',

        // Corporate Nav/Hero
        'nav-corporate': '企業サイト',
        'corp-title': '東森株式会社',
        'corp-catch': 'この瞬間、東森とともに。',
        'corp-sub': '― あなたの日本での、大切なひとときを共に。',

        // Corporate Intro
        'corp-intro-title': '私たちがお届けする、特別な「瞬間」 - Our Moments with You',
        'corp-intro-p1': '2022年に誕生した東森株式会社は、日本を訪れるお客様一人ひとりの「特別な瞬間」を作りたいという想いで、さまざまなご要望にお応えしてまいりました。',
        'corp-intro-p2': '観光に、ビジネスに、学びに――。多くのお客様の「日本での体験」に携わる中で、私たちが最も大切にしているのは、ただの手配ではなく、お客様の心に残る「感動」と「成功」をお手伝いすること。',
        'corp-intro-p3': '「この瞬間、東森とともに」',
        'corp-intro-p4': 'この言葉は、私たちの約束です。空港でお迎えした時の安堵の瞬間。ビジネス契約がまとまった時の喜びの瞬間。日本の美しい風景に息をのんだ感動の瞬間。未来の健康への安心を手に入れた瞬間――。',
        'corp-intro-p5': 'あなたの旅のすべての瞬間に寄り添い、陰ながら支え、最高の舞台を整える。それが東森株式会社の役目です。',

        // Corporate Services
        'corp-services-title': 'サービス紹介 - あなたの「瞬間」を彩る、確かなサポート',
        'corp-serv-1-title': '観光・文化体験 ─ 感動の瞬間を共に',
        'corp-serv-1-desc': '団体観光接待、研修・修学旅行、プライベート包車、空港送迎、伝統文化体験手配',
        'corp-serv-2-title': 'ビジネス・プロフェッショナル ─ 成功の瞬間を共に',
        'corp-serv-2-desc': 'ビジネス接待・視察アレンジ、商談会・コンベンションサポート、通訳・資料制作サポート',
        'corp-serv-3-title': '医療・ウェルネス ─ 安心の瞬間を共に',
        'corp-serv-3-desc': '健康診断・先進医療機関のご紹介、美容医療接待・治療全程通訳サポート',
        'corp-serv-4-title': '学術・教育 ─ 発見の瞬間を共に',
        'corp-serv-4-desc': '学術交流団サポート、教育機関視察アレンジ、研究・ビジネス考察',

        // Corporate Strengths
        'corp-strengths-title': '東森の強み - あなたの「瞬間」を支える、確かな理由',
        'corp-strength-1-title': '1. 豊富な実績と柔軟な対応力',
        'corp-strength-1-desc': '大小さまざまな旅行団、ビジネス視察団、学術交流団のご接待実績があります。多様なご要望に合わせて、最適なプランを柔軟にご提案いたします。',
        'corp-strength-2-title': '2. 確かなネットワークと専属担当制',
        'corp-strength-2-desc': '観光、ビジネス、医療、教育など、各分野にわたる強力なパートナーネットワークが強みです。ご依頼内容に応じた専門知識を持つ担当者が、最初から最後まで責任をもってご対応します。',
        'corp-strength-3-title': '3. 細やかな「おもてなし」の心',
        'corp-strength-3-desc': '「この瞬間、東森とともに」の精神で、言語の壁を越えた心の通うサービスを提供します。お客様の立場に立った、きめ細やかな気配りを心がけています。',

        // Corporate Voices
        'corp-voices-title': 'お客様の声 - 大切な瞬間の記録',
        'corp-voice-1': 'A社 ビジネス視察団ご担当者様: 初めての日本での商談でしたが、東森様の手配された通訳とスケジュール管理が抜群で、契約締結という成功の『瞬間』を掴むことができました。まさに『この瞬間、東森とともに』を体感しました。',
        'corp-voice-2': 'B大学 研修旅行参加学生様: 日本の技術を学ぶだけでなく、茶道体験など文化に触れられたことが忘れられない『瞬間』でした。東森のスタッフの皆さんの温かいサポートが、すべてをより特別なものにしてくれました。',
        'corp-voice-3': 'C様 ご夫婦での医療ツアー: 言葉の不安もなく、とてもリラックスして高度な健康診断を受けられました。結果を聞いて『安心』したあの瞬間を、東森さんと共有できたことに感謝しています。',

        // Corporate Contact
        'corp-contact-title': 'お問い合わせ - あなたの特別な「瞬間」のはじまりに',
        'corp-contact-desc': 'あなたの日本での計画が、かけがえのない「瞬間」となりますように。まずは、お気軽にご相談ください。',
        'corp-contact-info': '東森株式会社 〒XXX-XXXX 東京都〇〇区〇〇X-X-X TEL: 03-XXXX-XXXX FAX: 03-XXXX-XXXX Email: info@[your-domain].jp',
        'corp-contact-cta': 'あなたの「瞬間」への第一歩を、ここから',
        'corp-stories-title': 'モーメント & ボイス',
        'corp-stories-sub': '東森株式会社の映像・写真とお客様の声',
        'corp-stories-voices-title': 'お客様の声'
    },
    
    en: {
        // Navigation
        'logo': 'TOUSIN',
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-destinations': 'Destinations',
        'nav-about': 'About Us',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'Explore Japan, Immerse Yourself in Every Moment.',
        'hero-subtitle': 'Move beyond rushed itineraries. Your exclusive journey should be defined by your own passions. We offer professional private car charter services, crafting your unique travel story with an artisan\'s dedication.',
        'hero-description': 'Whether navigating the neon-lit buzz of Tokyo or wandering through the timeless elegance of Kyoto\'s ancient streets, your private vehicle and knowledgeable local driver are more than just a guarantee of safety—they are your trusted companion for discovery. Share your vision with us, and let us tailor a warm and unforgettable memory of Japan, just for you.',
        'hero-btn-primary': 'Book Now',
        'hero-btn-secondary': 'Learn More',
        
        // Services Section
        'services-title': 'Our Services',
        'services-subtitle': 'Providing comprehensive solutions for your Japan travel',
        'service-1-title': 'Chauffeur Service',
        'service-1-desc': 'Comfortable and luxurious vehicles with experienced drivers to make your journey more comfortable and secure.',
        'service-2-title': 'Itinerary Customization',
        'service-2-desc': 'Tailor-made Japan travel routes based on your interests and needs.',
        'service-3-title': 'Multi-language Service',
        'service-3-desc': 'Professional guide services in Chinese, Japanese, and English to eliminate language barriers.',
        'service-4-title': '24-Hour Service',
        'service-4-desc': 'Round-the-clock customer service to solve any travel issues at any time.',
        
        // Destinations Section
        'destinations-title': 'Popular Destinations',
        'destinations-subtitle': 'Explore Japan\'s most popular tourist attractions',
        'dest-1-title': 'Tokyo',
        'dest-1-desc': 'A city where modernity and tradition perfectly blend, experiencing Japan\'s cutting-edge technology and traditional culture.',
        'dest-2-title': 'Kyoto',
        'dest-2-desc': 'The ancient capital of a thousand years, feeling the essence of Japanese traditional culture and the beauty of Zen.',
        'dest-3-title': 'Osaka',
        'dest-3-desc': 'The food capital, tasting the most authentic Japanese cuisine and experiencing Kansai culture.',
        'dest-4-title': 'Hokkaido',
        'dest-4-desc': 'Beautiful natural scenery with different views in each season, an ideal place to relax body and mind.',
        
        // About Section
        'about-title': 'About Us',
        'about-desc': 'We are a professional Japan chauffeur service company with years of industry experience and a professional service team. We are committed to providing the highest quality travel experience for every customer, making your Japan journey an unforgettable memory.',
        'about-feature-1': 'Professional Certified Drivers',
        'about-feature-2': 'Luxurious Comfortable Vehicles',
        'about-feature-3': '24-Hour Customer Service',
        'about-feature-4': 'Personalized Customized Service',
        
        // Contact Section
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Ready to start your Japan journey? Contact us now for more information',
        'contact-phone-title': 'Phone',
        'contact-email-title': 'Email',
        'contact-address-title': 'Address',
        'contact-address': '東京都墨田区立花四丁目23番7号椎葉302号室',
        
        // Toast Messages
        'toast-phone-copied': 'Phone number copied to clipboard!',
        'toast-address-copied': 'Address copied to clipboard!',
        'form-name': 'Name',
        'form-email': 'Email',
        'form-phone': 'Phone',
        'form-message': 'Message',
        'form-submit': 'Send Message',
        
        // Footer
        'footer-desc': 'TOUSIN corporate site. From tourism and business to medical and education, we accompany your precious moments in Japan.',
        'nav-services-corp': 'Services',
        'nav-strengths': 'Why TOUSIN',
        'nav-voices': 'Voices',
        'footer-services-title': 'Services',
        'footer-service-1': 'Chauffeur Service',
        'footer-service-2': 'Itinerary Customization',
        'footer-service-3': 'Multi-language Service',
        'footer-service-4': '24-Hour Service',
        'footer-destinations-title': 'Destinations',
        'footer-dest-1': 'Tokyo',
        'footer-dest-2': 'Kyoto',
        'footer-dest-3': 'Osaka',
        'footer-dest-4': 'Hokkaido',
        'footer-contact-title': 'Contact',
        'footer-rights': 'All rights reserved',

        // Corporate Nav/Hero
        'nav-corporate': 'Corporate',
        'corp-title': 'TOUSIN - Corporate',
        'corp-catch': 'In this moment, together with TOUSIN.',
        'corp-sub': '— Sharing your precious moments in Japan.',

        // Corporate Intro
        'corp-intro-title': 'The Special “Moments” We Create - Our Moments with You',
        'corp-intro-p1': 'Founded in 2022, TOUSIN has been dedicated to creating special moments for every visitor to Japan, meeting a wide range of needs.',
        'corp-intro-p2': 'For sightseeing, business, and learning — our priority is not mere arrangements, but helping you achieve “inspiration” and “success” that truly stay with you.',
        'corp-intro-p3': '“In this moment, together with TOUSIN.”',
        'corp-intro-p4': 'This is our promise: the relief the moment you are greeted at the airport; the joy when a business contract is concluded; the awe when you witness Japan’s beauty; the peace of mind as you secure your future health.',
        'corp-intro-p5': 'We stand by every moment of your journey, supporting you behind the scenes and preparing the best stage — that is our role.',

        // Corporate Services
        'corp-services-title': 'Services — Reliable Support for Your Moments',
        'corp-serv-1-title': 'Tourism & Cultural Experiences — Moments of Inspiration',
        'corp-serv-1-desc': 'Group receptions, training and school trips, private chauffeur, airport transfers, traditional culture experiences',
        'corp-serv-2-title': 'Business & Professional — Moments of Success',
        'corp-serv-2-desc': 'Business hospitality and visits, trade fairs and convention support, interpreting and document preparation',
        'corp-serv-3-title': 'Medical & Wellness — Moments of Reassurance',
        'corp-serv-3-desc': 'Health checkups and referrals to advanced medical institutions, aesthetic medicine reception and full interpreting support',
        'corp-serv-4-title': 'Academia & Education — Moments of Discovery',
        'corp-serv-4-desc': 'Academic exchange support, educational institution visits, research and business studies',

        // Corporate Strengths
        'corp-strengths-title': 'Why Choose TOUSIN — The Reasons Behind Your Moments',
        'corp-strength-1-title': '1. Proven Track Record and Flexibility',
        'corp-strength-1-desc': 'Extensive experience hosting travel groups, business delegations, and academic exchanges, with flexible plans tailored to diverse needs.',
        'corp-strength-2-title': '2. Strong Network and Dedicated Managers',
        'corp-strength-2-desc': 'A powerful partner network across tourism, business, medical, and education fields, with specialists responsible end-to-end.',
        'corp-strength-3-title': '3. Thoughtful Omotenashi',
        'corp-strength-3-desc': 'With the spirit of “In this moment, together with Tōsen,” we provide heartfelt service that transcends language barriers.',

        // Corporate Voices
        'corp-voices-title': 'Voices of Our Clients — Records of Precious Moments',
        'corp-voice-1': 'Company A, Business Delegation Lead: With Tōsen’s superb interpreting and schedule management, we achieved the “moment” of contract success in our first negotiation in Japan.',
        'corp-voice-2': 'Student, University B: Beyond learning Japanese technology, cultural experiences such as tea ceremony became unforgettable “moments”. The warm support of Tōsen staff made everything special.',
        'corp-voice-3': 'Mr. and Mrs. C, Medical Tour: Without language anxiety, we comfortably received an advanced health check. We are grateful to share that “reassuring moment” with Tōsen.',

        // Corporate Contact
        'corp-contact-title': 'Contact Us — Where Your Special Moments Begin',
        'corp-contact-desc': 'May your plans in Japan become irreplaceable “moments”. Please feel free to consult us.',
        'corp-contact-info': 'TOUSIN 〒XXX-XXXX, Sumida-ku, Tokyo TEL: 03-53 56-7810 Email: info@[your-domain].jp',
        'corp-contact-cta': 'Take the first step toward your “moment”',
        'corp-stories-title': 'Moments & Voices',
        'corp-stories-sub': 'TOUSIN videos, photos and client testimonials',
        'corp-stories-voices-title': 'Testimonials'
    }
};

// Language switching functionality
class LanguageSwitcher {
    constructor() {
        this.currentLang = /*document.body.getAttribute('data-lang') || */ localStorage.getItem('selectedLanguage') || 'ja';
        this.init();
    }
    
    init() {
        // Only set language if it hasn't been set already
        if (!document.body.getAttribute('data-lang')) {
            this.setLanguage(this.currentLang);
        } else {
            // Language already set, just update the UI
            this.updateLanguageButtons();
        }
        this.bindEvents();
    }
    
    bindEvents() {
        // Language button clicks
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Form submission
        const contactForm = document.querySelector('.contact-form form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission();
            });
        }
        
        // Mobile menu toggle
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (mobileMenuToggle && navMenu) {
            mobileMenuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                mobileMenuToggle.classList.toggle('active');
            });
        }
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Intersection Observer for animations
        this.initScrollAnimations();
    }
    
    setLanguage(lang) {
        if (!translations[lang]) return;
        
        this.currentLang = lang;
        localStorage.setItem('selectedLanguage', lang);
        
        // Update body data attribute for font family
        document.body.setAttribute('data-lang', lang);
        
        // Update document title
        document.title = translations[lang]['logo'] + ' - ' + translations[lang]['hero-subtitle'];
        
        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Update placeholder texts
        document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });
        
        this.updateLanguageButtons();
    }
    
    updateLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            }
        });
    }
    
    handleFormSubmission() {
        const form = document.querySelector('.contact-form form');
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = (this.currentLang === 'zh-CN' || this.currentLang === 'zh-TW') ? '发送中...' : 
                               this.currentLang === 'ja' ? '送信中...' : 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form handling)
        setTimeout(() => {
            // Show success message
            const successMessage = (this.currentLang === 'zh-CN' || this.currentLang === 'zh-TW') ? '消息发送成功！' : 
                                  this.currentLang === 'ja' ? 'メッセージが正常に送信されました！' : 
                                  'Message sent successfully!';
            
            alert(successMessage);
            
            // Reset form
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }
    
    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        document.querySelectorAll('.service-card, .destination-card, .about-text, .contact-form').forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }
}

// Utility functions
const utils = {
    // Debounce function for performance optimization
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Format phone number
    formatPhoneNumber(phone) {
        return phone.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    },
    
    // Validate email
    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },
    
    // Show notification
    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
};

// WeChat compatibility check
function isWeChatBrowser() {
    const ua = navigator.userAgent.toLowerCase();
    return ua.indexOf('micromessenger') !== -1;
}

// WeChat compatibility fixes
function applyWeChatFixes() {
    if (isWeChatBrowser()) {
        console.log('WeChat browser detected, applying compatibility fixes');
        
        // Disable Service Worker in WeChat (it can cause issues)
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(function(registrations) {
                for(let registration of registrations) {
                    registration.unregister();
                }
            });
        }
        
        // Add WeChat specific CSS fixes
        const style = document.createElement('style');
        style.textContent = `
            /* WeChat specific fixes */
            .contact-item.contact-phone,
            .contact-item.contact-address {
                -webkit-tap-highlight-color: rgba(0,0,0,0.1);
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                user-select: none;
            }
            
            /* Ensure proper touch handling in WeChat */
            * {
                -webkit-tap-highlight-color: transparent;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Apply WeChat compatibility fixes first
    applyWeChatFixes();
    
    // Initialize language switcher
    new LanguageSwitcher();
    
    // Check Font Awesome loading
    checkFontAwesome();
    
    // Initialize contact click functionality
    initContactClick();
    
    // Add loading animation
    document.body.classList.add('loaded');
    
    // Preload images for better performance
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });

    // Initialize hero slider
    initHeroSlider();

    // Initialize stories carousel
    initStoriesCarousel();
});

// Simple slider for hero images
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    if (!slides.length) return;
    let index = 0;
    const changeSlide = () => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    };
    setInterval(changeSlide, 4000);
}

// Stories carousel (horizontal loop)
function initStoriesCarousel() {
    const viewport = document.querySelector('.stories .carousel-viewport');
    const track = document.querySelector('.stories .carousel-track');
    const prevBtn = document.querySelector('.stories .carousel .prev');
    const nextBtn = document.querySelector('.stories .carousel .next');
    if (!viewport || !track) return;

    // 自动检测图片方向并设置属性
    const detectImageOrientation = () => {
        const images = track.querySelectorAll('img, video');
        images.forEach(media => {
            if (media.complete || media.readyState >= 2) {
                setOrientation(media);
            } else {
                media.addEventListener('load', () => setOrientation(media));
            }
        });
    };

    const setOrientation = (media) => {
        const aspectRatio = media.naturalWidth / media.naturalHeight;
        if (aspectRatio > 1.2) {
            media.setAttribute('data-orientation', 'landscape');
        } else if (aspectRatio < 0.8) {
            media.setAttribute('data-orientation', 'portrait');
        } else {
            media.setAttribute('data-orientation', 'square');
        }
    };

    // 初始化时检测方向
    detectImageOrientation();

    let items = Array.from(track.children);
    let index = 0;
    let autoTimer;

    const getItemWidth = () => {
        if (!items[0]) return 0;
        const rect = items[0].getBoundingClientRect();
        return rect.width;
    };
    const gap = parseFloat(getComputedStyle(track).gap || '0');

    const moveTo = (i) => {
        const itemWidth = getItemWidth();
        const offset = i * (itemWidth + gap);
        track.style.transform = `translateX(-${offset}px)`;
        index = i;
    };

    const loopNext = () => {
        // clone first to end for seamless loop
        const first = track.firstElementChild;
        track.appendChild(first.cloneNode(true));
        track.removeChild(first);
        items = Array.from(track.children);
        // keep transform at 0
        track.style.transition = 'none';
        track.style.transform = 'translateX(0)';
        // force reflow then restore transition
        void track.offsetWidth;
        track.style.transition = '';
    };

    const onNext = () => {
        const itemWidth = getItemWidth();
        track.style.transform = `translateX(-${itemWidth + gap}px)`;
        // after transition, loop
        setTimeout(loopNext, 320);
    };

    const onPrev = () => {
        // clone last to start
        const last = track.lastElementChild;
        track.insertBefore(last.cloneNode(true), track.firstElementChild);
        track.removeChild(last);
        items = Array.from(track.children);
        const itemWidth = getItemWidth();
        track.style.transition = 'none';
        track.style.transform = `translateX(-${itemWidth + gap}px)`;
        void track.offsetWidth;
        track.style.transition = '';
        track.style.transform = 'translateX(0)';
    };

    const startAuto = () => {
        stopAuto();
        autoTimer = setInterval(onNext, 3000);
    };
    const stopAuto = () => {
        if (autoTimer) clearInterval(autoTimer);
    };

    // Controls
    nextBtn && nextBtn.addEventListener('click', () => { stopAuto(); onNext(); startAuto(); });
    prevBtn && prevBtn.addEventListener('click', () => { stopAuto(); onPrev(); startAuto(); });

    // Pause on hover
    viewport.addEventListener('mouseenter', stopAuto);
    viewport.addEventListener('mouseleave', startAuto);

    // Handle window resize
    const handleResize = utils.debounce(() => {
        // Recalculate and reset position
        moveTo(0);
    }, 250);
    
    window.addEventListener('resize', handleResize);

    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    let isDragging = false;

    const handleTouchStart = (e) => {
        touchStartX = e.touches[0].clientX;
        isDragging = true;
        stopAuto();
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
    };

    const handleTouchEnd = (e) => {
        if (!isDragging) return;
        touchEndX = e.changedTouches[0].clientX;
        isDragging = false;
        
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next
                onNext();
            } else {
                // Swipe right - previous
                onPrev();
            }
        }
        
        startAuto();
    };

    // Add touch event listeners
    viewport.addEventListener('touchstart', handleTouchStart, { passive: false });
    viewport.addEventListener('touchmove', handleTouchMove, { passive: false });
    viewport.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Init
    moveTo(0);
    startAuto();
}

// Font Awesome loading detection
function checkFontAwesome() {
    // Check if Font Awesome is loaded by testing a Font Awesome icon
    const testIcon = document.createElement('i');
    testIcon.className = 'fas fa-check';
    testIcon.style.position = 'absolute';
    testIcon.style.left = '-9999px';
    testIcon.style.visibility = 'hidden';
    document.body.appendChild(testIcon);
    
    // Get computed style to check if Font Awesome font is loaded
    const computedStyle = window.getComputedStyle(testIcon);
    const fontFamily = computedStyle.getPropertyValue('font-family');
    
    // Check if Font Awesome font is loaded
    const isFontAwesomeLoaded = fontFamily.includes('Font Awesome') || 
                               fontFamily.includes('FontAwesome') ||
                               computedStyle.getPropertyValue('font-weight') === '900';
    
    // Clean up test element
    document.body.removeChild(testIcon);
    
    // Add class to indicate Font Awesome status
    if (isFontAwesomeLoaded) {
        document.querySelectorAll('.mobile-menu-toggle, .service-icon').forEach(el => {
            el.classList.add('fa-loaded');
        });
    } else {
        // Font Awesome not loaded, show fallback icons
        document.querySelectorAll('.mobile-menu-toggle, .service-icon').forEach(el => {
            el.classList.remove('fa-loaded');
        });
        
        // Log warning for debugging
        console.warn('Font Awesome not loaded, using fallback icons');
    }
}

// Contact phone and address click functionality
function initContactClick() {
    // Create a toast notification function
    function showToast(messageKey, type = 'success') {
        // Get current language
        const currentLang = localStorage.getItem('selectedLanguage') || 'ja';
        
        // Get translated message
        const message = translations[currentLang] && translations[currentLang][messageKey] 
            ? translations[currentLang][messageKey] 
            : messageKey; // Fallback to key if translation not found
        
        // Remove existing toast if any
        const existingToast = document.querySelector('.copy-toast');
        if (existingToast) {
            existingToast.remove();
        }
        
        // Create toast element
        const toast = document.createElement('div');
        toast.className = 'copy-toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        // Animate in
        setTimeout(() => {
            toast.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }
    
    // Phone click functionality
    const phoneElement = document.querySelector('.contact-item.contact-phone');
    if (phoneElement) {
        phoneElement.addEventListener('click', function() {
            const phoneNumber = '03-5356-7810';
            
            // Create a temporary input element to copy phone number
            const tempInput = document.createElement('input');
            tempInput.value = phoneNumber;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            
            // Show toast notification
            showToast('toast-phone-copied');
            
            // Try to initiate phone call on mobile devices
            if (/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                window.location.href = `tel:${phoneNumber}`;
            }
        });
        
        // Add visual feedback for clickable element
        phoneElement.style.cursor = 'pointer';
        phoneElement.setAttribute('title', '点击复制电话号码或拨打电话');
    }
    
    // Address click functionality
    const addressElement = document.querySelector('.contact-item.contact-address');
    if (addressElement) {
        addressElement.addEventListener('click', function() {
            const address = '東京都墨田区立花四丁目23番7号椎葉302号室';
            
            // Create a temporary input element to copy address
            const tempInput = document.createElement('input');
            tempInput.value = address;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            
            // Show toast notification
            showToast('toast-address-copied');
        });
        
        // Add visual feedback for clickable element
        addressElement.style.cursor = 'pointer';
        addressElement.setAttribute('title', '点击复制地址');
    }
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LanguageSwitcher, utils, checkFontAwesome, initContactClick };
}
