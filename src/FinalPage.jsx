import bgVideo from './assets/5.mp4';
import './index.css'
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// const FunnyButtons = () => {
//   const [noBtnPosition, setNoBtnPosition] = useState({ top: 0, left: 0 });

//   const moveNoButton = () => {
//     const newTop = Math.random() * 200;
//     const newLeft = Math.random() * 200;
//     setNoBtnPosition({ top: newTop, left: newLeft });
//   };

//   return (
//     <div className="relative flex justify-center items-center h-[300px] sm:h-[400px] w-full mt-10 overflow-hidden">
//       {/* Yes Button */}
//       <button
//         className="px-6 py-3 bg-pink-600 text-white rounded-xl shadow-lg hover:bg-pink-700 transition duration-300 text-base sm:text-lg z-10"
//       >
//         Yes
//       </button>

//       {/* No Button that moves */}
//       <button
//         onMouseEnter={moveNoButton}    // for desktop
//         onTouchStart={moveNoButton}    // for mobile
//         style={{
//           position: 'absolute',
//           top: noBtnPosition.top,
//           left: noBtnPosition.left,
//         }}
//         className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl shadow-lg transition duration-300 text-base sm:text-lg z-10"
//       >
//         No
//       </button>
//     </div>
//   );
// };

const YesNoButtons = () => {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  const noTexts = [
    "No",
    "You sure?",
    "Really?",
    "Please say Yes!",
    "Don't do this 😢",
    "Pleaseee!!!"
  ];

  const handleNoClick = () => {
    if (clickCount < 6) {
      setClickCount(prev => prev + 1);
    }
  };

  const handleYesClick = () => {
    navigate('/last-page');
  };

  const isFinalClick = clickCount === 6;

  return (
    <div className="flex items-center justify-center min-h-screen w-full px-4 relative">
      {isFinalClick && (
        <button
          onClick={handleYesClick}
          className="fixed top-0 left-0 w-full h-full bg-pink-600 text-white flex items-center justify-center text-4xl font-bold z-50 transition-all duration-700"
        >
          Yes 💖
        </button>
      )}

      {!isFinalClick && (
        <div className="flex flex-col sm:flex-row gap-14 items-center justify-center w-full h-full">
          <button
            onClick={handleYesClick}
            className="bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition-all duration-500 text-base sm:text-lg"
            style={{
              transform: `scale(${1 + clickCount * 0.2})`,
              padding: `${12 + clickCount * 4}px ${24 + clickCount * 8}px`,
              fontSize: `${16 + clickCount * 2}px`
            }}
          >
            Yes
          </button>

          <button
            onClick={handleNoClick}
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 text-base sm:text-lg"
          >
            {noTexts[clickCount] || "😅"}
          </button>
        </div>
      )}
    </div>
  );
};



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
        className="absolute top-40 right-10 z-20"
        animate={{ y: [0, -topRight.bounce?.distance || 20, 0] }}
        transition={{
          repeat: Infinity,
          duration: parseFloat(topRight.bounce?.duration || 2),
          ease: 'easeInOut',
        }}
      >
        <div className="text-pink-500 text-xl sm:text-3xl md:text-4xl playwrite-hu-1 drop-shadow-md select-none pointer-events-none">
          {topRight.emojis?.left} PLEASE {topRight.emojis?.right}
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
          {bottomLeft.emojis?.left} PLEASE {bottomLeft.emojis?.right}
        </div>
      </motion.div>
    </>
  );
};


const FinalPage = () => {
 
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
      <div className="fixed top-0 left-0 w-full p-4 z-10 flex justify-center animate-slideDown">
  <div className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-4 sm:px-6 py-3 rounded-xl shadow-md w-full max-w-md">
    <h1 className="text-base sm:text-lg playwrite-hu-2 text-center">
      I want to ask u that can I get your
    </h1>
    <h1 className="text-base sm:text-lg playwrite-hu-2 text-center">
      Number...
    </h1>
    <h1 className="text-sm sm:text-base text-pink-800 playwrite-hu-1 text-center mt-1">
      "Promise I won't make a call without your permission..."
    </h1>
  </div>
</div>

      <FixedCornerIshuus />
      {/* <div className="flex items-center justify-center min-h-screen w-full px-4">
        <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-pink-600 text-white rounded-lg shadow-md hover:bg-pink-700 transition duration-300 text-base sm:text-lg">
                Yes
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 text-base sm:text-lg">
                No
            </button>
        </div>
      </div> */}
      {/* <FunnyButtons/> */}
      <YesNoButtons/>

    </div>
  );
};

export default FinalPage;
