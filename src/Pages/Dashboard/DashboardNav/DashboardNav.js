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
        <div>
            {
                isAdmin && <>
                <Link to='/dashboard/allusers'><button className='btn btn-primary'>All User</button></Link>
                </>
            }
            {
                isBuyer && <>
                <Link to='/dashboard/myorders'><button className='btn btn-primary'>All orders for buyer</button></Link>
                </>
            }
            {
                isSeller && <>
                <Link to='/dashboard/my-products'><button className='btn btn-primary'>All products for seller</button></Link>
                </>
            }
            
        </div>
    );
};

export default DashboardNav;