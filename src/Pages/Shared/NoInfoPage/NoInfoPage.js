import React from 'react';
import empty from '../../../assets/empty.jpg'

const NoInfoPage = ({message}) => {
    return (
        <div >
        <div className='flex justify-center items-center'>
        <img className='h-[400px] ' src={empty} alt="" />
       
        </div>
        <h2 className='text-center text-4xl font-bold text-primary'>{message}</h2>
    </div>
    );
};

export default NoInfoPage;