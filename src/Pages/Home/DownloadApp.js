import React from 'react';

const DownloadApp = () => {
    return (
        <div className="  card grid lg:grid-cols-2 m-6 p-12 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="https://static.javatpoint.com/blog/images/advantages-and-disadvantages-of-mobile-phones2.png" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className='h-96'>
                <div>
                    <h1 className='font-bold text-primary text-5xl'>Get Our App!</h1>
                    <p className=' mt-4  text-xl'>To experience more feature, download our app from play store and app store</p>
                </div>
            <div className="  grid grid-cols-2 card-body items-center text-center">
                <img src="https://245.tech/wp-content/uploads/2021/01/Google-Play-vs-Apple-Store-2.png" alt="" />
                <img className='60' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="" />
            </div>
            </div>
        </div>
    );
};

export default DownloadApp;