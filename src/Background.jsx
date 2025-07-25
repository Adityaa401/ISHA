import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import bgVideo from './assets/5.webm';
import { useNavigate } from 'react-router-dom';
import './index.css'

const AnimatedTypingText = ({ text, speed = 200, startTyping = true }) => {
  const [visibleText, setVisibleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  


  const index = useRef(0);
  
  

  useEffect(() => {
    if (!startTyping) return;

    const typingInterval = setInterval(() => {
      setVisibleText((prev) => prev + text.charAt(index.current));
      index.current += 1;
      if (index.current >= text.length) clearInterval(typingInterval);
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, startTyping]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <span>
      {visibleText}
      <span className={`${showCursor ? 'inline' : 'invisible'}`}>|</span>
    </span>
  );
};
// 1. Define this above BackgroundVideo
const ImageSequence = () => {
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const heartEmojis = ['❤️', '💖', '💘', '💕', '💞'];
  

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const nextIndex = (currentIndex + 1) % images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const left = Math.random() * 100;
      const size = 20 + Math.random() * 25;
      const emoji = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

      setFloatingHearts((prev) => [...prev, { id, left, size, emoji }]);

      setTimeout(() => {
        setFloatingHearts((prev) => prev.filter((h) => h.id !== id));
      }, 2000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-40 w-full flex justify-center relative px-4">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
  {floatingHearts.map((heart) => (
    <motion.div
      key={heart.id}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -200 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      style={{
        position: 'absolute',
        left: `${heart.left}%`,
        bottom: 0,
        fontSize: `${heart.size}px`,
      }}
    >
      {heart.emoji}
    </motion.div>
  ))}
</div>
    
      <div className="relative w-[280px] sm:w-[300px] h-[380px] sm:h-[400px]">
        {/* <div className="absolute -top-6 -left-6 sm:hidden text-2xl z-30">🌹</div> */}
        {/* Back (next) card preview */}
        <motion.div
  className="absolute -top-6 -left-6 text-2xl sm:text-4xl md:text-3xl z-30 text-pink-400 drop-shadow-lg"
  initial={{ y: 0, opacity: 0.8, rotate: -15 }}
  animate={{ y: [0, -6, 0], opacity: [0.8, 1, 0.8] }}
  transition={{
    duration: 2.2,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  🌹
</motion.div>

{/* 🌹 Bottom Right Rose */}
<motion.div
  className="absolute -bottom-6 -right-6 text-2xl sm:text-4xl md:text-3xl z-30 text-pink-400 drop-shadow-lg"
  initial={{ y: 0, opacity: 0.8, rotate: 15 }}
  animate={{ y: [0, 6, 0], opacity: [0.8, 1, 0.8] }}
  transition={{
    duration: 2.2,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  🌹
</motion.div>
        <motion.img
          key={`next-${nextIndex}`}
          src={images[nextIndex]}
          alt={`Next Image`}
          className="absolute w-full h-full object-cover rounded-xl shadow-md"
          style={{
            transform: 'rotate(-5deg)',
          }}
          initial={{ opacity: 0.3, scale: 0.95, y: 10 }}
          animate={{ opacity: 0.4, scale: 0.95, y: 10 }}
          transition={{ duration: 0.4 }}
        />

        {/* Front (current) image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={`current-${images[currentIndex]}`}
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            onClick={handleClick}
            className="absolute w-full h-full object-cover rounded-xl shadow-xl cursor-pointer z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        {/* <div className="absolute -bottom-6 -right-6 sm:hidden text-2xl z-30">🌹</div> */}
  
      </div>
     
    </div>
    
  );
};

// const DiagonalFloatingEmojis = () => {
//   const emojis = ['💌', '⭐', '🎁', '💬'];
  
//   return (
//     <div className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2 sm:left-4">
//       {emojis.map((emoji, index) => (
//         <motion.div
//           key={index}
//           initial={{ x: 0, y: 0, rotate: 0, opacity: 0 }}
//           animate={{
//             x: [0, 60],
//             y: [0, -80],
//             opacity: [0, 1, 0],
//             rotate: [0, 360],
//           }}
//           transition={{
//             duration: 3 + index,
//             repeat: Infinity,
//             delay: index * 0.5,
//           }}
//           className="text-xl sm:text-2xl md:text-3xl absolute"
//           style={{
//             top: `${index * 40}px`,
//           }}
//         >
//           {emoji}
//         </motion.div>
//       ))}
//     </div>
//   );
// };



const BackgroundVideo = () => {
  const [startTyping, setStartTyping] = useState(false);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={bgVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <motion.div
  className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30"
  initial={{ y: -200, opacity: 0 }}
  animate={{ y: 60, opacity: 1 }}
  transition={{
    type: "spring",
    stiffness: 120,
    damping: 12,
    delay: 1,
  }}
>
  <motion.div
    className="text-pink-500 playwrite-hu-1 text-2xl sm:text-4xl drop-shadow-md"
    animate={{ y: [0, 30, 0] }}
    transition={{ repeat: Infinity, duration: 2 }}
  >
    💖ISHUU💖
  </motion.div>
      </motion.div>


      {/* Sliding Box */}
      <motion.div
        className="fixed top-0 left-0 w-full flex justify-center p-2 sm:p-4 z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        onAnimationComplete={() => setStartTyping(true)} // Trigger typing after slide
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/30 text-white 
                        px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 
                        rounded-xl shadow-md w-[90%] sm:w-auto text-center">
          <h1 className="text-1.8xl sm:text-4xl playwrite-hu-1">
            <AnimatedTypingText
              text="TTHIS IS FOR MY BEAUTIFUL✨"
              speed={150}
              startTyping={startTyping}
            />
          </h1>
        </div>
      </motion.div>
      <div className="fixed top-[80px] sm:top-[100px] w-full flex justify-center z-10">
        <p className="text-white text-sm sm:text-base opacity-80">— from Aditya 💌</p>
      </div>

      <ImageSequence />
      {/* <FloatingEmojis /> */}
      {/* <DiagonalFloatingEmojis/> */}
      <div className="mt-6 flex justify-center z-30 px-4 sm:px-0">
  <motion.button
    onClick={() => {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
        navigate('/love-note'); // Replace with your target route
      }, 500);
    }}
    className="bg-white/20 text-pink-400 px-6 sm:px-8 py-2 sm:py-3 rounded-full 
               border border-white/30 backdrop-blur-sm shadow-lg 
               text-lg sm:text-2xl font-bold hover:scale-105 
               transition-all duration-300 w-full max-w-[240px]"
    whileTap={{ scale: 0.95 }}
    animate={clicked ? { scale: [1, 1.2, 1], rotate: [0, 3, -3, 0] } : {}}
    transition={{ duration: 0.4 }}
  >
    Click me ✨
  </motion.button>
      </div>


    </div>
       
  );
};

export default BackgroundVideo;
