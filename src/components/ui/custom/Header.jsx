import React from "react";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center ">
      <img src="/logo2.png" width="100" height="100" alt="Travel Gpt Logo" />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default Header;
