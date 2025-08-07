import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Wishlist = () => {
  const [wishstate, setwishstate] = useState([]);

  useEffect(() => {
    wishapi();
  }, []);

  const wishapi = () => {
    axios
      .get('http://localhost:8080/allwishlistdata')
      .then((res) => {
        if (res.data.status) {
          setwishstate(res.data.cartdata);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };



  const handledelete = (id) => {
    axios.delete(`http://localhost:8080/wishlist/${id}`).then((res) => {
      if (res.status) {
        alert(res.data.msg)
        setwishstate((prev) => prev.filter((item) => item._id !== id));
      } else {
        alert(res.data.msg);
      }
    }).catch(()=>alert('something went wrong'))
  }

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 py-10">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">My Wishlist</h1>
        <p className="text-gray-500">
          There {wishstate.length === 1 ? 'is' : 'are'} {wishstate.length} product{wishstate.length !== 1 && 's'} in this wishlist
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-center">
              <th className="py-3 px-4 border-b">Products</th>
              <th className="py-3 px-4 border-b">Price</th>
              <th className="py-3 px-4 border-b">Status</th>
              <th className="py-3 px-4 border-b">Action</th>
              <th className="py-3 px-4 border-b">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishstate.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No items in your wishlist.
                </td>
              </tr>
            ) : (
              wishstate.map((item, index) => (
                <tr key={index} className="text-gray-700 text-center">
                  <td className="py-3 px-4 border-b">{item.name}</td>
                  <td className="py-3 px-4 border-b">{item.price}</td>
                  <td className="py-3 px-4 border-b">{item.status}</td>
                  <td className="py-3 px-4 border-b">Add to cart</td>
                  <td className="py-3 px-4 border-b">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm transition"
                      onClick={() => handledelete(item._id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
