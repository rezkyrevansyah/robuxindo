"use client";

import { MotionConfig } from "framer-motion";

export default function NoMotion({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="always" transition={{ duration: 0, delay: 0 }}>
      {children}
    </MotionConfig>
  );
}
