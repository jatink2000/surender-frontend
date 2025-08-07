// import React, { useEffect, useState } from 'react';
// import slide1 from '../assets/slide1.jpg';
// import slide2 from '../assets/slide2.jpg';

// const images = [slide1, slide2];

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='container m-auto'>

//     <div
//       key={currentIndex} // 👈 Force re-render on image change
//       className="relative h-screen overflow-hidden rounded-lg shadow-lg transition-all duration-1000 ease-in-out"
//       style={{
//         backgroundImage: `url(${images[currentIndex]})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >

//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//         {images.map((_, index) => (
//           <div
//           key={index}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-2' : 'bg-gray-400'
//             }`}
//             />
//         ))}
//       </div>

//       {/* Optional overlay or text */}
//             </div>
//     </div>
//   );
// };

// export default Hero;


// import React, { useEffect, useState } from 'react';
// import slide1 from '../assets/slide1.jpg';
// import slide2 from '../assets/slide2.jpg';

// const images = [slide1, slide2];

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 pt-10"> {/* same as navbar */}
//       <div
//         className="relative h-[500px] overflow-hidden rounded-lg shadow-lg transition-all duration-1000 ease-in-out"
//         style={{
//           backgroundImage: `url(${images[currentIndex]})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >


//         <div className='absolute top-30 left-10 '>
//           <span className='bg-yellow-300 px-4 rounded-2xl flex items-center'>Free Shipping- orders over $100</span>
//         </div>



//         {/* Dot indicators */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//           {images.map((_, index) => (
//             <div
//               key={index}
//               className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-4' : 'bg-gray-400 w-3'
//                 }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>

//   );
// };

// export default Hero;
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';

const slides = [
  {
    image: slide1,
    title: "Fresh Deals Everyday",
    description: "Get the best deals on groceries and more.",
    buttonText: "Shop Now",
    buttonLink: "/shop",
    offer: "Free delivery - orders over $100",
  },
  {
    image: slide2,
    title: "Organic & Healthy",
    description: "Fresh organic produce straight to your doorstep.",
    buttonText: "Explore",
    buttonLink: "/organic",
    offer: "First order discount 20%",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="w-full px-4 lg:px-20 pt-6"> {/* Full width with responsive padding */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-md">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url(${currentSlide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.6 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) nextSlide();
              if (info.offset.x > 100) prevSlide();
            }}
          >
            <div className="absolute inset-0 bg-black/10 flex flex-col justify-center px-6 md:px-10 lg:px-16 text-white">
              <span className="text-xs sm:text-sm md:text-base bg-yellow-400 text-black rounded-full px-3 py-1 mb-3 w-fit">
                {currentSlide.offer}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                {currentSlide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-4 max-w-lg">
                {currentSlide.description}
              </p>
              <Link
                to={currentSlide.buttonLink}
                className="text-sm sm:text-base bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition w-fit"
              >
                {currentSlide.buttonText}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-3' : 'bg-gray-400 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
