import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const SmallNav = ({ button, button2, onclickk }) => {


    // const navigate=useNavigate()
    const location = useLocation();

    const pathSegments = location.pathname.split('/').filter(Boolean);
    const pageTitle = pathSegments[pathSegments.length - 1];


    const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);


    const excludedPages = ['reviews', 'orders', 'dashboard', 'customers'];
    // const excludebuttonpage= ['sellers', 'dashb']




    return (
        <div>
            <div className='flex flex-row justify-between '>

                <input
                    type="text"
                    placeholder='search'
                    className="bg-white border border-gray-300 text-gray-900 rounded-md px-2 py-2 mb-10 focus:outline-none focus:ring-4 focus:ring-green-200"
                />

                <div className='flex flex-row gap-4 justify-between '>
                    <IoMdNotificationsOutline size={27} className='mt-1' />
                    <CgProfile size={36} />

                </div>
            </div>
            <div className="mb-4 flex-row flex justify-between items-center">
                <div>

                    <h1 className="text-2xl font-semibold">{capitalize(pageTitle)}</h1>
                    <p className="text-gray-600 mt-1">
                        {pathSegments.map((seg, i) => (
                            <span key={i}>
                                {i !== 0 && ' / '}
                                {capitalize(seg)}
                            </span>
                        ))}
                    </p>
                </div>
                <div>
                    {!excludedPages.includes(pageTitle) && (
                        <button className='bg-green-500 px-4 text-white py-2 rounded-xl'  onClick={onclickk}>{button}</button>
                    )}
                    {pageTitle === 'sellers' && 'dashboard' && button2 && (
                        <button className='bg-blue-500 px-4 text-white py-2 rounded-xl'>
                            {button2}
                        </button>
                    )}
                </div>
            </div>

        </div>
    )
}

export default SmallNav
