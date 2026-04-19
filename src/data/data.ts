import {
  Code, Globe, Smartphone, ShoppingCart, GraduationCap, Shield,
  Zap, Clock, Users, Star, CheckCircle,
  MessageSquare, Heart, Search, Rocket, Award,
  Building, Briefcase, Activity, BarChart, FileText,
  Database, Palette, Lock, RefreshCw, Headphones,
  Package
} from "lucide-react";

// ── Announcement ──
export const announcement = {
  text: "Limited Time Offer: Get 20% OFF on all custom web app projects! Contact us today.",
  textBn: "সীমিত সময়ের অফার: সকল কাস্টম ওয়েব অ্যাপ প্রজেক্টে ২০% ছাড়! আজই যোগাযোগ করুন।",
};

// ── Nav ──
export const navLinks = [
  { label: "Home", labelBn: "হোম", href: "#home" },
  { label: "Services", labelBn: "সেবা", href: "#services" },
  { label: "Projects", labelBn: "প্রজেক্ট", href: "#projects" },
  { label: "Pricing", labelBn: "মূল্য", href: "#pricing" },
  { label: "Team", labelBn: "টিম", href: "#team" },
  { label: "Contact", labelBn: "যোগাযোগ", href: "#contact" },
];

// ── Hero ──
export const hero = {
  headline: "We Build Custom Web Applications That Drive Results",
  headlineBn: "আমরা কাস্টম ওয়েব অ্যাপ্লিকেশন তৈরি করি যা ফলাফল আনে",
  subtext: "ZiptoCode Tech Solution transforms your ideas into powerful, scalable web applications using cutting-edge technology. From concept to deployment, we deliver excellence.",
  subtextBn: "ZiptoCode Tech Solution আপনার আইডিয়াকে আধুনিক প্রযুক্তি ব্যবহার করে শক্তিশালী, স্কেলযোগ্য ওয়েব অ্যাপ্লিকেশনে রূপান্তরিত করে। ধারণা থেকে ডিপ্লয়মেন্ট পর্যন্ত, আমরা শ্রেষ্ঠত্ব প্রদান করি।",
  cta: "Start Your Project",
  ctaBn: "আপনার প্রজেক্ট শুরু করুন",
  ctaSecondary: "View Our Work",
  ctaSecondaryBn: "আমাদের কাজ দেখুন",
  badgeText: "Available for new projects",
  badgeTextBn: "নতুন প্রজেক্টের জন্য উপলব্ধ",
};

// ── Stats ──
export const stats = [
  { value: "50+", label: "Projects Completed", labelBn: "প্রজেক্ট সম্পন্ন", icon: Rocket },
  { value: "30+", label: "Happy Clients", labelBn: "সন্তুষ্ট ক্লায়েন্ট", icon: Users },
  { value: "2+", label: "Years Experience", labelBn: "বছরের অভিজ্ঞতা", icon: Clock },
  { value: "99%", label: "Client Satisfaction", labelBn: "ক্লায়েন্ট সন্তুষ্টি", icon: Star },
];

// ── Services ──
export const services = [
  {
    icon: Globe,
    title: "Custom Web Applications",
    titleBn: "কাস্টম ওয়েব অ্যাপ্লিকেশন",
    description: "Full-featured, responsive web apps tailored to your business needs with modern frameworks and best practices.",
    descriptionBn: "আধুনিক ফ্রেমওয়ার্ক এবং সর্বোত্তম অনুশীলনের সাথে আপনার ব্যবসার প্রয়োজন অনুযায়ী সম্পূর্ণ বৈশিষ্ট্যযুক্ত, রেসপনসিভ ওয়েব অ্যাপ।",
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps (PWA)",
    titleBn: "প্রগ্রেসিভ ওয়েব অ্যাপস (PWA)",
    description: "Native app-like experiences that work offline, load instantly, and can be installed on any device.",
    descriptionBn: "নেটিভ অ্যাপের মতো অভিজ্ঞতা যা অফলাইনে কাজ করে, তাত্ক্ষণিক লোড হয় এবং যেকোনো ডিভাইসে ইনস্টল করা যায়।",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    titleBn: "ই-কমার্স সমাধান",
    description: "Feature-rich online stores with secure payment integration, inventory management, and analytics.",
    descriptionBn: "নিরাপদ পেমেন্ট ইন্টিগ্রেশন, ইনভেন্টরি ম্যানেজমেন্ট এবং অ্যানালিটিক্স সহ বৈশিষ্ট্যসমৃদ্ধ অনলাইন স্টোর।",
  },
  {
    icon: GraduationCap,
    title: "EdTech Platforms",
    titleBn: "এডটেক প্ল্যাটফর্ম",
    description: "Learning management systems with course management, progress tracking, and interactive content.",
    descriptionBn: "কোর্স ম্যানেজমেন্ট, অগ্রগতি ট্র্যাকিং এবং ইন্টারেক্টিভ কন্টেন্ট সহ লার্নিং ম্যানেজমেন্ট সিস্টেম।",
  },
  {
    icon: Database,
    title: "Dashboard & Admin Panels",
    titleBn: "ড্যাশবোর্ড ও অ্যাডমিন প্যানেল",
    description: "Data-driven dashboards with real-time analytics, user management, and comprehensive reporting.",
    descriptionBn: "রিয়েল-টাইম অ্যানালিটিক্স, ইউজার ম্যানেজমেন্ট এবং ব্যাপক রিপোর্টিং সহ ডেটা-চালিত ড্যাশবোর্ড।",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    titleBn: "কাস্টম সফটওয়্যার ডেভেলপমেন্ট",
    description: "Bespoke software solutions designed to solve your unique business challenges and streamline operations.",
    descriptionBn: "আপনার অনন্য ব্যবসায়িক চ্যালেঞ্জ সমাধান এবং কার্যক্রম সুবিন্যস্ত করতে ডিজাইন করা কাস্টম সফটওয়্যার সমাধান।",
  },
];

// ── Tech Stack ──
export const techStack = {
  frontend: [
    { name: "React", icon: "https://techstack-generator.vercel.app/react-icon.svg" },
    { name: "TypeScript", icon: "https://techstack-generator.vercel.app/ts-icon.svg" },
    { name: "Vite", icon: "https://vitejs.dev/logo.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "shadcn/ui", icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
  ],
  backend: [
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "REST API", icon: "https://techstack-generator.vercel.app/restapi-icon.svg" },
  ],
  hosting: [
    { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
    { name: "Netlify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ],
  tools: [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
  ],
  sectionTitles: {
    Frontend: "ফ্রন্টএন্ড",
    Backend: "ব্যাকএন্ড",
    Hosting: "হোস্টিং",
    Tools: "টুলস",
  },
};

// ── Projects ──
export const projects = [
  {
    title: "ZupraMart",
    category: "E-Commerce",
    categoryBn: "ই-কমার্স",
    description: "Full-featured e-commerce platform with product listings, cart, checkout, and payment system.",
    descriptionBn: "পণ্যের তালিকা, কার্ট, চেকআউট এবং পেমেন্ট সিস্টেম সহ সম্পূর্ণ ই-কমার্স প্ল্যাটফর্ম।",
    demoUrl: "https://zupramart.netlify.app",
    demoEmail: "demo@ziptocode.com",
    demoPassword: "demo1234",
    storeUrl: "#",
    tags: ["React", "Firebase", "Tailwind"],
    icon: ShoppingCart,
  },
  {
    title: "Darpan Academy",
    category: "EdTech / LMS",
    categoryBn: "এডটেক / LMS",
    description: "EdTech platform providing quality educational resources, course management and learning tools.",
    descriptionBn: "মানসম্পন্ন শিক্ষামূলক সংস্থান, কোর্স ম্যানেজমেন্ট এবং শেখার সরঞ্জাম সরবরাহকারী এডটেক প্ল্যাটফর্ম।",
    demoUrl: "https://darpan-academy.netlify.app",
    demoEmail: "demo@ziptocode.com",
    demoPassword: "demo1234",
    storeUrl: "#",
    tags: ["React", "Firebase", "TypeScript"],
    icon: GraduationCap,
  },
  {
    title: "Chor Koi",
    category: "Corruption Report",
    categoryBn: "দুর্নীতি রিপোর্ট",
    description: "Corruption alert platform empowering citizens to report and track corruption cases securely.",
    descriptionBn: "নাগরিকদের নিরাপদে দুর্নীতির ঘটনা রিপোর্ট ও ট্র্যাক করার ক্ষমতা প্রদানকারী দুর্নীতি সতর্কতা প্ল্যাটফর্ম।",
    demoUrl: "https://chor-koi.vercel.app",
    demoEmail: "demo@ziptocode.com",
    demoPassword: "demo1234",
    storeUrl: "#",
    tags: ["React", "Firebase", "Vite"],
    icon: Shield,
  },
  {
    title: "ZiptoGram",
    category: "Mini Social Media",
    categoryBn: "মিনি সোশ্যাল মিডিয়া",
    description: "Mini social media platform for sharing posts, following users and connecting with people.",
    descriptionBn: "পোস্ট শেয়ার, ইউজার ফলো এবং মানুষের সাথে সংযোগ স্থাপনের জন্য মিনি সোশ্যাল মিডিয়া প্ল্যাটফর্ম।",
    demoUrl: "https://micro-media.netlify.app",
    demoEmail: "demo@ziptocode.com",
    demoPassword: "demo1234",
    storeUrl: "#",
    tags: ["React", "Firebase", "Tailwind"],
    icon: MessageSquare,
  },
  {
    title: "BloodMate",
    category: "Blood Management",
    categoryBn: "রক্ত ব্যবস্থাপনা",
    description: "Blood management system connecting donors and recipients efficiently with real-time tracking.",
    descriptionBn: "রিয়েল-টাইম ট্র্যাকিংয়ের মাধ্যমে দাতা ও গ্রহীতাদের দক্ষতার সাথে সংযুক্ত করা রক্ত ব্যবস্থাপনা সিস্টেম।",
    demoUrl: "https://blood-mate.netlify.app",
    demoEmail: "demo@ziptocode.com",
    demoPassword: "demo1234",
    storeUrl: "#",
    tags: ["React", "Firebase", "TypeScript"],
    icon: Heart,
  },
  {
    title: "Zisan Traders",
    category: "Inventory Management",
    categoryBn: "ইনভেন্টরি ম্যানেজমেন্ট",
    description: "Comprehensive inventory management system for tracking stock, sales, and business operations.",
    descriptionBn: "স্টক, বিক্রয় এবং ব্যবসায়িক কার্যক্রম ট্র্যাকিংয়ের জন্য ব্যাপক ইনভেন্টরি ম্যানেজমেন্ট সিস্টেম।",
    demoUrl: "https://zisan-trader.netlify.app",
    demoEmail: "demo@ziptocode.com",
    demoPassword: "demo1234",
    storeUrl: "#",
    tags: ["React", "Firebase", "Tailwind"],
    icon: Package,
  },
  {
    title: "Zpad",
    category: "Notepad",
    categoryBn: "নোটপ্যাড",
    description: "Clean, fast online notepad for quick notes, text management and seamless productivity.",
    descriptionBn: "দ্রুত নোট, টেক্সট ম্যানেজমেন্ট এবং নির্বিঘ্ন উৎপাদনশীলতার জন্য পরিচ্ছন্ন, দ্রুত অনলাইন নোটপ্যাড।",
    demoUrl: "https://zpad.netlify.app",
    demoEmail: "",
    demoPassword: "",
    storeUrl: "#",
    tags: ["React", "TypeScript", "Tailwind"],
    icon: FileText,
  },
  {
    title: "UniConverter",
    category: "Unit Converter",
    categoryBn: "ইউনিট কনভার্টার",
    description: "Universal converter tool for units, currencies, and data formats with instant results.",
    descriptionBn: "তাত্ক্ষণিক ফলাফল সহ ইউনিট, কারেন্সি এবং ডেটা ফরম্যাটের জন্য সার্বজনীন কনভার্টার টুল।",
    demoUrl: "https://uniconverter.netlify.app",
    demoEmail: "",
    demoPassword: "",
    storeUrl: "#",
    tags: ["React", "TypeScript", "Vite"],
    icon: RefreshCw,
  },
  {
    title: "YouthHopeBD",
    category: "Youth Organization",
    categoryBn: "যুব সংগঠন",
    description: "Youth organization platform promoting community engagement, events and social impact initiatives.",
    descriptionBn: "কমিউনিটি সম্পৃক্ততা, ইভেন্ট এবং সামাজিক প্রভাব উদ্যোগকে উন্নীত করা যুব সংগঠন প্ল্যাটফর্ম।",
    demoUrl: "https://youthhope-bd.netlify.app",
    demoEmail: "demo@ziptocode.com",
    demoPassword: "demo1234",
    storeUrl: "#",
    tags: ["React", "Firebase", "Tailwind"],
    icon: Users,
  },
  {
    title: "BOBDO",
    category: "Blood Donation Org",
    categoryBn: "রক্তদান সংস্থা",
    description: "Blood donation organization platform managing donors, recipients and donation drives.",
    descriptionBn: "দাতা, গ্রহীতা এবং রক্তদান ক্যাম্পেইন পরিচালনাকারী রক্তদান সংস্থা প্ল্যাটফর্ম।",
    demoUrl: "https://bobdo.vercel.app",
    demoEmail: "demo@ziptocode.com",
    demoPassword: "demo1234",
    storeUrl: "#",
    tags: ["React", "Firebase", "TypeScript"],
    icon: Activity,
  },
  {
    title: "Tournamention",
    category: "Tournament Management",
    categoryBn: "টুর্নামেন্ট ম্যানেজমেন্ট",
    description: "Tournament management system for organizing brackets, teams, scores and event scheduling.",
    descriptionBn: "ব্র্যাকেট, দল, স্কোর এবং ইভেন্ট শিডিউলিং আয়োজনের জন্য টুর্নামেন্ট ম্যানেজমেন্ট সিস্টেম।",
    demoUrl: "https://tournamention.netlify.app",
    demoEmail: "demo@ziptocode.com",
    demoPassword: "demo1234",
    storeUrl: "#",
    tags: ["React", "Firebase", "Tailwind"],
    icon: Award,
  },
];

// ── Pricing ──
export const pricing = [
  {
    name: "Starter",
    nameBn: "স্টার্টার",
    price: "5,000",
    currency: "BDT",
    description: "Perfect for small projects and landing pages",
    descriptionBn: "ছোট প্রজেক্ট এবং ল্যান্ডিং পেজের জন্য পারফেক্ট",
    features: [
      "Single Page Application",
      "Responsive Design",
      "Basic UI/UX",
      "Contact Form",
      "1 Revision Round",
      "3-5 Days Delivery",
    ],
    featuresBn: [
      "সিঙ্গেল পেজ অ্যাপ্লিকেশন",
      "রেসপনসিভ ডিজাইন",
      "বেসিক UI/UX",
      "কন্টাক্ট ফর্ম",
      "১ রিভিশন রাউন্ড",
      "৩-৫ দিনে ডেলিভারি",
    ],
    popular: false,
    ctaText: "Get Started",
    ctaTextBn: "শুরু করুন",
  },
  {
    name: "Professional",
    nameBn: "প্রফেশনাল",
    price: "15,000",
    currency: "BDT",
    description: "Ideal for business web applications",
    descriptionBn: "ব্যবসায়িক ওয়েব অ্যাপ্লিকেশনের জন্য আদর্শ",
    features: [
      "Multi-page Application",
      "Authentication System",
      "Database Integration",
      "Admin Dashboard",
      "3 Revision Rounds",
      "7-14 Days Delivery",
      "Firebase Backend",
      "Deployment Support",
    ],
    featuresBn: [
      "মাল্টি-পেজ অ্যাপ্লিকেশন",
      "অথেন্টিকেশন সিস্টেম",
      "ডেটাবেস ইন্টিগ্রেশন",
      "অ্যাডমিন ড্যাশবোর্ড",
      "৩ রিভিশন রাউন্ড",
      "৭-১৪ দিনে ডেলিভারি",
      "Firebase ব্যাকএন্ড",
      "ডিপ্লয়মেন্ট সাপোর্ট",
    ],
    popular: true,
    ctaText: "Get Started",
    ctaTextBn: "শুরু করুন",
  },
  {
    name: "Enterprise",
    nameBn: "এন্টারপ্রাইজ",
    price: "30,000+",
    currency: "BDT",
    description: "For complex, large-scale applications",
    descriptionBn: "জটিল, বড় মাপের অ্যাপ্লিকেশনের জন্য",
    features: [
      "Full-stack Application",
      "Advanced Authentication",
      "Real-time Features",
      "Payment Integration",
      "Unlimited Revisions",
      "14-30 Days Delivery",
      "Priority Support",
      "Source Code Ownership",
      "Post-launch Maintenance",
    ],
    featuresBn: [
      "ফুল-স্ট্যাক অ্যাপ্লিকেশন",
      "অ্যাডভান্সড অথেন্টিকেশন",
      "রিয়েল-টাইম ফিচার",
      "পেমেন্ট ইন্টিগ্রেশন",
      "আনলিমিটেড রিভিশন",
      "১৪-৩০ দিনে ডেলিভারি",
      "প্রায়োরিটি সাপোর্ট",
      "সোর্স কোড মালিকানা",
      "লঞ্চ-পরবর্তী রক্ষণাবেক্ষণ",
    ],
    popular: false,
    ctaText: "Get Started",
    ctaTextBn: "শুরু করুন",
  },
];

// ── Team ──
export const team = [
  {
    name: "Md Ridoan Mahmud Zisan",
    role: "Founder & Lead Developer",
    roleBn: "প্রতিষ্ঠাতা ও প্রধান ডেভেলপার",
    description: "Full-stack developer specializing in React, TypeScript, and Firebase. Handles all technical architecture, development, and deployment. Started coding before turning 16.",
    descriptionBn: "React, TypeScript এবং Firebase-এ বিশেষজ্ঞ ফুল-স্ট্যাক ডেভেলপার। সকল প্রযুক্তিগত আর্কিটেকচার, ডেভেলপমেন্ট এবং ডিপ্লয়মেন্ট পরিচালনা করেন। ১৬ বছর বয়সের আগেই কোডিং শুরু করেছেন।",
    github: "https://github.com/RidoanDev",
    linkedin: "https://linkedin.com/in/ridoan-zisan",
    portfolio: "https://ridoan-zisan.netlify.app",
  },
  {
    name: "Poroma Rani",
    role: "Co-Founder & Operations Head",
    roleBn: "সহ-প্রতিষ্ঠাতা ও অপারেশন্স প্রধান",
    description: "Manages marketing strategy, client relations, customer support, and business development. Provides strategic guidance and ensures client satisfaction at every step.",
    descriptionBn: "মার্কেটিং কৌশল, ক্লায়েন্ট সম্পর্ক, কাস্টমার সাপোর্ট এবং ব্যবসায় উন্নয়ন পরিচালনা করেন। কৌশলগত দিকনির্দেশনা প্রদান করেন এবং প্রতিটি ধাপে ক্লায়েন্ট সন্তুষ্টি নিশ্চিত করেন।",
    github: "",
    linkedin: "",
    portfolio: "",
  },
];

// ── GitHub ──
export const github = {
  username: "RidoanDev",
  profileUrl: "https://github.com/RidoanDev",
  contributionGraphUrl: "https://github-readme-activity-graph.vercel.app/graph?username=RidoanDev&theme=tokyo-night&hide_border=true&area=true&color=6C63FF&line=6C63FF&point=3ECF8E&bg_color=00000000",
  statsUrl: "https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=RidoanDev&theme=tokyonight",
};

// ── Testimonials ──
export const testimonials = [
  {
    name: "Rakibul Hasan",
    role: "Business Owner",
    roleBn: "ব্যবসার মালিক",
    text: "ZiptoCode delivered our e-commerce platform ahead of schedule. The quality of code and design exceeded our expectations. Highly recommended!",
    textBn: "ZiptoCode আমাদের ই-কমার্স প্ল্যাটফর্ম সময়ের আগেই ডেলিভার করেছে। কোড এবং ডিজাইনের গুণমান আমাদের প্রত্যাশা ছাড়িয়ে গেছে। অত্যন্ত সুপারিশকৃত!",
    rating: 5,
  },
  {
    name: "Tasnim Akter",
    role: "Educator",
    roleBn: "শিক্ষিকা",
    text: "The LMS they built for our academy is fantastic. Students love the interface and the admin panel makes management effortless.",
    textBn: "আমাদের একাডেমির জন্য তারা যে LMS তৈরি করেছে তা চমৎকার। শিক্ষার্থীরা ইন্টারফেস পছন্দ করে এবং অ্যাডমিন প্যানেল ম্যানেজমেন্ট সহজ করে দিয়েছে।",
    rating: 5,
  },
  {
    name: "Mahfuz Rahman",
    role: "NGO Director",
    roleBn: "এনজিও পরিচালক",
    text: "Our blood donation platform has connected thousands of donors. The real-time features and responsive design are top-notch.",
    textBn: "আমাদের রক্তদান প্ল্যাটফর্ম হাজার হাজার দাতাকে সংযুক্ত করেছে। রিয়েল-টাইম ফিচার এবং রেসপনসিভ ডিজাইন প্রথম শ্রেণীর।",
    rating: 5,
  },
  {
    name: "Sadia Islam",
    role: "Startup Founder",
    roleBn: "স্টার্টআপ প্রতিষ্ঠাতা",
    text: "Professional team, excellent communication, and the final product was exactly what we envisioned. Will definitely work with them again.",
    textBn: "পেশাদার দল, চমৎকার যোগাযোগ, এবং চূড়ান্ত পণ্যটি ঠিক আমাদের কল্পনার মতোই হয়েছে। অবশ্যই আবার তাদের সাথে কাজ করব।",
    rating: 5,
  },
];

// ── FAQ ──
export const faq = [
  {
    question: "What technologies do you use for development?",
    questionBn: "আপনারা ডেভেলপমেন্টের জন্য কোন প্রযুক্তি ব্যবহার করেন?",
    answer: "We primarily use React with TypeScript, Vite for build tooling, Tailwind CSS for styling, and Firebase for backend services including authentication, database, and hosting.",
    answerBn: "আমরা প্রাথমিকভাবে TypeScript সহ React, বিল্ড টুলিংয়ের জন্য Vite, স্টাইলিংয়ের জন্য Tailwind CSS, এবং অথেন্টিকেশন, ডেটাবেস এবং হোস্টিং সহ ব্যাকএন্ড সার্ভিসের জন্য Firebase ব্যবহার করি।",
  },
  {
    question: "How long does it take to complete a project?",
    questionBn: "একটি প্রজেক্ট সম্পন্ন করতে কত সময় লাগে?",
    answer: "Project timelines vary based on complexity. A simple landing page takes 3-5 days, a standard web app takes 7-14 days, and complex enterprise solutions take 14-30 days.",
    answerBn: "প্রজেক্টের সময়সীমা জটিলতার উপর নির্ভর করে। একটি সাধারণ ল্যান্ডিং পেজ ৩-৫ দিন, একটি স্ট্যান্ডার্ড ওয়েব অ্যাপ ৭-১৪ দিন এবং জটিল এন্টারপ্রাইজ সমাধান ১৪-৩০ দিন সময় নেয়।",
  },
  {
    question: "Do you provide source code after project completion?",
    questionBn: "প্রজেক্ট সম্পন্ন হওয়ার পরে আপনারা কি সোর্স কোড প্রদান করেন?",
    answer: "Yes, we provide complete source code ownership for all custom projects. You can also purchase source code for our pre-built projects from our store.",
    answerBn: "হ্যাঁ, আমরা সকল কাস্টম প্রজেক্টের জন্য সম্পূর্ণ সোর্স কোড মালিকানা প্রদান করি। আপনি আমাদের স্টোর থেকে প্রি-বিল্ট প্রজেক্টের সোর্স কোডও কিনতে পারেন।",
  },
  {
    question: "What is your payment process?",
    questionBn: "আপনাদের পেমেন্ট প্রক্রিয়া কি?",
    answer: "We require 50% upfront before starting the project and the remaining 50% upon completion and client approval. We accept bKash, Nagad, and bank transfer.",
    answerBn: "প্রজেক্ট শুরু করার আগে ৫০% অগ্রিম এবং সম্পন্ন ও ক্লায়েন্ট অনুমোদনের পর বাকি ৫০% প্রয়োজন। আমরা বিকাশ, নগদ এবং ব্যাংক ট্রান্সফার গ্রহণ করি।",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    questionBn: "আপনারা কি লঞ্চ-পরবর্তী সাপোর্ট এবং রক্ষণাবেক্ষণ প্রদান করেন?",
    answer: "Yes, we offer post-launch support. Our Enterprise package includes dedicated maintenance. For other packages, maintenance can be added as an optional service.",
    answerBn: "হ্যাঁ, আমরা লঞ্চ-পরবর্তী সাপোর্ট প্রদান করি। আমাদের এন্টারপ্রাইজ প্যাকেজে ডেডিকেটেড রক্ষণাবেক্ষণ অন্তর্ভুক্ত। অন্যান্য প্যাকেজের জন্য, রক্ষণাবেক্ষণ একটি ঐচ্ছিক সার্ভিস হিসাবে যোগ করা যেতে পারে।",
  },
  {
    question: "Can you build mobile applications?",
    questionBn: "আপনারা কি মোবাইল অ্যাপ্লিকেশন তৈরি করতে পারেন?",
    answer: "We specialize in Progressive Web Apps (PWA) that work like native apps on mobile devices. PWAs can be installed on phones, work offline, and provide a native app experience.",
    answerBn: "আমরা Progressive Web Apps (PWA) এ বিশেষজ্ঞ যা মোবাইল ডিভাইসে নেটিভ অ্যাপের মতো কাজ করে। PWA ফোনে ইনস্টল করা যায়, অফলাইনে কাজ করে এবং নেটিভ অ্যাপের অভিজ্ঞতা দেয়।",
  },
  {
    question: "What if I need changes after the project is delivered?",
    questionBn: "প্রজেক্ট ডেলিভারির পরে যদি আমার পরিবর্তন দরকার হয়?",
    answer: "Each package includes revision rounds. Additional changes beyond the included rounds can be arranged at a reasonable rate. We ensure you are 100% satisfied.",
    answerBn: "প্রতিটি প্যাকেজে রিভিশন রাউন্ড অন্তর্ভুক্ত। অন্তর্ভুক্ত রাউন্ডের বাইরে অতিরিক্ত পরিবর্তন যুক্তিসঙ্গত হারে ব্যবস্থা করা যেতে পারে। আমরা নিশ্চিত করি যে আপনি ১০০% সন্তুষ্ট।",
  },
];

// ── Process ──
export const process = [
  {
    step: 1,
    title: "Discovery",
    titleBn: "আবিষ্কার",
    description: "We understand your requirements, goals, and target audience through detailed discussions.",
    descriptionBn: "বিস্তারিত আলোচনার মাধ্যমে আমরা আপনার প্রয়োজনীয়তা, লক্ষ্য এবং টার্গেট অডিয়েন্স বুঝি।",
    icon: Search,
  },
  {
    step: 2,
    title: "Design",
    titleBn: "ডিজাইন",
    description: "We create wireframes and UI/UX designs that align with your brand and user expectations.",
    descriptionBn: "আমরা আপনার ব্র্যান্ড এবং ব্যবহারকারীর প্রত্যাশার সাথে সামঞ্জস্যপূর্ণ ওয়্যারফ্রেম এবং UI/UX ডিজাইন তৈরি করি।",
    icon: Palette,
  },
  {
    step: 3,
    title: "Build",
    titleBn: "নির্মাণ",
    description: "Our developers bring designs to life with clean, scalable, and maintainable code.",
    descriptionBn: "আমাদের ডেভেলপাররা পরিচ্ছন্ন, স্কেলযোগ্য এবং রক্ষণাবেক্ষণযোগ্য কোডের মাধ্যমে ডিজাইনকে জীবন্ত করে তোলে।",
    icon: Code,
  },
  {
    step: 4,
    title: "Deploy",
    titleBn: "ডিপ্লয়",
    description: "We deploy your application, ensure everything works perfectly, and hand over the project.",
    descriptionBn: "আমরা আপনার অ্যাপ্লিকেশন ডিপ্লয় করি, সবকিছু নিখুঁতভাবে কাজ করছে তা নিশ্চিত করি এবং প্রজেক্ট হস্তান্তর করি।",
    icon: Rocket,
  },
];

// ── Why Choose Us ──
export const whyChooseUs = [
  { icon: Zap, title: "Fast Delivery", titleBn: "দ্রুত ডেলিভারি", description: "We deliver projects on time without compromising quality.", descriptionBn: "গুণমানের সাথে আপোষ না করে আমরা সময়মতো প্রজেক্ট ডেলিভার করি।" },
  { icon: Code, title: "Clean Code", titleBn: "ক্লিন কোড", description: "Well-structured, maintainable code following best practices.", descriptionBn: "সর্বোত্তম অনুশীলন অনুসরণ করে সুগঠিত, রক্ষণাবেক্ষণযোগ্য কোড।" },
  { icon: Smartphone, title: "Fully Responsive", titleBn: "সম্পূর্ণ রেসপনসিভ", description: "Pixel-perfect design across all devices and screen sizes.", descriptionBn: "সকল ডিভাইস এবং স্ক্রিন সাইজে পিক্সেল-পারফেক্ট ডিজাইন।" },
  { icon: Lock, title: "Secure & Reliable", titleBn: "নিরাপদ ও নির্ভরযোগ্য", description: "Industry-standard security with Firebase authentication.", descriptionBn: "Firebase অথেন্টিকেশন সহ শিল্প-মানের নিরাপত্তা।" },
  { icon: Headphones, title: "24/7 Support", titleBn: "২৪/৭ সাপোর্ট", description: "Dedicated customer support throughout and after the project.", descriptionBn: "প্রজেক্ট চলাকালীন এবং পরবর্তীতে ডেডিকেটেড কাস্টমার সাপোর্ট।" },
  { icon: RefreshCw, title: "Free Revisions", titleBn: "ফ্রি রিভিশন", description: "We iterate until you are completely satisfied with the result.", descriptionBn: "আপনি ফলাফলে সম্পূর্ণ সন্তুষ্ট না হওয়া পর্যন্ত আমরা পুনরাবৃত্তি করি।" },
];

// ── Industries ──
export const industries = [
  { icon: GraduationCap, name: "Education", nameBn: "শিক্ষা" },
  { icon: ShoppingCart, name: "E-Commerce", nameBn: "ই-কমার্স" },
  { icon: Heart, name: "Healthcare", nameBn: "স্বাস্থ্যসেবা" },
  { icon: Building, name: "Real Estate", nameBn: "রিয়েল এস্টেট" },
  { icon: Briefcase, name: "Business", nameBn: "ব্যবসা" },
  { icon: Users, name: "Social Media", nameBn: "সোশ্যাল মিডিয়া" },
  { icon: BarChart, name: "Finance", nameBn: "অর্থায়ন" },
  { icon: Globe, name: "Non-Profit", nameBn: "অলাভজনক" },
];

// ── Timeline ──
export const projectTimeline = [
  { type: "Landing Page", typeBn: "ল্যান্ডিং পেজ", duration: "3-5 Days", durationBn: "৩-৫ দিন", complexity: "Simple", complexityBn: "সহজ" },
  { type: "Business Web App", typeBn: "ব্যবসায়িক ওয়েব অ্যাপ", duration: "7-14 Days", durationBn: "৭-১৪ দিন", complexity: "Medium", complexityBn: "মাঝারি" },
  { type: "E-Commerce Platform", typeBn: "ই-কমার্স প্ল্যাটফর্ম", duration: "14-21 Days", durationBn: "১৪-২১ দিন", complexity: "Complex", complexityBn: "জটিল" },
  { type: "Enterprise Solution", typeBn: "এন্টারপ্রাইজ সমাধান", duration: "21-30 Days", durationBn: "২১-৩০ দিন", complexity: "Advanced", complexityBn: "অ্যাডভান্সড" },
];

// ── Guarantee ──
export const guarantees = [
  { icon: CheckCircle, title: "100% Satisfaction Guarantee", titleBn: "১০০% সন্তুষ্টির গ্যারান্টি", description: "We work until you are completely happy with the result.", descriptionBn: "আপনি ফলাফলে সম্পূর্ণ খুশি না হওয়া পর্যন্ত আমরা কাজ করি।" },
  { icon: RefreshCw, title: "Free Bug Fixes", titleBn: "ফ্রি বাগ ফিক্স", description: "Any bugs found after delivery will be fixed free of charge.", descriptionBn: "ডেলিভারির পরে পাওয়া যেকোনো বাগ বিনামূল্যে ঠিক করা হবে।" },
  { icon: Lock, title: "Source Code Ownership", titleBn: "সোর্স কোড মালিকানা", description: "You own 100% of the code we write for your project.", descriptionBn: "আপনার প্রজেক্টের জন্য আমরা যে কোড লিখি তার ১০০% আপনার মালিকানাধীন।" },
  { icon: Clock, title: "On-Time Delivery", titleBn: "সময়মতো ডেলিভারি", description: "We commit to delivering your project within the agreed timeline.", descriptionBn: "আমরা সম্মত সময়সীমার মধ্যে আপনার প্রজেক্ট ডেলিভার করতে প্রতিশ্রুতিবদ্ধ।" },
];

// ── Contact ──
export const contact = {
  email: "ridoan.zisan@gmail.com",
  phone: "+8801712525910",
  whatsapp: "+8801712525910",
  location: "Bogura, Bangladesh",
  locationBn: "বগুড়া, বাংলাদেশ",
  socials: {
    github: "https://github.com/RidoanDev",
    facebook: "https://facebook.com/ridoan.zisan",
    linkedin: "https://linkedin.com/in/ridoan-zisan",
  },
};

// ── Budget Ranges ──
export const budgetRanges = [
  "5,000 - 10,000 BDT",
  "10,000 - 20,000 BDT",
  "20,000 - 30,000 BDT",
  "30,000+ BDT",
];

// ── Project Types ──
export const projectTypes = [
  "Landing Page",
  "Web Application",
  "E-Commerce",
  "LMS / EdTech",
  "Dashboard / Admin Panel",
  "PWA",
  "Custom Software",
  "Other",
];

export const projectTypesBn = [
  "ল্যান্ডিং পেজ",
  "ওয়েব অ্যাপ্লিকেশন",
  "ই-কমার্স",
  "LMS / এডটেক",
  "ড্যাশবোর্ড / অ্যাডমিন প্যানেল",
  "PWA",
  "কাস্টম সফটওয়্যার",
  "অন্যান্য",
];

// ── Chatbot ──
export const chatbotQuickReplies = [
  "What services do you offer?",
  "How much does a project cost?",
  "How long does delivery take?",
  "Can I see your projects?",
  "How to contact you?",
];

export const chatbotQuickRepliesBn = [
  "আপনারা কী কী সেবা দেন?",
  "একটি প্রজেক্টের খরচ কত?",
  "ডেলিভারিতে কত সময় লাগে?",
  "আপনাদের প্রজেক্ট দেখতে পারি?",
  "কিভাবে যোগাযোগ করব?",
];

export const chatbotResponses: Record<string, string> = {
  "services": "We offer custom web application development, PWA development, e-commerce solutions, EdTech platforms, dashboards, and custom software. Check our [Services section](#services) for details!",
  "cost": "Our projects start from BDT 5,000 for landing pages. Business apps range from BDT 15,000-30,000+. Visit our [Pricing section](#pricing) for detailed packages!",
  "price": "Our projects start from BDT 5,000 for landing pages. Business apps range from BDT 15,000-30,000+. Visit our [Pricing section](#pricing) for detailed packages!",
  "delivery": "Delivery timelines: Landing pages 3-5 days, business apps 7-14 days, enterprise solutions 14-30 days. We always deliver on time!",
  "time": "Delivery timelines: Landing pages 3-5 days, business apps 7-14 days, enterprise solutions 14-30 days. We always deliver on time!",
  "project": "We have built 50+ projects including e-commerce, LMS, social media, blood management, inventory systems and more. Check our [Projects section](#projects)!",
  "contact": "You can reach us via WhatsApp at +8801712525910, email at ridoan.zisan@gmail.com, or use the [Contact form](#contact) on our website!",
  "whatsapp": "Message us on WhatsApp: +8801712525910. We typically respond within an hour!",
  "hello": "Hello! Welcome to ZiptoCode Tech Solution. How can I help you today? Feel free to ask about our services, pricing, or projects!",
  "hi": "Hi there! Welcome to ZiptoCode. I am here to help you with any questions about our web development services!",
  "hey": "Hey! Great to have you here. What can I help you with today?",
  "thanks": "You are welcome! If you have any more questions, feel free to ask. We are always happy to help!",
  "thank": "You are welcome! Do not hesitate to reach out if you need anything else.",
  "default": "Thank you for your message! For detailed inquiries, please contact us via WhatsApp at +8801712525910 or email at ridoan.zisan@gmail.com. You can also fill out our [Contact form](#contact)!",
};

export const chatbotResponsesBn: Record<string, string> = {
  "সেবা": "আমরা কাস্টম ওয়েব অ্যাপ ডেভেলপমেন্ট, PWA ডেভেলপমেন্ট, ই-কমার্স সমাধান, এডটেক প্ল্যাটফর্ম, ড্যাশবোর্ড এবং কাস্টম সফটওয়্যার অফার করি। বিস্তারিত জানতে [সেবা বিভাগ](#services) দেখুন!",
  "খরচ": "আমাদের প্রজেক্ট ল্যান্ডিং পেজের জন্য ৫,০০০ টাকা থেকে শুরু। বিজনেস অ্যাপ ১৫,০০০-৩০,০০০+ টাকা। বিস্তারিত প্যাকেজের জন্য [মূল্য বিভাগ](#pricing) দেখুন!",
  "দাম": "আমাদের প্রজেক্ট ল্যান্ডিং পেজের জন্য ৫,০০০ টাকা থেকে শুরু। বিজনেস অ্যাপ ১৫,০০০-৩০,০০০+ টাকা। বিস্তারিত প্যাকেজের জন্য [মূল্য বিভাগ](#pricing) দেখুন!",
  "সময়": "ডেলিভারি সময়সীমা: ল্যান্ডিং পেজ ৩-৫ দিন, বিজনেস অ্যাপ ৭-১৪ দিন, এন্টারপ্রাইজ সমাধান ১৪-৩০ দিন। আমরা সবসময় সময়মতো ডেলিভার করি!",
  "প্রজেক্ট": "আমরা ই-কমার্স, LMS, সোশ্যাল মিডিয়া, রক্ত ব্যবস্থাপনা, ইনভেন্টরি সিস্টেম সহ ৫০+ প্রজেক্ট তৈরি করেছি। [প্রজেক্ট বিভাগ](#projects) দেখুন!",
  "যোগাযোগ": "আমাদের সাথে WhatsApp: +8801712525910, ইমেইল: ridoan.zisan@gmail.com, অথবা আমাদের ওয়েবসাইটের [যোগাযোগ ফর্ম](#contact) ব্যবহার করুন!",
  "হ্যালো": "আসসালামু আলাইকুম! ZiptoCode Tech Solution-এ স্বাগতম। আজ আমি কিভাবে সাহায্য করতে পারি?",
  "হাই": "হাই! ZiptoCode-এ স্বাগতম। আমাদের ওয়েব ডেভেলপমেন্ট সেবা সম্পর্কে যেকোনো প্রশ্নে আমি এখানে আছি!",
  "ধন্যবাদ": "আপনাকেও ধন্যবাদ! আর কোনো প্রশ্ন থাকলে জানাবেন। আমরা সবসময় সাহায্য করতে প্রস্তুত!",
  "default": "আপনার মেসেজের জন্য ধন্যবাদ! বিস্তারিত জানতে WhatsApp: +8801712525910 অথবা ইমেইল: ridoan.zisan@gmail.com এ যোগাযোগ করুন। আমাদের [যোগাযোগ ফর্ম](#contact) ও ব্যবহার করতে পারেন!",
};

// ── Footer ──
export const footer = {
  description: "ZiptoCode Tech Solution builds custom web applications that drive real results. From concept to deployment, we deliver excellence.",
  descriptionBn: "ZiptoCode Tech Solution কাস্টম ওয়েব অ্যাপ্লিকেশন তৈরি করে যা বাস্তব ফলাফল আনে। ধারণা থেকে ডিপ্লয়মেন্ট পর্যন্ত, আমরা শ্রেষ্ঠত্ব প্রদান করি।",
  quickLinks: [
    { label: "Services", labelBn: "সেবা", href: "#services" },
    { label: "Projects", labelBn: "প্রজেক্ট", href: "#projects" },
    { label: "Pricing", labelBn: "মূল্য", href: "#pricing" },
    { label: "Contact", labelBn: "যোগাযোগ", href: "#contact" },
  ],
  serviceLinks: [
    { label: "Web Applications", labelBn: "ওয়েব অ্যাপ্লিকেশন", href: "#services" },
    { label: "PWA Development", labelBn: "PWA ডেভেলপমেন্ট", href: "#services" },
    { label: "E-Commerce", labelBn: "ই-কমার্স", href: "#services" },
    { label: "Custom Software", labelBn: "কাস্টম সফটওয়্যার", href: "#services" },
  ],
};

// ── Certificate ──
export const certificate = {
  title: "Google IT Support Professional Certificate",
  titleBn: "গুগল আইটি সাপোর্ট প্রফেশনাল সার্টিফিকেট",
  holder: "Md Ridoan Mahmud Zisan",
  issuer: "Coursera / Google",
  verifyUrl: "https://coursera.org/verify/professional-cert/AY1ON3487DT3",
  imageUrl: "https://ziptocode.netlify.app/cetrtificate.png",
  description: "Verified Google IT Support Professional Certificate — a 6-course program developed by Google covering technical support, networking, operating systems, system administration, and IT security.",
  descriptionBn: "যাচাইকৃত গুগল আইটি সাপোর্ট প্রফেশনাল সার্টিফিকেট — গুগল কর্তৃক তৈরি ৬-কোর্সের প্রোগ্রাম যা টেকনিক্যাল সাপোর্ট, নেটওয়ার্কিং, অপারেটিং সিস্টেম, সিস্টেম অ্যাডমিনিস্ট্রেশন এবং আইটি সিকিউরিটি কভার করে।",
};

// ── Section headers (bilingual) ──
export const sectionHeaders = {
  services: { title: "Our Services", titleBn: "আমাদের সেবাসমূহ", subtitle: "We deliver end-to-end web development solutions tailored to your business needs", subtitleBn: "আমরা আপনার ব্যবসার প্রয়োজন অনুযায়ী সম্পূর্ণ ওয়েব ডেভেলপমেন্ট সমাধান প্রদান করি" },
  howWeWork: { title: "How We Work", titleBn: "আমরা কিভাবে কাজ করি", subtitle: "Our proven 4-step process ensures quality delivery every time", subtitleBn: "আমাদের প্রমাণিত ৪-ধাপের প্রক্রিয়া প্রতিবার মানসম্পন্ন ডেলিভারি নিশ্চিত করে" },
  techStack: { title: "Tech Stack & Tools", titleBn: "প্রযুক্তি স্ট্যাক ও টুলস", subtitle: "Modern technologies we use to build fast, scalable, and reliable applications", subtitleBn: "দ্রুত, স্কেলযোগ্য এবং নির্ভরযোগ্য অ্যাপ্লিকেশন তৈরিতে আমরা যে আধুনিক প্রযুক্তি ব্যবহার করি" },
  projects: { title: "Our Projects", titleBn: "আমাদের প্রজেক্টসমূহ", subtitle: "Explore our portfolio of 50+ projects built with modern technologies", subtitleBn: "আধুনিক প্রযুক্তিতে তৈরি আমাদের ৫০+ প্রজেক্টের পোর্টফোলিও দেখুন" },
  pricing: { title: "Pricing Plans", titleBn: "মূল্য পরিকল্পনা", subtitle: "Transparent pricing with no hidden fees. Choose the plan that fits your project.", subtitleBn: "কোনো গোপন ফি ছাড়া স্বচ্ছ মূল্য। আপনার প্রজেক্টের জন্য উপযুক্ত প্ল্যান বেছে নিন।" },
  whyChooseUs: { title: "Why Choose ZiptoCode", titleBn: "কেন ZiptoCode বেছে নেবেন", subtitle: "What sets us apart from the competition", subtitleBn: "যা আমাদের প্রতিযোগিতায় আলাদা করে" },
  industries: { title: "Industries We Serve", titleBn: "আমরা যেসব শিল্পে সেবা দিই", subtitle: "We build solutions across diverse sectors", subtitleBn: "আমরা বিভিন্ন সেক্টরে সমাধান তৈরি করি" },
  timeline: { title: "Project Timeline", titleBn: "প্রজেক্ট টাইমলাইন", subtitle: "Estimated delivery timelines based on project complexity", subtitleBn: "প্রজেক্টের জটিলতার ভিত্তিতে আনুমানিক ডেলিভারি সময়সীমা" },
  guarantee: { title: "Our Guarantee", titleBn: "আমাদের গ্যারান্টি", subtitle: "We stand behind every project we deliver", subtitleBn: "আমরা প্রতিটি ডেলিভার করা প্রজেক্টের পেছনে দাঁড়াই" },
  team: { title: "Meet Our Team", titleBn: "আমাদের টিমের সাথে পরিচিত হন", subtitle: "A small but dedicated team passionate about building great software", subtitleBn: "একটি ছোট কিন্তু নিবেদিত দল যারা দুর্দান্ত সফটওয়্যার তৈরিতে আবেগী" },
  github: { title: "GitHub Activity", titleBn: "গিটহাব কার্যকলাপ", subtitle: "Our founder's open-source contributions and development activity", subtitleBn: "আমাদের প্রতিষ্ঠাতার ওপেন-সোর্স অবদান এবং ডেভেলপমেন্ট কার্যকলাপ" },
  testimonials: { title: "Client Testimonials", titleBn: "ক্লায়েন্ট প্রশংসাপত্র", subtitle: "What our clients say about working with ZiptoCode", subtitleBn: "ZiptoCode এর সাথে কাজ করার বিষয়ে আমাদের ক্লায়েন্টরা কি বলেন" },
  faq: { title: "Frequently Asked Questions", titleBn: "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী", subtitle: "Find answers to common questions about our services", subtitleBn: "আমাদের সেবা সম্পর্কে সাধারণ প্রশ্নের উত্তর খুঁজুন" },
  contact: { title: "Start Your Project", titleBn: "আপনার প্রজেক্ট শুরু করুন", subtitle: "Tell us about your project and we will get back to you within 24 hours", subtitleBn: "আপনার প্রজেক্ট সম্পর্কে আমাদের বলুন এবং আমরা ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করব" },
  emailSub: { title: "Stay Updated", titleBn: "আপডেট থাকুন", subtitle: "Subscribe to get notified about new projects and offers", subtitleBn: "নতুন প্রজেক্ট এবং অফার সম্পর্কে জানতে সাবস্ক্রাইব করুন" },
  certificate: { title: "Verified Certification", titleBn: "যাচাইকৃত সার্টিফিকেশন", subtitle: "Industry-recognized professional certification from Google", subtitleBn: "গুগল থেকে শিল্প-স্বীকৃত পেশাদার সার্টিফিকেশন" },
};

// ── MidPageCTA ──
export const midPageCTA = {
  heading: "Ready to Build Something Amazing?",
  headingBn: "কিছু অসাধারণ তৈরি করতে প্রস্তুত?",
  subtext: "Let us turn your idea into a powerful web application. Get started today with a free consultation.",
  subtextBn: "আমাদের আপনার আইডিয়াকে একটি শক্তিশালী ওয়েব অ্যাপ্লিকেশনে রূপান্তরিত করতে দিন। আজই একটি বিনামূল্যে পরামর্শ দিয়ে শুরু করুন।",
  cta: "Start Your Project",
  ctaBn: "আপনার প্রজেক্ট শুরু করুন",
};
