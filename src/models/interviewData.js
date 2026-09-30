// src/data/interviewData.js

export const initialInterviewData = {
  sectionTitle: "Core Infrastructure Protocols & Interview Checklist",
  description: "Essential validation markers for professional flutter deployment cycles.",
  categories: [
    { id: "all", label: "All Sections" },
    { id: "dart", label: "Dart" },
    { id: "flutter", label: "Flutter" },
    { id: "api", label: "API & Network" },
    { id: "database", label: "Database" },
    { id: "backend", label: "Backend" },
    { id: "dsa", label: "DSA" },
    { id: "architecture", label: "Architecture (MVVM/Clean)" }
  ],
  questions: [
    // --- DART ---
    { 
      id: "d-q1", 
      category: "dart", 
      topic: "Dart Basics", 
      question: "What is Dart and why does Flutter use it?", 
      answer: "Dart is a client-optimized language for fast apps on any platform. Flutter uses it because of AOT (Ahead-of-Time) compilation for fast startup/performance and JIT (Just-in-Time) compilation for Hot Reload.",
      answerBn: "ডার্ট হলো যেকোনো প্ল্যাটফর্মে দ্রুত অ্যাপ বানানোর জন্য একটি অপ্টিমাইজড ল্যাঙ্গুয়েজ। ফ্লাটার এটি ব্যবহার করে কারণ এতে AOT কম্পাইলেশন আছে যা অ্যাপ দ্রুত চালু করে, আর JIT কম্পাইলেশন আছে যা হট রিলোড (কোড চেঞ্জ সাথে সাথে দেখা) সাপোর্ট করে।",
      example: "JIT হলো একজন লাইভ শেফের মতো—আপনি রান্নায় নুন কম বললে সে কড়াইতেই নুন বাড়িয়ে দেয় (হট রিলোড)। আর AOT হলো বিয়ের বাড়ির ক্যাটারিং—সব রান্না আগে থেকেই রেডি করে রাখা হয় যেন মেহমান আসামাত্রই সার্ভ করা যায় (ফাস্ট স্টার্টআপ)।"
    },
    { 
      id: "d-q2", 
      category: "dart", 
      topic: "Dart Soundness", 
      question: "What is sound null safety in Dart?", 
      answer: "It means variables cannot contain null unless you explicitly say they can (using '?'). This prevents runtime null-pointer exceptions, catching them at compile time.",
      answerBn: "এর মানে হলো ডার্টে কোনো ভ্যারিয়েবল নিজে থেকে 'null' বা ফাঁকা হতে পারবে না, যদি না আপনি নিজে '?' সাইন দিয়ে অনুমতি দেন। এর ফলে অ্যাপ রান করার সময় হুট করে ক্র্যাশ (Null-Pointer Exception) হয় না, কোড লেখার সময়ই ভুল ধরা পড়ে।",
      example: "ধরুন আপনি বাজার থেকে একটা সিলড পানির বোতল কিনলেন। কোম্পানি গ্যারান্টি দিচ্ছে ভেতরে পানি আছেই (Non-nullable)। আর যদি বোতলের ছিপি খোলা থাকে (Nullable), তবে পানি খাওয়ার আগে আপনাকে চেক করতে হবে ভেতরে কিছু আছে নাকি ফাঁকা!"
    },
    { 
      id: "d-q3", 
      category: "dart", 
      topic: "Dart Concurrency", 
      question: "Explain Isolate in Dart.", 
      answer: "Dart code runs in isolates, which are separate execution threads with their own memory heaps. They do not share memory; they communicate only via ports/messages, preventing race conditions.",
      answerBn: "ডার্টের পুরো কোড রান হয় 'Isolate'-এর ভেতরে। এগুলো হলো আলাদা আলাদা থ্রেড যাদের নিজস্ব মেমোরি থাকে। এরা একে অপরের মেমোরি শেয়ার করে না, শুধু পোর্ট বা মেসেজের মাধ্যমে যোগাযোগ করে। ফলে দুই থ্রেড একই ডেটা নিয়ে কাড়াকাড়ি (Race Condition) করতে পারে না।",
      example: "দুটি আলাদা ফ্ল্যাটের দুই রান্নাবান্না করার লোকের মতো। তারা একই রান্নাঘর বা মসলা শেয়ার করে না (নো শেয়ার্ড মেমোরি), তাই ঝগড়াও হয় না। যদি এক ফ্ল্যাটের লবণের দরকার হয়, সে অন্য ফ্ল্যাটের দরজায় নক করে চেয়ে নেয় (মেসেজ পাসিং)।"
    },
    { 
      id: "d-q4", 
      category: "dart", 
      topic: "Dart Keywords", 
      question: "What is the difference between 'final' and 'const'?", 
      answer: "'final' is a runtime-constant (value evaluated when initialized). 'const' is a compile-time constant (value must be known before running).",
      answerBn: "'final' হলো রানটাইম কনস্ট্যান্ট—অর্থাৎ অ্যাপ চালু হওয়ার পর যখন ভ্যারিয়েবলটা প্রথম তৈরি হবে, তখন তার ভ্যালু ফিক্সড হবে। আর 'const' হলো কম্পাইল-টাইম কনস্ট্যান্ট—কোড রান করার আগেই তার মান নিশ্চিত জানা থাকতে হবে।",
      example: "'const' হলো আপনার জন্মতারিখ, যা পৃথিবীর সৃষ্টির শুরু থেকেই ফিক্সড। আর 'final' হলো আপনার আজকের দুপুরের লাঞ্চের মেন্যু—সকালে ঘুম থেকে ওঠার আগে জানা ছিল না, কিন্তু দুপুরে যখন প্লেটে খাবার চলে এলো, ওটা ফিক্সড হয়ে গেল, আর বদলানো যাবে না।"
    },
    { 
      id: "d-q5", 
      category: "dart", 
      topic: "Dart Async", 
      question: "What is the difference between Future and Stream?", 
      answer: "A Future represents a single asynchronous value or error that will be available later. A Stream represents a sequence of asynchronous events/multiple values over time.",
      answerBn: "Future মানে হলো একটি সিঙ্গেল অ্যাসিনক্রোনাস ডেটা বা এরর যা একটু পরে আসবে (একবারই আসবে)। আর Stream হলো একটা লাইভ পাইপলাইনের মতো, যেখান দিয়ে সময়ের সাথে সাথে একটার পর একটা অনবরত ডেটা আসতেই থাকবে।",
      example: "Future হলো ফুডপান্ডায় অর্ডার করা বার্গার—অর্ডার দেওয়ার কিছুক্ষণ পর একটা নির্দিষ্ট বার্গার একবারই আপনার হাতে আসবে। আর Stream হলো নেটফ্লিক্স বা ইউটিউবের লাইভ ভিডিও—সেখানে সেকেন্ডে সেকেন্ডে ভিডিওর ডেটা প্যাকেট অনবরত আপনার স্ক্রিনে আসতেই থাকে।"
    },
    { 
      id: "d-q6", 
      category: "dart", 
      topic: "Dart OO", 
      question: "What is a Mixin in Dart?", 
      answer: "A mixin is a way of reusing a class's code in multiple class hierarchies without using multiple inheritance. It uses the 'with' keyword.",
      answerBn: "মিক্সিন হলো মাল্টিপল ইনহেরিটেন্স ছাড়া এক ক্লাসের কোড অন্য একাধিক ক্লাসের মধ্যে পুনর্ব্যবহার (Reuse) করার একটি উপায়। এটি 'with' কি-ওয়ার্ড দিয়ে ব্যবহার করা হয়।",
      example: "ধরুন আপনার একটা 'পাইলট' এবং একটি 'ডাক্তার' ক্লাস আছে। এখন আপনি 'সুপারম্যান' ক্লাসে ওড়ার ক্ষমতা দিতে চান। সুপারম্যান তো আর পাইলটের ছেলে না (No Extends), কিন্তু সে ওড়ার স্কিলটা মিক্সিন হিসেবে নিজের সাথে যুক্ত করে নিতে পারে (with Flyer)।"
    },
    { 
      id: "d-q7", 
      category: "dart", 
      topic: "Dart OOP", 
      question: "What is the difference between 'implements' and 'extends'?", 
      answer: "'extends' is used to inherit behavior from a superclass (subclassing). 'implements' forces the class to implement the entire interface/structure of another class.",
      answerBn: "'extends' ব্যবহার করা হয় বাবা-মার থেকে সরাসরি বৈশিষ্ট্য বা স্বভাব বংশগতভাবে পাওয়ার মতো (Inheritance)। আর 'implements' হলো একটা চুক্তির মতো—অন্য ক্লাসের যতগুলো ফাংশন আছে, সবগুলো আপনাকে নিজের মতো করে নতুন করে স্ক্র্যাচ থেকে লিখতে বাধ্য করবে।",
      example: "'extends' হলো বাবার জমি পাওয়া—আপনি সরাসরি ওটার মালিক হয়ে গেলেন। আর 'implements' হলো আর্কিটেক্টের দেওয়া একটা বাড়ির নকশা—আর্কিটেক্ট আপনাকে কোনো ইট-বালু দেবে না, নকশা দেখে দেখে পুরো বাড়ি আপনাকে নিজেকে গাঁথতে হবে।"
    },
    { 
      id: "d-q8", 
      category: "dart", 
      topic: "Dart Memory", 
      question: "How does Dart's Garbage Collector work?", 
      answer: "It uses a two-generation garbage collection strategy: a Young Generation for short-lived objects (scavenging) and an Old Generation for long-lived objects (mark-sweep).",
      answerBn: "ডার্টের মেমোরি ক্লিনার বা গার্বেজ কালেক্টর দুটি ধাপে কাজ করে: Young Generation (যেখানে নতুন ও ক্ষণস্থায়ী অবজেক্টগুলো দ্রুত সাফ করা হয়) এবং Old Generation (যেখানে দীর্ঘদিন বেঁচে থাকা দরকারি অবজেক্টগুলোকে মার্ক করে রেখে বাকিগুলো ফেলে দেওয়া হয়)।",
      example: "Young Generation হলো আপনার ঘরের টেবিলের ঝুড়ি—যেখানে চিপসের প্যাকেট বা টিস্যু ময়লা হওয়া মাত্র সাথে সাথে ফেলে দেওয়া হয়। আর Old Generation হলো স্টোর রুম—যেখানে অনেক পুরোনো জিনিস জমানো থাকে এবং বছরে একবার বড় করে পরিষ্কার করা হয়।"
    },
    { 
      id: "d-q9", 
      category: "dart", 
      topic: "Dart Typing", 
      question: "What is the difference between 'dynamic' and 'Object'?", 
      answer: "'dynamic' disables static type checking (any property access is allowed at compile-time). 'Object' is the root instance class, requiring safe downcasting or type checking before execution.",
      answerBn: "'dynamic' ডার্টের টাইপ চেকিং সিস্টেমকে বন্ধ করে দেয়, ফলে কম্পাইল টাইমে যেকোনো মেথড কল করা যায় (ভুল হলেও আটকায় না)। আর 'Object' হলো সব ক্লাসের মূল ভিত্তি, এর ভেতরে যেকোনো ডেটা রাখা গেলেও ব্যবহার করার আগে তার আসল রূপ চেক (Type Check/Cast) করে নিতে হয়।",
      example: "'dynamic' হলো ভিআইপি পাসের মতো—সিকিউরিটি গার্ড কোনো চেকিং ছাড়াই যেকোনো দরজায় ঢুকতে দেবে, তবে ভেতরে ভুল দরজায় ঢুকলে বিপদে পড়বেন। আর 'Object' হলো একটা পার্সেল বক্স—আপনি জানেন ভেতরে কিছু আছে, কিন্তু খোলার আগে মেটাল ডিটেক্টর দিয়ে স্ক্যান করে নিতে হবে ওটা কী।"
    },
    { 
      id: "d-q10", 
      category: "dart", 
      topic: "Dart Operators", 
      question: "What does the '??=' operator do?", 
      answer: "It is the null-aware assignment operator. It assigns a value to a variable only if that variable is currently null.",
      answerBn: "এটি একটি নাল-অ্যাওয়ার অ্যাসাইনমেন্ট অপারেটর। এর কাজ হলো একটি ভ্যারিয়েবলে কোনো মান তখনই সেট করা, যদি সেই ভ্যারিয়েবলটি আগে থেকেই খালি বা 'null' অবস্থায় থাকে।",
      example: "ধরুন আপনি আপনার বন্ধুকে পকেট খরচ দিতে চান। আপনি বললেন, 'তোর পকেট যদি একদম খালি থাকে (null), তবেই আমি তোকে ৫০০ টাকা দেব (??= 500)। যদি অলরেডি পকেটে ১০ টাকাও থাকে, আমি আর দেব না।'"
    },
    { 
      id: "d-q11", 
      category: "dart", 
      topic: "Dart Collections", 
      question: "What is the difference between a List, Set, and Map?", 
      answer: "List is an ordered collection allowing duplicates. Set is an unordered collection of unique items. Map is a dictionary with unique keys mapped to values.",
      answerBn: "List হলো সিরিয়াল অনুযায়ী সাজানো ডেটা যেখানে একই জিনিস বারবার থাকতে পারে। Set হলো ডুপ্লিকেট ছাড়া একদম ইউনিক জিনিসের ছড়ানো-ছিটানো দল। আর Map হলো চাবি এবং তালার মতো Key-Value পেয়ারের ডিকশনারি।",
      example: "List হলো আপনার পরীক্ষার হাজিরা খাতা (একই নামের দুজন থাকতে পারে)। Set হলো লটারির ড্র-এর ভেতরের কয়েনগুলো (একটি নাম্বার একবারই থাকবে)। Map হলো হোটেলের চাবির বোর্ড—রুম নম্বর ১০১ (Key) এর বিপরীতে থাকবে ওই রুমের চাবি (Value)।"
    },
    { 
      id: "d-q12", 
      category: "dart", 
      topic: "Dart Callable", 
      question: "How do you make a Dart class callable like a function?", 
      answer: "By implementing the 'call()' method inside the class structure.",
      answerBn: "ডার্টের যেকোনো ক্লাসের ভেতরে যদি আপনি জাস্ট `call()` নামের একটি মেথড বা ফাংশন তৈরি করে দেন, তবে সেই ক্লাসের অবজেক্টকে সরাসরি সাধারণ ফাংশনের মতো ব্র্যাকেট দিয়ে কল করা যায়।",
      example: "অবলিভিয়েট বা জাদুর মন্ত্রের মতো। আপনি একটা জাদুর লাঠি অবজেক্ট বানালেন `const wand = MagicWand();` এখন লাঠিটাকে ফাংশনের মতো অ্যাক্টিভেট করতে জাস্ট লিখবেন `wand();` কারণ ভেতরে `call()` মেথড সেট করা আছে।"
    },
    { 
      id: "d-q13", 
      category: "dart", 
      topic: "Dart Functions", 
      question: "What is an anonymous function or closure?", 
      answer: "An anonymous function is a function without a name, often used as callbacks. A closure is a function object that has access to variables in its lexical scope.",
      answerBn: "অ্যানোনিমাস ফাংশন হলো নাম ছাড়া বেনামী ফাংশন, যা সাধারণত অন্য ফাংশনের ভেতরে প্যারামিটার হিসেবে পাঠানো হয়। আর ক্লোজার (Closure) হলো এমন একটি ফাংশন যা তার আশেপাশের বাইরের ভ্যারিয়েবলগুলোকে নিজের মেমরিতে সারাজীবন মনে রাখতে পারে।",
      example: "অ্যানোনিমাস ফাংশন হলো বাসের ওয়ান-টাইম টিকিট—কাজ শেষ তো ওটার অস্তিত্ব শেষ। আর ক্লোজার হলো পকেটে রাখা একটি ডায়েরির মতো—ফাংশনটি যেখানেই ঘুরে বেড়াক না কেন, ডায়েরিতে লেখা বাইরের ভ্যারিয়েবলের মান সে সবসময় এক্সেস করতে পারে।"
    },
    { 
      id: "d-q14", 
      category: "dart", 
      topic: "Dart Factory", 
      question: "When do you use a factory constructor?", 
      answer: "Use a factory constructor when you don't always want to create a new instance of the class (e.g., returning a cached instance or a subclass).",
      answerBn: "ফ্যাক্টরি কনস্ট্রাক্টর তখন ব্যবহার করা হয় যখন আপনি কনস্ট্রাক্টর কল করলেই প্রতিবার মেমরিতে নতুন অবজেক্ট বানাতে চান না; বরং আগের তৈরি করা ক্যাশ অবজেক্ট বা অন্য কোনো সাব-ক্লাসের অবজেক্ট রিটার্ন করতে চান।",
      example: "সাধারণ কনস্ট্রাক্টর হলো অটোমেটিক ভেন্ডিং মেশিন—টাকা দিলেই প্রতিবার নতুন কাপ কফি বানিয়ে দেবে। আর ফ্যাক্টরি কনস্ট্রাক্টর হলো শোরুমের ম্যানেজার—আপনি গাড়ি চাইলে সে গোডাউনে অলরেডি রেডি থাকা আগের গাড়িটাই এনে আপনাকে হ্যান্ডওভার করবে।"
    },
    { 
      id: "d-q15", 
      category: "dart", 
      topic: "Dart Extensions", 
      question: "What are extension methods?", 
      answer: "Extension methods allow you to add functionality/methods to existing libraries or classes without modifying the original code or subclassing.",
      answerBn: "এক্সটেনশন মেথডের মাধ্যমে আমরা অন্য কারো লেখা বা ডার্টের নিজস্ব কোনো ক্লাসের (যেমন String বা int) ভেতরে হাত না দিয়ে কিংবা ইনহেরিট না করে, বাহির থেকেই নতুন কাস্টম ফাংশন জুড়ে দিতে পারি।",
      example: "মোবাইলের ব্যাক-কভার বা পপ-সকেটের মতো। আপনি কিন্তু আইফোনের বডি কেটে নতুন হুক লাগাচ্ছেন না, জাস্ট বাহির থেকে একটা পপ-সকেট আঠা দিয়ে লাগিয়ে ফোন ধরার নতুন সুবিধা বা ফিচার যোগ করে নিলেন।"
    },

    // --- FLUTTER ---
    { 
      id: "f-q1", 
      category: "flutter", 
      topic: "Architecture", 
      question: "What is the difference between StatefulWidget and StatelessWidget?", 
      answer: "StatelessWidget is immutable; its UI depends entirely on configuration information passed to it. StatefulWidget can hold mutable state that triggers a redraw via 'setState()'.",
      answerBn: "StatelessWidget হলো অপরিবর্তনশীল (Immutable), এর ভেতরের ডেটা রানটাইমে নিজে নিজে বদলাতে পারে না। আর StatefulWidget তার ভেতরে পরিবর্তনশীল ডেটা বা স্টেট ধরে রাখতে পারে, যা বদলালে `setState()` কল করে স্ক্রিন রিফ্রেশ করা যায়।",
      example: "Stateless হলো দেয়ালে টাঙানো একটা প্রিন্টেড বাঁধানো ছবি—যা আছে তাই থাকবে। আর Stateful হলো আপনার হাতের স্মার্টফোন স্ক্রিন—যেখানে আপনি একটা বাটন টিপলে সাথে সাথে ডিসপ্লের ভেতরের কাউন্টার বা ছবি বদলে যায়।"
    },
    { 
      id: "f-q2", 
      category: "flutter", 
      topic: "Rendering", 
      question: "Explain the 3 Trees in Flutter.", 
      answer: "Widget Tree (configuration details), Element Tree (manages lifecycle and links widgets to render objects), and RenderObject Tree (handles actual layout and painting measurements).",
      answerBn: "ফ্লাটারে পর্দার আড়ালে ৩টি ট্রি (গাছ) কাজ করে: ১. Widget Tree (ব্লুপ্রিন্ট বা কনফিগারেশন), ২. Element Tree (ম্যানেজার, যা উইজেট ও রেন্ডারের মধ্যে কানেকশন রাখে) এবং ৩. RenderObject Tree (আসল মিস্ত্রি, যা স্ক্রিনের সাইজ মেপে ড্রইং করে)।",
      example: "উইজেট ট্রি হলো আপনার আর্কিটেক্টের আঁকা বাড়ির কাগজ-কলমের নকশা। রেন্ডার অবজেক্ট ট্রি হলো রাজমিস্ত্রি যে ইট-বালু দিয়ে দেয়াল তুলছে। আর এলিমেন্ট ট্রি হলো সাইট ম্যানেজার—যে নকশা দেখে দেখে রাজমিস্ত্রিকে অর্ডার দিচ্ছে কোনটা কোথায় বসবে।"
    },
    { 
      id: "f-q3", 
      category: "flutter", 
      topic: "Performance", 
      question: "Why should you use 'const' widgets?", 
      answer: "Using 'const' tells Flutter that the widget configuration won't change, allowing Flutter to cache it and completely skip rebuilding it during parent updates.",
      answerBn: "উইজেটের আগে 'const' লিখলে ফ্লাটার বুঝতে পারে যে এই উইজেটের চেহারা বা ভেতরের ডেটা কখনো বদলাবে না। এর ফলে ফ্লাটার ওটাকে মেমরিতে ক্যাশ করে রাখে এবং স্ক্রিন হাজারবার রিফ্রেশ হলেও এই কন্সট্যান্ট উইজেটটাকে নতুন করে আর রেন্ডার করে না। অ্যাপের পারফরম্যান্স বাড়ে।",
      example: "মুভি থিয়েটারে বারবার একই টিকিট কাটার মতো। 'const' উইজেট হলো ভিআইপি পাসধারী লোক—স্ক্রিন রিফ্রেশের লাইনে তাকে বারবার দাঁড়াতে হয় না, সিকিউরিটি তাকে সরাসরি ভেতরে বসার অনুমতি দেয়।"
    },
    { 
      id: "f-q4", 
      category: "flutter", 
      topic: "Lifecycle", 
      question: "What are the core stages of a StatefulWidget lifecycle?", 
      answer: "createState -> initState -> didChangeDependencies -> build -> didUpdateWidget -> deactivate -> dispose.",
      answerBn: "একটি স্টেটফুল উইজেটের জন্ম থেকে মৃত্যু পর্যন্ত কয়েকটি ধাপ পার হতে হয়: প্রথমে স্টেট তৈরি হয় (createState), স্ক্রিনে আসার আগে একবার রেডি হয় (initState), ডেটা সিঙ্ক করে (didChangeDependencies), স্ক্রিনে ড্র হয় (build), কোনো উইজেট আপডেট হলে চেক করে (didUpdateWidget), বন্ধ হওয়ার মুখে যায় (deactivate) এবং মেমরি থেকে চিরতরে মুছে যায় (dispose)।",
      example: "ঠিক একটি মানুষের জীবনের মতো: জন্ম (initState), প্রতিদিনের কাজ বা ড্রেস আপ করা (build), কোনো পরিবর্তন মানিয়ে নেওয়া (didUpdateWidget) এবং সবশেষে দুনিয়া থেকে বিদায় নেওয়া (dispose) যাতে তার মেমরি বা রুমটি খালি হয়ে যায়।"
    },
    { 
      id: "f-q5", 
      category: "flutter", 
      topic: "State Management", 
      question: "What is Ephemeral State vs App State?", 
      answer: "Ephemeral State is local state contained inside a single widget (like page view indexes or form inputs). App State is shared globally across multiple views (like user profile info or shopping carts).",
      answerBn: "Ephemeral State হলো একদম লোকাল স্টেট—যা শুধু একটা নির্দিষ্ট উইজেটের ভেতরেই সীমাবদ্ধ থাকে (যেমন কোনো ফর্ম ফিল্ডে কী লিখছেন)। আর App State হলো গ্লোবাল স্টেট—যা অ্যাপের যেকোনো স্ক্রিন বা যেকোনো জায়গা থেকে এক্সেস এবং চেঞ্জ করা যায়।",
      example: "Ephemeral State হলো আপনার নিজের পকেটের রুমাল—যা শুধু আপনার কাজের জন্যই লাগে। আর App State হলো ঘরের মাঝখানে রাখা ওয়াইফাই রাউটার—যার পাসওয়ার্ড বা কানেকশন ঘরের সবাই একসাথে ব্যবহার করছে।"
    },
    { 
      id: "f-q6", 
      category: "flutter", 
      topic: "UI Design", 
      question: "What is the purpose of a Scaffold widget?", 
      answer: "Scaffold implements the basic Material Design visual layout structure, automatically providing drawers, app bars, snackbars, and bottom navigations.",
      answerBn: "Scaffold হলো ফ্লাটার অ্যাপের মূল ক্যানভাস বা রেডিমেড কাঠামো। এটি মেটেরিয়াল ডিজাইনের গাইডলাইন মেনে অ্যাপবার (AppBar), সাইড মেনু (Drawer), নিচের বাটন বার (BottomNavigationBar) ইত্যাদি বসানোর জন্য রেডি জায়গা করে দেয়।",
      example: "একটি তৈরি করা ফ্ল্যাট বা অ্যাপার্টমেন্টের মতো—যেখানে লিভিং রুম, বাথরুম, বারান্দা আর কিচেনের জায়গা বিল্ডার আগে থেকেই ফিক্সড করে রেখেছে। আপনাকে স্ক্র্যাচ থেকে দেয়াল তুলতে হবে না, জাস্ট ফার্নিচার বসালেই হবে।"
    },
    { 
      id: "f-q7", 
      category: "flutter", 
      topic: "Layouts", 
      question: "What is the difference between MainAxisAlignment and CrossAxisAlignment?", 
      answer: "MainAxisAlignment aligns children along the primary axis of a Row/Column. CrossAxisAlignment aligns them along the perpendicular axis.",
      answerBn: "MainAxisAlignment কাজ করে প্রধান অক্ষ বা মেইন লাইনের ওপর ভিত্তি করে (Row-এর জন্য ডানে-বামে, Column-এর জন্য ওপরে-নিচে)। আর CrossAxisAlignment কাজ করে তার উল্টো বা লম্বালম্বি অক্ষের ওপর বেস করে।",
      example: "একটি ট্রেনের বগির কথা ভাবুন। ট্রেনের লাইনের সোজা বগিগুলো একটার পর একটা সাজানো হলো MainAxisAlignment। আর বগির জানলাগুলো ওপর-নিচ বরাবর সমান করা হলো CrossAxisAlignment।"
    },
    { 
      id: "f-q8", 
      category: "flutter", 
      topic: "Keys", 
      question: "Why do we use Keys in Flutter widgets?", 
      answer: "Keys preserve the state of stateful widgets when they move around the widget tree or are modified inside dynamic collections.",
      answerBn: "যখন কোনো লিস্টের আইটেম ওলটপালট করা হয় বা ডায়নামিকালি ডিলিট করা হয়, তখন ফ্লাটার যেন গুলিয়ে না ফেলে কোন এলিমেন্টার স্টেট কোনটা ছিল—সেজন্য প্রতিটি উইজেটকে চেনার জন্য একটা ইউনিক 'Key' বা আইডি দেওয়া হয়।",
      example: "স্কুলের ক্লাসরুমে রোল নাম্বার দেওয়ার মতো। ক্লাসের সব বাচ্চার ড্রেস আর চেহারা যদি একই রকম হয়, রোল নাম্বার ছাড়া শিক্ষক ধরতে পারবেন না কে পড়া পেরেছে আর কে দুষ্টুমি করছে।"
    },
    { 
      id: "f-q9", 
      category: "flutter", 
      topic: "Custom Painting", 
      question: "What is CustomPainter used for?", 
      answer: "CustomPainter provides a direct canvas layout layer to draw custom vector shapes, lines, or specialized canvas animations manually.",
      answerBn: "ফ্লাটারের রেডিমেড উইজেট দিয়ে যখন মনের মতো কোনো অদ্ভুত বা আঁকাবাঁকা ডিজাইন বানানো যায় না, তখন ক্যানভাসে ডিরেক্ট রঙ-পেন্সিল দিয়ে কাস্টম শেপ, বৃত্ত বা কার্ভ লাইন নিজের হাতে ড্র করার জন্য CustomPainter ব্যবহার করা হয়।",
      example: "রেডিমেড লেগো ব্লক দিয়ে ঘর বানাতে না পেরে, একটা সাদা আর্ট পেপার আর ড্রইং বক্স নিয়ে নিজের হাতে কাস্টম মনস্টার বা লোগো স্কেচ করার মতো।"
    },
    { 
      id: "f-q10", 
      category: "flutter", 
      topic: "Optimization", 
      question: "What is RepaintBoundary?", 
      answer: "It isolates a complex widget subtree into its own display layer, preventing unnecessary repaints when other parts of the screen redraw.",
      answerBn: "এটি একটি পারফরম্যান্স বুস্টার উইজেট। এটি কোনো জটিল বা ভারী উইজেটকে একটা আলাদা লেয়ারে লক করে দেয়। এর ফলে স্ক্রিনের অন্য কোনো ছোট অংশে অ্যানিমেশন বা রিফ্রেশ হলেও এই ভারী উইজেটটি বারবার নতুন করে রি-পেইন্ট বা ড্র হয় না।",
      example: "একটি লাইভ থিয়েটার স্টেজের ব্যাকগ্রাউন্ডে থাকা বড় পাহাড়ের পেইন্টিং। স্টেজে অভিনেতারা নড়াচড়া করলে (স্ক্রিন রিফ্রেশ), পেছনের পাহাড়ের ছবি কিন্তু চিত্রশিল্পী বারবার নতুন করে আঁকে না, ওটা ফিক্সড লেয়ারে থেকে যায়।"
    },
    { 
      id: "f-q11", 
      category: "flutter", 
      topic: "Navigation", 
      question: "What is the difference between Navigator 1.0 and 2.0?", 
      answer: "Navigator 1.0 is imperative (push/pop). Navigator 2.0 is declarative, treating the application navigation stack as a direct function of the app state.",
      answerBn: "Navigator 1.0 হলো ইম্প্যারেটিভ—মানে ম্যানুয়ালি আদেশ দেওয়া যে স্ক্রিনটা পুশ করো বা পপ করো। আর Navigator 2.0 হলো ডিক্লেয়ারেটিভ—যেখানে অ্যাপের স্টেট (যেমন: isLoggedIn) চেঞ্জ হলে নেভিগেশন স্ট্যাক নিজে থেকেই পেজ চেঞ্জ করে নেয়।",
      example: "১.০ হলো পুরনো বাটন ফোন—ট্যাপ করলেই কল যাবে (পুশ/পপ)। আর ২.০ হলো আধুনিক টেসলা কারের অটো-পাইলট—ম্যাপে ডেস্টিনেশন চেঞ্জ হওয়া মাত্র গাড়ি নিজে থেকেই রুট ঠিক করে ড্রাইভ করা শুরু করে দেয়।"
    },
    { 
      id: "f-q12", 
      category: "flutter", 
      topic: "Data Flow", 
      question: "What is InheritedWidget?", 
      answer: "An efficient base class that propagates information down the widget tree structure, allowing sub-nodes to subscribe to data dynamically.",
      answerBn: "এটি এমন একটি বিশেষ উইজেট যা ফ্লাটারের উইজেট ট্রির একদম উপর থেকে একদম নিচের যেকোনো উইজেটের কাছে সরাসরি ডেটা পৌঁছে দিতে পারে। মাঝখানের কোনো উইজেটকে প্রপস পাসিংয়ের প্যারা নিতে হয় না।",
      example: "আপনার বহুতল ভবনের মেইন পানির পাইপলাইনের মতো। প্রতি তলার মানুষ সরাসরি পাইপ থেকে পানি পাচ্ছে, কাউকে বালতি ভরে নিচে নেমে পানি এনে ওপরের তলায় ট্রান্সফার করতে হচ্ছে না।"
    },
    { 
      id: "f-q13", 
      category: "flutter", 
      topic: "Local Storage", 
      question: "When do you use SharedPreferences vs Hive/Isar?", 
      answer: "SharedPreferences is for simple key-value configurations (settings, flags). Hive or Isar are fast, cross-platform NoSQL databases for complex local objects caching.",
      answerBn: "SharedPreferences ব্যবহার করা হয় একদম ছোটখাটো সিঙ্গেল ডেটা বা সেটিংস সেভ রাখতে (যেমন ডার্ক মোড অন নাকি অফ)। আর Hive বা Isar হলো সুপার-ফাস্ট নো-এসকিউএল ডেটাবেজ, যেখানে বড় বড় অবজেক্ট, ইউজার প্রোফাইল বা অফলাইন ক্যাশ ডেটা স্টোর করা হয়।",
      example: "SharedPreferences হলো আপনার পকেটের চাবির রিং—একটা বা দুইটা চাবি রাখা যায়। আর Hive/Isar হলো ঘরের বড় আলমারি—যেখানে ফাইলপত্র, জামাকাপড় ও বড় বড় ক্যাটালগ সুন্দর করে সাজিয়ে রাখা যায়।"
    },
    { 
      id: "f-q14", 
      category: "flutter", 
      topic: "Native Bridges", 
      question: "What is a Platform Channel?", 
      answer: "A bridge that lets Flutter send messages to native platforms (Java/Kotlin for Android, Objective-C/Swift for iOS) to run platform-specific APIs.",
      answerBn: "প্ল্যাটফর্ম চ্যানেল হলো একটি সেতু বা ব্রিজ যা ফ্লাটার কোডকে সরাসরি ফোনের নেটিভ কোডের সাথে (অ্যান্ড্রয়েডের জন্য Kotlin/Java এবং আইওএসের জন্য Swift) কথা বলাতে এবং নেটিভ কোনো হার্ডওয়্যার ফিচার (যেমন ব্যাটারি পারসেন্টেজ) এক্সেস করতে সাহায্য করে।",
      example: "একজন দোভাষী বা ট্রান্সলেটরের মতো। আপনি বাংলায় (ফ্লাটার) কথা বললেন, দোভাষী সেটাকে জাপানিজে (নেটিভ অ্যান্ড্রয়েড/iOS) কনভার্ট করে ওখানকার লোকাল রাজাকে বুঝিয়ে কাজটা উদ্ধার করে নিয়ে এলো।"
    },
    { 
      id: "f-q15", 
      category: "flutter", 
      topic: "Slivers", 
      question: "What are Slivers in Flutter?", 
      answer: "Slivers are portions of a scrollable area that configure custom scrolling behaviors, like collapsing headers, grid systems, and custom list views together.",
      answerBn: "Slivers হলো স্ক্রলের স্পেশাল মেকানিজম। সাধারণ স্ক্রল ভিউ বাদ দিয়ে যখন আমরা অ্যাডভান্সড কোনো স্ক্রলিং ইফেক্ট বানাতে চাই (যেমন স্ক্রল করলে ওপরের অ্যাপবার ছোট বা হাওয়া হয়ে যাবে), তখন স্লিপার বা স্লিভার ব্যবহার করতে হয়।",
      example: "ফেসবুক বা ইনস্টাগ্রাম প্রোফাইলের মতো—আপনি যখন নিচের দিকে স্ক্রল করা শুরু করেন, প্রোফাইল পিকচার আর নামটা আস্তে করে ছোট হয়ে ওপরের চিকন বারে গিয়ে সুন্দর করে আটকে যায়।"
    },

    // --- API & NETWORK ---
    { 
      id: "a-q1", 
      category: "api", 
      topic: "HTTP", 
      question: "What is the difference between GET and POST requests?", 
      answer: "GET requests fetch data from a server and append queries inside the URL. POST requests send payload structures securely inside the HTTP message body to create resources.",
      answerBn: "GET রিকোয়েস্ট ব্যবহার করা হয় সার্ভার থেকে ডেটা রিড বা নিয়ে আসার জন্য, এর প্যারামিটারগুলো সরাসরি ব্রাউজার ইউআরএল-এ দেখা যায়। আর POST রিকোয়েস্ট ব্যবহার করা হয় নতুন ডেটা সার্ভারে পাঠানোর জন্য, এর ডেটা বডির ভেতরে সুরক্ষিতভাবে লুকোনো থাকে।",
      example: "GET হলো একটা পোস্টকার্ড বা খোলা চিঠি—যে কেউ চাইলে ওপরের লেখা পড়তে পারবে। আর POST হলো সিলগালা করা খাম—চিঠির আসল কন্টেন্ট খামের ভেতরে লুকানো থাকে, প্রাপক ছাড়া কেউ দেখতে পারে না।"
    },
    { 
      id: "a-q2", 
      category: "api", 
      topic: "Parsing", 
      question: "How do you parse a JSON string securely in Flutter?", 
      answer: "Use 'jsonDecode(string)' from 'dart:convert' to parse it into a Map, then pass it to a custom model's 'fromJson' factory constructor.",
      answerBn: "প্রথমে `dart:convert` লাইব্রেরি থেকে `jsonDecode()` ব্যবহার করে র জেসন (JSON) স্ট্রিংটিকে একটি ম্যাপে কনভার্ট করতে হয়। তারপর সেই ম্যাপটিকে আমাদের কাস্টম মডেল ক্লাসের `fromJson()` ফ্যাক্টরি কনস্ট্রাক্টরে পাস করে টাইপ-সেফ অবজেক্টে রূপান্তর করা হয়।",
      example: "জেসন স্ট্রিং হলো বিদেশ থেকে আসা একটা আন-অ্যাসেম্বলড পার্সেল বাক্স। `jsonDecode` হলো বাক্সটা খোলা, আর `fromJson` হলো ভেতরের নাটবল্টুগুলো দেখে ম্যানুয়াল গাইড অনুযায়ী একটা পূর্ণাঙ্গ টাইপ-সেফ রোবট বা অবজেক্ট তৈরি করে ফেলা।"
    },
    { 
      id: "a-q3", 
      category: "api", 
      topic: "Dio", 
      question: "Why choose Dio package over standard HTTP package?", 
      answer: "Dio natively supports Interceptors, Global configurations, FormData requests, request cancellation parameters, and file download progress tracking.",
      answerBn: "স্ট্যান্ডার্ড HTTP প্যাকেজের চেয়ে Dio অনেক শক্তিশালী কারণ এতে ইন্টারসেপ্টর, গ্লোবাল বেজ-ইউআরএল সেটআপ, ফাইল আপলোডের জন্য FormData, রিকোয়েস্ট ক্যানসেল করার সুবিধা এবং ফাইল ডাউনলোডের প্রোগ্রেস ট্র্যাকিং করার রেডিমেড মেথড আছে।",
      example: "নরমাল HTTP প্যাকেজ হলো সাধারণ লোকাল বাস—আপনাকে গন্তব্যে নিয়ে যাবে ঠিকই, কিন্তু এসি বা এক্সট্রা কোনো আরাম নেই। আর Dio হলো একদম লাক্সারি বিজনেস ক্লাস বাস—যেখানে জিপিএস ট্র্যাকিং, কাস্টম ফুড অর্ডার এবং কাস্টমার কেয়ার সব ইন-বিল্ট।"
    },
    { 
      id: "a-q4", 
      category: "api", 
      topic: "Interceptors", 
      question: "What are Interceptors used for?", 
      answer: "Interceptors let you intercept, modify, or block HTTP requests/responses globally (e.g., automatically injecting JWT Auth tokens or logging network calls).",
      answerBn: "ইন্টারসেপ্টর হলো নেটওয়ার্ক কলের দারোয়ান। কোনো রিকোয়েস্ট সার্ভারে যাওয়ার ঠিক আগে অথবা সার্ভার থেকে রেসপন্স অ্যাপে ঢোকার ঠিক মুহূর্তে ওটাকে মাঝপথে আটকে কাস্টম কাজ (যেমন: টোকেন বসানো বা এরর লগ করা) করার জন্য এটি ব্যবহৃত হয়।",
      example: "এয়ারপোর্টের ইমিগ্রেশন অফিসারের মতো—আপনি প্লেনে ওঠার ঠিক আগে সে আপনার পাসপোর্ট চেক করে একটা 'সিকিউরিটি স্ট্যাম্প' (JWT Token) বসিয়ে দেয়, যেন আপনি বৈধভাবে যাতায়াত করতে পারেন।"
    },
    { 
      id: "a-q5", 
      category: "api", 
      topic: "Status Codes", 
      question: "What do HTTP status codes 401, 403, and 500 represent?", 
      answer: "401 means Unauthorized (missing credentials), 403 means Forbidden (valid token but insufficient permissions), and 500 represents Internal Server Error.",
      answerBn: "৪০১ মানে হলো Unauthorized (আপনি কে সেটাই সার্ভার জানে না, টোকেন নাই বা এক্সপায়ার্ড)। ৪০৩ মানে Forbidden (সার্ভার আপনাকে চেনে, কিন্তু এই ডেটা দেখার পারমিশন আপনার নেই)। আর ৫০০ মানে Internal Server Error (সার্ভারের নিজের কোড বা ডাটাবেজে ইন্টারনাল কোনো বাঘ বা জ্যাম লেগেছে)।",
      example: "৪০১ হলো ক্লাবে ঢোকার সময় টিকিট না থাকা। ৪০৩ হলো টিকিট আছে ঠিকই কিন্তু আপনি নরমাল পাস নিয়ে ভিআইপি জোনে ঢোকার চেষ্টা করছেন। আর ৫০০ হলো ক্লাবের ভেতরেই এসি বা কারেন্ট ব্লাস্ট হয়ে নাচ-গান বন্ধ হয়ে যাওয়া।"
    },
    { 
      id: "a-q6", 
      category: "api", 
      topic: "WebSockets", 
      question: "What is the difference between REST API and WebSockets?", 
      answer: "REST is a unidirectional request-response protocol. WebSockets provide a persistent, bi-directional, full-duplex real-time connection stream.",
      answerBn: "REST হলো একমুখী যোগাযোগ—আপনি রিকোয়েস্ট পাঠাবেন, সার্ভার উত্তর দেবে, কানেকশন শেষ। আর WebSocket হলো দ্বিমুখী চিরস্থায়ী লাইভ কানেকশন, যেখানে ক্লায়েন্ট এবং সার্ভার যেকোনো মুহূর্তে একে অপরকে মেসেজ পাঠাতে পারে কোনো নতুন রিকোয়েস্ট ছাড়াই।",
      example: "REST হলো চিঠি বা ইমেইল পাঠানো—আপনি পাঠালেন, সে পড়ে রিপ্লাই দিল। আর WebSocket হলো একদম সরাসরি লাইভ ফোন কল—দুজনই কানেক্টেড এবং যেকোনো মুহূর্তে যে কেউ কথা বলা বা শুনতে শুরু করতে পারে।"
    },
    { 
      id: "a-q7", 
      category: "api", 
      topic: "JSON Serialization", 
      question: "Why do we use code generation packages like json_serializable?", 
      answer: "It eliminates manual type-typos and boilerplates by automatically generating the 'fromJson' and 'toJson' mapping files.",
      answerBn: "হাতে হাতে স্পেলিং লিখে জেসন ম্যাপ করতে গেলে টাইপো বা বানান ভুল হওয়ার ব্যাপক চান্স থাকে। `json_serializable` বা `freezed` এর মতো কোড জেনারেটর প্যাকেজগুলো অটোমেটিক নিখুঁতভাবে ম্যাপিং ফাইল তৈরি করে দেয়, ফলে সময় বাঁচে এবং বাগ কমে।",
      example: "হাতে ধরে প্রতি পাতার হিসাব ডায়েরিতে লেখার বদলে একটা রেডিমেড এক্সেল শিটের ফর্মুলা সেট করে দেওয়া—যা এক ক্লিকেই সব হিসাব অটোমেটিক নির্ভুলভাবে জেনারেট করে দেয়।"
    },
    { 
      id: "a-q8", 
      category: "api", 
      topic: "SSL", 
      question: "What is SSL Pinning?", 
      answer: "An extra security layer that embeds the target server's cryptographic public key or certificate into the mobile app, preventing Man-In-The-Middle (MITM) attacks.",
      answerBn: "এটি একটি উচ্চস্তরের সিকিউরিটি। অ্যাপের ভেতরেই আসল সার্ভারের সিকিউরিটি সার্টিফিকেট বা কী (Key) হার্ডকোড করে রেখে দেওয়া হয়। এর ফলে হ্যাকাররা মাঝপথে ফেক নেটওয়ার্ক তৈরি করে ডেটা চুরি (MITM Attack) করতে পারে না, অ্যাপ শুধু আসল সার্ভারের সাথেই কথা বলে।",
      example: "ভিআইপি মিটিংয়ের সিকিউরিটি—গার্ডের কাছে আসল অতিথির ছবির প্রিন্টআউট দেওয়া আছে। কেউ যদি ডুপ্লিকেট আইডি কার্ড বানিয়েও আসে, আসল মুখের ছবির সাথে না মিললে গার্ড তাকে কোনোভাবেই ঢুকতে দেবে না।"
    },
    { 
      id: "a-q9", 
      category: "api", 
      topic: "GraphQL", 
      question: "What is GraphQL vs REST?", 
      answer: "REST fetches data from fixed endpoints returning fixed payloads. GraphQL allows clients to query exact data models using a single endpoint, reducing over-fetching.",
      answerBn: "REST API তে নির্দিষ্ট ইউআরএল থেকে ফিক্সড ডেটা আসে (দরকার হোক বা না হোক পুরো অবজেক্টই দেয়)। আর GraphQL এ মাত্র একটি এন্ডপয়েন্ট থাকে এবং আপনি সার্ভারকে ঠিক যতটুকু ডেটা দিতে বলবেন, সে ফিল্টার করে ঠিক ততটুকুই পাঠাবে (Over-fetching হয় না)।",
      example: "REST হলো রেডিমেড সেট মেনু—আপনি শুধু চিকেন ফ্রাই খেতে চাইলেও আপনাকে ফ্রাইড রাইস আর কোকসহ পুরো প্যাকেজই কিনতে হবে। আর GraphQL হলো বুফে বা কাস্টম ক্যাফে—মেনু থেকে বেছে বেছে প্লেটে শুধু চিকেন ফ্রাইটাই তুলে নিলেন।"
    },
    { 
      id: "a-q10", 
      category: "api", 
      topic: "Cache", 
      question: "How do you handle network caching?", 
      answer: "By adding cache headers to responses, or using local data tables (Hive/SQLite) to save API structures with time-to-live (TTL) expiration timestamps.",
      answerBn: "সার্ভার থেকে আসা রেসপন্সের সাথে ক্যাশ হেডার চেক করে অথবা লোকাল ডাটাবেজে (যেমন Hive বা Isar) জেসন ডেটা সেভ করে এবং সাথে একটা এক্সপায়ারি ডেট (TTL) দিয়ে দেওয়া হয়, যাতে ইন্টারনেট না থাকলেও পুরানো ডেটা দেখানো যায়।",
      example: "বারবার রান্নাঘরে গিয়ে পানি আনার চেয়ে বসার টেবিলের ওপর একটা পানির জগ এনে রাখা। যতক্ষণ জগে পানি (Cache) থাকবে রান্নাঘরে যাবেন না, কিন্তু পানি বাসি বা শেষ হয়ে গেলে (TTL Expired) আবার নতুন করে রান্নাঘর থেকে পানি আনবেন।"
    },
    { 
      id: "a-q11", 
      category: "api", 
      topic: "Timeouts", 
      question: "Why are connection timeouts necessary?", 
      answer: "Timeouts break deadlocked network loops if a server doesn't respond within a specific time, allowing the app to throw an error instead of hanging indefinitely.",
      answerBn: "কানেকশন টাইমআউট না দিলে, সার্ভার যদি ডাউন থাকে তবে অ্যাপ অনবরত ঘুরতেই থাকবে (Infinite Loading) এবং ইউজার স্ক্রিন লক হয়ে থাকবে। একটা নির্দিষ্ট সময় (যেমন ১০ সেকেন্ড) পর রিকোয়েস্ট ক্যান্সেল করে ইউজারকে এরর দেখানোর জন্যই এটি দরকার।",
      example: "কাউকে নক করে সাড়া না পেয়ে সারাদিন দরজার সামনে দাঁড়িয়ে না থেকে, ৫ মিনিট পর 'সে ঘরে নেই' ধরে নিয়ে নিজের কাজে চলে যাওয়ার মতো।"
    },
    { 
      id: "a-q12", 
      category: "api", 
      topic: "Conversions", 
      question: "What is the difference between serializing and deserializing?", 
      answer: "Serialization converts an object into a JSON string or map. Deserialization converts a JSON map/string back into a structured type-safe Dart object.",
      answerBn: "Serialization মানে হলো আমাদের কোডের অবজেক্ট বা মডেলকে ভেঙে সাধারণ জেসন স্ট্রিং বা ম্যাপে রূপান্তর করা (যাতে নেটওয়ার্কে পাঠানো যায়)। আর Deserialization হলো ওই জেসন ম্যাপকে আবার জোড়া লাগিয়ে ডার্ট অবজেক্টে রূপান্তর করা।",
      example: "Serialization হলো একটা আস্ত খাট স্ক্রু খুলে খুলে ফ্ল্যাট বাক্সে প্যাক করা যাতে সহজে ট্রাকে করে পাঠানো যায়। আর Deserialization হলো কাস্টমারের বাসায় খাম খুলে স্ক্রু কষে আবার আস্ত খাট তৈরি করে ফেলা।"
    },
    { 
      id: "a-q13", 
      category: "api", 
      topic: "Query Parameters", 
      question: "What are path parameters vs query parameters?", 
      answer: "Path parameters target a specific resource ID (e.g., /users/:id). Query parameters filter or sort the resource results (e.g., /users?status=active).",
      answerBn: "Path Parameter ব্যবহার করা হয় সরাসরি কোনো নির্দিষ্ট আইডি বা রিসোর্সকে টার্গেট করার জন্য (যেমন: নির্দিষ্ট ইউজার)। আর Query Parameter ব্যবহার করা হয় মেইন ডেটার ওপর ফিল্টারিং, সার্চিং বা সর্টিং করার জন্য।",
      example: "`.../dhaka-college/student-5` এখানে 'student-5' হলো নির্দিষ্ট আইডি (Path)। আর `.../dhaka-college?section=science` এখানে বিজ্ঞান বিভাগের ছাত্রদের ফিল্টার করা হচ্ছে (Query)।"
    },
    { 
      id: "a-q14", 
      category: "api", 
      topic: "Base Options", 
      question: "What should you configure in a global Dio base option?", 
      answer: "BaseUrl, connectTimeout, receiveTimeout, default contentTypes, and standard security headers.",
      answerBn: "একটি গ্লোবাল ডিও (Dio) ক্লাসের কনফিগারেশনে প্রধানত মেইন সার্ভার লিংক (BaseUrl), রিকোয়েস্ট পাঠানোর সর্বোচ্চ সময় (connectTimeout), রেসপন্স পাওয়ার সময় (receiveTimeout) এবং স্ট্যান্ডার্ড কন্টেন্ট-টাইপ হেডার সেট করতে হয়।",
      example: "অফিসের লেটারহেড প্যাডের মতো—যেখানে কোম্পানির লোগো, মেইন ঠিকানা আর ডিসক্লেইমার আগে থেকেই প্রিন্ট করা থাকে, যাতে প্রতিবার নতুন চিঠি লেখার সময় এগুলো আলাদা করে লিখতে না হয়।"
    },
    { 
      id: "a-q15", 
      category: "api", 
      topic: "Error Handling", 
      question: "How do you securely map API exceptions?", 
      answer: "By using try-catch blocks to catch generic Exceptions, parsing precise server message bodies, or using a specialized wrapper like Either (fpdart) for functional error returns.",
      answerBn: "নেটওয়ার্ক কলগুলোকে সবসময় try-catch ব্লকের ভেতরে রাখা উচিত যাতে ইন্টারনেট চলে গেলে অ্যাপ ক্র্যাশ না করে। আরও প্রফেশনাল উপায়ে `Either<Failure, Success>` দিয়ে ফাংশন রিটার্ন করা যায়, যাতে এরর এবং সাকসেস দুটোই সেফলি হ্যান্ডেল হয়।",
      example: "সার্কাস খেলায় ট্রাপিজিয়ামের নিচে একটি সেফটি নেট বা জাল বিছিয়ে রাখার মতো—যাতে ওপরের খেলোয়াড় হাত ফসকে পড়ে গেলেও মাটিতে আছাড় না খেয়ে জালে আটকে বেঁচে যায় (No App Crash)।"
    },

    // --- DATABASE ---
    { 
      id: "db-q1", 
      category: "database", 
      topic: "SQL vs NoSQL", 
      question: "What is SQLite vs Hive?", 
      answer: "SQLite is a relational local SQL database mapping schemas via tables and queries. Hive is an ultra-fast, lightweight NoSQL key-value database storing objects directly.",
      answerBn: "SQLite হলো রিলেশনাল ডাটাবেজ যেখানে টেবিল, কলাম এবং রো (Row) এর মাধ্যমে ডেটা শক্ত নিয়মে সাজানো থাকে। আর Hive হলো নো-এসকিউএল কি-ভ্যালু ডাটাবেজ, যেখানে কোনো টেবিলের প্যারা নেই, সরাসরি অবজেক্ট স্টোর করা যায় এবং এটি অত্যন্ত দ্রুত কাজ করে।",
      example: "SQLite হলো একটি বড় লাইব্রেরি—যেখানে আলমারি, সেলফ এবং ক্যাটাগরি মেপে কড়া নিয়মে বই সাজানো থাকে। আর Hive হলো আপনার পড়ার টেবিলের ড্রয়ার—ঝটপট চাবি বা খাতা ড্রয়ারে ছুঁড়ে রাখলেন এবং টান দিলেই পেয়ে গেলেন।"
    },
    { 
      id: "db-q2", 
      category: "database", 
      topic: "Indexes", 
      question: "What is an index in databases?", 
      answer: "An index is a structure that speeds up data retrieval operations on a table at the cost of additional storage space and slower writes.",
      answerBn: "ইনডেক্স (Index) হলো ডাটাবেজের একটি বিশেষ সূচক যা বিশাল টেবিল থেকে নির্দিষ্ট ডেটা খুঁজে বের করার গতি অনেক বাড়িয়ে দেয়। তবে এর জন্য মেমরিতে বাড়তি কিছু জায়গা লাগে এবং নতুন ডেটা লেখার সময় সামান্য বেশি সময় নেয়।",
      example: "৫০০ পৃষ্ঠার একটি বইয়ের একদম শেষে থাকা 'সূচিপত্র' বা Index-এর মতো। সূচিপত্র থাকলে আপনি এক সেকেন্ডে নির্দিষ্ট টপিকের পাতায় চলে যেতে পারবেন, নয়তো আপনাকে পুরো ৫০০ পৃষ্ঠা উল্টে খুঁজতে হতো।"
    },
    { 
      id: "db-q3", 
      category: "database", 
      topic: "Transactions", 
      question: "What does ACID mean in SQL databases?", 
      answer: "Atomicity (all or nothing), Consistency (valid states), Isolation (independent transactions), and Durability (permanently saved states).",
      answerBn: "ACID হলো ডাটাবেজের ৪টি মূল গ্যারান্টি: Atomicity (হলে পুরো কাজ হবে নয়তো কিচ্ছু হবে না), Consistency (ডাটাবেজের নিয়ম ভাঙবে না), Isolation (এক ট্রান্সজেকশন অন্যটার ভেতরে ঢুকবে না) এবং Durability (কারেন্ট চলে গেলেও ডেটা হারাবে না)।",
      example: "বিকাশ বা ব্যাংকে টাকা পাঠানোর মতো—আপনার অ্যাকাউন্ট থেকে ১০০০ টাকা কেটে নিলে সেটা বন্ধুর অ্যাকাউন্টে ঢুকতেই হবে। মাঝপথে সার্ভার ডাউন হলে টাকা আগের জায়গায় ফেরত আসবে (Atomicity)। এমন হবে না যে আপনার থেকে কাটল কিন্তু বন্ধুও পেল না।"
    },
    { 
      id: "db-q4", 
      category: "database", 
      topic: "Firebase", 
      question: "What is Firestore vs Realtime Database?", 
      answer: "Realtime Database is a single giant JSON tree optimized for basic sync operations. Firestore is a document-collection based NoSQL database optimized for complex queries.",
      answerBn: "রিয়েলটাইম ডাটাবেজ হলো একটি বিশাল বড় সিঙ্গেল জেসন (JSON) গাছ—যেখানে ডেটা শুধু ওপরে-নিচে বাড়ে এবং সাধারণ ডেটা সিঙ্কের জন্য ভালো। আর Firestore হলো ডকুমেন্ট এবং কালেকশন ভিত্তিক আধুনিক ডাটাবেজ, যা জটিল কোয়েরি বা ফিল্টারিংয়ের জন্য বেস্ট।",
      example: "রিয়েলটাইম ডাটাবেজ হলো লম্বা এক লাইনের মুদি দোকানের ক্যাশ মেমো খাতা। আর Firestore হলো একটা ফাইলিং ক্যাবিনেট—যেখানে 'ইউজার' নামের ড্রয়ারের ভেতর আলাদা আলাদা ফোল্ডারে (Document) প্রত্যেকের নিখুঁত হিসাব আলাদা করা।"
    },
    { 
      id: "db-q5", 
      category: "database", 
      topic: "Migrations", 
      question: "What is a database migration?", 
      answer: "A script or configuration that safely updates the database schema version (adding columns, updating keys) without destroying existing user data.",
      answerBn: "অ্যাপ আপডেট করার সময় যদি লোকাল ডাটাবেজে নতুন কোনো কলাম বা টেবিল যোগ করতে হয়, তখন ইউজারের ফোনে অলরেডি জমে থাকা পুরানো ডেটা ডিলিট না করে নিরাপদে ডাটাবেজের স্ট্রাকচার আপডেট করার প্রক্রিয়াকে মাইগ্রেশন বলে।",
      example: "একটি চলন্ত বিল্ডিংয়ে বসবাসরত ভাড়াটিয়াদের উচ্ছেদ না করে অত্যন্ত সাবধানে বিল্ডিংয়ের পাশে আরেকটি নতুন লিফট বা রুম এক্সটেনশন করার মতো।"
    },
    { 
      id: "db-q6", 
      category: "database", 
      topic: "ORM", 
      question: "What is Floor or Drift in Flutter?", 
      answer: "They are reactive abstraction layers (ORMs) built on top of SQLite, providing type-safe queries, stream tracking, and clean boilerplate reduction.",
      answerBn: "এগুলো হলো SQLite ডাটাবেজের ওপর তৈরি করা আধুনিক ও রিঅ্যাক্টিভ লেয়ার (ORM)। এগুলো ব্যবহার করলে আমাদের কাঁচা SQL কুয়েরি লিখতে হয় না, সরাসরি ডার্ট অবজেক্ট দিয়ে ডাটাবেজ হ্যান্ডেল করা যায় এবং ডেটা চেঞ্জ হলে স্ক্রিন অটো রিফ্রেশ হয়।",
      example: "সরাসরি মাটির নিচে নেমে পাইপ কুঁদে গ্যাস লাইনের কাজ না করে, ঘরের দেয়ালে লাগানো সুন্দর কক বা রেগুলেটর ঘুরিয়ে চুলার আগুন নিয়ন্ত্রণ করার মতো সহজ ইন্টারফেস।"
    },
    { 
      id: "db-q7", 
      category: "database", 
      topic: "Relations", 
      question: "Explain Foreign Keys.", 
      answer: "A field or constraint inside one database table that links directly to the primary key of another table to maintain relational integrity.",
      answerBn: "ফরেন কী (Foreign Key) হলো এক টেবিলের এমন একটি কলাম যা অন্য টেবিলের মেইন আইডির (Primary Key) সাথে যুক্ত থাকে। এর মাধ্যমে দুটি টেবিলের মধ্যে সম্পর্ক তৈরি হয় এবং ভুল ডেটা এন্ট্রি হওয়া বন্ধ হয়।",
      example: "আপনার অর্ডারের রসিদে থাকা 'Customer_ID'। এই আইডিটা দিয়ে সরাসরি 'গ্রাহক তালিকা' টেবিলের আসল ইউজারের সাথে অর্ডারটিকে ট্যাগ করা হচ্ছে, যাতে বোঝা যায় এই বার্গারটি ঠিক কোন কাস্টমার অর্ডার করেছে।"
    },
    { 
      id: "db-q8", 
      category: "database", 
      topic: "Keys", 
      question: "What is a Primary Key?", 
      answer: "A unique identifier column inside a database table that ensures each record can be explicitly found.",
      answerBn: "প্রাইমারি কী হলো ডাটাবেজ টেবিলের একটি ইউনিক কলাম, যা দিয়ে ওই টেবিলের প্রতিটি সারি বা রেকর্ডকে একদম আলাদাভাবে চেনা যায়। এই আইডি কখনো ডুপ্লিকেট বা খালি হতে পারে না।",
      example: "আপনার ন্যাশনাল আইডি (NID) কার্ডের নাম্বার অথবা ভার্সিটির আইডি কার্ডের রোল নাম্বার। এক নামে ১০ জন থাকতে পারে, কিন্তু আইডি নাম্বার দিয়ে সুনির্দিষ্ট একজনকে বের করা সম্ভব।"
    },
    { 
      id: "db-q9", 
      category: "database", 
      topic: "NoSQL Structuring", 
      question: "How do you store custom objects inside Hive?", 
      answer: "By creating a type adapter using '@HiveType' annotations and compiling it with build_runner.",
      answerBn: "হাইভে (Hive) কাস্টম ডার্ট অবজেক্ট সেভ করতে হলে ওই মডেল ক্লাসের ওপর `@HiveType` এবং ফিল্ডগুলোর ওপর `@HiveField` অ্যানোটেশন দিতে হয়। এরপর `build_runner` কমান্ড চালিয়ে একটি টাইপ অ্যাডাপ্টার জেনারেট করে নিতে হয়।",
      example: "একটি অদ্ভুত শেপের প্লাগ ইমপোর্টেড সকেটে ঢুকানোর জন্য মাঝখানে যেমন একটা মাল্টিপ্লাগ অ্যাডাপ্টার লাগাতে হয়—টাইপ অ্যাডাপ্টার ডার্ট অবজেক্টকে হাইভের চেনার উপযোগী বাইনারিতে রূপান্তর করে দেয়।"
    },
    { 
      id: "db-q10", 
      category: "database", 
      topic: "Normalization", 
      question: "What is database normalization?", 
      answer: "The process of structuring database tables to minimize data redundancy and dependencies.",
      answerBn: "নরমালাইজেশন হলো ডাটাবেজের টেবিলগুলোকে এমনভাবে ভেঙে ছোট ও নিয়মতান্ত্রিক করা, যাতে একই ডেটা বারবার একাধিক জায়গায় লিখে মেমরি নষ্ট না হয় এবং ডেটা আপডেট করা সহজ হয়।",
      example: "একটি ডায়েরির একই পাতায় কাস্টমারের নাম, তার ফোন নাম্বার, সে কোন দিন কী কিনেছে সব না লিখে—'কাস্টমার' এর জন্য আলাদা খাতা আর 'বিক্রি' এর জন্য আলাদা খাতা মেইনটেইন করা।"
    },
    { 
      id: "db-q11", 
      category: "database", 
      topic: "Threading", 
      question: "Are database lookups blocking?", 
      answer: "Yes, by nature they read file sectors. In Flutter, always perform database transactions asynchronously using 'async/await' to prevent UI freezes.",
      answerBn: "হ্যাঁ, ডাটাবেজ মূলত ফোনের হার্ডডিস্ক বা মেমরি চিপ থেকে ফাইল রিড করে, যা সময়সাপেক্ষ এবং ব্লকিং হতে পারে। তাই ফ্লাটারে সবসময় ডাটাবেজের কাজের আগে `async/await` ব্যবহার করা উচিত যাতে মেইন UI থ্রেড বা স্ক্রিন হ্যাং না হয়ে যায়।",
      example: "ব্যাংকের ক্যাশিয়ার যদি টাকা গোনার সময় লাইনে দাঁড়ানো সবার সাথে কথা বলা বন্ধ করে দেয় তবে ব্যাংক ফ্রিজ হয়ে যাবে। বুদ্ধিমানের কাজ হলো টাকা গোনার জন্য তাকে ব্যাক-অফিসে (Async) পাঠিয়ে কাউন্টার ফাঁকা রাখা।"
    },
    { 
      id: "db-q12", 
      category: "database", 
      topic: "Isar", 
      question: "What makes Isar database modern?", 
      answer: "Isar is multi-platform, offers full-text search engine queries, handles automatic index configurations, and supports multi-isolate parallel execution queries natively.",
      answerBn: "Isar হলো ফ্লাটারের জন্য একটি অত্যাধুনিক নো-এসকিউএল ডাটাবেজ। এটি একই সাথে অনেক দ্রুত, এতে গুগল সার্চের মতো ফুল-টেক্সট সার্চ করার ইন-বিল্ট সুবিধা আছে, ইনডেক্সিং নিজে নিজেই হ্যান্ডেল করে এবং ডার্টের মাল্টিপল আইসোলেটে সমান্তরালভাবে কাজ করতে পারে।",
      example: "নরমাল লোকাল ডাটাবেজ যদি হয় সাধারণ সুতো দিয়ে ফাইল বাঁধা সরকারি অফিস, Isar হলো সম্পূর্ণ এআই চালিত হাইটেক ডিজিটাল ফাইল সেন্টার—যেখানে এক সেকেন্ডে যেকোনো ফাইলের ভেতরের শব্দ খুঁজে বের করা যায়।"
    },
    { 
      id: "db-q13", 
      category: "database", 
      topic: "Caching Strategy", 
      question: "What is a Single Source of Truth?", 
      answer: "An architectural pattern where the local database is the absolute source of data displayed on screen, and the API merely feeds updates to the database.",
      answerBn: "এটি একটি চমৎকার ডিজাইন প্যাটার্ন। এর নিয়ম হলো স্ক্রিনে যা কিছু দেখানো হবে তা সরাসরি লোকাল ডাটাবেজ থেকে আসবে। এপিআই (API) থেকে নতুন ডেটা এলে তা সরাসরি স্ক্রিনে না গিয়ে ডাটাবেজে সেভ হবে এবং ডাটাবেজ আপডেট হওয়া মাত্র স্ক্রিন অটোমেটিক রিফ্রেশ হবে।",
      example: "টিভি চ্যানেলের ব্রেকিং নিউজ স্ক্রল—নিউজ এডিটররা যেখান থেকেই খবর পাক না কেন, তারা সেটা মেইন ডাটাবেজ সার্ভারে সাবমিট করে। আর আপনার টিভি স্ক্রিন শুধু ওই একটা সার্ভার লাইনের দিকেই তাকিয়ে থাকে খবর দেখানোর জন্য।"
    },
    { 
      id: "db-q14", 
      category: "database", 
      topic: "Queries", 
      question: "What is an Inner Join?", 
      answer: "A relational query modifier that returns records that have matching values in both tables.",
      answerBn: "ইনার জয়েন (Inner Join) হলো এমন একটি কুয়েরি যা দুটি আলাদা টেবিলকে জোড়া দেয় এবং শুধুমাত্র সেই রেকর্ডগুলোই রিটার্ন করে যা দুটি টেবিলেই কমন বা ম্যাচিং অবস্থায় আছে।",
      example: "ধরে নিন একটা টেবিলে আছে 'সব স্টুডেন্টদের তালিকা' আর আরেকটায় আছে 'যারা বার্ষিক ফি দিয়েছে তাদের তালিকা'। ইনার জয়েন দিলে শুধু সেইসব স্টুডেন্টদের নাম আসবে যারা ফি জমা দিয়েছে।"
    },
    { 
      id: "db-q15", 
      category: "database", 
      topic: "Security", 
      question: "How do you secure local databases on mobile?", 
      answer: "By applying database encryption keys via SQLCipher or Hive AES Encryption keys stored safely within the system's secure storage (Keychain/Keystore).",
      answerBn: "লোকাল ডাটাবেজ সুরক্ষিত রাখতে পুরো ফাইলটিকে ২৫৬-বিট এইএস (AES) বা SQLCipher দিয়ে এনক্রিপ্ট করতে হয়। আর ডাটাবেজ খোলার মেইন সিক্রেট পাসওয়ার্ডটি ফোনের নিজস্ব সেফ জোন (Android Keystore / iOS Keychain) এর ভেতরে লুকিয়ে রাখতে হয়।",
      example: "আপনার ঘরের সব ফাইল লক বক্সে ভরে রাখা। আর লক বক্সের চাবিটা নিজের পকেটে না রেখে ব্যাংকের লকার বা কড়া সিকিউরিটির ভল্টে (Keystore) জমা রাখা যাতে ফোন চুরি হলেও কেউ ফাইল পড়তে না পারে।"
    },

    // --- BACKEND ---
    { 
      id: "be-q1", 
      category: "backend", 
      topic: "Authentication", 
      question: "What is JWT Authentication?", 
      answer: "JSON Web Tokens are compact, URL-safe tokens passed between client and server to verify identities without holding state sessions inside backend memories.",
      answerBn: "JWT হলো একটি কমপ্যাক্ট এনক্রিপ্টেড টোকেন বা স্ট্রিং। লগইন করার পর সার্ভার এটি ইউজারকে দেয়। এরপর প্রতিবার এপিআই কলের সাথে এই টোকেন পাঠাতে হয়। সার্ভারকে নিজের মেমরিতে সেশন ধরে রাখতে হয় না, টোকেনটি ডিক্রিপ্ট করলেই সে ইউজারের পরিচয় বুঝতে পারে।",
      example: "মেট্রোরেলের ওয়ান-টাইম আরএফআইডি (RFID) কার্ডের মতো—স্টেশনের কম্পিউটারে আপনার নাম-ঠিকানা সেভ রাখার দরকার নেই। আপনি কার্ড ছোঁয়ালেই গেট রিড করে বুঝে নেয় আপনার কার্ডে ব্যালেন্স আছে এবং আপনাকে যেতে দেয়।"
    },
    { 
      id: "be-q2", 
      category: "backend", 
      topic: "Architecture", 
      question: "What is the difference between Monolithic and Microservices backend?", 
      answer: "Monolith builds everything into a single, cohesive deployment stack. Microservices split business logic domains into small, autonomous, decoupled services running independently via APIs.",
      answerBn: "Monolith মানে হলো পুরো ব্যাকএন্ডের কোড (ইউজার, পেমেন্ট, প্রোডাক্ট) একটি মাত্র প্রজেক্ট বা সার্ভারে রাখা। আর Microservices হলো প্রতিটি সেকশনকে আলাদা আলাদা স্বাধীন সার্ভারে ভাগ করে দেওয়া, যারা নিজেদের মধ্যে এপিআই দিয়ে কথা বলে।",
      example: "Monolith হলো অল-ইন-ওয়ান সুপারশপ—যেখানে ক্যাশিয়ার, সিকিউরিটি এবং ঝাড়ুদার সবাই এক মালিকের আন্ডারে এক ছাদের নিচে কাজ করে। আর Microservices হলো ফুডকোর্ট—যেখানে পিজ্জা, বার্গার আর জুসের দোকান সম্পূর্ণ আলাদা ও স্বাধীন।"
    },
    { 
      id: "be-q3", 
      category: "backend", 
      topic: "WebSockets", 
      question: "How do you handle real-time chat sync from backend layers?", 
      answer: "By deploying persistent duplex protocols like WebSockets or using Pub/Sub nodes via Redis or MQTT brokers.",
      answerBn: "ব্যাকএন্ড থেকে লাইভ চ্যাট মেসেজ পাস করার জন্য Persistent Duplex প্রোটোকল (যেমন WebSockets) চালু করতে হয় এবং মেসেজগুলো দ্রুত রুট করার জন্য ব্যাকএন্ডে Redis Pub/Sub বা MQTT মেসেজ ব্রোকার ব্যবহার করা হয়।",
      example: "একটি ওয়াকিটকি বা লাইভ কনফারেন্স রুমের মতো—যেখানে ব্যাকএন্ডে একজন কিছু বলা মাত্র বাতাসে (Socket Channel) ওই চ্যানেলে টিউন করে রাখা বাকি সবার স্পিকারে সাথে সাথে আওয়াজ চলে যায়।"
    },
    { 
      id: "be-q4", 
      category: "backend", 
      topic: "Security", 
      question: "What is CORS?", 
      answer: "Cross-Origin Resource Sharing is a browser security mechanism that restricts resources on a web server from being requested by outside domain layouts.",
      answerBn: "CORS হলো ব্রাউজারের একটি অত্যন্ত গুরুত্বপূর্ণ সিকিউরিটি পলিসি। এর কাজ হলো এক ডোমেইনের সার্ভার এপিআই যেন অন্য কোনো অপরিচিত বা হ্যাকিং ডোমেইনের ওয়েবসাইট বা ফ্রন্টএন্ড থেকে হুট করে কেউ কল করে ডেটা চুরি করতে না পারে তা ব্লক করা।",
      example: "আপনার সোসাইটির দারোয়ানের মতো—সে বাইরের কোনো অচেনা লোক বা অন্য এলাকার রিকশাওয়ালাকে আপনার ফ্ল্যাটের ভেতরে হুট করে ঢুকতে দেবে না, যতক্ষণ না ফ্ল্যাটের মালিক বাহির থেকে অনুমতি (Allow Origin) দিচ্ছে।"
    },
    { 
      id: "be-q5", 
      category: "backend", 
      topic: "NodeJS", 
      question: "What is Express.js?", 
      answer: "A minimalist, unopinionated web framework built on top of Node.js used to design fast HTTP REST API endpoints.",
      answerBn: "Express.js হলো Node.js রানটাইমের ওপর তৈরি করা অত্যন্ত হালকা এবং মিনিমালিস্ট একটি ফ্রেমওয়ার্ক। এটি ব্যবহার করে জাভাস্ক্রিপ্ট দিয়েই খুব দ্রুত এবং সহজে ব্যাকএন্ডের HTTP REST API এন্ডপয়েন্ট বা রাউটারগুলো ডিজাইন করা যায়।",
      example: "একটি রেডিমেড কিচেন কাউন্টার এবং চুলার ফ্রেমের মতো—যেখানে বেসিক রান্নার পরিকাঠামো দেওয়াই আছে, এখন আপনি আপনার মনের মতো করে মসলা বা শেফ বসিয়ে যেকোনো রেসিপি বা রাউট রেডি করতে পারেন।"
    },
    { 
      id: "be-q6", 
      category: "backend", 
      topic: "Protocols", 
      question: "What is gRPC?", 
      answer: "An open-source high-performance Remote Procedure Call framework developed by Google that uses Protocol Buffers and HTTP/2 for ultra-fast binary streaming communication.",
      answerBn: "gRPC হলো গুগলের তৈরি একটি সুপার-ফাস্ট কমিউনিকেশন ফ্রেমওয়ার্ক। এটি সাধারণ জেসন টেক্সটের বদলে প্রোটোকল বাফার (বাইনারি ডেটা) এবং HTTP/2 ব্যবহার করে। ফলে সার্ভার-টু-সার্ভার ডেটা ট্রান্সফার আলোর গতিতে এবং খুব কম ব্যান্ডউইথে সম্পন্ন হয়।",
      example: "চিঠি লিখে ডাকযোগে পাঠানোর বদলে সরাসরি ইন্টারকম লাইনে কোড ভাষায় কথা বলা—যেখানে কোনো বাড়তি কাগজের অপচয় (JSON Overhead) নেই, শুধু নিখাদ সিগন্যাল আদান-প্রদান হয়।"
    },
    { 
      id: "be-q7", 
      category: "backend", 
      topic: "Cloud", 
      question: "What are Serverless Functions?", 
      answer: "On-demand code blocks (like AWS Lambda or Firebase Functions) that execute logic triggered by events, removing the need to manage permanent servers.",
      answerBn: "সার্ভারলেস ফাংশন (যেমন AWS Lambda) হলো এমন কোড যা ২৪ ঘণ্টা সার্ভার ভাড়া করে চালু রাখতে হয় না। যখনই কোনো ইউজার বাটনে ক্লিক করবে (Event), ঠিক তখনই ক্লাউডে কোডটি ১ সেকেন্ডের জন্য জেগে উঠে কাজ শেষ করে আবার নিজে নিজেই বন্ধ হয়ে যাবে। খরচ শুধু ওই ১ সেকেন্ডের জন্যই দিতে হয়।",
      example: "সারাদিন একটা ট্যাক্সি বা গাড়ি ড্রাইভারসহ ভাড়া করে বসিয়ে না রেখে, জাস্ট যখন দরকার তখন পাঠাও বা উবার (On-Demand) ডেকে ঠিক যতটুকু রাস্তা গেলেন ততটুকুর ভাড়া মিটিয়ে দেওয়া।"
    },
    { 
      id: "be-q8", 
      category: "backend", 
      topic: "Encryption", 
      question: "What is Hashing vs Encryption?", 
      answer: "Hashing is a one-way mathematical function (e.g., bcrypt for passwords) that cannot be decrypted. Encryption is two-way, requiring a key to revert text back to plain form.",
      answerBn: "Hashing হলো একমুখী প্রসেস—যেকোনো পাসওয়ার্ডকে ভেঙে এমন এক আজব কোড বানানো হয় যাকে আর কখনোই রিভার্স বা উল্টো করে আসল পাসওয়ার্ডে ফেরত নেওয়া যায় না (যেমন: bcrypt)। আর Encryption হলো দ্বিমুখী—সঠিক চাবি বা সিক্রেট কী (Key) থাকলে আবার আসল লেখা ফেরত পাওয়া যায়।",
      example: "Hashing হলো একটা আস্ত আলু পিষে আলুর ভর্তা বানিয়ে ফেলা—আপনি হাজার চেষ্টা করলেও ভর্তা থেকে আস্ত আলু ফেরত পাবেন না। আর Encryption হলো একটা দামি সুটকেস তালা মেরে রাখা—চাবি ঘুরালেই সুটকেস খুলে ভেতরের জামাকাপড় অক্ষত পাওয়া যাবে।"
    },
    { 
      id: "be-q9", 
      category: "backend", 
      topic: "Caching", 
      question: "What is Redis used for?", 
      answer: "An in-memory data store used as a high-performance database cache to serve frequent query requests in milliseconds, reducing primary database load.",
      answerBn: "Redis হলো রাম (RAM) এর ওপর চলা একটি সুপার-ফাস্ট মেমরি ডাটাবেজ। ঘনঘন কল হওয়া এপিআই রেসপন্স বা ডেটা মেইন ডাটাবেজ থেকে বারবার না খুঁজে রেডিসে ক্যাশ করে রাখা হয়, যাতে মিলিসেকেন্ডের মধ্যে রেসপন্স দেওয়া যায় এবং মেইন ডাটাবেজের ওপর প্রেসার কমে।",
      example: "শেফের রান্নার সময় বারবার পেছনের বড় কোল্ড স্টোরেজে (Main DB) না গিয়ে, হাতের কাছের টেবিলের ওপর ঘনঘন লাগা পেঁয়াজ-মরিচ (Redis Cache) কেটে সাজিয়ে রাখার মতো।"
    },
    { 
      id: "be-q10", 
      category: "backend", 
      topic: "Message Queues", 
      question: "What is RabbitMQ or Kafka?", 
      answer: "Asynchronous message brokers used to route payloads between microservice workers safely without blocking the client thread.",
      answerBn: "এগুলো হলো অ্যাসিনক্রোনাস মেসেজ ব্রোকার বা লাইনের মতো। যখন ব্যাকএন্ডে একসাথে লাখ লাখ রিকোয়েস্ট আসে (যেমন ইমেইল পাঠানো বা পিডিএফ জেনারেট করা), তখন সার্ভার ক্র্যাশ না করে এই ব্রোকারগুলো রিকোয়েস্টগুলোকে লাইনে দাঁড় করায় এবং ব্যাকএন্ডের ফ্রি ওয়ার্কাররা একে একে কাজগুলো প্রসেস করে।",
      example: "ব্যাংকের লাইনে বা টিকিট কাউন্টারের সামনে দেওয়া স্টিলের ব্যারিকেড বা সিরিয়াল টোকেন মেশিন—যাতে হুড়োহুড়ি না করে সবাই লাইনে দাঁড়িয়ে শান্তভাবে যার যার টিকিট পায়।"
    },
    { 
      id: "be-q11", 
      category: "backend", 
      topic: "Load Balancing", 
      question: "What is a Load Balancer?", 
      answer: "A proxy node that routes incoming internet traffic across a farm of backend servers to prevent overloads and ensure high availability.",
      answerBn: "লোড ব্যালেন্সার হলো ট্রাফিক পুলিশের মতো। যখন অ্যাপে কোটি কোটি ইউজার একসাথে আসে, তখন একটি মাত্র সার্ভারের ওপর লোড না দিয়ে, এটি ট্রাফিকগুলোকে ভাগ ভাগ করে ব্যাকএন্ডে সচল থাকা ৪-৫টি আলাদা আলাদা সার্ভারে সমানভাবে ডিস্ট্রিবিউট করে দেয়।",
      example: "ব্যাংকের গেটে থাকা সিকিউরিটি গার্ড—যে ভেতরে ঢোকার সময় কাস্টমারদের দেখে দেখে খালি থাকা ১, ২ বা ৩ নম্বর কাউন্টারে পাঠিয়ে দেয় যেন কোনো একটি কাউন্টারে উপচে পড়া ভিড় না হয়।"
    },
    { 
      id: "be-q12", 
      category: "backend", 
      topic: "Status Checks", 
      question: "What are Health Check endpoints?", 
      answer: "Dedicated API endpoints (e.g., /health) monitored by container systems to verify if a server node is up, running, and connected to its databases properly.",
      answerBn: "এটি ব্যাকএন্ডের একটি স্পেশাল ডাম্ব এপিআই এন্ডপয়েন্ট (যেমন `/api/health`)। ক্লাউড বা ডকার সিস্টেম এই ইউআরএল-এ প্রতি ৫ সেকেন্ড পর পর নক করে চেক করে যে সার্ভারটি নিজে ঠিকঠাক বেঁচে আছে কিনা এবং ডাটাবেজের সাথে তার কানেকশন ওকে আছে কিনা।",
      example: "আইসিইউতে থাকা পেশেন্টের হার্টবিট মনিটরের টুং-টুং শব্দের মতো—শব্দ আসা মানে সব ঠিক আছে, শব্দ বন্ধ হওয়া মাত্রই ইমার্জেন্সি অ্যালার্ম বেজে উঠবে (সার্ভার রিস্টার্ট হবে)।"
    },
    { 
      id: "be-q13", 
      category: "backend", 
      topic: "Docker", 
      question: "What is Containerization (Docker)?", 
      answer: "Packaging code, runtimes, system tools, and libraries together into a isolated container to ensure it runs exactly the same way on any server environment.",
      answerBn: "কনটেইনারাইজেশন বা ডকার হলো আপনার কোড, ডাটাবেজ এবং প্রয়োজনীয় সব সেটিংস একসাথে একটা ছোট বাক্সে প্যাক করে ফেলা। এর সুবিধা হলো কোডটি আপনার ল্যাপটপে যেভাবে চলবে, পৃথিবীর যেকোনো ক্লাউড সার্ভারেও হুবহু একই রকম স্মুথলি চলবে, কোনো ওএস বা ভার্সনের ঝামেলা হবে না।",
      example: "কার্গো জাহাজের কন্টেইনারের মতো—ভেতরে জামাকাপড় থাকুক আর দামি গাড়ি, কন্টেইনারের সাইজ আর লক ইউনিভার্সাল। ওটা যেকোনো জাহাজ বা পোর্টে হুবহু ফিট হয়ে যাবে।"
    },
    { 
      id: "be-q14", 
      category: "backend", 
      topic: "Scaling", 
      question: "What is Vertical vs Horizontal Scaling?", 
      answer: "Vertical scaling increases resources (CPU/RAM) on a single machine. Horizontal scaling adds more independent machines or container instances to the cluster.",
      answerBn: "Vertical Scaling মানে হলো আপনার বর্তমান একক সার্ভার বা পিসির র‍্যাম (RAM) এবং প্রসেসর বাড়িয়ে ওটাকে শক্তিশালী করা। আর Horizontal Scaling মানে হলো কম্পিউটার শক্তিশালী না করে, একই পাওয়ারের আরও ৩-৪টা নতুন কম্পিউটার বা সার্ভার পাশে জুড়ে দিয়ে টিম বানানো।",
      example: "ভারী মাল বহনের জন্য একটি মাত্র ঘোড়াকে দামি ইনজেকশন খাইয়ে মোটাতাজা করা হলো Vertical। আর ওই ঘোড়ার পাশে আরও ৩টি সাধারণ ঘোড়া এনে একই গাড়িতে জুড়ে দেওয়া হলো Horizontal।"
    },
    { 
      id: "be-q15", 
      category: "backend", 
      topic: "Data Flow", 
      question: "What are Webhooks?", 
      answer: "Automated messages sent from a backend system to a client URL when an event happens (e.g., Stripe notifying your backend that a payment succeeded).",
      answerBn: "ওয়েবহুক হলো উল্টো এপিআই কল। সাধারণত মোবাইল অ্যাপ সার্ভারকে কল দেয়। কিন্তু থার্ড পার্টি কোনো সার্ভারে (যেমন বিকাশ বা গেটওয়ে) কোনো ঘটনা ঘটলে, তারা যখন নিজে থেকে আমাদের ব্যাকএন্ড ইউআরএল-এ ডেটা বা নোটিফিকেশন পাঠায়, তখন তাকে ওয়েব হুক বলে।",
      example: "কুরিয়ার সার্ভিসের পার্সেল ডেলিভারি—আপনাকে ১০ বার ফোন দিয়ে বলতে হবে না 'আমার পার্সেল কই?'। পার্সেল আপনার ঠিকানায় পৌঁছানো মাত্র কুরিয়ার বয় নিজে এসে আপনার কলিং বেল টিপে পার্সেল দিয়ে যাবে।"
    },

    // --- DSA ---
    { 
      id: "dsa-q1", 
      category: "dsa", 
      topic: "Complexity", 
      question: "What is Big O notation?", 
      answer: "A mathematical framework describing the limiting behavior of an algorithm's execution time or memory space requirements as the input size scales up.",
      answerBn: "বিগ ও (Big O) হলো অ্যালগরিদমের দক্ষতা মাপার আন্তর্জাতিক স্কেল। ইনপুটের সাইজ (n) যত বড় হবে, আমাদের কোড রান হতে ঠিক কতটা সময় (Time Complexity) নেবে কিংবা মেমরিতে কতটা জায়গা (Space Complexity) খাবে, তা এর মাধ্যমে প্রকাশ করা হয়।",
      example: "আপনার ১০ জন বন্ধুর নাম ডায়েরি থেকে খুঁজতে ১০ সেকেন্ড লাগলে, পুরো দেশের ১৬ কোটি মানুষের নাম খুঁজতে কত বছর লাগবে—এই বৃদ্ধির গ্রাফ বা স্পিডটাই হলো Big O।"
    },
    { 
      id: "dsa-q2", 
      category: "dsa", 
      topic: "Structures", 
      question: "What is the search time complexity inside a Hashmap?", 
      answer: "O(1) on average constant time, because it calculates data lookups via direct unique bucket hashing algorithms.",
      answerBn: "হ্যাশম্যাপের (Hashmap) ভেতরে কোনো ডেটা খুঁজে বের করার গড় সময় হলো ওয়ান বা O(1) অর্থাৎ কনস্ট্যান্ট টাইম। এর কারণ হলো হ্যাশম্যাপ কোনো লুপ চালায় না, সে সরাসরি Key-টিকে একটি ম্যাথমেটিকাল হ্যাশ ফাংশনে ফেলে ইণ্ডেক্স বা অ্যাড্রেস বের করে ফেলে।",
      example: "১০০টি বন্ধ বাক্সের ড্রয়ার। সাধারণ খোঁজাখুজি হলো একে একে সব বাক্স খোলা। আর ওয়ান ও(১) হ্যাশম্যাপ হলো প্রতিটি বাক্সের গায়ে স্পষ্ট লেবেল লাগানো—আপনি সরাসরি কাঙ্ক্ষিত ড্রয়ার টেনে চাবি বের করে নিলেন।"
    },
    { 
      id: "dsa-q3", 
      category: "dsa", 
      topic: "Sorting", 
      question: "What is the difference between QuickSort and MergeSort?", 
      answer: "MergeSort is always O(n log n) stable and requires extra memory. QuickSort is O(n log n) average but can drop to O(n²) worst-case; it sorts in-place without extra allocation requirements.",
      answerBn: "MergeSort হলো একটি স্টেবল সর্টিং যা সবসময় O(n log n) স্পিড দেয়, তবে এটি করতে মেমরিতে বাড়তি নতুন জায়গা লাগে। অন্যদিকে QuickSort গড়ে O(n log n) হলেও কপাল খারাপ থাকলে ওস্ট কেসে O(n²) এ নেমে যেতে পারে, তবে এর জন্য কোনো বাড়তি মেমরি লাগে না (In-place)।",
      example: "MergeSort হলো ডেকোরেশনের বড় বড় ডেটা টেবিল আলাদা জায়গায় নিয়ে সুন্দর করে সাজিয়ে আবার মেইন রুমে রাখা। আর QuickSort হলো মেইন রুমের ভেতরেই ধাক্কাধাক্কি করে যার যার হাইট অনুযায়ী পজিশন অদলবদল (Swap) করে সোজা হয়ে দাঁড়ানো।"
    },
    { 
      id: "dsa-q4", 
      category: "dsa", 
      topic: "Trees", 
      question: "What is a Binary Search Tree (BST)?", 
      answer: "A binary tree node structure where left sub-nodes contain values less than the parent root, and right sub-nodes contain values greater than the parent root.",
      answerBn: "বাইনারি সার্চ ট্রি হলো এমন এক গাছের মতো স্ট্রাকচার যার প্রতিটি নোড বা ডাল থেকে সর্বোচ্চ দুটি শাখা বের হতে পারে। নিয়ম হলো, মূল নোডের চেয়ে ছোট ভ্যালুগুলো সবসময় বামের শাখায় যাবে এবং বড় ভ্যালুগুলো সবসময় ডানের শাখায় গিয়ে বসবে।",
      example: "ডিকশনারিতে শব্দ খোঁজার মতো—আপনি মাঝখানের পাতা উল্টালেন, দেখলেন আপনার কাঙ্ক্ষিত শব্দ বর্ণমালার দিক থেকে ছোট, তাই আপনি পেছনের সব পাতা বাদ দিয়ে শুধু বামের বা শুরুর দিকের পাতাগুলো খোঁজা শুরু করলেন।"
    },
    { 
      id: "dsa-q5", 
      category: "dsa", 
      topic: "Graphs", 
      question: "Explain BFS vs DFS.", 
      answer: "Breadth-First Search uses a Queue to explore adjacent layer nodes level-by-level. Depth-First Search uses a Stack or Recursion to explore deep branch paths fully before backtracking.",
      answerBn: "BFS (Breadth-First) একটি কিউ (Queue) ব্যবহার করে গ্রাফের চারপাশের সব প্রতিবেশী নোডগুলোকে ধাপে ধাপে স্তর বা লেভেল অনুযায়ী সার্চ করে। আর DFS (Depth-First) স্ট্যাক বা রিকার্সন ব্যবহার করে যেকোনো একটি লাইনের একদম শেষ সীমানা পর্যন্ত আগে তলিয়ে দেখে, তারপর ব্যাকট্র্যাক করে অন্য লাইনে যায়।",
      example: "BFS হলো পানিতে ঢিল মারলে ঢেউ যেভাবে চারদিকে গোল হয়ে সমানভাবে ছড়ায়। আর DFS হলো গোলকধাঁধায় ঢুকে একটি রাস্তার শেষ দেয়াল না ঠেকানো পর্যন্ত সোজা হাঁটতে থাকা, দেয়ালে ঠেকলে আবার ব্যাক করে নতুন গলি খোঁজা।"
    },
    { 
      id: "dsa-q6", 
      category: "dsa", 
      topic: "Lists", 
      question: "What is a Linked List vs Array?", 
      answer: "Arrays hold contiguous blocks of memory with O(1) index access. Linked Lists consist of decoupled nodes pointing to next-node pointers, offering fast O(1) insertion/deletion but slower O(n) access.",
      answerBn: "Array হলো মেমরির একটি টানা লম্বা ব্লক—যেখানে ইনডেক্স নাম্বার দিয়ে সরাসরি O(1) এ যেকোনো আইটেম ধরা যায়। আর Linked List হলো ছড়ানো ছিটানো নোড—যার একটির মাথায় পরের নোডের মেমরি অ্যাড্রেস বা পয়েন্টার লেখা থাকে। এতে মাঝখানে নতুন আইটেম বা নোড গুঁজে দেওয়া খুব সহজ কিন্তু ইনডেক্স ধরে ডেটা খোঁজা ধীরগতির।",
      example: "Array হলো ট্রেনের পাশাপাশি থাকা ১, ২, ৩ নম্বর সিট। আর Linked List হলো গুপ্তধনের খোঁজ বা 'ট্রেজার হান্ট' গেম—যেখানে ১ম চিরকুট খুললে ২য় চিরকুটের ঠিকানা পাওয়া যায়, ২য় টা খুললে ৩য় টার ঠিকানা মেলে।"
    },
    { 
      id: "dsa-q7", 
      category: "dsa", 
      topic: "Data Store", 
      question: "Explain Stack vs Queue.", 
      answer: "Stack operates on a LIFO (Last In First Out) system. Queue operates on a FIFO (First In First Out) system.",
      answerBn: "Stack কাজ করে LIFO (লাস্ট ইন ফার্স্ট আউট) নিয়মে—অর্থাৎ যে জিনিস সবার শেষে ঢুকবে সে সবার আগে বের হবে। আর Queue কাজ করে FIFO (ফার্স্ট ইন ফার্স্ট আউট) নিয়মে—অর্থাৎ যে লাইনে আগে দাঁড়াবে সে আগেই সার্ভিস পাবে।",
      example: "Stack হলো বিয়ের বাড়ির খাওয়ার প্লেটের স্তূপ—ধোয়ার পর প্লেটগুলো একটার ওপর একটা রাখা হয়, আর মানুষ খাওয়ার সময় সবার ওপরের (সর্বশেষ রাখা) প্লেটটাই আগে তোলে। Queue হলো ব্যাংকের ক্যাশের লাইন—যে আগে দাঁড়িয়েছে সে আগে টাকা তুলবে।"
    },
    { 
      id: "dsa-q8", 
      category: "dsa", 
      topic: "Algorithms", 
      question: "What is Binary Search complexity?", 
      answer: "O(log n) execution time, but it strictly requires that the underlying data collection is pre-sorted.",
      answerBn: "বাইনারি সার্চের টাইম কমপ্লেক্সিটি হলো O(log n), যা অত্যন্ত ফাস্ট। তবে এর প্রধান শর্ত হলো—লিস্ট বা ডেটা কালেকশনটি অবশ্যই আগে থেকে ছোট থেকে বড় বা ক্রমানুসারে সাজানো (Sorted) থাকতে হবে, এলোমেলো থাকলে কাজ করবে না।",
      example: "এক থেকে একশোর মধ্যে একটি সংখ্যা মনে মনে ধরুন। আমি প্রতিবার জিজ্ঞেস করব 'সংখ্যাটি কি ৫০ এর চেয়ে বড়?' আপনি হ্যাঁ/না বললেই অর্ধেক সংখ্যা এক ঝটকায় বাদ (Divide & Conquer)। এভাবে মাত্র ৭ বার জিজ্ঞেস করলেই উত্তর কনফার্ম!"
    },
    { 
      id: "dsa-q9", 
      category: "dsa", 
      topic: "Optimization", 
      question: "What is Dynamic Programming?", 
      answer: "An algorithmic technique that solves complex problems by breaking them down into simpler subproblems, solving each subproblem just once, and storing their solutions using memoization.",
      answerBn: "ডায়নামিক প্রোগ্রামিং (DP) হলো একটি অপ্টিমাইজেশন টেকনিক। এটি বড় কোনো জটিল সমস্যাকে ছোট ছোট টুকরোয় ভাগ করে এবং কোনো ছোট টুকরোর উত্তর একবার বের করলে তা মেমরিতে সেভ (Memoization) করে রাখে, যাতে একই হিসাব বারবার করে সময় নষ্ট না হয়।",
      example: "আমি যদি বোর্ডে লিখি ১+১+১+১+১ = ?, আপনি গুনে বলবেন ৫। এখন আমি যদি বামে আরেকটা '+১' যোগ করি, আপনি কিন্তু শুরু থেকে আবার গুনবেন না, আপনি আগের '৫' মনে রেখে বলবেন ৫+১ = ৬! এই মনে রাখাই হলো DP।"
    },
    { 
      id: "dsa-q10", 
      category: "dsa", 
      topic: "Recursion", 
      question: "What is a stack overflow error in recursion?", 
      answer: "An error that occurs when a recursive function lacks a valid base termination condition, filling the thread call stack memory completely until it crashes.",
      answerBn: "রিকার্সন ফাংশন যখন নিজেকে বারবার কল করতে থাকে কিন্তু ভেতরে কোনো থামার শর্ত (Base Condition) দেওয়া থাকে না, তখন কম্পিউটারের মেমরির কল-স্ট্যাক (Call Stack) একসময় পুরোপুরি উপচে পড়ে অ্যাপ ক্র্যাশ করে। একেই Stack Overflow এরর বলে।",
      example: "দুই দিকে দুটি আয়না মুখোমুখি ধরলে যেভাবে ভেতরের প্রতিচ্ছবি অনন্তকাল ধরে ভেতরে যেতেই থাকে এবং শেষ সীমানা পাওয়া যায় না—কম্পিউটারও ঠিক তেমনি গোলকধাঁধায় ফেঁসে মেমরি শেষ করে ফেলে।"
    },
    { 
      id: "dsa-q11", 
      category: "dsa", 
      topic: "Heaps", 
      question: "What is a Priority Queue?", 
      answer: "An abstract data type similar to a regular queue or stack where each element additionally has a 'priority' associated with it, serving higher priority nodes first.",
      answerBn: "এটি সাধারণ কিউ বা লাইনের মতোই, তবে এখানে শুধুমাত্র লাইনের সিরিয়াল দেখলেই চলে না, প্রতিটি এলিমেন্টের সাথে একটি 'অগ্রাধিকার' বা Priority লেবেল থাকে। যার প্রায়োরিটি সবচেয়ে বেশি, সে লাইনের শেষে থাকলেও তাকে টেনে আগে সার্ভিস দেওয়া হয়।",
      example: "হাসপাতালের ইমার্জেন্সি বা জরুরি বিভাগ—লাইনে অলরেডি ৫ জন সর্দি-কাশির রোগী দাঁড়িয়ে থাকলেও, যদি একজন এক্সিডেন্ট করা সিরিয়াস রোগী আসে, ডাক্তার তাকে লাইনের তোয়াক্কা না করে আগেই ওটিতে নিয়ে যাবে।"
    },
    { 
      id: "dsa-q12", 
      category: "dsa", 
      topic: "Strings", 
      question: "What is a Trie (Prefix Tree)?", 
      answer: "A specialized tree-based data structure used to efficiently store and search keys within a sequence of characters, commonly utilized for auto-complete systems.",
      answerBn: "Trie (ট্রাই) হলো ক্যারেক্টার বা অক্ষরের একটি বিশেষ গাছ বা ট্রি স্ট্রাকচার। এটি ডিকশনারির শব্দের প্রতিটি অক্ষরকে এক একটি নোড হিসেবে শিকড়ের মতো সাজিয়ে রাখে। সার্চ ইঞ্জিন বা কিবোর্ডের অটো-কমপ্লিট এবং সাজেশন ফিচারে এটি ব্যাপক ব্যবহৃত হয়।",
      example: "গুগলে 'flu' লিখলে নিচে অটোমেটিক 'flutter', 'fluid', 'flue' সাজেস্ট করা। কারণ 'f' -> 'l' -> 'u' নোডে পৌঁছানোর পর গাছ থেকে আর কী কী ডালপালা বের হয়েছে তা Trie স্ট্রাকচার খুব দ্রুত স্ক্যান করতে পারে।"
    },
    { 
      id: "dsa-q13", 
      category: "dsa", 
      topic: "Hashing", 
      question: "What is a hash collision?", 
      answer: "An event where two distinct data input strings pass through a hashing function and output the exact same bucket storage index mapping.",
      answerBn: "হ্যাশ কলিশন হলো এমন একটি দুর্ঘটনা যখন সম্পূর্ণ আলাদা দুটি ইনপুট ডেটা বা টেক্সট হ্যাশ ফাংশনের ভেতর দিয়ে যাওয়ার পর ভুলবশত একই হ্যাশ কোড বা একই ড্রয়ারের ইনডেক্স নাম্বার জেনারেট করে ফেলে।",
      example: "ধরে নিন ক্লাসের রোল নাম্বার দেওয়া হচ্ছে নামের প্রথম অক্ষর দিয়ে। এখন 'রাকিব' আর 'রিফাত' দুজনের নামই 'র' দিয়ে শুরু হওয়ায় রেজিস্টার খাতার একই সিরিয়াল লাইনে (Bucket) দুজনের নাম এন্ট্রি করার জ্যাম লেগে গেল।"
    },
    { 
      id: "dsa-q14", 
      category: "dsa", 
      topic: "Graphs", 
      question: "What is Dijkstra's algorithm?", 
      answer: "An optimization algorithm used to discover the shortest path layouts between nodes inside a weighted graph grid mapping.",
      answerBn: "ডায়েক্সট্রা (Dijkstra) হলো একটি গ্রাফ অ্যালগরিদম, যার কাজ হলো একটি নির্দিষ্ট নোড বা পয়েন্ট থেকে গ্রাফের অন্যান্য সমস্ত পয়েন্টে যাওয়ার সবচেয়ে কম খরচে বা সবচেয়ে কম দূরত্বের রাস্তা (Shortest Path) খুঁজে বের করা।",
      example: "গুগল ম্যাপস (Google Maps)—যা আপনার বর্তমান লোকেশন থেকে গন্তব্যের জ্যাম, রাস্তার দূরত্ব এবং স্পিড হিসাব করে সবচেয়ে শর্টকাট এবং দ্রুততম রুটটি নীল রঙ দিয়ে স্ক্রিনে হাইলাইট করে দেয়।"
    },
    { 
      id: "dsa-q15", 
      category: "dsa", 
      topic: "Pointers", 
      question: "What is the Two-Pointer technique?", 
      answer: "An algorithmic pattern where two pointer references iterate through a collection simultaneously to optimize loops from O(n²) down to clean linear O(n) execution times.",
      answerBn: "টু-পয়েন্টার হলো একটি দারুণ শর্টকাট টেকনিক। যেখানে একটা অ্যারের ওপর ডাবল লুপ চালিয়ে O(n²) সময় নষ্ট করার বদলে, আমরা লিস্টের শুরুতে একটা এবং শেষে একটা—এই দুটি ইনডেক্স পয়েন্টার সেট করে এক লুপেই O(n) এর মধ্যে সার্চ বা সল্ভ করে ফেলতে পারি।",
      example: "একদল ছাত্রকে উচ্চতা অনুযায়ী লাইনে দাঁড় করিয়ে বলা হলো এমন দুজনকে বের করো যাদের সম্মিলিত উচ্চতা ঠিক ১০ ফুট। আপনি বাম পাশ থেকে একজন খাটো আর ডান পাশ থেকে একজন লম্বা ছাত্র ধরে ধরে মাঝখানের দিকে এগিয়ে এসে জোড়া মেলালেন।"
    },

    // --- ARCHITECTURE ---
    { 
      id: "ar-q1", 
      category: "architecture", 
      topic: "MVVM Pattern", 
      question: "Explain MVVM in the context of React or Flutter.", 
      answer: "Model holds raw data schemas; View renders the visual layout interfaces; ViewModel contains the business state rules, exposing reactive states to the view without knowing its exact UI structure.",
      answerBn: "MVVM হলো একটি আর্কিটেকচার প্যাটার্ন। Model হলো ডেটার কঙ্কাল বা ব্লুপ্রিন্ট, View হলো স্ক্রিনের ডিজাইন বা UI অংশ, আর ViewModel হলো আসল ব্রেন—যা এপিআই থেকে ডেটা এনে প্রসেস করে এবং ভিউ-এর কাছে হ্যান্ডওভার করে। ভিউ নিজে কোনো লজিক জানে না।",
      example: "রেস্টুরেন্টের কিচেন ও কাস্টমার টেবিল। কাস্টমার যেখানে বসে আছে সেটা View, পেছনের মেইন শেফ হলো Model। আর মাঝখানের ওয়েটার হলো ViewModel—যে কিচেন থেকে খাবার এনে সুন্দর করে সাজিয়ে টেবিলে সার্ভ করে দিয়ে যায়।"
    },
    { 
      id: "ar-q2", 
      category: "architecture", 
      topic: "Clean Code", 
      question: "What do SOLID principles stand for?", 
      answer: "Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion principles.",
      answerBn: "SOLID হলো কোড সুন্দর ও প্রফেশনাল করার ৫টি নিয়ম: S (একটি ক্লাস একটিই কাজ করবে), O (কোড এক্সটেনশনের জন্য খোলা কিন্তু মডিফাই করার জন্য বন্ধ), L (চাইল্ড ক্লাস যেন প্যারেন্ট ক্লাসের জায়গা নিতে পারে), I (অপ্রয়োজনীয় ইন্টারফেস চাপানো যাবে না), D (কংক্রিট ক্লাসের ওপর ডিপেন্ড না করে অ্যাবস্ট্রাকশনের ওপর ডিপেন্ড করা)।",
      example: "একটি মাল্টি-প্লাগ বা সুইজারল্যান্ডের আর্মি নাইফ। ছুরি দিয়ে নখ কাটা, স্ক্রু ড্রাইভার ঘোরানো সব আলাদা আলাদা ব্লেড দিয়ে হয় (Single Responsibility), এবং আপনি মেইন বডি না ভেঙে নতুন একটা হুকও সাইডে অনায়াসে জুড়ে দিতে পারেন (Open/Closed)।"
    },
    { 
      id: "ar-q3", 
      category: "architecture", 
      topic: "Dependency Injection", 
      question: "What is Dependency Inversion vs Dependency Injection?", 
      answer: "Dependency Inversion is a design principle that states high-level modules should depend on abstract contracts, not concrete classes. Dependency Injection is the technique of passing those concrete dependencies into a class at runtime.",
      answerBn: "Dependency Inversion হলো থিওরি বা আইডিয়া—যা বলে মেইন ক্লাস সরাসরি অন্য কোনো ক্লাসের শক্ত কোডের ওপর নির্ভর করবে না, মাঝখানে একটা ইন্টারফেস বা সাধারণ চুক্তি থাকবে। আর Dependency Injection হলো ওই আইডিয়ার বাস্তব রূপ—বাইরে থেকে সেই প্রয়োজনীয় অবজেক্টটি কনস্ট্রাক্টরের মাধ্যমে ক্লাসের ভেতরে পাস করা।",
      example: "Inversion হলো টিভির সকেটের নিয়ম—টিভি স্ক্রিন ডিরেক্ট তার দিয়ে মাটির নিচে মেইন কারেন্টের লাইনে জোড়া থাকবে না, একটা প্লাগ পয়েন্ট থাকবে। আর Injection হলো ওই প্লাগ পয়েন্টে ডিরেক্ট থার্ডপার্টি কোনো মাল্টিপ্লাগ বা অ্যাডাপ্টার এনে গুঁজে দেওয়া।"
    },
    { 
      id: "ar-q4", 
      category: "architecture", 
      topic: "State Management", 
      question: "Why is global state management needed instead of passing properties down?", 
      answer: "It solves the 'Prop Drilling' issue, preventing code maintenance bloat and ensuring clean rendering boundaries where only subscribing sub-components rebuild.",
      answerBn: "গ্লোবাল স্টেট ম্যানেজমেন্ট আমাদের 'Prop Drilling' (এক উইজেট থেকে আরেক উইজেটে জোর করে প্যারামিটার পাস করা) এর হাত থেকে বাঁচায়। এর ফলে কোড নোংরা হয় না এবং অ্যাপের শুধুমাত্র সেই ছোট অংশটুকুই রিফ্রেশ হয় যেখানে আসলেই ডেটা চেঞ্জ হয়েছে, পুরো স্ক্রিন রিড্র হয় না।",
      example: "দাদার থেকে বাবা, বাবার থেকে ছেলে, ছেলের থেকে নাতি—এভাবে হাতবদল করে পকেট মানি না দিয়ে, ঘরের মাঝে একটা কাঁচের ক্যাশ বক্স রেখে দেওয়া। যার যখন দরকার সে বক্স থেকে সরাসরি টাকা তুলে নেবে, মাঝখানের কাউকে বিরক্ত করবে না।"
    },
    { 
      id: "ar-q5", 
      category: "architecture", 
      topic: "Clean Architecture", 
      question: "What are the core stages of Clean Architecture?", 
      answer: "Data Layer (repositories, network datasources), Domain Layer (use cases, abstract entities), and Presentation Layer (widgets, controllers, ViewModels).",
      answerBn: "ক্লিন আর্কিটেকচারের ৩টি প্রধান স্তর থাকে: ১. Presentation Layer (যা ইউজার স্ক্রিনে দেখে—উইজেট, ভিউমডেল), ২. Domain Layer (অ্যাপের আসল বিজনেস লজিক এবং নিয়মকানুন যা সম্পূর্ণ প্যাকেজ-মুক্ত ও স্বাধীন), এবং ৩. Data Layer (ডাটাবেজ, নেটওয়ার্ক এবং ক্যাশিং এর আসল ইমপ্লিমেন্টেশন)।",
      example: "একটি সিনেমা বা নাটকের টিম। প্রেজেন্টেশন হলো স্টেজের সামনের হিরো-হিরোইন যারা অভিনয় করছে। ডোমেইন হলো পেছনের মূল স্ক্রিপ্ট বা গল্পকার যার গল্প অনুযায়ী সিনেমা চলছে। আর ডাটা লেয়ার হলো লাইট, ক্যামেরা আর স্পন্সর যারা প্রোডাকশনের ব্যাকএন্ড খরচ ও কাঁচামাল জোগাচ্ছে।"
    },
    { 
      id: "ar-q6", 
      category: "architecture", 
      topic: "Design Patterns", 
      question: "What is the Singleton Pattern?", 
      answer: "A pattern that restricts the instantiation of a class to one single instance across the entire application lifetime (e.g., global Analytics or Database runners).",
      answerBn: "সিঙ্গেলটন হলো এমন একটি ডিজাইন প্যাটার্ন যা নিশ্চিত করে যে পুরো অ্যাপের লাইফটাইমে একটি ক্লাসের মেমরিতে শুধুমাত্র একটি এবং একটি মাত্র অবজেক্ট বা ইনস্ট্যান্সই তৈরি হবে। দ্বিতীয় কোনো অবজেক্ট কেউ নতুন করে বানাতে পারবে না।",
      example: "একটি দেশের মহামান্য রাষ্ট্রপতি—পুরো দেশে রাষ্ট্রপতি একজনই থাকেন। আপনি যেখানেই যান বা যার সাথেই কথা বলুন, রাষ্ট্রপতির অফিস বা সিগনেচার একটাই, দেশের প্রতিটা জেলায় আলাদা আলাদা রাষ্ট্রপতি বানানো সম্ভব না।"
    },
    { 
      id: "ar-q7", 
      category: "architecture", 
      topic: "Clean Design", 
      question: "What is the purpose of the Domain Layer?", 
      answer: "The Domain layer is the completely isolated center of the app. It containing pure business logic rules and usecases, written without depending on UI frameworks, packages, or databases.",
      answerBn: "ডোমেইন লেয়ার হলো অ্যাপের হৃৎপিণ্ড বা একদম কেন্দ্রবিন্দু। এটি সম্পূর্ণ স্বাধীন এবং এর ভেতরে কোনো ফ্লাটার উইজেট, কোনো ডাটাবেজ প্যাকেজ বা নেটওয়ার্ক লাইব্রেরির কোড থাকে না। এটি শুধুমাত্র অ্যাপের মূল খাঁটি ব্যবসায়িক নিয়ম এবং ইউসকেস (UseCases) ধারণ করে।",
      example: "আইসিসি (ICC) এর ক্রিকেট খেলার মেইন খাতা বা রুলবুক। খেলা ইডেন গার্ডেন্সে হোক কিংবা মিরপুরে, খেলা প্লাস্টিকের ব্যাট দিয়ে হোক বা কাঠের ব্যাট দিয়ে—'৬ বল এক ওভার' এবং 'ক্যাচ ধরলে আউট' এই মূল নিয়ম বা ডোমেইন লজিক কখনো চেঞ্জ হবে না।"
    },
    { 
      id: "ar-q8", 
      category: "architecture", 
      topic: "Design Patterns", 
      question: "What is the Factory Pattern?", 
      answer: "An architectural pattern that provides an interface/constructor for creating objects, allowing subclasses to alter the type of objects that will be created.",
      answerBn: "ফ্যাক্টরি প্যাটার্ন হলো অবজেক্ট তৈরির একটি সেন্ট্রাল ম্যানেজমেন্ট। ক্লায়েন্ট বা ভিউ সরাসরি জানে না সে কোন অবজেক্ট পাচ্ছে, সে জাস্ট ফ্যাক্টরিকে রিকোয়েস্ট করে এবং ফ্যাক্টরি কন্ডিশন বা ইনপুট অনুযায়ী সঠিক সাব-ক্লাসের অবজেক্টটি তৈরি করে ক্লায়েন্টের হাতে তুলে দেয়।",
      example: "একটি আইসক্রিম ফ্যাক্টরি—আপনি বাইরে থেকে শুধু বাটন চাপলেন 'চকলেট' অথবা 'ভ্যানিলা'। ভেতরে কোন কোল্ড স্টোরেজ থেকে দুধ বা ফ্লেভার মিক্স হচ্ছে আপনার জানার দরকার নেই, কাউন্টার দিয়ে আপনার পছন্দের আইসক্রিমটি অটোমেটিক বের হয়ে আসবে।"
    },
    { 
      id: "ar-q9", 
      category: "architecture", 
      topic: "Separation", 
      question: "Why should a View contain zero logic operations?", 
      answer: "Keeping views dumb guarantees that UI code is completely testable, easily swappable, and limits bugs related to state rendering updates.",
      answerBn: "ভিউ বা UI স্ক্রিনকে সবসময় 'ডাম্ব' বা লজিকহীন রাখা উচিত। ভিউতে কোনো যোগ-বিয়োগ বা এপিআই এর হিসাব থাকা যাবে না। এর ফলে ইউজার ইন্টারফেসের কোড খুব সহজে টেস্ট করা যায়, ডিজাইন হুট করে চেঞ্জ বা সোয়াপ করা যায় এবং অদ্ভুত রেন্ডারিং বাগ থেকে বাঁচা যায়।",
      example: "টেলিভিশনের মনিটর বা এলসিডি প্যানেলের মতো। মনিটরের কাজ শুধু পেছনের ক্যাবল থেকে আসা সিগন্যাল বা ছবি পর্দায় দেখানো। ডিসপ্লের কাঁচের ভেতরে যদি ডিশ লাইনের চ্যানেল ডিক্রিপ্ট করার প্রসেসর ঢুকিয়ে দেওয়া হতো, তবে মনিটর নষ্ট হলে পুরো সিস্টেমই ফেলে দিতে হতো।"
    },
    { 
      id: "ar-q10", 
      category: "architecture", 
      topic: "Design Patterns", 
      question: "What is the Repository Pattern?", 
      answer: "An abstraction layer between domain usecases and external data sources (API/Database) that decides whether to fetch data from the network or local cache.",
      answerBn: "রেপোজিটরি প্যাটার্ন হলো ডেটা সোর্সের মেইন গেটওয়ে। এটি ওপরের লেয়ার বা ইউসকেসের কাছ থেকে ডেটার রিকোয়েস্ট নেয় এবং নিজে সিদ্ধান্ত নেয় যে এই ডেটা কি এখন লাইভ ইন্টারনেট এপিআই (API) থেকে আনা হবে নাকি ফোনের ভেতরের লোকাল ক্যাশ ডাটাবেজ থেকে রিটার্ন করা হবে।",
      example: "একটি রেস্টুরেন্টের চতুর ম্যানেজার বা ওয়েটার—আপনি এসে খাবার অর্ডার করলেন। সে পেছনের মেইন শেফকে (API) ডিস্টার্ব করার আগে ফ্রিজ খুলে (Local DB) দেখল খাবার রেডি আছে কিনা। থাকলে ফ্রিজ থেকেই গরম করে ওয়ান সেকেন্ডে সার্ভ করে দিল!"
    },
    { 
      id: "ar-q11", 
      category: "architecture", 
      topic: "State Patterns", 
      question: "What is BLoC architecture?", 
      answer: "Business Logic Component architecture is a stream-based pattern that converts incoming Event streams into structured state output streams to drive layouts cleanly.",
      answerBn: "BLoC হলো একটি স্ট্রিম-ভিত্তিক স্টেট ম্যানেজমেন্ট আর্কিটেকচার। এর মূল থিওরি হলো—ভিউ থেকে ব্লকের কাছে শুধুমাত্র 'ইভেন্ট' বা অ্যাকশন (যেমন বাটন ক্লিক) আসবে, আর ব্লক সেই ইভেন্ট প্রসেস করে আউটপুট হিসেবে একদম ফ্রেশ একটি 'স্টেট' ট্রির মাধ্যমে স্ক্রিনে ফেরত পাঠাবে।",
      example: "একটি কয়েন এক্সচেঞ্জ ভেন্ডিং মেশিন—আপনি মেশিনের স্লটে একটি ময়লা ১ টাকার কয়েন বা নোট ঢুকিয়ে দিলেন (Event), মেশিন ভেতরের মেকানিজমে প্রসেস করে নিচ দিয়ে খটখট করে একটা চকচকে প্লাস্টিক টোকেন বা চকোলেট (State) বের করে দিল।"
    },
    { 
      id: "ar-q12", 
      category: "architecture", 
      topic: "Principles", 
      question: "What is the DRY principle?", 
      answer: "Don't Repeat Yourself - aimed at reducing repetition of software patterns by using abstractions and modular functions.",
      answerBn: "DRY এর পূর্ণরূপ হলো Don't Repeat Yourself—অর্থাৎ একই কোড, একই ফাংশন বা একই ডিজাইন লজিক বারবার কপি-পেস্ট করে কোডের সাইজ এবং বাঘ বাড়ানো যাবে না। যেকোনো কমন কাজকে একটি রিইউজেবল মডিউল বা ইউটিল ফাংশনে রূপান্তর করতে হবে।",
      example: "প্রতিবার রান্নার সময় নতুন করে হলুদ-মরিচ-জিরা পিষে গুড়ো না করে—সপ্তাহের শুরুতে সব মসলা একসাথে ব্লেন্ড করে ছোট ছোট বক্সে বা কৌটোয় ভরে রাখা, যেন রান্নার সময় এক চামচ দিলেই কাজ হয়ে যায়।"
    },
    { 
      id: "ar-q13", 
      category: "architecture", 
      topic: "Principles", 
      question: "What is the YAGNI principle?", 
      answer: "You Aren't Gonna Need It - a principle stating that a programmer should not add functionality until it is absolutely necessary.",
      answerBn: "YAGNI এর পূর্ণরূপ হলো You Aren't Gonna Need It—এর মানে হলো, 'ভবিষ্যতে এই ফিচার বা এই কোড লাগতে পারে' এই কাল্পনিক চিন্তা করে আজকেই কোড লিখে প্রজেক্ট ভারী করবেন না। যখন ক্লায়েন্ট বা প্রজেক্টে ফিচারটি আসলেই লাগবে, ঠিক তখনই ওটা লিখুন।",
      example: "আজকে মাত্র ১ তলা বাড়ি বানানোর বাজেট ও পারমিশন আছে, কিন্তু আপনি ভাবলেন ১০ বছর পর যদি ২০ তলা বানাই—এই ভেবে আজকেই ২০ তলার সমান রড-কংক্রিট কিনে উঠোনে স্তূপ করে রেখে হাঁটাচলার রাস্তা বন্ধ করে ফেলার মতো বোকামি।"
    },
    { 
      id: "ar-q14", 
      category: "architecture", 
      topic: "Code Quality", 
      question: "What is the difference between Unit, Widget, and Integration tests?", 
      answer: "Unit tests verify a single function or class. Widget tests verify a single UI component's rendering and interaction. Integration tests verify the complete app working together.",
      answerBn: "Unit Test হলো একটি একক ফাংশন বা লজিক নিখুঁত কাজ করছে কিনা তা টেস্ট করা। Widget Test হলো একটি সিঙ্গেল UI কম্পোনেন্ট বা বাটন ঠিকমতো স্ক্রিনে রেন্ডার হচ্ছে এবং ক্লিক নিচ্ছে কিনা তা দেখা। আর Integration Test হলো পুরো অ্যাপ একসাথে রিয়েল ফোনে চালু করে এক ফ্লোতে চেক করা।",
      example: "একটি মোটরসাইকেল ফ্যাক্টরি—ইঞ্জিনের একটা নাটবল্টুর স্থায়িত্ব ল্যাবে চেক করা হলো Unit Test। পুরো স্পিডোমিটারের ড্যাশবোর্ড স্ক্রিনটা ঠিকমতো আলো দিচ্ছে কিনা তা দেখা হলো Widget Test। আর আস্ত বাইকটা রাস্তায় নামিয়ে চালিয়ে ব্রেক এবং গিয়ার একসাথে চেক করা হলো Integration Test।"
    },
    { 
      id: "ar-q15", 
      category: "architecture", 
      topic: "Data Flow", 
      question: "What is Unidirectional Data Flow?", 
      answer: "An architectural design where data flows in a single direction (State flows down to UI; Actions/Events flow up to ViewModel), making state changes completely predictable and easy to debug.",
      answerBn: "ইউনিডাইরেকশনাল ডেটা ফ্লো মানে হলো ডেটা বা স্টেট সবসময় একটি নির্দিষ্ট একমুখী রাস্তায় চলবে। নিয়ম হলো—স্টেট বা ডেটা উপর থেকে নিচে ভিউ বা স্ক্রিনের দিকে নামবে, আর ইউজার বাটনে ক্লিক করলে সেই অ্যাকশন বা ইভেন্ট নিচ থেকে সোজা উপরে ভিউমডেলের দিকে উঠবে। কোনো আঁকাবাঁকা শর্টকাট থাকবে না।",
      example: "পাহাড়ের ওপর থেকে নেমে আসা ঝরনা বা ওয়াটারফল—পানি সবসময় উপর থেকে নিচে একমুখী লাইনেই নামে। আপনি চাইলেও নিচ থেকে পানি উল্টো লাইনে পাহাড়ে তুলতে পারবেন না। এর ফলে পুরো সিস্টেম অত্যন্ত প্রেডিক্টবল থাকে এবং বাঘ সহজে ট্র্যাক করা যায়।"
    }
  ]
};