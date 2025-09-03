// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { checkUser } from "@/lib/clerkUser";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  const user = checkUser();
  console.log(user, "user");
  return (
    <div className="">
      <SignInButton>
        <button className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 hover:from-emerald-700 hover:via-green-600 hover:to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5">
          <span className="relative z-10 flex items-center justify-center gap-2">
            Get Started Free
            <span className="text-lg">→</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
        </button>
      </SignInButton>
    </div>
  );
}
