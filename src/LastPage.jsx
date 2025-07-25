import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import bgVideo from './assets/2.mp4'; // Adjust path if needed

const LastPage = () => {
  useEffect(() => {
  const interval = setInterval(() => {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#ff69b4', '#ff1493', '#ffb6c1'],
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#ff69b4', '#ff1493', '#ffb6c1'],
    });
  }, 300); // Every 300ms

  return () => clearInterval(interval); // Cleanup on unmount
}, []);


  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Animated Text Box */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="bg-white/10 backdrop-blur-md border border-white/30 text-white 
                   px-6 py-4 sm:px-10 sm:py-6 rounded-2xl shadow-lg text-center 
                   max-w-[90%] sm:max-w-md"
      >
        <h1 className="text-2xl sm:text-4xl font-bold font-playwrite animate-pulse">
          Yeah, thanku Ishuuuu 💖
        </h1>
      </motion.div>
    </div>
  );
};

export default LastPage;
