// src/models/interview/api.js

export const apiQuestions = [
  {
    "id": "a-q1",
    "category": "api",
    "topic": "HTTP",
    "question": "What is the difference between GET and POST requests?",
    "answer": "GET requests fetch data from a server and append queries inside the URL. POST requests send payload structures securely inside the HTTP message body to create resources.",
    "answerBn": "GET রিকোয়েস্ট ব্যবহার করা হয় সার্ভার থেকে ডেটা রিড বা নিয়ে আসার জন্য, এর প্যারামিটারগুলো সরাসরি ব্রাউজার ইউআরএল-এ দেখা যায়। আর POST রিকোয়েস্ট ব্যবহার করা হয় নতুন ডেটা সার্ভারে পাঠানোর জন্য, এর ডেটা বডির ভেতরে সুরক্ষিতভাবে লুকোনো থাকে।",
    "example": "GET হলো একটা পোস্টকার্ড বা খোলা চিঠি—যে কেউ চাইলে ওপরের লেখা পড়তে পারবে। আর POST হলো সিলগালা করা খাম—চিঠির আসল কন্টেন্ট খামের ভেতরে লুকানো থাকে, প্রাপক ছাড়া কেউ দেখতে পারে না।"
  },
  {
    "id": "a-q2",
    "category": "api",
    "topic": "Parsing",
    "question": "How do you parse a JSON string securely in Flutter?",
    "answer": "Use 'jsonDecode(string)' from 'dart:convert' to parse it into a Map, then pass it to a custom model's 'fromJson' factory constructor.",
    "answerBn": "প্রথমে `dart:convert` লাইব্রেরি থেকে `jsonDecode()` ব্যবহার করে র জেসন (JSON) স্ট্রিংটিকে একটি ম্যাপে কনভার্ট করতে হয়। তারপর সেই ম্যাপটিকে আমাদের কাস্টম মডেল ক্লাসের `fromJson()` ফ্যাক্টরি কনস্ট্রাক্টরে পাস করে টাইপ-সেফ অবজেক্টে রূপান্তর করা হয়।",
    "example": "জেসন স্ট্রিং হলো বিদেশ থেকে আসা একটা আন-অ্যাসেম্বলড পার্সেল বাক্স। `jsonDecode` হলো বাক্সটা খোলা, আর `fromJson` হলো ভেতরের নাটবল্টুগুলো দেখে ম্যানুয়াল গাইড অনুযায়ী একটা পূর্ণাঙ্গ টাইপ-সেফ রোবট বা অবজেক্ট তৈরি করে ফেলা।"
  },
  {
    "id": "a-q3",
    "category": "api",
    "topic": "Dio",
    "question": "Why choose Dio package over standard HTTP package?",
    "answer": "Dio natively supports Interceptors, Global configurations, FormData requests, request cancellation parameters, and file download progress tracking.",
    "answerBn": "স্ট্যান্ডার্ড HTTP প্যাকেজের চেয়ে Dio অনেক শক্তিশালী কারণ এতে ইন্টারসেপ্টর, গ্লোবাল বেজ-ইউআরএল সেটআপ, ফাইল আপলোডের জন্য FormData, রিকোয়েস্ট ক্যানসেল করার সুবিধা এবং ফাইল ডাউনলোডের প্রোগ্রেস ট্র্যাকিং করার রেডিমেড মেথড আছে।",
    "example": "নরমাল HTTP প্যাকেজ হলো সাধারণ লোকাল বাস—আপনাকে গন্তব্যে নিয়ে যাবে ঠিকই, কিন্তু এসি বা এক্সট্রা কোনো আরাম নেই। আর Dio হলো একদম লাক্সারি বিজনেস ক্লাস বাস—যেখানে জিপিএস ট্র্যাকিং, কাস্টম ফুড অর্ডার এবং কাস্টমার কেয়ার সব ইন-বিল্ট।"
  },
  {
    "id": "a-q4",
    "category": "api",
    "topic": "Interceptors",
    "question": "What are Interceptors used for?",
    "answer": "Interceptors let you intercept, modify, or block HTTP requests/responses globally (e.g., automatically injecting JWT Auth tokens or logging network calls).",
    "answerBn": "ইন্টারসেপ্টর হলো নেটওয়ার্ক কলের দারোয়ান। কোনো রিকোয়েস্ট সার্ভারে যাওয়ার ঠিক আগে অথবা সার্ভার থেকে রেসপন্স অ্যাপে ঢোকার ঠিক মুহূর্তে ওটাকে মাঝপথে আটকে কাস্টম কাজ (যেমন: টোকেন বসানো বা এরর লগ করা) করার জন্য এটি ব্যবহৃত হয়।",
    "example": "এয়ারপোর্টের ইমিগ্রেশন অফিসারের মতো—আপনি প্লেনে ওঠার ঠিক আগে সে আপনার পাসপোর্ট চেক করে একটা 'সিকিউরিটি স্ট্যাম্প' (JWT Token) বসিয়ে দেয়, যেন আপনি বৈধভাবে যাতায়াত করতে পারেন।"
  },
  {
    "id": "a-q5",
    "category": "api",
    "topic": "Status Codes",
    "question": "What do HTTP status codes 401, 403, and 500 represent?",
    "answer": "401 means Unauthorized (missing credentials), 403 means Forbidden (valid token but insufficient permissions), and 500 represents Internal Server Error.",
    "answerBn": "৪০১ মানে হলো Unauthorized (আপনি কে সেটাই সার্ভার জানে না, টোকেন নাই বা এক্সপায়ার্ড)। ৪০৩ মানে Forbidden (সার্ভার আপনাকে চেনে, কিন্তু এই ডেটা দেখার পারমিশন আপনার নেই)। আর ৫০০ মানে Internal Server Error (সার্ভারের নিজের কোড বা ডাটাবেজে ইন্টারনাল কোনো বাঘ বা জ্যাম লেগেছে)।",
    "example": "৪০১ হলো ক্লাবে ঢোকার সময় টিকিট না থাকা। ৪০৩ হলো টিকিট আছে ঠিকই কিন্তু আপনি নরমাল পাস নিয়ে ভিআইপি জোনে ঢোকার চেষ্টা করছেন। আর ৫০০ হলো ক্লাবের ভেতরেই এসি বা কারেন্ট ব্লাস্ট হয়ে নাচ-গান বন্ধ হয়ে যাওয়া।"
  },
  {
    "id": "a-q6",
    "category": "api",
    "topic": "WebSockets",
    "question": "What is the difference between REST API and WebSockets?",
    "answer": "REST is a unidirectional request-response protocol. WebSockets provide a persistent, bi-directional, full-duplex real-time connection stream.",
    "answerBn": "REST হলো একমুখী যোগাযোগ—আপনি রিকোয়েস্ট পাঠাবেন, সার্ভার উত্তর দেবে, কানেকশন শেষ। আর WebSocket হলো দ্বিমুখী চিরস্থায়ী লাইভ কানেকশন, যেখানে ক্লায়েন্ট এবং সার্ভার যেকোনো মুহূর্তে একে অপরকে মেসেজ পাঠাতে পারে কোনো নতুন রিকোয়েস্ট ছাড়াই।",
    "example": "REST হলো চিঠি বা ইমেইল পাঠানো—আপনি পাঠালেন, সে পড়ে রিপ্লাই দিল। আর WebSocket হলো একদম সরাসরি লাইভ ফোন কল—দুজনই কানেক্টেড এবং যেকোনো মুহূর্তে যে কেউ কথা বলা বা শুনতে শুরু করতে পারে।"
  },
  {
    "id": "a-q7",
    "category": "api",
    "topic": "JSON Serialization",
    "question": "Why do we use code generation packages like json_serializable?",
    "answer": "It eliminates manual type-typos and boilerplates by automatically generating the 'fromJson' and 'toJson' mapping files.",
    "answerBn": "হাতে হাতে স্পেলিং লিখে জেসন ম্যাপ করতে গেলে টাইপো বা বানান ভুল হওয়ার ব্যাপক চান্স থাকে। `json_serializable` বা `freezed` এর মতো কোড জেনারেটর প্যাকেজগুলো অটোমেটিক নিখুঁতভাবে ম্যাপিং ফাইল তৈরি করে দেয়, ফলে সময় বাঁচে এবং বাগ কমে।",
    "example": "হাতে ধরে প্রতি পাতার হিসাব ডায়েরিতে লেখার বদলে একটা রেডিমেড এক্সেল শিটের ফর্মুলা সেট করে দেওয়া—যা এক ক্লিকেই সব হিসাব অটোমেটিক নির্ভুলভাবে জেনারেট করে দেয়।"
  },
  {
    "id": "a-q8",
    "category": "api",
    "topic": "SSL",
    "question": "What is SSL Pinning?",
    "answer": "An extra security layer that embeds the target server's cryptographic public key or certificate into the mobile app, preventing Man-In-The-Middle (MITM) attacks.",
    "answerBn": "এটি একটি উচ্চস্তরের সিকিউরিটি। অ্যাপের ভেতরেই আসল সার্ভারের সিকিউরিটি সার্টিফিকেট বা কী (Key) হার্ডকোড করে রেখে দেওয়া হয়। এর ফলে হ্যাকাররা মাঝপথে ফেক নেটওয়ার্ক তৈরি করে ডেটা চুরি (MITM Attack) করতে পারে না, অ্যাপ শুধু আসল সার্ভারের সাথেই কথা বলে।",
    "example": "ভিআইপি মিটিংয়ের সিকিউরিটি—গার্ডের কাছে আসল অতিথির ছবির প্রিন্টআউট দেওয়া আছে। কেউ যদি ডুপ্লিকেট আইডি কার্ড বানিয়েও আসে, আসল মুখের ছবির সাথে না মিললে গার্ড তাকে কোনোভাবেই ঢুকতে দেবে না।"
  },
  {
    "id": "a-q9",
    "category": "api",
    "topic": "GraphQL",
    "question": "What is GraphQL vs REST?",
    "answer": "REST fetches data from fixed endpoints returning fixed payloads. GraphQL allows clients to query exact data models using a single endpoint, reducing over-fetching.",
    "answerBn": "REST API তে নির্দিষ্ট ইউআরএল থেকে ফিক্সড ডেটা আসে (দরকার হোক বা না হোক পুরো অবজেক্টই দেয়)। আর GraphQL এ মাত্র একটি এন্ডপয়েন্ট থাকে এবং আপনি সার্ভারকে ঠিক যতটুকু ডেটা দিতে বলবেন, সে ফিল্টার করে ঠিক ততটুকুই পাঠাবে (Over-fetching হয় না)।",
    "example": "REST হলো রেডিমেড সেট মেনু—আপনি শুধু চিকেন ফ্রাই খেতে চাইলেও আপনাকে ফ্রাইড রাইস আর কোকসহ পুরো প্যাকেজই কিনতে হবে। আর GraphQL হলো বুফে বা কাস্টম ক্যাফে—মেনু থেকে বেছে বেছে প্লেটে শুধু চিকেন ফ্রাইটাই তুলে নিলেন।"
  },
  {
    "id": "a-q10",
    "category": "api",
    "topic": "Cache",
    "question": "How do you handle network caching?",
    "answer": "By adding cache headers to responses, or using local data tables (Hive/SQLite) to save API structures with time-to-live (TTL) expiration timestamps.",
    "answerBn": "সার্ভার থেকে আসা রেসপন্সের সাথে ক্যাশ হেডার চেক করে অথবা লোকাল ডাটাবেজে (যেমন Hive বা Isar) জেসন ডেটা সেভ করে এবং সাথে একটা এক্সপায়ারি ডেট (TTL) দিয়ে দেওয়া হয়, যাতে ইন্টারনেট না থাকলেও পুরানো ডেটা দেখানো যায়।",
    "example": "বারবার রান্নাঘরে গিয়ে পানি আনার চেয়ে বসার টেবিলের ওপর একটা পানির জগ এনে রাখা। যতক্ষণ জগে পানি (Cache) থাকবে রান্নাঘরে যাবেন না, কিন্তু পানি বাসি বা শেষ হয়ে গেলে (TTL Expired) আবার নতুন করে রান্নাঘর থেকে পানি আনবেন।"
  },
  {
    "id": "a-q11",
    "category": "api",
    "topic": "Timeouts",
    "question": "Why are connection timeouts necessary?",
    "answer": "Timeouts break deadlocked network loops if a server doesn't respond within a specific time, allowing the app to throw an error instead of hanging indefinitely.",
    "answerBn": "কানেকশন টাইমআউট না দিলে, সার্ভার যদি ডাউন থাকে তবে অ্যাপ অনবরত ঘুরতেই থাকবে (Infinite Loading) এবং ইউজার স্ক্রিন লক হয়ে থাকবে। একটা নির্দিষ্ট সময় (যেমন ১০ সেকেন্ড) পর রিকোয়েস্ট ক্যান্সেল করে ইউজারকে এরর দেখানোর জন্যই এটি দরকার।",
    "example": "কাউকে নক করে সাড়া না পেয়ে সারাদিন দরজার সামনে দাঁড়িয়ে না থেকে, ৫ মিনিট পর 'সে ঘরে নেই' ধরে নিয়ে নিজের কাজে চলে যাওয়ার মতো।"
  },
  {
    "id": "a-q12",
    "category": "api",
    "topic": "Conversions",
    "question": "What is the difference between serializing and deserializing?",
    "answer": "Serialization converts an object into a JSON string or map. Deserialization converts a JSON map/string back into a structured type-safe Dart object.",
    "answerBn": "Serialization মানে হলো আমাদের কোডের অবজেক্ট বা মডেলকে ভেঙে সাধারণ জেসন স্ট্রিং বা ম্যাপে রূপান্তর করা (যাতে নেটওয়ার্কে পাঠানো যায়)। আর Deserialization হলো ওই জেসন ম্যাপকে আবার জোড়া লাগিয়ে ডার্ট অবজেক্টে রূপান্তর করা।",
    "example": "Serialization হলো একটা আস্ত খাট স্ক্রু খুলে খুলে ফ্ল্যাট বাক্সে প্যাক করা যাতে সহজে ট্রাকে করে পাঠানো যায়। আর Deserialization হলো কাস্টমারের বাসায় খাম খুলে স্ক্রু কষে আবার আস্ত খাট তৈরি করে ফেলা।"
  },
  {
    "id": "a-q13",
    "category": "api",
    "topic": "Query Parameters",
    "question": "What are path parameters vs query parameters?",
    "answer": "Path parameters target a specific resource ID (e.g., /users/:id). Query parameters filter or sort the resource results (e.g., /users?status=active).",
    "answerBn": "Path Parameter ব্যবহার করা হয় সরাসরি কোনো নির্দিষ্ট আইডি বা রিসোর্সকে টার্গেট করার জন্য (যেমন: নির্দিষ্ট ইউজার)। আর Query Parameter ব্যবহার করা হয় মেইন ডেটার ওপর ফিল্টারিং, সার্চিং বা সর্টিং করার জন্য।",
    "example": "`.../dhaka-college/student-5` এখানে 'student-5' হলো নির্দিষ্ট আইডি (Path)। আর `.../dhaka-college?section=science` এখানে বিজ্ঞান বিভাগের ছাত্রদের ফিল্টার করা হচ্ছে (Query)।"
  },
  {
    "id": "a-q14",
    "category": "api",
    "topic": "Base Options",
    "question": "What should you configure in a global Dio base option?",
    "answer": "BaseUrl, connectTimeout, receiveTimeout, default contentTypes, and standard security headers.",
    "answerBn": "একটি গ্লোবাল ডিও (Dio) ক্লাসের কনফিগারেশনে প্রধানত মেইন সার্ভার লিংক (BaseUrl), রিকোয়েস্ট পাঠানোর সর্বোচ্চ সময় (connectTimeout), রেসপন্স পাওয়ার সময় (receiveTimeout) এবং স্ট্যান্ডার্ড কন্টেন্ট-টাইপ হেডার সেট করতে হয়।",
    "example": "অফিসের লেটারহেড প্যাডের মতো—যেখানে কোম্পানির লোগো, মেইন ঠিকানা আর ডিসক্লেইমার আগে থেকেই প্রিন্ট করা থাকে, যাতে প্রতিবার নতুন চিঠি লেখার সময় এগুলো আলাদা করে লিখতে না হয়।"
  },
  {
    "id": "a-q15",
    "category": "api",
    "topic": "Error Handling",
    "question": "How do you securely map API exceptions?",
    "answer": "By using try-catch blocks to catch generic Exceptions, parsing precise server message bodies, or using a specialized wrapper like Either (fpdart) for functional error returns.",
    "answerBn": "নেটওয়ার্ক কলগুলোকে সবসময় try-catch ব্লকের ভেতরে রাখা উচিত যাতে ইন্টারনেট চলে গেলে অ্যাপ ক্র্যাশ না করে। আরও প্রফেশনাল উপায়ে `Either<Failure, Success>` দিয়ে ফাংশন রিটার্ন করা যায়, যাতে এরর এবং সাকসেস দুটোই সেফলি হ্যান্ডেল হয়।",
    "example": "সার্কাস খেলায় ট্রাপিজিয়ামের নিচে একটি সেফটি নেট বা জাল বিছিয়ে রাখার মতো—যাতে ওপরের খেলোয়াড় হাত ফসকে পড়ে গেলেও মাটিতে আছাড় না খেয়ে জালে আটকে বেঁচে যায় (No App Crash)।"
  }
];
