import React from "react";

import { Navigations } from "../Navigations/Navigations";

export function Header() {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 shadow-md bg-[#262561] text-[#F7F53F] h-auto">
      <Navigations />
    </div>
  );
}
