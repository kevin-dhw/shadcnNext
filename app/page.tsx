// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { checkUser } from "@/lib/clerkUser";

export default function Home() {
  const user = checkUser();
  console.log(user, "user");

  return (
    <div className="">
      <Button>按钮</Button>
    </div>
  );
}
