export interface Testimonial {
  id: string;
  name: string;
  city: string;
  course: string;
  courseCategory: 'beginner' | 'advanced' | 'options';
  rating: number;
  feedback: string;
  profit: string;
  avatar: string;
  verified: boolean;
  youtubeId?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    city: "Pune",
    course: "Beginner Stock Market Course",
    courseCategory: "beginner",
    rating: 5,
    feedback:
      "I had zero knowledge about stock markets before joining L&T. Within 2 months, I made my first profitable trade. The live sessions are absolutely amazing. Sir explains every concept with real examples.",
    profit: "₹12,000 in first month",
    avatar: "RS",
    verified: true,
  },
  {
    id: "2",
    name: "Priya Desai",
    city: "Pune",
    course: "Options Trading Specialist",
    courseCategory: "options",
    rating: 5,
    feedback:
      "Options trading seemed so complex before this course. Now I consistently earn from Iron Condor and Straddle strategies every week. Highly recommended for serious learners!",
    profit: "₹35,000/month consistent",
    avatar: "PD",
    verified: true,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "3",
    name: "Amit Kulkarni",
    city: "Pune",
    course: "Advanced Trading Masterclass",
    courseCategory: "advanced",
    rating: 5,
    feedback:
      "The advanced course changed my entire approach to trading. I now use Fibonacci and Elliott Wave in my daily analysis. Already recouped my course fees 5x in 3 months.",
    profit: "5x course fees recovered",
    avatar: "AK",
    verified: true,
  },
  {
    id: "4",
    name: "Sneha Patil",
    city: "Pune",
    course: "Beginner Stock Market Course",
    courseCategory: "beginner",
    rating: 5,
    feedback:
      "As a housewife, I was skeptical. But L&T's teaching style is so simple and practical. Now I manage my own investment portfolio confidently. Thank you sir!",
    profit: "Portfolio up 40% YoY",
    avatar: "SP",
    verified: true,
  },
  {
    id: "5",
    name: "Vikas Joshi",
    city: "Pune",
    course: "Options Trading Specialist",
    courseCategory: "options",
    rating: 5,
    feedback:
      "Best options trading course in Pune. The Greeks explanation, the live trade sessions, the personalized feedback — everything is top class. I left my 9-5 job after 6 months.",
    profit: "Left job, full-time trader",
    avatar: "VJ",
    verified: true,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "6",
    name: "Kavita Mehta",
    city: "Pune",
    course: "Advanced Trading Masterclass",
    courseCategory: "advanced",
    rating: 5,
    feedback:
      "I've taken courses online but nothing compares to L&T's live approach. Real-time chart analysis and live trade execution taught me more in 3 months than years of self-study.",
    profit: "₹50,000+ monthly",
    avatar: "KM",
    verified: true,
  },
  {
    id: "7",
    name: "Suresh Nair",
    city: "Pune",
    course: "Beginner Stock Market Course",
    courseCategory: "beginner",
    rating: 5,
    feedback:
      "Risk management alone was worth the entire course fee! I no longer make impulsive trades. My win rate improved from 30% to 70% in just 2 months. Incredible value.",
    profit: "70% win rate achieved",
    avatar: "SN",
    verified: true,
  },
  {
    id: "8",
    name: "Neha Bhosale",
    city: "Pune",
    course: "Options Trading Specialist",
    courseCategory: "options",
    rating: 5,
    feedback:
      "The options course gave me a completely new income stream. Theta decay strategies alone generate steady monthly income. I'm now helping my family financially. Thank you L&T!",
    profit: "New income stream created",
    avatar: "NB",
    verified: true,
  },
  {
    id: "9",
    name: "Deepak Wagh",
    city: "Pune",
    course: "Advanced Trading Masterclass",
    courseCategory: "advanced",
    rating: 5,
    feedback:
      "World-class teaching in Pune. I compared many institutes before choosing L&T and I'm so glad I did. The 1-on-1 mentoring sessions are invaluable. Completely worth every rupee.",
    profit: "Consistent 15% monthly returns",
    avatar: "DW",
    verified: true,
  },
];
