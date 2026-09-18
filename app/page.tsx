'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import HowItWorks from './components/HowItWorks';
import AppFeatures from './components/AppFeatures';
import Dashboard from './components/Dashboard';
import ForBusiness from './components/ForBusiness';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <AppFeatures />
      <Dashboard />
      <ForBusiness />
      <About />
      <CTA />
      <Footer />
    </>
  );
}
