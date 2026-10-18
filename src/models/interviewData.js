// src/models/interviewData.js

import { dartQuestions } from './interview/dart.js';
import { oopQuestions } from './interview/oop.js';
import { dsaQuestions } from './interview/dsa.js';
import { flutterQuestions } from './interview/flutter.js';
import { architectureQuestions } from './interview/architecture.js';
import { apiQuestions } from './interview/api.js';
import { databaseQuestions } from './interview/database.js';
import { backendQuestions } from './interview/backend.js';
import { linuxQuestions } from './interview/linux.js';
import { dockerQuestions } from './interview/docker.js';

export const initialInterviewData = {
  sectionTitle: "Core Infrastructure Protocols & Engineering Interview Hub",
  description: "Industry-standard, verified technical validation markers and architectural checklists.",
  categories: [
    { id: "all", label: "All Sections" },
    { id: "dart", label: "1. Dart" },
    { id: "oop", label: "2. OOP" },
    { id: "dsa", label: "3. DSA" },
    { id: "flutter", label: "4. Flutter" },
    { id: "architecture", label: "5. Architecture & SDLC" },
    { id: "api", label: "6. API & Network" },
    { id: "database", label: "7. Database & PostgreSQL" },
    { id: "backend", label: "8. Backend" },
    { id: "linux", label: "9. Linux Fundamentals" },
    { id: "docker", label: "10. Docker & DevOps" }
  ],
  questions: [
    ...dartQuestions,
    ...oopQuestions,
    ...dsaQuestions,
    ...flutterQuestions,
    ...architectureQuestions,
    ...apiQuestions,
    ...databaseQuestions,
    ...backendQuestions,
    ...linuxQuestions,
    ...dockerQuestions
  ]
};