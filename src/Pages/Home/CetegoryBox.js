import React from 'react';
import { Link } from 'react-router-dom';

const CetegoryBox = () => {
    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-12 bg-primary '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo-2.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    
                    <Link to='/' className="card-actions">
                        <button className="btn btn-primary">Samsung</button>
                    </Link>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://1000logos.net/wp-content/uploads/2017/02/iPhone-logo.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    
                    <Link to='/' className="card-actions">
                        <button className="btn btn-primary">Aple</button>
                    </Link>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUsMr1p0qWqezgEDN9NJUha7mWgCbV0W7pfr8Y74qXCltdTh_oOvfXi-aYCvUPAbUvx8&usqp=CAU" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    
                    <Link to='/'className="card-actions">
                        <button className="btn btn-primary">Xiaomi</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CetegoryBox;