document.addEventListener("DOMContentLoaded", () => {
    const introLoader = document.getElementById("luxury-intro");
    const logo = document.getElementById("luxury-logo");
    const subtitle = document.getElementById("luxury-subtitle");
    const curtainTop = document.querySelector(".intro-curtain-top");
    const curtainBottom = document.querySelector(".intro-curtain-bottom");

    if (introLoader && logo && subtitle) {
        document.body.style.overflow = "hidden";
        setTimeout(() => { logo.style.opacity = "1"; logo.style.transform = "scale(1)"; }, 300);
        setTimeout(() => { subtitle.style.opacity = "1"; }, 800);
        setTimeout(() => {
            logo.style.opacity = "0"; logo.style.transform = "scale(1.05)"; logo.style.filter = "blur(10px)";
            subtitle.style.opacity = "0"; subtitle.style.filter = "blur(5px)";
        }, 2300);
        setTimeout(() => {
            curtainTop.style.transform = "translateY(-100%)";
            curtainBottom.style.transform = "translateY(100%)";
            document.body.style.overflow = "";
        }, 3000);
        setTimeout(() => { introLoader.remove(); }, 4100);
    }
});

gsap.registerPlugin(ScrollTrigger);
let currentLang = "ar";

const translations = {
    ar: {
        navAbout: "الفنان",
        navGallery: "المعرض",
        navContact: "تواصل",
        artistName: "وليد برابري",
        artistBio: "وليد برابري فنان تشكيلي ورسّام جداريات وڨرافيتي من الجزائر، من مواليد 15 سبتمبر 1994 بولاية عنابة. حاصل على شهادة ليسانس قانون عام وماستر 2 قانون دولي. فنان عصامي يتمتع بخبرة في تنفيذ الجداريات والأعمال الفنية البصرية، مع اهتمام خاص بفن الشارع، التصميم الجرافيكي، والرسم بمختلف الخامات والتقنيات. شارك في العديد من المشاريع الفنية والثقافية والتربوية، وعمل مع مدارس وأكاديميات خاصة في تعليم الرسم للأطفال وتنظيم الأنشطة الفنية والإبداعية. كما ساهم في إنجاز جداريات وأعمال فنية ضمن مهرجانات وطنية ودولية، وحصل على عدة جوائز وشهادات تقدير تقديرًا لمساهماته الفنية. يرتكز أسلوبه على تحويل الأفكار والرسائل إلى أعمال بصرية مؤثرة تجمع بين الجانب الجمالي والتعبيري، مع اهتمام خاص بالهوية البصرية، الثقافة الحضرية، والتفاعل مع الفضاءات العامة. ويسعى من خلال أعماله إلى خلق تجارب فنية تترك أثرًا بصريًا وإنسانيًا لدى الجمهور.",
        galleryTitle: "صالة العرض الحصرية",
        gallerySubtitle: "روائع فنية وثقت بأبعاد فلسفية معاصرة",
        contactTitle: "🌐 المنصات الرسمية للفنان",
        contactSubtitle: "تابعوا كواليس التوثيق والإنتاج الإبداعي عبر شبكاتنا المعتمدة",
        
        lblStyle: "الأسلوب الفني", 
        lblTools: "الأدوات المستخدمة", 
        lblLoc: "المكان", 
        lblEvent: "المناسبة الرسمية",

        muralTitle1: "جدارية LIBER",
        muralDesc1: "جدارية بأسلوب الغرافيتي المعاصر تم تنفيذها ضمن مسابقة فنية وطنية. تستند الفكرة إلى مفهوم الحرية والتحرر من القيود، حيث تم تجسيد حرف \"I\" في كلمة LIBER على هيئة شخصية تصرخ وهي تكسر السلاسل، في إشارة إلى قوة الإرادة والسعي نحو الانعتاق. تم تصميم الحروف بتداخل مستوحى من ثقافة فن الشارع الأوروبية مع توظيف الألوان لإبراز الطاقة والحركة داخل التكوين. السلاسل مصممة بذكاء على شكل رقم \"62\" كرمز لعام الاستقلال الذي يجسد قمة التحرر والسيادة الفكرية والوطنية.",
        valStyle1: "Contemporary Graffiti / غرافيتي معاصر", valTools1: "بخاخات، فرشاة، ألوان أكريليك", valLoc1: "الجزائر", valEvent1: "مسابقة فنية وطنية",

        muralTitle2: "حتى لا ننسى - عبد الحفيظ بوالصوف",
        muralDesc2: "عبد الحفيظ بوالصوف – \"حتى لا ننسى\" أُنجز هذا العمل خلال الأيام الوطنية للرسم الجداري بتقنية الڨرافيتي تحت شعار \"حتى لا ننسى\"، المنظمة من 1 إلى 5 جويلية بولاية ميلة، برعاية مديرية الثقافة وإشراف مديرية الشباب والرياضة وبالتنسيق مع جمعية الحفلات لولاية ميلة. يجسد العمل شخصية الشهيد والمجاهد عبد الحفيظ بوالصوف (سي مبروك)، أحد أبرز مهندسي الثورة الجزائرية وأب المخابرات الجزائرية ومؤسس الإذاعة السرية للثورة. اعتمدت في هذا العمل على المزج بين البورتريه الواقعي وفن الڨرافيتي المعاصر، بهدف ربط الذاكرة التاريخية بالثقافة البصرية الحديثة وإيصال رسالة الثورة إلى الأجيال الجديدة بلغة فنية معاصرة.",
        valStyle2: "بورتريه واقعي + ڨرافيتي", valTools2: "بخاخات، فرشاة، ألوان أكريليك", valLoc2: "ولاية ميلة", valEvent2: "الأيام الوطنية للرسم الجداري \"حتى لا ننسى\"",
        
        muralTitle3: "Sacrifices",
        muralDesc3: "هذا العمل الجداري هو قطعة فنية معاصرة بأسلوب الغرافيتي، يعالج مواضيع الذاكرة، التضحية، والوعي الجماعي، من خلال دمج الرموز البصرية مع لغة فن الشارع لإنتاج سرد بصري قوي ومؤثر. في مركز التكوين، تظهر كلمة غرافيتي ملونة بالأخضر والأحمر بأسلوب حاد وديناميكي. عبارات مثل “BLACK DAY” و “SACRIFICES” و “NEVER FORGET” تعمّق الرسالة المفاهيمية للعمل.",
        valStyle3: "ڨرافيتي معاصر", valTools3: "بخاخات، فرشاة، ألوان أكريليك", valLoc3: "ولاية سطيف", valEvent3: "مهرجان فني (ماي 2025)",

        muralTitle4: "التطوع حياة - Volunteering is Life",
        muralDesc4: "هذه اللوحة تحمل رسالة إنسانية وبيئية قوية، وتتمحور حول مفهوم التطوع من أجل الحياة. في مركز العمل الفني تظهر يدان متعاونتان تحتضنان كتلة من التراب تنمو منها نبتة خضراء يافعة. يرمز التراب إلى الأرض والبيئة والحياة الطبيعية، بينما تمثل النبتة النمو والأمل والاستمرارية. أما الأيدي المتشابكة فتعبر عن التعاون والتكافل والعمل الجماعي، وهي إشارة إلى أن حماية البيئة وتنمية المجتمع مسؤولية مشتركة تتطلب مشاركة الجميع. اختيار الخلفية الزرقاء يمنح إحساسًا بالهدوء والصفاء ويرمز إلى السماء والحياة، في حين يبرز اللون الأخضر في النبتة دلالات التجدد والاستدامة. كما أن العبارة المكتوبة في الخلفية تؤكد الفكرة الرئيسية للعمل، وهي أن التطوع ليس مجرد نشاط مؤقت، بل أسلوب حياة يساهم في بناء مستقبل أفضل للأفراد والمجتمعات. من الناحية الفنية، اعتمدت اللوحة على أسلوب واقعي في رسم الأيدي مع اهتمام بالتفاصيل والتظليل، مما يعزز الإحساس بالإنسانية والارتباط المباشر بين الإنسان والطبيعة. فكرة العمل: يجسد هذا العمل أهمية التطوع في رعاية البيئة وخدمة المجتمع، ويؤكد أن الأعمال الصغيرة التي يقوم بها الأفراد معًا يمكن أن تنمو وتثمر مثل النبتة لتصبح رمزًا للحياة والأمل والتنمية المستدامة.",
        valStyle4: "ڨرافيتي / فن الشارع", valTools4: "بخاخات، فرشاة، ألوان أكريليك", valLoc4: "ولاية الطارف", valEvent4: "اللقاء الوطني الخامس للشباب المتطوع",

        muralTitle5: "رواد العلم عبر العصور",
        muralDesc5: "جدارية فنية تعليمية تجمع خمسة من أبرز العلماء الذين ساهموا في تطوير المعرفة الإنسانية والعلوم المختلفة. اعتمد العمل على أسلوب واقعي بالأبيض والأسود مع خلفيات لونية دائرية تمنح كل شخصية حضورًا بصريًا مميزًا، بينما تم دمج عناصر ورموز علمية وخطوط عربية داخل التكوين لإبراز إنجازاتهم وتأثيرهم التاريخي. تُجسد الجدارية شخصيات علمية بارزة مثل الخوارزمي، البيروني، ألبرت أينشتاين، ابن سينا، وابن الهيثم، في محاولة لربط التراث العلمي الإسلامي بالمنجزات العلمية الحديثة. يهدف المشروع إلى نشر الثقافة العلمية وتحويل الفضاء العام إلى مساحة تعليمية وجمالية تلهم الأجيال الجديدة وتُعرّفهم بأعلام الفكر والابتكار.",
        valStyle5: "رسم جداري وتظليل واقعي بالأبيض والأسود", valTools5: "الوان زيتية ابيض اسود ،بخاخات ابيض اسود ،خلفيات الوان اكريليك ،فرنيكس او عازل", valLoc5: "الجزائر", valEvent5: "تصميم وتنسيق بصري تعليمي (2024)",

        muralTitle6: "جدارية غرافيتي – DZ Graffiti",
        muralDesc6: "أنجزت هذه الجدارية ضمن فعاليات الملتقى الوطني الثاني لرسم الجداريات \"DZ Graffiti\" المنظم بمدينة بسكرة بمناسبة إحياء اليوم الوطني للشهيد. يعتمد العمل على أسلوب الغرافيتي الأوروبي الكلاسيكي (Wildstyle) من خلال تشابك الحروف وتداخلها في تكوين بصري ديناميكي يعكس روح فن الشارع المعاصر. تميزت الجدارية باستخدام اللون الأخضر كلون أساسي في إشارة إلى الهوية الجزائرية، مع توظيف الظلال الحمراء والبنفسجية لإبراز العمق الثلاثي الأبعاد ومنح الحروف قوة وحضوراً بصرياً. كما تم دمج تأثيرات الإضاءة والنقاط الزخرفية والخطوط الحرة لإضفاء حيوية وحركة على التكوين العام. يعكس العمل الاحترافية العالية في التحكم في التوازن اللوني، البناء الهندسي للحروف، وتقنيات الرش ذات التأثير البصري القوي، مع المحافظة على هوية فن الشارع وروحه الإبداعية.",
        valStyle6: "Wildstyle Graffiti / غرافيتي كلاسيكي", valTools6: "بخاخات رش احترافية", valLoc6: "بسكرة – الجزائر", valEvent6: "الملتقى الوطني الثاني لرسم الجداريات DZ Graffiti"
    },
    en: {
        navAbout: "The Artist",
        navGallery: "Gallery",
        navContact: "Contact",
        artistName: "Oualid Brabri",
        artistBio: "Oualid Brabri is an Algerian visual artist, muralist, and graffiti artist, born on September 15, 1994, in Annaba, Algeria. He holds a Bachelor’s degree in Public Law and a Master’s degree (Master 2) in International Law. A self-taught artist, he has extensive experience in creating murals and visual artworks, with a particular interest in street art, graphic design, and drawing using various materials and techniques. He has participated in numerous artistic, cultural, and educational projects and has worked with private schools and academies, teaching drawing to children and organizing creative and artistic activities. Through his work, he aims to create artistic experiences that leave a lasting visual and human impact on audiences.",
        galleryTitle: "The Exclusive Gallery",
        gallerySubtitle: "Artistic masterpieces documented with contemporary philosophical dimensions",
        contactTitle: "🌐 Official Artist Platforms",
        contactSubtitle: "Follow the behind-the-scenes of documentation and creative production via our approved networks",
        
        lblStyle: "Artistic Style", lblTools: "Tools Used", lblLoc: "Location", lblEvent: "Official Occasion",

        muralTitle1: "LIBER Mural",
        muralDesc1: "A contemporary graffiti mural executed within a national art competition. The concept is based on the theme of freedom and liberation from constraints, where the letter 'I' in the word LIBER is embodied as a shouting figure breaking chains, signaling willpower. The letters are designed with an overlapping style inspired by European street art culture, using colors to highlight energy and movement. The chains are cleverly designed in the shape of the number '62' as a symbol of the year of independence.",
        valStyle1: "Contemporary Graffiti", valTools1: "Spray Cans, Brushes, Acrylic Paint", valLoc1: "Algeria", valEvent1: "National Art Competition",

        muralTitle2: "Lest We Forget - Abdelhafid Boussouf",
        muralDesc2: "Executed during the National Graffiti Days under the theme 'Lest We Forget' in Mila, under the sponsorship of the Directorate of Culture. The work embodies the personality of the martyr and mujahid Abdelhafid Boussouf (Si Mabrouk), one of the most prominent architects of the Algerian Revolution and the father of Algerian intelligence. This work blends realistic portraiture with contemporary graffiti art to connect historical memory with modern visual culture.",
        valStyle2: "Realistic Portrait + Graffiti", valTools2: "Spray Cans, Brushes, Acrylic Paint", valLoc2: "Mila Province", valEvent2: "National Mural Painting Days 'Lest We Forget'",

        muralTitle3: "Sacrifices",
        muralDesc3: "A contemporary graffiti mural addressing themes of memory, sacrifice, and collective consciousness by blending visual symbols with street art language. In the center, the word graffiti appears sharply in green and red. Phrases like 'BLACK DAY', 'SACRIFICES', and 'NEVER FORGET' deepen the conceptual message of the piece.",
        valStyle3: "Contemporary Graffiti", valTools3: "Spray Cans, Brushes, Acrylic Paint", valLoc3: "Setif Province", valEvent3: "Art Festival (May 2025)",

        muralTitle4: "Volunteering is Life",
        muralDesc4: "This mural carries a powerful humanitarian and environmental message, centering around the concept of volunteering for life. At the heart of the artwork, two collaborative hands cradle a patch of soil from which a young green plant sprouts. The soil symbolizes the earth, environment, and natural life, while the plant represents growth, hope, and continuity. The interlocked hands express cooperation, solidarity, and collective action, signaling that environmental protection and community development are shared responsibilities. The choice of a blue background brings a sense of serenity and symbolizes the sky and life, while the green hue highlights renewal and sustainability. The background phrase reinforces the main philosophy: volunteering is not just a temporary activity, but a way of life that contributes to building a better future.",
        valStyle4: "Graffiti / Street Art", valTools4: "Spray Cans, Brushes, Acrylic Paint", valLoc4: "El Tarf Province", valEvent4: "The 5th National Gathering of Volunteer Youth",

        muralTitle5: "Pioneers of Science Through the Ages",
        muralDesc5: "An educational art mural bringing together five of the most prominent scientists who contributed to the development of human knowledge. The work features a realistic black-and-white style with circular colored backgrounds giving each character a distinct visual presence, while scientific symbols and Arabic calligraphy are integrated to highlight their historic achievements. It portrays Al-Khwarizmi, Al-Biruni, Albert Einstein, Ibn Sina, and Ibn al-Haytham, bridging Islamic scientific heritage with modern discoveries to inspire new generations.",
        valStyle5: "Mural Painting & Realistic B&W Shading", valTools5: "Oil paints (black and white), spray paints (black and white), acrylic paint backgrounds, varnish or sealant", valLoc5: "Algeria", valEvent5: "Educational Visual Concept & Design (2024)",

        muralTitle6: "DZ Graffiti Mural",
        muralDesc6: "Created within the activities of the 2nd National Mural Painting Gathering 'DZ Graffiti' held in Biskra on the National Martyr's Day. The piece adopts the classic European graffiti Wildstyle, showcasing interlocking letters in a dynamic visual composition that mirrors contemporary street art. Primarily using green to signify Algerian identity, with red and purple shading to produce a 3D depth, the work integrates lighting highlights, freehand lines, and patterns, demonstrating high professional mastery of color balance and lettering structure.",
        valStyle6: "Classic Wildstyle Graffiti", valTools6: "Professional Spray Cans", valLoc6: "Biskra – Algeria", valEvent6: "The 2nd National Mural Painting Gathering 'DZ Graffiti'"
    }
};

const langBtn = document.getElementById("lang-btn");
if (langBtn) {
    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "ar" ? "en" : "ar";
        document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = currentLang;
        langBtn.innerText = currentLang === "ar" ? "EN" : "AR";
        
        const t = translations[currentLang];
        
        // تحديث النصوص العامة
        if(document.getElementById("nav-about")) document.getElementById("nav-about").innerText = t.navAbout;
        if(document.getElementById("nav-gallery")) document.getElementById("nav-gallery").innerText = t.navGallery;
        if(document.getElementById("nav-contact")) document.getElementById("nav-contact").innerText = t.navContact;
        if(document.getElementById("artist-name")) document.getElementById("artist-name").innerText = t.artistName;
        if(document.getElementById("artist-bio")) document.getElementById("artist-bio").innerText = t.artistBio;
        if(document.getElementById("gallery-title")) document.getElementById("gallery-title").innerText = t.galleryTitle;
        if(document.getElementById("gallery-subtitle")) document.getElementById("gallery-subtitle").innerText = t.gallerySubtitle;
        if(document.getElementById("contact-title")) document.getElementById("contact-title").innerText = t.contactTitle;
        if(document.getElementById("contact-subtitle")) document.getElementById("contact-subtitle").innerText = t.contactSubtitle;
        
        // تحديث العناوين الجانبية للجداول (تم التعديل لتشمل 6 لوحات)
        for (let i = 1; i <= 6; i++) {
            if(document.getElementById(`lbl-style-${i}`)) document.getElementById(`lbl-style-${i}`).innerText = t.lblStyle;
            if(document.getElementById(`lbl-tools-${i}`)) document.getElementById(`lbl-tools-${i}`).innerText = t.lblTools;
            if(document.getElementById(`lbl-loc-${i}`)) document.getElementById(`lbl-loc-${i}`).innerText = t.lblLoc;
            if(document.getElementById(`lbl-event-${i}`)) document.getElementById(`lbl-event-${i}`).innerText = t.lblEvent;
        }

        // تحديث تفاصيل الجداريات المتغيرة
        if(document.getElementById("mural-title-1")) document.getElementById("mural-title-1").innerText = t.muralTitle1;
        if(document.getElementById("mural-desc-1")) document.getElementById("mural-desc-1").innerText = t.muralDesc1;
        if(document.getElementById("val-style-1")) document.getElementById("val-style-1").innerText = t.valStyle1;
        if(document.getElementById("val-tools-1")) document.getElementById("val-tools-1").innerText = t.valTools1;
        if(document.getElementById("val-loc-1")) document.getElementById("val-loc-1").innerText = t.valLoc1;
        if(document.getElementById("val-event-1")) document.getElementById("val-event-1").innerText = t.valEvent1;

        if(document.getElementById("mural-title-2")) document.getElementById("mural-title-2").innerText = t.muralTitle2;
        if(document.getElementById("mural-desc-2")) document.getElementById("mural-desc-2").innerText = t.muralDesc2;
        if(document.getElementById("val-style-2")) document.getElementById("val-style-2").innerText = t.valStyle2;
        if(document.getElementById("val-tools-2")) document.getElementById("val-tools-2").innerText = t.valTools2;
        if(document.getElementById("val-loc-2")) document.getElementById("val-loc-2").innerText = t.valLoc2;
        if(document.getElementById("val-event-2")) document.getElementById("val-event-2").innerText = t.valEvent2;

        if(document.getElementById("mural-title-3")) document.getElementById("mural-title-3").innerText = t.muralTitle3;
        if(document.getElementById("mural-desc-3")) document.getElementById("mural-desc-3").innerText = t.muralDesc3;
        if(document.getElementById("val-style-3")) document.getElementById("val-style-3").innerText = t.valStyle3;
        if(document.getElementById("val-tools-3")) document.getElementById("val-tools-3").innerText = t.valTools3;
        if(document.getElementById("val-loc-3")) document.getElementById("val-loc-3").innerText = t.valLoc3;
        if(document.getElementById("val-event-3")) document.getElementById("val-event-3").innerText = t.valEvent3;

        if(document.getElementById("mural-title-4")) document.getElementById("mural-title-4").innerText = t.muralTitle4;
        if(document.getElementById("mural-desc-4")) document.getElementById("mural-desc-4").innerText = t.muralDesc4;
        if(document.getElementById("val-style-4")) document.getElementById("val-style-4").innerText = t.valStyle4;
        if(document.getElementById("val-tools-4")) document.getElementById("val-tools-4").innerText = t.valTools4;
        if(document.getElementById("val-loc-4")) document.getElementById("val-loc-4").innerText = t.valLoc4;
        if(document.getElementById("val-event-4")) document.getElementById("val-event-4").innerText = t.valEvent4;

        if(document.getElementById("mural-title-5")) document.getElementById("mural-title-5").innerText = t.muralTitle5;
        if(document.getElementById("mural-desc-5")) document.getElementById("mural-desc-5").innerText = t.muralDesc5;
        if(document.getElementById("val-style-5")) document.getElementById("val-style-5").innerText = t.valStyle5;
        if(document.getElementById("val-tools-5")) document.getElementById("val-tools-5").innerText = t.valTools5;
        if(document.getElementById("val-loc-5")) document.getElementById("val-loc-5").innerText = t.valLoc5;
        if(document.getElementById("val-event-5")) document.getElementById("val-event-5").innerText = t.valEvent5;

        if(document.getElementById("mural-title-6")) document.getElementById("mural-title-6").innerText = t.muralTitle6;
        if(document.getElementById("mural-desc-6")) document.getElementById("mural-desc-6").innerText = t.muralDesc6;
        if(document.getElementById("val-style-6")) document.getElementById("val-style-6").innerText = t.valStyle6;
        if(document.getElementById("val-tools-6")) document.getElementById("val-tools-6").innerText = t.valTools6;
        if(document.getElementById("val-loc-6")) document.getElementById("val-loc-6").innerText = t.valLoc6;
        if(document.getElementById("val-event-6")) document.getElementById("val-event-6").innerText = t.valEvent6;

        gsap.fromTo("body", { opacity: 0.9 }, { opacity: 1, duration: 0.3 });
    });
}

gsap.from(".reveal-left", { x: -30, opacity: 0, duration: 1.2, ease: "power2.out" });
gsap.from(".reveal-scale", { scale: 0.95, opacity: 0, duration: 1.5, ease: "power3.out" });

gsap.utils.toArray(".reveal-up").forEach(elem => {
    gsap.fromTo(elem, { y: 30, opacity: 0 }, {
        scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            toggleActions: "play none none none"
        },
        y: 0, opacity: 1, duration: 1, ease: "power2.out"
    });
});
