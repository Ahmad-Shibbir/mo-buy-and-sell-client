import React from 'react';
import click from '../../../assets/click.jpg'

const Dashboard = () => {
    return (
        <div >
            <div className='flex justify-center items-center'>
            <img className='h-[400px] ' src={click} alt="" />
           
            </div>
            <h2 className='text-center text-4xl font-bold text-primary'>Please Click the button to see your result</h2>
        </div>
    );
};

export default Dashboard;