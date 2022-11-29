import React from 'react';
import { Link } from 'react-router-dom';
import page_not_found from '../../assets/page-not_found.jpg'
const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
             <div >
                
                <img className='lg:h-[600px] ' src={page_not_found} alt="" />
                <div className='flex justify-center items-center'>
                <Link to='/'><button className='btn btn-primary'>Go Home</button></Link>
                </div>
            </div>         
            
        </div>
        </div>
    );
};

export default ErrorPage;