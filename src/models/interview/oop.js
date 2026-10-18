export const oopQuestions = [
  {
    "id": "oop-q1",
    "category": "oop",
    "topic": "OOP Principles",
    "question": "What are the four pillars of Object-Oriented Programming?",
    "answer": "The four pillars are Encapsulation (hiding state), Abstraction (hiding implementation details), Inheritance (reusing code from parent classes), and Polymorphism (ability to take many forms).",
    "answerBn": "OOP এর প্রধান চারটি ভিত্তি হলো: এনক্যাপসুলেশন (ভেতরের ডেটা লুকিয়ে রাখা), অ্যাবস্ট্রাকশন (অপ্রয়োজনীয় জটিলতা লুকিয়ে শুধু কাজের জিনিস দেখানো), ইনহেরিটেন্স (পিতামাতার বৈশিষ্ট্য সন্তানের পাওয়া), এবং পলিমরফিজম (একই জিনিসের ভিন্ন ভিন্ন রূপ)।",
    "example": "ধরুন একটি গাড়ি। আপনি স্টিয়ারিং ঘোরালে গাড়ি ঘোরে, ভেতরে কী মেকানিজম কাজ করছে তা আপনার জানার দরকার নেই (Abstraction)। আবার গাড়ির ইঞ্জিনটি কভার দিয়ে ঢাকা থাকে যাতে কেউ সরাসরি তার ডেটা বা তারে হাত না দিতে পারে (Encapsulation)।"
  },
  {
    "id": "oop-q2",
    "category": "oop",
    "topic": "Polymorphism",
    "question": "What is Polymorphism and how is it achieved?",
    "answer": "Polymorphism means 'many forms'. It allows methods to do different things based on the object it is acting upon. It is achieved through method overriding (runtime) and method overloading (compile-time, though Dart doesn't support overloading directly).",
    "answerBn": "পলিমরফিজম মানে হলো 'বহুরূপতা'। এটি মেথডকে তার ক্লাসের ওপর ভিত্তি করে ভিন্ন ভিন্ন আচরণ করতে সাহায্য করে। সাধারণত মেথড ওভাররাইডিং (Overriding) এর মাধ্যমে এটি অর্জন করা হয়, যেখানে সাব-ক্লাস তার প্যারেন্ট ক্লাসের মেথডকে নিজের মতো করে পরিবর্তন করে নেয়।",
    "example": "ধরুন একটি 'Animal' ক্লাস আছে যার 'makeSound()' মেথড আছে। এখন 'Dog' ক্লাস اسے ওভাররাইড করে 'ঘেউ ঘেউ' করবে, আর 'Cat' ক্লাস ওভাররাইড করে 'মিউ মিউ' করবে। কল করা হবে একই 'makeSound()' মেথড, কিন্তু আউটপুট আসবে ভিন্ন!"
  },
  {
    "id": "oop-q3",
    "category": "oop",
    "topic": "Encapsulation",
    "question": "Explain Encapsulation and why it is important.",
    "answer": "Encapsulation is the bundling of data and the methods that operate on that data into a single unit (class), and restricting direct access to some of the object's components (using private fields and getters/setters).",
    "answerBn": "এনক্যাপসুলেশন হলো ডেটা (ভ্যারিয়েবল) এবং ডেটা নিয়ে কাজ করা ফাংশনগুলোকে একটি ক্লাসের মধ্যে আটকে রাখা এবং বাইরের দুনিয়া থেকে সেই ডেটাতে সরাসরি অ্যাক্সেস বন্ধ করে দেওয়া (প্রাইভেট ভ্যারিয়েবল এবং গেটার/সেটার ব্যবহার করে)।",
    "example": "আপনার ব্যাংক অ্যাকাউন্টের ব্যালেন্স হলো প্রাইভেট ডেটা। কেউ চাইলেই সরাসরি আপনার ব্যালেন্স পরিবর্তন করতে পারবে না। তাকে ব্যাংকের নির্দিষ্ট মেথড (যেমন- deposit() বা withdraw()) ব্যবহার করেই ব্যালেন্স পরিবর্তন করতে হবে। এটাই এনক্যাপসুলেশন!"
  },
  {
    "id": "oop-q4",
    "category": "oop",
    "topic": "Abstraction",
    "question": "What is Abstraction in OOP?",
    "answer": "Abstraction is the concept of hiding the complex reality while exposing only the essential parts. In Dart, this is often achieved using abstract classes or interfaces.",
    "answerBn": "অ্যাবস্ট্রাকশন হলো কোনো কিছুর পেছনের জটিল মেকানিজম বা লজিকগুলো লুকিয়ে রেখে শুধু দরকারী এবং সহজ ইন্টারফেসটি ব্যবহারকারীর সামনে তুলে ধরা। ডার্টে এটি অ্যাবস্ট্রাক্ট ক্লাস বা ইন্টারফেস দিয়ে করা হয়।",
    "example": "আপনি যখন কফি মেশিনের বোতাম চাপেন, তখন কফি তৈরি হয়ে বেরিয়ে আসে। ভেতরে কীভাবে পানি গরম হচ্ছে, কফি বিন গুঁড়ো হচ্ছে—এসব জটিলতা আপনার জানার দরকার নেই। কফি মেশিনের বোতামটিই হলো অ্যাবস্ট্রাকশন।"
  },
  {
    "id": "oop-q5",
    "category": "oop",
    "topic": "Class vs Object",
    "question": "What is the difference between a Class and an Object?",
    "answer": "A Class is a blueprint or template for creating objects. It defines properties and behaviors. An Object is an instance of a class, taking up memory and containing actual data.",
    "answerBn": "ক্লাস হলো একটি ব্লুপ্রিন্ট বা নকশা, যা দিয়ে তৈরি করা যায় এমন জিনিসের বৈশিষ্ট্য ও আচরণ কেমন হবে তা ঠিক করা থাকে। আর অবজেক্ট হলো সেই নকশা থেকে তৈরি হওয়া বাস্তব একটি জিনিস, যা মেমোরি দখল করে এবং যার নিজস্ব ডেটা থাকে।",
    "example": "'বাড়ির নকশা' হলো ক্লাস। আর সেই নকশা দেখে বাস্তবে যে 'বাড়ি' তৈরি করা হলো, সেটি হলো অবজেক্ট। একটি নকশা (Class) দিয়ে অনেকগুলো বাড়ি (Objects) বানানো যায়।"
  },
  {
    "id": "oop-q6",
    "category": "oop",
    "topic": "Constructors",
    "question": "What is a Constructor? Explain its types.",
    "answer": "A constructor is a special method used to initialize objects when they are created. In Dart, we have Default Constructors, Parameterized Constructors, Named Constructors (for multiple ways to create an object), and Factory Constructors (which don't always create a new instance).",
    "answerBn": "কনস্ট্রাক্টর হলো একটি বিশেষ মেথড, যা কোনো অবজেক্ট তৈরি হওয়ার সাথে সাথেই কল হয় এবং অবজেক্টের প্রাথমিক ডেটা সেট করে। ডার্টে চার ধরনের কনস্ট্রাক্টর বেশি ব্যবহৃত হয়: ডিফল্ট, প্যারামিটারাইজড, নেমড (ভিন্ন ভিন্ন লজিকে অবজেক্ট বানাতে), এবং ফ্যাক্টরি কনস্ট্রাক্টর (যা সবসময় নতুন অবজেক্ট না বানিয়ে পুরোনো অবজেক্টও রিটার্ন করতে পারে)।",
    "example": "নতুন ব্যাংক অ্যাকাউন্ট খোলার সময় ফর্মে আপনার নাম ও ব্যালেন্স লিখে জমা দেওয়া হলো কনস্ট্রাক্টর। অ্যাকাউন্ট খোলার সাথে সাথেই ওই ডেটা দিয়ে আপনার অবজেক্ট রেডি হয়ে যাবে।"
  },
  {
    "id": "oop-q7",
    "category": "oop",
    "topic": "Interface vs Abstract Class",
    "question": "What is the difference between an Abstract Class and an Interface?",
    "answer": "An Abstract Class can have both fully implemented methods and abstract (empty) methods, allowing partial implementation to be shared. An Interface acts as a strict contract where all methods must be completely empty and implemented by the receiving class. (Note: In Dart, every class implicitly acts as an interface).",
    "answerBn": "অ্যাবস্ট্রাক্ট ক্লাসে কিছু মেথড সম্পূর্ণ লেখা থাকতে পারে আবার কিছু ফাঁকা (অ্যাবস্ট্রাক্ট) থাকতে পারে, যা চাইল্ড ক্লাস পরে নিজের মতো লিখবে। কিন্তু ইন্টারফেস হলো একটা কড়া চুক্তি, এর ভেতরের সব মেথড ফাঁকা থাকে এবং অন্য ক্লাসকে অবশ্যই সবগুলো মেথড নতুন করে লিখতে হয়। (ডার্টে আলাদা interface কি-ওয়ার্ড নেই, যেকোনো ক্লাসকেই 'implements' দিয়ে ইন্টারফেস বানানো যায়)।",
    "example": "অ্যাবস্ট্রাক্ট ক্লাস হলো হাফ-ডান রেসিপি—নুডলস সেদ্ধ করা আছে, মশলা আপনাকে মেশাতে হবে। আর ইন্টারফেস হলো শুধু একটা মেনু কার্ড—কোনো খাবারই রেডি নেই, সব রান্না আপনাকে স্ক্র্যাচ থেকে করতে হবে।"
  },
  {
    "id": "oop-q8",
    "category": "oop",
    "topic": "'this' Keyword",
    "question": "What is the purpose of the 'this' keyword?",
    "answer": "The 'this' keyword refers to the current instance of the class. It is used to resolve ambiguity when class variables and method parameters have the same name.",
    "answerBn": "'this' কি-ওয়ার্ডটি সবসময় বর্তমান অবজেক্টটিকে নির্দেশ করে। যখন ক্লাসের ভ্যারিয়েবলের নাম এবং ফাংশনের প্যারামিটারের নাম একই হয়ে যায়, তখন ক্লাসের ভ্যারিয়েবলটি চেনানোর জন্য তার আগে 'this.' ব্যবহার করা হয়।",
    "example": "ক্লাসরুমে দুজন 'রহিম' থাকলে যেমন ডাকতে কনফিউশন হয়, তখন 'এই রহিম' বা 'ওই রহিম' বলে নির্দিষ্ট করতে হয়। তেমনি this.name মানে হলো 'এই ক্লাসের নাম', বাইরের কোনো নাম নয়।"
  },
  {
    "id": "oop-q9",
    "category": "oop",
    "topic": "'super' Keyword",
    "question": "Explain the use of the 'super' keyword.",
    "answer": "The 'super' keyword is used to refer to the immediate parent class object. It is used to call parent class methods, variables, or parent constructors from the subclass.",
    "answerBn": "'super' কি-ওয়ার্ড দিয়ে সরাসরি প্যারেন্ট বা পিতৃ-ক্লাসকে অ্যাক্সেস করা যায়। চাইল্ড ক্লাসের ভেতর থেকে প্যারেন্ট ক্লাসের কোনো ফাংশন, ভ্যারিয়েবল বা কনস্ট্রাক্টরকে কল করার জন্য 'super' ব্যবহার করা হয়।",
    "example": "আপনি আপনার বাবার ব্যবসাকে নতুন করে সাজিয়েছেন (Method Override), কিন্তু কোনো এক জায়গায় আপনার বাবার পুরোনো স্ট্র্যাটেজিটাই হুবহু দরকার। তখন আপনি 'super.oldStrategy()' কল করে বাবার পদ্ধতিটা কাজে লাগাবেন।"
  },
  {
    "id": "oop-q10",
    "category": "oop",
    "topic": "Static Keyword",
    "question": "What does the 'static' keyword do?",
    "answer": "The 'static' keyword means a property or method belongs to the Class itself, rather than any specific object instance. It is shared across all instances and accessed directly via the Class name.",
    "answerBn": "'static' কি-ওয়ার্ড বোঝায় যে ওই ভ্যারিয়েবল বা মেথডটি কোনো নির্দিষ্ট অবজেক্টের নয়, বরং পুরো ক্লাসের নিজস্ব সম্পত্তি। এটি মেমোরিতে মাত্র একবারই জায়গা নেয় এবং সরাসরি ক্লাসের নাম দিয়ে কল করা যায় (অবজেক্ট বানানোর দরকার হয়বিধা হয় না)।",
    "example": "আপনার ব্যাংকের ব্রাঞ্চের নাম হলো 'static', কারণ সব কাস্টমারের জন্যই ব্যাংকের নাম একই। কিন্তু কাস্টমারদের ব্যালেন্স হলো নন-স্ট্যাটিক, কারণ একেকজনের ব্যালেন্স একেকরকম।"
  },
  {
    "id": "oop-q11",
    "category": "oop",
    "topic": "Composition vs Inheritance",
    "question": "What is the difference between Composition and Inheritance?",
    "answer": "Inheritance models an 'Is-A' relationship (e.g., Car is a Vehicle) by extending a parent class. Composition models a 'Has-A' relationship (e.g., Car has an Engine) by including objects of other classes as members. Composition is generally preferred over inheritance as it provides better flexibility.",
    "answerBn": "ইনহেরিটেন্স দিয়ে 'Is-A' (এটি একটি ওটি) সম্পর্ক বোঝায় (যেমন- গাড়ি হলো একটি যানবাহন)। আর কম্পোজিশন দিয়ে 'Has-A' (এর একটি ওটি আছে) সম্পর্ক বোঝায় (যেমন- গাড়ির একটি ইঞ্জিন আছে)। আধুনিক প্রোগ্রামিংয়ে ইনহেরিটেন্সের চেয়ে কম্পোজিশন বেশি ব্যবহার করতে উৎসাহিত করা হয়, কারণ এটি সহজে পরিবর্তনযোগ্য।",
    "example": "Inheritance: 'ডাক্তার হলো একজন মানুষ' (ডাক্তার এক্সটেন্ডস মানুষ)। Composition: 'ডাক্তারের একটি স্টেথোস্কোপ আছে' (ডাক্তার ক্লাসের ভেতর স্টেথোস্কোপ ক্লাসের একটি অবজেক্ট রাখা)।"
  },
  {
    "id": "oop-q12",
    "category": "oop",
    "topic": "SOLID Principles",
    "question": "What do the letters in SOLID principles stand for?",
    "answer": "SOLID is an acronym for 5 design principles: Single Responsibility (one reason to change), Open-Closed (open for extension, closed for modification), Liskov Substitution (subclasses should be replaceable for base classes), Interface Segregation (many small interfaces), and Dependency Inversion (depend on abstractions, not concretions).",
    "answerBn": "SOLID হলো ৫টি নিয়মের সমষ্টি: 1. Single Responsibility (একটি ক্লাসের একটাই কাজ থাকবে), 2. Open-Closed (নতুন কোড যোগ করা যাবে কিন্তু পুরোনো কোড মোছা যাবে না), 3. Liskov Substitution (প্যারেন্টের জায়গায় চাইল্ড বসালে ক্র্যাশ করবে না), 4. Interface Segregation (বড় ইন্টারফেস ভেঙে ছোট করা), 5. Dependency Inversion (সরাসরি ক্লাসের ওপর নির্ভর না করে অ্যাবস্ট্রাকশনের ওপর নির্ভর করা)।",
    "example": "Single Responsibility: কিচেনের শেফ শুধু রান্নাই করবে, সে টেবিল পরিষ্কার করতে যাবে না। Open-Closed: রেস্টুরেন্টে নতুন মেন্যু যোগ করা যাবে, কিন্তু আগে থেকে থাকা জনপ্রিয় মেন্যু বাতিল করা যাবে না।"
  },
  {
    "id": "oop-q13",
    "category": "oop",
    "topic": "Method Overloading vs Overriding",
    "question": "Explain the difference between Method Overloading and Method Overriding.",
    "answer": "Overriding (Runtime Polymorphism) is providing a new implementation for a parent's method in a subclass (same name, same parameters). Overloading (Compile-time Polymorphism) is having multiple methods with the same name but different parameters in the same class (Note: Dart does NOT support overloading).",
    "answerBn": "ওভাররাইডিং হলো প্যারেন্ট ক্লাসের কোনো মেথডকে চাইল্ড ক্লাসে এসে নিজের মতো করে নতুন করে লেখা (নাম ও প্যারামিটার একই থাকে)। আর ওভারলোডিং হলো একই ক্লাসে একই নামের একাধিক মেথড থাকা, তবে তাদের প্যারামিটার ভিন্ন হওয়া (ডার্ট ওভারলোডিং সাপোর্ট করে না, এর বদলে অপশনাল প্যারামিটার ব্যবহার করতে হয়)।",
    "example": "Overriding: বাবার বাটন মোবাইল চালানোর স্টাইলকে ছেলে ওভাররাইড করে টাচস্ক্রিন চালানো শিখেছে। Overloading: একই 'add' ফাংশন একবার ২টা সংখ্যা যোগ করে, আরেকবার ৩টা সংখ্যা যোগ করে।"
  },
  {
    "id": "oop-q14",
    "category": "oop",
    "topic": "Coupling vs Cohesion",
    "question": "What is High Cohesion and Low Coupling in OOP architecture?",
    "answer": "High Cohesion means that a class or module is focused strictly on doing one specific job well. Low Coupling means modules have minimal dependency on each other, allowing them to be modified, tested, and reused independently.",
    "answerBn": "হাই কোহিশন (High Cohesion) মানে হলো একটি ক্লাস বা মডিউল শুধুমাত্র একটি নির্দিষ্ট দায়িত্ব বা কাজ খুব দক্ষতার সাথে সম্পন্ন করবে (ছিন্নবিচ্ছিন্ন কাজ করবে না)। আর লো কাপলিং (Low Coupling) মানে হলো ক্লাসের সাথে অন্য ক্লাসের নির্ভরশীলতা বা ইন্টার-কানেকশন যত সম্ভব কম থাকবে, যাতে একটা ক্লাসে পরিবর্তন করলে অন্য ক্লাসে কোড ভেঙে না যায়।",
    "example": "একটি টেলিভিশন এবং তার রিমোটের কথা ভাবুন। রিমোটের নিজস্ব সব বাটন টিভি পরিচালনার সাথে সম্পূর্ণ সংগতিপূর্ণ (High Cohesion)। আবার রিমোটটি ইনফ্রারেড সিগন্যাল দিয়ে টিভির সাথে যুক্ত, কোনো জটিল তার বা হার্ডওয়্যার দিয়ে টিভিটির ভেতরে গেঁথে দেওয়া নেই (Low Coupling)। তাই রিমোট নষ্ট হলে সহজে নতুন রিমোট আনা যায়, টিভি পরিবর্তন করতে হয় না।"
  },
  {
    "id": "oop-q15",
    "category": "oop",
    "topic": "Class Relationships",
    "question": "Explain Association, Aggregation, and Composition with examples.",
    "answer": "Association is a generic relationship where two classes use each other (\"uses-a\"). Aggregation is a weak relationship (\"has-a\") where children can exist without the parent. Composition is a strong ownership relationship (\"part-of\") where child objects cannot exist without the parent life-cycle.",
    "answerBn": "১. অ্যাসোসিয়েশন (Association): দুটি ক্লাসের মধ্যে সাধারণ সম্পর্ক যেখানে এক অবজেক্ট অন্য অবজেক্টের সার্ভিস ব্যবহার করে (\"uses-a\")। যেমন: একজন ডাক্তার ও রোগী।\n২. অ্যাগ্রিগেশন (Aggregation): এটি একটি দুর্বল \"has-a\" সম্পর্ক, যেখানে মূল অবজেক্ট ধ্বংস হয়ে গেলেও ভেতরের অবজেক্টটি অক্ষত থাকে। যেমন: একটি কলেজ ও শিক্ষক (কলেজ বন্ধ হলেও শিক্ষক থাকেন)।\n৩. কম্পোজিশন (Composition): এটি একটি অত্যন্ত শক্তিশালী \"part-of\" সম্পর্ক, যেখানে মূল অবজেক্ট ধ্বংস হলে তার ভেতরের উপাদানও স্বয়ংক্রিয়ভাবে ধ্বংস হয়ে যায়।",
    "example": "মানুষ ও তার হৃদপিণ্ড হলো কম্পোজিশন (Composition)। মানুষটি মারা গেলে হৃদপিণ্ড আলাদাভাবে জীবিত থাকে না। কিন্তু মানুষ ও তার হাতঘড়ি হলো অ্যাগ্রিগেশন (Aggregation)—ঘড়ি খুলে রাখলেও ঘড়িটি সম্পূর্ণ অক্ষত থাকবে।"
  }
];
