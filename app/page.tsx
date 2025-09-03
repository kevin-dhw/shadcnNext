// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { checkUser } from "@/lib/clerkUser";
import { ThemeProvider } from "next-themes";

export default function Home() {
  const user = checkUser();
  console.log(user, "user");

  return (
    // <ThemeProvider>
    <div className="">
      <Button>按钮</Button>
    </div>
    // </ThemeProvider>
  );
}
