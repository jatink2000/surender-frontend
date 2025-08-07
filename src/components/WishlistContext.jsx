// import React, { createContext, useState } from 'react';

// export const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlist, setWishlist] = useState(() => {
//     return JSON.parse(localStorage.getItem('wishlist')) || [];
//   });

//   const addToWishlist = (product) => {
//     if (!wishlist.find(item => item.id === product.id)) {
//       const newWishlist = [...wishlist, product];
//       setWishlist(newWishlist);
//       localStorage.setItem('wishlist', JSON.stringify(newWishlist));
//     }
//   };

//   const removeFromWishlist = (id) => {
//     const updated = wishlist.filter(item => item.id !== id);
//     setWishlist(updated);
//     localStorage.setItem('wishlist', JSON.stringify(updated));
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };