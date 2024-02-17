import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function Header() {
  const user=useUser()
  return (
    {user? }

  );
}

export default Header;
