export interface Course {
  id: string;
  slug: string;
  badge: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  duration: string;
  fees: string;
  originalFees: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  highlights: string[];
  syllabus: string[];
  icon: string;
}

export const courses: Course[] = [
  {
    id: "1",
    slug: "beginner-stock-market-course",
    badge: "Most Popular",
    badgeColor: "bg-green-profit text-navy-900",
    title: "Beginner Stock Market Course",
    subtitle: "Your gateway to smart investing",
    duration: "2 Months",
    fees: "₹8,999",
    originalFees: "₹14,999",
    level: "Beginner",
    description:
      "Start your wealth-building journey with a strong foundation in stock market fundamentals. Perfect for absolute beginners with zero prior experience.",
    highlights: [
      "No prior experience needed",
      "Live market sessions",
      "Technical analysis basics",
      "Risk management fundamentals",
      "Certificate of completion",
      "Lifetime access to materials",
    ],
    syllabus: [
      "Introduction to Stock Markets & SEBI",
      "Understanding Demat & Trading Accounts",
      "Fundamental Analysis Basics",
      "Candlestick Patterns",
      "Support & Resistance Levels",
      "Moving Averages & Indicators",
      "Risk Management & Position Sizing",
      "Creating a Trading Plan",
    ],
    icon: "📈",
  },
  {
    id: "2",
    slug: "advanced-trading-masterclass",
    badge: "Best Value",
    badgeColor: "bg-blue-brand text-white",
    title: "Advanced Trading Masterclass",
    subtitle: "Master professional trading strategies",
    duration: "3 Months",
    fees: "₹18,999",
    originalFees: "₹29,999",
    level: "Advanced",
    description:
      "Take your trading to the next level with advanced technical analysis, algo trading introduction, and professional strategies used by institutional traders.",
    highlights: [
      "Advanced chart patterns",
      "Algo trading introduction",
      "F&O basics included",
      "Live trading sessions",
      "1-on-1 mentoring sessions",
      "Placement assistance",
    ],
    syllabus: [
      "Advanced Technical Analysis",
      "Elliott Wave Theory",
      "Fibonacci Retracements & Extensions",
      "Volume Price Analysis",
      "Futures & Options Introduction",
      "Algo Trading Concepts",
      "Portfolio Management",
      "Live Market Workshops",
    ],
    icon: "🚀",
  },
  {
    id: "3",
    slug: "options-trading-specialist",
    badge: "High Income",
    badgeColor: "bg-gold text-navy-900",
    title: "Options Trading Specialist",
    subtitle: "Master the most powerful financial instrument",
    duration: "6 Weeks",
    fees: "₹12,999",
    originalFees: "₹19,999",
    level: "Intermediate",
    description:
      "Become a professional options trader. Learn powerful strategies like Iron Condor, Straddle, Strangle, and Calendar spreads with live practice.",
    highlights: [
      "Options Greeks mastery",
      "7+ proven strategies",
      "Hedging techniques",
      "Live options trade execution",
      "Risk-defined strategies",
      "Income generation methods",
    ],
    syllabus: [
      "Options Basics: Calls & Puts",
      "Options Greeks: Delta, Gamma, Theta, Vega",
      "Bullish Strategies: Bull Call Spread, Bull Put Spread",
      "Bearish Strategies: Bear Put Spread, Bear Call Spread",
      "Neutral Strategies: Iron Condor, Butterfly",
      "Volatility Strategies: Straddle, Strangle",
      "Hedging Portfolio with Options",
      "Managing Losing Trades",
    ],
    icon: "⚡",
  },
];
