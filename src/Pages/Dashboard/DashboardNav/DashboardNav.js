import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';

const DashboardNav = () => {
    const {user}= useContext(AuthContext)
    const [isAdmin]=useAdmin(user.email)
    return (
        <div>
            {
                isAdmin && <>
                <Link to='/dashboard/allusers'><button className='btn btn-primary'>All User</button></Link>
                </>
            }
        </div>
    );
};

export default DashboardNav;