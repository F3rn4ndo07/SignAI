import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Benefits } from '@/components/landing/Benefits';
import { Sectors } from '@/components/landing/Sectors';
import { Compliance } from '@/components/landing/Compliance';
import { Testimonials } from '@/components/landing/Testimonials';
import { Faq } from '@/components/landing/Faq';
import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Benefits />
        <Sectors />
        <Compliance />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
