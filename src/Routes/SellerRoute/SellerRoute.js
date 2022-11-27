import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useSeller from '../../hooks/useSeller';



const SellerRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isSeller,isSellerLOding]= useSeller(user?.email);
    const location= useLocation();

    if(loading || isSellerLOding){
        return <progress className="progress w-56"></progress>;
    }

    if(user && isSeller){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default SellerRoute;