export const dartQuestions = [
  {
    "id": "d-q1",
    "category": "dart",
    "topic": "Dart Basics",
    "question": "What is Dart and why does Flutter use it?",
    "answer": "Dart is a client-optimized language for fast apps on any platform. Flutter uses it because of AOT (Ahead-of-Time) compilation for fast startup/performance and JIT (Just-in-Time) compilation for Hot Reload.",
    "answerBn": "ডার্ট হলো যেকোনো প্ল্যাটফর্মে দ্রুত অ্যাপ বানানোর জন্য একটি অপ্টিমাইজড ল্যাঙ্গুয়েজ। ফ্লাটার এটি ব্যবহার করে কারণ এতে AOT কম্পাইলেশন আছে যা অ্যাপ দ্রুত চালু করে, আর JIT কম্পাইলেশন আছে যা হট রিলোড (কোড চেঞ্জ সাথে সাথে দেখা) সাপোর্ট করে।",
    "example": "JIT হলো একজন লাইভ শেফের মতো—আপনি রান্নায় নুন কম বললে সে কড়াইতেই নুন বাড়িয়ে দেয় (হট রিলোড)। আর AOT হলো বিয়ের বাড়ির ক্যাটারিং—সব রান্না আগে থেকেই রেডি করে রাখা হয় যেন মেহমান আসামাত্রই সার্ভ করা যায় (ফাস্ট স্টার্টআপ)।"
  },
  {
    "id": "d-q2",
    "category": "dart",
    "topic": "Dart Soundness",
    "question": "What is sound null safety in Dart?",
    "answer": "It means variables cannot contain null unless you explicitly say they can (using '?'). This prevents runtime null-pointer exceptions, catching them at compile time.",
    "answerBn": "এর মানে হলো ডার্টে কোনো ভ্যারিয়েবল নিজে থেকে 'null' বা ফাঁকা হতে পারবে না, যদি না আপনি নিজে '?' সাইন দিয়ে অনুমতি দেন। এর ফলে অ্যাপ রান করার সময় হুট করে ক্র্যাশ (Null-Pointer Exception) হয় না, কোড লেখার সময়ই ভুল ধরা পড়ে।",
    "example": "ধরুন আপনি বাজার থেকে একটা সিলড পানির বোতল কিনলেন। কোম্পানি গ্যারান্টি দিচ্ছে ভেতরে পানি আছেই (Non-nullable)। আর যদি বোতলের ছিপি খোলা থাকে (Nullable), তবে পানি খাওয়ার আগে আপনাকে চেক করতে হবে ভেতরে কিছু আছে নাকি ফাঁকা!"
  },
  {
    "id": "d-q3",
    "category": "dart",
    "topic": "Dart Concurrency",
    "question": "Explain Isolate in Dart.",
    "answer": "Dart code runs in isolates, which are separate execution threads with their own memory heaps. They do not share memory; they communicate only via ports/messages, preventing race conditions.",
    "answerBn": "ডার্টের পুরো কোড রান হয় 'Isolate'-এর ভেতরে। এগুলো হলো আলাদা আলাদা থ্রেড যাদের নিজস্ব মেমোরি থাকে। এরা একে অপরের মেমোরি শেয়ার করে না, শুধু পোর্ট বা মেসেজের মাধ্যমে যোগাযোগ করে। ফলে দুই থ্রেড একই ডেটা নিয়ে কাড়াকাড়ি (Race Condition) করতে পারে না।",
    "example": "দুটি আলাদা ফ্ল্যাটের দুই রান্নাবান্না করার লোকের মতো। তারা একই রান্নাঘর বা মসলা শেয়ার করে না (নো শেয়ার্ড মেমোরি), তাই ঝগড়াও হয় না। যদি এক ফ্ল্যাটের লবণের দরকার হয়, সে অন্য ফ্ল্যাটের দরজায় নক করে চেয়ে নেয় (মেসেজ পাসিং)।"
  },
  {
    "id": "d-q4",
    "category": "dart",
    "topic": "Dart Keywords",
    "question": "What is the difference between 'final' and 'const'?",
    "answer": "'final' is a runtime-constant (value evaluated when initialized). 'const' is a compile-time constant (value must be known before running).",
    "answerBn": "'final' হলো রানটাইম কনস্ট্যান্ট—অর্থাৎ অ্যাপ চালু হওয়ার পর যখন ভ্যারিয়েবলটা প্রথম তৈরি হবে, তখন তার ভ্যালু ফিক্সড হবে। আর 'const' হলো কম্পাইল-টাইম কনস্ট্যান্ট—কোড রান করার আগেই তার মান নিশ্চিত জানা থাকতে হবে।",
    "example": "'const' হলো আপনার জন্মতারিখ, যা পৃথিবীর সৃষ্টির শুরু থেকেই ফিক্সড। আর 'final' হলো আপনার আজকের দুপুরের লাঞ্চের মেন্যু—সকালে ঘুম থেকে ওঠার আগে জানা ছিল না, কিন্তু দুপুরে যখন প্লেটে খাবার চলে এলো, ওটা ফিক্সড হয়ে গেল, আর বদলানো যাবে না।"
  },
  {
    "id": "d-q5",
    "category": "dart",
    "topic": "Dart Async",
    "question": "What is the difference between Future and Stream?",
    "answer": "A Future represents a single asynchronous value or error that will be available later. A Stream represents a sequence of asynchronous events/multiple values over time.",
    "answerBn": "Future মানে হলো একটি সিঙ্গেল অ্যাসিনক্রোনাস ডেটা বা এরর যা একটু পরে আসবে (একবারই আসবে)। আর Stream হলো একটা লাইভ পাইপলাইনের মতো, যেখান দিয়ে সময়ের সাথে সাথে একটার পর একটা অনবরত ডেটা আসতেই থাকবে।",
    "example": "Future হলো ফুডপান্ডায় অর্ডার করা বার্গার—অর্ডার দেওয়ার কিছুক্ষণ পর একটা নির্দিষ্ট বার্গার একবারই আপনার হাতে আসবে। আর Stream হলো নেটফ্লিক্স বা ইউটিউবের লাইভ ভিডিও—সেখানে সেকেন্ডে সেকেন্ডে ভিডিওর ডেটা প্যাকেট অনবরত আপনার স্ক্রিনে আসতেই থাকে।"
  },
  {
    "id": "d-q6",
    "category": "dart",
    "topic": "Dart OO",
    "question": "What is a Mixin in Dart?",
    "answer": "A mixin is a way of reusing a class's code in multiple class hierarchies without using multiple inheritance. It uses the 'with' keyword.",
    "answerBn": "মিক্সিন হলো মাল্টিপল ইনহেরিটেন্স ছাড়া এক ক্লাসের কোড অন্য একাধিক ক্লাসের মধ্যে পুনর্ব্যবহার (Reuse) করার একটি উপায়। এটি 'with' কি-ওয়ার্ড দিয়ে ব্যবহার করা হয়।",
    "example": "ধরুন আপনার একটা 'পাইলট' এবং একটি 'ডাক্তার' ক্লাস আছে। এখন আপনি 'সুপারম্যান' ক্লাসে ওড়ার ক্ষমতা দিতে চান। সুপারম্যান তো আর পাইলটের ছেলে না (No Extends), কিন্তু সে ওড়ার স্কিলটা মিক্সিন হিসেবে নিজের সাথে যুক্ত করে নিতে পারে (with Flyer)।"
  },
  {
    "id": "d-q7",
    "category": "dart",
    "topic": "Dart OOP",
    "question": "What is the difference between 'implements' and 'extends'?",
    "answer": "'extends' is used to inherit behavior from a superclass (subclassing). 'implements' forces the class to implement the entire interface/structure of another class.",
    "answerBn": "'extends' ব্যবহার করা হয় বাবা-মার থেকে সরাসরি বৈশিষ্ট্য বা স্বভাব বংশগতভাবে পাওয়ার মতো (Inheritance)। আর 'implements' হলো একটা চুক্তির মতো—অন্য ক্লাসের যতগুলো ফাংশন আছে, সবগুলো আপনাকে নিজের মতো করে নতুন করে স্ক্র্যাচ থেকে লিখতে বাধ্য করবে।",
    "example": "'extends' হলো বাবার জমি পাওয়া—আপনি সরাসরি ওটার মালিক হয়ে গেলেন। আর 'implements' হলো আর্কিটেক্টের দেওয়া একটা বাড়ির নকশা—আর্কিটেক্ট আপনাকে কোনো ইট-বালু দেবে না, নকশা দেখে দেখে পুরো বাড়ি আপনাকে নিজেকে গাঁথতে হবে।"
  },
  {
    "id": "d-q8",
    "category": "dart",
    "topic": "Dart Memory",
    "question": "How does Dart's Garbage Collector work?",
    "answer": "It uses a two-generation garbage collection strategy: a Young Generation for short-lived objects (scavenging) and an Old Generation for long-lived objects (mark-sweep).",
    "answerBn": "ডার্টের মেমোরি ক্লিনার বা গার্বেজ কালেক্টর দুটি ধাপে কাজ করে: Young Generation (যেখানে নতুন ও ক্ষণস্থায়ী অবজেক্টগুলো দ্রুত সাফ করা হয়) এবং Old Generation (যেখানে দীর্ঘদিন বেঁচে থাকা দরকারি অবজেক্টগুলোকে মার্ক করে রেখে বাকিগুলো ফেলে দেওয়া হয়)।",
    "example": "Young Generation হলো আপনার ঘরের টেবিলের ঝুড়ি—যেখানে চিপসের প্যাকেট বা টিস্যু ময়লা হওয়া মাত্র সাথে সাথে ফেলে দেওয়া হয়। আর Old Generation হলো স্টোর রুম—যেখানে অনেক পুরোনো জিনিস জমানো থাকে এবং বছরে একবার বড় করে পরিষ্কার করা হয়।"
  },
  {
    "id": "d-q9",
    "category": "dart",
    "topic": "Dart Typing",
    "question": "What is the difference between 'dynamic' and 'Object'?",
    "answer": "'dynamic' disables static type checking (any property access is allowed at compile-time). 'Object' is the root instance class, requiring safe downcasting or type checking before execution.",
    "answerBn": "'dynamic' ডার্টের টাইপ চেকিং সিস্টেমকে বন্ধ করে দেয়, ফলে কম্পাইল টাইমে যেকোনো মেথড কল করা যায় (ভুল হলেও আটকায় না)। আর 'Object' হলো সব ক্লাসের মূল ভিত্তি, এর ভেতরে যেকোনো ডেটা রাখা গেলেও ব্যবহার করার আগে তার আসল রূপ চেক (Type Check/Cast) করে নিতে হয়।",
    "example": "'dynamic' হলো ভিআইপি পাসের মতো—সিকিউরিটি গার্ড কোনো চেকিং ছাড়াই যেকোনো দরজায় ঢুকতে দেবে, তবে ভেতরে ভুল দরজায় ঢুকলে বিপদে পড়বেন। আর 'Object' হলো একটা পার্সেল বক্স—আপনি জানেন ভেতরে কিছু আছে, কিন্তু খোলার আগে মেটাল ডিটেক্টর দিয়ে স্ক্যান করে নিতে হবে ওটা কী।"
  },
  {
    "id": "d-q10",
    "category": "dart",
    "topic": "Dart Operators",
    "question": "What does the '??=' operator do?",
    "answer": "It is the null-aware assignment operator. It assigns a value to a variable only if that variable is currently null.",
    "answerBn": "এটি একটি নাল-অ্যাওয়ার অ্যাসাইনমেন্ট অপারেটর। এর কাজ হলো একটি ভ্যারিয়েবলে কোনো মান তখনই সেট করা, যদি সেই ভ্যারিয়েবলটি আগে থেকেই খালি বা 'null' অবস্থায় থাকে।",
    "example": "ধরুন আপনি আপনার বন্ধুকে পকেট খরচ দিতে চান। আপনি বললেন, 'তোর পকেট যদি একদম খালি থাকে (null), তবেই আমি তোকে ৫০০ টাকা দেব (??= 500)। যদি অলরেডি পকেটে ১০ টাকাও থাকে, আমি আর দেব না।'"
  },
  {
    "id": "d-q11",
    "category": "dart",
    "topic": "Dart Collections",
    "question": "What is the difference between a List, Set, and Map?",
    "answer": "List is an ordered collection allowing duplicates. Set is an unordered collection of unique items. Map is a dictionary with unique keys mapped to values.",
    "answerBn": "List হলো সিরিয়াল অনুযায়ী সাজানো ডেটা যেখানে একই জিনিস বারবার থাকতে পারে। Set হলো ডুপ্লিকেট ছাড়া একদম ইউনিক জিনিসের ছড়ানো-ছিটানো দল। আর Map হলো চাবি এবং তালার মতো Key-Value পেয়ারের ডিকশনারি।",
    "example": "List হলো আপনার পরীক্ষার হাজিরা খাতা (একই নামের দুজন থাকতে পারে)। Set হলো লটারির ড্র-এর ভেতরের কয়েনগুলো (একটি নাম্বার একবারই থাকবে)। Map হলো হোটেলের চাবির বোর্ড—রুম নম্বর ১০১ (Key) এর বিপরীতে থাকবে ওই রুমের চাবি (Value)।"
  },
  {
    "id": "d-q12",
    "category": "dart",
    "topic": "Dart Callable",
    "question": "How do you make a Dart class callable like a function?",
    "answer": "By implementing the 'call()' method inside the class structure.",
    "answerBn": "ডার্টের যেকোনো ক্লাসের ভেতরে যদি আপনি জাস্ট `call()` নামের একটি মেথড বা ফাংশন তৈরি করে দেন, তবে সেই ক্লাসের অবজেক্টকে সরাসরি সাধারণ ফাংশনের মতো ব্র্যাকেট দিয়ে কল করা যায়।",
    "example": "অবলিভিয়েট বা জাদুর মন্ত্রের মতো। আপনি একটা জাদুর লাঠি অবজেক্ট বানালেন `const wand = MagicWand();` এখন লাঠিটাকে ফাংশনের মতো অ্যাক্টিভেট করতে জাস্ট লিখবেন `wand();` কারণ ভেতরে `call()` মেথড সেট করা আছে।"
  },
  {
    "id": "d-q13",
    "category": "dart",
    "topic": "Dart Functions",
    "question": "What is an anonymous function or closure?",
    "answer": "An anonymous function is a function without a name, often used as callbacks. A closure is a function object that has access to variables in its lexical scope.",
    "answerBn": "অ্যানোনিমাস ফাংশন হলো নাম ছাড়া বেনামী ফাংশন, যা সাধারণত অন্য ফাংশনের ভেতরে প্যারামিটার হিসেবে পাঠানো হয়। আর ক্লোজার (Closure) হলো এমন একটি ফাংশন যা তার আশেপাশের বাইরের ভ্যারিয়েবলগুলোকে নিজের মেমরিতে সারাজীবন মনে রাখতে পারে।",
    "example": "অ্যানোনিমাস ফাংশন হলো বাসের ওয়ান-টাইম টিকিট—কাজ শেষ তো ওটার অস্তিত্ব শেষ। আর ক্লোজার হলো পকেটে রাখা একটি ডায়েরির মতো—ফাংশনটি যেখানেই ঘুরে বেড়াক না কেন, ডায়েরিতে লেখা বাইরের ভ্যারিয়েবলের মান সে সবসময় এক্সেস করতে পারে।"
  },
  {
    "id": "d-q14",
    "category": "dart",
    "topic": "Dart Factory",
    "question": "When do you use a factory constructor?",
    "answer": "Use a factory constructor when you don't always want to create a new instance of the class (e.g., returning a cached instance or a subclass).",
    "answerBn": "ফ্যাক্টরি কনস্ট্রাক্টর তখন ব্যবহার করা হয় যখন আপনি কনস্ট্রাক্টর কল করলেই প্রতিবার মেমরিতে নতুন অবজেক্ট বানাতে চান না; বরং আগের তৈরি করা ক্যাশ অবজেক্ট বা অন্য কোনো সাব-ক্লাসের অবজেক্ট রিটার্ন করতে চান।",
    "example": "সাধারণ কনস্ট্রাক্টর হলো অটোমেটিক ভেন্ডিং মেশিন—টাকা দিলেই প্রতিবার নতুন কাপ কফি বানিয়ে দেবে। আর ফ্যাক্টরি কনস্ট্রাক্টর হলো শোরুমের ম্যানেজার—আপনি গাড়ি চাইলে সে গোডাউনে অলরেডি রেডি থাকা আগের গাড়িটাই এনে আপনাকে হ্যান্ডওভার করবে।"
  },
  {
    "id": "d-q15",
    "category": "dart",
    "topic": "Dart Extensions",
    "question": "What are extension methods?",
    "answer": "Extension methods allow you to add functionality/methods to existing libraries or classes without modifying the original code or subclassing.",
    "answerBn": "এক্সটেনশন মেথডের মাধ্যমে আমরা অন্য কারো লেখা বা ডার্টের নিজস্ব কোনো ক্লাসের (যেমন String বা int) ভেতরে হাত না দিয়ে কিংবা ইনহেরিট না করে, বাহির থেকেই নতুন কাস্টম ফাংশন জুড়ে দিতে পারি।",
    "example": "মোবাইলের ব্যাক-কভার বা পপ-সকেটের মতো। আপনি কিন্তু আইফোনের বডি কেটে নতুন হুক লাগাচ্ছেন না, জাস্ট বাহির থেকে একটা পপ-সকেট আঠা দিয়ে লাগিয়ে ফোন ধরার নতুন সুবিধা বা ফিচার যোগ করে নিলেন।"
  },
  {
    "id": "d-q16",
    "category": "dart",
    "topic": "Dart 3 Records",
    "question": "What are Records in Dart 3 and how do they eliminate boilerplate for multiple return values?",
    "answer": "Records are an anonymous, immutable, aggregate type introduced in Dart 3. They bundle multiple objects into a single typed composite value with fixed length without having to declare formal classes.\n\nKey Capabilities:\n• Multiple Return Values: Allows functions to return multiple typed values easily: (String, int) getUserData().\n• Positional and Named Fields: Supports both positional fields ($1, $2) and named fields ({String name, int age}).\n• Equality: Two records with the same shape and values are equal by default (value-equality).",
    "answerBn": "ডার্ট ৩ (Dart 3)-এর রেকর্ডস (Records) ফিচারটি ডেভেলপারদের জীবন অনেক সহজ করে দিয়েছে:\n\nআগের সমস্যা:\nএকটি ফাংশন থেকে একসাথে ইউজারের নাম (String) এবং বয়স (int) ফেরত দিতে চাইলে আলাদা একটি 'UserResult' ক্লাস বানাতে হতো।\n\nরেকর্ডসের সমাধান:\nকোনো ক্লাস ছাড়াই সোজা ব্র্যাকেট দিয়ে একাধিক ডেটা রিটার্ন করা যায়: `(String, int)` অথবা নাম সহ `({String name, int age})`।\n• পজিশনাল ফিল্ড অ্যাক্সেস করতে: `record.$1`, `record.$2`\n• নেমড ফিল্ড অ্যাক্সেস করতে: `record.name`, `record.age`",
    "command": "// Dart 3 Records সিনট্যাক্স:\n(String, int) getUser() => (\"Sagor\", 25);\n\n// ডিস্ট্রাকচারিং করে এক লাইনে ভ্যালু নেওয়া:\nfinal (name, age) = getUser();",
    "example": "({double lat, double lng}) getCoordinates() {\n  return (lat: 23.8103, lng: 90.4125);\n}\n\nvoid main() {\n  final coords = getCoordinates();\n  print(\"Latitude: ${coords.lat}, Longitude: ${coords.lng}\");\n}"
  },
  {
    "id": "d-q17",
    "category": "dart",
    "topic": "Dart 3 Pattern Matching",
    "question": "What is Pattern Matching and Switch Expressions in Dart 3?",
    "answer": "Pattern Matching in Dart 3 enables testing values against patterns, destructuring data structures, and executing code based on matches in an exhaustive, compiler-verified manner.\n\nKey Advantages:\n• Switch Expressions: Switch can now be used as an expression that returns a value directly.\n• Destructuring: Extract nested values from Lists, Maps, Records, and Objects in a single line.\n• Guard Clauses: Use the 'when' keyword to add extra boolean conditions to case branches.\n• Exhaustiveness Checking: Compiler guarantees every possible subtype of a sealed class or enum is handled.",
    "answerBn": "ডার্ট ৩-এর প্যাটার্ন ম্যাচিং (Pattern Matching) এবং সুইচ এক্সপ্রেশন:\n\n১. সুইচ এক্সপ্রেশন (Switch Expression):\nআগের মতো লম্বা 'case:', 'break;' লেখার দরকার নেই; ল্যাম্বডা '=>' দিয়ে সরাসরি ভ্যালু রিটার্ন করা যায়।\n\n২. ডিস্ট্রাকচারিং:\nঅবজেক্ট বা রেকর্ড থেকে মান আলাদা করে বের করে নেওয়া যায় এক সেকেন্ডে।\n\n৩. এক্সহস্টিভনেস চেকিং (Exhaustiveness Checking):\nসুইচ স্টেটমেন্টে কোনো কেস বা কন্ডিশন মিস গেলে কম্পাইলার নিজে এরর দিয়ে সতর্ক করে দেবে!",
    "command": "// Switch Expression উদাহরণ:\nString getStatus(int code) => switch (code) {\n  200 => \"Success\",\n  404 => \"Not Found\",\n  500 => \"Internal Server Error\",\n  _   => \"Unknown Code\"\n};",
    "example": "sealed class Result {}\nclass Success extends Result { final String data; Success(this.data); }\nclass Failure extends Result { final String error; Failure(this.error); }\n\n// প্যাটার্ন ম্যাচিং দিয়ে নির্ভুল হ্যান্ডেলিং:\nString handleResult(Result res) => switch (res) {\n  Success(data: final d) => \"ডেটা পাওয়া গেছে: $d\",\n  Failure(error: final e) => \"এরর হয়েছে: $e\"\n};"
  },
  {
    "id": "d-q18",
    "category": "dart",
    "topic": "Dart 3 Class Modifiers",
    "question": "Explain Class Modifiers in Dart 3: sealed, final, base, and interface class.",
    "answer": "Dart 3 introduced class modifiers to give library authors and architects precise control over how classes can be inherited, implemented, or instantiated across library boundaries:\n\n1. sealed: The class cannot be extended, implemented, or instantiated outside its defining library. Enables compiler-enforced exhaustive pattern matching.\n2. final: Prohibits any class outside the library from either extending or implementing it.\n3. base: Enforces inheritance only via 'extends'; prevents outside classes from using 'implements'. Preserves private implementation state.\n4. interface class: Enforces implementation only via 'implements'; prevents outside classes from using 'extends' to inherit code directly.",
    "answerBn": "ডার্ট ৩-এর ক্লাস মডিফায়ার্স (Class Modifiers):\n\nআগে ডার্টে যেকোনো ক্লাসকে ইচ্ছামতো extends বা implements করা যেত, যা বড় আর্কিটেকচারে বাগ তৈরি করত।\n\nপ্রধান ৪টি মডিফায়ার:\n১. sealed : এই ক্লাসের সব সাবক্লাস একই ফাইলে থাকতে হবে, বাইরের কোনো ফাইল একে extends বা implements করতে পারবে না। এটি BLoC স্টেট বানানোর জন্য বেস্ট!\n২. final : বাইরের কোনো প্যাকেজ এই ক্লাসকে extends বা implements কোনোটিই করতে পারবে না।\n৩. base : বাইরের কেউ শুধু 'extends' করতে পারবে, 'implements' করতে পারবে না।\n৪. interface class : বাইরের কেউ শুধু 'implements' করতে পারবে (কন্ট্রাক্ট হিসেবে), 'extends' করতে পারবে না।",
    "command": "// BLoC স্টেটের জন্য Sealed Class প্যাটার্ন:\nsealed class AuthState {}\nclass AuthInitial extends AuthState {}\nclass AuthLoading extends AuthState {}\nclass Authenticated extends AuthState { final User user; Authenticated(this.user); }\nclass AuthError extends AuthState { final String message; AuthError(this.message); }",
    "example": "// sealed ক্লাসে সুইচ এক্সপ্রেশন চালালে কম্পাইলার নিশ্চিত করে সব স্টেট হ্যান্ডেল হয়েছে:\nWidget buildUI(AuthState state) => switch (state) {\n  AuthInitial()   => const WelcomeView(),\n  AuthLoading()   => const CircularProgressIndicator(),\n  Authenticated(:final user) => HomeScreen(user: user),\n  AuthError(:final message)  => ErrorBanner(text: message),\n}; // কোনো 'else' বা ডিফল্ট দরকার নেই, কারণ sealed ক্লাস কম্পাইলার নিজে ভেরিফাই করে!"
  }
];
