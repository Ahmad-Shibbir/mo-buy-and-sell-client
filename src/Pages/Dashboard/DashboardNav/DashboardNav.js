import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useBuyer from '../../../hooks/useBuyer';
import useSeller from '../../../hooks/useSeller';

const DashboardNav = () => {
    const {user}= useContext(AuthContext)
    const [isAdmin]=useAdmin(user.email)
    const [isBuyer]=useBuyer(user.email)
    const [isSeller]=useSeller(user.email)
    return (
        <div className='flex gap-6 mb-8 justify-center items-center bg-gray-300 py-6'>
            {
                isAdmin && <>
                <Link to='/dashboard/allusers'><button className='btn btn-outline '>All User</button></Link>
                <Link to='/dashboard/all-sellers'><button className='btn btn-outline '>All Sellers</button></Link>
                <Link to='/dashboard/all-buyers'><button className='btn btn-outline '>All Buyers</button></Link>
                </>
            }
            {
                isBuyer && <>
                <Link to='/dashboard/myorders'><button className='btn btn-outline '>My order list</button></Link>
                </>
            }
            {
                isSeller && <>
                <Link to='/dashboard/my-products'><button className='btn btn-outline '>My Products</button></Link>
                <Link to='/dashboard/add-product'><button className='btn btn-outline '>Add A product</button></Link>
                </>
            }
            
        </div>
    );
};

export default DashboardNav;