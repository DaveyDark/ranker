import { getUsers } from "@/lib/actions/user.action";
import React from "react";

const Page = () => {
  getUsers();
  return <div>Home Page</div>;
};

export default Page;
