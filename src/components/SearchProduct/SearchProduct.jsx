import React from 'react'

import{ AiOutlineDown} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'
import { BsHeart } from 'react-icons/bs'
import LOGO from './../../assets/logo.png'
import ProductIdentity from '../ProductIdentity/ProductIdentity'

function SearchProduct() {
  return (
    <section className='h-auto px-11'>
      <ProductIdentity/>
      <div className='border border-slate-400 rounded-lg px-10 mx-24'>
        <h6 className='text-2xl font-bold text-slate-800 pb-3 px-10 pt-4'>Search for Products</h6>
        <div className='grid grid-cols-2 border-b-4'>
          <div className='px-12'>
            <span><BiSearch/></span>
            <input type="text" />
          </div>
          <div className='flex justify-end py-4'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Search</button>
          </div>
        </div>
        <div className='grid grid-cols-5 gap-2'>
          <div className='py-8 font-normal text-slate-600'><label>Category</label></div>
          <div  className='py-8 font-normal text-slate-600'><label>Classification</label></div>
          <div className='py-8 font-normal text-slate-600'><label>Brand</label></div>
          <div className='py-8 font-normal text-slate-600'><label>Type</label></div>
          <div className='py-8 font-normal text-slate-600'><label>Year</label></div>
        </div>
      </div>
      <div className='grid grid-cols-2 pt-16 px-10 mx-24 content-center'>
          <div className='content-center'><h6 className='text-2xl font-bold text-slate-800'>All Products</h6></div>
          <div>
            <div className='flex justify-end'>
              <div className="flex-none w-20 h-20">
                Showing
              </div>
              <div className="flex-none w-14 h-14">
                <label>20/00</label>
              </div>
              <div className="flex-none w-7 h-7 justify-center flex">
                <span><AiOutlineDown className='pt-2'/></span>
              </div>
            </div>
          </div>
      </div>
      <div className='grid grid-cols-4 gap-3 pt-5 mx-24 pb-10'>
      <div className='h-auto w-auto border border-slate-400 border-solid rounded-md '>
        <div className='grid grid-rows-2'>
          <div>
            <img className='object-fill h-32 rounded-t-lg' src={LOGO} alt="" />
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div className='px-10 py-10'>
            <label className='text-slate-800 text-center font-bold'>$300</label>
          </div>
          <div className='flex justify-end px-10 py-10'>
            <span><BsHeart className='h-5 w-5'/></span>
          </div>
        </div>
      </div>
      <div className='h-auto w-auto border border-slate-400 border-solid rounded-md '>
        <div className='grid grid-rows-2'>
          <div>
            <img className='object-fill h-32 rounded-t-lg' src={LOGO} alt="" />
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div className='px-10 py-10'>
            <label className='text-slate-800 text-center font-bold'>$300</label>
          </div>
          <div className='flex justify-end px-10 py-10'>
            <span><BsHeart className='h-5 w-5'/></span>
          </div>
        </div>
      </div>
      <div className='h-auto w-auto border border-slate-400 border-solid rounded-md '>
        <div className='grid grid-rows-2'>
          <div>
            <img className='object-fill h-32 rounded-t-lg' src={LOGO} alt="" />
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div className='px-10 py-10'>
            <label className='text-slate-800 text-center font-bold'>$300</label>
          </div>
          <div className='flex justify-end px-10 py-10'>
            <span><BsHeart className='h-5 w-5'/></span>
          </div>
        </div>
      </div>
      <div className='h-auto w-auto border border-slate-400 border-solid rounded-md '>
        <div className='grid grid-rows-2'>
          <div>
            <img className='object-fill h-32 rounded-t-lg' src={LOGO} alt="" />
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div className='px-10 py-10'>
            <label className='text-slate-800 text-center font-bold'>$300</label>
          </div>
          <div className='flex justify-end px-10 py-10'>
            <span><BsHeart className='h-5 w-5'/></span>
          </div>
        </div>
      </div>
      <div className='h-auto w-auto border border-slate-400 border-solid rounded-md '>
        <div className='grid grid-rows-2'>
          <div>
            <img className='object-fill h-32 rounded-t-lg' src={LOGO} alt="" />
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div className='px-10 py-10'>
            <label className='text-slate-800 text-center font-bold'>$300</label>
          </div>
          <div className='flex justify-end px-10 py-10'>
            <span><BsHeart className='h-5 w-5'/></span>
          </div>
        </div>
      </div>
      <div className='h-auto w-auto border border-slate-400 border-solid rounded-md '>
        <div className='grid grid-rows-2'>
          <div>
            <img className='object-fill h-32 rounded-t-lg' src={LOGO} alt="" />
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className='grid grid-cols-2'>
          <div className='px-10 py-10'>
            <label className='text-slate-800 text-center font-bold'>$300</label>
          </div>
          <div className='flex justify-end px-10 py-10'>
            <span><BsHeart className='h-5 w-5'/></span>
          </div>
        </div>
      </div>
      
      </div>


    </section>
  )
}

export default SearchProduct