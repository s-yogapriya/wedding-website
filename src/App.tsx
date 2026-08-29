import { useState } from 'react';
import { WelcomeCard } from './components/WelcomeCard';
import { PetalShower } from './components/PetalShower';
import { AudioPlayer } from './components/AudioPlayer';
import { HeroSection } from './components/HeroSection';
import { CountdownSection } from './components/CountdownSection';
import { MuhurthamDetails } from './components/MuhurthamDetails';
import { InvitationBlessings } from './components/InvitationBlessings';
import { ClosingSection } from './components/ClosingSection';

export function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleOpenInvitation = () => {
    setIsUnlocked(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF6F0] text-[#2A1414] overflow-x-hidden selection:bg-[#4A0E17] selection:text-[#FAF6F0]">
      {/* 1. Full Screen Opening Greeting Card (Envelope / Wax Seal) */}
      <WelcomeCard onOpen={handleOpenInvitation} isUnlocked={isUnlocked} />

      {/* 2. Floating Ambient Flower Petals & Sparkle Shower */}
      <PetalShower />

      {/* 3. Floating Minimal Traditional Audio Controller */}
      <AudioPlayer isUnlocked={isUnlocked} />

      {/* Main Wedding Experience (Visible and unlocked after opening) */}
      <main
        className={`transition-opacity duration-1000 ${
          isUnlocked ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'
        }`}
      >
        {/* Section 2: Main Editorial Couple Hero with Couple Photo #1 */}
        <HeroSection />

        {/* Section 4: Counting Down To Forever */}
        <CountdownSection />

        {/* Section 5: Wedding Day Details, Muhurtham & Venue with Couple Photo #2 */}
        <MuhurthamDetails />

        {/* Section 6 & 7: Editorial Invitation Message & Family Blessings */}
        <InvitationBlessings />

        {/* Section 8: Closing Card with Couple Photo #3 */}
        <ClosingSection />
      </main>
    </div>
  );
}

export default App;
