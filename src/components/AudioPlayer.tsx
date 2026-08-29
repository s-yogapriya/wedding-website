import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingAudio } from '../utils/audioEngine';

interface AudioPlayerProps {
  isUnlocked: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ isUnlocked }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isUnlocked) {
      weddingAudio.play();
      setIsPlaying(true);
      setIsMuted(false);
    }
  }, [isUnlocked]);

  const handleToggle = () => {
    if (!isPlaying) {
      weddingAudio.play();
      setIsPlaying(true);
      setIsMuted(false);
    } else {
      const muted = weddingAudio.toggleMute();
      setIsMuted(muted);
    }
  };

  if (!isUnlocked) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-500 animate-fade-in">
      <button
        onClick={handleToggle}
        aria-label={isMuted ? 'Unmute traditional wedding music' : 'Mute traditional wedding music'}
        className="group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-[#FAF6F0]/90 hover:bg-[#FAF6F0] text-[#4A0E17] border border-[#C5A059]/60 shadow-[0_8px_20px_-4px_rgba(74,14,23,0.3)] backdrop-blur-md transition-all duration-300 active:scale-95"
      >
        {/* Animated Equalizer or Music Icon */}
        <div className="relative flex items-center justify-center w-6 h-6">
          {!isMuted && isPlaying ? (
            <div className="flex items-end justify-center gap-[2.5px] h-3.5 w-4">
              <span className="w-[2.5px] bg-[#B88A3B] rounded-full animate-[flameFlicker_1.2s_ease-in-out_infinite] h-3.5" />
              <span className="w-[2.5px] bg-[#B88A3B] rounded-full animate-[flameFlicker_1.6s_ease-in-out_infinite_0.2s] h-2" />
              <span className="w-[2.5px] bg-[#B88A3B] rounded-full animate-[flameFlicker_1.4s_ease-in-out_infinite_0.4s] h-3" />
            </div>
          ) : (
            <Music className="w-4 h-4 text-[#8C6623]" />
          )}
        </div>

        {/* Text Label for Clarity */}
        <span className="text-[11px] tracking-[0.18em] uppercase font-cinzel font-medium text-[#4A0E17] hidden sm:inline-block">
          {isMuted ? 'Muted' : 'Music'}
        </span>

        {/* Volume Icon */}
        <div className="text-[#8C6623] group-hover:text-[#4A0E17] transition-colors">
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </div>

        {/* Subtle Outer Glowing Gold Ring */}
        <span className="absolute -inset-0.5 rounded-full border border-[#D4AF37]/30 pointer-events-none group-hover:border-[#D4AF37]/70 transition-colors" />
      </button>
    </div>
  );
};
