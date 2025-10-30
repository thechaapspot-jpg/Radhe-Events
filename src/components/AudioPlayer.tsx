import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Configure audio
    audio.loop = true;
    audio.volume = 0.3;
    audio.muted = true;

    // Add event listeners for debugging
    audio.addEventListener('loadeddata', () => {
      console.log('✅ Audio file loaded successfully');
    });

    audio.addEventListener('playing', () => {
      console.log('✅ Audio is now playing');
    });

    audio.addEventListener('error', (e) => {
      console.error('❌ Audio error:', audio.error);
    });

    // Try to start playing immediately
    const tryPlay = () => {
      audio.play()
        .then(() => {
          console.log('✅ Audio started (muted). Click the button to hear music!');
        })
        .catch((error) => {
          console.log('⚠️ Autoplay blocked:', error.message);
          console.log('Will start on first user interaction...');
        });
    };

    // Try playing immediately
    tryPlay();

    // Also try on any user interaction
    const handleInteraction = () => {
      if (audio.paused) {
        tryPlay();
      }
    };

    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });
    document.addEventListener('keydown', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      // First ensure it's playing
      if (audio.paused) {
        audio.play().catch(console.error);
      }
      // Then unmute
      audio.muted = false;
      setIsMuted(false);
      console.log('🔊 Audio unmuted');
    } else {
      // Mute the audio (keep playing)
      audio.muted = true;
      setIsMuted(true);
      console.log('🔇 Audio muted');
    }
  };

  return (
    <>
      <audio 
        ref={audioRef}
        src="/flute-music.mp3"
        preload="auto"
        loop
        muted
        autoPlay
        playsInline
      />
      
      <button
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
        title={isMuted ? 'Click to play music 🎵' : 'Click to mute music 🔇'}
        style={{ 
          position: 'fixed', 
          top: '100px', 
          right: '24px', 
          zIndex: 9999,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
          color: 'white',
          border: '2px solid white',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
        }}
      >
        {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
      </button>
    </>
  );
}
