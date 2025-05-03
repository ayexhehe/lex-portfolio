'use client';

import dynamic from 'next/dynamic';
import { navItems } from '@/components/data';

const FloatingNav = dynamic(() => import('@/components/ui/floating-navbar').then(mod => mod.FloatingNav), { ssr: false });
const Hero = dynamic(() => import('@/components/Hero').then(mod => mod.default), { ssr: false });
const Grid = dynamic(() => import('@/components/Grid').then(mod => mod.default), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Proj').then(mod => mod.default), { ssr: false });

const DynamicSections = () => {
  return (
    <>
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <Testimonials />
    </>
  );
};

export default DynamicSections;
