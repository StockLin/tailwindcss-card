import React from 'react';
import { FaHeart, FaEye } from 'react-icons/fa';

const Card = () => {
  return (
    <div className=' w-72 min-h-[10rem] rounded-md overflow-hidden bg-white text-gray-700 shadow-lg hover:-translate-y-4 duration-300'>
      <img className=' w-full h-48 object-cover' src="https://images.pexels.com/photos/6633071/pexels-photo-6633071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
      <div className=' p-4 flex flex-col gap-4'>
        {/* badge */}
        <div className='flex justify-start gap-2 '>
          <span className='p-1 px-2 bg-gray-200 rounded-full text-sm font-bold'>stock ready</span>
          <span className='p-1 px-2 bg-gray-200 rounded-full text-sm font-bold'>official store</span>
        </div>

        {/* title */}
        <h3 className=' text-3xl font-bold overflow-ellipsis overflow-hidden whitespace-nowrap'>Best Headphoneeeeee</h3>

        {/* product-price */}
        <div className=' flex flex-col gap-2'>
          <span className=' text-xl font-bold'>TWD 1000</span>
          <div className=' flex gap-4'>
            <span className=' font-bold text-black/30 line-through'>TWD 2000</span>
            <span className=' p-1 rounded-md text-xs text-white font-bold bg-teal-500'>save 20%</span>
          </div>
        </div>

        {/* product-ratings */}
        <div className=' flex items-center gap-2'>
          <div class="flex items-center">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          </div>
          <span className=' text-sm'>20k reviewer</span>
        </div>

        {/* product-toolbar */}
        <div className=' flex justify-between flex-nowrap gap-2'>
          <button className=' p-2 px-6 rounded-md bg-yellow-500 text-white font-bold tracking-wider  hover:bg-yellow-500/80 duration-300'>Add to cart</button>
          <button className=' flex-grow flex justify-center items-center rounded-md bg-gray-300/50 hover:bg-gray-300/80 duration-300'>
            <FaHeart />
          </button>
          <button className=' flex-grow flex justify-center items-center rounded-md bg-gray-300/50 hover:bg-gray-300/80 duration-300'>
            <FaEye />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card