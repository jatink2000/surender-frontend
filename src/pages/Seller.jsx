import React from 'react'
import SmallNav from '../components/SmallNav'
import { RiFunctionFill } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";

const Seller = () => {
  return (
    <div>
      <SmallNav button={<RiFunctionFill />} button2={<TfiMenuAlt />}/>
    </div>
  )
}

export default Seller
