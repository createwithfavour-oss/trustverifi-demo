import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Comparison from './components/Comparison';
import HowItWorks from './components/HowItWorks';
import Pillars from './components/Pillars';
import WhoItsFor from './components/WhoItsFor';
import BrokenAlternatives from './components/BrokenAlternatives';
import TrustSignals from './components/TrustSignals';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('individual');

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Comparison />
        <HowItWorks />
        <Pillars activeTab={activeTab} setActiveTab={setActiveTab} />
        <WhoItsFor activeTab={activeTab} setActiveTab={setActiveTab} />
        <BrokenAlternatives />
        <TrustSignals />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
