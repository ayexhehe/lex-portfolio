'use client';
import { navItems } from "@/components/data";
import dynamic from "next/dynamic";
import { FloatingNav } from "@/components/ui/floating-navbar";

const Hero = dynamic(() => import("@/components/Hero").then(mod => mod.default), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid").then(mod => mod.default), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Proj").then(mod => mod.default), { ssr: false });

export default function HomePageClient() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Testimonials />
      </div>
    </main>
  );
}
