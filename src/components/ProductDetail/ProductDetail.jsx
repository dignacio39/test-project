import React from 'react'
import ProductIdentity from '../ProductIdentity/ProductIdentity'
import SAMPLETIRE from './../../assets/sampletire.jpg'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'
import { BsHeart, BsShare } from 'react-icons/bs'

function ProductDetail() {
  return (
    <section className='h-auto px-11'>
        <ProductIdentity/>
        <div className='grid grid-cols-1  px-1 mx-2 xl:px-10 xl:mx-24'>
          <div className='pt-10 pb-5'>
            <label>Home  Category Product Detail </label>
          </div>
          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-1'>
              <div className='grid grid-row-3 grid-flow-col col-span-2 gap-2'>
                <div className='flex justify-end'>
                  <img className='h-28 w-28' src={SAMPLETIRE} alt="" />          
                </div>
                <div className='flex justify-end'>
                  <img className='h-28 w-28' src={SAMPLETIRE} alt="" />          
                </div>
                <div className='flex justify-end'>
                  <img className='h-28 w-28' src={SAMPLETIRE} alt="" />          
                </div>
                <div className='row-span-3'>
                  <img className='h-full w-96' src={SAMPLETIRE} alt="" />
                </div>  
              </div>
              <div className='grid grid-rows col-span-2'>
                <div>
                  <h6 className='text-2xl font-bold text-zinc-800'>
                    ROYAL BLACK Ultra Light Truck Radial Royal Commercial 155R12
                  </h6>
                  <h1 className='text-zinc-500'>SKU: P07-A1-B009-0001</h1>
                  <h1 className='text-zinc-500'>Supplier #REPG730125</h1>
                </div>
                <div>
                  <div><label  className='text-zinc-500'>Price: <span className='text-4xl font-bold text-zinc-800'>$450</span></label></div>
                </div>
                <div className='grid grid-cols-3'>
                  <div className='flex justify-center items-center'>
                    <label> Product Quantity:</label>
                  </div>
                  <div className='flex justify-center items-center'>
                    <div className='flex justify-between items-center border-2 rounded-md'>
                      <BiMinus />
                      <input className='h-10 w-10 text-center' type="number" />
                      <BsPlus/> 
                    </div>
                  </div>
                  <div className='flex justify-center items-center'>
                    <label className='p-0 text-green-700'>(10 pcs in stock)</label>
                  </div>
                </div>
                <div className='content-end'>
                  <button className="h-10 bg-[#D9CB50] hover:bg-[#F0E161] text-white font-bold py-2 px-4 border border-[#D9CB50] rounded">Add to cart</button>
                </div>
              </div>
              <div className='flex justify-end'>
                <span className='py-3 px-2'><BsShare className='h-5 w-5'/></span>
                <span className='py-3 px-2' ><BsHeart className='h-5 w-5'/></span>
              </div>
            </div>
          </div>
          <div className='pt-10'>
            <div className='pb-5'>
              Product Highlights
            </div>
            <div className='grid grid-cols-3 border border-slate-400 rounded-lg'>
              <div>
                <ul className='px-10 py-5'>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul>
              </div>
              <div className='cols-span-2'>
                <ul className='px-10 py-5'>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                  <li>Lorem</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-20'>
            <div className='py-5 px-5'>
              <div>
                <h6 className='font-semibold text-2xl pb-5 text-slate-700'>Description</h6>
              </div>
              <div>
              <ul className='list-disc ml-5'>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut perspiciatis ipsum nulla dolore tempore tempora</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut perspiciatis ipsum nulla dolore tempore tempora</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo vero dolor sed iusto debitis numquam ut architecto labore, ducimus, blanditiis accusantium similique dicta voluptate omnis consectetur. Sapiente, fuga veritatis.</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut perspiciatis ipsum nulla dolore tempore tempora</li>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut perspiciatis ipsum nulla dolore tempore tempora</li>
              </ul>
              </div>
            </div>
            <div className='border border-slate-400 rounded-lg'>
              <div className='px-5 py-5'>
                <h6 className='font-semibold text-xl pb-2 text-slate-700'>Warrenty</h6>
                <p className='pb-1 text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatibus cum totam nihil excepturi</p>
                <label className='font-lg font-semibold text-slate-600'>Checkout </label>
                <a className='text-yellow-600 no-underline hover:underline underline-offset-2' href="*"> Warranty Policy</a>
              </div>
              <div className='px-5 pb-5'>
                <h6 className='font-semibold text-xl pb-2 text-slate-700'>Shipping Policy</h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatibus cum totam nihil excepturi</p>
                <label className='font-lg font-semibold text-slate-600'>Checkout </label>
                <a className='text-yellow-600 no-underline hover:underline underline-offset-2' href="*"> Shipping Policy</a>

              </div>
              <div className='px-5 pb-5 '>
                <h6 className='font-semibold text-xl pb-2 text-slate-700'>Easy Return Policy</h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatibus cum totam nihil excepturi</p>
                <label className='font-lg font-semibold text-slate-600'>Checkout </label>
                <a className='text-yellow-600 no-underline hover:underline underline-offset-2' href="*"> Easy Return Policy</a>

              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ProductDetail