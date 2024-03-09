import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaCartArrowDown } from "react-icons/fa";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { CloseButton } from "@chakra-ui/close-button"
import { IoBagCheckOutline } from "react-icons/io5";
//import { useRef } from 'react';

const Navbar = () => {
    const togglecart = () =>{
        if (ref.current.classList.contains('translate-x-full')){
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (ref.current.classList.contains('translate-x-0')){
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }
    const ref = useRef()
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl'>
        <div className='logo mx-5'>
            <Link href={'/'}><Image width={200} height={20} src='/logo.jpeg' alt='' /></Link> 
        </div>
        <div className="nav"></div>
            <ul className='flex items-center space-x-2 font-bold md:text-sm'>
                <Link href={"/tshirts"} legacyBehavior><a><li>Tshirts</li></a></Link>
                <Link href={"/hoodies"} legacyBehavior><a><li>Hoodies</li></a></Link>
                <Link href={"/stickers"} legacyBehavior><a><li>Stickers</li></a></Link>
                <Link href={"/mugs"} legacyBehavior><a><li>Mugs</li></a></Link>
            </ul>
        <div onClick = {togglecart} className="cart absolute right-0 top-4 mx-5">

            <FaCartArrowDown className='text-3xl md:text-2xl'/>
        </div>
        <div ref={ref} className='w-72 h-full sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full'>
            <h2 className='font-bold text-xl text-center'>shopping cart</h2>
            <span onClick = {togglecart} className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-500'><CloseButton /></span>
            <ol className='list-decimal font-semibold'>
                <li>
                <div className='item flex'>
                    <div className='w-2/3 font-semibold'>Tshirt - wear the code</div>
                    <div className='flex font-semibold items-center justify-center w-1/3'> <CiCircleMinus className='mx-1 text-3xl'/> 1 <CiCirclePlus className='mx-1 text-3xl' />  </div>
                </div>
                </li>
            </ol>
            <div className='flex'>
                <button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg"> <IoBagCheckOutline className='m-1'/> Checkout</button>
                <button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-pink-600 rounded text-lg"> <IoBagCheckOutline className='m-1'/> Clear Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
