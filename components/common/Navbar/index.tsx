import React from "react";
import { checkUser } from "@/lib/clerkUser";

export default function Navbar() {
  const user = checkUser();
  console.log(user, "user");

  return (
    <div>
      Navbar<span></span>
    </div>
  );
}
