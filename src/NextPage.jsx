import { useEffect, useRef, useState } from 'react';
import bgVideo from './assets/5.mp4';
import './index.css'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// import { useEffect, useState } from 'react';





const DelayedBox = () => {
  const [show, setShow] = useState(false);
   const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      id="delayed-box"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      <div className="bg-pink-500 backdrop-blur-md border border-white/30 text-white px-6 py-4 rounded-2xl shadow-xl max-w-md w-full text-center">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">
          Hello Ishuuuuu💝💝
        </h2>
        <p className="text-sm sm:text-base">
          Like, i want to ask u something....
          Woh nhi jo tum sochh rhi ho 😂😂
        </p>
        <p className="text-sm sm:text-base">
          Paglet...
        </p>
        <p className="text-sm sm:text-base">
          👇
        </p>
        <div className="mt-6 flex justify-center items-center z-30 px-4 sm:px-0">
  <motion.button
    onClick={() => {
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
        navigate('/final-page'); // Replace with your actual route
      }, 500);
    }}
    className="bg-white/20 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full 
               border border-white/30 backdrop-blur-sm shadow-lg 
               text-base sm:text-xl font-bold hover:scale-105 
               transition-all duration-300 w-full max-w-[240px]"
    whileTap={{ scale: 0.95 }}
    animate={clicked ? { scale: [1, 1.2, 1], rotate: [0, 3, -3, 0] } : {}}
    transition={{ duration: 0.4 }}
  >
    Next ✨
  </motion.button>
</div>

      </div>
      
    </motion.div>
    
  );
};

// const NextButton = () => {
//   const [show, setShow] = useState(false);
//   const navigate = useNavigate();
//   const boxRef = useRef(null);
//   const [boxBottom, setBoxBottom] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShow(true);
//       const box = document.getElementById('delayed-box');
//       if (box) {
//         const rect = box.getBoundingClientRect();
//         setBoxBottom(rect.bottom + window.scrollY);
//       }
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (!show) return null;

//   return (
//     <motion.div
//       className="absolute left-1/2 transform -translate-x-1/2 z-30"
//       style={{ top: `${boxBottom + 16}px` }} // 16px spacing below box
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.6, delay: 0.2 }}
//     >
//       <motion.button
//         onClick={() => navigate('/final-page')}
//         className="px-6 py-2 rounded-full text-white bg-white/10 backdrop-blur-md border border-white/30 shadow-lg hover:bg-white/20 transition text-sm sm:text-base"
//         animate={{ scale: [1, 1.15, 1] }}
//         transition={{ duration: 1.2, repeat: Infinity }}
//       >
//         ❤️ Next ❤️
//       </motion.button>
//     </motion.div>
//   );
// };



const getRandomEmoji = () => {
  const emojis = ['💘', '💞', '💓', '💗', '💖', '💝', '💟'];
  const left = emojis[Math.floor(Math.random() * emojis.length)];
  const right = emojis[Math.floor(Math.random() * emojis.length)];
  return { left, right };
};

const getRandomBounce = () => {
  const distance = Math.floor(Math.random() * 15) + 15; // 15–30px
  const duration = (Math.random() * 1.5 + 1.5).toFixed(2); // 1.5–3s
  return { distance, duration };
};

const FixedCornerIshuus = () => {
  const [topRight, setTopRight] = useState({});
  const [bottomLeft, setBottomLeft] = useState({});

  useEffect(() => {
    setTopRight({
      emojis: getRandomEmoji(),
      bounce: getRandomBounce(),
    });
    setBottomLeft({
      emojis: getRandomEmoji(),
      bounce: getRandomBounce(),
    });
  }, []);

  return (
    <>
      {/* Top-Right ISHUU */}
      <motion.div
        className="absolute top-20 right-10 z-20"
        animate={{ y: [0, -topRight.bounce?.distance || 20, 0] }}
        transition={{
          repeat: Infinity,
          duration: parseFloat(topRight.bounce?.duration || 2),
          ease: 'easeInOut',
        }}
      >
        <div className="text-pink-500 text-xl sm:text-3xl md:text-4xl playwrite-hu-1 drop-shadow-md select-none pointer-events-none">
          {topRight.emojis?.left} ISHUU {topRight.emojis?.right}
        </div>
      </motion.div>

      {/* Bottom-Left ISHUU */}
      <motion.div
        className="absolute bottom-20 left-10 z-20"
        animate={{ y: [0, bottomLeft.bounce?.distance || 20, 0] }}
        transition={{
          repeat: Infinity,
          duration: parseFloat(bottomLeft.bounce?.duration || 2.5),
          ease: 'easeInOut',
        }}
      >
        <div className="text-pink-400 text-xl sm:text-3xl md:text-4xl playwrite-hu-1 drop-shadow-md select-none pointer-events-none">
          {bottomLeft.emojis?.left} ISHUU {bottomLeft.emojis?.right}
        </div>
      </motion.div>
    </>
  );
};




const AnimatedTypingText = ({ text, speed = 100 }) => {
  const [visibleText, setVisibleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const index = useRef(0);

  // Typing effect
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setVisibleText((prev) => prev + text.charAt(index.current));
      index.current += 1;
      if (index.current >= text.length) clearInterval(typingInterval);
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  // Blinking cursor
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

const LoveNote = () => {
 
  return (
    <div className="relative w-full h-screen overflow-hidden">
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
      <FixedCornerIshuus />
      <DelayedBox/>
      {/* <NextButton /> */}
    
      

      {/* Animated Transparent Top Box */}
      <div className="fixed top-0 left-0 w-full p-4 z-10 flex justify-center animate-slideDown">
        <div className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-xl shadow-md">
          <h1 className="text-lg playwrite-hu-1">
            <AnimatedTypingText text="Heello Beautifulll......" speed={200} />
          </h1>
        </div>
      </div>

      
    </div>
  );
};

export default LoveNote;
