import React from 'react';
import shopping from './../../assets/shopping.svg'

const Topbanner = () => {
    return (
        <div className="hero bg-white ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={shopping} className=" w-full rounded-lg " alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Buy and Sell your Used Phone Easily! </h1>
                    <p className="py-6">You can buy and sell used phone in good price. You and your Buyer/seller will negotiate every thing.we are here for just to bring both buyer and seller in the same platform.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Topbanner;