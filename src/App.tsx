import { Contact } from './components/Contact';
import { Financing } from './components/Financing';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pricing } from './components/Pricing';
import { ServiceStrip } from './components/ServiceStrip';
import { Services } from './components/Services';
import { Showroom } from './components/Showroom';
import { StickyCall } from './components/StickyCall';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceStrip />
        <Services />
        <Financing />
        <Showroom />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <StickyCall />
    </>
  );
}
