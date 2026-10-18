// src/models/interview/backend.js

export const backendQuestions = [
  {
    "id": "be-q1",
    "category": "backend",
    "topic": "Authentication",
    "question": "What is JWT Authentication?",
    "answer": "JSON Web Tokens are compact, URL-safe tokens passed between client and server to verify identities without holding state sessions inside backend memories.",
    "answerBn": "JWT হলো একটি কমপ্যাক্ট এনক্রিপ্টেড টোকেন বা স্ট্রিং। লগইন করার পর সার্ভার এটি ইউজারকে দেয়। এরপর প্রতিবার এপিআই কলের সাথে এই টোকেন পাঠাতে হয়। সার্ভারকে নিজের মেমরিতে সেশন ধরে রাখতে হয় না, টোকেনটি ডিক্রিপ্ট করলেই সে ইউজারের পরিচয় বুঝতে পারে।",
    "example": "মেট্রোরেলের ওয়ান-টাইম আরএফআইডি (RFID) কার্ডের মতো—স্টেশনের কম্পিউটারে আপনার নাম-ঠিকানা সেভ রাখার দরকার নেই। আপনি কার্ড ছোঁয়ালেই গেট রিড করে বুঝে নেয় আপনার কার্ডে ব্যালেন্স আছে এবং আপনাকে যেতে দেয়।"
  },
  {
    "id": "be-q2",
    "category": "backend",
    "topic": "Architecture",
    "question": "What is the difference between Monolithic and Microservices backend?",
    "answer": "Monolith builds everything into a single, cohesive deployment stack. Microservices split business logic domains into small, autonomous, decoupled services running independently via APIs.",
    "answerBn": "Monolith মানে হলো পুরো ব্যাকএন্ডের কোড (ইউজার, পেমেন্ট, প্রোডাক্ট) একটি মাত্র প্রজেক্ট বা সার্ভারে রাখা। আর Microservices হলো প্রতিটি সেকশনকে আলাদা আলাদা স্বাধীন সার্ভারে ভাগ করে দেওয়া, যারা নিজেদের মধ্যে এপিআই দিয়ে কথা বলে।",
    "example": "Monolith হলো অল-ইন-ওয়ান সুপারশপ—যেখানে ক্যাশিয়ার, সিকিউরিটি এবং ঝাড়ুদার সবাই এক মালিকের আন্ডারে এক ছাদের নিচে কাজ করে। আর Microservices হলো ফুডকোর্ট—যেখানে পিজ্জা, বার্গার আর জুসের দোকান সম্পূর্ণ আলাদা ও স্বাধীন।"
  },
  {
    "id": "be-q3",
    "category": "backend",
    "topic": "WebSockets",
    "question": "How do you handle real-time chat sync from backend layers?",
    "answer": "By deploying persistent duplex protocols like WebSockets or using Pub/Sub nodes via Redis or MQTT brokers.",
    "answerBn": "ব্যাকএন্ড থেকে লাইভ চ্যাট মেসেজ পাস করার জন্য Persistent Duplex প্রোটোকল (যেমন WebSockets) চালু করতে হয় এবং মেসেজগুলো দ্রুত রুট করার জন্য ব্যাকএন্ডে Redis Pub/Sub বা MQTT মেসেজ ব্রোকার ব্যবহার করা হয়।",
    "example": "একটি ওয়াকিটকি বা লাইভ কনফারেন্স রুমের মতো—যেখানে ব্যাকএন্ডে একজন কিছু বলা মাত্র বাতাসে (Socket Channel) ওই চ্যানেলে টিউন করে রাখা বাকি সবার স্পিকারে সাথে সাথে আওয়াজ চলে যায়।"
  },
  {
    "id": "be-q4",
    "category": "backend",
    "topic": "Security",
    "question": "What is CORS?",
    "answer": "Cross-Origin Resource Sharing is a browser security mechanism that restricts resources on a web server from being requested by outside domain layouts.",
    "answerBn": "CORS হলো ব্রাউজারের একটি অত্যন্ত গুরুত্বপূর্ণ সিকিউরিটি পলিসি। এর কাজ হলো এক ডোমেইনের সার্ভার এপিআই যেন অন্য কোনো অপরিচিত বা হ্যাকিং ডোমেইনের ওয়েবসাইট বা ফ্রন্টএন্ড থেকে হুট করে কেউ কল করে ডেটা চুরি করতে না পারে তা ব্লক করা।",
    "example": "আপনার সোসাইটির দারোয়ানের মতো—সে বাইরের কোনো অচেনা লোক বা অন্য এলাকার রিকশাওয়ালাকে আপনার ফ্ল্যাটের ভেতরে হুট করে ঢুকতে দেবে না, যতক্ষণ না ফ্ল্যাটের মালিক বাহির থেকে অনুমতি (Allow Origin) দিচ্ছে।"
  },
  {
    "id": "be-q5",
    "category": "backend",
    "topic": "NodeJS",
    "question": "What is Express.js?",
    "answer": "A minimalist, unopinionated web framework built on top of Node.js used to design fast HTTP REST API endpoints.",
    "answerBn": "Express.js হলো Node.js রানটাইমের ওপর তৈরি করা অত্যন্ত হালকা এবং মিনিমালিস্ট একটি ফ্রেমওয়ার্ক। এটি ব্যবহার করে জাভাস্ক্রিপ্ট দিয়েই খুব দ্রুত এবং সহজে ব্যাকএন্ডের HTTP REST API এন্ডপয়েন্ট বা রাউটারগুলো ডিজাইন করা যায়।",
    "example": "একটি রেডিমেড কিচেন কাউন্টার এবং চুলার ফ্রেমের মতো—যেখানে বেসিক রান্নার পরিকাঠামো দেওয়াই আছে, এখন আপনি আপনার মনের মতো করে মসলা বা শেফ বসিয়ে যেকোনো রেসিপি বা রাউট রেডি করতে পারেন।"
  },
  {
    "id": "be-q6",
    "category": "backend",
    "topic": "Protocols",
    "question": "What is gRPC?",
    "answer": "An open-source high-performance Remote Procedure Call framework developed by Google that uses Protocol Buffers and HTTP/2 for ultra-fast binary streaming communication.",
    "answerBn": "gRPC হলো গুগলের তৈরি একটি সুপার-ফাস্ট কমিউনিকেশন ফ্রেমওয়ার্ক। এটি সাধারণ জেসন টেক্সটের বদলে প্রোটোকল বাফার (বাইনারি ডেটা) এবং HTTP/2 ব্যবহার করে। ফলে সার্ভার-টু-সার্ভার ডেটা ট্রান্সফার আলোর গতিতে এবং খুব কম ব্যান্ডউইথে সম্পন্ন হয়।",
    "example": "চিঠি লিখে ডাকযোগে পাঠানোর বদলে সরাসরি ইন্টারকম লাইনে কোড ভাষায় কথা বলা—যেখানে কোনো বাড়তি কাগজের অপচয় (JSON Overhead) নেই, শুধু নিখাদ সিগন্যাল আদান-প্রদান হয়।"
  },
  {
    "id": "be-q7",
    "category": "backend",
    "topic": "Cloud",
    "question": "What are Serverless Functions?",
    "answer": "On-demand code blocks (like AWS Lambda or Firebase Functions) that execute logic triggered by events, removing the need to manage permanent servers.",
    "answerBn": "সার্ভারলেস ফাংশন (যেমন AWS Lambda) হলো এমন কোড যা ২৪ ঘণ্টা সার্ভার ভাড়া করে চালু রাখতে হয় না। যখনই কোনো ইউজার বাটনে ক্লিক করবে (Event), ঠিক তখনই ক্লাউডে কোডটি ১ সেকেন্ডের জন্য জেগে উঠে কাজ শেষ করে আবার নিজে নিজেই বন্ধ হয়ে যাবে। খরচ শুধু ওই ১ সেকেন্ডের জন্যই দিতে হয়।",
    "example": "সারাদিন একটা ট্যাক্সি বা গাড়ি ড্রাইভারসহ ভাড়া করে বসিয়ে না রেখে, জাস্ট যখন দরকার তখন পাঠাও বা উবার (On-Demand) ডেকে ঠিক যতটুকু রাস্তা গেলেন ততটুকুর ভাড়া মিটিয়ে দেওয়া।"
  },
  {
    "id": "be-q8",
    "category": "backend",
    "topic": "Encryption",
    "question": "What is Hashing vs Encryption?",
    "answer": "Hashing is a one-way mathematical function (e.g., bcrypt for passwords) that cannot be decrypted. Encryption is two-way, requiring a key to revert text back to plain form.",
    "answerBn": "Hashing হলো একমুখী প্রসেস—যেকোনো পাসওয়ার্ডকে ভেঙে এমন এক আজব কোড বানানো হয় যাকে আর কখনোই রিভার্স বা উল্টো করে আসল পাসওয়ার্ডে ফেরত নেওয়া যায় না (যেমন: bcrypt)। আর Encryption হলো দ্বিমুখী—সঠিক চাবি বা সিক্রেট কী (Key) থাকলে আবার আসল লেখা ফেরত পাওয়া যায়।",
    "example": "Hashing হলো একটা আস্ত আলু পিষে আলুর ভর্তা বানিয়ে ফেলা—আপনি হাজার চেষ্টা করলেও ভর্তা থেকে আস্ত আলু ফেরত পাবেন না। আর Encryption হলো একটা দামি সুটকেস তালা মেরে রাখা—চাবি ঘুরালেই সুটকেস খুলে ভেতরের জামাকাপড় অক্ষত পাওয়া যাবে।"
  },
  {
    "id": "be-q9",
    "category": "backend",
    "topic": "Caching",
    "question": "What is Redis used for?",
    "answer": "An in-memory data store used as a high-performance database cache to serve frequent query requests in milliseconds, reducing primary database load.",
    "answerBn": "Redis হলো রাম (RAM) এর ওপর চলা একটি সুপার-ফাস্ট মেমরি ডাটাবেজ। ঘনঘন কল হওয়া এপিআই রেসপন্স বা ডেটা মেইন ডাটাবেজ থেকে বারবার না খুঁজে রেডিসে ক্যাশ করে রাখা হয়, যাতে মিলিসেকেন্ডের মধ্যে রেসপন্স দেওয়া যায় এবং মেইন ডাটাবেজের ওপর প্রেসার কমে।",
    "example": "শেফের রান্নার সময় বারবার পেছনের বড় কোল্ড স্টোরেজে (Main DB) না গিয়ে, হাতের কাছের টেবিলের ওপর ঘনঘন লাগা পেঁয়াজ-মরিচ (Redis Cache) কেটে সাজিয়ে রাখার মতো।"
  },
  {
    "id": "be-q10",
    "category": "backend",
    "topic": "Message Queues",
    "question": "What is RabbitMQ or Kafka?",
    "answer": "Asynchronous message brokers used to route payloads between microservice workers safely without blocking the client thread.",
    "answerBn": "এগুলো হলো অ্যাসিনক্রোনাস মেসেজ ব্রোকার বা লাইনের মতো। যখন ব্যাকএন্ডে একসাথে লাখ লাখ রিকোয়েস্ট আসে (যেমন ইমেইল পাঠানো বা পিডিএফ জেনারেট করা), তখন সার্ভার ক্র্যাশ না করে এই ব্রোকারগুলো রিকোয়েস্টগুলোকে লাইনে দাঁড় করায় এবং ব্যাকএন্ডের ফ্রি ওয়ার্কাররা একে একে কাজগুলো প্রসেস করে।",
    "example": "ব্যাংকের লাইনে বা টিকিট কাউন্টারের সামনে দেওয়া স্টিলের ব্যারিকেড বা সিরিয়াল টোকেন মেশিন—যাতে হুড়োহুড়ি না করে সবাই লাইনে দাঁড়িয়ে শান্তভাবে যার যার টিকিট পায়।"
  },
  {
    "id": "be-q11",
    "category": "backend",
    "topic": "Load Balancing",
    "question": "What is a Load Balancer?",
    "answer": "A proxy node that routes incoming internet traffic across a farm of backend servers to prevent overloads and ensure high availability.",
    "answerBn": "লোড ব্যালেন্সার হলো ট্রাফিক পুলিশের মতো। যখন অ্যাপে কোটি কোটি ইউজার একসাথে আসে, তখন একটি মাত্র সার্ভারের ওপর লোড না দিয়ে, এটি ট্রাফিকগুলোকে ভাগ ভাগ করে ব্যাকএন্ডে সচল থাকা ৪-৫টি আলাদা আলাদা সার্ভারে সমানভাবে ডিস্ট্রিবিউট করে দেয়।",
    "example": "ব্যাংকের গেটে থাকা সিকিউরিটি গার্ড—যে ভেতরে ঢোকার সময় কাস্টমারদের দেখে দেখে খালি থাকা ১, ২ বা ৩ নম্বর কাউন্টারে পাঠিয়ে দেয় যেন কোনো একটি কাউন্টারে উপচে পড়া ভিড় না হয়।"
  },
  {
    "id": "be-q12",
    "category": "backend",
    "topic": "Status Checks",
    "question": "What are Health Check endpoints?",
    "answer": "Dedicated API endpoints (e.g., /health) monitored by container systems to verify if a server node is up, running, and connected to its databases properly.",
    "answerBn": "এটি ব্যাকএন্ডের একটি স্পেশাল ডাম্ব এপিআই এন্ডপয়েন্ট (যেমন `/api/health`)। ক্লাউড বা ডকার সিস্টেম এই ইউআরএল-এ প্রতি ৫ সেকেন্ড পর পর নক করে চেক করে যে সার্ভারটি নিজে ঠিকঠাক বেঁচে আছে কিনা এবং ডাটাবেজের সাথে তার কানেকশন ওকে আছে কিনা।",
    "example": "আইসিইউতে থাকা পেশেন্টের হার্টবিট মনিটরের টুং-টুং শব্দের মতো—শব্দ আসা মানে সব ঠিক আছে, শব্দ বন্ধ হওয়া মাত্রই ইমার্জেন্সি অ্যালার্ম বেজে উঠবে (সার্ভার রিস্টার্ট হবে)।"
  },
  {
    "id": "be-q13",
    "category": "backend",
    "topic": "Docker",
    "question": "What is Containerization (Docker)?",
    "answer": "Packaging code, runtimes, system tools, and libraries together into a isolated container to ensure it runs exactly the same way on any server environment.",
    "answerBn": "কনটেইনারাইজেশন বা ডকার হলো আপনার কোড, ডাটাবেজ এবং প্রয়োজনীয় সব সেটিংস একসাথে একটা ছোট বাক্সে প্যাক করে ফেলা। এর সুবিধা হলো কোডটি আপনার ল্যাপটপে যেভাবে চলবে, পৃথিবীর যেকোনো ক্লাউড সার্ভারেও হুবহু একই রকম স্মুথলি চলবে, কোনো ওএস বা ভার্সনের ঝামেলা হবে না।",
    "example": "কার্গো জাহাজের কন্টেইনারের মতো—ভেতরে জামাকাপড় থাকুক আর দামি গাড়ি, কন্টেইনারের সাইজ আর লক ইউনিভার্সাল। ওটা যেকোনো জাহাজ বা পোর্টে হুবহু ফিট হয়ে যাবে।"
  },
  {
    "id": "be-q14",
    "category": "backend",
    "topic": "Scaling",
    "question": "What is Vertical vs Horizontal Scaling?",
    "answer": "Vertical scaling increases resources (CPU/RAM) on a single machine. Horizontal scaling adds more independent machines or container instances to the cluster.",
    "answerBn": "Vertical Scaling মানে হলো আপনার বর্তমান একক সার্ভার বা পিসির র‍্যাম (RAM) এবং প্রসেসর বাড়িয়ে ওটাকে শক্তিশালী করা। আর Horizontal Scaling মানে হলো কম্পিউটার শক্তিশালী না করে, একই পাওয়ারের আরও ৩-৪টা নতুন কম্পিউটার বা সার্ভার পাশে জুড়ে দিয়ে টিম বানানো।",
    "example": "ভারী মাল বহনের জন্য একটি মাত্র ঘোড়াকে দামি ইনজেকশন খাইয়ে মোটাতাজা করা হলো Vertical। আর ওই ঘোড়ার পাশে আরও ৩টি সাধারণ ঘোড়া এনে একই গাড়িতে জুড়ে দেওয়া হলো Horizontal।"
  },
  {
    "id": "be-q15",
    "category": "backend",
    "topic": "Data Flow",
    "question": "What are Webhooks?",
    "answer": "Automated messages sent from a backend system to a client URL when an event happens (e.g., Stripe notifying your backend that a payment succeeded).",
    "answerBn": "ওয়েবহুক হলো উল্টো এপিআই কল। সাধারণত মোবাইল অ্যাপ সার্ভারকে কল দেয়। কিন্তু থার্ড পার্টি কোনো সার্ভারে (যেমন বিকাশ বা গেটওয়ে) কোনো ঘটনা ঘটলে, তারা যখন নিজে থেকে আমাদের ব্যাকএন্ড ইউআরএল-এ ডেটা বা নোটিফিকেশন পাঠায়, তখন তাকে ওয়েব হুক বলে।",
    "example": "কুরিয়ার সার্ভিসের পার্সেল ডেলিভারি—আপনাকে ১০ বার ফোন দিয়ে বলতে হবে না 'আমার পার্সেল কই?'। পার্সেল আপনার ঠিকানায় পৌঁছানো মাত্র কুরিয়ার বয় নিজে এসে আপনার কলিং বেল টিপে পার্সেল দিয়ে যাবে।"
  }
];
