import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "../components/Hero";
import Grid from "@/components/Grid";
import { navItems } from "@/components/data";
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("@/components/Proj"), {
  ssr: false,
});




export default function Home() {
  return (
   <main className ="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden
   mx-auto sm:px-10 px-5">
    <div className = "max-w-7xl w-full">
    <FloatingNav navItems={navItems} />
      {/* <Hero />
        <Grid />
        <Testimonials /> */}
    </div>
   </main>
  );
}
