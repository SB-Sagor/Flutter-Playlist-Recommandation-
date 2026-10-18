// src/models/interview/dsa.js

export const dsaQuestions = [
  {
    "id": "dsa-q1",
    "category": "dsa",
    "topic": "Complexity",
    "question": "What is Big O notation?",
    "answer": "A mathematical framework describing the limiting behavior of an algorithm's execution time or memory space requirements as the input size scales up.",
    "answerBn": "বিগ ও (Big O) হলো অ্যালগরিদমের দক্ষতা মাপার আন্তর্জাতিক স্কেল। ইনপুটের সাইজ (n) যত বড় হবে, আমাদের কোড রান হতে ঠিক কতটা সময় (Time Complexity) নেবে কিংবা মেমরিতে কতটা জায়গা (Space Complexity) খাবে, তা এর মাধ্যমে প্রকাশ করা হয়।",
    "example": "আপনার ১০ জন বন্ধুর নাম ডায়েরি থেকে খুঁজতে ১০ সেকেন্ড লাগলে, পুরো দেশের ১৬ কোটি মানুষের নাম খুঁজতে কত বছর লাগবে—এই বৃদ্ধির গ্রাফ বা স্পিডটাই হলো Big O।"
  },
  {
    "id": "dsa-q2",
    "category": "dsa",
    "topic": "Structures",
    "question": "What is the search time complexity inside a Hashmap?",
    "answer": "O(1) on average constant time, because it calculates data lookups via direct unique bucket hashing algorithms.",
    "answerBn": "হ্যাশম্যাপের (Hashmap) ভেতরে কোনো ডেটা খুঁজে বের করার গড় সময় হলো ওয়ান বা O(1) অর্থাৎ কনস্ট্যান্ট টাইম। এর কারণ হলো হ্যাশম্যাপ কোনো লুপ চালায় না, সে সরাসরি Key-টিকে একটি ম্যাথমেটিকাল হ্যাশ ফাংশনে ফেলে ইণ্ডেক্স বা অ্যাড্রেস বের করে ফেলে।",
    "example": "১০০টি বন্ধ বাক্সের ড্রয়ার। সাধারণ খোঁজাখুজি হলো একে একে সব বাক্স খোলা। আর ওয়ান ও(১) হ্যাশম্যাপ হলো প্রতিটি বাক্সের গায়ে স্পষ্ট লেবেল লাগানো—আপনি সরাসরি কাঙ্ক্ষিত ড্রয়ার টেনে চাবি বের করে নিলেন।"
  },
  {
    "id": "dsa-q3",
    "category": "dsa",
    "topic": "Sorting",
    "question": "What is the difference between QuickSort and MergeSort?",
    "answer": "MergeSort is always O(n log n) stable and requires extra memory. QuickSort is O(n log n) average but can drop to O(n²) worst-case; it sorts in-place without extra allocation requirements.",
    "answerBn": "MergeSort হলো একটি স্টেবল সর্টিং যা সবসময় O(n log n) স্পিড দেয়, তবে এটি করতে মেমরিতে বাড়তি নতুন জায়গা লাগে। অন্যদিকে QuickSort গড়ে O(n log n) হলেও কপাল খারাপ থাকলে ওস্ট কেসে O(n²) এ নেমে যেতে পারে, তবে এর জন্য কোনো বাড়তি মেমরি লাগে না (In-place)।",
    "example": "MergeSort হলো ডেকোরেশনের বড় বড় ডেটা টেবিল আলাদা জায়গায় নিয়ে সুন্দর করে সাজিয়ে আবার মেইন রুমে রাখা। আর QuickSort হলো মেইন রুমের ভেতরেই ধাক্কাধাক্কি করে যার যার হাইট অনুযায়ী পজিশন অদলবদল (Swap) করে সোজা হয়ে দাঁড়ানো।"
  },
  {
    "id": "dsa-q4",
    "category": "dsa",
    "topic": "Trees",
    "question": "What is a Binary Search Tree (BST)?",
    "answer": "A binary tree node structure where left sub-nodes contain values less than the parent root, and right sub-nodes contain values greater than the parent root.",
    "answerBn": "বাইনারি সার্চ ট্রি হলো এমন এক গাছের মতো স্ট্রাকচার যার প্রতিটি নোড বা ডাল থেকে সর্বোচ্চ দুটি শাখা বের হতে পারে। নিয়ম হলো, মূল নোডের চেয়ে ছোট ভ্যালুগুলো সবসময় বামের শাখায় যাবে এবং বড় ভ্যালুগুলো সবসময় ডানের শাখায় গিয়ে বসবে।",
    "example": "ডিকশনারিতে শব্দ খোঁজার মতো—আপনি মাঝখানের পাতা উল্টালেন, দেখলেন আপনার কাঙ্ক্ষিত শব্দ বর্ণমালার দিক থেকে ছোট, তাই আপনি পেছনের সব পাতা বাদ দিয়ে শুধু বামের বা শুরুর দিকের পাতাগুলো খোঁজা শুরু করলেন।"
  },
  {
    "id": "dsa-q5",
    "category": "dsa",
    "topic": "Graphs",
    "question": "Explain BFS vs DFS.",
    "answer": "Breadth-First Search uses a Queue to explore adjacent layer nodes level-by-level. Depth-First Search uses a Stack or Recursion to explore deep branch paths fully before backtracking.",
    "answerBn": "BFS (Breadth-First) একটি কিউ (Queue) ব্যবহার করে গ্রাফের চারপাশের সব প্রতিবেশী নোডগুলোকে ধাপে ধাপে স্তর বা লেভেল অনুযায়ী সার্চ করে। আর DFS (Depth-First) স্ট্যাক বা রিকার্সন ব্যবহার করে যেকোনো একটি লাইনের একদম শেষ সীমানা পর্যন্ত আগে তলিয়ে দেখে, তারপর ব্যাকট্র্যাক করে অন্য লাইনে যায়।",
    "example": "BFS হলো পানিতে ঢিল মারলে ঢেউ যেভাবে চারদিকে গোল হয়ে সমানভাবে ছড়ায়। আর DFS হলো গোলকধাঁধায় ঢুকে একটি রাস্তার শেষ দেয়াল না ঠেকানো পর্যন্ত সোজা হাঁটতে থাকা, দেয়ালে ঠেকলে আবার ব্যাক করে নতুন গলি খোঁজা।"
  },
  {
    "id": "dsa-q6",
    "category": "dsa",
    "topic": "Lists",
    "question": "What is a Linked List vs Array?",
    "answer": "Arrays hold contiguous blocks of memory with O(1) index access. Linked Lists consist of decoupled nodes pointing to next-node pointers, offering fast O(1) insertion/deletion but slower O(n) access.",
    "answerBn": "Array হলো মেমরির একটি টানা লম্বা ব্লক—যেখানে ইনডেক্স নাম্বার দিয়ে সরাসরি O(1) এ যেকোনো আইটেম ধরা যায়। আর Linked List হলো ছড়ানো ছিটানো নোড—যার একটির মাথায় পরের নোডের মেমরি অ্যাড্রেস বা পয়েন্টার লেখা থাকে। এতে মাঝখানে নতুন আইটেম বা নোড গুঁজে দেওয়া খুব সহজ কিন্তু ইনডেক্স ধরে ডেটা খোঁজা ধীরগতির।",
    "example": "Array হলো ট্রেনের পাশাপাশি থাকা ১, ২, ৩ নম্বর সিট। আর Linked List হলো গুপ্তধনের খোঁজ বা 'ট্রেজার হান্ট' গেম—যেখানে ১ম চিরকুট খুললে ২য় চিরকুটের ঠিকানা পাওয়া যায়, ২য় টা খুললে ৩য় টার ঠিকানা মেলে।"
  },
  {
    "id": "dsa-q7",
    "category": "dsa",
    "topic": "Data Store",
    "question": "Explain Stack vs Queue.",
    "answer": "Stack operates on a LIFO (Last In First Out) system. Queue operates on a FIFO (First In First Out) system.",
    "answerBn": "Stack কাজ করে LIFO (লাস্ট ইন ফার্স্ট আউট) নিয়মে—অর্থাৎ যে জিনিস সবার শেষে ঢুকবে সে সবার আগে বের হবে। আর Queue কাজ করে FIFO (ফার্স্ট ইন ফার্স্ট আউট) নিয়মে—অর্থাৎ যে লাইনে আগে দাঁড়াবে সে আগেই সার্ভিস পাবে।",
    "example": "Stack হলো বিয়ের বাড়ির খাওয়ার প্লেটের স্তূপ—ধোয়ার পর প্লেটগুলো একটার ওপর একটা রাখা হয়, আর মানুষ খাওয়ার সময় সবার ওপরের (সর্বশেষ রাখা) প্লেটটাই আগে তোলে। Queue হলো ব্যাংকের ক্যাশের লাইন—যে আগে দাঁড়িয়েছে সে আগে টাকা তুলবে।"
  },
  {
    "id": "dsa-q8",
    "category": "dsa",
    "topic": "Algorithms",
    "question": "What is Binary Search complexity?",
    "answer": "O(log n) execution time, but it strictly requires that the underlying data collection is pre-sorted.",
    "answerBn": "বাইনারি সার্চের টাইম কমপ্লেক্সিটি হলো O(log n), যা অত্যন্ত ফাস্ট। তবে এর প্রধান শর্ত হলো—লিস্ট বা ডেটা কালেকশনটি অবশ্যই আগে থেকে ছোট থেকে বড় বা ক্রমানুসারে সাজানো (Sorted) থাকতে হবে, এলোমেলো থাকলে কাজ করবে না।",
    "example": "এক থেকে একশোর মধ্যে একটি সংখ্যা মনে মনে ধরুন। আমি প্রতিবার জিজ্ঞেস করব 'সংখ্যাটি কি ৫০ এর চেয়ে বড়?' আপনি হ্যাঁ/না বললেই অর্ধেক সংখ্যা এক ঝটকায় বাদ (Divide & Conquer)। এভাবে মাত্র ৭ বার জিজ্ঞেস করলেই উত্তর কনফার্ম!"
  },
  {
    "id": "dsa-q9",
    "category": "dsa",
    "topic": "Optimization",
    "question": "What is Dynamic Programming?",
    "answer": "An algorithmic technique that solves complex problems by breaking them down into simpler subproblems, solving each subproblem just once, and storing their solutions using memoization.",
    "answerBn": "ডায়নামিক প্রোগ্রামিং (DP) হলো একটি অপ্টিমাইজেশন টেকনিক। এটি বড় কোনো জটিল সমস্যাকে ছোট ছোট টুকরোয় ভাগ করে এবং কোনো ছোট টুকরোর উত্তর একবার বের করলে তা মেমরিতে সেভ (Memoization) করে রাখে, যাতে একই হিসাব বারবার করে সময় নষ্ট না হয়।",
    "example": "আমি যদি বোর্ডে লিখি ১+১+১+১+১ = ?, আপনি গুনে বলবেন ৫। এখন আমি যদি বামে আরেকটা '+১' যোগ করি, আপনি কিন্তু শুরু থেকে আবার গুনবেন না, আপনি আগের '৫' মনে রেখে বলবেন ৫+১ = ৬! এই মনে রাখাই হলো DP।"
  },
  {
    "id": "dsa-q10",
    "category": "dsa",
    "topic": "Recursion",
    "question": "What is a stack overflow error in recursion?",
    "answer": "An error that occurs when a recursive function lacks a valid base termination condition, filling the thread call stack memory completely until it crashes.",
    "answerBn": "রিকার্সন ফাংশন যখন নিজেকে বারবার কল করতে থাকে কিন্তু ভেতরে কোনো থামার শর্ত (Base Condition) দেওয়া থাকে না, তখন কম্পিউটারের মেমরির কল-স্ট্যাক (Call Stack) একসময় পুরোপুরি উপচে পড়ে অ্যাপ ক্র্যাশ করে। একেই Stack Overflow এরর বলে।",
    "example": "দুই দিকে দুটি আয়না মুখোমুখি ধরলে যেভাবে ভেতরের প্রতিচ্ছবি অনন্তকাল ধরে ভেতরে যেতেই থাকে এবং শেষ সীমানা পাওয়া যায় না—কম্পিউটারও ঠিক তেমনি গোলকধাঁধায় ফেঁসে মেমরি শেষ করে ফেলে।"
  },
  {
    "id": "dsa-q11",
    "category": "dsa",
    "topic": "Heaps",
    "question": "What is a Priority Queue?",
    "answer": "An abstract data type similar to a regular queue or stack where each element additionally has a 'priority' associated with it, serving higher priority nodes first.",
    "answerBn": "এটি সাধারণ কিউ বা লাইনের মতোই, তবে এখানে শুধুমাত্র লাইনের সিরিয়াল দেখলেই চলে না, প্রতিটি এলিমেন্টের সাথে একটি 'অগ্রাধিকার' বা Priority লেবেল থাকে। যার প্রায়োরিটি সবচেয়ে বেশি, সে লাইনের শেষে থাকলেও তাকে টেনে আগে সার্ভিস দেওয়া হয়।",
    "example": "হাসপাতালের ইমার্জেন্সি বা জরুরি বিভাগ—লাইনে অলরেডি ৫ জন সর্দি-কাশির রোগী দাঁড়িয়ে থাকলেও, যদি একজন এক্সিডেন্ট করা সিরিয়াস রোগী আসে, ডাক্তার তাকে লাইনের তোয়াক্কা না করে আগেই ওটিতে নিয়ে যাবে।"
  },
  {
    "id": "dsa-q12",
    "category": "dsa",
    "topic": "Strings",
    "question": "What is a Trie (Prefix Tree)?",
    "answer": "A specialized tree-based data structure used to efficiently store and search keys within a sequence of characters, commonly utilized for auto-complete systems.",
    "answerBn": "Trie (ট্রাই) হলো ক্যারেক্টার বা অক্ষরের একটি বিশেষ গাছ বা ট্রি স্ট্রাকচার। এটি ডিকশনারির শব্দের প্রতিটি অক্ষরকে এক একটি নোড হিসেবে শিকড়ের মতো সাজিয়ে রাখে। সার্চ ইঞ্জিন বা কিবোর্ডের অটো-কমপ্লিট এবং সাজেশন ফিচারে এটি ব্যাপক ব্যবহৃত হয়।",
    "example": "গুগলে 'flu' লিখলে নিচে অটোমেটিক 'flutter', 'fluid', 'flue' সাজেস্ট করা। কারণ 'f' -> 'l' -> 'u' নোডে পৌঁছানোর পর গাছ থেকে আর কী কী ডালপালা বের হয়েছে তা Trie স্ট্রাকচার খুব দ্রুত স্ক্যান করতে পারে।"
  },
  {
    "id": "dsa-q13",
    "category": "dsa",
    "topic": "Hashing",
    "question": "What is a hash collision?",
    "answer": "An event where two distinct data input strings pass through a hashing function and output the exact same bucket storage index mapping.",
    "answerBn": "হ্যাশ কলিশন হলো এমন একটি দুর্ঘটনা যখন সম্পূর্ণ আলাদা দুটি ইনপুট ডেটা বা টেক্সট হ্যাশ ফাংশনের ভেতর দিয়ে যাওয়ার পর ভুলবশত একই হ্যাশ কোড বা একই ড্রয়ারের ইনডেক্স নাম্বার জেনারেট করে ফেলে।",
    "example": "ধরে নিন ক্লাসের রোল নাম্বার দেওয়া হচ্ছে নামের প্রথম অক্ষর দিয়ে। এখন 'রাকিব' আর 'রিফাত' দুজনের নামই 'র' দিয়ে শুরু হওয়ায় রেজিস্টার খাতার একই সিরিয়াল লাইনে (Bucket) দুজনের নাম এন্ট্রি করার জ্যাম লেগে গেল।"
  },
  {
    "id": "dsa-q14",
    "category": "dsa",
    "topic": "Graphs",
    "question": "What is Dijkstra's algorithm?",
    "answer": "An optimization algorithm used to discover the shortest path layouts between nodes inside a weighted graph grid mapping.",
    "answerBn": "ডায়েক্সট্রা (Dijkstra) হলো একটি গ্রাফ অ্যালগরিদম, যার কাজ হলো একটি নির্দিষ্ট নোড বা পয়েন্ট থেকে গ্রাফের অন্যান্য সমস্ত পয়েন্টে যাওয়ার সবচেয়ে কম খরচে বা সবচেয়ে কম দূরত্বের রাস্তা (Shortest Path) খুঁজে বের করা।",
    "example": "গুগল ম্যাপস (Google Maps)—যা আপনার বর্তমান লোকেশন থেকে গন্তব্যের জ্যাম, রাস্তার দূরত্ব এবং স্পিড হিসাব করে সবচেয়ে শর্টকাট এবং দ্রুততম রুটটি নীল রঙ দিয়ে স্ক্রিনে হাইলাইট করে দেয়।"
  },
  {
    "id": "dsa-q15",
    "category": "dsa",
    "topic": "Pointers",
    "question": "What is the Two-Pointer technique?",
    "answer": "An algorithmic pattern where two pointer references iterate through a collection simultaneously to optimize loops from O(n²) down to clean linear O(n) execution times.",
    "answerBn": "টু-পয়েন্টার হলো একটি দারুণ শর্টকাট টেকনিক। যেখানে একটা অ্যারের ওপর ডাবল লুপ চালিয়ে O(n²) সময় নষ্ট করার বদলে, আমরা লিস্টের শুরুতে একটা এবং শেষে একটা—এই দুটি ইনডেক্স পয়েন্টার সেট করে এক লুপেই O(n) এর মধ্যে সার্চ বা সল্ভ করে ফেলতে পারি।",
    "example": "একদল ছাত্রকে উচ্চতা অনুযায়ী লাইনে দাঁড় করিয়ে বলা হলো এমন দুজনকে বের করো যাদের সম্মিলিত উচ্চতা ঠিক ১০ ফুট। আপনি বাম পাশ থেকে একজন খাটো আর ডান পাশ থেকে একজন লম্বা ছাত্র ধরে ধরে মাঝখানের দিকে এগিয়ে এসে জোড়া মেলালেন।"
  }
];
