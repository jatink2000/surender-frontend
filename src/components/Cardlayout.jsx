// import React, { useEffect, useState } from 'react';

// // 🧠 Your image imports stay the same
// import categorycolddrinksjuices from '../assets/featuredimages/category-cold-drinks-juices.jpg'
// import categoryfruitsvegetables from '../assets/featuredimages/category-fruits-vegetables.jpg'
// import categoryinstantfood from '../assets/featuredimages/category-instant-food.jpg'
// import categorysnackmunchies from '../assets/featuredimages/category-snack-munchies.jpg'
// import categorypetcare from '../assets/featuredimages/category-pet-care.jpg'
// import categoryteacoffeedrinks from '../assets/featuredimages/category-tea-coffee-drinks.jpg'
// import categorydairybreadeggs from '../assets/featuredimages/category-dairy-bread-eggs.jpg'

// const cardsdata = [
//   { id: categorycolddrinksjuices, title: 'Sweet Drinks' },
//   { id: categoryfruitsvegetables, title: 'Fruits & Veggies' },
//   { id: categoryinstantfood, title: 'Instant Foods' },
//   { id: categorysnackmunchies, title: 'Snacks' },
//   { id: categorypetcare, title: 'Pet Food' },
//   { id: categoryteacoffeedrinks, title: 'Coffee' },
//   { id: categorydairybreadeggs, title: 'Dairy' },
//   { id: categorydairybreadeggs, title: 'Milk & Eggs' },
// ];

// const Cardlayout = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [fade, setFade] = useState(true); // 🆕 fade toggle
//   const cardsPerPage = 4;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false); // Start fade-out

//       setTimeout(() => {
//         setStartIndex((prev) => (prev + cardsPerPage) % cardsdata.length);
//         setFade(true); // Start fade-in
//       }, 300); // Match transition duration
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const visibleCards = cardsdata.slice(startIndex, startIndex + cardsPerPage);
//   const cardsToShow =
//     visibleCards.length === cardsPerPage
//       ? visibleCards
//       : [...visibleCards, ...cardsdata.slice(0, cardsPerPage - visibleCards.length)];

//   return (
//     <div className="max-w-6xl mx-auto px-4 pt-10">
//       <h1 className="text-xl font-semibold mb-4">Featured Categories</h1>

//       <div className="w-full overflow-hidden">
//         {/* 🆕 Add transition and opacity classes here */}
//         <div
//           className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 transform transition-opacity duration-500 ${
//             fade ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           {cardsToShow.map((card, index) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-200 p-8 shadow rounded"
//             >
//               <img
//                 src={card.id}
//                 alt={card.title}
//                 className="w-full h-auto object-contain"
//               />
//               <h2 className="text-md font-semibold mt-2 text-center">{card.title}</h2>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cardlayout;


// import React, { useEffect, useRef, useState } from 'react';

// import categorycolddrinksjuices from '../assets/featuredimages/category-cold-drinks-juices.jpg'
// import categoryfruitsvegetables from '../assets/featuredimages/category-fruits-vegetables.jpg'
// import categoryinstantfood from '../assets/featuredimages/category-instant-food.jpg'
// import categorysnackmunchies from '../assets/featuredimages/category-snack-munchies.jpg'
// import categorypetcare from '../assets/featuredimages/category-pet-care.jpg'
// import categoryteacoffeedrinks from '../assets/featuredimages/category-tea-coffee-drinks.jpg'
// import categorydairybreadeggs from '../assets/featuredimages/category-dairy-bread-eggs.jpg'

// const cardsdata = [
//   { id: categorycolddrinksjuices, title: 'Sweet Drinks' },
//   { id: categoryfruitsvegetables, title: 'Fruits & Veggies' },
//   { id: categoryinstantfood, title: 'Instant Foods' },
//   { id: categorysnackmunchies, title: 'Snacks' },
//   { id: categorypetcare, title: 'Pet Food' },
//   { id: categoryteacoffeedrinks, title: 'Coffee' },
//   { id: categorydairybreadeggs, title: 'Dairy' },
//   { id: categorydairybreadeggs, title: 'Milk & Eggs' },
// ];

// const Cardlayout = () => {
//   const cardsPerPage = 4;
//   const totalSlides = Math.ceil(cardsdata.length / cardsPerPage);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [transitionEnabled, setTransitionEnabled] = useState(true);
//   const trackRef = useRef();

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNextSlide();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   // Slides grouped into sets of 4
//   const slides = [];
//   for (let i = 0; i < cardsdata.length; i += cardsPerPage) {
//     slides.push(cardsdata.slice(i, i + cardsPerPage));
//   }

//   // 👇 Clone first slide at the end for infinite illusion
//   const extendedSlides = [...slides, slides[0]];

//   const goToNextSlide = () => {
//     if (currentSlide < totalSlides) {
//       setCurrentSlide(currentSlide + 1);
//       setTransitionEnabled(true);
//     } else {
//       // Reached clone slide, reset without animation
//       setTransitionEnabled(true);
//       setCurrentSlide(currentSlide + 1);

//       setTimeout(() => {
//         setTransitionEnabled(false); // Disable animation
//         setCurrentSlide(0); // Jump back to original first
//       }, 500); // Match transition duration
//     }
//   };

//   const handleManualNext = () => {
//     goToNextSlide();
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 pt-10 relative">
//       {/* ✅ Title + Arrows on right */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-xl font-semibold">Featured Categories</h1>
//         <div className="flex space-x-2">
//           <button
//             onClick={handleManualNext}
//             className="bg-white border shadow p-2 rounded-full hover:bg-gray-100"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
//               viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Carousel Viewport */}
//       <div className="overflow-hidden w-full">
//         <div
//           ref={trackRef}
//           className="flex"
//           style={{
//             width: `${extendedSlides.length * 100}%`,
//             transform: `translateX(-${currentSlide * (100 / extendedSlides.length)}%)`,
//             transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none',
//           }}
//         >
//           {extendedSlides.map((group, index) => (
//             <div
//               key={index}
//               className="flex w-full flex-shrink-0"
//               style={{ width: `${100 / extendedSlides.length}%` }}
//             >
//               {group.map((card, i) => (
//                 <div
//                   key={i}
//                   className="w-full sm:w-1/2 md:w-1/4 px-2"
//                 >
//                   <div className="bg-white border border-gray-200 p-4 shadow rounded h-full flex flex-col items-center justify-center">
//                     <img
//                       src={card.id}
//                       alt={card.title}
//                       className="w-full h-auto object-contain"
//                     />
//                     <h2 className="text-md font-semibold mt-2 text-center">
//                       {card.title}
//                     </h2>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cardlayout;




// import React, { useEffect, useState } from 'react';
// import categorycolddrinksjuices from '../assets/featuredimages/category-cold-drinks-juices.jpg'
// import categoryfruitsvegetables from '../assets/featuredimages/category-fruits-vegetables.jpg'
// import categoryinstantfood from '../assets/featuredimages/category-instant-food.jpg'
// import categorysnackmunchies from '../assets/featuredimages/category-snack-munchies.jpg'
// import categorypetcare from '../assets/featuredimages/category-pet-care.jpg'
// import categoryteacoffeedrinks from '../assets/featuredimages/category-tea-coffee-drinks.jpg'
// import categorydairybreadeggs from '../assets/featuredimages/category-dairy-bread-eggs.jpg'


// const cardsData = [
//   { id: categorycolddrinksjuices, title: 'Sweet Drinks' },
//   { id: categoryfruitsvegetables, title: 'Fruits & Veggies' },
//   { id: categoryinstantfood, title: 'Instant Foods' },
//   { id: categorysnackmunchies, title: 'Snacks' },
//   { id: categorypetcare, title: 'Pet Food' },
//   { id: categoryteacoffeedrinks, title: 'Coffee' },
//   { id: categorydairybreadeggs, title: 'Dairy' },
//   { id: categorydairybreadeggs, title: 'Milk & Eggs' },
// ];

// const CardLayout = () => {
//   const cardsPerPage = 4;
//   const [startIndex, setStartIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStartIndex((prevIndex) => (prevIndex + cardsPerPage) % cardsData.length);
//     }, 3000); // scroll every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const visibleCards = cardsData.slice(startIndex, startIndex + cardsPerPage);

//   // Handle wrap around if not enough cards left
//   const cardsToShow =
//     visibleCards.length === cardsPerPage
//       ? visibleCards
//       : [...visibleCards, ...cardsData.slice(0, cardsPerPage - visibleCards.length)];

//   return (
//     <div className="overflow-hidden w-full max-w-6xl mx-auto p-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-500">
//         {cardsToShow.map((card) => (
//           <div key={card.id} className="bg-white p-10 shadow rounded justify-between flex flex-col  ">
//             <img src={card.id} alt="" />
//             <h2 className="text-lg font-semibold  ">{card.title}</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardLayout;




import React, { useEffect, useState } from 'react';
import categorycolddrinksjuices from '../assets/featuredimages/category-cold-drinks-juices.jpg';
import categoryfruitsvegetables from '../assets/featuredimages/category-fruits-vegetables.jpg';
import categoryinstantfood from '../assets/featuredimages/category-instant-food.jpg';
import categorysnackmunchies from '../assets/featuredimages/category-snack-munchies.jpg';
import categorypetcare from '../assets/featuredimages/category-pet-care.jpg';
import categoryteacoffeedrinks from '../assets/featuredimages/category-tea-coffee-drinks.jpg';
import categorydairybreadeggs from '../assets/featuredimages/category-dairy-bread-eggs.jpg';
import grocerybanner from '../assets/featuredimages/grocery-banner.png';
import grocerybanner2 from '../assets/featuredimages/grocery-banner-2.jpg';

const cardsData = [
  { id: 1, image: categorycolddrinksjuices, title: 'Sweet Drinks' },
  { id: 2, image: categoryfruitsvegetables, title: 'Fruits & Veggies' },
  { id: 3, image: categoryinstantfood, title: 'Instant Foods' },
  { id: 4, image: categorysnackmunchies, title: 'Snacks' },
  { id: 5, image: categorypetcare, title: 'Pet Food' },
  { id: 6, image: categoryteacoffeedrinks, title: 'Coffee' },
  { id: 7, image: categorydairybreadeggs, title: 'Dairy' },
  { id: 8, image: categorydairybreadeggs, title: 'Milk & Eggs' },
];

const CardLayout = () => {
  const [translateX, setTranslateX] = useState(0);
  const cardWidth = 260;

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => {
        const maxTranslate = cardWidth * cardsData.length;
        const newTranslate = prev + cardWidth;
        return newTranslate >= maxTranslate ? 0 : newTranslate;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Title */}
      <div className="w-full px-4 lg:px-20 mt-16 mb-4">
        <h1 className="font-medium text-2xl">Featured Categories</h1>
      </div>

      {/* Auto-scrolling Cards */}
     <div className="overflow-hidden w-full px-4 lg:px-20">
  <div className="relative">
    <div
      className="flex transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${translateX}px)` }}
    >
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="min-w-[300px] sm:min-w-[320px] bg-white p-5 sm:p-6 m-2 shadow rounded flex flex-col items-center"
        >
          <img
            src={card.image}
            alt={card.title}
            className="h-36 w-36 object-contain mb-2"
          />
          <h2 className="text-center font-semibold text-sm sm:text-base">
            {card.title}
          </h2>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Promotional Banners */}
      <div className="w-full px-4 lg:px-20 mt-10 flex flex-col md:flex-row gap-4">
        {/* Left Banner */}
        <div
          className="w-full md:w-1/2 h-48 md:h-60 rounded relative"
          style={{
            backgroundImage: `URL(${grocerybanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="absolute text-xl md:text-2xl top-6 left-6 font-bold">
            Fruits & Vegetables
          </h1>
          <span className="absolute top-16 left-6 text-sm text-gray-100 font-medium">
            Get Upto <b>30%</b> Off
          </span>
          <button className="absolute bg-black text-white px-3 py-1 rounded font-medium top-24 left-6">
            Shop Now
          </button>
        </div>

        {/* Right Banner */}
        <div
          className="w-full md:w-1/2 h-48 md:h-60 rounded relative"
          style={{
            backgroundImage: `URL(${grocerybanner2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="absolute text-xl md:text-2xl top-6 left-6 font-bold">
            Freshly Baked Buns
          </h1>
          <span className="absolute top-16 left-6 text-sm text-gray-100 font-medium">
            Get Upto <b>25%</b> Off
          </span>
          <button className="absolute bg-black text-white px-3 py-1 rounded font-medium top-24 left-6">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;



// import React, { useEffect, useState } from 'react';
// import categorycolddrinksjuices from '../assets/featuredimages/category-cold-drinks-juices.jpg';
// import categoryfruitsvegetables from '../assets/featuredimages/category-fruits-vegetables.jpg';
// import categoryinstantfood from '../assets/featuredimages/category-instant-food.jpg';
// import categorysnackmunchies from '../assets/featuredimages/category-snack-munchies.jpg';
// import categorypetcare from '../assets/featuredimages/category-pet-care.jpg';
// import categoryteacoffeedrinks from '../assets/featuredimages/category-tea-coffee-drinks.jpg';
// import categorydairybreadeggs from '../assets/featuredimages/category-dairy-bread-eggs.jpg';

// const cardsData = [
//   { id: 1, image: categorycolddrinksjuices, title: 'Sweet Drinks' },
//   { id: 2, image: categoryfruitsvegetables, title: 'Fruits & Veggies' },
//   { id: 3, image: categoryinstantfood, title: 'Instant Foods' },
//   { id: 4, image: categorysnackmunchies, title: 'Snacks' },
//   { id: 5, image: categorypetcare, title: 'Pet Food' },
//   { id: 6, image: categoryteacoffeedrinks, title: 'Coffee' },
//   { id: 7, image: categorydairybreadeggs, title: 'Dairy' },
//   { id: 8, image: categorydairybreadeggs, title: 'Milk & Eggs' },
// ];

// // Duplicate first few cards at the end to make infinite scroll illusion
// const loopedCards = [...cardsData, ...cardsData.slice(0, 4)];

// const CardLayout = () => {
//   const cardWidth = 260; // width including margin
//   const [index, setIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => prevIndex + 1);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // reset after reaching clone section
//     if (index === cardsData.length) {
//       // wait for the animation to finish before jumping back
//       const timeout = setTimeout(() => {
//         setIsTransitioning(false); // disable animation
//         setIndex(0); // jump back
//       }, 700); // match with transition duration

//       return () => clearTimeout(timeout);
//     } else {
//       setIsTransitioning(true); // enable animation
//     }
//   }, [index]);

//   return (
//     <div className="overflow-hidden w-full max-w-6xl mx-auto p-4">
//       <div className="relative">
//         <div
//           className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
//           style={{ transform: `translateX(-${index * cardWidth}px)` }}
//         >
//           {loopedCards.map((card, idx) => (
//             <div
//               key={`${card.id}-${idx}`} // include idx to keep keys unique even for clones
//               className="min-w-[260px] max-w-[260px] bg-white p-4 m-2 shadow rounded flex flex-col items-center"
//             >
//               <img src={card.image} alt={card.title} className="h-32 w-32 object-cover mb-2" />
//               <h2 className="text-center font-semibold">{card.title}</h2>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardLayout;





