export const flutterQuestions = [
  {
    "id": "f-q1",
    "category": "flutter",
    "topic": "Architecture",
    "question": "What is the difference between StatefulWidget and StatelessWidget?",
    "answer": "StatelessWidget is immutable; its UI depends entirely on configuration information passed to it. StatefulWidget can hold mutable state that triggers a redraw via 'setState()'.",
    "answerBn": "StatelessWidget হলো অপরিবর্তনশীল (Immutable), এর ভেতরের ডেটা রানটাইমে নিজে নিজে বদলাতে পারে না। আর StatefulWidget তার ভেতরে পরিবর্তনশীল ডেটা বা স্টেট ধরে রাখতে পারে, যা বদলালে `setState()` কল করে স্ক্রিন রিফ্রেশ করা যায়।",
    "example": "Stateless হলো দেয়ালে টাঙানো একটা প্রিন্টেড বাঁধানো ছবি—যা আছে তাই থাকবে। আর Stateful হলো আপনার হাতের স্মার্টফোন স্ক্রিন—যেখানে আপনি একটা বাটন টিপলে সাথে সাথে ডিসপ্লের ভেতরের কাউন্টার বা ছবি বদলে যায়।"
  },
  {
    "id": "f-q2",
    "category": "flutter",
    "topic": "Rendering",
    "question": "Explain the 3 Trees in Flutter.",
    "answer": "Widget Tree (configuration details), Element Tree (manages lifecycle and links widgets to render objects), and RenderObject Tree (handles actual layout and painting measurements).",
    "answerBn": "ফ্লাটারে পর্দার আড়ালে ৩টি ট্রি (গাছ) কাজ করে: ১. Widget Tree (ব্লুপ্রিন্ট বা কনফিগারেশন), ২. Element Tree (ম্যানেজার, যা উইজেট ও রেন্ডারের মধ্যে কানেকশন রাখে) এবং ৩. RenderObject Tree (আসল মিস্ত্রি, যা স্ক্রিনের সাইজ মেপে ড্রইং করে)।",
    "example": "উইজেট ট্রি হলো আপনার আর্কিটেক্টের আঁকা বাড়ির কাগজ-কলমের নকশা। রেন্ডার অবজেক্ট ট্রি হলো রাজমিস্ত্রি যে ইট-বালু দিয়ে দেয়াল তুলছে। আর এলিমেন্ট ট্রি হলো সাইট ম্যানেজার—যে নকশা দেখে দেখে রাজমিস্ত্রিকে অর্ডার দিচ্ছে কোনটা কোথায় বসবে।"
  },
  {
    "id": "f-q3",
    "category": "flutter",
    "topic": "Performance",
    "question": "Why should you use 'const' widgets?",
    "answer": "Using 'const' tells Flutter that the widget configuration won't change, allowing Flutter to cache it and completely skip rebuilding it during parent updates.",
    "answerBn": "উইজেটের আগে 'const' লিখলে ফ্লাটার বুঝতে পারে যে এই উইজেটের চেহারা বা ভেতরের ডেটা কখনো বদলাবে না। এর ফলে ফ্লাটার ওটাকে মেমরিতে ক্যাশ করে রাখে এবং স্ক্রিন হাজারবার রিফ্রেশ হলেও এই কন্সট্যান্ট উইজেটটাকে নতুন করে আর রেন্ডার করে না। অ্যাপের পারফরম্যান্স বাড়ে।",
    "example": "মুভি থিয়েটারে বারবার একই টিকিট কাটার মতো। 'const' উইজেট হলো ভিআইপি পাসধারী লোক—স্ক্রিন রিফ্রেশের লাইনে তাকে বারবার দাঁড়াতে হয় না, সিকিউরিটি তাকে সরাসরি ভেতরে বসার অনুমতি দেয়।"
  },
  {
    "id": "f-q4",
    "category": "flutter",
    "topic": "Lifecycle",
    "question": "What are the core stages of a StatefulWidget lifecycle?",
    "answer": "createState -> initState -> didChangeDependencies -> build -> didUpdateWidget -> deactivate -> dispose.",
    "answerBn": "একটি স্টেটফুল উইজেটের জন্ম থেকে মৃত্যু পর্যন্ত কয়েকটি ধাপ পার হতে হয়: প্রথমে স্টেট তৈরি হয় (createState), স্ক্রিনে আসার আগে একবার রেডি হয় (initState), ডেটা সিঙ্ক করে (didChangeDependencies), স্ক্রিনে ড্র হয় (build), কোনো উইজেট আপডেট হলে চেক করে (didUpdateWidget), বন্ধ হওয়ার মুখে যায় (deactivate) এবং মেমরি থেকে চিরতরে মুছে যায় (dispose)।",
    "example": "ঠিক একটি মানুষের জীবনের মতো: জন্ম (initState), প্রতিদিনের কাজ বা ড্রেস আপ করা (build), কোনো পরিবর্তন মানিয়ে নেওয়া (didUpdateWidget) এবং সবশেষে দুনিয়া থেকে বিদায় নেওয়া (dispose) যাতে তার মেমরি বা রুমটি খালি হয়ে যায়।"
  },
  {
    "id": "f-q5",
    "category": "flutter",
    "topic": "State Management",
    "question": "What is Ephemeral State vs App State?",
    "answer": "Ephemeral State is local state contained inside a single widget (like page view indexes or form inputs). App State is shared globally across multiple views (like user profile info or shopping carts).",
    "answerBn": "Ephemeral State হলো একদম লোকাল স্টেট—যা শুধু একটা নির্দিষ্ট উইজেটের ভেতরেই সীমাবদ্ধ থাকে (যেমন কোনো ফর্ম ফিল্ডে কী লিখছেন)। আর App State হলো গ্লোবাল স্টেট—যা অ্যাপের যেকোনো স্ক্রিন বা যেকোনো জায়গা থেকে এক্সেস এবং চেঞ্জ করা যায়।",
    "example": "Ephemeral State হলো আপনার নিজের পকেটের রুমাল—যা শুধু আপনার কাজের জন্যই লাগে। আর App State হলো ঘরের মাঝখানে রাখা ওয়াইফাই রাউটার—যার পাসওয়ার্ড বা কানেকশন ঘরের সবাই একসাথে ব্যবহার করছে।"
  },
  {
    "id": "f-q6",
    "category": "flutter",
    "topic": "UI Design",
    "question": "What is the purpose of a Scaffold widget?",
    "answer": "Scaffold implements the basic Material Design visual layout structure, automatically providing drawers, app bars, snackbars, and bottom navigations.",
    "answerBn": "Scaffold হলো ফ্লাটার অ্যাপের মূল ক্যানভাস বা রেডিমেড কাঠামো। এটি মেটেরিয়াল ডিজাইনের গাইডলাইন মেনে অ্যাপবার (AppBar), সাইড মেনু (Drawer), নিচের বাটন বার (BottomNavigationBar) ইত্যাদি বসানোর জন্য রেডি জায়গা করে দেয়।",
    "example": "একটি তৈরি করা ফ্ল্যাট বা অ্যাপার্টমেন্টের মতো—যেখানে লিভিং রুম, বাথরুম, বারান্দা আর কিচেনের জায়গা বিল্ডার আগে থেকেই ফিক্সড করে রেখেছে। আপনাকে স্ক্র্যাচ থেকে দেয়াল তুলতে হবে না, জাস্ট ফার্নিচার বসালেই হবে।"
  },
  {
    "id": "f-q7",
    "category": "flutter",
    "topic": "Layouts",
    "question": "What is the difference between MainAxisAlignment and CrossAxisAlignment?",
    "answer": "MainAxisAlignment aligns children along the primary axis of a Row/Column. CrossAxisAlignment aligns them along the perpendicular axis.",
    "answerBn": "MainAxisAlignment কাজ করে প্রধান অক্ষ বা মেইন লাইনের ওপর ভিত্তি করে (Row-এর জন্য ডানে-বামে, Column-এর জন্য ওপরে-নিচে)। আর CrossAxisAlignment কাজ করে তার উল্টো বা লম্বালম্বি অক্ষের ওপর বেস করে।",
    "example": "একটি ট্রেনের বগির কথা ভাবুন। ট্রেনের লাইনের সোজা বগিগুলো একটার পর একটা সাজানো হলো MainAxisAlignment। আর বগির জানলাগুলো ওপর-নিচ বরাবর সমান করা হলো CrossAxisAlignment।"
  },
  {
    "id": "f-q8",
    "category": "flutter",
    "topic": "Keys",
    "question": "Why do we use Keys in Flutter widgets?",
    "answer": "Keys preserve the state of stateful widgets when they move around the widget tree or are modified inside dynamic collections.",
    "answerBn": "যখন কোনো লিস্টের আইটেম ওলটপালট করা হয় বা ডায়নামিকালি ডিলিট করা হয়, তখন ফ্লাটার যেন গুলিয়ে না ফেলে কোন এলিমেন্টার স্টেট কোনটা ছিল—সেজন্য প্রতিটি উইজেটকে চেনার জন্য একটা ইউনিক 'Key' বা আইডি দেওয়া হয়।",
    "example": "স্কুলের ক্লাসরুমে রোল নাম্বার দেওয়ার মতো। ক্লাসের সব বাচ্চার ড্রেস আর চেহারা যদি একই রকম হয়, রোল নাম্বার ছাড়া শিক্ষক ধরতে পারবেন না কে পড়া পেরেছে আর কে দুষ্টুমি করছে।"
  },
  {
    "id": "f-q9",
    "category": "flutter",
    "topic": "Custom Painting",
    "question": "What is CustomPainter used for?",
    "answer": "CustomPainter provides a direct canvas layout layer to draw custom vector shapes, lines, or specialized canvas animations manually.",
    "answerBn": "ফ্লাটারের রেডিমেড উইজেট দিয়ে যখন মনের মতো কোনো অদ্ভুত বা আঁকাবাঁকা ডিজাইন বানানো যায় না, তখন ক্যানভাসে ডিরেক্ট রঙ-পেন্সিল দিয়ে কাস্টম শেপ, বৃত্ত বা কার্ভ লাইন নিজের হাতে ড্র করার জন্য CustomPainter ব্যবহার করা হয়।",
    "example": "রেডিমেড লেগো ব্লক দিয়ে ঘর বানাতে না পেরে, একটা সাদা আর্ট পেপার আর ড্রইং বক্স নিয়ে নিজের হাতে কাস্টম মনস্টার বা লোগো স্কেচ করার মতো।"
  },
  {
    "id": "f-q10",
    "category": "flutter",
    "topic": "Optimization",
    "question": "What is RepaintBoundary?",
    "answer": "It isolates a complex widget subtree into its own display layer, preventing unnecessary repaints when other parts of the screen redraw.",
    "answerBn": "এটি একটি পারফরম্যান্স বুস্টার উইজেট। এটি কোনো জটিল বা ভারী উইজেটকে একটা আলাদা লেয়ারে লক করে দেয়। এর ফলে স্ক্রিনের অন্য কোনো ছোট অংশে অ্যানিমেশন বা রিফ্রেশ হলেও এই ভারী উইজেটটি বারবার নতুন করে রি-পেইন্ট বা ড্র হয় না।",
    "example": "একটি লাইভ থিয়েটার স্টেজের ব্যাকগ্রাউন্ডে থাকা বড় পাহাড়ের পেইন্টিং। স্টেজে অভিনেতারা নড়াচড়া করলে (স্ক্রিন রিফ্রেশ), পেছনের পাহাড়ের ছবি কিন্তু চিত্রশিল্পী বারবার নতুন করে আঁকে না, ওটা ফিক্সড লেয়ারে থেকে যায়।"
  },
  {
    "id": "f-q11",
    "category": "flutter",
    "topic": "Navigation",
    "question": "What is the difference between Navigator 1.0 and 2.0?",
    "answer": "Navigator 1.0 is imperative (push/pop). Navigator 2.0 is declarative, treating the application navigation stack as a direct function of the app state.",
    "answerBn": "Navigator 1.0 হলো ইম্প্যারেটিভ—মানে ম্যানুয়ালি আদেশ দেওয়া যে স্ক্রিনটা পুশ করো বা পপ করো। আর Navigator 2.0 হলো ডিক্লেয়ারেটিভ—যেখানে অ্যাপের স্টেট (যেমন: isLoggedIn) চেঞ্জ হলে নেভিগেশন স্ট্যাক নিজে থেকেই পেজ চেঞ্জ করে নেয়।",
    "example": "১.০ হলো পুরনো বাটন ফোন—ট্যাপ করলেই কল যাবে (পুশ/পপ)। আর ২.০ হলো আধুনিক টেসলা কারের অটো-পাইলট—ম্যাপে ডেস্টিনেশন চেঞ্জ হওয়া মাত্র গাড়ি নিজে থেকেই রুট ঠিক করে ড্রাইভ করা শুরু করে দেয়।"
  },
  {
    "id": "f-q12",
    "category": "flutter",
    "topic": "Data Flow",
    "question": "What is InheritedWidget?",
    "answer": "An efficient base class that propagates information down the widget tree structure, allowing sub-nodes to subscribe to data dynamically.",
    "answerBn": "এটি এমন একটি বিশেষ উইজেট যা ফ্লাটারের উইজেট ট্রির একদম উপর থেকে একদম নিচের যেকোনো উইজেটের কাছে সরাসরি ডেটা পৌঁছে দিতে পারে। মাঝখানের কোনো উইজেটকে প্রপস পাসিংয়ের প্যারা নিতে হয় না।",
    "example": "আপনার বহুতল ভবনের মেইন পানির পাইপলাইনের মতো। প্রতি তলার মানুষ সরাসরি পাইপ থেকে পানি পাচ্ছে, কাউকে বালতি ভরে নিচে নেমে পানি এনে ওপরের তলায় ট্রান্সফার করতে হচ্ছে না।"
  },
  {
    "id": "f-q13",
    "category": "flutter",
    "topic": "Local Storage",
    "question": "When do you use SharedPreferences vs Hive/Isar?",
    "answer": "SharedPreferences is for simple key-value configurations (settings, flags). Hive or Isar are fast, cross-platform NoSQL databases for complex local objects caching.",
    "answerBn": "SharedPreferences ব্যবহার করা হয় একদম ছোটখাটো সিঙ্গেল ডেটা বা সেটিংস সেভ রাখতে (যেমন ডার্ক মোড অন নাকি অফ)। আর Hive বা Isar হলো সুপার-ফাস্ট নো-এসকিউএল ডেটাবেজ, যেখানে বড় বড় অবজেক্ট, ইউজার প্রোফাইল বা অফলাইন ক্যাশ ডেটা স্টোর করা হয়।",
    "example": "SharedPreferences হলো আপনার পকেটের চাবির রিং—একটা বা দুইটা চাবি রাখা যায়। আর Hive/Isar হলো ঘরের বড় আলমারি—যেখানে ফাইলপত্র, জামাকাপড় ও বড় বড় ক্যাটালগ সুন্দর করে সাজিয়ে রাখা যায়।"
  },
  {
    "id": "f-q14",
    "category": "flutter",
    "topic": "Native Bridges",
    "question": "What is a Platform Channel?",
    "answer": "A bridge that lets Flutter send messages to native platforms (Java/Kotlin for Android, Objective-C/Swift for iOS) to run platform-specific APIs.",
    "answerBn": "প্ল্যাটফর্ম চ্যানেল হলো একটি সেতু বা ব্রিজ যা ফ্লাটার কোডকে সরাসরি ফোনের নেটিভ কোডের সাথে (অ্যান্ড্রয়েডের জন্য Kotlin/Java এবং আইওএসের জন্য Swift) কথা বলাতে এবং নেটিভ কোনো হার্ডওয়্যার ফিচার (যেমন ব্যাটারি পারসেন্টেজ) এক্সেস করতে সাহায্য করে।",
    "example": "একজন দোভাষী বা ট্রান্সলেটরের মতো। আপনি বাংলায় (ফ্লাটার) কথা বললেন, দোভাষী সেটাকে জাপানিজে (নেটিভ অ্যান্ড্রয়েড/iOS) কনভার্ট করে ওখানকার লোকাল রাজাকে বুঝিয়ে কাজটা উদ্ধার করে নিয়ে এলো।"
  },
  {
    "id": "f-q15",
    "category": "flutter",
    "topic": "Slivers",
    "question": "What are Slivers in Flutter?",
    "answer": "Slivers are portions of a scrollable area that configure custom scrolling behaviors, like collapsing headers, grid systems, and custom list views together.",
    "answerBn": "Slivers হলো স্ক্রলের স্পেশাল মেকানিজম। সাধারণ স্ক্রল ভিউ বাদ দিয়ে যখন আমরা অ্যাডভান্সড কোনো স্ক্রলিং ইফেক্ট বানাতে চাই (যেমন স্ক্রল করলে ওপরের অ্যাপবার ছোট বা হাওয়া হয়ে যাবে), তখন স্লিপার বা স্লিভার ব্যবহার করতে হয়।",
    "example": "ফেসবুক বা ইনস্টাগ্রাম প্রোফাইলের মতো—আপনি যখন নিচের দিকে স্ক্রল করা শুরু করেন, প্রোফাইল পিকচার আর নামটা আস্তে করে ছোট হয়ে ওপরের চিকন বারে গিয়ে সুন্দর করে আটকে যায়।"
  },
  {
    "id": "f-q16",
    "category": "flutter",
    "topic": "Impeller Rendering Engine",
    "question": "What is the Impeller rendering engine in Flutter and how does it fix shader compilation jank over Skia?",
    "answer": "Impeller is Flutter's modern, next-generation rendering engine designed from scratch to replace the legacy Skia engine on iOS and Android.\n\nWhy Impeller Replaced Skia:\n• Pre-compiled Shaders: Skia compiled Metal/Vulkan shaders at runtime on the user's device the very first time an animation or widget was rendered, causing noticeable frame drops ('Shader Compilation Jank'). Impeller pre-compiles all shaders at build time during compilation.\n• Metal & Vulkan First: Built directly on modern graphics APIs (Metal for iOS/macOS and Vulkan for Android) rather than legacy OpenGL layers.\n• Predictable Frame Rates: Delivers consistent, stutter-free 60fps and 120fps animations even during initial app runs.",
    "answerBn": "ইম্পেলার (Impeller) রেন্ডারিং ইঞ্জিন ফ্লাটারের সবচেয়ে বড় বৈপ্লবিক আপডেট:\n\nস্কিয়া (Skia) ইঞ্জিনের সমস্যা:\nআগে ফ্লাটার Skia ইঞ্জিন ব্যবহার করত। ব্যবহারকারী যখন প্রথমবার কোনো নতুন স্ক্রিন বা অ্যানিমেশন চালু করত, তখন ডিভাইসের ভেতর 'Shader' কম্পাইল হতে গিয়ে কয়েক মিলি-সেকেন্ড স্ক্রিন আটকে যেত (একে 'Jank' বা ল্যাগ বলা হয়)।\n\nইম্পেলারের সমাধান:\n• Impeller অ্যাপ বিল্ড করার সময়ই (Build Time) সব গ্রাফিক্স শেডার কম্পাইল করে প্যাকেজে ঢুকিয়ে দেয়।\n• ফলে অ্যাপ চলার সময় রানটাইমে আর কোনো কম্পাইলেশন লাগে না এবং প্রথম সেকেন্ড থেকেই একদম মাখনের মতো মসৃণ (Smooth 60/120 FPS) অ্যানিমেশন পাওয়া যায়।",
    "command": "# ফ্লাটার প্রজেক্টে ইম্পেলার স্ট্যাটাস যাচাই করা:\nflutter doctor -v",
    "example": "iOS-এ Flutter 3.10 থেকে Impeller ডিফল্ট এবং Android-এ Flutter 3.16+ থেকে Vulkan সাপোর্টেড ডিভাইসে এটি স্বয়ংক্রিয়ভাবে ব্যবহৃত হচ্ছে।"
  },
  {
    "id": "f-q17",
    "category": "flutter",
    "topic": "BuildContext & context.mounted",
    "question": "What is BuildContext under the hood? Why is checking 'context.mounted' critical after async 'await' calls?",
    "answer": "BuildContext is an abstract interface that represents the location of a Widget within the Element Tree of the application. In Flutter, every Element implements BuildContext.\n\nWhy checking 'context.mounted' is Critical:\nWhen executing asynchronous operations (e.g., awaiting an HTTP network call or database query), the user may navigate away from the screen or dismiss the dialog before the Future completes. If you attempt to use 'context' (e.g. Navigator.pop(context), ScaffoldMessenger.of(context), or Theme.of(context)) after an 'await' on an unmounted element, Flutter throws an unhandled exception: 'Looking up a deactivated widget\\'s ancestor is unsafe'. Checking 'if (!context.mounted) return;' ensures the widget is still alive in the tree before interacting with it.",
    "answerBn": "BuildContext কী এবং কেন 'context.mounted' চেক করা জীবন বাঁচায়:\n\nBuildContext আসলে কী?\nএটি উইজেট ট্রিতে একটি উইজেটের সঠিক ভৌগোলিক অবস্থান (Location) নির্দেশ করে।\n\n'context.mounted' কেন চেক করতেই হবে?\nধরা যাক আপনি API কল করলেন 'await api.login()'। এই ৩ সেকেন্ড অপেক্ষা করার সময়ে ইউজার ব্যাক বাটন চেপে পেজ থেকে বের হয়ে গেল (উইজেট ধ্বংস হয়ে গেল)!\nএখন API রেসপন্স আসার পর আপনি যদি 'Navigator.push(context, ...)' কল করেন, ফ্লাটার সাথে সাথে লাল স্ক্রিন ক্র্যাশ দেবে কারণ ওই context আর ট্রিতে নেই!\n\nসমাধান:\nawait এর ঠিক পর অবশ্যই লিখবেন: 'if (!context.mounted) return;'—তাহলে উইজেট বেঁচে থাকলেই কেবল কোড রান করবে, নইলে নিরাপদে থেমে যাবে।",
    "command": "// পারফেক্ট অ্যাসিনক্রোনাস context ব্যবহারের নিয়ম:\nFuture<void> submitOrder(BuildContext context) async {\n  final success = await api.placeOrder();\n  \n  // পেজে এখনও উইজেটটি জীবিত আছে কি না চেক করা:\n  if (!context.mounted) return;\n  \n  ScaffoldMessenger.of(context).showSnackBar(\n    const SnackBar(content: Text('অর্ডার সফল হয়েছে!'))\n  );\n}",
    "example": "ফ্লাটার ৩.৭+ ভার্সনে 'context.mounted' বিল্ট-ইন প্রোপার্টি হিসেবে চলে এসেছে, যা স্টেটফুল বা স্টেটলেস যেকোনো জায়গায় সরাসরি ব্যবহার করা যায়।"
  },
  {
    "id": "f-q18",
    "category": "flutter",
    "topic": "Isolates & compute()",
    "question": "How do you offload heavy CPU computation from the main UI thread using compute() and Isolates in Flutter?",
    "answer": "Dart is a single-threaded language executing on an Event Loop. The main thread (UI thread) handles layout, animations, user touches, and rendering at 60/120fps (16ms per frame).\n\nIf you execute heavy CPU tasks (e.g. parsing a 20MB JSON response, encrypting files, or resizing high-res images) on the main thread, the Event Loop is blocked, causing frozen screens and dropped frames (jank).\n\nIsolates vs compute():\n• Isolate: An independent execution thread with its own private heap memory (no shared memory; communication is via Port message passing).\n• compute(): A high-level helper function provided by Flutter that spawns an Isolate, executes a top-level or static function with arguments, receives the result, and terminates the Isolate automatically.",
    "answerBn": "আইসোলেট (Isolates) এবং compute() এর ব্যবহার:\n\nসমস্যা:\nডার্ট সিঙ্গেল-থ্রেডেড হওয়ায় UI ড্র করা এবং কোড এক্সিকিউট করা একই থ্রেডে হয়। যদি আপনি ১০ মেগাবাইটের বিশাল একটি JSON পার্স করতে যান বা ছবি রিসাইজ করেন, তবে মূল থ্রেড ৩-৪ সেকেন্ড আটকে থাকবে এবং স্ক্রিন পুরোপুরি ফ্রিজ হয়ে যাবে!\n\nসমাধান:\nভারী কাজের জন্য আলাদা থ্রেড বা 'Isolate' চালু করতে হয়। ফ্লাটারের 'compute()' ফাংশনটি স্বয়ংক্রিয়ভাবে একটি ব্যাকগ্রাউন্ড আইসোলেট খুলে কাজ শেষ করে ফলাফল মূল থ্রেডে পাঠিয়ে দেয় এবং কাজ শেষে থ্রেডটি বন্ধ করে দেয়।",
    "command": "// compute() দিয়ে ব্যাকগ্রাউন্ডে ভারী JSON পার্স করার নিয়ম:\nList<Product> parseProducts(String rawJson) {\n  final List decoded = jsonDecode(rawJson);\n  return decoded.map((e) => Product.fromJson(e)).toList();\n}\n\n// UI থ্রেড ফ্রি রেখে ব্যাকগ্রাউন্ডে কল করা:\nfinal products = await compute(parseProducts, response.body);",
    "example": "ই-কমার্স বা নিউজ অ্যাপে যখন একসাথে কয়েক হাজার আইটেমের বড় ক্যাশ ফাইল লোড করা হয়, তখন 'compute()' ব্যবহার করলে অ্যাপের স্ক্রলিংয়ে ১ ফ্রেমও ড্রপ করে না।"
  }
];
