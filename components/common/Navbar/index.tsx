import React from "react";
import { checkUser } from "@/lib/clerkUser";
import { UserButton, SignInButton, SignedOut } from "@clerk/nextjs";

export default function Navbar() {
  const user = checkUser();
  console.log(user, "user");

  return (
    <div>
      <UserButton />
      <SignedOut>退出登录</SignedOut>
      <div>3445</div>
      Navbar<span></span>
    </div>
  );
}
