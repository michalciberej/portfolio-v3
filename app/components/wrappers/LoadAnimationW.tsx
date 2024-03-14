"use client";

import { useEffect } from "react";
import loadAnimation from "@/app/animations/loadAnimation";

const LoadAnimationW = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    loadAnimation();
  }, []);
  return <>{children}</>;
};

export default LoadAnimationW;
