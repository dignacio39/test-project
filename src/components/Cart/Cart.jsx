import React from 'react'
import ProductIdentity from '../ProductIdentity/ProductIdentity'
import {RxCross2} from 'react-icons/rx'
import { BiArrowBack } from 'react-icons/bi'
import {IoLocationOutline} from 'react-icons/io5'
import { BsTelephone } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { AiOutlineEdit } from 'react-icons/ai'


function Cart() {
  return (
    <section className='h-auto px-11'>
        <ProductIdentity/>
        <div class="container mx-auto mt-10">
            <div class="xl:flex shadow-md my-10">
                <div class="w-4/4 xl:w-3/4 bg-white px-10 py-10">
                    <div class="flex justify-between border-b pb-8">
                        
                    <a href="*" class="flex font-semibold text-2xl mt-10 items-center">
                        <BiArrowBack className='fill-current mr-2'/>
                        Cart
                    </a>
                    </div>
                    <div class="flex mt-10 mb-5">
                        <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Item</h3>
                        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
                        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
                        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5"> </h3>

                    </div>
                    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div class="flex w-2/6">
                            <div class="w-20">
                            <img class="h-24" src="" alt=""/>
                            </div>
                            <div class="flex flex-col  ml-4 flex-grow">
                            <span class="font-bold text-xl">ROYAL BLACK Ultra Light Truck Radial Royal Commercial 155R12</span>
                            <span class="text-zinc-500 text-xs h-max w-max">SKU: P07-A1-B009-0001</span>
                            </div>
                        </div>
                        <span class="text-center w-1/6 font-semibold text-sm">$400.00</span>
                        <div class="flex justify-center w-1/6">
                            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                            </svg>

                            <input class="mx-2 border text-center w-8" type="text" value="1"/>

                            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                            </svg>
                        </div>
                        <span class="text-center w-1/6 font-semibold text-sm">$400.00</span>
                        <div>
                            <span className='text-center w-1/6 font-semibold text-sm'><RxCross2 className='h-6 w-6 hover:text-red-400 object-center'/></span>
                        </div>
                    </div>
                    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div class="flex w-2/6">
                            <div class="w-20">
                            <img class="h-24" src="" alt=""/>
                            </div>
                            <div class="flex flex-col  ml-4 flex-grow">
                            <span class="font-bold text-xl">ROYAL BLACK Ultra Light Truck Radial Royal Commercial 155R12</span>
                            <span class="text-zinc-500 text-xs h-max w-max">SKU: P07-A1-B009-0001</span>
                            </div>
                        </div>
                        <span class="text-center w-1/6 font-semibold text-sm">$400.00</span>
                        <div class="flex justify-center w-1/6">
                            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                            </svg>

                            <input class="mx-2 border text-center w-8" type="text" value="1"/>

                            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                            </svg>
                        </div>
                        <span class="text-center w-1/6 font-semibold text-sm">$400.00</span>
                        <div>
                            <span className='text-center w-1/6 font-semibold text-sm'><RxCross2 className='h-6 w-6 hover:text-red-400 object-center'/></span>
                        </div>
                    </div>
                    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div class="flex w-2/6">
                            <div class="w-20">
                            <img class="h-24" src="" alt=""/>
                            </div>
                            <div class="flex flex-col  ml-4 flex-grow">
                            <span class="font-bold text-xl">ROYAL BLACK Ultra Light Truck Radial Royal Commercial 155R12</span>
                            <span class="text-zinc-500 text-xs h-max w-max">SKU: P07-A1-B009-0001</span>
                            </div>
                        </div>
                        <span class="text-center w-1/6 font-semibold text-sm">$400.00</span>
                        <div class="flex justify-center w-1/6">
                            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                            </svg>

                            <input class="mx-2 border text-center w-8" type="text" value="1"/>

                            <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                            </svg>
                        </div>
                        <span class="text-center w-1/6 font-semibold text-sm">$400.00</span>
                        <div>
                            <span className='text-center w-1/6 font-semibold text-sm'><RxCross2 className='h-6 w-6 hover:text-red-400 object-center'/></span>
                        </div>
                    </div>
                </div>
                <div id="summary" class="w-4/4 lg:w-1/4 py-10">
                    <div className='border rounded-xl border-zinc-600 px-5 py-5 mt-10'>
                        <div className='flex justify-between items-center pb-5'>
                        <h3 className='p-1 font-semibold text-lg text-zinc-600'>Client</h3>
                        <span className=''><AiOutlineEdit className='text-yellow-700 h-6 w-6'/></span>
                        </div>
                        <div className=''>
                            <div className='flex pb-3'>
                                <IoLocationOutline className='h-6 w-1/12'/>
                                <label className='font-semi-bold text-md w-11/12'>2715 Dr. San Jose, South Dakota 83475, USA</label>
                            </div>
                            <div className='flex pb-3'>
                                <BsTelephone className='h-5 w-1/12'/>
                                <label className='font-semi-bold text-md w-11/12'>(219) 555-0114</label>
                            </div>
                            <div className='flex pb-3'>
                                <CiMail className='h-6 w-1/12'/>
                                <label className='font-semi-bold text-md w-11/12'>bill.sander@example.com</label>
                            </div>
                        </div>
                    
                    </div>

                    <div className='border rounded-xl border-zinc-600 px-5 py-5 mt-10'>
                        <div className='xl:flex items-center pb-5 '>
                            <h1 class="font-semibold text-2xl">Order Summary</h1>
                            <span className='font-light text-2xl text-zinc-500 xl:pl-2'>(4 Items)</span>
                        </div>
                        <div className=''>
                            <div className='flex justify-between items-center pb-3'>
                                <label className='font-semi-bold text-md'>Sub Total</label>
                                <span>$1600</span>
                            </div>
                            <div className='flex justify-between items-center pb-3 border-b border-zinc-300 mb-5'>
                                <label className='font-semi-bold text-md'>Shipping Charge</label>
                                <span>$50</span>
                            </div>
                        </div>
                        <div className='flex  justify-between items-center pb-5'>
                            <h1 class="font-semibold text-2xl">Total</h1>
                            <span className='font-semibold text-2xl  pl-2'>$1650</span>
                        </div>
                        <div>
                            <input 
                                className='
                                    shadow
                                    appearance-none 
                                    border 
                                    rounded-lg
                                    w-full
                                    py-2 
                                    px-3 
                                    text-gray-700 
                                    leading-tight 
                                    focus:outline-none 
                                    focus:shadow-outline
                                    font-light
                                '
                                type="text" 
                                placeholder='Enter your coupon code here'
                            />
                        </div>
                        <div className='pt-5'>
                            <button className='w-full px-3 py-2 border rounded-lg bg-[#0e0c3a] text-white font-semibold'>Order</button>
                        </div>
                    
                    </div>
                    {/* 
                    <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                    <div class="flex justify-between mt-10 mb-5">
                        <span class="font-semibold text-sm uppercase">Items 3</span>
                        <span class="font-semibold text-sm">590$</span>
                    </div>
                    <div>
                        <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                        <select class="block p-2 text-gray-600 w-full text-sm">
                            <option>Standard shipping - $10.00</option>
                        </select>
                    </div>
                    <div class="py-10">
                        <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                        <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full"/>
                    </div>
                    <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
                    <div class="border-t mt-8">
                        <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Total cost</span>
                            <span>$600</span>
                        </div>
                        <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cart