"use client";

import dynamic from "next/dynamic";

export const Particles = dynamic(
  () => import("@/components/ui/particles").then((mod) => ({ default: mod.Particles })),
  {
    ssr: false,
    loading: () => null, 
  }
);

export const DottedMap = dynamic(
  () => import("@/components/ui/dotted-map").then((mod) => ({ default: mod.DottedMap })),
  {
    ssr: false,
  }
);
