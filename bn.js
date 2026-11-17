(() => {
  const names = {
    'Allah': ['আল্লাহ', 'একমাত্র ইবাদতের যোগ্য সত্তা', 'আল্লাহ নামটি তাঁর সুন্দর নামগুলোর অর্থ ধারণ করে এবং একমাত্র তাঁরই ইবাদতের অধিকার নির্দেশ করে।', 'ভালোবাসা, বিনয়, ভরসা ও আন্তরিকতার সঙ্গে একমাত্র আল্লাহর ইবাদত করুন।', 'أ ل ه (ʾ-l-h), ইবাদত ও উপাসনা'],
    'Ar-Rahman': ['আর-রহমান', 'পরম দয়াময়', 'গ্রন্থে আর-রহমান ও আর-রহীম একসঙ্গে আলোচনা করা হয়েছে; এতে দয়ার গুণ এবং দয়াপ্রাপ্তদের ওপর তার প্রভাবের সম্পর্ক তুলে ধরা হয়েছে।', 'আল্লাহর দয়ার আশা রাখুন, নিয়ামতের শোকর করুন এবং সৃষ্টির প্রতি দয়া দেখান।', 'ر ح م (r-ḥ-m), দয়া'],
    'Ar-Rahim': ['আর-রহীম', 'অতিশয় দয়ালু', 'আল্লাহ যাদের প্রতি চান তাদের কাছে পৌঁছানো পূর্ণাঙ্গ দয়াকে নির্দেশ করে; কুরআনে নামটি আর-রহমানের সঙ্গে এসেছে।', 'দয়া প্রার্থনা করুন, আশার সঙ্গে তওবা করুন এবং সহানুভূতি চর্চা করুন।', 'ر ح م (r-ḥ-m), দয়া'],
    'Al-Malik': ['আল-মালিক', 'সর্বময় অধিপতি', 'পূর্ণ রাজত্ব একমাত্র আল্লাহর; সৃষ্টির প্রতিটি কর্তৃত্ব তাঁর ওপর নির্ভরশীল।', 'অধিপতির সামনে বিনয়ী থাকুন এবং অর্পিত ক্ষমতা ন্যায়ের সঙ্গে ব্যবহার করুন।', 'م ل ك (m-l-k), কর্তৃত্ব ও রাজত্ব'],
    'Al-Quddus': ['আল-কুদ্দূস', 'পরম পবিত্র', 'আল্লাহ সব অপূর্ণতা ও তাঁর মহিমার অনুপযুক্ত বিষয় থেকে পবিত্র।', 'আল্লাহর পবিত্রতা ঘোষণা করুন এবং নিয়ত বিশুদ্ধ রাখুন।', 'ق د س (q-d-s), পবিত্রতা'],
    'As-Salam': ['আস-সালাম', 'ত্রুটিমুক্ত ও শান্তির উৎস', 'আল্লাহ পরিপূর্ণ ও ত্রুটিমুক্ত; নিরাপত্তা ও শান্তি তাঁর কাছ থেকেই আসে।', 'আল্লাহর কাছে নিরাপত্তা চান এবং শান্তি ছড়িয়ে দিন।', 'س ل م (s-l-m), নিরাপত্তা ও ত্রুটিমুক্ততা'],
    'Al-Aziz': ['আল-আজীজ', 'পরাক্রমশালী ও অপরাজেয়', 'আল্লাহকে পরাজিত করা যায় না; তাঁর পরাক্রম পূর্ণ প্রজ্ঞা ও বিচারবোধের সঙ্গে যুক্ত।', 'আল্লাহর ওপর ভরসা করুন; শক্তি দিয়ে কখনো জুলুম করবেন না।', 'ع ز ز (ʿ-z-z), শক্তি ও পরাক্রম'],
    'Al-Hakim': ['আল-হাকীম', 'পরম প্রজ্ঞাময়', 'সৃষ্টি, বিধান ও তাকদিরে আল্লাহর প্রজ্ঞা পরিপূর্ণ।', 'ওহির আনুগত্য করুন এবং অজানার মুখোমুখি হন ভরসা নিয়ে।', 'ح ك م (ḥ-k-m), প্রজ্ঞা ও সঠিক বিচার'],
    'Al-Alim': ['আল-আলীম', 'সর্বজ্ঞ', 'প্রকাশ্য ও অপ্রকাশ্য, অতীত ও ভবিষ্যৎ সবই আল্লাহর জ্ঞানের অন্তর্ভুক্ত; তাঁর জ্ঞান অর্জিত নয় এবং তিনি বিস্মৃত হন না।', 'গোপনেও আন্তরিক থাকুন এবং জ্ঞান অর্জনে বিনয়ী হোন।', 'ع ل م (ʿ-l-m), জ্ঞান'],
    'As-Sami': ['আস-সামী', 'সর্বশ্রোতা', 'আল্লাহ তাঁর মর্যাদার উপযোগীভাবে সীমাহীনভাবে প্রতিটি শব্দ ও দোয়া শোনেন।', 'আশা নিয়ে আল্লাহকে ডাকুন এবং কথা সংযত রাখুন।', 'س م ع (s-m-ʿ), শ্রবণ'],
    'Al-Basir': ['আল-বাসীর', 'সর্বদ্রষ্টা', 'গোপন বিষয়সহ সবকিছু আল্লাহ দেখেন; তাঁর দেখা সৃষ্টির মতো নয়।', 'আল্লাহর উপস্থিতি সম্পর্কে সচেতন থাকুন; কোনো কাজ হারিয়ে যায় না।', 'ب ص ر (b-ṣ-r), দেখা'],
    'Al-Ghafur': ['আল-গফূর', 'পরম ক্ষমাশীল', 'গ্রন্থে ক্ষমার সঙ্গে মার্জনা ও তওবা কবুলের বিষয় আলোচনা করা হয়েছে।', 'দ্রুত তওবা করুন এবং ক্ষমার আশা রাখুন।', 'غ ف ر (gh-f-r), আচ্ছাদন ও ক্ষমা'],
    'At-Tawwab': ['আত-তাওয়াব', 'তওবা কবুলকারী', 'আল্লাহ তওবার সামর্থ্য দেন এবং আন্তরিক প্রত্যাবর্তন গ্রহণ করেন; তাঁর কবুল করা একটি নিয়ামত।', 'আল্লাহর দিকে ফিরে আসুন, অন্যায়ের ক্ষতি পূরণ করুন এবং তওবাকে স্বাগত জানান।', 'ت و ب (t-w-b), ফিরে আসা'],
    'Ar-Razzaq': ['আর-রাজ্জাক', 'নিরন্তর রিজিকদাতা', 'বস্তুগত ও আধ্যাত্মিক সব রিজিক একমাত্র আল্লাহ দান করেন।', 'হালাল পথে রিজিক খুঁজুন, কৃতজ্ঞ থাকুন এবং অলসতা ছাড়া আল্লাহর ওপর ভরসা করুন।', 'ر ز ق (r-z-q), রিজিক ও জীবিকা'],
    'Al-Khaliq': ['আল-খালিক', 'সৃষ্টিকর্তা', 'আল্লাহ একাই সৃষ্টি করেন এবং পূর্ণ জ্ঞান ও প্রজ্ঞায় পরিমাপ নির্ধারণ করেন।', 'একমাত্র সৃষ্টিকর্তার ইবাদত করুন এবং সৃষ্টিকে আমানত মনে করুন।', 'خ ل ق (kh-l-q), পরিমাপসহ সৃষ্টি করা'],
    'Al-Latif': ['আল-লতীফ', 'সূক্ষ্মদর্শী ও পরম অনুগ্রহশীল', 'আল্লাহ সূক্ষ্মতম বিষয় জানেন এবং অদৃশ্য উপায়ে বান্দাদের কাছে তাঁর অনুগ্রহ পৌঁছায়।', 'অদৃশ্য অনুগ্রহের আশা রাখুন এবং নীরব নিয়ামতগুলো লক্ষ্য করুন।', 'ل ط ف (l-ṭ-f), সূক্ষ্মতা ও অনুগ্রহ'],
    'Al-Wadud': ['আল-ওয়াদূদ', 'পরম স্নেহময়', 'আল্লাহর ভালোবাসা পূর্ণাঙ্গ এবং তিনি মুমিনদের প্রিয়; তাঁর মহিমার উপযোগীভাবে।', 'সবকিছুর চেয়ে আল্লাহকে বেশি ভালোবাসুন এবং অন্যদের যত্ন নিন।', 'و د د (w-d-d), ভালোবাসা'],
    'Al-Hayy': ['আল-হাইয়্য', 'চিরঞ্জীব', 'আল্লাহর জীবন পরিপূর্ণ ও চিরস্থায়ী; এর শুরু, শেষ, নিদ্রা বা কোনো অপূর্ণতা নেই। সব জীবন তাঁর ওপর নির্ভরশীল।', 'যিনি কখনো মৃত্যুবরণ করেন না তাঁর কাছে আশা রাখুন এবং নিয়মিত ইবাদত করুন।', 'ح ي ي (ḥ-y-y), জীবন'],
    'Al-Qayyum': ['আল-কাইয়্যূম', 'স্বয়ংসম্পূর্ণ ও সবকিছুর ধারক', 'আল্লাহ সবার মুখাপেক্ষিতামুক্ত; প্রতিটি সৃষ্টি তাঁর দ্বারাই অস্তিত্বশীল ও পরিচালিত।', 'আল্লাহর ওপর নির্ভর করুন এবং ইবাদতে তাঁর সাহায্য চান।', 'ق و م (q-w-m), প্রতিষ্ঠা ও পরিচালনা'],
    'Al-Awwal': ['আল-আউয়াল', 'সর্বপ্রথম, যাঁর আগে কিছুই নেই', 'সব সৃষ্টির আগে আল্লাহ ছিলেন; তাঁর আগে কিছুই ছিল না।', 'প্রথমেই আল্লাহর দিকে ফিরে যান; সব সূচনা তাঁর কাছ থেকে।', 'أ و ل (ʾ-w-l), প্রথম হওয়া'],
    'Al-Akhir': ['আল-আখির', 'সর্বশেষ, যাঁর পরে কিছুই থাকবে না', 'সৃষ্টির অবসানের পরও আল্লাহ থাকবেন; কোনো কিছুই তাঁকে অতিক্রম করে স্থায়ী নয়।', 'আল্লাহর কাছে ফিরে যাওয়ার প্রস্তুতি নিন এবং স্থায়ী কল্যাণের আশা রাখুন।', 'أ خ ر (ʾ-kh-r), শেষ হওয়া'],
    'Al-Qabid': ['আল-কাবিদ', 'সংকুচিতকারী', 'রিজিক ও মূল্যসংক্রান্ত একটি সহিহ বর্ণনায় এই নাম এসেছে; আল-বাসিতের সঙ্গে একে বুঝতে হবে।', 'সংকটের সময় ধৈর্য ধরুন এবং হালাল উপায় অবলম্বন করুন।', 'ق ب ض (q-b-ḍ), সংকোচন ও সীমিত করা'],
    'Al-Basit': ['আল-বাসিত', 'সম্প্রসারণকারী', 'আল্লাহ যেভাবে চান রিজিক প্রশস্ত করেন; সংকোচন ও সম্প্রসারণ পূর্ণ প্রজ্ঞার সঙ্গে ঘটে।', 'স্বাচ্ছন্দ্যে কৃতজ্ঞ ও বিপদে আশাবাদী থাকুন; প্রাপ্তি থেকে উদারভাবে দান করুন।', 'ب س ط (b-s-ṭ), সম্প্রসারণ ও প্রাচুর্য'],
    'Al-Wahhab': ['আল-ওয়াহহাব', 'মহাদানশীল দাতা', 'আল্লাহ প্রতিদান ছাড়াই দান করেন; আলে ইমরান ৩:৮-এ এই নামে তাঁকে ডাকা হয়েছে।', 'ঈমান ও কল্যাণের দান প্রার্থনা করুন এবং প্রতিদানের আশা ছাড়া দান করুন।', 'و ه ب (w-h-b), নিঃস্বার্থ দান']
  };
  const text = {
    'الله · Fiqh al-Asma’':'الله · ফিকহুল আসমা',
    'A companion to the book':'বইভিত্তিক অধ্যয়ন সহায়িকা',
    'Knowing Allah through His Beautiful Names':'আল্লাহর সুন্দর নামগুলোর মাধ্যমে তাঁকে জানা',
    'Study selected Names, principles and supplications from Shaykh ʿAbd al-Razzāq al-Badr’s':'শাইখ আবদুর রাজ্জাক আল-বদরের',
    'Fiqh al-Asmā’ al-Ḥusnā':'ফিকহুল আসমাউল হুসনা',
    ', with page references to the Arabic edition. Reflections and study tools are supplemental.': 'গ্রন্থ থেকে নির্বাচিত নাম, মূলনীতি ও দোয়া অধ্যয়ন করুন; আরবি সংস্করণের পৃষ্ঠাসংখ্যা দেওয়া আছে। ভাবনা ও অধ্যয়নের উপকরণ সম্পূরক।',
    '“To Allah belong the Most Beautiful Names, so call upon Him by them.” — Al-Aʿrāf 7:180':'“সুন্দরতম নামগুলো আল্লাহরই; সুতরাং তাঁকে সেসব নামেই ডাকো।” — আল-আ‘রাফ ৭:১৮০',
    'Explore Names':'নামগুলো দেখুন','Study now':'অধ্যয়ন করুন','Al-Asmā’ al-Ḥusnā':'আসমাউল হুসনা','Names directory':'নামের তালিকা',
    'Explore a selection from the book. Each entry points to its chapter in the supplied Arabic edition.':'বই থেকে নির্বাচিত নামগুলো দেখুন। প্রতিটি নামের সঙ্গে প্রদত্ত আরবি সংস্করণের সংশ্লিষ্ট অধ্যায়ের পৃষ্ঠা দেওয়া আছে।',
    'All themes':'সব বিষয়','Majesty':'মহিমা','Mercy':'দয়া','Knowledge':'জ্ঞান','Sovereignty':'সার্বভৌমত্ব','Creation':'সৃষ্টি','Care':'যত্ন','Life':'জীবন',
    'Previous':'পূর্ববর্তী','Next':'পরবর্তী','About this selection':'এই নির্বাচন সম্পর্কে',
    'This is a selection, not the book’s complete treatment or a list of all 99. Al-Badr discusses the Names as not restricted to a fixed number on p. 58 and the narrated enumeration and meaning of iḥṣāʾ on pp. 62–65. Categories, roots and reflections are editorial aids, not quotations from the book.':'এটি বইয়ের সম্পূর্ণ আলোচনা বা ৯৯ নামের তালিকা নয়। আল-বদর নামগুলো নির্দিষ্ট সংখ্যায় সীমাবদ্ধ না হওয়ার বিষয়টি ৫৮ পৃষ্ঠায় এবং বর্ণিত তালিকা ও ইহসার অর্থ ৬২–৬৫ পৃষ্ঠায় আলোচনা করেছেন। বিভাগ, শব্দমূল ও ভাবনা সম্পাদনাগত সহায়িকা; বইয়ের উদ্ধৃতি নয়।',
    'Al-Asmā’ al-Muqtarinah':'যুগ্ম নামসমূহ','Paired Names':'যুগ্ম নাম','The book discusses what is learned from Names mentioned together. Page numbers refer to the supplied Arabic edition.':'একসঙ্গে উল্লিখিত নামগুলো থেকে কী জানা যায় তা বইয়ে আলোচনা করা হয়েছে। পৃষ্ঠাসংখ্যা প্রদত্ত আরবি সংস্করণের।',
    'Al-Qawāʿid':'মূলনীতি','Foundational principles':'মৌলিক নীতিমালা','Brief summaries of selected themes in the book, with page references for further reading.':'বইয়ের নির্বাচিত বিষয়ের সংক্ষিপ্ত সার এবং আরও পড়ার জন্য পৃষ্ঠাসংখ্যা।',
    'Supplications from the book':'বই থেকে নির্বাচিত দোয়া','Call upon Him by them':'এসব নাম দিয়ে তাঁকে ডাকুন',
    'A selection of supplications quoted in the book, with page numbers and original sources. This selection is not exhaustive. Translations are study aids; consult the original sources.':'বইয়ে উদ্ধৃত দোয়া থেকে একটি নির্বাচন; সঙ্গে পৃষ্ঠাসংখ্যা ও মূল উৎস দেওয়া আছে। এটি সম্পূর্ণ তালিকা নয়। অনুবাদগুলো অধ্যয়নের সহায়ক; মূল উৎস দেখুন।',
    'Review and reflect':'পুনরালোচনা ও চিন্তা','Study progress':'অধ্যয়নের অগ্রগতি','Mastered':'আয়ত্ত হয়েছে','Quiz accuracy':'কুইজে সঠিকতার হার','Selection':'নির্বাচিত অংশ',
    'Flashcard':'ফ্ল্যাশকার্ড','Recall the Name and meaning':'নাম ও অর্থ মনে করার চেষ্টা করুন','Unrated':'এখনো মূল্যায়ন করা হয়নি','Reveal meaning':'অর্থ দেখুন','Needs review':'আবার পড়তে হবে','Quick quiz':'ছোট কুইজ',
    'Local progress':'সংরক্ষিত অগ্রগতি','Saved in this browser and device.':'এই ব্রাউজার ও ডিভাইসে সংরক্ষিত।','Reset progress':'অগ্রগতি মুছুন','Reset mastered Names and quiz progress on this device?':'এই ডিভাইসে আয়ত্ত করা নাম ও কুইজের অগ্রগতি মুছে ফেলবেন?',
    'Further study':'আরও অধ্যয়ন','References & bibliography':'তথ্যসূত্র ও গ্রন্থপঞ্জি','Primary book':'মূল গ্রন্থ','Further reading':'আরও পড়ুন','Scriptural references':'ধর্মগ্রন্থের সূত্র','Scope':'পরিসর',
    'ʿAbd al-Razzāq ibn ʿAbd al-Muḥsin al-Badr,':'আবদুর রাজ্জাক ইবন আবদুল মুহসিন আল-বদর,',
    '(فقه الأسماء الحسنى). Page references follow the supplied 336-page Arabic scan and identify the start of the relevant discussion, not a quotation or full translation.':'(فقه الأسماء الحسنى)। পৃষ্ঠাসংখ্যা প্রদত্ত ৩৩৬ পৃষ্ঠার আরবি স্ক্যান অনুযায়ী সংশ্লিষ্ট আলোচনার শুরু নির্দেশ করে; এটি পূর্ণ অনুবাদ নয়।',
    'Ibn Taymiyyah,':'ইবন তাইমিয়্যাহ,','Majmūʿ al-Fatāwā':'মাজমূ‘ আল-ফাতাওয়া','Ibn al-Qayyim,':'ইবনুল কাইয়্যিম,','Badā’iʿ al-Fawā’id':'বাদায়ি‘ আল-ফাওয়ায়িদ','Ibn Kathīr,':'ইবন কাসীর,','Tafsīr al-Qur’ān al-ʿAẓīm':'তাফসীরুল কুরআনিল আযীম','Al-Saʿdī,':'আস-সা‘দী,','Taysīr al-Karīm al-Raḥmān':'তাইসীরুল কারীমির রাহমান',
    'The Noble Qur’an, cited by surah and verse.':'পবিত্র কুরআন, সূরা ও আয়াত অনুযায়ী উদ্ধৃত।','Jāmiʿ al-Tirmidhī 1314':'জামি‘ আত-তিরমিযী ১৩১৪','(ḥasan ṣaḥīḥ, al-Tirmidhī’s grading).':'(তিরমিযীর মূল্যায়নে হাসান সহিহ)।','Ṣaḥīḥ Muslim 2713':'সহিহ মুসলিম ২৭১৩','(the First and the Last).':'(সর্বপ্রথম ও সর্বশেষ)।','Ṣaḥīḥ al-Bukhārī 2736':'সহিহ বুখারি ২৭৩৬','(99-Names report, without an enumeration in the narration).':'(৯৯ নামের হাদিস, বর্ণনায় নামের তালিকা নেই)।',
    'This is a selected study aid, not a translation of the book. Its roots, reflections and quiz are supplemental editorial material. It does not replace the book or qualified instruction.':'এটি নির্বাচিত অধ্যয়ন সহায়িকা, বইয়ের অনুবাদ নয়। শব্দমূল, ভাবনা ও কুইজ সম্পাদনাগত সংযোজন। এটি বই বা যোগ্য শিক্ষকের বিকল্প নয়।',
    'An educational companion. May Allah grant beneficial knowledge and sincerity.':'একটি শিক্ষাসহায়িকা। আল্লাহ উপকারী জ্ঞান ও আন্তরিকতা দান করুন।',
    'Names':'নাম','Pairs':'যুগল','Principles':'মূলনীতি','Duʿāʾ':'দোয়া','Study':'অধ্যয়ন','Sources':'সূত্র',
    'Direct meaning':'মূল অর্থ','Book discussion':'বইয়ের আলোচনা','Linguistic root · supplemental':'শব্দমূল · সম্পূরক','Reflection · supplemental':'ভাবনা · সম্পূরক','Supplication invoking this Name':'এই নাম উল্লেখ করে দোয়া',
    'This supplication mentions this Name and is quoted in the book.':'এই দোয়ায় নামটি উল্লেখ আছে এবং এটি বইয়ে উদ্ধৃত হয়েছে।','No direct invocation is currently listed for this Name.':'এই নাম উল্লেখ করে কোনো দোয়া বর্তমানে তালিকাভুক্ত নেই।',
    'No matching Names.':'মিলেছে এমন কোনো নাম নেই।','No results':'কোনো ফলাফল নেই','Correct':'সঠিক','Review this one':'এটি আবার পড়ুন'
  };

  const pairTranslations = [
    ['আল-গফূর • আর-রহীম', 'ক্ষমা ও দয়া একসঙ্গে উল্লেখ করা হয়েছে।'],
    ['আল-আজীজ • আল-হাকীম', 'পূর্ণ পরাক্রম ও পূর্ণ প্রজ্ঞা কীভাবে একসঙ্গে বুঝতে হয় তা বইয়ে ব্যাখ্যা করা হয়েছে।'],
    ['আস-সামী • আল-আলীম', 'বইয়ে কুরআনের প্রেক্ষাপটে শ্রবণ ও জ্ঞানের এই যুগল আলোচনা করা হয়েছে।'],
    ['আস-সামী • আল-বাসীর', 'বইয়ে কুরআনের প্রেক্ষাপটে শ্রবণ ও দর্শনের এই যুগল আলোচনা করা হয়েছে।'],
    ['আল-আউয়াল • আল-আখির', 'আল্লাহর আগে কিছু নেই এবং তাঁর পরে কিছু থাকে না। বইয়ে আয-যাহির ও আল-বাতিনের সঙ্গে এ নামগুলো আলোচিত হয়েছে।'],
    ['আল-কাবিদ • আল-বাসিত', 'রিজিকের সংকোচন ও সম্প্রসারণ একসঙ্গে আলোচনা করা হয়েছে।']
  ];
  const ruleTranslations = [
    ['ওহির ওপর ভিত্তি', 'ওহির বাইরে নিজস্বভাবে আল্লাহর বর্ণনা দেওয়ার বদলে কুরআন ও সুন্নাহয় প্রতিষ্ঠিত বিষয় স্বীকার করার কথা বইয়ে বলা হয়েছে।'],
    ['প্রতিটি নাম পূর্ণতা নির্দেশ করে', 'নামগুলো সুন্দর এবং পূর্ণতার অর্থ নির্দেশ করে; এগুলো অর্থহীন উপাধি নয়।'],
    ['সাদৃশ্য বা অস্বীকার ছাড়া স্বীকার', 'আল্লাহকে সৃষ্টির সঙ্গে তুলনা না করে কিংবা প্রতিষ্ঠিত বিষয় অস্বীকার না করে ওহিতে বর্ণিত গুণাবলি স্বীকার করার ব্যাখ্যা বইয়ে রয়েছে।'],
    ['নাম ও গুণাবলি', 'নামগুলো আল্লাহকে নির্দেশ করে এবং প্রত্যেকটি স্বতন্ত্র অর্থ ও গুণ প্রকাশ করে।'],
    ['জ্ঞান থেকে ইবাদত', 'নামগুলোর জ্ঞান ইবাদতে প্রভাব ফেলে; বইয়ে ভরসা এবং আল্লাহর জ্ঞান সম্পর্কে সচেতনতার উদাহরণ দেওয়া হয়েছে।'],
    ['নামগুলো নির্দিষ্ট সংখ্যায় সীমাবদ্ধ নয়', '৯৯ নাম সম্পর্কে বর্ণনা এবং আল্লাহর নাম ৯৯-এ সীমিত—এই দাবির পার্থক্য বইয়ে তুলে ধরা হয়েছে।'],
    ['বুঝে আল্লাহকে ডাকা', 'ইহসা আলোচনায় বইটি নামগুলো শেখা, অর্থ বোঝা এবং সেগুলো দিয়ে আল্লাহকে ডাকার কথা বলে।']
  ];
  const quizTranslations = [
    ['কোন নামের অর্থ “চিরঞ্জীব”?', ['আল-হাইয়্য', 'আল-মালিক', 'আল-লতীফ'], 'আল-হাইয়্য চিরস্থায়ী জীবন নির্দেশ করে (২:২৫৫)।'],
    ['আল-হাদীদ ৫৭:৩-এ কোন যুগল এসেছে?', ['আল-গফূর • আর-রহীম', 'আল-আউয়াল • আল-আখির', 'আস-সামী • আল-বাসীর'], 'আয়াতে আল্লাহকে প্রথম ও শেষ, প্রকাশ্য ও অপ্রকাশ্য বলা হয়েছে।'],
    ['তাওকীফিয়্যাহ বলতে কী বোঝায়?', ['নামগুলো ওহির মাধ্যমে প্রতিষ্ঠিত', 'নাম তৈরি করা যায়', 'প্রতিটি গুণই একটি নাম'], 'নামগুলো মনগড়া নয়; ওহি থেকে জানা যায়।'],
    ['আলে ইমরান ৩:৮-এর দোয়ায় কোন নাম উল্লেখ আছে?', ['আল-ওয়াহহাব', 'আল-হাইয়্য', 'আল-মালিক'], 'আলে ইমরান ৩:৮-এর শেষে আছে “ইন্নাকা আনতাল ওয়াহহাব”।'],
    ['কোন নামের অর্থ সর্বশ্রোতা?', ['আস-সামী', 'আল-খালিক', 'আল-কাবিদ'], 'আস-সামী অর্থ সর্বশ্রোতা (২:১২৭)।']
  ];
  const duaTranslations = [
    'হে আমাদের রব, হিদায়াত দেওয়ার পর আমাদের অন্তরকে বক্র করবেন না এবং আপনার পক্ষ থেকে আমাদের অনুগ্রহ দান করুন। নিশ্চয় আপনিই মহাদাতা।',
    'হে আমাদের রব, আমাদের পক্ষ থেকে কবুল করুন। নিশ্চয় আপনিই সর্বশ্রোতা, সর্বজ্ঞ।',
    'হে আল্লাহ, আসমানসমূহের রব, জমিনের রব ও মহান আরশের রব, আমাদের রব এবং সবকিছুর রব, শস্য ও আঁটি বিদীর্ণকারী, তাওরাত, ইঞ্জিল ও ফুরকানের অবতীর্ণকারী! আপনার পূর্ণ নিয়ন্ত্রণে থাকা প্রত্যেক বস্তুর অনিষ্ট থেকে আপনার আশ্রয় চাই। হে আল্লাহ, আপনিই প্রথম; আপনার আগে কিছু নেই। আপনিই শেষ; আপনার পরে কিছু নেই। আপনিই প্রকাশ্য; আপনার ওপরে কিছু নেই। আপনিই অপ্রকাশ্য; আপনার চেয়ে নিকটবর্তী কিছু নেই। আমাদের ঋণ পরিশোধ করে দিন এবং দারিদ্র্য থেকে মুক্ত করুন।'
  ];
  N.forEach(n => {
    const b = names[n[0]];
    if (!b) throw new Error('Missing Bangla translation for ' + n[0]);
    text[n[2]]=b[0]; text[n[3]]=b[1]; text[n[7]]=b[2]; text[n[8]]=b[3]; text[roots[n[0]]]=b[4];
  });
  P.forEach((p,i) => { text[p[0]]=pairTranslations[i][0]; text[p[1]]=pairTranslations[i][1]; });
  R.forEach((r,i) => { text[r[0]]=ruleTranslations[i][0]; text[r[1]]=ruleTranslations[i][1]; });
  D.forEach((d,i) => { text[d[2]]=duaTranslations[i]; });
  Q.forEach((q,i) => {
    text[q[0]]=quizTranslations[i][0];
    q[1].forEach((option,j) => { text[option]=quizTranslations[i][1][j]; });
    text[q[3]]=quizTranslations[i][2];
  });
  Object.assign(text, {
    'Qur’an, Āl ʿImrān 3:8':'কুরআন, আলে ইমরান ৩:৮',
    'Qur’an, Al-Baqarah 2:127':'কুরআন, আল-বাকারা ২:১২৭',
    'Ṣaḥīḥ Muslim 2713a':'সহিহ মুসলিম ২৭১৩ক'
  });

  const labels = {
    'Toggle dark mode':'গাঢ় রং চালু বা বন্ধ করুন','Search Names':'নাম অনুসন্ধান করুন',
    'Search the Names…':'নাম অনুসন্ধান করুন…','Filter theme':'বিষয় অনুযায়ী বাছাই করুন',
    'Previous Names page':'নামের পূর্ববর্তী পৃষ্ঠা','Next Names page':'নামের পরবর্তী পৃষ্ঠা',
    'Previous supplications':'পূর্ববর্তী দোয়া','Next supplications':'পরবর্তী দোয়া',
    'Main navigation':'মূল নেভিগেশন','Close':'বন্ধ করুন'
  };
  const citations = {
    'Fiqh al-Asmā’ al-Ḥusnā':'ফিকহুল আসমাউল হুসনা',
    'Scriptural attestation:':'ধর্মগ্রন্থের সূত্র:', ', p.':', পৃষ্ঠা',
    'Book pp.':'বইয়ের পৃষ্ঠা', 'Book p.':'বইয়ের পৃষ্ঠা',
    'Al-Fātiḥah':'আল-ফাতিহা','Al-Baqarah':'আল-বাকারা','Al-Ḥashr':'আল-হাশর','Al-Mu’minūn':'আল-মুমিনূন',
    'Al-Ḥadīd':'আল-হাদীদ','Al-Shūrā':'আশ-শূরা','Al-Isrā’':'আল-ইসরা',
    'Al-Jumuʿah':'আল-জুমুআহ','Al-Aḥzāb':'আল-আহযাব','Al-Anʿām':'আল-আনআম',
    'Al-Ḥujurāt':'আল-হুজুরাত','Al-Zumar':'আয-যুমার','Al-Dhāriyāt':'আয-যারিয়াত',
    'Al-Burūj':'আল-বুরূজ','Āl ʿImrān':'আলে ইমরান','Ṭā Hā':'ত্বা-হা',
    'Fuṣṣilat':'ফুসসিলাত','Ghāfir':'গাফির','Hūd':'হূদ','Ṣād':'সাদ',
    'Ṣaḥīḥ Muslim':'সহিহ মুসলিম','Jāmiʿ al-Tirmidhī':'জামি‘ আত-তিরমিযী',
    '(ḥasan ṣaḥīḥ)':'(হাসান সহিহ)'
  };
  let language = localStorage.getItem('asmaLanguage') === 'bn' ? 'bn' : 'en';
  const originals = new WeakMap();
  const attributeOriginals = new WeakMap();
  const digits = s => s.replace(/[0-9]/g, d => '০১২৩৪৫৬৭৮৯'[Number(d)]);

  function bangla(value) {
    if (Object.prototype.hasOwnProperty.call(text,value)) return text[value];
    if (/^\d+–\d+ of \d+$/.test(value)) return digits(value.replace(' of ',' / '));
    if (value.endsWith(' · Name entry')) return (text[value.slice(0,-13)] || value.slice(0,-13))+' · নামের বিবরণ';
    if (value.startsWith('— ')) return '— '+(text[value.slice(2)] || value.slice(2));
    if (value.includes(' — ')) return value.split(' — ').map(part => text[part] || part).join(' — ');
    if (value.includes('Book p.') || value.includes('Book pp.') || value.includes('Scriptural attestation:')) {
      let result=value;
      for (const [en,bn] of Object.entries(citations)) result=result.split(en).join(bn);
      return digits(result);
    }
    return value;
  }
  window.appText = value => language === 'bn' ? bangla(value) : value;
  window.localizedSearch = id => (names[id] || []).join(' ').toLowerCase();

  function applyLanguage() {
    document.documentElement.lang=language;
    document.title=language==='bn'?'ফিকহুল আসমাউল হুসনা':'Fiqh al-Asma’ al-Husna';
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{
      acceptNode(node) {
        return node.parentElement.closest('script,style,#language') || !node.nodeValue.trim()
          ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    while(walker.nextNode()) {
      const node=walker.currentNode;
      if(!originals.has(node)) originals.set(node,node.nodeValue);
      const original=originals.get(node), trimmed=original.trim();
      const translated=language==='bn'?bangla(trimmed):trimmed;
      node.nodeValue=original.replace(trimmed,translated);
    }
    document.querySelectorAll('[aria-label],[placeholder]').forEach(element=>{
      let saved=attributeOriginals.get(element);
      if(!saved){saved={};attributeOriginals.set(element,saved);}
      for(const attr of ['aria-label','placeholder']) {
        if(!element.hasAttribute(attr)||element.id==='language')continue;
        if(!Object.prototype.hasOwnProperty.call(saved,attr))saved[attr]=element.getAttribute(attr);
        element.setAttribute(attr,language==='bn'?(labels[saved[attr]]||saved[attr]):saved[attr]);
      }
    });
    const button=document.getElementById('language');
    button.textContent=language==='bn'?'English':'বাংলা';
    button.setAttribute('aria-label',language==='bn'?'Switch to English':'Switch to Bangla');
  }

  const wrap = fn => function(...args) { const result=fn(...args); applyLanguage(); return result; };
  render=wrap(render);
  renderDuas=wrap(renderDuas);
  draw=wrap(draw);
  drawQ=wrap(drawQ);
  answer=wrap(answer);
  stats=wrap(stats);
  openName=wrap(openName);
  document.getElementById('language').onclick=()=>{
    language=language==='en'?'bn':'en';
    localStorage.setItem('asmaLanguage',language);
    applyLanguage();
  };
  applyLanguage();
})();
