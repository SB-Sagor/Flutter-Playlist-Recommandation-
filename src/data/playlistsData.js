// src/data/playlistsData.js

export const initialPlaylistsData = {
  title: "Flutter & Dart Learning Journey",
  subtitle: "An enterprise-ready, isolated workspace containing curriculum playlists, functional indexes, and design libraries.",
  phases: [
    {
      id: "phase-1",
      title: "Phase 1: Foundations & Core Beginner Tracks",
      cards: [
        {
          id: "p1-c1",
          level: "Absolute Beginner",
          levelClass: "badge-l1",
          title: "Flutter Tutorial for Absolute Beginners",
          creator: "Channel: Afnan Sarkar",
          description: "Foundational overview covering system installations, mobile simulator setups, structural mechanics, and compiling your initial mobile codebase.",
          link: "https://www.youtube.com/watch?v=_8xOqMhUyjk&list=PLy0nhnjSE4irkzR9mbo70J2iKbf4a36y5"
        },
        {
          id: "p1-c2",
          level: "Beginner Track",
          levelClass: "badge-l1",
          title: "Flutter Complete Beginner Course Series",
          creator: "Channel: Code Red Clan",
          description: "Comprehensive beginner-friendly module diving straight into app structures, structural layouts, and standard configuration guidelines.",
          link: "https://www.youtube.com/watch?v=-Tr-DtCLxfM&list=PLNRu0tXqIbWfqDD7o9_Xgroz3WekNzGNR"
        }
      ]
    },
    {
      id: "phase-2",
      title: "Phase 2: UI Engineering & Syntax Basics",
      cards: [
        {
          id: "p2-c1",
          level: "Beginner Track A",
          levelClass: "badge-l2",
          title: "Dart & Flutter Complete Training Course",
          creator: "Channel: WsCube Tech",
          description: "Step-by-step tutorials tracking conditional properties, stateless interface modules, list rendering layouts, and widget styling rules.",
          link: "https://www.youtube.com/watch?v=jqxz7QvdWk8&list=PLjVLYmrlmjGfGLShoW0vVX_tcyT8u1Y3E"
        },
        {
          id: "p2-c2",
          level: "Beginner Track B",
          levelClass: "badge-l2",
          title: "Flutter UI Concepts & App Architecture",
          creator: "Channel: Mitch Koko",
          description: "Highly visual layout processing focusing on modern UI design kits, grid maps, container customization parameters, and input controllers.",
          link: "https://www.youtube.com/watch?v=v5Tc_VXbpnk&list=PLlvRDpXh1Se6PSaKx30YpQApAm9u9Pv-t"
        },
        {
          id: "p2-c3",
          level: "Beginner Track C",
          levelClass: "badge-l2",
          title: "Flutter Crash Course for Beginners",
          creator: "Channel: The Net Ninja",
          description: "Clean modular introduction mapping layout dimensions, assets initialization pipelines, form fields, and baseline navigation scopes.",
          link: "https://www.youtube.com/watch?v=1ukSR1GRtMU&list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ"
        }
      ]
    },
    {
      id: "phase-3",
      title: "Phase 3: Data Management & App Modules",
      cards: [
        {
          id: "p3-c1",
          level: "Intermediate Track A",
          levelClass: "badge-l3",
          title: "Complete 20-Hour Flutter Masterclass",
          creator: "Channel: Rivaan Ranawat (via freeCodeCamp.org)",
          description: "A deep, comprehensive camp tracking asynchronous network handling, REST API integration pipelines, JSON parsing structures, and remote authentications.",
          link: "https://www.youtube.com/watch?v=CzRQ9mnmh44&t=52963s"
        },
        {
          id: "p3-c2",
          level: "Intermediate Track B",
          levelClass: "badge-l3",
          title: "Practical Project Builds & State Lifecycles",
          creator: "Channel: Akshit Madan",
          description: "Hands-on layout development prioritizing state transformations, database binding models, and clean UI component separation.",
          link: "https://www.youtube.com/watch?v=XbQ-7zwuOdE&list=PL9n0l8rSshSmNoWh4KQ28nJn8npfMtzcs"
        }
      ]
    },
    {
      id: "phase-4",
      title: "Phase 4: Advanced Architectures",
      cards: [
        {
          id: "p4-c1",
          level: "Upper-Intermediate",
          levelClass: "badge-l4",
          title: "Advanced Flutter: Multi-Threading & State Control",
          creator: "Channel: Vandad Nahavandipoor",
          description: "Enterprise engineering tracks focusing on intricate state architectures, streams processing, performance profile optimizations, and advanced design protocols.",
          link: "https://www.youtube.com/watch?v=IfUjHNODRoM&list=PL6yRaaP0WPkVtoeNIGqILtRAgd3h2CNpT"
        }
      ]
    }
  ],
  topics: [
    {
      id: "t1",
      tag: "Core Foundations",
      title: "Dart & Counter Architecture",
      description: "Variables lifecycle execution, functional syntax mappings, array lists parsing, and building your cornerstone app configurations mapping core data structures.",
      links: [
        { text: "↳ Counter App Guide (Tech With Otabek) ↗", url: "https://www.youtube.com/watch?v=-uphCG2cL1E" }
      ]
    },
    {
      id: "t2",
      tag: "State Engine",
      title: "Provider State Management",
      description: "Implement globally shared states architecture, isolate structural business blocks away from widget trees, and master listener optimization paradigms.",
      links: [
        { text: "↳ Provider Deep Dive (Code Red Clan) ↗", url: "https://www.youtube.com/watch?v=SlU_nb0Kz_o&list=PLNRu0tXqIbWc5k_KGU7DJtWBPsvG9RUqx" },
        { text: "↳ Provider State Map (Flutter Map) ↗", url: "https://www.youtube.com/watch?v=FUDhozpnTUw&t=1s" }
      ]
    },
    {
      id: "t3",
      tag: "Local Mutations",
      title: "StatefulBuilder Sub-Trees",
      description: "Optimize layout builds rendering boundaries by selectively mutating contextual parameters down internal dialogs or sheet views fields without rebuilding parent layouts.",
      links: [
        { text: "↳ StatefulBuilder Track (Rohit) ↗", url: "https://www.youtube.com/watch?v=UWrgjZmsbBc&list=PLwzvKIdz8qvwHlI0GidT-CqkbETEtPSLj" },
        { text: "↳ Deep Configuration (WsCube Tech) ↗", url: "https://www.youtube.com/watch?v=h46lrbg8qUg&t=5s" }
      ]
    },
    {
      id: "t4",
      tag: "Reactive State",
      title: "Riverpod State Management",
      description: "Explore compile-safe, reactive, and completely decoupled state management pipelines without depending directly on the Flutter BuildContext layer.",
      links: [
        { text: "↳ Riverpod Ecosystem (Flutter Map) ↗", url: "https://www.youtube.com/watch?v=7Cp1GlmHTGE" }
      ]
    }
  ],
  docs: [
    { id: "d1", isPrime: true, title: "Official Flutter Documentation", desc: "The core framework manual handling runtime syntax parameters, compilation engines, localized testing schemes, and deployment rules.", link: "https://docs.flutter.dev/", btnText: "Read Docs ↗" },
    { id: "d2", isPrime: true, title: "Pub.dev Global Registry", desc: "The primary index engine hosting verified application dependencies, platform channels extensions, storage nodes, and plugins.", link: "https://pub.dev/", btnText: "Search Plugins ↗" },
    { id: "d3", isPrime: false, title: "Flutter Gems Visual Director", desc: "An incredible categorized visual indexing asset map grouping compatible library integrations by specialized design and logic topics cleanly.", link: "https://fluttergems.dev/", btnText: "Browse Catalog ↗" },
    { id: "d4", isPrime: false, title: "Rive Vector Systems", desc: "Incorporate interactive vector state-machines and ultra-light reactive motion assets straight onto layout layers natively without thread lag.", link: "https://rive.app/", btnText: "Explore Rive ↗" },
    { id: "d5", isPrime: false, title: "LottieFiles Asset Library", desc: "Deploy lightweight, multi-platform JSON based schema animations into view ports smoothly to design polished onboarding flows.", link: "https://lottiefiles.com/", btnText: "Find Animations ↗" },
    { id: "d6", isPrime: false, title: "UpLabs Component Blueprints", desc: "Deconstruct validated wireframes, typography structures, layout prototypes, and platform design trends for interface engineering inspiration.", link: "https://www.uplabs.com/", btnText: "Review Layouts ↗" }
  ],
  protocols: [
    "Execute flutter doctor inside your command shell profile before building views to confirm structural alignments.",
    "Avoid idle video watching habits; write along inside your editor to develop proper syntactic muscle memory.",
    "Deploy isolated testing scripts into DartPad (dartpad.dev) to instantly verify simple functional concepts without overheads.",
    "Consistently commit your compiled product patterns onto standard remote repositories like GitHub."
  ]
};