import { currentUser } from "@clerk/nextjs/server";

const userHooks = () => {
  const user = currentUser();
  return user;
};

export default userHooks;
