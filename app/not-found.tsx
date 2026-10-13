import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center chart-bg">
      <div className="text-center px-4">
        <div className="text-8xl font-heading font-bold gradient-text mb-4">404</div>
        <h1 className="font-heading font-bold text-3xl text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. But don&apos;t let that stop
          your trading journey!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="btn-primary">
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link href="/demo" className="btn-secondary">
            Book Free Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
